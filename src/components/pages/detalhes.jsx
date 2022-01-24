import React from "react";

import Header from "../header";
import MainDetalhes from "../main/detalhes";

function Detalhes({trocaTema, temaVar}) {
    return(
        <>
            <Header trocaTema={trocaTema} temaVar={temaVar}/>

            <MainDetalhes />
        </>
    );
}

export default Detalhes;