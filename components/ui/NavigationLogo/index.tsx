import { ReactNode } from 'react';

interface NavigationLogoProps {
  children: ReactNode;
  handleClick: () => void;
}

export const NavigationLogo = ({
  handleClick,
  children,
}: NavigationLogoProps) => {
  return (
    <li onClick={handleClick} className="cursor-pointer">
      <p className="text-white text-2xl italic font-semibold hover:text-gray-700">
        {children}
      </p>
    </li>
  );
};
