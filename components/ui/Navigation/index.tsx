import { NavigationItem } from "@/components/ui/NavigationItem";

export const Navigation = () => {
  return (
    <nav className="w-full h-[60px] px-10 flex justify-between items-center fixed top-0 left-0 z-20 bg-blue-600">
      <ul>
        <NavigationItem>PokeWorld</NavigationItem>
      </ul>
    </nav>
  );
};
