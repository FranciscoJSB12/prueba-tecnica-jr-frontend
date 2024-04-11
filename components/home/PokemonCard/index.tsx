import Image from "next/image";
import { POKEMON_COLOR_TYPES } from "@/utils/constants/pokemonColorTypes";
import { capitalizeStr } from "@/utils/capitalizeStr";
import type { FinalPokemon } from "@/models/FinalPokemon";

interface PokemonCardProps {
  pokemon: FinalPokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const backgroundColor = POKEMON_COLOR_TYPES.find((color) =>
    color.includes(pokemon.type)
  ) as string;

  return (
    <article
      className={`w-[240px] mb-10 ${backgroundColor} border border-gray-500 rounded-lg shadow-2xl`}
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
          &nbsp;&nbsp;&#35;
          {`${pokemon.order}`.padStart(3, "0")}
        </h2>
        <p
          className={`w-fit text-gray-700 font-semibold italic ml-4 px-4 rounded-lg ${backgroundColor}`}
        >
          Tipo&nbsp;{capitalizeStr(pokemon.type)}
        </p>
        <button
          onClick={() => console.log(pokemon)}
          className="bg-blue-600 flex items-center justify-center w-10 h-10 rounded-full text-white font-semibold absolute top-3 right-3"
        >
          Más
        </button>
      </figcaption>
    </article>
  );
};
