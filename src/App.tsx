import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { SideBar } from "./ui/components/sideBar/sideBar";
import { AnimatedRoutes } from "./ui/routes/animatedRoutes";
import { Colors } from "./ui/Theme/colors";

function App() {
  return (
    document.getElementById("root"),
    (
      <Router>
        <MainContainer>
          <AnimatedRoutes />
          <SideBar />
        </MainContainer>
      </Router>
    )
  );
}

const MainContainer = styled.div`
  background: rgb(6, 8, 69);
  background: linear-gradient(
    45deg,
    ${Colors.primaryColor} 70%,
    ${Colors.secondaryColor} 100%
  );
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export default App;
