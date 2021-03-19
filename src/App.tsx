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
  background-color: ${Colors.primaryColor};
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export default App;
