import styled from "styled-components";

import Card from "../components/card/Card";
import Header from "../components/header/Header";

import { useFavoritesConstext } from "../common/context/Favorites";

export default function Favoritos() {
    /*
        Creates a page-component that displays a list with the favorite pokemons.
        The list is stored/loaded in client-side.
        The list is passed among the components by context.
    */

    const {favorites} = useFavoritesConstext();

    
    return (
        <>
            <Header />

            <main>
                {getFavorites(favorites)}
            </main>
        </>
    );
}

function getFavorites(favorites) {
    if (favorites.length === 0) {
        return <p>Você não tem pokemons favoritos</p>
    }
    return (
        <PokemonsList>
            {favorites.map((pokemon) => {
                return(
                    <Card id={pokemon.id} name={pokemon.name} image={pokemon.image} types={pokemon.types} key={pokemon.id}/>
                );
            })}
        </PokemonsList>
    );
}

const PokemonsList = styled.ul`
    padding: 0;
    margin: 0;
`;