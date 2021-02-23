import React from "react";
import styled from "styled-components";
import { Colors } from "../../Theme/Colors";
import { SideBarItems } from "./sideBarItems";

export const SideBar = () => {
  return (
    <Container>
      <SideBarItems></SideBarItems>
    </Container>
  );
};

const Container = styled.div`
  padding: 0em 2em;
  height: 100vh; /*allows both columns to span the full height of the browser window*/
  display: flex;
  flex-direction: column;
  background-color: ${Colors.primaryColor};
  box-shadow: 1px 0px rgba(255, 215, 0, 0.2);
`;
