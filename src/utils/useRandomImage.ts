import { useMemo } from "react";

export function useRandomImage(arr: string[]) {

  const image = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }, [arr])

  return image
}
