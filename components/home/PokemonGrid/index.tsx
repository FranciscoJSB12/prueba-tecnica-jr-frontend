"use client";
import { useSkipPokemons } from "@/hooks/useSkipPokemons";
import { usePokemons } from "@/hooks/usePokemons";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import { PokemonCard } from "../PokemonCard";
import { PokemonGridBtn } from "../PokemonGridBtn";
import { PokemonDetailHead } from "../PokemonDetailHead";
import { PokemonDetailMain } from "../PokemonDetailMain";
import { PokemonDetails } from "../PokemonDetails";
import { BASE_URL } from "@/utils/constants/urls";
import { PokemonModal } from "../PokemonModal";

export const PokemonGrid = () => {
  const { skipPokemons, nextPokemons, lastPokemons } = useSkipPokemons();
  const { pokemonDetails, openPokemonDetails, closePokemonDetails } =
    usePokemonDetails();

  const { currentPokemon } = pokemonDetails;
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
      <PokemonModal pokemonDetails={pokemonDetails}>
        <PokemonDetailHead closePokemonDetails={closePokemonDetails} />
        <PokemonDetailMain>
          {pokemonDetails.isPokemonDetailOpen && (
            <PokemonCard pokemon={currentPokemon} />
          )}
          <PokemonDetails
            title={
              currentPokemon.types.length > 1
                ? "Tipos del Pokemon"
                : "Tipo del Pokemon"
            }
            details={currentPokemon.types}
            color="bg-ghost"
          />
          <PokemonDetails
            title="Habilidades"
            details={currentPokemon.abilities}
            color="bg-poison"
          />
          <PokemonDetails
            title="Estadísticas"
            details={currentPokemon.stats}
            color="bg-fire"
          />
          <PokemonDetails
            title="Movimientos"
            details={currentPokemon.moves}
            color="bg-dragon"
          />
        </PokemonDetailMain>
      </PokemonModal>
    </>
  );
};
