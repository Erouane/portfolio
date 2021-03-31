import React, { ReactElement } from "react";
import { useTrail, animated, interpolate } from "react-spring";

interface TrailProps {
  open: boolean;
  children: ReactElement[];
}

export const Trail = (props: TrailProps) => {
  const items = React.Children.toArray(props.children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: props.open ? 1 : 0,
    y: props.open ? 0 : -180,
    from: { opacity: 0, y: -180 },
  });
  return (
    <div>
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
