import { ReactNode } from 'react';

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
      <p className="text-white text-lg italic hover:text-gray-700">
        {children}
      </p>
    </li>
  );
};
