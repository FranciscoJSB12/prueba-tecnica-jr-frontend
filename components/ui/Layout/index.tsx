'use client';
import { ReactNode } from 'react';
import { Navigation } from '@/components/ui/Navigation';
import { PokemonProvider } from '@/context/PokemonProvider';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="w-full min-h-screen pt-28 pb-20 flex flex-col justify-center items-center px-5 bg-gray-200">
      <PokemonProvider>
        <Navigation />
        {children}
      </PokemonProvider>
    </main>
  );
};
