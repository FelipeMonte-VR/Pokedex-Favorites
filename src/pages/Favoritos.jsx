import { useEffect, useState } from "react";

import LoadingMessage from "../components/loadingMessage/LoadingMessage";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import Header from "../components/header/Header";

export default function Favoritos() {
    
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
            
        </main>
    );
}