import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { useFavoritesConstext } from "../../common/context/Favorites";
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'

export default function FavoriteButton({id, name, image, types}) {
    /*
        Creates a heart-shaped toggle button to add or remove the referenced pokemon from the favorites list.
        The heart-shaped icon is imported from FontAwesome.
        Part of the button's style (such as color and size) is defined in the parent component.
    */

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