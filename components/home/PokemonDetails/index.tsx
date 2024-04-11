"use client";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { initialState } from "@/hooks/usePokemonDetails/intialState";
import { capitalizeStr } from "@/utils/capitalizeStr";

interface PokemonDetailProps {
  closePokemonDetails: () => void;
  pokemonDetails: typeof initialState;
}

export const PokemonDetails = ({
  closePokemonDetails,
  pokemonDetails,
}: PokemonDetailProps) => {
  return (
    <>
      <section
        className={`${
          pokemonDetails.isPokemonDetailOpen ? "" : "hidden"
        } fixed top-0 left-0 z-10 w-screen h-screen bg-water/65`}
      ></section>
      <aside
        className={`w-11/12 h-[90%] p-3 max-w-4xl transition-all ease-in fixed z-20 bg-gray-200 border-4 border-poison rounded-lg top-0 bottom-0 m-auto ${
          pokemonDetails.isPokemonDetailOpen
            ? "right-0 left-0"
            : "left-[-896px]"
        }`}
      >
        <div className="w-full h-full overflow-y-scroll relative">
          <h2 className="text-center italic text-gray-700 font-semibold text-lg pb-2">
            Detalles del Pokemon
          </h2>
          <button
            className="absolute top-[2px] left-0"
            onClick={closePokemonDetails}
          >
            <XMarkIcon className="h-6 w-6 text-black" />
          </button>
          <p>{capitalizeStr(pokemonDetails.currentPokemon.name)}</p>
        </div>
      </aside>
    </>
  );
};
