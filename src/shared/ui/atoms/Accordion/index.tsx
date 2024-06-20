import React, { FC } from "react";

import * as S from "./styles";
import { CollapseItemProps, CollapseProps } from "./types";

export const Accordion: FC<CollapseProps> = ({ children, ...props }) => (
  <S.Collapse {...props}>{children}</S.Collapse>
);

export const AccordionItem: FC<CollapseItemProps> = ({ header, value, children }) => (
  <S.CollapseItem value={value}>
    <S.StyledHeader>
      <S.StyledTrigger>
        {header}
        <S.WrapperIcon>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="9.39453" width="2" height="20" fill="url(#paint0_linear_0_1)" />
            <rect
              x="20"
              y="9.39453"
              width="2"
              height="20"
              transform="rotate(90 20 9.39453)"
              fill="url(#paint1_linear_0_1)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_1"
                x1="9.39453"
                y1="8.77551"
                x2="11.3945"
                y2="8.77551"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF8A00" />
                <stop offset="1" stopColor="#AD00FF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_0_1"
                x1="20"
                y1="18.17"
                x2="22"
                y2="18.17"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF8A00" />
                <stop offset="1" stopColor="#AD00FF" />
              </linearGradient>
            </defs>
          </svg>
        </S.WrapperIcon>
      </S.StyledTrigger>
    </S.StyledHeader>

    <S.StyledContent>{children}</S.StyledContent>
  </S.CollapseItem>
);
