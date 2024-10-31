import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Header = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: "23px 0 0",

  borderBottom: "1px solid #FFFFFF1A",

  "@media(max-width: 940px)": {
    padding: "23px 0 23px",
  },
});

export const InnerWrapperHeader = styled("header", {
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

  marginBottom: 22,

  "@media(max-width: 940px)": {
    marginBottom: 0,
  },
});
