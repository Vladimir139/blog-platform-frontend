import Image from "next/image";

import { keyframes, styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  marginTop: 110,

  position: "relative",

  "@media(max-width: 650px)": {
    marginTop: 53,
  },
});

export const DecorImageBlueLongGlow = styled(Image, {
  top: "-20% !important",
  left: "-15% !important",
  right: "auto !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "1728px !important",
  height: "1240px !important",

  "@media(max-width: 650px)": {
    display: "none",
  },
});

export const DecorImageRubinGlowLeft = styled(Image, {
  top: "150px !important",
  left: "auto !important",
  right: "0 !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "732px !important",
  height: "600px !important",

  "@media(max-width: 650px)": {
    display: "none",
  },
});

export const DecorImageRubinGlowBottom = styled(Image, {
  top: "auto !important",
  left: "-150px !important",
  right: "auto !important",
  bottom: "-360px !important",

  zIndex: -5,

  width: "732px !important",
  height: "600px !important",

  "@media(max-width: 650px)": {
    display: "none",
  },
});

export const WrapperRoadmap = styled("div", {
  position: "relative",
  overflowX: "scroll",

  width: "100%",
  height: "839px",

  marginTop: 27,

  "@media(max-width: 768px)": {
    height: "361px",
  },
});

export const RoadmapLine = styled(Image, {
  width: "2674px !important",
  height: "501px !important",
  objectFit: "cover",

  "@media(max-width: 768px)": {
    display: "none",
  },
});

const moveSideToSide = keyframes({
  "0%": { transform: "translateX(0px)" },
  "50%": { transform: "translateX(-50px)" },
  "100%": { transform: "translateX(0px)" },
});

export const ScrollHelper = styled("div", {
  width: "85px",
  height: "85px",

  cursor: "pointer",

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

export const ScrollHelperBottom = styled("div", {
  width: "85px",
  height: "85px",

  cursor: "pointer",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "#09093F",

  border: "1px solid #645EA9",
  borderRadius: "9999px",
  position: "relative",

  margin: "33px auto 0",

  "& svg": {
    position: "absolute",
    left: "50%",
    top: "50%",

    transform: "translateY(-50%)",
  },
});

export const PhaseBlock = styled("div", {
  position: "absolute",

  padding: "32px 26px 18px 13px",

  width: 463,
  height: 308,

  background: "#09093F",

  borderRadius: 10,

  "@media(max-width: 768px)": {
    padding: "22px 7px 21px 30px",

    width: "300px",
    height: 405,

    position: "relative",
    top: "auto !important",
    left: "auto !important",
    right: "auto !important",
    bottom: "auto !important",
  },

  variants: {
    blockNumber: {
      1: {
        top: 95,
        left: 46,
      },
      2: {
        top: 528,
        left: 281,

        // "@media(max-width: 768px)": {
        //   // top: 95,
        //   // left: 650,
        // },
      },
      3: {
        top: 95,
        left: 650,

        // "@media(max-width: 768px)": {
        //   // top: 95,
        //   // left: 1275,
        // },
      },
      4: {
        top: 528,
        left: 879,

        // "@media(max-width: 768px)": {
        //   // top: 95,
        //   // left: 1988,
        // },
      },
      5: {
        top: 95,
        left: 1275,

        // "@media(max-width: 768px)": {
        //   // top: 95,
        //   // left: 2610,
        // },
      },
      6: {
        top: 528,
        left: 1614,

        // "@media(max-width: 768px)": {
        //   // top: 95,
        //   // left: 3315,
        // },
      },
      7: {
        top: 95,
        left: 1988,

        // "@media(max-width: 768px)": {
        //   // top: 95,
        //   // left: 3945,
        // },
      },
      8: {
        top: 528,
        left: 2174,

        // "@media(max-width: 768px)": {
        //   // top: 95,
        //   // left: 4645,
        // },
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

  "@media(max-width: 768px)": {
    marginTop: 17,
    marginBottom: 15,
  },
});

export const Description = styled("p", {
  fontSize: 15,
  fontWeight: 400,
  lineHeight: "22px",
  letterSpacing: "0.5px",

  color: "#FFFFFFB0",

  "@media(max-width: 768px)": {
    fontSize: 14,
  },
});

export const WrapperSwiper = styled("div", {
  marginTop: 33,
  marginLeft: 10,

  width: "100%",
});
