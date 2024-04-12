import { getData } from "@/utils/api/getData";
import type { PokeApiResponse } from "@/models/pokeApiResponse";
import type { PokemonDetails } from "@/models/pokemonDetails";
import type { FinalPokemon } from "@/models/FinalPokemon";

export const getAllPokemonsInfo = async (
  url: string
): Promise<FinalPokemon[]> => {
  try {
    const pokemons: FinalPokemon[] = [];
    const { results } = await getData<PokeApiResponse>(url);

    for await (const pokemonInfo of results) {
      const pokemon = await getData<PokemonDetails>(pokemonInfo.url);

      pokemons.push({
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map((t) => t.type.name),
        order: pokemon.order,
        image: pokemon.sprites.other["official-artwork"].front_default,
        abilities: pokemon.abilities.map((t) => t.ability.name),
        moves: pokemon.moves.map((m) => m.move.name),
        stats: pokemon.stats.map((s) => `${s.stat.name}: ${s.base_stat}`),
      });
    }

    return pokemons;
  } catch (err) {
    throw err;
  }
};
