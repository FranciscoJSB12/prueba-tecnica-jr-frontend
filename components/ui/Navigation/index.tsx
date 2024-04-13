import { useContext } from 'react';
import { PokemonContext } from '@/context/PokemonContext';
import { NavigationLogo } from '../NavigationLogo';
import { NavigationItem } from '@/components/ui/NavigationItem';

export const Navigation = () => {
  const { showInitialPokemons } = useContext(PokemonContext);
  return (
    <nav className="w-full h-[60px] px-10 flex justify-between items-center fixed top-0 left-0 z-20 bg-blue-600">
      <ul className="flex items-center gap-10">
        <NavigationItem handleClick={showInitialPokemons}>
          Inicio
        </NavigationItem>
      </ul>
      <ul>
        <NavigationLogo handleClick={showInitialPokemons}>
          PokeWorld
        </NavigationLogo>
      </ul>
    </nav>
  );
};
