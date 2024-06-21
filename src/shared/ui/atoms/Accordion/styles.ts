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
  gap: 75,
  "@media(max-width: 670px)": {
    gap: 20,
  },
});

export const CollapseItem = styled(Item, {
  backgroundColor: "$white",
  border: "1px solid $border",
  borderRadius: "$default",
  "&:not(:last-child)": {
    marginBottom: 8,
  },
});

export const StyledHeader = styled(Header, {
  marginBottom: 0,
});

export const WrapperIcon = styled("div", {
  width: 25,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledTrigger = styled(Trigger, {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  gap: 15,
  padding: "16px 24px 16px 0",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  fontSize: "26px",
  fontWeight: 600,
  lineHeight: "28px",
  color: "$text",
  textAlign: "left",
  position: "relative",

  "&:after": {
    content: "",
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    height: "1px",
    background: "linear-gradient(90deg, #FF8A00 14%, #AD00FF 68%)",
  },

  "& div > svg": {
    transition: "transform 0.2s ease-in-out",
  },

  '&[data-state="open"] > div > svg': {
    transform: "rotate(45deg)",
  },

  "@media(max-width: 670px)": {
    fontSize: "16px",
    lineHeight: "18px",
  },
});

export const StyledContent = styled(Content, {
  padding: "20px 0 0 0",
  width: "100%",
  overflow: "hidden",
  '&[data-state="open"]': {
    animation: `${open} 300ms cubic-bezier(0.87, 0, 0.13, 1) 0s 1 normal forwards`,
  },
  '&[data-state="closed"]': {
    animation: `${close} 300ms cubic-bezier(0.87, 0, 0.13, 1) 0s 1 normal forwards`,
  },
});
