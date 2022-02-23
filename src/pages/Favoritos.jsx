import styled from "styled-components";
import Card from "../components/card/Card";
import Header from "../components/header/Header";
import { getFavorites } from "../helpers/localStoreManager";

export default function Favoritos() {

    let favoritesPokemons = getFavorites();

    return (
        <>
            <Header />

            {/* <main>
                <PokemonsList>
                    {favoritesPokemons.map((pokemon) => {
                        return(
                            <Card id={pokemon["id"]} name={pokemon["name"]} image={pokemon["image"]} types={pokemon["types"]} />
                        );
                    })}
                </PokemonsList>
            </main> */}
        </>
    );
}

const PokemonsList = styled.ul`
    padding: 0;
    margin: 0;
`;