import { styled } from "@/shared/lib/styles";

export const Button = styled("button", {
  background: "$pinkToBlueGradient",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px",

  cursor: "pointer",

  color: "$text",

  fontSize: "$large",

  border: "none",
  borderRadius: 20,

  variants: {
    stretch: {
      true: {
        width: "100%",
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
      },
    },
  },
});
