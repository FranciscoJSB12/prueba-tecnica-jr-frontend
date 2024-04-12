export interface StatType {
  name: string;
  base_stat: number;
}

export interface FinalPokemon {
  id: number;
  name: string;
  types: string[];
  order: number;
  image: string;
  abilities: string[];
  moves: string[];
  stats: StatType[];
}
