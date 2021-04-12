import React from "react";
import { AnimatedScreen } from "./Screen";
import * as fullWording from "../wording/screens.json";
import { WorkItems } from "../components/workHistory/workItem";
import { Title } from "../components/title";

export const WorkHistoryScreen = () => {
  const wording = fullWording.workHistory;
  return (
    <AnimatedScreen>
      <>
        <Title>{wording.title}</Title>
        <WorkItems />
      </>
    </AnimatedScreen>
  );
};
