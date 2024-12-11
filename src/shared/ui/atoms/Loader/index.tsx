import { FC, HTMLAttributes } from "react";

import * as S from "./styles";
import { LoaderProps } from "./types";

export const Loader: FC<LoaderProps & HTMLAttributes<SVGElement>> = (props) => {
  const { width = 18, height = 18, center, color = "#FFFFFF" } = props;
  return (
    <S.Loader
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      x="0"
      y="0"
      viewBox="25 25 50 50"
      width={width}
      height={height}
      // eslint-disable-next-line react/destructuring-assignment
      style={props.style || {}}
      center={center}
      data-testid="Loader"
    >
      <path
        d="M73 50c0-12.7-10.3-23-23-23S27 37.3 27 50m3.9 0c0-10.5 8.5-19.1 19.1-19.1S69.1 39.5 69.1 50"
        style={{ fill: color }}
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          dur="1s"
          from="0 50 50"
          repeatCount="indefinite"
          to="360 50 50"
          type="rotate"
        />
      </path>
    </S.Loader>
  );
};
