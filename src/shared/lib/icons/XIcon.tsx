import React, { FC } from "react";

export const XIcon: FC<{ size?: "small" | "medium"; theme?: "dark" | "light" }> = ({
  size,
  theme,
}) => {
  // size small
  if (size === "small") {
    return (
      <svg
        width="18"
        height="17"
        viewBox="0 0 50 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.121668 0.388672L19.4261 26.4345L0 47.6109H4.3725L21.3803 29.0703L35.1217 47.6109H50L29.6089 20.1003L47.6908 0.388672H43.3186L27.6556 17.4639L15 0.388672H0.121668ZM6.55139 3.63839H13.3864L43.5694 44.3614H36.7344L6.55139 3.63839Z"
          fill={theme === "dark" ? "black" : "white"}
        />
      </svg>
    );
  }

  // size medium
  if (size === "medium") {
    return (
      <svg
        width="47"
        height="44"
        viewBox="0 0 50 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.121668 0.388672L19.4261 26.4345L0 47.6109H4.3725L21.3803 29.0703L35.1217 47.6109H50L29.6089 20.1003L47.6908 0.388672H43.3186L27.6556 17.4639L15 0.388672H0.121668ZM6.55139 3.63839H13.3864L43.5694 44.3614H36.7344L6.55139 3.63839Z"
          fill={theme === "dark" ? "black" : "white"}
        />
      </svg>
    );
  }

  // size big
  return (
    <svg width="50" height="47" viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.121668 0.388672L19.4261 26.4345L0 47.6109H4.3725L21.3803 29.0703L35.1217 47.6109H50L29.6089 20.1003L47.6908 0.388672H43.3186L27.6556 17.4639L15 0.388672H0.121668ZM6.55139 3.63839H13.3864L43.5694 44.3614H36.7344L6.55139 3.63839Z"
        fill={theme === "dark" ? "black" : "white"}
      />
    </svg>
  );
};
