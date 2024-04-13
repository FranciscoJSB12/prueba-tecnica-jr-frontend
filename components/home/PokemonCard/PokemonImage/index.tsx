import Image from "next/image";
import { FinalPokemon } from "@/models/FinalPokemon";

interface PokemonImageProps {
  pokemon: FinalPokemon;
}

export const PokemonImage = ({ pokemon }: PokemonImageProps) => {
  return (
    <figure className="w-full h-[240px] mx-auto relative">
      <Image
        src={pokemon.image}
        alt={pokemon.name}
        fill
        priority
        sizes="(min-width: 240px) 240px"
      />
    </figure>
  );
};
