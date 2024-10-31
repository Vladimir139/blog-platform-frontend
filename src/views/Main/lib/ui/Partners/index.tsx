import React, { FC } from "react";
import Marquee from "react-fast-marquee";

import * as S from "./styles";

export const Partners: FC = () => (
  <S.Wrapper>
    <Marquee speed={60} direction="right" autoFill>
      <S.PartnerImg
        partner="cryptopunks"
        src="/images/partners/cryptopunks1.png"
        alt="cryptopunks partner logo"
        fill
      />
      <S.PartnerImg
        partner="topshot"
        src="/images/partners/topshot1.png"
        alt="topshot partner logo"
        fill
      />
      <S.PartnerImg partner="zed" src="/images/partners/zed1.png" alt="zed partner logo" fill />
      <S.PartnerImg
        partner="sandbox"
        src="/images/partners/sandbox1.png"
        alt="sandbox partner logo"
        fill
      />
      <S.PartnerImg
        partner="veefriends"
        src="/images/partners/veefriends1.png"
        alt="veefriends partner logo"
        fill
      />
      <S.PartnerImg
        partner="rarible"
        src="/images/partners/rarible1.png"
        alt="rarible partner logo"
        fill
      />
      <S.PartnerImg partner="ens" src="/images/partners/ens1.png" alt="ens partner logo" fill />
      <S.PartnerImg partner="axie" src="/images/partners/axie1.png" alt="axie partner logo" fill />
      <S.PartnerImg
        partner="opensea"
        src="/images/partners/opensea1.png"
        alt="opensea partner logo"
        fill
      />
      <S.PartnerImg partner="bayc" src="/images/partners/bayc1.png" alt="bayc partner logo" fill />
      <S.PartnerImg partner="dec" src="/images/partners/dec3.png" alt="dec partner logo" fill />
    </Marquee>
  </S.Wrapper>
);
