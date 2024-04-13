export const Loading = () => {
  return (
    <>
      <div className="w-[100px] h-[100px] flex justify-center items-center text-lg overflow-hidden relative animate-spin">
        <div className="absolute w-full h-full rounded-[50%] border-[15px] border-transparent border-l-fighting"></div>
        <div className="absolute w-full h-full rounded-[50%] border-[15px] border-transparent border-t-poison"></div>
        <div className="absolute w-full h-full rounded-[50%] border-[15px] border-transparent border-r-grass"></div>
      </div>
      <h2 className="text-gray-700 text-xl font-semibold italic pt-5">
        Cargando...
      </h2>
    </>
  );
};
