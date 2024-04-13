import { ReactNode } from 'react';

interface PokemonGridProps {
  children: ReactNode;
  isHidden: boolean | undefined;
}

export const PokemonGrid = ({ children, isHidden }: PokemonGridProps) => {
  return (
    <section
      className={`${
        isHidden ? 'hidden' : ''
      } w-full grid justify-center gap-x-5 grid-cols-[repeat(auto-fill,240px)]`}
    >
      {children}
    </section>
  );
};
