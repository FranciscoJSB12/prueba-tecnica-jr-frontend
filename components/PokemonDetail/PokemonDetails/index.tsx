import { PokemonDetailList } from '@/components/PokemonDetail/PokemonDetailList';
import { POKEMON_COLOR_TYPES } from '@/utils/constants/pokemonColorTypes';
import { capitalizeStr } from '@/utils/capitalizeStr';

interface PokemonDetailProps {
  title: string;
  details: string[];
  color?: string;
}

const getTypeColor = (type: string): string => {
  return POKEMON_COLOR_TYPES.find((t) => t.includes(type)) as string;
};

export const PokemonDetails = ({
  title,
  details,
  color,
}: PokemonDetailProps) => {
  return (
    <PokemonDetailList title={title}>
      {details.map((t) => (
        <li key={t}>
          <p
            className={`${
              !color ? getTypeColor(t) : color
            } w-fit text-white font-semibold italic px-4 py-2 rounded-lg`}
          >
            {capitalizeStr(t)}
          </p>
        </li>
      ))}
    </PokemonDetailList>
  );
};
