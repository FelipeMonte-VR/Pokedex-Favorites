import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import ViewRoutes from "./views/ViewRoutes";

function App() {
    return (
        <FalseBody>
            {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
            <BrowserRouter>
                <ViewRoutes />
            </BrowserRouter>
        </FalseBody>
    );
}

export default App;

const FalseBody = styled.div`
  text-align: center;
`;