import Link from "next/link";
import { PokemonDetails } from "@/components/pokeDetails/PokemonDetails";

export default function PokeDetails() {
  return (
    <main>
      <PokemonDetails />
      <Link
        href="/"
        className="w-[280px] block bg-blue-600 text-center text-white py-2 rounded-lg"
      >
        Atrás
      </Link>
    </main>
  );
}
