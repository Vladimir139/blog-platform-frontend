import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const WrapperPreview = styled("section", {
  width: "100%",
  padding: "90px 90px 0 90px",

  "@media(max-width: 1255px)": {
    padding: "30px 90px 0 90px",
  },

  "@media(max-width: 650px)": {
    padding: "30px 20px 0 20px",
  },
});

export const LeftWrapper = styled("div", {
  width: "100%",
  maxWidth: 799,
});

export const WrapperInfoBlock = styled("div", {
  marginLeft: "auto",
  maxWidth: 614,

  width: "100%",

  "@media(max-width: 1521px)": {
    marginLeft: 0,
  },

  "@media(max-width: 969px)": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    margin: "0 auto",

    "& button": {
      width: "100%",

      borderRadius: 10,

      padding: 18,
    },
  },
});

export const WarningInfoBlock = styled("div", {
  width: "100%",

  position: "relative",

  maxWidth: 741,

  "@media(max-width: 1521px)": {
    top: 0,
  },

  "@media(max-width: 969px)": {
    marginTop: 60,
  },

  "@media(max-width: 650px)": {
    marginTop: 30,
  },
});

export const BlocksWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "@media(max-width: 969px)": {
    flexDirection: "column-reverse",
    justifyContent: "center",
  },

  "@media(max-width: 650px)": {
    gap: 20,
  },

  "@media(max-width: 450px)": {
    marginTop: 90,
  },
});

export const TopWrapper = styled("div", {
  position: "absolute",

  top: -161,

  "@media(max-width: 1521px)": {
    position: "static",

    marginBottom: 10,
  },
});

export const DecorLine = styled("div", {
  height: 141,
  width: 1,

  backgroundColor: "#FFFFFF",
  margin: "0 40px 0",

  "@media(max-width: 1521px)": {
    height: 1,
    width: 141,

    marginLeft: "100px",

    transform: "translateY(-40px)",
  },

  "@media(max-width: 969px)": {
    width: 60,

    marginLeft: "50px",

    transform: "translateY(-20px)",
  },
});

export const BottomWrapper = styled("div", {
  display: "flex",
  alignItems: "center",

  gap: 30,

  "@media(max-width: 1521px)": {
    flexDirection: "column",

    gap: 10,
  },
});

export const CircleIcon = styled("div", {
  position: "relative",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: 999,
  border: "1px solid #FFFFFF",

  width: 81,
  height: 81,

  "@media(max-width: 969px)": {
    width: 34,
    height: 34,
  },
});

export const DecorShadow = styled(Image, {
  width: "876px !important",
  height: "876px !important",

  top: "auto !important",
  right: "auto !important",
  left: "-300px !important",
  bottom: "auto !important",

  zIndex: "$blockBack",

  "@media(max-width: 764px)": {
    left: "-500px !important",
  },

  "@media(max-width: 400px)": {
    display: "none",
  },
});

export const LeftWrapperWarning = styled("div", {});

export const RightWrapperWarning = styled("div", {});

export const WarningText = styled("p", {
  fontFamily: "Inter",
  fontSize: "16px",
  lineHeight: "18px",
  fontWeight: 300,
  letterSpacing: "13px",

  width: "100%",

  "@media(max-width: 650px)": {
    fontSize: "12px",
    lineHeight: "14px",
    fontWeight: 400,
    letterSpacing: "9px",
  },
});

export const WarningDescription = styled("p", {
  fontFamily: "Inter",
  fontSize: "14px",
  lineHeight: "16px",
  fontWeight: 400,

  width: "100%",

  "@media(max-width: 650px)": {
    fontSize: "10px",
    lineHeight: "12px",
  },
});

export const Title = styled("h3", {
  fontSize: "70px",
  lineHeight: "72px",
  fontStyle: "italic",
  fontWeight: 800,

  "@media(max-width: 1676px)": {
    fontSize: "60px",
    lineHeight: "62px",
  },

  "@media(max-width: 1365px)": {
    fontSize: "50px",
    lineHeight: "52px",
  },

  "@media(max-width: 1137px)": {
    fontSize: "40px",
    lineHeight: "42px",
  },

  "@media(max-width: 650px)": {
    fontSize: "35px",
    lineHeight: "37px",
  },

  "@media(max-width: 350px)": {
    fontSize: "30px",
    lineHeight: "32px",
  },
});

export const WordGradient = styled("span", {
  background: "linear-gradient(90deg, rgba(164,108,255,1) 14%, rgba(255,61,0,1) 68%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

export const Description = styled("p", {
  fontSize: "28px",
  lineHeight: "30px",
  fontWeight: 400,

  marginTop: 32,
  marginBottom: 53,

  "@media(max-width: 1676px)": {
    fontSize: "24px",
    lineHeight: "26px",
  },

  "@media(max-width: 1137px)": {
    fontSize: "20px",
    lineHeight: "22px",

    marginTop: 13,
    marginBottom: 25,
  },

  "@media(max-width: 969px)": {
    textAlign: "center",
  },

  "@media(max-width: 650px)": {
    fontSize: "17px",
    lineHeight: "23px",
  },
});

export const TextButton = styled("p", {
  fontSize: "20px",
  lineHeight: "22px",
  fontWeight: 400,

  "& span": {
    fontWeight: 800,
  },
});

export const RightWrapper = styled("div", {});

export const StyledImage = styled(Image, {
  position: "relative !important",

  width: "auto !important",
  height: "auto !important",
  maxWidth: 910,
  maxHeight: 964,

  "@media(max-width: 1676px)": {
    maxWidth: 681,
    maxHeight: 730,
  },

  "@media(max-width: 1365px)": {
    maxWidth: 538,
    maxHeight: 570,
  },

  "@media(max-width: 1137px)": {
    maxWidth: 540,
    maxHeight: 477,
  },

  "@media(max-width: 650px)": {
    maxWidth: 300,
    maxHeight: 317,
  },

  "@media(max-width: 350px)": {
    maxWidth: 271,
    maxHeight: 286,
  },
});
