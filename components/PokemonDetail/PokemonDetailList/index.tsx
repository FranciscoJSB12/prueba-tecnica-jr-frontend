import { ReactNode } from 'react';

interface PokemonDetailListProps {
  title: string;
  children: ReactNode;
}

export const PokemonDetailList = ({
  title,
  children,
}: PokemonDetailListProps) => {
  return (
    <div className="w-full bg-gray-300 pt-2 px-2 pb-6 mb-6 rounded-lg">
      <h2 className="text-center italic text-gray-700 font-semibold text-lg pb-4">
        {title}
      </h2>
      <ul className="w-full flex flex-wrap justify-center gap-4">{children}</ul>
    </div>
  );
};
