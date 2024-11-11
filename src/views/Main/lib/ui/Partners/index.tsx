import React, { FC } from "react";
import Marquee from "react-fast-marquee";

import * as S from "./styles";

export const Partners: FC = () => (
  <S.Wrapper>
    <Marquee speed={60} direction="right" autoFill>
      <S.PartnerImg partner="ens" src="/images/partners/ens1.png" alt="partner logo" fill />
      <S.PartnerImg
        partner="beatyShield"
        src="/images/partners/beatyShield.png"
        alt="partner logo"
        fill
      />
      <S.PartnerImg partner="bg" src="/images/partners/bg.png" alt="bg partner logo" fill />
      <S.PartnerImg
        partner="blackHeroFace"
        src="/images/partners/blackHeroFace.png"
        alt="partner logo"
        fill
      />
      <S.PartnerImg partner="bot" src="/images/partners/bot.png" alt="partner logo" fill />
      <S.PartnerImg partner="bot2" src="/images/partners/bot2.png" alt="partner logo" fill />
      <S.PartnerImg partner="copilot" src="/images/partners/copilot.png" alt="partner logo" fill />
      <S.PartnerImg partner="figure" src="/images/partners/figure.png" alt="partner logo" fill />
      <S.PartnerImg
        partner="goalInBot"
        src="/images/partners/goalInBot.png"
        alt="partner logo"
        fill
      />
      <S.PartnerImg partner="lp" src="/images/partners/lp.png" alt="partner logo" fill />
      <S.PartnerImg partner="mInGoal" src="/images/partners/mInGoal.png" alt="partner logo" fill />
      <S.PartnerImg partner="mLines" src="/images/partners/mLines.png" alt="partner logo" fill />
      <S.PartnerImg
        partner="niceGirl"
        src="/images/partners/niceGirl.png"
        alt="partner logo"
        fill
      />
      <S.PartnerImg partner="ox" src="/images/partners/ox.png" alt="partner logo" fill />
      <S.PartnerImg
        partner="readySwap"
        src="/images/partners/readySwap.png"
        alt="partner logo"
        fill
      />
      <S.PartnerImg partner="shield" src="/images/partners/shield.png" alt="partner logo" fill />
      <S.PartnerImg partner="spydefi" src="/images/partners/spydefi.png" alt="partner logo" fill />
      <S.PartnerImg
        partner="transformer"
        src="/images/partners/transformer.png"
        alt="partner logo"
        fill
      />
      <S.PartnerImg
        partner="treasury"
        src="/images/partners/treasury.png"
        alt="partner logo"
        fill
      />
      <S.PartnerImg
        partner="cryptodo"
        src="/images/partners/cryptodo.png"
        alt="partner logo"
        fill
      />
      <S.PartnerImg partner="unibot" src="/images/partners/unibot.png" alt="partner logo" fill />
    </Marquee>
  </S.Wrapper>
);
