import { useReducer } from 'react';
import { ReducerActions } from './actions';
import { initialState } from './reducer';
import { reducer } from './reducer';
import type { FinalPokemon } from '@/models/FinalPokemon';

export const usePokemonDetails = () => {
  const [pokemonDetails, dispatch] = useReducer(reducer, initialState);

  const openPokemonDetails = (pokemon: FinalPokemon) => {
    dispatch({
      type: ReducerActions.openPokemonDetail,
      pokemon,
    });
  };

  const closePokemonDetails = () => {
    dispatch({
      type: ReducerActions.closePokemonDetail,
    });
  };

  return {
    isPokemonDetailOpen: pokemonDetails.isPokemonDetailOpen,
    currentPokemon: pokemonDetails.currentPokemon,
    pokemonIds: pokemonDetails.pokemonIds,
    openPokemonDetails,
    closePokemonDetails,
  };
};
