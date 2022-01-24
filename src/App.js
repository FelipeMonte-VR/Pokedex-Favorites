import styled from "styled-components";

import { caminhosLinks } from "./dicts/paths";

import Home from "./components/pages/home";
import Detalhes from "./components/pages/detalhes";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { getJSON } from "./components/api/getJSON";

const FalseBody = styled.div`
  text-align: center;
`;

function App() {
  document.body.style = "background-color: #C6ECED;";

  return (
    <FalseBody>
      <BrowserRouter>
        <Routes>

          <Route path={caminhosLinks["home"]} element={<Home />} />
          <Route path={caminhosLinks["detalhes"]} element={<Detalhes />} />

        </Routes>
      </BrowserRouter>

    </FalseBody>

  );
}

export default App;
