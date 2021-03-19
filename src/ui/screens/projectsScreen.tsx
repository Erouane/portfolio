import React from "react";
import styled from "styled-components";
import { Colors } from "../Theme/colors";
import { AnimatedScreen } from "./Screen";

export const ProjectsScreen = () => {
  return (
    <AnimatedScreen>
      <Title>Projects</Title>
    </AnimatedScreen>
  );
};

const Title = styled.h1`
  color: ${Colors.primaryOrnament};
  padding: 20px 20px;
`;
