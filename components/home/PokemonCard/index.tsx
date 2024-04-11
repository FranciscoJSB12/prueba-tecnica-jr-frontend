import Link from "next/link";
import Image from "next/image";
import type { FinalPokemon } from "@/models/FinalPokemon";
import { POKEMON_COLOR_TYPES } from "@/utils/constants/pokemonColorTypes";

interface PokemonCardProps {
  pokemon: FinalPokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const backgroundColor = POKEMON_COLOR_TYPES.find((color) =>
    color.includes(pokemon.type)
  ) as string;

  return (
    <article className={`${backgroundColor} w-[280px]`} key={pokemon.id}>
      <Image
        src={pokemon.image}
        width={240}
        height={240}
        alt={pokemon.name}
        priority
        className="mx-auto"
      />
      <Link
        className="block bg-blue-600 text-center text-white py-2 rounded-lg"
        href={"/detalles-pokemon/" + pokemon.name}
      >
        Ver detalles
      </Link>
    </article>
  );
};
