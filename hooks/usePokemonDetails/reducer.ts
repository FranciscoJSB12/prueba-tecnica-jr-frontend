import { initialState } from "./intialState";
import { ReducerActions, ActionType } from "./actions";

export const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case ReducerActions.openPokemonDetail:
      return {
        ...state,
        isPokemonDetailOpen: true,
        currentPokemon: {
          name: action.payload.name,
        },
      };
    case ReducerActions.closePokemonDetail:
      return {
        ...state,
        isPokemonDetailOpen: false,
        currentPokemon: {
          name: "",
        },
      };
    default:
      return state;
  }
};
