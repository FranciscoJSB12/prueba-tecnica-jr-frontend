import Image from "next/image";
import { POKEMON_COLOR_TYPES } from "@/utils/constants/pokemonColorTypes";
import { capitalizeStr } from "@/utils/capitalizeStr";
import type { FinalPokemon } from "@/models/FinalPokemon";

interface PokemonCardProps {
  pokemon: FinalPokemon;
  openPokemonDetails?: (pokemon: FinalPokemon) => void;
  pokemonIds?: number[];
}

export const PokemonCard = ({
  pokemon,
  openPokemonDetails,
  pokemonIds,
}: PokemonCardProps) => {
  const backgroundColor = POKEMON_COLOR_TYPES.find((color) =>
    color.includes(pokemon.types[0])
  ) as string;
  return (
    <article
      className={`w-[240px] mb-5 border-2  ${
        pokemonIds?.includes(pokemon.id)
          ? "border-yellow-400 bg-gray-200"
          : "border-gray-500 " + backgroundColor
      } rounded-lg shadow-md`}
    >
      <figure className="w-full h-[240px] mx-auto relative">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          fill
          priority
          sizes="(min-width: 240px) 240px"
        />
      </figure>
      <figcaption className="flex flex-col bg-gray-100 gap-1 pt-1 pb-3 relative rounded-b-lg">
        <h2 className="text-gray-700 text-lg italic font-semibold pl-5">
          {capitalizeStr(pokemon.name)}
        </h2>
        <p
          className={`w-fit text-white font-semibold italic ${
            openPokemonDetails ? "ml-4" : "ml-auto mr-4"
          } px-4 rounded-lg ${backgroundColor}`}
        >
          &#35;{`${pokemon.order}`.padStart(3, "0")}
        </p>
        {openPokemonDetails && (
          <button
            onClick={() => openPokemonDetails(pokemon)}
            className="bg-blue-600 flex items-center justify-center w-10 h-10 rounded-full text-white font-semibold absolute top-3 right-3"
          >
            Más
          </button>
        )}
      </figcaption>
    </article>
  );
};
