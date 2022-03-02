import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";
import Favoritos from "../pages/Favoritos";
import PageNotFound from "../pages/PageNotFound";

import { FavoritesProvider } from "../common/context/Favorites";

import { routePaths } from "../consts/routePaths.js";

export default function ViewRoutes() {
    /*
        Creates a component that defines the routes to the pages.
        The routes uses react-router-dom v6.
    */

    return (
        <FavoritesProvider>
            <Routes>
                <Route index element={<Home />} />

                <Route path={routePaths.detalhes} element={<Detalhes />} />
                
                <Route path={routePaths.favoritos} element={<Favoritos />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </FavoritesProvider>
    );
}