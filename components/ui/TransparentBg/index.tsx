interface TransparentBgProps {
  isTransparentBgOpen: boolean;
}

export const TransparentBg = ({ isTransparentBgOpen }: TransparentBgProps) => {
  return (
    <div
      className={`${
        isTransparentBgOpen ? "" : "hidden"
      } fixed top-0 left-0 z-10 w-screen h-screen bg-water/65`}
    ></div>
  );
};
