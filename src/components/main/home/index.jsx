import react, { useState } from "react";
import styled from "styled-components";

import { caminhosLinks } from "../../../dicts/paths";

import { getPokemon } from "./vars/imagesImports";
// import { getPokemons } from "./vars/pokemonsList";
import { pokemonsList } from "../../../dicts/pokemonsList";
import { cardColors } from "../../../dicts/cardColors";

const SearchSession = styled.section`
    margin: 0 0 40px 0;
`;

const SearchField = styled.input`
    width: 731px;
    height: 45px;
    border-style: none;
    border-radius: 10px;
    background-color: #FFFFFF;
    padding-left: 20px;
    margin: 0 10px 0 0;

    font-size: 14px;
    font-weight: 400;
    color: #AFAFAF;

    @media(max-width: 771px) {
        width: 80%;
        margin: 10px;
    }
`;

const SearchButton = styled.input`
    width: 109px;
    height: 46px;
    border-style: none;
    border-radius: 10px;
    background-color: #3763AD;
    margin: 0 0 0 0;

    font-size: 18px;
    font-weight: bold;
    color: #FFCB05;

    cursor: not-allowed;
    pointer-events: all !important;
`;


const PokemonsList = styled.ul`
    padding: 0;
    margin: 0;
`;

const PokemonCard = styled.li`
    width: 181px;
    height: 253px;
    border-radius: 25px;
    vertical-align: top;
    margin: 0 25px 50px 25px;
    display: inline-block;
    text-align: center;

    background-color: ${props => props.type};
`;

const CardLink = styled.a`
    text-decoration: none;
`;

const PokemonName = styled.h2`
    margin: 22px 0 0 0;

    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    color: #FFFFFF;
    text-transform: capitalize;
`;

const PokemonNumber = styled.p`
    margin: 3px 0 16px 0;

    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    color: #0000006B;

    &:before {
        content: "#";
    }
`;

const SpotLight = styled.div`
    width: 151px;
    height: 151px;
    border-radius: 50%;
    margin: auto;
    background-color: #FFFFFF66;
`;

const PokemonImage = styled.img`
    width: 122px;
    height: 122px;
    margin: 14px 0 0 0;
`;

const PokemonNotFound = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    color: #FF4444;
`;

function pokemonCard(id, name, image, types, index) {
    return(
        <PokemonCard key={index} type={cardColors[[types[0]]]}>
            <CardLink href={caminhosLinks["detalhes"]+"?p="+name}>
                <PokemonName>{name}</PokemonName>
                <PokemonNumber>{id}</PokemonNumber>
                <SpotLight>
                    <PokemonImage src={image} />
                </SpotLight>
            </CardLink>
        </PokemonCard>
    );
}

function applyFilter(filtro) {
    var filtered = []

    for (var i=0; i<pokemonsList.length; i++) {
        if (pokemonsList[i]["name"].includes(filtro.toLowerCase())) {
            filtered.push({
                "id": pokemonsList[i]["id"],
                "name": pokemonsList[i]["name"],
                "image": pokemonsList[i]["image"],
                "types": pokemonsList[i]["types"]
            });
        }
    }
    
    
    if (filtered.length == 0) {
        return <PokemonNotFound>Nenhum pokémon encontrado!</PokemonNotFound>
    } else {
        return (
            filtered.map((pokemon, index) => {
                return(
                    pokemonCard(pokemon["id"], pokemon["name"], pokemon["image"], pokemon["types"], index)
                );
            })
        )
    }
}

function Main() {

    const [filtro, setFiltro] = useState("");

    return(
        <main>
            <SearchSession>
                <SearchField
                    type="text"
                    id="search-pokenon"
                    placeholder="Digite o nome do Pokémon"
                    onChange={
                        (event) => {setFiltro(event.target.value)}
                    }
                />
                <SearchButton
                    type="submit"
                    value="Buscar"
                />
            </SearchSession>

            <PokemonsList>

                {applyFilter(filtro)}
                
            </PokemonsList>
        </main>
    );
}

export default Main;