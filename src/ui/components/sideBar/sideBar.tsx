import React, { useState } from "react";

import styled from "styled-components";

import { RouteNames } from "../../routes/routes";

import { AnimatedSideBarName } from "./animatedSideBarName";
import { ArrowButton } from "./arrowButton";
import { Trail } from "./sideBarTrail";

export const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [routeNames, setRouteNames] = useState(RouteNames);

  const setFirstRoute = (index: number) => {
    const updatedRouteNames = routeNames.slice();
    [updatedRouteNames[0], updatedRouteNames[index]] = [
      updatedRouteNames[index],
      updatedRouteNames[0],
    ];
    setRouteNames(updatedRouteNames);
    console.log("swap");
  };

  return (
    <Container>
      <AnimatedSideBarName to={routeNames[0].route}>
        {routeNames[0].name}
      </AnimatedSideBarName>
      <ArrowButton onClick={() => setOpen(!open)} visible={!open} />
      <Trail open={open}>
        {routeNames.slice(1).map((value, index) => (
          <AnimatedSideBarName
            key={index + 1}
            to={value.route}
            onClick={() => setFirstRoute(index + 1)}
          >
            {value.name}
          </AnimatedSideBarName>
        ))}
      </Trail>
      <ArrowButton
        onClick={() => setOpen(!open)}
        visible={open}
        isUpwards={true}
      />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  position: absolute;
  top: 0px;
  right: 200px;
`;
