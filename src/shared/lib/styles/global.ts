import { globalCss } from "@stitches/react";

export const setupStyles = globalCss({
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    fontFamily: "$Inter",
    fontSize: "16px",
    lineHeight: "18px",
    transition: "$long",
  },
  "#__next": {
    display: "grid",
    minHeight: "100vh",
  },
  a: {
    cursor: "pointer",
    color: "inherit",
  },
  ul: {
    padding: 0,
    margin: 0,
  },
  ol: {
    padding: 0,
    margin: 0,
  },
  "*, ::before, ::after": {
    boxSizing: "border-box",
  },
  "h1, h2, h3, h4, h5, h6, p": {
    margin: 0,
    padding: 0,
  },
  ".visually-hidden": {
    position: "absolute",
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    whiteSpace: "nowrap",
    clipPath: "inset(100%)",
    clip: "rect(0 0 0 0)",
    overflow: "hidden",
  },
});
