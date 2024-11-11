import { styled } from "@/shared/lib/styles";

export const Container = styled("div", {
  width: "100%",
  maxWidth: 1280,

  padding: "0 86px 0 104px",
  margin: "0 auto",

  "@media(max-width: 1279px)": {
    padding: "0 46px 0 64px",
  },

  "@media(max-width: 750px)": {
    padding: "0 26px 0 44px",
  },

  "@media(max-width: 650px)": {
    padding: "0 26px 0 26px",
  },

  "@media(max-width: 550px)": {
    padding: "0 10px 0 10px",
  },
});
