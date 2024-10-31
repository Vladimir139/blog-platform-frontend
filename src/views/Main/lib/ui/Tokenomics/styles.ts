import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  position: "relative",
});

export const TokenInfoGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  // "minmax(min-content, 164px) minmax(min-content, 265px) minmax(min-content, 325px) 1fr",

  marginTop: 49,
});

export const Distribution = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr minmax(200px, 480px) minmax(200px, 480px) 1fr", // Четыре колонки

  marginTop: 152,
});

export const Percentages = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr minmax(200px, 480px) minmax(200px, 480px) 1fr", // Четыре колонки

  marginTop: 152,
});

export const TokenInfoBlock = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  justifyContent: "flex-start",

  textAlign: "start",

  gap: 5,

  variants: {
    bigGap: {
      true: {
        gap: 15,
      },
    },
  },
});

export const BlockTitle = styled("p", {
  fontSize: 20,
  fontWeight: 400,
  lineHeight: "38px",

  color: "#CACFFF",

  variants: {
    bigTitle: {
      true: {
        fontSize: 30,
        lineHeight: "38px",
      },
    },
  },
});

export const BlockValue = styled("p", {
  fontSize: 30,
  lineHeight: "38px",
  fontWeight: 400,

  variants: {
    bigValue: {
      true: {
        fontSize: 20,
        lineHeight: "31px",
      },
    },
  },
});
