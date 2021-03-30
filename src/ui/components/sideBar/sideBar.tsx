import React, { ReactElement, useState } from "react";
import { useTrail, animated, interpolate } from "react-spring";
import styled from "styled-components";

import { RouteNames, Routes } from "../../routes/routes";
import { AnimatedSideBarName } from "./animatedSideBarName";

export const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [routeNames, setRouteNames] = useState(RouteNames);
  return (
    <Container>
      <AnimatedSideBarName to={routeNames[0].route}>
        {routeNames[0].name}
      </AnimatedSideBarName>
      <Trail open={open} onClick={() => setOpen(!open)}>
        {routeNames.slice(1).map((value, index) => (
          <AnimatedSideBarName key={index} to={value.route}>
            {value.name}
          </AnimatedSideBarName>
        ))}
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
    y: props.open ? 0 : -180,
    from: { opacity: 0, y: -180 },
  });
  return (
    <div onClick={props.onClick}>
      <div>
        {trail.map(({ y, ...rest }, index) => (
          <animated.div
            key={index}
            className="trails-text"
            style={{
              ...rest,
              transform: interpolate([y], (y) => `rotateX(${y}deg)`),
            }}
          >
            <animated.div>{items[index]}</animated.div>
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
