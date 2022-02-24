import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'

import logo_img from "../../assets/images/logo.png";
import { routePaths } from "../../consts/routePaths";

export default function Header() {
    const heartSolid = <FontAwesomeIcon icon={faHeartSolid} />

    return(
        <HeaderTag>
            <h1>
                <a href={routePaths.home}>
                    <Logo src={logo_img} alt="Logo do Pokemon" />
                </a>
            </h1>
            <Fav href={routePaths.favoritos}>
                {heartSolid} <p>Meus Favoritos</p>
            </Fav>
        </HeaderTag>
    );
}

const HeaderTag = styled.header`
    margin: 0 0 21px 0;
`;

const Logo = styled.img`
    width: 186px;
`;

const Fav = styled.a`
    position: absolute;
    top: 10px;
    right: 112px;

    font-style: normal;
    font-weight: 900;
    font-size: 15px;
    color: #3763AD;
    line-height: 17px;
    text-decoration: none;

    &:hover {
        p {
            text-decoration: underline;
        }
    }
    
    p {
        display: inline-block;
    }

`;