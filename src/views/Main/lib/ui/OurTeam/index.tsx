import React, { FC } from "react";

import { SwiperComponent, Title } from "@/shared/ui/atoms";

import * as S from "./styles";

export const OurTeam: FC = () => (
  <S.Wrapper>
    <S.DecorImageLongBlueGlow src="/images/ourTeam/longBlueBlur3.png" alt="decor image" fill />
    <Title>OUR TEAM</Title>
    <S.WrapperSwiper>
      <SwiperComponent
        slides={[
          <S.PersonCard>
            <S.ImagePerson src="/images/common/person.png" alt="image person" fill />
            <S.NamePerson>Rio</S.NamePerson>
            <S.DescriptionPerson>
              Digital Marketer and Content Creator that seamlessly blends visions into workable
              actions. With a keen eye for trends and a strategic mindset his aim is to best
              communicate our vision and goals.
            </S.DescriptionPerson>
          </S.PersonCard>,
          <S.PersonCard>
            <S.ImagePerson src="/images/common/person.png" alt="image person" fill />
            <S.NamePerson>Rio</S.NamePerson>
            <S.DescriptionPerson>
              Digital Marketer and Content Creator that seamlessly blends visions into workable
              actions. With a keen eye for trends and a strategic mindset his aim is to best
              communicate our vision and goals.
            </S.DescriptionPerson>
          </S.PersonCard>,
          <S.PersonCard>
            <S.ImagePerson src="/images/common/person.png" alt="image person" fill />
            <S.NamePerson>Rio</S.NamePerson>
            <S.DescriptionPerson>
              Digital Marketer and Content Creator that seamlessly blends visions into workable
              actions. With a keen eye for trends and a strategic mindset his aim is to best
              communicate our vision and goals.
            </S.DescriptionPerson>
          </S.PersonCard>,
          <S.PersonCard>
            <S.ImagePerson src="/images/common/person.png" alt="image person" fill />
            <S.NamePerson>Rio</S.NamePerson>
            <S.DescriptionPerson>
              Digital Marketer and Content Creator that seamlessly blends visions into workable
              actions. With a keen eye for trends and a strategic mindset his aim is to best
              communicate our vision and goals.
            </S.DescriptionPerson>
          </S.PersonCard>,
          <S.PersonCard>
            <S.ImagePerson src="/images/common/person.png" alt="image person" fill />
            <S.NamePerson>Rio</S.NamePerson>
            <S.DescriptionPerson>
              Digital Marketer and Content Creator that seamlessly blends visions into workable
              actions. With a keen eye for trends and a strategic mindset his aim is to best
              communicate our vision and goals.
            </S.DescriptionPerson>
          </S.PersonCard>,
          <S.PersonCard>
            <S.ImagePerson src="/images/common/person.png" alt="image person" fill />
            <S.NamePerson>Rio</S.NamePerson>
            <S.DescriptionPerson>
              Digital Marketer and Content Creator that seamlessly blends visions into workable
              actions. With a keen eye for trends and a strategic mindset his aim is to best
              communicate our vision and goals.
            </S.DescriptionPerson>
          </S.PersonCard>,
          <S.PersonCard>
            <S.ImagePerson src="/images/common/person.png" alt="image person" fill />
            <S.NamePerson>Rio</S.NamePerson>
            <S.DescriptionPerson>
              Digital Marketer and Content Creator that seamlessly blends visions into workable
              actions. With a keen eye for trends and a strategic mindset his aim is to best
              communicate our vision and goals.
            </S.DescriptionPerson>
          </S.PersonCard>,
        ]}
      />
    </S.WrapperSwiper>
  </S.Wrapper>
);
