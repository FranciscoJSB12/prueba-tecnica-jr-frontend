import { useContext } from "react";
import { usePokemons } from "@/hooks/usePokemons";
import { PokemonContext } from "@/context/PokemonContext";
import { PokemonCard } from "../PokemonCard";
import { PaginationButton } from "../PaginationButton";
import { Loading } from "@/components/ui/Loading";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { BASE_URL } from "@/utils/constants/urls";

interface PokemonGridProps {
  pageIndex: number;
  isHidden?: boolean;
}

export const PokemonGrid = ({ pageIndex, isHidden }: PokemonGridProps) => {
  const { openPokemonDetails, lastPokemons, nextPokemons, pokemonIds } =
    useContext(PokemonContext);

  const { pokemons, isLoading, error } = usePokemons(
    BASE_URL + `?limit=15&offset=${pageIndex}`
  );

  if (isLoading && !isHidden) return <Loading />;

  if (error && !isHidden) return <ErrorMessage />;

  return (
    <>
      <section
        className={`${
          isHidden ? "hidden" : ""
        } w-full grid justify-center gap-x-5 grid-cols-[repeat(auto-fill,240px)]`}
      >
        {pokemons?.map((p) => (
          <PokemonCard
            key={p.id}
            pokemon={p}
            pokemonIds={pokemonIds}
            openPokemonDetails={openPokemonDetails}
          />
        ))}
      </section>
      <section className={`${isHidden ? "hidden" : ""}`}>
        <PaginationButton
          handleClick={lastPokemons}
          text="Anterior"
          isBtnDisable={pageIndex === 0}
        />
        <PaginationButton
          handleClick={() => nextPokemons(pageIndex)}
          text="Siguiente"
          otherClass="ml-5"
        />
      </section>
    </>
  );
};
