import { GameController, Ghost, List, Sword, X } from '@phosphor-icons/react'
import { useContext, useEffect, useState } from 'react'
import { LayoutContext } from '../contexts/LayoutContext'
import { useTranslation } from 'react-i18next'
import { motion } from "framer-motion";

import * as Popover from '@radix-ui/react-popover';

import fire from '../assets/fire.gif'
import sword from '../assets/sword.svg'

export function Header() {
  const { lang, changeLanguage } = useContext(LayoutContext)
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [popOverOpen, setPopOverOpen] = useState(false);
  const { t } = useTranslation()

  function handleChangeLanguage(e: any) {
    changeLanguage(e.target.value)
  }

  function handleOpenPopOver() {
    setPopOverOpen(!popOverOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-20 flex align-center justify-end bg-green-primary/90 backdrop-blur-lg w-full p-4 md:px-12">
      <a href="#home" title="Home" className='flex w-full min-h-[10rem] overflow-hidden absolute left-0 top-0 -z-10'>
        <div>
          <motion.img
            src={fire}
            alt="1337games logo"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8
              , repeat: Infinity
            }}
            className='rounded-full blur-sm py-2 absolute -top-10 left-6 w-16 h-[12rem] hue-rotate-90 scale-[1] items-center -rotate-45'
          />
          <motion.img
            src={sword}
            alt="1337games logo"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            animate={{ opacity: 1, x: [-150, 0], y: [-150, 0] }}
            className='h-full max-h-[8rem] hue-rotate-30 items-center'
          />
        </div>
        <strong className="flex items-start bg-gradient-to-r from-emerald-600 via-green-500 to-slate-400 text-transparent bg-clip-text font-jomhuria -ml-12 h-full py-4 tracking-widest text-5xl md:text-6xl drop-shadow-[0_0px_10px_#223429]">1337 Games</strong>
      </a>
      <div className='flex justify-between gap-4 float-right'>
        <select
          className="flex bg-green-primary-dark p-2 h-full w-full rounded-full appearance-none cursor-pointer selection:bg-slate-300"
          onChange={handleChangeLanguage}
          name="lang"
          value={lang}
        >
          <option className="flex p-2" value="en">
            EN-US
          </option>
          <option className="flex p-2" value="br">
            PT-BR
          </option>
        </select>
        {isSmallScreen ? (
          <Popover.Root open={popOverOpen} onOpenChange={handleOpenPopOver}>
            <Popover.Trigger asChild>
              <button className="flex hover:text-green-secondary items-center transition-colors duration-200 " >
                <List size={32} />
              </button>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className=" z-20 flex p-4 flex-col bg-green-primary-dark rounded-md min-w-[10rem]" sideOffset={16}>
                <Popover.Close className="flex justify-end hover:text-green-secondary" >
                  <X size={24} />
                </Popover.Close>
                <nav className='flex flex-col gap-4 items-center bg-green-primary-dark text-green-primary-light rounded-full text-xs md:text-sm'>
                  <a href="#games" title="Jogos" className="flex align-center gap-2 justify-between w-full hover:text-green-secondary-hover duration-200" onClick={handleOpenPopOver}>
                    <GameController size={24} weight="bold" />
                    <span className="self-center w-full uppercase text-lg">{t('header:app.games')}</span>
                  </a>
                  <a href="#about" title="Jogos" className="flex align-center gap-2 justify-between w-full hover:text-green-secondary-hover duration-200" onClick={handleOpenPopOver}>
                    <Sword size={24} weight="bold" />
                    <span className="self-center  w-full uppercase text-lg">{t('header:app.about')}</span>
                  </a>
                  <a href="#contact" title="Jogos" className="flex align-center gap-2 justify-between w-full hover:text-green-secondary-hover duration-200" onClick={handleOpenPopOver}>
                    <Ghost size={24} weight="bold" />
                    <span className="self-center  w-full uppercase text-lg">{t('header:app.contact')}</span>
                  </a>
                </nav>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        ) : (
          <nav className='flex gap-4 md:gap-8 items-center bg-green-primary-dark text-green-primary-light rounded-full py-2 px-4 text-xs md:text-sm'>
            <a href="#games" title="Jogos" className="flex align-center gap-2 hover:text-green-secondary-hover duration-200">
              <GameController size={24} weight="bold" className="w-4 h-4 md:w-6 md:h-6" />
              <span className="self-center uppercase">{t('header:app.games')}</span>
            </a>
            <a href="#about" title="Jogos" className="flex align-center gap-2 hover:text-green-secondary-hover duration-200">
              <Sword size={24} weight="bold" className="w-4 h-4 md:w-6 md:h-6" />
              <span className="self-center uppercase">{t('header:app.about')}</span>
            </a>
            <a href="#contact" title="Jogos" className="flex align-center gap-2 hover:text-green-secondary-hover duration-200">
              <Ghost size={24} weight="bold" className="w-4 h-4 md:w-6 md:h-6" />
              <span className="self-center uppercase">{t('header:app.contact')}</span>
            </a>
          </nav>
        )}

      </div>
    </header>
  )
}

