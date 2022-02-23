import { useState } from "react";
import styled from "styled-components";
import { addFavorite, getFavorites, removeFavorite } from "../../helpers/localStoreManager";

export default function FavoriteButton({id, name, image, types}) {

    const [isFavorite, setIsFavorite] = useState(getFavorites().includes(name));

    return (
        <FavoriteBtn onClick={() => {
            if (isFavorite) {
                removeFavorite(name);
                setIsFavorite(false);
            } else {
                addFavorite(name);
                setIsFavorite(true);
            }
            console.log(getFavorites());
        }}>
            <p>{isFavorite ? 'X' : 'V'}</p>
        </FavoriteBtn>
    );
}

const FavoriteBtn = styled.button`
    /* position: absolute;
    top: 24px;
    right: 15px; */
    border: none;

    /* background-color: inherit; */
    
    /* 
    
    cursor: pointer; */

    /* font-family: Font Awesome 5 Free; */
    /* font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 23px;

    color: #FFFBEB; */
`;