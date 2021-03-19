import React from "react";
import styled from "styled-components";

import { Routes } from "../../routes/routes";
import { AnimatedSideBarName } from "./animatedSideBarName";

export const SideBar = () => {
  return (
    <Container>
      <Spacer />
      <AnimatedSideBarName to={Routes.ABOUT}>Présentation</AnimatedSideBarName>
      <AnimatedSideBarName to={Routes.PROJECTS}>Projets</AnimatedSideBarName>
      <AnimatedSideBarName to={Routes.MUSIC}>Musique</AnimatedSideBarName>
      <Spacer />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  padding: 0 10px;
  position: absolute;
  top: 0px;
  right: 50px;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;
