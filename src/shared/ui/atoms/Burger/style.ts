import { styled } from "@/shared/lib/styles";

export const Burger = styled("span", {
  display: "flex",
  alignItems: "center",
  position: "relative",
  background: "linear-gradient(0deg, #6C52EE, #6C52EE)",
  // radial-gradient(111.76% 447.96% at 0% -100%, #619BFF 20%, rgba(205, 219, 248, 0) 51%),
  // linear-gradient(235.57deg, #9E61FF 0%, rgba(142, 97, 255, 0) 34%);

  transition: "$default",
  border: "none",
  borderRadius: 8,
  outline: "none",
  cursor: "pointer",
  width: 44,
  height: 44,

  padding: "13px 12px 13px 11px",

  zIndex: 15,

  "&::before": {
    content: "",
    backgroundColor: "#FFFFFF",
    position: "absolute",
    width: "21px",
    height: "2px",
    top: "13px",
    left: "0",
    borderRadius: "9999px",
    transform: "rotate(0deg) translateX(50%)",
    transition: "$default",
  },

  "&::after": {
    content: "",
    backgroundColor: "#FFFFFF",
    position: "absolute",
    width: "21px",
    height: "2px",
    bottom: "13px",
    left: "0",
    right: "0",
    borderRadius: "9999px",
    transform: "rotate(0deg) translateX(50%)",
    transition: "$default",
  },

  variants: {
    isActive: {
      true: {
        "&::before": {
          transform: "rotate(45deg) translateX(50%)",
          top: "13px",
          left: "2px",
          height: "2px",

          width: 23,
        },
        "&::after": {
          bottom: "13px",
          left: "2px",
          transform: "rotate(-45deg) translateX(50%)",
          height: "2px",

          width: 23,
        },
      },
    },
  },
});

export const MiddleLine = styled("span", {
  display: "block",
  width: "13px",
  height: "2px",
  backgroundColor: "#FFFFFF",
  borderRadius: "9999px",
  transition: "$default",

  marginLeft: "auto",

  variants: {
    isActive: {
      true: {
        display: "none",
      },
    },
  },
});
