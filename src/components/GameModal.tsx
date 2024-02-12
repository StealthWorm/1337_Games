import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import { Game, LayoutContext } from "../contexts/LayoutContext";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "@phosphor-icons/react";

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function GameModal() {
  const { selectedGame, changeSelectedGame } = useContext(LayoutContext)
  const { t } = useTranslation()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: () => {
        if (window.innerWidth <= 768) {
          return 1
        } else {
          return 3
        }
      },
      spacing: 16
    }
  });

  function handleSelectGame(data: Game | null) {
    changeSelectedGame(data)
  }

  if (!selectedGame) {
    return null
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/50 inset-0 fixed backdrop-blur-md z-30" />

      <Dialog.Content
        onInteractOutside={() => handleSelectGame(null)}
        className="flex flex-col inset-0 z-50 fixed w-full h-full rounded-lg  m-auto shadow-lg lg:max-w-[calc(100vw/2)] md:max-h-[calc(100vh-4rem)] scrollbar-thin"
      >
        <AnimatePresence>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: .5 }}
            className="flex flex-col h-full w-full inset-0 relative">

            {/* Header */}
            <div className="flex justify-between sticky top-0 bg-gradient-to-b from-black/90 from-[60%] z-20 p-6 items-center">
              <Dialog.Title className="flex w-full text-4xl font-jomhuria border-b-2 tracking-wider">
                {selectedGame.title}
              </Dialog.Title>

              <Dialog.Close asChild>
                <button
                  className="flex right-0 justify-end hover:text-green-secondary transition-colors duration-200 top-0"
                  aria-label="Close"
                  onClick={() => handleSelectGame(null)}
                >
                  <X size={24} weight="bold" />
                </button>
              </Dialog.Close>
            </div>

            {/* Body */}
            <div className="flex flex-col p-8 space-y-6 h-full overflow-y-auto scrollbar scrollbar-thin">
              <Dialog.Description className="flex flex-col space-y-4 border-b pb-4">
                {selectedGame.description.map(line => {
                  if (line.type === 'paragraph') {
                    return <span className="text-base" key={line.content}>{line.content}</span>
                  } else if (line.type === 'title') {
                    return <strong className="text-lg" key={line.content}>{line.content}</strong>
                  }
                })}
              </Dialog.Description>

              {/* REQUIREMENTS  */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 space-y-4 md:space-y-0 border-b pb-4">
                <table className="table-auto flex flex-col bg-green-secondary/30 backdrop-blur-sm h-full w-full rounded-md">
                  <thead className="flex px-4 py-2 bg-green-secondary/30 h-12 items-center w-full rounded-t-md">
                    <tr>
                      <th scope="col">{t('common:requirements_recommended')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="flex border-b items-center w-full p-2">
                      <td className="px-4 font-bold w-[50%] text-sm">{t('common:os')}</td>
                      <td className="flex w-full justify-end text-xs items-center">{selectedGame.requirements[1].os}</td>
                    </tr>
                    <tr className="flex border-b items-center w-full p-2">
                      <td className="px-4 font-bold w-[50%] text-sm">{t('common:processor')}</td>
                      <td className="flex w-full justify-end text-xs items-center">{selectedGame.requirements[1].processor}</td>
                    </tr>
                    <tr className="flex border-b items-center w-full p-2">
                      <td className="px-4 font-bold w-[50%] text-sm">{t('common:RAM')}</td>
                      <td className="flex w-full justify-end text-xs items-center">{selectedGame.requirements[1].RAM}</td>
                    </tr>
                    <tr className="flex border-b last:border-b-0 w-full p-2">
                      <td className="px-4 font-bold w-[50%] text-sm">{t('common:graphics_card')}</td>
                      <td className="flex w-full justify-end text-xs items-center">{selectedGame.requirements[1].graphics_card}</td>
                    </tr>
                  </tbody>
                </table>

                <table className="table-auto flex flex-col bg-green-secondary/30 backdrop-blur-sm h-full w-full rounded-md">
                  <thead className="flex px-4 py-2 bg-green-secondary/30 h-12 items-center w-full rounded-t-md">
                    <tr>
                      <th scope="col">{t('common:requirements_min')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="flex border-b items-center w-full p-2">
                      <td className="px-4 font-bold w-[50%] text-sm">{t('common:os')}</td>
                      <td className="flex w-full justify-end text-xs items-center">{selectedGame.requirements[0].os}</td>
                    </tr>
                    <tr className="flex border-b items-center w-full p-2">
                      <td className="px-4 font-bold w-[50%] text-sm">{t('common:processor')}</td>
                      <td className="flex w-full justify-end text-xs items-center">{selectedGame.requirements[0].processor}</td>
                    </tr>
                    <tr className="flex border-b items-center w-full p-2">
                      <td className="px-4 font-bold w-[50%] text-sm">{t('common:RAM')}</td>
                      <td className="flex w-full justify-end text-xs items-center">{selectedGame.requirements[0].RAM}</td>
                    </tr>
                    <tr className="flex border-b last:border-b-0 w-full p-2">
                      <td className="px-4 font-bold w-[50%] text-sm">{t('common:graphics_card')}</td>
                      <td className="flex w-full justify-end text-xs items-center">{selectedGame.requirements[0].graphics_card}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* CHARACTERS  */}
              <div className="flex">
                <div ref={sliderRef} className="flex keen-slider w-full max-h-[28rem] overflow-hidden">
                  {selectedGame.characters.map(dude => {
                    return (
                      <div key={dude.id} className="keen-slider__slide snap-center flex flex-col border p-4 rounded-md backdrop-blur-sm bg-black/30 border-green-primary-light space-x-0 space-y-3">
                        <img src={dude.slug} alt={dude.name} className="flex object-cover max-h-36 md:max-h-[12rem] md:max-w-[12rem]" />
                        <div className="flex-col">
                          <strong className="text-3xl tracking-widest font-jomhuria flex-1">{dude.name}</strong>
                          <div className="flex gap-4 items-center text-center">
                            <strong>{t('common:age')}:</strong>
                            <span className="font-bold text-sm">{dude.age}</span>
                          </div>
                          <p className="font-bold min-h-[8rem] max-h-[8rem] text-xs overflow-y-auto md:overflow-auto mt-2 leading-5  scrollbar scrollbar-thin scrollbar-track-transparent">{dude.plot}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <button className="flex pt-3 uppercase font-jomhuria text-6xl tracking-wider leading-tight items-center justify-center p-auto rounded-md text-green-primary-dark font-bold bg-warning hover:brightness-150 hover:shadow-custom transition-all duration-200 cursor-pointer">
                <a href="https://discord.gg/RaTV4W3qYQ" target="_blank">
                  {t('common:play')}
                </a>
              </button>
            </div>

            <img
              src={selectedGame.images[1]}
              alt={selectedGame.title}
              className="flex absolute inset-0 grayscale brightness-[30%] object-cover w-full h-full -z-10 bg-fixed"
            />
          </motion.div>
        </AnimatePresence>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
