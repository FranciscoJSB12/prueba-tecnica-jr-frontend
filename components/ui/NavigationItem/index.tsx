import { ReactNode, useContext } from 'react';
import { PokemonContext } from '@/context/PokemonContext';

interface NavigationItemProps {
  children: ReactNode;
  handleClick: () => void;
}

export const NavigationItem = ({
  children,
  handleClick,
}: NavigationItemProps) => {
  return (
    <li onClick={handleClick} className="cursor-pointer">
      <p className="text-white text-md italic">{children}</p>
    </li>
  );
};
