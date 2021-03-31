import React from "react";

import styled from "styled-components";

import { Colors } from "../../Theme/colors";
import { ReactComponent as DownArrow } from "../../assets/images/down-arrow.svg";

export const ArrowButton = (props: {
  onClick: () => void;
  visible: boolean;
  isUpwards?: boolean;
}) => {
  return (
    <>
      {props.visible ? (
        <DownArrowScaled
          onClick={props.onClick}
          fill={Colors.primaryOrnament}
          style={props.isUpwards ? { transform: "rotateX(180deg)" } : {}}
        />
      ) : null}
    </>
  );
};

const DownArrowScaled = styled(DownArrow)`
  margin: 7px;
  height: 15px;
`;
