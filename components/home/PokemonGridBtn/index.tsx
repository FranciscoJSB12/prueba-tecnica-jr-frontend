interface PokemonGridBtnProps {
  isBtnDisable?: boolean;
  handleClick: () => void;
  text: string;
}

export const PokemonGridBtn = ({
  isBtnDisable = false,
  handleClick,
  text,
}: PokemonGridBtnProps) => {
  return (
    <button
      disabled={isBtnDisable}
      className={`${
        !isBtnDisable ? " bg-blue-600" : "bg-blue-600/30"
      } w-28 py-2 rounded-lg text-white`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
