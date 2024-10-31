import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  overflow: "hidden",
});

export const DecorImageStars = styled(Image, {
  top: "-108px !important",
  left: "50% !important",
  right: "auto !important",
  bottom: "auto !important",

  transform: "translateX(-50%)",

  zIndex: -5,

  width: "1016px !important",
  height: "269px !important",

  "@media(max-width: 530px)": {
    top: "-50px !important",
  },
});

export const DecorImageBigGlow = styled(Image, {
  top: "auto !important",
  left: "50% !important",
  right: "auto !important",
  bottom: "-50% !important",

  zIndex: -5,

  transform: "translateX(-50%)",

  width: "1514px !important",
  height: "492px !important",
});

export const DecorImageRubinGlow = styled(Image, {
  top: "-350px !important",
  left: "auto !important",
  right: "-80% !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "732px !important",
  height: "600px !important",
});

export const DecorImageBluePlanet = styled(Image, {
  top: "-40px !important",
  left: "-38% !important",
  right: "auto !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "213px !important",
  height: "232px !important",

  "@media(max-width: 940px)": {
    top: "30px !important",
    left: "-15% !important",
  },

  "@media(max-width: 645px)": {
    display: "none",
  },
});

export const DecorImagePinkNlo = styled(Image, {
  top: "-230px !important",
  left: "auto !important",
  right: "-230px !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "153px !important",
  height: "156px !important",

  "@media(max-width: 940px)": {
    top: "-310px !important",
    right: "-50px !important",
  },

  "@media(max-width: 780px)": {
    top: "-290px !important",
    right: "-50px !important",
  },

  "@media(max-width: 645px)": {
    display: "none",
  },
});

export const Slogan = styled("p", {
  background: "#111131",
  overflow: "hidden",
  borderRadius: 20,
  backdropFilter: "blur(42px)",

  margin: "136px auto 32px",

  fontSize: 16,
  lineHeight: "26px",
  fontWeight: 400,
  color: "#F0EEFFD9",

  width: "fit-content",

  padding: "3px 14px",

  "&::before": {
    content: "",
    position: "absolute",
    inset: 0,

    borderRadius: "50px",
    padding: "1px",
    background: `
      radial-gradient(97.57% 210.75% at 0.9% 2.98%, rgba(239, 239, 239, 0) 0%, rgba(96, 96, 168, 0.5) 100%),
      radial-gradient(97.09% 224.61% at 1.38% 96.94%, rgba(239, 239, 239, 0) 0%, rgba(93, 68, 219, 0.5) 100%),
      linear-gradient(114.55deg, rgba(111, 84, 240, 0.5) 2.13%, rgba(111, 84, 240, 0) 98.14%)
    `,

    "-webkit-mask": "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    "-webkit-mask-composite": "xor",
    maskComposite: "exclude",
  },

  "& span": {
    fontWeight: 700,
    color: "#FFFFFF",
  },

  "@media(max-width: 530px)": {
    margin: "76px 20px 32px",

    textAlign: "center",
  },
});

export const Title = styled("h2", {
  fontSize: 64,
  lineHeight: "75px",
  fontWeight: 400,

  textAlign: "center",

  maxWidth: 817,

  margin: "0 auto",

  background: "linear-gradient(94.89deg, #FFFFFF 49.61%, #7217DA 129.22%)",
  backgroundClip: "text",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",

  "@media(max-width: 940px)": {
    margin: "0 20px",
  },

  "@media(max-width: 780px)": {
    fontSize: 50,
    lineHeight: "60px",
  },

  "@media(max-width: 530px)": {
    fontSize: 35,
    lineHeight: "40px",
  },
});

export const Description = styled("p", {
  fontSize: 16,
  lineHeight: "21px",
  fontWeight: 400,

  position: "relative",

  textAlign: "center",

  color: "#FFFFFF99",

  maxWidth: 625,

  margin: "19px auto 79px",

  "@media(max-width: 780px)": {
    margin: "19px 20px 79px",
  },

  "@media(max-width: 530px)": {
    margin: "19px 20px 39px",
  },
});

export const ButtonsList = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: 27,

  width: "100%",
  maxWidth: 409,

  margin: "0 auto 114px",

  "@media(max-width: 530px)": {
    margin: "0 auto 64px",
    padding: "0 20px",

    gap: 17,
  },

  "@media(max-width: 400px)": {
    flexDirection: "column",
  },
});
