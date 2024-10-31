import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { useMedia } from "react-use";

import { SmallDownArrow } from "@/shared/lib/icons";
import { Burger } from "@/shared/ui/atoms";

import * as S from "./styles";

export const Navigation: FC = () => {
  const isMobile = useMedia("(max-width: 940px)", false);
  const [isOpenOther, setIsOpenOther] = useState<boolean>(false);
  const [isOpenMobileNavigation, setIsOpenMobileNavigation] = useState<boolean>(false);

  const { asPath } = useRouter();

  console.log("isOpenMobileNavigation", isOpenMobileNavigation);

  useEffect(() => {
    if (isOpenMobileNavigation) {
      document.body.classList.add("overflow-hidden");

      return;
    }

    document.body.classList.remove("overflow-hidden");
  }, [isOpenMobileNavigation]);

  return (
    <>
      <S.Navigation>
        {isMobile ? (
          <Burger
            onClick={() => setIsOpenMobileNavigation((prev) => !prev)}
            isActive={isOpenMobileNavigation}
          />
        ) : (
          <>
            <S.NavList>
              <S.NavItem
                href="/#mainUseCases"
                isActive={asPath === "/#mainUseCases" || asPath.includes("/#mainUseCases")}
              >
                Main use cases
              </S.NavItem>
              <S.NavItem
                href="/#roadMap"
                isActive={asPath === "/#roadMap" || asPath.includes("/#roadMap")}
              >
                Road Map
              </S.NavItem>
              <S.NavItem
                href="/#gtMarketingStrategy"
                isActive={
                  asPath === "/#gtMarketingStrategy" || asPath.includes("/#gtMarketingStrategy")
                }
              >
                GT Marketing Strategy
              </S.NavItem>
              <S.NavItem
                href="/#tokenomics"
                isActive={asPath === "/#tokenomics" || asPath.includes("/#tokenomics")}
              >
                Tokenomics
              </S.NavItem>
              <S.NavItemBtn isActive={isOpenOther} onClick={() => setIsOpenOther((prev) => !prev)}>
                Other
                <S.WrapperArrowDown isActive={isOpenOther}>
                  <SmallDownArrow />
                </S.WrapperArrowDown>
              </S.NavItemBtn>
            </S.NavList>
            <S.LaunchAppLink href="/">Launch App</S.LaunchAppLink>
          </>
        )}
      </S.Navigation>
      <S.WrapperMobile
        isOpened={isOpenMobileNavigation}
        onClick={() => setIsOpenMobileNavigation(false)}
      >
        <S.InnerWrapMobile onClick={(e) => e.stopPropagation()}>
          <S.TopWrapper>
            <S.Logo src="/images/common/CryptoryLogo.png" alt="logo cryptory" fill />
            <S.NavList>
              <S.NavItem
                onClick={() => setIsOpenMobileNavigation(false)}
                href="/#mainUseCases"
                isActive={asPath === "/#mainUseCases" || asPath.includes("/#mainUseCases")}
              >
                Main use cases
              </S.NavItem>
              <S.NavItem
                onClick={() => setIsOpenMobileNavigation(false)}
                href="/#roadMap"
                isActive={asPath === "/#roadMap" || asPath.includes("/#roadMap")}
              >
                Road Map
              </S.NavItem>
              <S.NavItem
                onClick={() => setIsOpenMobileNavigation(false)}
                href="/#gtMarketingStrategy"
                isActive={
                  asPath === "/#gtMarketingStrategy" || asPath.includes("/#gtMarketingStrategy")
                }
              >
                GT Marketing Strategy
              </S.NavItem>
              <S.NavItem
                onClick={() => setIsOpenMobileNavigation(false)}
                href="/#tokenomics"
                isActive={asPath === "/#tokenomics" || asPath.includes("/#tokenomics")}
              >
                Tokenomics
              </S.NavItem>
              <S.NavItemBtn isActive={isOpenOther} onClick={() => setIsOpenOther((prev) => !prev)}>
                Other
                <S.WrapperArrowDown isActive={isOpenOther}>
                  <SmallDownArrow />
                </S.WrapperArrowDown>
              </S.NavItemBtn>
            </S.NavList>
          </S.TopWrapper>
          <S.LaunchAppLink href="/" onClick={() => setIsOpenMobileNavigation(false)}>
            Launch App
          </S.LaunchAppLink>
        </S.InnerWrapMobile>
      </S.WrapperMobile>
    </>
  );
};
