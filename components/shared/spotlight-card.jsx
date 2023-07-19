"use client";

import * as React from "react";
import { twMerge } from "tailwind-merge";

const SpotlightCard = ({ children, className }) => {
  const containerRef = React.useRef();

  React.useLayoutEffect(() => {
    const c = containerRef.current;
    const cb = (e) => {
      c.style.setProperty("--mouse-x", `${e.layerX}px`);
      c.style.setProperty("--mouse-y", `${e.layerY}px`);
    };

    if (c) {
      c.addEventListener("mousemove", cb);
    }

    return () => {
      c.removeEventListener("mousemove", cb);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={twMerge(
        "group",
        "p-[2px] bg-bdr",
        "relative isolate overflow-hidden",
        className
      )}
    >
      {/* Border highlighter */}
      <div
        className={twMerge(
          "absolute",
          "w-40 h-40 -left-20 -top-20",
          "bg-white opacity-0 rounded-full",
          "pointer-events-none",
          "translate-x-[var(--mouse-x)] translate-y-[var(--mouse-y)]",
          "group-hover:opacity-100",
          "transition-opacity duration-500",
          "blur-[10px]",
          "z-[-1]",
          "translate-z-[10px]"
        )}
      />
      {/* Actual content container */}
      <div
        className={twMerge(
          "bg-base",
          "py-4 px-6 text-lowContrast",
          "translate-z-[20px]",
          "w-full h-full"
        )}
      >
        {children}
      </div>

      {/* Spotlight */}
      <div
        className={twMerge(
          "absolute",
          "w-40 h-40 -left-20 -top-20",
          "bg-neutral-300 opacity-0 rounded-full",
          "pointer-events-none transition-opacity duration-500",
          "translate-x-[var(--mouse-x)] translate-y-[var(--mouse-y)]",
          "blur-[40px]",
          "z-[1]",
          "group-hover:opacity-10",
          "translate-z-[30px]"
        )}
      />
    </div>
  );
};

export default SpotlightCard;
