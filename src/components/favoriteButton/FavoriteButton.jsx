import { useState } from "react";
import styled from "styled-components";
import { useFavoritesConstext } from "../../common/context/Favorites";


import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function FavoriteButton({id, name, image, types}) {

    const {
        addFavorite,
        removeFavorite,
        checksIfFavorite } = useFavoritesConstext();
    
    const [isFavorite, setIsFavorite] = useState(checksIfFavorite(name));

    const heartSolid = <FontAwesomeIcon icon={faHeartSolid} />
    const heartRegular = <FontAwesomeIcon icon={faHeartRegular} />

    return (
        <FavoriteBtn onClick={() => {
            if (isFavorite) {
                removeFavorite(name);
                setIsFavorite(false);
            } else {
                addFavorite(id, name, image, types);
                setIsFavorite(true);
            }
        }}>
            <FavoriteIcon isFavorite={isFavorite}>{isFavorite ? heartSolid : heartRegular}</FavoriteIcon>
        </FavoriteBtn>
    );
}

const FavoriteBtn = styled.button`
    border: none;
    background-color: inherit;
`;

const FavoriteIcon = styled.p`
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 23px;

    color: ${props => props.isFavorite  ? '#FFFBEB' : '#00000066'};
`;