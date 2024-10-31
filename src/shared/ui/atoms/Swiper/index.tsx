import "swiper/css";
import "swiper/css/free-mode";

import { FC } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import * as S from "./styles";
import { SwiperProps } from "./types";

export const SwiperComponent: FC<SwiperProps> = ({ slides, ...props }) => (
  <S.Root>
    <Swiper spaceBetween={19} freeMode modules={[FreeMode]} {...props}>
      {slides.map((slide, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  </S.Root>
);
