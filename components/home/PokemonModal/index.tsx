"use client";
import { ReactNode } from "react";
import { initialState } from "@/hooks/usePokemonDetails/reducer";
import { TransparentBg } from "@/components/ui/TransparentBg";

interface PokemonDetailProps {
  pokemonDetails: typeof initialState;
  children: ReactNode;
}

export const PokemonModal = ({
  pokemonDetails,
  children,
}: PokemonDetailProps) => {
  return (
    <>
      <TransparentBg isTransparentBgOpen={pokemonDetails.isPokemonDetailOpen} />
      <aside
        className={`w-11/12 h-[90%] p-3 max-w-md transition-all ease-in fixed z-20 bg-gray-200 border-4 border-poison rounded-lg top-0 bottom-0 m-auto ${
          pokemonDetails.isPokemonDetailOpen
            ? "right-0 left-0"
            : "left-[-448px]"
        }`}
      >
        <section className="w-full h-full flex flex-col">{children}</section>
      </aside>
    </>
  );
};
