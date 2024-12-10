import { styled } from "@/shared/lib/styles";

export const Loader = styled("svg", {
  display: "block",
  "& > path": {
    fill: "$primary",
  },

  variants: {
    center: {
      true: {
        margin: "0 auto",
      },
    },
  },
});
