import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Detalhes from "../pages/Detalhes";
import Favoritos from "../pages/Favoritos";
import PageNotFound from "../pages/PageNotFound";

import { routePaths } from "../consts/routePaths.js";

export default function ViewRoutes() {
    return (
        <Routes>
            <Route index element={<Home />} />

            <Route path={routePaths.detalhes} element={<Detalhes />} />
            
            <Route path={routePaths.favoritos} element={<Favoritos />} />

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}