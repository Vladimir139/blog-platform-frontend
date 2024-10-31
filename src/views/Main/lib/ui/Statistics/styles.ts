import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",

  gap: 17,

  width: "100%",

  padding: "113px 0 69px",

  "@media(max-width: 1190px)": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },

  "@media(max-width: 650px)": {
    padding: "70px 0 69px",

    gridTemplateColumns: "1fr",

    gap: 30,
  },
});

export const StatisticBlock = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  gap: 15,
});

export const Number = styled("p", {
  fontSize: 51,
  lineHeight: "53px",
  fontWeight: 400,

  textAlign: "center",

  "@media(max-width: 840px)": {
    fontSize: 41,
    lineHeight: "43px",
  },

  "@media(max-width: 650px)": {
    fontSize: 35,
    lineHeight: "37px",
  },
});

export const Description = styled("p", {
  fontSize: 16,
  lineHeight: "18px",
  fontWeight: 400,

  textAlign: "center",

  color: "#FFFFFF66",
});
