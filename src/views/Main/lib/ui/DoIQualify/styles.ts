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
  margin: "274px auto 0",

  "@media(max-width: 1450px)": {
    flexDirection: "column-reverse",

    alignItems: "center",

    gap: 100,

    padding: "0 0 256px",

    overflow: "hidden",
  },

  "@media(max-width: 650px)": {
    padding: "0px 20px 200px",
  },
});

export const LeftWrapper = styled("div", {});

export const RightWrapper = styled("div", {});

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
  lineHeight: "82px",
  fontWeight: 600,

  textAlign: "center",

  background: "$orangeToPinkGradient",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",

  "@media(max-width: 830px)": {
    fontSize: "65px",
    lineHeight: "67px",
  },
});

export const SubText = styled("p", {
  textAlign: "center",

  margin: "8px auto 40px",

  maxWidth: 400,

  "@media(max-width: 830px)": {
    fontSize: "16px",
    lineHeight: "18px",
  },
});

export const BlockList = styled("div", {
  marginBottom: 38,

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
});

export const Block = styled("div", {
  backgroundColor: "$secondBlock",

  display: "flex",
  alignItems: "center",

  gap: 20,

  borderRadius: 20,

  padding: 15,
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

  marginTop: 20,
});
