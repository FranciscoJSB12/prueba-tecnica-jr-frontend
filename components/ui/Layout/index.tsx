import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="w-full py-20 flex flex-col items-center px-5 bg-grass/50">
      {children}
    </main>
  );
};
