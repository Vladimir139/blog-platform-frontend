import Image from "next/image";

import { keyframes, styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  marginTop: 110,

  position: "relative",
});

export const DecorImageBlueLongGlow = styled(Image, {
  top: "-20% !important",
  left: "-15% !important",
  right: "auto !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "1728px !important",
  height: "1240px !important",
});

export const DecorImageRubinGlowLeft = styled(Image, {
  top: "150px !important",
  left: "auto !important",
  right: "0 !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "732px !important",
  height: "600px !important",
});

export const DecorImageRubinGlowBottom = styled(Image, {
  top: "auto !important",
  left: "-150px !important",
  right: "auto !important",
  bottom: "-360px !important",

  zIndex: -5,

  width: "732px !important",
  height: "600px !important",
});

export const WrapperRoadmap = styled("div", {
  position: "relative",
  overflowX: "scroll",

  justifyContent: "center",

  width: "100%",
  height: "839px",

  marginTop: 27,

  "@media(max-width: 768px)": {
    height: "504px",
  },
});

export const RoadmapLine = styled(Image, {
  width: "2674px !important",
  height: "501px !important",
  objectFit: "cover",
});

const moveSideToSide = keyframes({
  "0%": { transform: "translateX(0px)" },
  "50%": { transform: "translateX(-50px)" },
  "100%": { transform: "translateX(0px)" },
});

export const ScrollHelper = styled("div", {
  width: "85px",
  height: "85px",

  position: "absolute",

  top: "50%",
  right: "50px",

  zIndex: 5,

  backgroundColor: "#09093F",

  border: "1px solid #645EA9",
  borderRadius: 9999,

  animation: `${moveSideToSide} 2s infinite`,

  "& svg": {
    position: "absolute",
    left: "50%",
    top: "50%",

    transform: "translateY(-50%)",
  },

  transition: "opacity 0.5s ease-in-out",
  opacity: 1,

  "@media(max-width: 768px)": {
    top: "45%",
  },

  variants: {
    hidden: {
      true: {
        opacity: 0,
      },
    },
  },
});

export const RoadmapLineMobile = styled(Image, {
  width: "2674px !important",
  height: "501px !important",
  objectFit: "cover",

  display: "none",

  "@media(max-width: 768px)": {
    display: "block",

    left: "2674px !important",
  },
});

export const PhaseBlock = styled("div", {
  position: "absolute",

  padding: "32px 26px 18px 13px",

  width: 463,
  height: 308,

  background: "#09093F",

  borderRadius: 10,

  variants: {
    blockNumber: {
      1: {
        top: 95,
        left: 46,
      },
      2: {
        top: 528,
        left: 281,

        "@media(max-width: 768px)": {
          top: 95,
          left: 650,
        },
      },
      3: {
        top: 95,
        left: 650,

        "@media(max-width: 768px)": {
          top: 95,
          left: 1275,
        },
      },
      4: {
        top: 528,
        left: 879,

        "@media(max-width: 768px)": {
          top: 95,
          left: 1988,
        },
      },
      5: {
        top: 95,
        left: 1275,

        "@media(max-width: 768px)": {
          top: 95,
          left: 2610,
        },
      },
      6: {
        top: 528,
        left: 1614,

        "@media(max-width: 768px)": {
          top: 95,
          left: 3315,
        },
      },
      7: {
        top: 95,
        left: 1988,

        "@media(max-width: 768px)": {
          top: 95,
          left: 3945,
        },
      },
      8: {
        top: 528,
        left: 2174,

        "@media(max-width: 768px)": {
          top: 95,
          left: 4645,
        },
      },
    },
  },
});

export const PhaseBlueTitle = styled("p", {
  fontSize: 19,
  fontWeight: 400,
  lineHeight: "22px",

  color: "#8D5DFA",
});

export const PhaseTitle = styled("p", {
  fontSize: 19,
  fontWeight: 400,
  lineHeight: "22px",

  color: "#FFFFFF",
  letterSpacing: "0.5px",

  marginTop: 19,
  marginBottom: 19,

  maxWidth: 314,
});

export const Description = styled("p", {
  fontSize: 15,
  fontWeight: 400,
  lineHeight: "22px",
  letterSpacing: "0.5px",

  color: "#FFFFFFB0",
});
