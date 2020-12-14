import React from "react";
import styled from "styled-components";
import { Colors } from "../Theme/Colors";

export const MainHeader = () => {
  return <Container></Container>;
};

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  flex-grow: 1;
  min-height: 75px;
  width: 100vw;
  background-color: ${Colors.primaryColor};
  border-radius: 0px 0px 0px 40px;
  box-shadow: 0px 0px 0.3px 1px rgba(255, 215, 0, 0.2);
`;
