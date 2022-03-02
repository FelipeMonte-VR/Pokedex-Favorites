import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link, useSearchParams } from "react-router-dom";

import Header from "../components/header/Header";
import LoadingMessage from "../components/loadingMessage/LoadingMessage";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import AnimatedBar from "../components/animatedBar/AnimatedBar";
import FavoriteButton from "../components/favoriteButton/FavoriteButton";

import capitalizeFirstLetter from "../helpers/captalizeFirst";
import { routePaths } from "../consts/routePaths";

import { cardColors } from "../consts/cardColors";
import padNumeber from "../helpers/padNumber";
import PokemonImage from "../components/details/PokemonImage";

export default function Detalhes() {
    /*
        Creates a page-component that displays a pokemon's details.
        The details are fetched from an API.
        The displayed pokemon is passed by parameter in the URL ('?p=').
        A state machine is responsible for controlling the displayed content (loading, error or details).
    */

    const [searchParams, setSearchParams] = useSearchParams();
    const [pokemon, setPokemon] = useState([]);
    const [status, setStatus] = useState('loading');

    let mainContent;

    useEffect(
        () => {
            setStatus('loading');
            const poke = searchParams.get("p")
            fetch('https://pokedex-api-three.vercel.app/api/pokemons/' + poke)
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
                    setPokemon(resposta);
                    setStatus('done');
                })
                .catch(() => {
                    setStatus('error');
                });
        }
        ,
        [searchParams]
    );

    if (status === 'loading') {
        mainContent = 
            <Details bgColor={"#FFFFFF"}>
                <LoadingMessage />
            </Details>
    }else if (status === 'error') {
        mainContent = 
            <Details bgColor={"#FFFFFF"}>
                <ErrorMessage />
            </Details>
    } else {
        mainContent = 
            <Details bgColor={cardColors[pokemon["types"][0]]}>
                <MainContent pokemon={pokemon} />
            </Details>
    }

    return (
        <>
            <Header />

            {mainContent}
        </>
    );
}

function MainContent({pokemon}) {
    return (
        <>

            {buildBasics(pokemon)}
            
            <Stats>
                <StatsList>
                    {pokemon.stats.map((stat, index) => {
                        return (
                            buildStatLine(stat.name, stat.value, index)
                        )
                    })}
                </StatsList>
            </Stats> 

        </>
    );
}

function buildTypes(types) {
    var type = capitalizeFirstLetter(types[0]);
    if (types.length === 2) {
        type += "/" + capitalizeFirstLetter(types[1]);
    }
    return type;
}

function buildBasics(pokemon) {
    return (
        <PokemonBasics>

            {/* <ReturnBtn to={navigate(-1)}> &lt; </ReturnBtn> */}
            <ReturnBtn to={routePaths.home}> &lt; </ReturnBtn>

            <Name>{pokemon.name}</Name>

            <FavoriteButtonPosition>
                <FavoriteButton id={pokemon.id} name={pokemon.name} image={pokemon.image} types={pokemon.types}/>
            </FavoriteButtonPosition>

            <Number>{padNumeber(pokemon.id)}</Number>

            <SpotLight>
                <PokemonImage image={pokemon.image} name={pokemon.name} parentHeight={236}/>
            </SpotLight>

            <BasicInfos>
                <BasicInfosItem>
                    <InfoValue>{pokemon.weight.value + "" + pokemon.weight.unit} </InfoValue>
                    <InfoLabel>Weight</InfoLabel>
                </BasicInfosItem>
                <BasicInfosItem>
                    <InfoValue>{buildTypes(pokemon.types)}</InfoValue>
                    <InfoLabel>Type</InfoLabel>
                </BasicInfosItem>
                <BasicInfosItem>
                    <InfoValue>{pokemon.height.value + "" + pokemon.height.unit}</InfoValue>
                    <InfoLabel>Height</InfoLabel>
                </BasicInfosItem>
            </BasicInfos>


        </PokemonBasics>
    )
}

function buildStatLine(name, value, index) {
    var barSize = value * BAR_MAX_SIZE / 100
    
    return (
        <StatLine key={index}>
            <StatName>{name}</StatName>

            <StatValue>{value}</StatValue>
            <StatBar>
                {fillBar(barSize)}
            </StatBar>
        </StatLine>
    )
}

function fillBar(barSize) {
    return (
        <AnimatedBar maxSize={barSize}/>
    );
}

const Details = styled.section`
    width: 877px;
    height: 436px;
    margin: auto;
    background: ${props => props.bgColor};

    transition: background-color 1s linear;

    border-radius: 25px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
`;

const ReturnBtn = styled(Link)`
    width: 13px;
    height: 28px;
    
    position: relative;
    top: 24px;
    left: -129px;

    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    text-decoration: none;
    color: #FFFFFF;
`;

const PokemonBasics = styled.section`
    position: relative;

    width: 338px;
    height: 436px;

    text-align: center;
`;

const Name = styled.h2`
    margin-top: 0px;

    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #FFFFFF;
    text-transform: capitalize;
`;

const Number = styled.p`
    margin-top: 5px;
    margin-bottom: 21px;

    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.42);

    &:before {
        content: "#";
    }
`;

const SpotLight = styled.div`
    position: relative;
    width: 236px;
    height: 236px;
    margin: auto;
    background: rgba(255, 255, 255, 0.4);

    border-radius: 50%;

    display: flex;
    justify-content: center;
    /* align-items: center; */
`;

const BasicInfos = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    
`;

const BasicInfosItem = styled.li`
    margin: 20px 20px 0 20px;
`;

const InfoValue = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    
    /* &:nth-child(2) {
        text-transform: capitalize;
    } */
`;

const InfoLabel = styled.p`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    color: #FFFFFF;
`;


const Stats = styled.section`
    width: 539px;
    height: 436px;
    background: #FFFFFF;

    border-radius: 25px;
`;

const StatsList = styled.ul`
    width: 100%;
    height: 70%;
    margin-top: 65px;
    margin-left: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;

const StatLine = styled.li`
    width: 100%;

    color: #000000;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const StatName = styled.p`
    width: 122px;

    color: #000000;
    font-weight: bold;
    font-size: 16px;
    text-align: left;
    text-transform: capitalize;
`;

const StatValue = styled.p`
    width: 26px;
    margin-right: 7px;

    color: #000000;
    font-size: 16px;
    text-align: right;
`;

const BAR_MAX_SIZE = 320;

const StatBar = styled.div`
    width: ${BAR_MAX_SIZE}px;
    height: 7px;
    background: #C4C4C4;
`;

const FavoriteButtonPosition = styled.div`
    position: absolute;
    top: 27px;
    right: 32px;

    font-style: normal;
    font-weight: normal;
    transform: scale(1.7);
    line-height: 34px;
`;