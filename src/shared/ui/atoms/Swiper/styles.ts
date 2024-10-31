import { styled } from "@/shared/lib/styles";

export const Root = styled("section", {
  position: "relative",

  width: "100%",
  // maxWidth: 372,
  margin: "0 auto",

  display: "flex",
  alignItems: "center",

  "& .swiper": {
    width: "100%",
    height: "100%",

    "& .swiper-slide": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      maxWidth: 465,
      // height: 400,
      // height: 400,
      // backgroundColor: "$grey",

      "@media(max-width: 1000px)": {
        maxWidth: 365,
      },

      "@media(max-width: 560px)": {
        maxWidth: 305,
      },

      "@media(max-width: 400px)": {
        maxWidth: 250,
      },

      "& img": {
        display: "flex",
        width: "fit-content !important",
        objectFit: "contain",
      },
    },
  },
});

const NavigationButton = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "inherit",

  position: "absolute",
  top: "50%",

  width: 23,
  height: 46,
  padding: 0,

  transform: "translateY(-50%)",
  border: "none",

  transition: "$default",

  zIndex: "$swiperModalBtns",

  "&:hover:not(:disabled)": {
    cursor: "pointer",
  },

  "&:disabled": {
    opacity: 0.3,
    cursor: "default",
  },
});

export const LeftNavigation = styled(NavigationButton, {
  left: -2,

  "& > svg": {
    transform: "rotate(180deg)",
  },
});

export const RightNavigation = styled(NavigationButton, {
  right: -2,
});
