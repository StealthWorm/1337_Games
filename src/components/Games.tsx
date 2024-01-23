import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import { Game, LayoutContext } from "../contexts/LayoutContext";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "@phosphor-icons/react";

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export function Games() {
  const { loadedData, selectedGame, changeSelectedGame } = useContext(LayoutContext)
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

  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    const getRandomImage = () => {
      const randomInx = Math.floor(Math.random() * 6);
      setRandomIndex(randomInx);
    };

    getRandomImage();

    const intervalId = setInterval(() => {
      getRandomImage();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [randomIndex])

  function handleSelectGame(data: Game | null) {
    changeSelectedGame(data)
  }

  return (
    <div className="relative flex flex-col h-full w-full bg-green-primary/90 backdrop-blur-lg p-8 gap-4 overflow-hidden items-center justify-start">
      <h3 className="flex uppercase text-3xl md:text-5xl text-green-primary-light justify-center font-jomhuria tracking-wider">
        {t('header:app.games')}
      </h3>

      <Dialog.Root>
        <div className="w-full relative p-6 grid grid-cols-1 columns-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-x-auto scrollbar-thin">
          {loadedData.map((game) => (
            <Dialog.Trigger key={game.id}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                onClick={() => { handleSelectGame(selectedGame && game.id === selectedGame.id ? null : game) }}
                className="self-center flex bg-transparent rounded-md min-h-[20rem] p-3 w-full h-full cursor-pointer border-2 border-zinc-50 shadow-white transition-all duration-200 hover:shadow-lg hover:shadow-zinc-100"
              >
                <div className="flex relative w-full h-full overflow-hidden rounded-md">
                  <motion.img
                    key={randomIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    src={game.images[randomIndex]}
                    alt={game.title}
                    className="flex absolute w-full h-full object-cover transition-all duration-200"
                  />

                  <div className="absolute w-full h-full bg-gradient-to-t from-black/90 from-[30%] to-transparent" />

                  <motion.h2
                    initial={{ bottom: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute p-2 text-3xl md:text-4xl font-bold max-h-max font-jomhuria text-green-500 tracking-wider"
                  >
                    {game.title}
                  </motion.h2>
                </div>
              </motion.div>
            </Dialog.Trigger>
          ))}

          {selectedGame &&
            <Dialog.Portal>
              <Dialog.Overlay className="bg-black/50 inset-0 fixed backdrop-blur-md" />

              <Dialog.Content
                onInteractOutside={() => handleSelectGame(null)}
                className="flex flex-col inset-0 z-20 fixed w-full h-full rounded-lg  m-auto shadow-lg md:max-w-[calc(100vw/2)] md:max-h-[calc(100vh/2)] scrollbar scrollbar-thin"
              >
                <AnimatePresence>
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: .5 }}
                    className="flex flex-col h-full w-full inset-0 relative ">

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
                    <div className="flex flex-col p-8 space-y-6 h-full md:max-h-[20rem] overflow-y-auto scrollbar scrollbar-thin">
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
                          <thead className="flex px-4 py-2 text-base bg-green-secondary/30 h-full w-full space-y-4 rounded-t-md">
                            <tr>
                              <th scope="col">{t('common:requirements_recommended')}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="flex border-b items-center w-full w-full">
                              <td className="px-4 py-2  font-bold w-[50%]">{t('common:os')}</td>
                              <td className="px-4 py-2  text-sm text-sm">{selectedGame.requirements[1].os}</td>
                            </tr>
                            <tr className="flex border-b items-center w-full">
                              <td className="px-4 py-2  font-bold w-[50%]">{t('common:processor')}</td>
                              <td className="px-3 py-2 text-sm">{selectedGame.requirements[1].processor}</td>
                            </tr>
                            <tr className="flex border-b items-center w-full">
                              <td className="px-4 py-2  font-bold w-[50%]">{t('common:RAM')}</td>
                              <td className="px-3 py-2 text-sm">{selectedGame.requirements[1].RAM}</td>
                            </tr>
                            <tr className="flex border-b last:border-b-0">
                              <td className="px-4 py-2  font-bold w-[50%]">{t('common:graphics_card')}</td>
                              <td className="px-3 py-2 text-sm text-sm">{selectedGame.requirements[1].graphics_card}</td>
                            </tr>
                          </tbody>
                        </table>
                        <table className="table-auto flex flex-col bg-green-secondary/30 backdrop-blur-sm h-full w-full rounded-md">
                          <thead className="flex px-4 py-2 text-base bg-green-secondary/30 h-full w-full space-y-4 rounded-t-md">
                            <tr>
                              <th scope="col">{t('common:requirements_min')}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="flex border-b items-center w-full">
                              <td className="px-4 py-2  font-bold w-[50%]">{t('common:os')}</td>
                              <td className="px-4 py-2 text-sm">{selectedGame.requirements[0].os}</td>
                            </tr>
                            <tr className="flex border-b items-center w-full">
                              <td className="px-4 py-2  font-bold w-[50%]">{t('common:processor')}</td>
                              <td className="px-3 py-2 text-sm">{selectedGame.requirements[0].processor}</td>
                            </tr>
                            <tr className="flex border-b items-center w-full">
                              <td className="px-4 py-2  font-bold w-[50%]">{t('common:RAM')}</td>
                              <td className="px-3 py-2 text-sm">{selectedGame.requirements[0].RAM}</td>
                            </tr>
                            <tr className="flex border-b last:border-b-0 w-full">
                              <td className="px-4 py-2  font-bold w-[50%]">{t('common:graphics_card')}</td>
                              <td className="px-3 py-2 text-sm text-sm">{selectedGame.requirements[0].graphics_card}</td>
                            </tr>
                          </tbody>

                        </table>
                      </div>

                      {/* CHARACTERS  */}
                      <div className="flex">
                        <div ref={sliderRef} className="flex keen-slider w-full max-h-[28rem]">
                          {selectedGame.characters.map(dude => {
                            return (
                              <div key={dude.id} className="keen-slider__slide flex border p-4 rounded-md backdrop-blur-sm bg-black/30 space-x-4 md:space-x-0 snap-start min-w-[40rem] flex-row md:flex-col h-full border-green-primary-light">
                                <img src={dude.slug} alt={dude.name} className="flex object-cover w-full h-full  max-h-[12rem] max-w-[12rem] md:max-w-full" />
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

                      <button className="flex pt-3 uppercase font-jomhuria text-6xl tracking-wider leading-tight items-center justify-center p-auto rounded-md text-green-primary-dark font-bold bg-warning hover:bg-yellow-600 transition-colors duration-200 cursor-pointer">
                        {t('common:play')}
                      </button>
                    </div>

                    <motion.img
                      src={selectedGame.images[1]}
                      alt={selectedGame.title}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: .5 }}
                      className="flex absolute inset-0 grayscale brightness-[30%] object-cover w-full h-full -z-10 bg-fixed"
                    />
                  </motion.div>
                </AnimatePresence>
              </Dialog.Content>
            </Dialog.Portal>
          }

        </div>
      </Dialog.Root >
    </div >
  )
}