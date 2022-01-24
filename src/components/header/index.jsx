import styled from "styled-components";

import logo_img from "../../assets/images/logo.png";

const HeaderTag = styled.header`
    margin: 0 0 21px 0;
`;

const Logo = styled.img`
    width: 186px;
`;

function Header() {
    return(
        <HeaderTag>
            <h1>
                <Logo src={logo_img} alt="Logo do Pokemon" />
            </h1>
        </HeaderTag>
    );
}

export default Header;