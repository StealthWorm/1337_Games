import { useEffect, useState } from "react"
import { Game } from "../contexts/LayoutContext"

export function useRandomImage(gameInfo: Game) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate a random index
      const randomIndex = Math.floor(Math.random() * gameInfo.images.length);
      setCurrentIndex(randomIndex);
    }, 3000); // Change image every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [gameInfo.images.length]); // Empty dependency array ensures this effect runs only once

  return currentIndex;
}