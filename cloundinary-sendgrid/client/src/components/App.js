import React from "react";
import Feedback from "./pages/Feedback";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html{
  font-size: 62.5;
  box-sizing: border-box;
}
  body{
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <div className="App p-5">
      <GlobalStyle />
      <Feedback />
    </div>
  );
}

export default App;
