import { useSpring, animated } from "react-spring";
import React from "react";
import styled from "styled-components";
import { Colors } from "../../Theme/Colors";

export const SideBarItems = () => {
  return (
    <Container>
      <Spacer />
      <AnimatedSideBarName>Présentation</AnimatedSideBarName>
      <AnimatedSideBarName>Projets</AnimatedSideBarName>
      <AnimatedSideBarName>Musique</AnimatedSideBarName>
      <Spacer />
    </Container>
  );
};

const AnimatedSideBarName = (props: any) => {
  const [style, set] = useSpring(() => ({ opacity: 1 }));
  return (
    <SectionName
      style={style}
      onMouseDown={() => set({ opacity: 0 })}
      onMouseUp={() => set({ opacity: 1 })}
    >
      {props.children}
    </SectionName>
  );
};

const Container = styled.div`
  flex-grow: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const SectionNameSelected = styled(animated.h2)`
  font-size: 1.5em;
  font-weight: lighter;
  color: ${Colors.primaryOrnament};
  text-shadow: ${Colors.primaryOrnament} 0px 0px 10px,
    ${Colors.primaryOrnament} 0px 0px 10px;
`;

const SectionName = styled(animated.h2)`
  cursor: pointer;
  font-size: 1.5em;
  font-weight: lighter;
  color: ${Colors.primaryOrnament};
  text-shadow: 0 0;
  transition: text-shadow ease-out 1000ms;
  &:hover {
    text-shadow: ${Colors.primaryOrnament} 0px 0px 10px,
      ${Colors.primaryOrnament} 0px 0px 10px;
  }
`;

const Spacer = styled.div`
  flex-grow: 1;
`;
