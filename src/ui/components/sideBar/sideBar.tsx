import React, { ReactElement, useState } from "react";
import { useTrail, animated, interpolate } from "react-spring";
import styled from "styled-components";

import { Routes } from "../../routes/routes";
import { AnimatedSideBarName } from "./animatedSideBarName";

export const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [routesIndexes, setRoutesIndexes] = useState(Object.entries(Routes));
  return (
    <Container>
      <Trail open={open} onClick={() => setOpen(!open)}>
        <AnimatedSideBarName to={Routes.ABOUT}>
          Présentation
        </AnimatedSideBarName>
        <AnimatedSideBarName to={Routes.PROJECTS}>Projets</AnimatedSideBarName>
        <AnimatedSideBarName to={Routes.MUSIC}>Musique</AnimatedSideBarName>
      </Trail>
    </Container>
  );
};

interface TrailProps {
  open: boolean;
  children: ReactElement[];
  onClick: () => void;
}

const Trail = (props: TrailProps) => {
  const items = React.Children.toArray(props.children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: props.open ? 1 : 0,
    x: props.open ? 0 : 20,
    height: props.open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div onClick={props.onClick}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={index}
            className="trails-text"
            style={{
              ...rest,
              transform: interpolate([x], (x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

const Container = styled.div`
  text-align: center;
  position: absolute;
  top: 0px;
  right: 200px;
`;
