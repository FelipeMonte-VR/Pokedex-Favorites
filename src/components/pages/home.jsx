import React from "react";

import Header from "../header";
import MainHome from "../main/home";

function Home({trocaTema, temaVar}) {
    return(
        <>
            <Header trocaTema={trocaTema} temaVar={temaVar}/>

            <MainHome />
        </>
    );
}

export default Home;