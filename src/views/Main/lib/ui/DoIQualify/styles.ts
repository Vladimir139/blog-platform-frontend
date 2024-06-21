import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",

  gap: 10,

  width: "100%",
  maxWidth: 1540,

  padding: "0 90px 256px",
  margin: "293px auto 0",

  "@media(max-width: 1450px)": {
    flexDirection: "column-reverse",

    alignItems: "center",

    gap: 100,

    padding: "0 0 256px",

    overflow: "hidden",
  },

  "@media(max-width: 650px)": {
    padding: "0px 20px 200px",

    margin: "115px auto 0",
  },
});

export const LeftWrapper = styled("div", {});

export const RightWrapper = styled("div", {});

export const InnerWrapperMint = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const TopTitleMint = styled("p", {
  fontSize: "40px",
  lineHeight: "42px",

  "& span": {
    fontWeight: 800,
  },

  "@media(max-width: 830px)": {
    fontSize: "32px",
    lineHeight: "34px",
  },

  "@media(max-width: 600px)": {
    fontSize: "28px",
    lineHeight: "30px",
  },

  "@media(max-width: 505px)": {
    fontSize: "24px",
    lineHeight: "46px",
  },

  "@media(max-width: 450px)": {
    fontSize: "20px",
    lineHeight: "22px",
  },

  "@media(max-width: 330px)": {
    fontSize: "16px",
    lineHeight: "18px",
  },
});

export const WrapperImage = styled("div", {
  position: "relative",
});

export const StyledImage = styled(Image, {
  position: "relative !important",

  width: "auto !important",
  height: "auto !important",
  maxWidth: 510,
  maxHeight: 510,

  "@media(max-width: 630px)": {
    width: "430px !important",
    height: "430px !important",
  },

  "@media(max-width: 470px)": {
    width: "390px !important",
    height: "400px !important",
  },

  "@media(max-width: 430px)": {
    width: "280px !important",
    height: "290px !important",
  },
});

export const DecorImage = styled(Image, {
  width: "auto !important",
  height: "auto !important",
  maxWidth: 649,
  maxHeight: 689,

  top: "-40px !important",
  bottom: "auto !important",
  left: "0 !important",
  right: "auto !important",

  zIndex: "$blockBack",

  "@media(max-width: 630px)": {
    width: "539px !important",
    height: "619px !important",
  },

  "@media(max-width: 470px)": {
    width: "489px !important",
    height: "599px !important",
  },

  "@media(max-width: 430px)": {
    width: "369px !important",
    height: "429px !important",
  },
});

export const Title = styled("h3", {
  fontSize: "80px",
  lineHeight: "110%",
  fontWeight: 600,

  paddingBottom: 5,

  textAlign: "center",

  background: "$orangeToPinkGradient",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  "@media(max-width: 830px)": {
    fontSize: "65px",
    lineHeight: "67px",
  },

  "@media(max-width: 600px)": {
    fontSize: "55px",
    lineHeight: "57px",
  },

  "@media(max-width: 505px)": {
    fontSize: "45px",
    lineHeight: "47px",
  },

  "@media(max-width: 450px)": {
    fontSize: "35px",
    lineHeight: "37px",
  },

  "@media(max-width: 330px)": {
    fontSize: "30px",
    lineHeight: "32px",
  },
});

export const SubText = styled("p", {
  textAlign: "center",

  margin: "11px auto 42px",

  maxWidth: 400,

  "@media(max-width: 830px)": {
    fontSize: "16px",
    lineHeight: "18px",
  },
});

export const BlockList = styled("div", {
  marginBottom: 40,

  display: "grid",
  gridTemplateColumns: "1fr 1fr",

  gap: 10,

  "@media(max-width: 740px)": {
    gridTemplateColumns: "1fr",
  },
});

export const InnerWrapBtn = styled("div", {
  display: "flex",
  alignItems: "center",

  gap: 10,

  "& span": {
    fontWeight: 700,
  },
});

export const Block = styled("div", {
  backgroundColor: "$secondBlock",

  position: "relative",

  display: "flex",
  alignItems: "center",

  gap: 20,

  borderRadius: 20,

  padding: 15,

  variants: {
    isActive: {
      true: {
        background: "$orangeToPinkVertical",
      },
    },
  },
});

export const DoneIconWrapper = styled("div", {
  position: "absolute",

  display: "none",

  top: 10,
  right: 10,

  variants: {
    isActive: {
      true: {
        display: "block",
      },
    },
  },
});

export const IconWrapper = styled("div", {
  padding: "25px 28px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  height: "100%",
  width: "100%",
  maxWidth: 100,
  maxHeight: 100,

  borderRadius: 10,

  backgroundColor: "$lightBlock",
});

export const BlockText = styled("p", {
  maxWidth: 200,

  "@media(max-width: 830px)": {
    fontSize: "16px",
    lineHeight: "20px",
  },
});

export const LittleSubText = styled("p", {
  textAlign: "center",

  fontSize: "$default",
  lineHeight: "18px",
  fontWeight: 500,

  marginTop: 12,
});
