import { Link } from "react-router-dom";
import styled from "styled-components";

import logo_img from "../../assets/images/logo.png";
import { routePaths } from "../../consts/routePaths";

export default function Header() {
    return(
        <HeaderTag>
            <h1>
                <Link to={routePaths.home}>
                    <Logo src={logo_img} alt="Logo do Pokemon" />
                </Link>
            </h1>

            <Fav to={routePaths.favoritos}>Meus Favoritos</Fav>
        </HeaderTag>
    );
}

const HeaderTag = styled.header`
    margin: 0 0 21px 0;
`;

const Logo = styled.img`
    width: 186px;
`;

const Fav = styled(Link)`
    position: absolute;
    top: 10px;
    right: 112px;

    //font-family: Font Awesome 5 Free;
    font-style: normal;
    font-weight: 900;
    font-size: 15px;
    line-height: 17px;
`;