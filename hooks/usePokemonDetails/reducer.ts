import { ReducerActions, ActionType } from "./actions";
import { FinalPokemon } from "@/models/FinalPokemon";

export interface PokemonDetailState {
  isPokemonDetailOpen: boolean;
  currentPokemon: FinalPokemon;
  pokemonIds: number[];
}

export const initialState = {
  isPokemonDetailOpen: false,
  currentPokemon: {
    id: 0,
    name: "",
    types: [],
    order: 0,
    image: "",
    abilities: [],
    moves: [],
    stats: [],
  },
  pokemonIds: [],
} as PokemonDetailState;

export const reducer = (state: PokemonDetailState, action: ActionType) => {
  switch (action.type) {
    case ReducerActions.openPokemonDetail: {
      return {
        ...state,
        isPokemonDetailOpen: true,
        currentPokemon: action.pokemon,
      };
    }

    case ReducerActions.closePokemonDetail: {
      return {
        ...initialState,
        pokemonIds: [...state.pokemonIds, state.currentPokemon.id],
      };
    }

    default: {
      return state;
    }
  }
};
