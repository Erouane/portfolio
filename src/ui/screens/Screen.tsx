import React, { ReactElement } from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import { Colors } from "../Theme/colors";

interface AnimatedScreenProps {
  children: ReactElement;
}

export const AnimatedScreen = (props: AnimatedScreenProps) => {
  return <Screen>{props.children}</Screen>;
};

const Screen = styled(animated.div)`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: rgb(6, 8, 69);
  background: linear-gradient(
    45deg,
    ${Colors.primaryColor} 70%,
    ${Colors.secondaryColor} 100%
  );
`;
