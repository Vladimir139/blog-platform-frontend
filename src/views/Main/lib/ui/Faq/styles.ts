import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  marginBottom: 463,

  "@media(max-width: 740px)": {
    marginBottom: 140,
  },
});

export const Title = styled("h3", {
  textAlign: "center",

  fontSize: "50px",
  fontWeight: 800,
  lineHeight: "52px",

  marginTop: 225,
  marginBottom: 75,

  "@media(max-width: 1140px)": {
    fontSize: "40px",
    lineHeight: "42px",

    marginTop: 142,
    marginBottom: 28,
  },

  "@media(max-width: 670px)": {
    fontSize: "30px",
    lineHeight: "32px",
  },

  "@media(max-width: 580px)": {
    fontSize: "26px",
    lineHeight: "30px",
  },
});

export const AccordionContentBlock = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  backgroundColor: "rgba(0, 0, 0, 0.4)",

  padding: 40,

  borderRadius: 20,

  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "22px",

  "@media(max-width: 670px)": {
    fontSize: "13px",
    lineHeight: "15px",

    padding: 20,
  },
});
