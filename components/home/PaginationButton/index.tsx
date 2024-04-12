interface PaginationButtonProps {
  isBtnDisable?: boolean;
  handleClick: () => void;
  text: string;
  otherClass?: string;
}

export const PaginationButton = ({
  isBtnDisable = false,
  handleClick,
  text,
  otherClass,
}: PaginationButtonProps) => {
  return (
    <button
      disabled={isBtnDisable}
      className={`${
        !isBtnDisable ? "bg-blue-600" : "bg-blue-600/30"
      } w-28 py-2 rounded-lg text-white ${otherClass ? otherClass : ""}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};
