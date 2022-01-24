import React from "react";
import styled from "styled-components";

import { caminhosLinks } from "../../../dicts/paths";

import bulba from "../../../assets/images/bulbasaur.png";
import { getJSON } from "../../api/getJSON";
import { cardColors } from "../../../dicts/cardColors";

const Details = styled.section`
    width: 877px;
    height: 436px;
    margin: auto;

    background: ${props => props.type};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;

    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
`;

const ReturnBtn = styled.a`
    position: relative;
    top: 24px;
    left: -129px;

    width: 13px;
    height: 28px;

    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: left;
    text-decoration: none;

    color: #FFFFFF;
`;

const PokemonBasics = styled.section`
    width: 338px;
    height: 436px;
    text-align: center;
    //background-color: #CCCCCC;
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
    width: 236px;
    height: 236px;

    background: rgba(255, 255, 255, 0.4);
    margin: auto;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const PokemonImage = styled.img`
    width: 190px;
`;

const BasicInfosValues = styled.ul`
    margin-top: 26px;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
`;

const InfoValue = styled.li`
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin: 0 20px;

    color: #FFFFFF;
    
    text-transform: capitalize;
`;

const BasicInfosLabels = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    
`;

const InfoLabel = styled.li`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    margin: 0 32px;

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
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-left: 30px;
`;

const StatLine = styled.li`
    width: 100%;
    color: #000000;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const StatName = styled.p`
    color: #000000;
    font-weight: bold;
    font-size: 16px;
    width: 122px;
    text-align: left;
    text-transform: capitalize;
`;

const StatValue = styled.p`
    color: #000000;
    font-size: 16px;
    margin-right: 7px;
    width: 26px;
    text-align: right;
`;

const BAR_MAX_SIZE = 320;

const StatBar = styled.div`
    width: ${BAR_MAX_SIZE}px;
    height: 7px;

    background: #C4C4C4;
    
    `;

const StatBarFill = styled.div`
    width: ${(props) => props.size}px;
    height: 7px;
    
    background: #027FC5;
`;


function buildBasics(pokemon) {

    return(
        <PokemonBasics>
            <ReturnBtn href={caminhosLinks["home"]}> &lt; </ReturnBtn>

            <Name>{pokemon["name"]}</Name>
            <Number>{pokemon["id"]}</Number>
            <SpotLight>
                <PokemonImage src={pokemon["image"]} />
            </SpotLight>
            <BasicInfosValues>
                <InfoValue>{pokemon["weight"]["value"] +" "+ pokemon["weight"]["unit"]} </InfoValue>
                <InfoValue>{pokemon["types"][0]}</InfoValue>
                <InfoValue>{pokemon["height"]["value"] +" "+ pokemon["height"]["unit"]}</InfoValue>
            </BasicInfosValues>
            <BasicInfosLabels>
                <InfoLabel>Weight</InfoLabel>
                <InfoLabel>Type</InfoLabel>
                <InfoLabel>Height</InfoLabel>
            </BasicInfosLabels>
        </PokemonBasics>
    )
}

function buildStatLine(name, value, index) {
    var barSize = value * BAR_MAX_SIZE / 100
    return(
        <StatLine key={index}>
            <StatName>{name}</StatName>
            
            <StatValue>{value}</StatValue>
            <StatBar><StatBarFill size={barSize}></StatBarFill></StatBar>
        </StatLine>
    )
}

function Detalhes() {

    const urlParams = new URLSearchParams(window.location.search);
    const poke = urlParams.get('p');

    var pokemon = JSON.parse(getJSON('https://pokedex-api-three.vercel.app/api/pokemons/'+poke));

    return(
        <Details type={cardColors[pokemon["types"][0]]}>

            {buildBasics(pokemon)}


            <Stats>
                <StatsList>
                {pokemon["stats"].map((stat, index) => {
                    return(
                        buildStatLine(stat["name"],stat["value"], index)
                    )
                })}
                </StatsList>
            </Stats>
            
        </Details>
    );
}

export default Detalhes;