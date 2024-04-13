import { ReactNode, useContext } from "react";
import { PokemonContext } from "@/context/PokemonContext";

interface NavigationItemProps {
  children: ReactNode;
}

export const NavigationItem = ({ children }: NavigationItemProps) => {
  const { showInitialPokemons } = useContext(PokemonContext);

  return (
    <li onClick={showInitialPokemons} className="cursor-pointer">
      <p className="text-white text-lg italic font-semibold">{children}</p>
    </li>
  );
};
