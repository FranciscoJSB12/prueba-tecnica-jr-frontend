export const PokemonHeader = () => {
  return (
    <header className="w-full max-w-7xl flex flex-col items-center gap-6 py-10 px-4 mb-10 bg-gray-300 rounded-lg">
      <h1 className="text-gray-900 font-semibold text-xl italic">
        ¡Bienvenido a PokeWorld!
      </h1>
      <h2 className="italic text-lg text-gray-900 font-semibold">
        ¿Qué es Pokeworld?
      </h2>
      <p className="text-center text-lg italic text-gray-900">
        PokeWorld es una Aplicación Web creada para que puedas navegar por mundo
        de los Pokemones, ¡podrás encontrar más de <strong>1000</strong>{' '}
        personajes y ver sus detalles en el <strong>botón más</strong>!
      </p>
    </header>
  );
};
