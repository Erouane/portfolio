import React from "react";
import styled from "styled-components";
import { MainHeader } from "./ui/components/mainHeader";
import { HomeScreen } from "./ui/screens/homeScreen";

function App() {
  return (
    <MainContainer>
      <HomeScreen />
      <MainHeader />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
