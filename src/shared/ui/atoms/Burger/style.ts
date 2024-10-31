import { styled } from "@/shared/lib/styles";

export const Burger = styled("span", {
  display: "flex",
  alignItems: "center",
  position: "relative",
  backgroundColor: "inherit",
  transition: "$default",
  border: "none",
  outline: "none",
  cursor: "pointer",
  width: 22,
  height: 22,

  zIndex: 15,

  "&::before": {
    content: "",
    backgroundColor: "#FFFFFF",
    position: "absolute",
    width: "100%",
    height: "2px",
    top: "0",
    left: "0",
    borderRadius: "9999px",
    transform: "rotate(0deg)",
    transition: "$default",
  },

  "&::after": {
    content: "",
    backgroundColor: "#FFFFFF",
    position: "absolute",
    width: "100%",
    height: "2px",
    bottom: "0",
    left: "0",
    borderRadius: "9999px",
    transform: "rotate(0deg)",
    transition: "$default",
  },

  variants: {
    isActive: {
      true: {
        "&::before": {
          width: "120%",
          transform: "rotate(45deg)",
          top: "45%",
          height: "2px",
        },
        "&::after": {
          width: "120%",
          top: "45%",
          transform: "rotate(-45deg)",
          height: "2px",
        },
      },
    },
  },
});

export const MiddleLine = styled("span", {
  display: "block",
  width: "100%",
  height: "2px",
  backgroundColor: "#FFFFFF",
  borderRadius: "9999px",
  transition: "$default",

  variants: {
    isActive: {
      true: {
        display: "none",
      },
    },
  },
});
