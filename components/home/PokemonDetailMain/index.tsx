import { ReactNode } from "react";

interface PokemonDetailMainProps {
  children: ReactNode;
}

export const PokemonDetailMain = ({ children }: PokemonDetailMainProps) => {
  return (
    <div className="w-full flex-1 overflow-y-scroll flex flex-col items-center">
      {children}
    </div>
  );
};
