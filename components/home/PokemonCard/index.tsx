import { PokemonImage } from "./PokemonImage";
import { POKEMON_COLOR_TYPES } from "@/utils/constants/pokemonColorTypes";
import { PokemonCaption } from "./PokemonCaption";
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
      <PokemonImage pokemon={pokemon} />
      <PokemonCaption
        backgroundColor={backgroundColor}
        pokemon={pokemon}
        openPokemonDetails={openPokemonDetails}
      />
    </article>
  );
};
