import React, { ReactElement } from "react";
import styled from "styled-components";
import { Colors } from "../../Theme/colors";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

export interface AnimatedSidebarName {
  children: string;
  to: string;
  onClick?: () => void;
}

export const AnimatedSideBarName = (props: AnimatedSidebarName) => {
  const [style, set] = useSpring(() => ({ opacity: 1 }));
  return (
    <animated.div
      style={style}
      onPointerDown={() => set({ opacity: 0.5 })}
      onPointerUp={() => set({ opacity: 1 })}
      onClick={props.onClick}
    >
      <SectionLink to={props.to}>{props.children}</SectionLink>
    </animated.div>
  );
};

const SectionLink = styled(Link)`
  cursor: pointer;
  font-size: 1.5em;
  margin: 20px;
  font-weight: lighter;
  text-decoration: none;
  color: ${Colors.primaryOrnament};
  text-shadow: 0 0;
  transition: text-shadow ease-out 1000ms;
  &:hover {
    text-shadow: ${Colors.primaryOrnament} 0px 0px 10px,
      ${Colors.primaryOrnament} 0px 0px 10px;
  }
`;
