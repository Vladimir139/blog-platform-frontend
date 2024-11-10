import { Content, Header, Item, Root, Trigger } from "@radix-ui/react-accordion";
import { keyframes } from "@stitches/react";

import { styled } from "@/shared/lib/styles";

const open = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" },
});

const close = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 },
});

export const Collapse = styled(Root, {
  display: "flex",
  flexDirection: "column",
});

export const CollapseItem = styled(Item, {
  // backgroundColor: "$white",
  // border: "1px solid $border",
  // borderRadius: "$default",
  // "&:not(:last-child)": {
  //   marginBottom: 8,
  // },
});

export const StyledHeader = styled(Header, {
  marginBottom: 0,
});

export const WrapperIcon = styled("div", {
  transform: "rotate(180deg)",

  '[data-state="open"] &': {
    transform: "rotate(0deg)",
  },
});

export const StyledTrigger = styled(Trigger, {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  gap: 15,
  padding: "20px 63px 20px 61px",
  backgroundColor: "#09093F",
  border: "none",
  cursor: "pointer",
  fontSize: "19px",
  fontWeight: 400,
  lineHeight: "23px",
  color: "#FFFFFF",
  textAlign: "left",
  position: "relative",
  borderRadius: "10px",

  "&::before": {
    content: "",
    position: "absolute",
    inset: 0,

    borderRadius: "10px",
    padding: "1px",
    background: "#FFFFFF1A",

    "-webkit-mask": "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    "-webkit-mask-composite": "xor",
    maskComposite: "exclude",
  },

  '&[data-state="open"]': {
    color: "#306CFE",
  },

  "@media(max-width: 670px)": {
    fontSize: "16px",
    lineHeight: "18px",

    padding: "20px 25px 20px 25px",
  },
});

export const StyledContent = styled(Content, {
  padding: "23px 0 25px 55px",
  width: "100%",
  overflow: "hidden",

  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "26px",
  color: "#FFFFFF99",

  maxWidth: 523,

  '&[data-state="open"]': {
    animation: `${open} 300ms cubic-bezier(0.87, 0, 0.13, 1) 0s 1 normal forwards`,
  },
  '&[data-state="closed"]': {
    animation: `${close} 300ms cubic-bezier(0.87, 0, 0.13, 1) 0s 1 normal forwards`,
  },

  "@media(max-width: 670px)": {
    padding: "23px 25px 25px 25px",
  },
});
