import styled from "styled-components";
import { Link } from "react-router-dom";

import { cardColors } from "../../consts/cardColors.js";
import { routePaths } from "../../consts/routePaths.js";
import FavoriteButton from "../favoriteButton/FavoriteButton.jsx";
import padNumeber from "../../helpers/padNumber.js";

export default function Card({id, name, image, types}) {

    return(
        <PokemonCard type={cardColors[types[0]]} key={id}>

            <CardContent>
                <PokemonName>{name}</PokemonName>
                <PokemonNumber>{padNumeber(id)}</PokemonNumber>
                <SpotLight>
                    <PokemonImage src={image} alt={name} />
                </SpotLight>
            </CardContent>

            <Links>
                <CardLink to={routePaths.detalhes+'?p='+name} />
                <FavoriteButtonPosition>
                    <FavoriteButton id={id} name={name} image={image} types={types}/>
                </FavoriteButtonPosition>
            </Links>

        </PokemonCard>
    );
}

const PokemonCard = styled.li`
    position: relative;

    width: 181px;
    height: 253px;
    border-radius: 25px;
    vertical-align: top;
    margin: 0 25px 50px 25px;
    display: inline-block;
    text-align: center;

    padding: 0px;

    background-color: ${props => props.type};
`;

const CardContent = styled.section`
    margin: 22px 0 0 0;
`;

const PokemonName = styled.h2`
    margin: 0px 0 0 0;

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

const Links = styled.div`
`;

const CardLink = styled(Link)`

    position: absolute;
    top: 0;
    left: 0;
    text-decoration: none;

    margin: 0; display: inline-block; width: 100%; height: 100%;
`;

const FavoriteButtonPosition = styled.div`
    position: absolute;
    top: 22px;
    right: 11px;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
`;