import React from "react";
import styled from "styled-components";
import { SideBar } from "./ui/components/sideBar/sideBar";
import { AboutScreen } from "./ui/screens/aboutScreen";

function App() {
  return (
    <MainContainer>
      <SideBar />
      <AboutScreen />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  margin: 0px;
  display: flex;
  box-sizing: border-box;
`;

export default App;
