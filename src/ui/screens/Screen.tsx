import React, { ReactElement } from "react";
import styled from "styled-components";
import { animated } from "react-spring";

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
  background-color: rgba(0, 0, 0, 0);
`;
