import React, { FC } from "react";
import { useMedia } from "react-use";

import { CellWithDots, Title } from "@/shared/ui/atoms";

import * as S from "./styles";

export const Tokenomics: FC = () => {
  const isMobileTokenInfo = useMedia("(max-width: 690px)", false);
  const isMobileDistribution = useMedia("(max-width: 640px)", false);
  const isMobilePercentages = useMedia("(max-width: 730px)", false);

  return (
    <S.Wrapper>
      <Title subTitle="Innovative tools/utilities at your fingertip ." id="tokenomics">
        Tokenomics
      </Title>
      {isMobileTokenInfo ? (
        <S.TokenInfoGrid>
          <CellWithDots css={{ height: 131 }} noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots css={{ height: 131 }}>
            <S.TokenInfoBlock>
              <S.BlockTitle>Token Name</S.BlockTitle>
              <S.BlockValue>$CRYPT</S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots css={{ height: 131 }} noBorderRight noDotBottomRight noDotTopRight />
          {/* ---- */}
          <CellWithDots css={{ height: 131 }} noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots css={{ height: 131 }}>
            <S.TokenInfoBlock>
              <S.BlockTitle>Blockchain Platform</S.BlockTitle>
              <S.BlockValue>Ethereum</S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots css={{ height: 131 }} noBorderRight noDotBottomRight noDotTopRight />
          {/* ---- */}
          <CellWithDots css={{ height: 131 }} noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots css={{ height: 131 }}>
            <S.TokenInfoBlock>
              <S.BlockTitle>Total Supply</S.BlockTitle>
              <S.BlockValue>10,000,000 (10 Million)</S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots css={{ height: 131 }} noBorderRight noDotBottomRight noDotTopRight />
        </S.TokenInfoGrid>
      ) : (
        <S.TokenInfoGrid>
          <CellWithDots css={{ height: 131 }} noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots css={{ height: 131 }}>
            <S.TokenInfoBlock>
              <S.BlockTitle>Token Name</S.BlockTitle>
              <S.BlockValue>$CRYPT</S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots css={{ height: 131 }}>
            <S.TokenInfoBlock>
              <S.BlockTitle>Blockchain Platform</S.BlockTitle>
              <S.BlockValue>Ethereum</S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots css={{ height: 131 }} noBorderRight noDotTopRight noDotBottomRight>
            <S.TokenInfoBlock>
              <S.BlockTitle>Total Supply</S.BlockTitle>
              <S.BlockValue>10,000,000 (10 Million)</S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
        </S.TokenInfoGrid>
      )}
      {isMobileDistribution ? (
        <S.Distribution>
          <CellWithDots noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots css={{ height: "min-content" }}>
            <S.TokenInfoBlock>
              <S.BlockTitle>Liquidity Pool</S.BlockTitle>
              <S.BlockValue>6,400,000 $CRYPT(64%)</S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots noBorderRight noDotTopRight noDotBottomRight />
          {/* ---- */}
          <CellWithDots noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots css={{ height: "min-content" }}>
            <S.TokenInfoBlock>
              <S.BlockTitle>Centralized Exchange</S.BlockTitle>
              <S.BlockValue>1,000,000 $CRYPT (10%)</S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots noBorderRight noDotTopRight noDotBottomRight />
          {/* ----- */}
          <CellWithDots noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots css={{ height: "min-content" }}>
            <S.TokenInfoBlock>
              <S.BlockTitle>Revshare/Staking/Rewards</S.BlockTitle>
              <S.BlockValue>1,200,000 $CRYPT (12%)</S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots noBorderRight noDotTopRight noDotBottomRight />
          {/* ---- */}
          <CellWithDots noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots css={{ height: "min-content" }}>
            <S.TokenInfoBlock>
              <S.BlockTitle>Marketing/User Acquisition:</S.BlockTitle>
              <S.BlockValue>900,000 $CRYPT(9%)</S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots noBorderRight noDotTopRight noDotBottomRight />
          {/* ---- */}
          <CellWithDots noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots css={{ height: "min-content" }}>
            <S.TokenInfoBlock>
              <S.BlockTitle>Team, Partners, Advisors</S.BlockTitle>
              <S.BlockValue>500,000 $CRYPT (5%)</S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots noBorderRight noDotTopRight noDotBottomRight />
          {/* ---- */}
          <CellWithDots noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots css={{ height: "min-content" }}>
            <S.TokenInfoBlock>
              <S.BlockTitle>Marketing/User Acquisition:</S.BlockTitle>
              <S.BlockValue>900,000 $CRYPT(9%)</S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots noBorderRight noDotTopRight noDotBottomRight />
        </S.Distribution>
      ) : (
        <S.Distribution>
          {/* ----- 1 line */}
          <CellWithDots css={{ height: 131 }} noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots css={{ height: 131 }}>
            <S.TokenInfoBlock>
              <S.BlockTitle>Liquidity Pool</S.BlockTitle>
              <S.BlockValue>6,400,000 $CRYPT(64%)</S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots css={{ height: 131 }}>
            <S.TokenInfoBlock>
              <S.BlockTitle>Centralized Exchange</S.BlockTitle>
              <S.BlockValue>1,000,000 $CRYPT (10%)</S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots css={{ height: 131 }} noBorderRight noDotTopRight noDotBottomRight />
          {/* ----- 2 line */}
          <CellWithDots css={{ height: 131 }} noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots css={{ height: 131 }}>
            <S.TokenInfoBlock>
              <S.BlockTitle>Revshare/Staking/Rewards</S.BlockTitle>
              <S.BlockValue>1,200,000 $CRYPT (12%)</S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots css={{ height: 131 }}>
            <S.TokenInfoBlock>
              <S.BlockTitle>Marketing/User Acquisition:</S.BlockTitle>
              <S.BlockValue>900,000 $CRYPT(9%)</S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots css={{ height: 131 }} noBorderRight noDotTopRight noDotBottomRight />
          {/* ----- 3 line */}
          <CellWithDots css={{ height: 131 }} noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots css={{ height: 131 }}>
            <S.TokenInfoBlock>
              <S.BlockTitle>Team, Partners, Advisors</S.BlockTitle>
              <S.BlockValue>500,000 $CRYPT (5%)</S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots css={{ height: 131 }}>
            <S.TokenInfoBlock>
              <S.BlockTitle>Marketing/User Acquisition:</S.BlockTitle>
              <S.BlockValue>900,000 $CRYPT(9%)</S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots css={{ height: 131 }} noBorderRight noDotTopRight noDotBottomRight />
        </S.Distribution>
      )}
      {/* ------ Percentages */}
      {isMobilePercentages ? (
        <S.Percentages>
          {/* ----- 1 line */}
          <CellWithDots noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots
            css={{ height: "min-content", padding: "45px 17px 48px 44px", alignItems: "start" }}
          >
            <S.TokenInfoBlock bigGap>
              <S.BlockTitle bigTitle>
                5% - <br />
                buys & sell
              </S.BlockTitle>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots noBorderRight noDotTopRight noDotBottomRight />
          {/* ---- */}
          <CellWithDots noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots
            css={{ height: "min-content", padding: "45px 17px 48px 44px", alignItems: "start" }}
          >
            <S.TokenInfoBlock bigGap>
              <S.BlockTitle bigTitle>1% — Marketing and User Acquisition</S.BlockTitle>
              <S.BlockValue bigValue>
                A more focused approach combining marketing efforts with strategies specifically
                aimed at acquiring new users, thus enhancing community growth and engagement.
              </S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots noBorderRight noDotTopRight noDotBottomRight />
          {/* ----- */}
          <CellWithDots noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots
            css={{ height: "min-content", padding: "45px 17px 48px 44px", alignItems: "start" }}
          >
            <S.TokenInfoBlock bigGap>
              <S.BlockTitle bigTitle>1% — Team</S.BlockTitle>
              <S.BlockValue bigValue>
                This allocation ensures that we can attract, retain, and adequately compensate top
                talent, essential for our long-term success.
              </S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots noBorderRight noDotTopRight noDotBottomRight />
          {/* ---- */}
          <CellWithDots noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots
            css={{ height: "min-content", padding: "45px 17px 48px 44px", alignItems: "start" }}
          >
            <S.TokenInfoBlock bigGap>
              <S.BlockTitle bigTitle>2% — Ecosystem</S.BlockTitle>
              <S.BlockValue bigValue>
                This is a multi-faceted allocation that includes: a.)RevShare: Continuing our
                commitment to sharing our success with our community. <br /> b.) Buybacks: Tokens
                bought back are burnt forever.
              </S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots noBorderRight noDotTopRight noDotBottomRight />
        </S.Percentages>
      ) : (
        <S.Percentages>
          {/* ----- 1 line */}
          <CellWithDots css={{ height: 383 }} noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots css={{ height: 383, padding: "45px 17px 48px 44px", alignItems: "start" }}>
            <S.TokenInfoBlock bigGap>
              <S.BlockTitle bigTitle>
                5% - <br />
                buys & sell
              </S.BlockTitle>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots css={{ height: 383, padding: "45px 17px 48px 44px", alignItems: "start" }}>
            <S.TokenInfoBlock bigGap>
              <S.BlockTitle bigTitle>1% — Marketing and User Acquisition</S.BlockTitle>
              <S.BlockValue bigValue>
                A more focused approach combining marketing efforts with strategies specifically
                aimed at acquiring new users, thus enhancing community growth and engagement.
              </S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots css={{ height: 383 }} noBorderRight noDotTopRight noDotBottomRight />
          {/* ----- 2 line */}
          <CellWithDots css={{ height: 383 }} noBorderLeft noDotBottomLeft noDotTopLeft />
          <CellWithDots css={{ height: 383, padding: "45px 17px 48px 44px", alignItems: "start" }}>
            <S.TokenInfoBlock bigGap>
              <S.BlockTitle bigTitle>1% — Team</S.BlockTitle>
              <S.BlockValue bigValue>
                This allocation ensures that we can attract, retain, and adequately compensate top
                talent, essential for our long-term success.
              </S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots css={{ height: 383, padding: "45px 17px 48px 44px", alignItems: "start" }}>
            <S.TokenInfoBlock bigGap>
              <S.BlockTitle bigTitle>2% — Ecosystem</S.BlockTitle>
              <S.BlockValue bigValue>
                This is a multi-faceted allocation that includes: a.)RevShare: Continuing our
                commitment to sharing our success with our community. <br /> b.) Buybacks: Tokens
                bought back are burnt forever.
              </S.BlockValue>
            </S.TokenInfoBlock>
          </CellWithDots>
          <CellWithDots css={{ height: 383 }} noBorderRight noDotTopRight noDotBottomRight />
        </S.Percentages>
      )}
    </S.Wrapper>
  );
};
