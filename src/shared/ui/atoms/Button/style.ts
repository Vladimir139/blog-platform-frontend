import { styled } from "@/shared/lib/styles";

export const Button = styled("button", {
  background: "linear-gradient(0deg, #6C52EE, #6C52EE)",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "15px",

  cursor: "pointer",

  color: "#FFFFFF",

  position: "relative",
  zIndex: 2,
  overflow: "hidden",

  fontSize: 16,
  lineHeight: "23px",
  fontWeight: 700,
  letterSpacing: "0.5px",

  border: "none",
  borderRadius: 30,

  variants: {
    stretch: {
      true: {
        width: "100%",
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
      },
    },
    theme: {
      purple: {
        boxShadow: "0px 5px 53px 0px #001DFFBA, 1px 1px 3px 1px #00000030",

        "&::before": {
          position: "absolute",
          zIndex: 3,
          content: "",
          width: 110,
          height: 83,
          background: "linear-gradient(0deg, #CDDBF8 5%, #619BFF 21%)",

          transform: "rotate(-45deg)",

          top: "-50%",
          left: "-28%",

          filter: "blur(20px)",
        },

        "&::after": {
          position: "absolute",
          zIndex: 3,
          content: "",
          width: 110,
          height: 83,
          background: "linear-gradient(235.57deg, #9E61FF 0%, rgba(142, 97, 255, 0) 34%)",

          transform: "rotate(0deg)",

          top: "0",
          right: "0",
        },
      },
      dark: {
        background: "#000000",

        "&::before": {
          content: "",
          position: "absolute",
          inset: 0,

          borderRadius: "50px",
          padding: "1px",
          background: "linear-gradient(90deg, #1C21BF 0%, #9783E9 100%)",

          "-webkit-mask": "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          "-webkit-mask-composite": "xor",
          maskComposite: "exclude",
        },
      },
      outline: {},
    },
  },
});
