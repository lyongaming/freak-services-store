import React, { useEffect, useRef } from "react";

import "./background.css";

export const SquaresBackground = ({ children }) => {
  const backgroundRef = useRef();

  useEffect(() => {
    for (let i = 0; i < 26; i++) {
        const li = document.createElement("li");

        const random = (min, max) => Math.random() * (max - min) + min;

        const size = Math.floor(random(10, 120));
        const positionRight = random(68, 99);
        const positionLeft = random(1, 32);

        const delay = i === 0 ? 1 : random(5, 0.1);
        const duration = random(10, 20);

        let position = 0;
        position = i % 2 === 0 ? positionRight : positionLeft;

        li.style.width = `${size}px`;
        li.style.height = `${size}px`;
        li.style.bottom = `-${size}px`;
        li.style.left = `${position}%`;
        li.style.animationDelay = `${delay}s`;
        li.style.animationDuration = `${duration}s`;
        li.style.animationTimingFunction = `cubic-bezier: ${Math.random()}, ${
            Math.random
        }, ${Math.random},${Math.random}`;
        
        backgroundRef.current.appendChild(li);
    }
  }, []);

  return (
    <>
      { children }
      <ul className="squares" ref={backgroundRef}></ul>;
    </>
  );
};
