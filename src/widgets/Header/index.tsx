import Link from "next/link";
import React, { FC } from "react";
import { useMedia } from "react-use";

import { FullLogoIcon } from "@/shared/lib/icons";
import { Navigation } from "@/widgets/Header/lib/ui";

import * as S from "./styles";

export const Header: FC = () => {
  const isMobile = useMedia("(max-width: 490px)", false);

  return (
    <S.HeaderWrapper>
      <S.LeftWrapper>
        <Link href="/">
          <FullLogoIcon isSmall={isMobile} />
        </Link>
      </S.LeftWrapper>
      <S.RightWrapper>
        <Navigation />
      </S.RightWrapper>
    </S.HeaderWrapper>
  );
};
