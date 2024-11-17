import { styled } from "@/shared/lib/styles";

export const Button = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background: "#4182F9",

  fontSize: 16,
  fontWeight: 500,
  lineHeight: "18px",
  textAlign: "center",

  color: "#FFFFFF",

  borderRadius: 10,

  padding: 11,

  border: "none",
  outline: "none",

  variants: {
    theme: {
      orange: {
        background: "#F99141",
      },
    },
    stretch: {
      true: {
        width: "100%",
      },
    },
    disabled: {
      true: {
        opacity: 0.625,
        cursor: "not-allowed",
        pointerEvents: "none",
      },
    },
  },
});
