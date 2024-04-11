"use client";
import { usePokemons } from "@/hooks/usePokemons";
import { PokemonCard } from "../PokemonCard";
import { BASE_URL } from "@/utils/constants/urls";

export const PokemonGrid = () => {
  const { pokemons, isLoading, error } = usePokemons(
    BASE_URL + "?limit=15&offset=0"
  );

  if (isLoading) return <p>Cargando información...</p>;

  if (error) return <p>Ocurrió un error mientras se cargaba la información</p>;

  return (
    <section>
      {pokemons?.map((p) => (
        <PokemonCard key={p.id} pokemon={p} />
      ))}
    </section>
  );
};
