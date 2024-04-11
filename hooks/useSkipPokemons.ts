"use client";
import { useState, useEffect } from "react";

export const useSkipPokemons = () => {
  const [skipPokemons, setSkipPokemons] = useState(0);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  const nextPokemons = (): void => {
    const num = skipPokemons + 15;
    setSkipPokemons(num);
    localStorage.setItem("lastPage", JSON.stringify(num));
    scrollToTop();
  };

  const lastPokemons = (): void => {
    const num = skipPokemons - 15;
    setSkipPokemons(num);
    localStorage.setItem("lastPage", JSON.stringify(num));
    scrollToTop();
  };

  useEffect(() => {
    const number = localStorage.getItem("lastPage");
    if (number) {
      setSkipPokemons(JSON.parse(number) as number);
    }
  }, []);

  return {
    skipPokemons,
    nextPokemons,
    lastPokemons,
  };
};
