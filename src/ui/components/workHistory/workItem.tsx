import React from "react";
import { Title } from "../title";
import * as fullWording from "../../wording/screens.json";
import { Content } from "../content";

export const WorkItems = () => {
  const wording = fullWording.workHistory;
  const history = wording.history.map((content: any) => {
    return (
      <>
        <Title>{content.title}</Title>
        <Content>{content.date}</Content>
        <Content>{content.content}</Content>
      </>
    );
  });
  return <>{history}</>;
};
