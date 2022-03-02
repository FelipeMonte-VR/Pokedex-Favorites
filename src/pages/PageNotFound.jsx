import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { routePaths } from "../consts/routePaths";

export default function PageNotFound() {
    /*
        Creates a page component that displays a page not found message (404 error).
        After some time, the user is redirected to the home page.
    */

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