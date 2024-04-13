import { ReactNode, useContext } from 'react';
import { PokemonContext } from '@/context/PokemonContext';
import { TransparentBg } from '@/components/ui/TransparentBg';

interface PokemonDetailProps {
  children: ReactNode;
}

export const PokemonModal = ({ children }: PokemonDetailProps) => {
  const { isPokemonDetailOpen } = useContext(PokemonContext);

  return (
    <>
      <TransparentBg isTransparentBgOpen={isPokemonDetailOpen} />
      <aside
        className={`w-11/12 h-[90%] p-3 max-w-lg transition-all ease-in fixed z-20 bg-gray-200 border-4 border-poison rounded-lg top-0 bottom-0 m-auto ${
          isPokemonDetailOpen ? 'right-0 left-0' : 'left-[-512px]'
        }`}
      >
        <section className="w-full h-full flex flex-col">{children}</section>
      </aside>
    </>
  );
};
