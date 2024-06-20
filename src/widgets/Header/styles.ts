import Image from "next/image";

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

export const DecorShadow = styled(Image, {
  width: "1329px !important",
  height: "1329px !important",

  top: "-400px !important",
  right: "auto !important",
  left: "auto !important",
  bottom: "auto !important",

  zIndex: "$blockBack",

  "@media(max-width: 1444px)": {
    left: "-150px !important",
  },

  "@media(max-width: 1200px)": {
    top: "-350px !important",
    left: "250px !important",

    width: "700px !important",
    height: "700px !important",
  },

  "@media(max-width: 960px)": {
    left: "100px !important",
  },

  "@media(max-width: 850px)": {
    left: "50px !important",
  },

  "@media(max-width: 750px)": {
    width: "350px !important",
    height: "350px !important",

    top: "-200px !important",
    left: "210px !important",
  },

  "@media(max-width: 620px)": {
    left: "80px !important",
  },

  "@media(max-width: 450px)": {
    left: "60px !important",
    top: "-150px !important",

    width: "320px !important",
    height: "320px !important",
  },
});

export const LeftWrapper = styled("div", {});

export const RightWrapper = styled("div", {
  "@media(max-width: 368px)": {
    width: "100%",
  },
});
