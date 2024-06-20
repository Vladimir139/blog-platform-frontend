import React, { FC } from "react";
import { useMedia } from "react-use";

import { Button } from "@/shared/ui/atoms";

import * as S from "./styles";

export const Navigation: FC = () => {
  const isMobile = useMedia("(max-width: 1255px)", false);

  return (
    <S.NavigationList>
      {isMobile ? null : (
        <>
          <S.NavItem>
            <S.StyledLink href="">The Unicorn</S.StyledLink>
          </S.NavItem>
          <S.NavItem>
            <S.StyledLink href="">Utility</S.StyledLink>
          </S.NavItem>
          <S.NavItem>
            <S.StyledLink href="">Qualify</S.StyledLink>
          </S.NavItem>
          <S.NavItem>
            <S.StyledLink href="">Help</S.StyledLink>
          </S.NavItem>
          <S.NavItem>
            <S.StyledLink href="">FAQ</S.StyledLink>
          </S.NavItem>
        </>
      )}
      <S.NavItem isButton>
        <Button stretch>
          <S.TextButton>MINT</S.TextButton>
        </Button>
      </S.NavItem>
    </S.NavigationList>
  );
};
