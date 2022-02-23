import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { routePaths } from "../consts/routePaths";

export default function PageNotFound() {
    const navigate = useNavigate();

    console.log('page');
    useEffect(
        () => {
            setTimeout(() => {
                navigate(routePaths.home);
            }, 1000);
        }
    );
    
    return (
        <p>Page not found.</p>
    );

}