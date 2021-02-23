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
  height: 100vh; /*allows both columns to span the full height of the browser window*/
  display: flex;
  flex-direction: column;
`;