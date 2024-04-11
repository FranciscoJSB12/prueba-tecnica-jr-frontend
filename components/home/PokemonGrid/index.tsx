"use client";
import { useSkipPokemons } from "@/hooks/useSkipPokemons";
import { usePokemons } from "@/hooks/usePokemons";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import { PokemonCard } from "../PokemonCard";
import { PokemonGridBtn } from "../PokemonGridBtn";
import { BASE_URL } from "@/utils/constants/urls";
import { PokemonDetails } from "../PokemonDetails";

export const PokemonGrid = () => {
  const { skipPokemons, nextPokemons, lastPokemons } = useSkipPokemons();
  const { pokemonDetails, openPokemonDetails, closePokemonDetails } =
    usePokemonDetails();
  const { pokemons, isLoading, error } = usePokemons(
    BASE_URL + `?limit=15&offset=${skipPokemons}`
  );

  const isBtnDisable = skipPokemons === 0;

  if (isLoading) return <p>Cargando información...</p>;

  if (error) return <p>Ocurrió un error mientras se cargaba la información</p>;

  return (
    <>
      <section className="w-full grid justify-center gap-x-5 grid-cols-[repeat(auto-fill,240px)]">
        {pokemons?.map((p) => (
          <PokemonCard
            key={p.id}
            pokemon={p}
            openPokemonDetails={openPokemonDetails}
          />
        ))}
      </section>
      <div className="flex justify-center gap-5">
        <PokemonGridBtn
          handleClick={lastPokemons}
          text="Anterior"
          isBtnDisable={isBtnDisable}
        />
        <PokemonGridBtn handleClick={nextPokemons} text="Siguiente" />
      </div>
      <PokemonDetails
        closePokemonDetails={closePokemonDetails}
        pokemonDetails={pokemonDetails}
      />
    </>
  );
};
