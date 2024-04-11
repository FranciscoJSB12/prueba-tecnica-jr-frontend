import { useReducer } from "react";
import { ReducerActions } from "./actions";
import { initialState } from "./intialState";
import { reducer } from "./reducer";
import type { FinalPokemon } from "@/models/FinalPokemon";

export const usePokemonDetails = () => {
  const [pokemonDetails, dispatch] = useReducer(reducer, initialState);

  const openPokemonDetails = (pokemon: FinalPokemon) => {
    dispatch({
      type: ReducerActions.openPokemonDetail,
      payload: {
        name: pokemon.name,
      },
    });
  };

  const closePokemonDetails = () => {
    dispatch({
      type: ReducerActions.closePokemonDetail,
    });
  };

  return {
    pokemonDetails,
    openPokemonDetails,
    closePokemonDetails,
  };
};