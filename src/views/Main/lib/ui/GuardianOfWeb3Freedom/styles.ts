import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  width: "100%",
});

export const Title = styled("h3", {
  fontSize: "50px",
  fontWeight: 800,
  lineHeight: "52px",

  textAlign: "center",

  marginTop: 272,

  "@media(max-width: 1140px)": {
    fontSize: "40px",
    lineHeight: "42px",

    marginTop: 203,
  },

  "@media(max-width: 670px)": {
    fontSize: "30px",
    lineHeight: "32px",
  },

  "@media(max-width: 580px)": {
    fontSize: "26px",
    lineHeight: "30px",
  },
});

export const BlockInfoList = styled("ul", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  justifyContent: "space-between",

  width: "100%",

  listStyle: "none",

  gap: 22,

  padding: 0,

  marginTop: 61,
  marginBottom: 73,

  "@media(max-width: 1140px)": {
    marginTop: 40,
    marginBottom: 50,
  },

  "@media(max-width: 980px)": {
    gridTemplateColumns: "1fr 1fr",
    justifyContent: "center",
    alignItems: "center",

    "& > li:last-child:nth-child(odd)": {
      gridColumn: "1 / -1",
      justifySelf: "center",
    },
  },

  "@media(max-width: 620px)": {
    gridTemplateColumns: "1fr",
  },
});

export const BlockInfo = styled("li", {
  backgroundColor: "$block",

  fontFamily: "$inter",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  textAlign: "center",

  borderRadius: 20,
  padding: 20,

  variants: {
    isGradient: {
      true: {
        background: "$orangeToPinkGradient",
      },
    },
  },

  "@media(max-width: 1140px)": {
    fontSize: "16px",
    lineHeight: "18px",
    fontWeight: 400,
  },
});

export const WrapperVideo = styled("div", {
  position: "relative",

  backgroundColor: "#000000",

  width: "100% !important",
  height: "537px !important",

  borderRadius: 40,

  margin: "0 auto",

  "@media(max-width: 1140px)": {
    height: "477px !important",
  },

  "@media(max-width: 1024px)": {
    height: "417px !important",
  },

  "@media(max-width: 900px)": {
    height: "377px !important",
  },

  "@media(max-width: 670px)": {
    height: "300px !important",
  },

  "@media(max-width: 490px)": {
    height: "218px !important",
  },
});

export const DecorSquare = styled(Image, {
  maxWidth: 320,
  maxHeight: 320,

  top: "auto !important",
  right: "auto !important",
  bottom: "-110px !important",
  left: "-197px !important",
  zIndex: "$blockBack",

  "@media(max-width: 764px)": {
    maxWidth: 210,
    maxHeight: 210,

    bottom: "-70px !important",
    left: "-80px !important",
  },
});

export const DecorShadow = styled(Image, {
  maxWidth: 822,
  maxHeight: 403,

  top: "auto !important",
  right: "auto !important",
  left: "50% !important",
  bottom: "-110px !important",

  transform: "translateX(-50%)",
  zIndex: "$blockBack",

  "@media(max-width: 764px)": {
    bottom: "-90px !important",
  },
});
