import { useState, useEffect } from "react";

export const usePageIndex = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  const nextPokemons = (offset: number): void => {
    const newOffset = offset + 15;
    setPageIndex(newOffset);
    localStorage.setItem("lastPage", JSON.stringify(newOffset));
    scrollToTop();
  };

  const lastPokemons = (): void => {
    const newOffset = pageIndex - 15;
    setPageIndex(newOffset);
    localStorage.setItem("lastPage", JSON.stringify(newOffset));
    scrollToTop();
  };

  const showInitialPokemons = (): void => {
    setPageIndex(0);
    localStorage.setItem("lastPage", JSON.stringify(0));
    scrollToTop();
  };

  useEffect(() => {
    const number = localStorage.getItem("lastPage");
    if (number) {
      setPageIndex(JSON.parse(number) as number);
    }
  }, []);

  return {
    pageIndex,
    nextPokemons,
    lastPokemons,
    showInitialPokemons,
  };
};
