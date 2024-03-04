import { ReactNode, createContext, useEffect, useState } from "react";
import i18n from "../lib/i18next";
import { gamesPT_BR } from '../utils/games_pt_br';
import { gamesEN_US } from '../utils/games_en_us';

interface Character {
  id: string;
  name: string;
  type: string;
  age: number;
  slug: string;
  plot: string;
}

interface Requirement {
  id: number;
  name: string;
  os: string;
  processor: string;
  RAM: string;
  graphics_card: string;
}

export interface Game {
  id: string;
  title: string;
  images: string[];
  summary: string;
  description: {
    type: string;
    content: string;
  }[];
  characters: Character[]
  requirements: Requirement[];
}

interface LayoutContextType {
  lang: string
  selectedGame: Game | null;
  loadedData: Game[]
  changeLanguage: (data: string) => void
  changeSelectedGame: (data: Game | null) => void
}

interface LayoutContextProviderProps {
  children: ReactNode
}

export const LayoutContext = createContext({} as LayoutContextType)

export function LayoutContextProvider({ children }: LayoutContextProviderProps) {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [lang, setLang] = useState(() => {
    const storedStateAsJSON = localStorage.getItem('@lang')
    if (storedStateAsJSON) {
      return (JSON.parse(storedStateAsJSON))
    }
    return 'br'
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(lang)
    localStorage.setItem('@lang', stateJSON)
  }, [lang])

  function changeLanguage(data: string) {
    setLang(data)
    i18n.changeLanguage(lang)
  }

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  function changeSelectedGame(data: Game | null) {
    setSelectedGame(data)
  }

  const loadedData: Game[] = lang === "br" ? gamesPT_BR : lang === "en" ? gamesEN_US : gamesPT_BR

  return (
    <LayoutContext.Provider
      value={{
        lang,
        loadedData,
        selectedGame,
        changeLanguage,
        changeSelectedGame,
      }}>
      {children}
    </LayoutContext.Provider>
  )
}