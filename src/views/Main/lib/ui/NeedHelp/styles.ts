import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {});

export const Title = styled("h3", {
  textAlign: "center",

  fontSize: "50px",
  fontWeight: 800,
  lineHeight: "52px",

  marginBottom: 51,

  "@media(max-width: 1140px)": {
    fontSize: "40px",
    lineHeight: "42px",
  },

  "@media(max-width: 670px)": {
    fontSize: "30px",
    lineHeight: "32px",

    marginBottom: 28,
  },

  "@media(max-width: 580px)": {
    fontSize: "26px",
    lineHeight: "30px",
  },
});

export const BlockList = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",

  gap: 20,

  "@media(max-width: 760px)": {
    gridTemplateColumns: "1fr",

    gap: 10,
  },
});

export const Block = styled("div", {
  backgroundColor: "$block",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "24px",
  fontWeight: 500,
  lineHeight: "26px",

  borderRadius: 20,

  padding: 30,

  width: "100%",

  "@media(max-width: 1024px)": {
    fontSize: "20px",
    fontWeight: 500,
    lineHeight: "22px",
  },

  "@media(max-width: 760px)": {
    justifyContent: "start",

    padding: 20,

    borderRadius: 10,
  },

  "@media(max-width: 500px)": {
    fontSize: "16px",
    lineHeight: "18px",
  },
});
