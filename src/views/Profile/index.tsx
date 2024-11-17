import React, { FC } from "react";

import { Button, Container } from "@/shared/ui/atoms";

export const ProfilePage: FC = () => (
  <Container>
    <S.HeaderProfileLine>
      <S.WelcomeInfo>
        <S.TitleWelcome>asdf</S.TitleWelcome>
        <S.DateText>asdf</S.DateText>
      </S.WelcomeInfo>
      <S.CreateNewPostWrapBtn>
        <Button>asdf</Button>
      </S.CreateNewPostWrapBtn>
    </S.HeaderProfileLine>
  </Container>
);
