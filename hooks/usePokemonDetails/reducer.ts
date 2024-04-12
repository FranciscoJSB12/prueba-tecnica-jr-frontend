import { ReducerActions, ActionType } from "./actions";

export const initialState = {
  isPokemonDetailOpen: false,
  currentPokemon: {
    id: 0,
    name: "",
    types: [] as string[],
    order: 0,
    image: "",
    abilities: [] as string[],
    moves: [] as string[],
    stats: [] as string[],
  },
};

export const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case ReducerActions.openPokemonDetail: {
      return {
        isPokemonDetailOpen: true,
        currentPokemon: action.pokemon,
      };
    }

    case ReducerActions.closePokemonDetail: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};
