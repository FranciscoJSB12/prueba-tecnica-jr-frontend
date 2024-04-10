import useSWR from "swr";
import type { PokeApiResponse } from "@/models/pokeApiResponse";
import type { PokemonDetails } from "@/models/pokemonDetails";

interface Pokemon {
  id: number;
  name: string;
  type: string;
  order: number;
  image: string;
}

const getPokemonList = async (url: string): Promise<PokeApiResponse> => {
  try {
    const response = await fetch(url);

    const data = (await response.json()) as PokeApiResponse;

    return data;
  } catch (err) {
    throw err;
  }
};

const getPokemons = async (url: string): Promise<Pokemon[]> => {
  try {
    const pokemons: Pokemon[] = [];
    const { results } = await getPokemonList(url);

    for await (const pokemonInfo of results) {
      const response = await fetch(pokemonInfo.url);
      const pokemon = (await response.json()) as PokemonDetails;

      pokemons.push({
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.types[0].type.name,
        order: pokemon.order,
        image: pokemon.sprites.other["official-artwork"].front_default,
      });
    }

    return pokemons;
  } catch (err) {
    throw err;
  }
};

const fetcher = (url: string) => getPokemons(url);

export const usePokemonList = () => {
  const { data, error, isLoading } = useSWR<Pokemon[]>(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0",
    fetcher
  );

  return {
    pokemons: data,
    error,
    isLoading,
  };
};
