import { capitalizeStr } from "@/utils/capitalizeStr";

interface PokemonDetailProps {
  title: string;
  details: string[];
  color: string;
}

export const PokemonDetails = ({
  title,
  details,
  color,
}: PokemonDetailProps) => {
  return (
    <div className="w-full bg-gray-300 pb-6 mb-6 rounded-lg">
      <h2 className="text-center italic text-gray-700 font-semibold text-lg pb-4">
        {title}
      </h2>
      <ul className="w-full flex flex-wrap justify-center gap-4">
        {details.map((t) => (
          <li key={t}>
            <p
              className={`${color} w-fit text-white font-semibold italic px-4 rounded-lg`}
            >
              {capitalizeStr(t)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
