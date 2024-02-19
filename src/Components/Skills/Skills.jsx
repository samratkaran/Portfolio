import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import data from "./Data";
import styles from "./styles.module.css";
import myImage from "../../Assets/HTML.png";

export default function Skills() {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "30%", background: "red" },
    to: {
      size: open ? "100%" : "30%",
      background: open ? "transparent" : "green",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 1 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div className={styles.wrapper}>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={styles.container}
        onClick={() => set((open) => !open)}
      >
        {transition((style, item) => (
          <animated.div
            key={item.name}
            className={styles.item}
            style={{
              ...style,
              backgroundImage: `url(${item.url})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto",
            }}
          />
        ))}
      </animated.div>
    </div>
  );
}
