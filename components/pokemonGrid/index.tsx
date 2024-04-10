"use client";
import Image from "next/image";
import { usePokemonList } from "@/hooks/usePokemonList";

export const PokemonGrid = () => {
  const { pokemons, isLoading, error } = usePokemonList();

  if (isLoading) return <p>Loading info...</p>;

  if (error) return <p>Something went wrong</p>;

  return (
    <section>
      {pokemons?.map((p) => (
        <article key={p.id}>
          <Image src={p.image} width={280} height={280} alt={p.name} priority />
        </article>
      ))}
    </section>
  );
};
