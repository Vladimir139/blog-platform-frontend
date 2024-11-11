import "swiper/css";

import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import * as S from "./styles";
import { SwiperProps } from "./types";

export const SwiperComponent: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<SwiperProps> & React.RefAttributes<any>
> = forwardRef<any, SwiperProps>(({ slides, ...props }, ref) => {
  const swiperInstanceRef = useRef(null);

  useImperativeHandle(ref, () => swiperInstanceRef.current, [swiperInstanceRef.current]);

  return (
    <S.Root>
      <Swiper
        onSwiper={(swiper) => {
          // @ts-ignore
          swiperInstanceRef.current = swiper;
        }}
        spaceBetween={9}
        slidesPerView="auto"
        {...props}
      >
        {slides.map((slide, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </S.Root>
  );
});
