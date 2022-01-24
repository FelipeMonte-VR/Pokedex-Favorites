import { getJSON } from "../components/api/getJSON";

export const pokemonsList = JSON.parse(getJSON('https://pokedex-api-three.vercel.app/api/pokemons'));
