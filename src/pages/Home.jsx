import { useEffect, useState } from "react";
import styled from "styled-components";

import Header from "../components/header/Header";
import Card from "../components/card/Card";
import LoadingMessage from "../components/loadingMessage/LoadingMessage";
import ErrorMessage from "../components/errorMessage/ErrorMessage";

export default function Home() {
  
    const [pokemons, setPokemons] = useState([]);
    const [status, setStatus] = useState('loading');
    const [filter, setFilter] = useState("");

    let mainContent;

    useEffect(() => {
        setStatus('loading');
        fetch("https://pokedex-api-three.vercel.app/api/pokemons")
            .then((resposta) => {
                if (resposta.ok) {
                    return resposta.json();
                } else if (resposta.status === 404) {
                    return Promise.reject("erro 404");
                } else {
                    return Promise.reject("outro erro: " + resposta.status);
                }
            })
            .then((resposta) => {
                setPokemons(resposta);
                setStatus('done');
            })
            .catch(() => {
                setStatus('error');
            });
    }, []);

    if (status === 'loading') {
        mainContent = <LoadingMessage />
    }else if (status === 'error') {
        mainContent = <ErrorMessage />
    } else {
        mainContent = <MainContent pokemons={pokemons} filter={filter} setFilter={setFilter} />
    }

    return (
        <>
            <Header />

            {mainContent}
        </>
    );
}

function MainContent({ pokemons, filter, setFilter }) {
    return (
        <main>
            <SearchSession>
                <SearchField
                    type="text"
                    id="search-pokenon"
                    placeholder="Digite o nome do Pokémon"
                    onChange={
                        
                        (event) => {
                            setFilter(event.target.value);
                        }
                    }
                />
                <SearchButton
                    type="submit"
                    value="Buscar"
                />
            </SearchSession>

            <PokemonsList>

                {applyFilter(pokemons, filter)}
                
            </PokemonsList>
        </main>
    );
}


function applyFilter(pokemons, filtro) {

    var filtered = []

    for (var i=0; i<pokemons.length; i++) {
        if (pokemons[i]["name"].includes(filtro.toLowerCase())) {
            filtered.push({
                "id": pokemons[i]["id"],
                "name": pokemons[i]["name"],
                "image": pokemons[i]["image"],
                "types": pokemons[i]["types"]
            });
        }
    }
    
    
    if (filtered.length === 0) {
        return <PokemonNotFound>Nenhum pokémon encontrado!</PokemonNotFound>
    } else {
        return (
            filtered.map((pokemon) => {
                return(
                    <Card id={pokemon["id"]} name={pokemon["name"]} image={pokemon["image"]} types={pokemon["types"]} key={pokemon["id"]}/>
                );
            })
        )
    }
}


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

    /* cursor: not-allowed;
    pointer-events: all !important; */
`;


const PokemonsList = styled.ul`
    padding: 0;
    margin: 0;
`;


const PokemonNotFound = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    color: #FF4444;
`;