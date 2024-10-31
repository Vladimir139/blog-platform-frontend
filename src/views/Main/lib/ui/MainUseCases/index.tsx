import React, { FC } from "react";

import { mainUseCases } from "@/shared/lib/constants";
import { CaseCard, Title } from "@/shared/ui/atoms";

import * as S from "./styles";

export const MainUseCases: FC = () => (
  <S.Wrapper>
    <S.DecorImageCasesText src="/images/mainUseCases/cases.png" alt="decor image" fill />
    <Title id="mainUseCases">MAIN USE CASES</Title>
    <S.CasesList>
      {mainUseCases.map((useCase) => (
        <CaseCard
          key={useCase.title}
          title={useCase.title}
          image={useCase.image}
          description={useCase.description}
          cssImage={useCase.cssImage}
        />
      ))}
    </S.CasesList>
    <S.DecorImageCasesNloWithStarsAndGlow
      src="/images/mainUseCases/casesNloWithStarsAndGlow.png"
      alt="decor image"
      fill
    />
  </S.Wrapper>
);
