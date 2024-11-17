import { styled } from "@/shared/lib/styles";

export const TextLabel = styled("span", {
  width: "100%",

  fontSize: 18,
  lineHeight: "20px",
  fontWeight: 400,

  marginBottom: 6,
});

export const Input = styled("input", {
  fontSize: 16,
  lineHeight: "18px",
  fontWeight: 500,

  borderRadius: 12,
  border: "1px solid #C4C4C4",

  color: "#000000",

  width: "100%",
  padding: 12,

  outline: "none",

  "&:disabled": {
    opacity: 0.8,
    cursor: "not-allowed",
  },

  variants: {
    size: {
      default: {},
    },
    radius: {
      default: {},
    },
    theme: {
      default: {},
    },
  },
});

export const Label = styled("label", {
  position: "relative",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  variants: {
    stretch: {
      true: {
        width: "100%",
      },
    },
  },
});

export const Error = styled("span", {
  display: "block",

  marginTop: 4,

  fontSize: "10",
  lineHeight: "12px",
  fontWeight: 400,
  color: "red",

  width: "100%",
});
