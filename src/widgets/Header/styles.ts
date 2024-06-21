import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const HeaderWrapper = styled("header", {
  position: "relative",

  padding: "61px 90px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media(max-width: 650px)": {
    padding: "61px 20px",
  },

  "@media(max-width: 490px)": {
    padding: "20px",

    gap: 20,
  },

  "@media(max-width: 368px)": {
    flexDirection: "column",
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

  overflow: "hidden",

  "@media(max-width: 1444px)": {
    left: "-150px !important",
  },

  "@media(max-width: 1200px)": {},

  "@media(max-width: 900px)": {
    left: "-250px !important",
  },

  "@media(max-width: 770px)": {
    left: "-350px !important",
  },

  "@media(max-width: 500px)": {
    left: "-450px !important",
    top: "-730px !important",
  },

  "@media(max-width: 420px)": {
    top: "-850px !important",
  },
});

export const LeftWrapper = styled("div", {});

export const RightWrapper = styled("div", {
  "@media(max-width: 368px)": {
    width: "100%",
  },
});
