import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  background: "#010123",
  borderBottom: "1px solid #FFFFFF1A",
});

export const PartnerImg = styled(Image, {
  position: "relative !important",

  width: "auto !important",
  height: "auto !important",

  margin: "15px 40px",

  opacity: 0.5,

  variants: {
    partner: {
      cryptopunks: {
        maxWidth: 81,
        maxHeight: 10,
      },
      topshot: {
        maxWidth: 81,
        maxHeight: 17,
      },
      zed: {
        maxWidth: 81,
        maxHeight: 40,
      },
      sandbox: {
        maxWidth: 81,
        maxHeight: 25,
      },
      veefriends: {
        maxWidth: 81,
        maxHeight: 16,
      },
      rarible: {
        maxWidth: 81,
        maxHeight: 20,
      },
      ens: {
        maxWidth: 81,
        maxHeight: 32,
      },
      axie: {
        maxWidth: 81,
        maxHeight: 40,
      },
      opensea: {
        maxWidth: 81,
        maxHeight: 20,
      },
      bayc: {
        maxWidth: 81,
        maxHeight: 22,
      },
      dec: {
        maxWidth: 81,
        maxHeight: 40,
      },
    },
  },
});
