import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderBottom: "1px solid #FFFFFF1A",

  "@media(max-width: 940px)": {
    padding: "11px 0 11px",

    borderBottom: "none",
  },
});

export const InnerWrapperHeader = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  maxWidth: 1200,

  padding: "0 20px",
  width: "100%",
});

export const Logo = styled(Image, {
  position: "relative !important",

  width: "90px !important",
  height: "49px !important",

  "@media(max-width: 940px)": {
    marginBottom: 0,
  },
});
