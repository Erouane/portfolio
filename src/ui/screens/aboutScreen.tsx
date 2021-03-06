import React from "react";
import { AnimatedScreen } from "./Screen";
import * as fullWording from "../wording/screens.json";
import { Title } from "../components/title";
import { Content } from "../components/content";

export const AboutScreen = () => {
  const wording = fullWording.about;
  return (
    <AnimatedScreen>
      <>
        <Title>{wording.title}</Title>
        <Content>{wording.content}</Content>
      </>
    </AnimatedScreen>
  );
};
