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
        type: pokemon.types[0].type.name,
        order: pokemon.order,
        image: pokemon.sprites.other["official-artwork"].front_default,
      });
    }

    return pokemons;
  } catch (err) {
    throw err;
  }
};
