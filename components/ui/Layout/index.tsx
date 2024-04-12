import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="w-full min-h-screen py-20 flex flex-col justify-center items-center px-5 bg-gray-300">
      {children}
    </main>
  );
};
