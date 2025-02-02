import React, { useState, useEffect } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";

import styles from "./styles.module.css";

const cards = [
  "/sdgs/E-WEB-Goal-17.png",
  "/sdgs/E-WEB-Goal-16.png",
  "/sdgs/E-WEB-Goal-15.png",
  "/sdgs/E-WEB-Goal-14.png",
  "/sdgs/E-WEB-Goal-13.png",
  "/sdgs/E-WEB-Goal-12.png",
  "/sdgs/E-WEB-Goal-11.png",
  "/sdgs/E-WEB-Goal-10.png",
  "/sdgs/E-WEB-Goal-09.png",
  "/sdgs/E-WEB-Goal-08.png",
  "/sdgs/E-WEB-Goal-07.png",
  "/sdgs/E-WEB-Goal-06.png",
  "/sdgs/E-WEB-Goal-05.png",
  "/sdgs/E-WEB-Goal-04.png",
  "/sdgs/E-WEB-Goal-03.png",
  "/sdgs/E-WEB-Goal-02.png",
  "/sdgs/E-WEB-Goal-01.png",
];

// Helpers for the spring animations
const to = (i) => ({
  x: 0, // Move to the center
  y: i * -4,
  scale: 1.5,
  rotX: -10 + Math.random() * 20, // Slight tilt in X-axis
  rotY: -10 + Math.random() * 20, // Slight tilt in Y-axis
  rotZ: -10 + Math.random() * 20, // Random rotation for dynamic look
  delay: i * 100,
  config: { tension: 120, friction: 30 }, // Adjust tension and friction for slower animation
});

const from = (i) => ({
  x: i % 2 === 0 ? window.innerWidth : -window.innerWidth, // Even cards from the right, odd cards from the left
  y: i * -4,
  scale: 1.5,
  rotX: -30 + Math.random() * 60, // More exaggerated tilt in X-axis
  rotY: -30 + Math.random() * 60, // More exaggerated tilt in Y-axis
  rotZ: -30 + Math.random() * 60, // Exaggerated rotation in Z-axis
  config: { tension: 120, friction: 30 }, // Adjust for smooth initialization speed
});

// Interpolates rotation and scale into a CSS transform with 3D effect
const trans = (rX, rY, rZ, s) =>
  `perspective(1500px) rotateX(${rX}deg) rotateY(${rY}deg) rotateZ(${rZ}deg) scale(${s})`;

export default function BallAnimation() {
  const [gone] = useState(() => new Set()); // Track cards that are flicked out

  // Create springs for the cards
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i), // This is the final state where cards will animate to the center
    from: from(i), // Cards start from left or right based on index
  }));

  // Automatically trigger the animation when the component is mounted
  useEffect(() => {
    api.start((i) => to(i)); // Trigger the animation to move cards to the center
  }, [api]);

  // Drag gesture for flicking the cards
  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.1; // If velocity is above threshold, flick the card
      const dir = xDir < 0 ? -1 : 1; // Left or right direction

      if (!down && trigger) gone.add(index); // Mark the card as flicked out

      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // Fly out when flicked, otherwise return to center
        const rotZ = mx / 100 + (isGone ? dir * 10 * velocity : 0); // Rotate more noticeably on Z-axis based on movement
        const scale = down ? 1.1 : 1.5;
        return {
          x,
          rotZ,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }, // Maintain smoother swipe animation config
        };
      });

      if (!down && gone.size === cards.length) {
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i)); // Reset cards to their original positions
        }, 600);
      }
    }
  );

  return (
    <div
      className="flex justify-center items-center"
      style={{ height: "300px", width: "100vw" }}
    >
      {props.map(({ x, y, rotX, rotY, rotZ, scale }, i) => (
        <animated.div
          className={`${styles.deck} flex`}
          key={i}
          style={{ x, y, width: "100%", height: "100%" }}
        >
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rotX, rotY, rotZ, scale], trans),
              backgroundImage: `url(${cards[i]})`,
              width: "100%",
              height: "100%",

              backgroundPosition: "center",
            }}
          />
        </animated.div>
      ))}
    </div>
  );
}
