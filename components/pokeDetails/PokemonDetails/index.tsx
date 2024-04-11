"use client";
import { usePathname } from "next/navigation";
import { usePokemonDetails } from "@/hooks/usePokemonDetails";
import { BASE_URL } from "@/utils/constants/urls";

export const PokemonDetails = () => {
  const pathName = usePathname();
  const pokemonName = pathName.slice(pathName.lastIndexOf("/"));

  const { pokemon, isLoading, error } = usePokemonDetails(
    BASE_URL + pokemonName
  );

  if (isLoading) return <p>Cargando información...</p>;

  if (error) return <p>Ocurrió un error mientras se cargaba la información</p>;

  return <p>{pokemon?.name}</p>;
};
