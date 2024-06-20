import { styled } from "@/shared/lib/styles";

export const Container = styled("div", {
  width: "100%",
  maxWidth: 1540,

  padding: "0 90px",
  margin: "0 auto",

  "@media(max-width: 650px)": {
    padding: "0px 20px",
  },
});
