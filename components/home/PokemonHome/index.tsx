"use client";
import { useSkipPokemons } from "@/hooks/useSkipPokemons";
import { usePokemons } from "@/hooks/usePokemons";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import { PokemonGrid } from "@/components/home/PokemonGrid";
import { PokemonCard } from "@/components/home/PokemonCard";
import { PaginationButton } from "../PaginationButton";
import { PokemonModal } from "@/components/PokemonDetail/PokemonModal";
import { PokemonDetailHead } from "@/components/PokemonDetail/PokemonDetailHead";
import { PokemonDetailMain } from "@/components/PokemonDetail/PokemonDetailMain";
import { PokemonDetails } from "@/components/PokemonDetail/PokemonDetails";
import { PokemonStats } from "@/components/PokemonDetail/PokemonStats";
import { Loading } from "@/components/ui/Loading";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { BASE_URL } from "@/utils/constants/urls";

export const PokemonHome = () => {
  const { skipPokemons, nextPokemons, lastPokemons } = useSkipPokemons();

  const { pokemonDetails, openPokemonDetails, closePokemonDetails } =
    usePokemonDetails();
  const { currentPokemon } = pokemonDetails;

  const { pokemons, isLoading, error } = usePokemons(
    BASE_URL + `?limit=15&offset=${skipPokemons}`
  );

  if (isLoading) return <Loading />;

  if (error) return <ErrorMessage />;

  const renderCards = (): JSX.Element[] | undefined =>
    pokemons?.map((p) => (
      <PokemonCard
        key={p.id}
        pokemon={p}
        pokemonIds={pokemonDetails.pokemonIds}
        openPokemonDetails={openPokemonDetails}
      />
    ));

  const renderPaginationButtons = (isBtnDisable: boolean): JSX.Element => (
    <section>
      <PaginationButton
        handleClick={lastPokemons}
        text="Anterior"
        isBtnDisable={isBtnDisable}
      />
      <PaginationButton
        handleClick={nextPokemons}
        text="Siguiente"
        otherClass="ml-5"
      />
    </section>
  );

  return (
    <>
      <PokemonGrid>{renderCards()}</PokemonGrid>
      {renderPaginationButtons(skipPokemons === 0)}
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
          />
          <PokemonDetails
            title="Habilidades"
            details={currentPokemon.abilities}
            color="bg-poison"
          />
          <PokemonStats stats={currentPokemon.stats} />
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
