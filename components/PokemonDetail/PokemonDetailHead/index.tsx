import { XMarkIcon } from "@heroicons/react/16/solid";

interface PokemonDetailHeadProps {
  closePokemonDetails: () => void;
}

export const PokemonDetailHead = ({
  closePokemonDetails,
}: PokemonDetailHeadProps) => {
  return (
    <div>
      <button className="block ml-auto" onClick={closePokemonDetails}>
        <XMarkIcon className="h-6 w-6 text-black" />
      </button>
      <h2 className="text-center italic text-gray-700 font-semibold text-lg pb-2">
        Detalles del Pokemon
      </h2>
    </div>
  );
};
