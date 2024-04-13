import { createContext } from 'react';
import type { FinalPokemon } from '@/models/FinalPokemon';

interface PokemonContextType {
  pageIndex: number;
  nextPokemons: (offset: number) => void;
  lastPokemons: () => void;
  showInitialPokemons: () => void;
  isPokemonDetailOpen: boolean;
  currentPokemon: FinalPokemon;
  pokemonIds: number[];
  openPokemonDetails: (pokemon: FinalPokemon) => void;
  closePokemonDetails: () => void;
}

export const PokemonContext = createContext({} as PokemonContextType);
