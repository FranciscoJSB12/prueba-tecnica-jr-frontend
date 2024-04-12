import { ReactNode } from "react";

interface PokemonGridProps {
  children: ReactNode;
}

export const PokemonGrid = ({ children }: PokemonGridProps) => {
  return (
    <section className="w-full grid justify-center gap-x-5 grid-cols-[repeat(auto-fill,240px)]">
      {children}
    </section>
  );
};
