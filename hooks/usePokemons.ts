import useSWR from 'swr';
import { getAllPokemonsInfo } from '@/utils/api/getPokemons';
import type { FinalPokemon } from '@/models/FinalPokemon';

const fetcher = (url: string) => getAllPokemonsInfo(url);

export const usePokemons = (url: string) => {
  const { data, error, isLoading } = useSWR<FinalPokemon[]>(url, fetcher);

  return {
    pokemons: data,
    error,
    isLoading,
  };
};
