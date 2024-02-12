import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { LayoutContext } from "../contexts/LayoutContext";
import * as Dialog from "@radix-ui/react-dialog";

import GameCard from "./GameCard";
import GameModal from "./GameModal";

export function Games() {
  const { loadedData } = useContext(LayoutContext)
  const { t } = useTranslation()

  return (
    <div className="relative flex flex-col h-full w-full bg-gradient-to-br from-green-950/80 from-40% to-green-primary/40  backdrop-blur-lg md:p-8 gap-4 overflow-hidden items-center justify-start">
      <h3 className="flex uppercase text-3xl md:text-5xl text-green-primary-light justify-center font-jomhuria tracking-wider">
        {t('header:app.games')}
      </h3>

      <Dialog.Root>
        <div className="w-full relative p-6 grid grid-cols-autofit md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-x-auto scrollbar-thin">
          {loadedData.map((game) => (
            <Dialog.Trigger key={game.id}>
              <GameCard gameInfo={game} />
            </Dialog.Trigger>
          ))}

          <GameModal />
        </div>
      </Dialog.Root >
    </div >
  )
}