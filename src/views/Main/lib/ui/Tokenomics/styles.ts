import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  position: "relative",

  marginTop: 88,

  "@media (max-width: 600px)": {
    marginTop: 25,
  },
});

export const WrapperTokenInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  width: "100%",
  maxWidth: 312,

  height: 347,

  borderRadius: 20,
  border: "1px solid #64669C",
  padding: 22,
});

export const InnerWrapperTokenomics = styled("div", {
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",

  gap: 10,

  marginTop: 60,

  "@media (max-width: 1050px)": {
    alignItems: "center",
    flexDirection: "column",

    gap: 50,
  },
});

export const Divider = styled("div", {
  width: "100%",
  height: 1,

  backgroundColor: "#64669C",
});

export const StyledTokenomicsPhoto = styled(Image, {
  position: "relative !important",

  width: "682px !important",
  height: "365px !important",

  "@media(max-width: 660px)": {
    width: "502px !important",
    height: "268px !important",
  },

  "@media(max-width: 480px)": {
    width: "365px !important",
    height: "260px !important",
  },

  "@media(max-width: 360px)": {
    width: "310px !important",
    height: "220px !important",
  },
});

export const Percentages = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",

  gap: 5,

  marginTop: 10,

  "@media(max-width: 1074px)": {
    justifyContent: "center",
    flexWrap: "wrap",

    gap: 20,
  },
});

export const WrapperPercentages = styled("div", {
  marginTop: 152,

  "@media(max-width: 600px)": {
    marginTop: 80,
  },
});

export const DecorImageRubinGlow = styled(Image, {
  top: "20% !important",
  left: "20% !important",
  right: "auto !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "732px !important",
  height: "600px !important",
});

export const DecorImageBlueGlowOval = styled(Image, {
  top: "-30% !important",
  left: "auto !important",
  right: "0px !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "894px !important",
  height: "1078px !important",
});

export const VeriticalDivider = styled("div", {
  height: 275,
  width: 1,

  backgroundColor: "#64669C",

  "@media(max-width: 1074px)": {
    display: "none",
  },

  variants: {
    noHidden: {
      true: {
        "@media(max-width: 1074px)": {
          display: "block",
        },

        "@media(max-width: 690px)": {
          height: 315,
        },

        "@media(max-width: 640px)": {
          display: "none",
        },
      },
    },
  },
});

export const TokenInfoBlockTokenInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "center",
});

export const TokenInfoBlock = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "33.3%",

  textAlign: "start",

  gap: 15,

  marginTop: 30,

  "@media(max-width: 1074px)": {
    width: "45%",
  },

  "@media(max-width: 640px)": {
    width: "auto",
    gap: 0,
    marginTop: 0,
  },
});

export const BlockTitleTokenInfo = styled("p", {
  fontSize: 20,
  lineHeight: "54px",
  fontWeight: 400,

  color: "#CACFFF",
});

export const BlockValueTokenInfo = styled("p", {
  fontSize: 20,
  lineHeight: "31px",
  fontWeight: 400,
});

export const BlockTitle = styled("p", {
  fontSize: 30,
  lineHeight: "38px",
  fontWeight: 400,

  color: "#CACFFF",

  textAlign: "center",

  "@media(max-width: 600px)": {
    fontSize: 20,
  },
});

export const BlockValue = styled("p", {
  fontSize: 18,
  lineHeight: "31px",
  fontWeight: 400,

  textAlign: "center",

  "& span": {
    color: "#6C52EE",
  },

  "@media(max-width: 600px)": {
    fontSize: 14,
    lineHeight: "20px",
  },
});
