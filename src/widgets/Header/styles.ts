import { styled } from "@/shared/lib/styles";

export const HeaderWrapper = styled("header", {
  padding: "61px 90px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  maxHeight: 59,

  "@media(max-width: 650px)": {
    padding: "61px 20px",
  },

  "@media(max-width: 490px)": {
    gap: 20,

    maxHeight: "auto",
  },

  "@media(max-width: 368px)": {
    flexDirection: "column",

    padding: "20px",
  },
});

export const LeftWrapper = styled("div", {});

export const RightWrapper = styled("div", {
  "@media(max-width: 368px)": {
    width: "100%",
  },
});
