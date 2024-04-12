import { PokemonDetailList } from "@/components/PokemonDetail/PokemonDetailList";
import { CircleChart } from "@/components/PokemonDetail/CircleChart";
import type { StatType } from "@/models/FinalPokemon";

interface PokemonStatsProps {
  stats: StatType[];
}

export const PokemonStats = ({ stats }: PokemonStatsProps) => {
  return (
    <PokemonDetailList title="Estadísticas">
      {stats.map((s) => (
        <li
          className="flex flex-col items-center border-2 border-gray-400 p-2 rounded-lg"
          key={s.name}
        >
          <CircleChart stat={s.name} percentage={s.base_stat} />
        </li>
      ))}
    </PokemonDetailList>
  );
};
