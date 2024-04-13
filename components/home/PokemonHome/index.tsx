'use client';
import { useContext } from 'react';
import { PokemonContext } from '@/context/PokemonContext';
import { PokemonList } from '@/components/home/PokemonList';
import { PokemonModal } from '@/components/PokemonDetail/PokemonModal';
import { PokemonDetailHead } from '@/components/PokemonDetail/PokemonDetailHead';
import { PokemonDetailMain } from '@/components/PokemonDetail/PokemonDetailMain';

export const PokemonHome = () => {
  const { pageIndex } = useContext(PokemonContext);

  return (
    <>
      <PokemonList pageIndex={pageIndex} />
      <PokemonList pageIndex={pageIndex + 15} isHidden={true} />
      <PokemonModal>
        <PokemonDetailHead />
        <PokemonDetailMain />
      </PokemonModal>
    </>
  );
};
