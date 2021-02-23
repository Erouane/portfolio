import React from "react";
import styled from "styled-components";
import { Colors } from "../Theme/Colors";
import { AnimatedScreen } from "./animatedScreen";

export const AboutScreen = () => {
  return (
    <AnimatedScreen>
      <Container>
        <Title>Erwan Renon</Title>
      </Container>
    </AnimatedScreen>
  );
};

const Container = styled.div`
  background-color: ${Colors.secondaryColor};
`;

const Title = styled.h1`
  color: ${Colors.primaryOrnament};
  margin: 20px 20px;
`;
