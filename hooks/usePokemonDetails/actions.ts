export enum ReducerActions {
  openPokemonDetail = "openPokemonDetail",
  closePokemonDetail = "closePokemonDetail",
}

export type ActionType =
  | {
      type: ReducerActions.openPokemonDetail;
      payload: {
        name: string;
      };
    }
  | { type: ReducerActions.closePokemonDetail };
