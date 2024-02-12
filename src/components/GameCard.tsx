import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Game, LayoutContext } from "../contexts/LayoutContext";

interface GameProps {
  gameInfo: Game;
}

export default function GameCard({ gameInfo }: GameProps) {
  const { selectedGame, changeSelectedGame } = useContext(LayoutContext)
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
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      onClick={() => { handleSelectGame(selectedGame && gameInfo.id === selectedGame.id ? null : gameInfo) }}
      className="self-center flex bg-transparent rounded-md min-h-[20rem] p-3 w-full h-full cursor-pointer border-2 border-zinc-50 shadow-white transition-all duration-200 hover:shadow-custom"
    >
      <div className="flex relative w-full h-full overflow-hidden rounded-md">
        <motion.img
          key={randomIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          src={gameInfo.images[randomIndex]}
          alt={gameInfo.title}
          className="flex absolute w-full h-full object-cover transition-all duration-200"
        />

        <div className="absolute w-full h-full bg-gradient-to-t from-black/90 from-[30%] to-transparent" />

        <motion.h2
          initial={{ bottom: 0 }}
          transition={{ duration: 1 }}
          className="absolute p-2 text-3xl md:text-4xl font-bold max-h-max font-jomhuria text-green-500 tracking-wider"
        >
          {gameInfo.title}
        </motion.h2>
      </div>
    </motion.div>
  )
}
