import { useContext } from "react";
import { PokemonContext } from "@/context/PokemonContext";
import { PokemonCard } from "@/components/home/PokemonCard";
import { PokemonDetails } from "@/components/PokemonDetail/PokemonDetails";
import { PokemonStats } from "@/components/PokemonDetail/PokemonStats";

export const PokemonDetailMain = () => {
  const { currentPokemon, isPokemonDetailOpen } = useContext(PokemonContext);
  return (
    <div className="w-full flex-1 overflow-y-scroll flex flex-col items-center">
      {isPokemonDetailOpen && <PokemonCard pokemon={currentPokemon} />}
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
    </div>
  );
};
