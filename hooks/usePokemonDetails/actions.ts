import { FinalPokemon } from "@/models/FinalPokemon";

export enum ReducerActions {
  openPokemonDetail = "openPokemonDetail",
  closePokemonDetail = "closePokemonDetail",
}

export type ActionType =
  | {
      type: ReducerActions.openPokemonDetail;
      pokemon: FinalPokemon;
    }
  | {
      type: ReducerActions.closePokemonDetail;
    };
