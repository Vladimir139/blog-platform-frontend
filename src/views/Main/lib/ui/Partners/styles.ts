import Image from "next/image";

import { styled } from "@/shared/lib/styles";

export const Wrapper = styled("section", {
  background: "#010123",
  borderBottom: "1px solid #FFFFFF1A",
});

export const PartnerImg = styled(Image, {
  position: "relative !important",

  margin: "15px 40px",

  opacity: 0.5,

  variants: {
    partner: {
      cryptopunks: {
        width: "81px !important",
        height: "10px !important",
      },
      topshot: {
        width: "81px !important",
        height: "17px !important",
      },
      zed: {
        width: "81px !important",
        height: "40px !important",
      },
      sandbox: {
        width: "81px !important",
        height: "25px !important",
      },
      veefriends: {
        width: "81px !important",
        height: "16px !important",
      },
      rarible: {
        width: "81px !important",
        height: "20px !important",
      },
      ens: {
        width: "81px !important",
        height: "32px !important",
      },
      axie: {
        width: "81px !important",
        height: "40px !important",
      },
      opensea: {
        width: "81px !important",
        height: "20px !important",
      },
      bayc: {
        width: "81px !important",
        height: "22px !important",
      },
      dec: {
        width: "81px !important",
        height: "40px !important",
      },
    },
  },
});
