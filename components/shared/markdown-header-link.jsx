"use client";

import Link from "next/link";

const MarkdownHeaderLink = ({ headingId, children, ...props }) => {
  return (
    <Link
      href={`#${headingId}`}
      className={
        "text-highContrast inline-block no-underline hover:no-underline"
      }
      onClick={(e) => {
        e.preventDefault();
        const topOfElements =
          document.getElementById(headingId).offsetTop - 105;
        window.scroll({
          top: topOfElements,
          behavior: "smooth",
        });
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default MarkdownHeaderLink;
