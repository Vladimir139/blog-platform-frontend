import Image from "next/image";

import { styled } from "@/shared/lib/styles";

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

  justifyContent: "center", // Центрирует контент

  width: "100%",
  height: "839px",

  marginTop: 27,
});

export const RoadmapLine = styled(Image, {
  width: "2674px !important",
  height: "501px !important",
  objectFit: "cover",
});

export const DecorImageBluePlanet = styled(Image, {
  top: "-50px !important",
  left: "-200px !important",
  right: "auto !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "213px !important",
  height: "232px !important",
});

export const DecorImagePinkNlo = styled(Image, {
  top: "100px !important",
  left: "auto !important",
  right: "-140px !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "153px !important",
  height: "156px !important",
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
      },
      3: {
        top: 95,
        left: 650,
      },
      4: {
        top: 528,
        left: 879,
      },
      5: {
        top: 95,
        left: 1275, // доделать
      },
      6: {
        top: 528,
        left: 1614,
      },
      7: {
        top: 95,
        left: 1988, // доделать
      },
      8: {
        top: 528,
        left: 2174,
      },
    },
  },
});

export const PhaseBlueTitle = styled("p", {
  fontSize: 19,
  fontWeight: 400,
  lineHeight: "22px",

  color: "#306CFEF5",
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
