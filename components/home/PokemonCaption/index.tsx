import { capitalizeStr } from '@/utils/capitalizeStr';
import type { FinalPokemon } from '@/models/FinalPokemon';

interface PokemonCationProps {
  pokemon: FinalPokemon;
  openPokemonDetails?: (pokemon: FinalPokemon) => void;
  backgroundColor: string;
}

export const PokemonCaption = ({
  pokemon,
  openPokemonDetails,
  backgroundColor,
}: PokemonCationProps) => {
  return (
    <figcaption className="flex flex-col bg-gray-100 gap-1 pt-1 pb-3 relative rounded-b-lg">
      <h2 className="text-gray-700 text-lg italic font-semibold pl-5">
        {capitalizeStr(pokemon.name)}
      </h2>
      <p
        className={`w-fit text-white font-semibold italic ${
          openPokemonDetails ? 'ml-4' : 'ml-auto mr-4'
        } px-4 rounded-lg ${backgroundColor}`}
      >
        &#35;{`${pokemon.order}`.padStart(3, '0')}
      </p>
      {openPokemonDetails && (
        <button
          onClick={() => openPokemonDetails(pokemon)}
          className="bg-blue-600 flex items-center justify-center w-10 h-10 rounded-full text-white font-semibold absolute top-3 right-3 hover:bg-blue-900"
        >
          Más
        </button>
      )}
    </figcaption>
  );
};
