import { ReactNode } from "react";
import { PokemonContext } from "./PokemonContext";
import { usePageIndex } from "@/hooks/usePageIndex";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";

interface PokemonContextProps {
  children: ReactNode;
}

export const PokemonProvider = ({ children }: PokemonContextProps) => {
  const pageIndex = usePageIndex();
  const pokemonDetails = usePokemonDetails();

  return (
    <PokemonContext.Provider value={{ ...pageIndex, ...pokemonDetails }}>
      {children}
    </PokemonContext.Provider>
  );
};
