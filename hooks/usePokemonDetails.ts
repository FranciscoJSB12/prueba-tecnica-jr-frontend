import useSWR from "swr";
import { getSinglePokemon } from "@/utils/api/getPokemons";
import type { PokemonDetails } from "@/models/pokemonDetails";

const fetcher = (url: string) => getSinglePokemon(url);

export const usePokemonDetails = (pokemonName: string) => {
  const { data, error, isLoading } = useSWR<PokemonDetails>(
    pokemonName,
    fetcher
  );

  return {
    pokemon: data,
    error,
    isLoading,
  };
};
