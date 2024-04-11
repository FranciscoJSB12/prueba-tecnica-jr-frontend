import type { Config } from "tailwindcss";
import { POKEMON_COLOR_TYPES } from "./utils/constants/pokemonColorTypes";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: POKEMON_COLOR_TYPES,
  theme: {
    extend: {
      colors: {
        normal: "#A8A878",
        fighting: "#C03028",
        flying: "#A890F0",
        poison: "#A040A0",
        ground: "#E0C068",
        rock: "#B8A038",
        bug: "#A8B820",
        ghost: "#705898",
        steel: "#B8B8D0",
        fire: "#FA6C6C",
        water: "#6890F0",
        grass: "#48CFB2",
        electric: "#FFCE4B",
        psychic: "#F85888",
        ice: "#98D8D8",
        dragon: "#7038F8",
        dark: "#705848",
        fairy: "#EE99AC",
      },
    },
  },
  plugins: [],
};
export default config;
