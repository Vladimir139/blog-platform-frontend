import React, { FC } from "react";

import * as S from "./styles";
import { CellWithDotsProps } from "./types";

export const CellWithDots: FC<CellWithDotsProps> = ({
  children,
  noDotBottomLeft,
  noDotTopLeft,
  noBorderBottom,
  noDotBottomRight,
  noDotTopRight,
  noBorderRight,
  noBorderTop,
  noBorderLeft,
  css,
}) => (
  <S.GridItem css={css}>
    {!noBorderTop && <span className="border-top" />}
    {!noBorderRight && <span className="border-right" />}
    {!noBorderBottom && <span className="border-bottom" />}
    {!noBorderLeft && <span className="border-left" />}
    {!noDotTopLeft && <span className="dot-top-left" />}
    {!noDotTopRight && <span className="dot-top-right" />}
    {!noDotBottomRight && <span className="dot-bottom-right" />}
    {!noDotBottomLeft && <span className="dot-bottom-left" />}
    {children}
  </S.GridItem>
);
