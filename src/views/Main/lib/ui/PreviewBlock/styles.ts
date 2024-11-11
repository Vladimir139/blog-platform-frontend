import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  overflow: "hidden",

  "@media(max-width: 940px)": {
    overflow: "visible",
  },
});

// Bottom Left Glows

export const WrapperGlowsLeftBottom = styled("div", {
  position: "absolute",

  top: -161,
  left: -480,

  width: "1117px",
  height: "1282px",
});

export const RedRadial = styled("div", {
  position: "absolute",

  top: "394px !important",
  left: "auto !important",
  right: "212px !important",
  bottom: "auto !important",

  background:
    "radial-gradient(50% 50% at 50% 50%, #FD0000 0%, #BB0000 17%, #820000 33%, #530000 49%, #2F0000 64%, #150000 78%, #050000 90%, #000000 100%)",

  mixBlendMode: "screen",
  opacity: 0.5,

  borderRadius: "99999px",

  zIndex: -5,

  width: "468px !important",
  height: "468px !important",

  "@media(max-width: 450px)": {
    zIndex: -3,

    top: "auto !important",
    left: "250px !important",
    right: "auto !important",
    bottom: "610px !important",
  },

  variants: {
    isTopRight: {
      true: {
        top: "145px !important",
        left: "124px !important",
        right: "auto !important",
        bottom: "auto !important",

        width: "486px !important",
        height: "486px !important",

        "@media(max-width: 450px)": {
          width: "276px !important",
          height: "276px !important",

          top: "50px !important",
          left: "264px !important",
        },
      },
    },
  },
});

export const RedAndWhiteRadial = styled("div", {
  position: "absolute",

  top: "auto !important",
  left: "auto !important",
  right: "3px !important",
  bottom: "45px !important",

  background:
    "radial-gradient(35.36% 35.36% at 50% 50%, #FD0000 0%, #BB0000 17%, #820000 33%, #530000 49%, #2F0000 64%, #150000 78%, #050000 90%, #000000 100%)",
  mixBlendMode: "screen",

  borderRadius: "99999px",

  zIndex: -5,

  width: "715px !important",
  height: "715px !important",

  "@media(max-width: 450px)": {
    width: "515px !important",
    height: "515px !important",

    top: "410px !important",
    left: "300px !important",
    right: "auto !important",
    bottom: "auto !important",
  },

  variants: {
    isTopRight: {
      true: {
        top: "0px !important",
        left: "0px !important",
        right: "auto !important",
        bottom: "auto !important",

        width: "486px !important",
        height: "486px !important",

        "@media(max-width: 450px)": {
          display: "none",
        },
      },
    },
  },
});

export const LightBlueRadial = styled("div", {
  position: "absolute",

  top: "auto !important",
  left: "auto !important",
  right: "3px !important",
  bottom: "45px !important",

  background:
    "radial-gradient(35.36% 35.36% at 50% 50%, #0080FD 0%, #005EBB 17%, #004182 33%, #002A53 49%, #00172F 64%, #000A15 78%, #000205 90%, #000000 100%)",
  mixBlendMode: "screen",

  borderRadius: "99999px",

  zIndex: -5,

  width: "715px !important",
  height: "715px !important",

  "@media(max-width: 450px)": {
    width: "515px !important",
    height: "515px !important",

    top: "410px !important",
    left: "300px !important",
    right: "auto !important",
    bottom: "auto !important",
  },

  variants: {
    isTopRight: {
      true: {
        top: "0px !important",
        left: "0px !important",
        right: "auto !important",
        bottom: "auto !important",

        width: "486px !important",
        height: "486px !important",

        "@media(max-width: 450px)": {
          width: "276px !important",
          height: "276px !important",

          top: "0px !important",
          left: "200px !important",
        },
      },
    },
  },
});

export const BlueRadial = styled("div", {
  position: "absolute",

  top: "0px !important",
  left: "20px !important",
  right: "auto !important",
  bottom: "auto !important",

  background:
    "radial-gradient(35.36% 35.36% at 50% 50%, #0061FD 0%, #0048BB 17%, #003282 33%, #002053 49%, #00122F 64%, #000815 78%, #000205 90%, #000000 100%)",
  mixBlendMode: "screen",

  borderRadius: "99999px",

  zIndex: -5,

  width: "715px !important",
  height: "715px !important",

  variants: {
    isTopRight: {
      true: {
        top: "auto !important",
        left: "auto !important",
        right: "60px !important",
        bottom: "-100px !important",

        width: "486px !important",
        height: "486px !important",

        "@media(max-width: 450px)": {
          top: "0 !important",
          left: "auto !important",
          right: "40px !important",
          bottom: "auto !important",
        },
      },
    },
  },
});

export const SmallBlueRadial = styled("div", {
  position: "absolute",

  top: "329px !important",
  left: "159px !important",
  right: "auto !important",
  bottom: "auto !important",

  background:
    "radial-gradient(50% 50% at 50% 50%, #0080FD 0%, #005EBB 17%, #004182 33%, #002A53 49%, #00172F 64%, #000A15 78%, #000205 90%, #000000 100%)",
  mixBlendMode: "screen",

  borderRadius: "99999px",

  zIndex: -5,

  width: "384px !important",
  height: "384px !important",

  variants: {
    isTopRight: {
      true: {
        top: "387px !important",
        left: "auto !important",
        right: "108px !important",
        bottom: "auto !important",

        width: "261px !important",
        height: "261px !important",

        "@media(max-width: 450px)": {
          display: "none",
        },
      },
    },
  },
});

export const PinkRadial = styled("div", {
  position: "absolute",

  top: "272px !important",
  left: "13px !important",
  right: "auto !important",
  bottom: "auto !important",

  background:
    "radial-gradient(50% 50% at 50% 50%, #AF08A7 0%, #81057B 17%, #53034F 36%, #2F022D 55%, #150014 72%, #050005 88%, #000000 100%)",
  mixBlendMode: "screen",

  borderRadius: "99999px",

  zIndex: -5,

  width: "715px !important",
  height: "715px !important",

  variants: {
    isTopRight: {
      true: {
        top: "200px !important",
        left: "auto !important",
        right: "10px !important",
        bottom: "auto !important",

        width: "486px !important",
        height: "486px !important",

        "@media(max-width: 450px)": {
          display: "none",
        },
      },
    },
  },
});

export const LeftBottomLines = styled(Image, {
  top: "auto !important",
  left: "auto !important",
  right: "174px !important",
  bottom: "172px !important",

  zIndex: -5,

  width: "840px !important",
  height: "688px !important",

  "@media(max-width: 450px)": {
    width: "617px !important",
    height: "506px !important",

    zIndex: -1,

    top: "auto !important",
    left: "100px !important",
    right: "auto !important",
    bottom: "460px !important",
  },

  variants: {
    isTopRight: {
      true: {
        width: "571px !important",
        height: "468px !important",

        transform: "rotate(180deg)",

        top: "130px !important",
        left: "auto !important",
        right: "70px !important",
        bottom: "auto !important",

        "@media(max-width: 450px)": {
          width: "285px !important",
          height: "226px !important",

          zIndex: -1,

          top: "70px !important",
          left: "auto !important",
          right: "225px !important",
          bottom: "auto !important",
        },
      },
    },
  },
});

export const SmallPink1Radial = styled("div", {
  position: "absolute",

  top: "auto !important",
  left: "auto !important",
  right: "322px !important",
  bottom: "347px !important",

  transform: "rotate(52deg)",

  background:
    "radial-gradient(50.13% 49.92% at 48.12% 40.58%, #FF5CDE 0%, #D54CB9 4%, #A83C92 10%, #802E6F 16%, #5D2151 22%, #401737 29%, #280E23 37%, #160813 46%, #090308 56%, #020001 70%, #000000 100%)",
  mixBlendMode: "screen",

  borderRadius: "99999px",

  zIndex: -5,

  width: "82px !important",
  height: "113px !important",

  variants: {
    isTopRight: {
      true: {
        display: "none",
      },
    },
  },
});

export const SmallPink2Radial = styled("div", {
  position: "absolute",

  top: "auto !important",
  left: "auto !important",
  right: "535px !important",
  bottom: "394px !important",

  transform: "rotate(52deg)",

  background:
    "radial-gradient(50.14% 49.93% at 48.59% 43.84%, #FF5CDE 0%, #D54CB9 4%, #A83C92 10%, #802E6F 16%, #5D2151 22%, #401737 29%, #280E23 37%, #160813 46%, #090308 56%, #020001 70%, #000000 100%)",
  mixBlendMode: "screen",

  borderRadius: "99999px",

  zIndex: -5,

  width: "119px !important",
  height: "165px !important",

  variants: {
    isTopRight: {
      true: {
        display: "none",
      },
    },
  },
});

export const SmallPinkVector1Radial = styled("div", {
  position: "absolute",

  top: "auto !important",
  left: "auto !important",
  right: "531px !important",
  bottom: "488px !important",

  transform: "rotate(-72deg)",

  background:
    "radial-gradient(49.61% 50.09% at 58.41% 51.23%, #F981FD 0%, #B85FBB 17%, #804282 33%, #522A53 49%, #2E182F 64%, #140A15 78%, #050205 90%, #000000 100%)",
  mixBlendMode: "screen",

  borderRadius: "99999px",

  zIndex: -5,

  width: "230px !important",
  height: "61px !important",

  variants: {
    isTopRight: {
      true: {
        display: "none",
      },
    },
  },
});

// Top Right Glows

export const WrapperGlowsRightTop = styled("div", {
  position: "absolute",

  top: -264,
  right: -351,

  width: "760px",
  height: "872px",
});

// ---------------------------

export const DecorImageRubinGlow = styled(Image, {
  top: "-350px !important",
  left: "auto !important",
  right: "-80% !important",
  bottom: "auto !important",

  zIndex: -5,

  width: "732px !important",
  height: "600px !important",

  "@media(max-width: 450px)": {
    display: "none",
  },
});

export const DecorImageBigGlow = styled(Image, {
  top: "auto !important",
  left: "50% !important",
  right: "auto !important",
  bottom: "-35% !important",

  zIndex: -5,

  transform: "translateX(-50%)",

  width: "1514px !important",
  height: "492px !important",

  "@media(max-width: 450px)": {
    display: "none",
  },
});

export const Title = styled("h2", {
  fontSize: 64,
  lineHeight: "75px",
  fontWeight: 400,

  textAlign: "center",

  maxWidth: 817,

  margin: "200px auto 0",

  background: "linear-gradient(94.89deg, #FFFFFF 49.61%, #7217DA 129.22%)",
  backgroundClip: "text",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",

  "@media(max-width: 940px)": {
    margin: "63px 20px",
  },

  "@media(max-width: 780px)": {
    fontSize: 50,
    lineHeight: "60px",
  },

  "@media(max-width: 530px)": {
    fontSize: 35,
    lineHeight: "40px",

    margin: "63px 20px 21px",
  },

  "@media(max-width: 400px)": {
    fontSize: 28,
  },
});

export const Description = styled("p", {
  fontSize: 16,
  lineHeight: "27px",
  fontWeight: 400,

  position: "relative",

  textAlign: "center",

  color: "#FFFFFF99",

  maxWidth: 625,

  margin: "19px auto 48px",

  "@media(max-width: 780px)": {
    margin: "19px 20px 48px",
  },

  "@media(max-width: 530px)": {
    margin: "19px 20px 39px",

    maxWidth: 286,
  },

  "@media(max-width: 400px)": {
    margin: "0px 20px 33px",
  },
});

export const ButtonsList = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: 27,

  width: "100%",
  maxWidth: 409,

  margin: "0 auto 143px",

  "@media(max-width: 940px)": {
    margin: "0 auto 70px",
  },

  "@media(max-width: 530px)": {
    padding: "0 20px",

    gap: 17,

    flexDirection: "column",

    maxWidth: 250,
  },
});
