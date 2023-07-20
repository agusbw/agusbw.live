"use client";

import * as React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const baseClass =
  "hover:text-highContrast pl-2 data-[level=three]:ml-3 data-[level=four]:ml-6  relative before:content-[''] before:absolute before:inset-y-0.5 before:left-0 before:transition-all   before:duration-300 before:ease-out";

function useHighlighted(id) {
  const observer = React.useRef();
  const [activeId, setActiveId] = React.useState("");

  React.useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: "0% 0% -80% 0px",
    });

    const elements = document.querySelectorAll("h2, h3, h4");
    elements.forEach((elem) => observer.current.observe(elem));
    return () => observer.current?.disconnect();
  }, []);

  return [activeId === id, setActiveId];
}

const TOClink = ({ children, className, headingId, ...props }) => {
  const [highlighted, setHighlighted] = useHighlighted(headingId);

  const handleOnClick = (e) => {
    e.preventDefault();
    const topOfElements = document.getElementById(headingId).offsetTop - 105;
    window.scroll({
      top: topOfElements,
      behavior: "smooth",
    });
    setHighlighted(headingId);
  };

  return (
    <Link
      href={`#${headingId}`}
      className={twMerge(
        baseClass,
        className,
        ` ${
          highlighted
            ? "before:w-1 before:bg-highContrast text-highContrast"
            : "before:w-0"
        }`
      )}
      onClick={(e) => {
        handleOnClick(e);
      }}
      {...props}
    >
      {children}
    </Link>
  );
};
export default TOClink;
