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
          <span />
        </S.WrapperIcon>
      </S.StyledTrigger>
    </S.StyledHeader>

    <S.StyledContent>{children}</S.StyledContent>
  </S.CollapseItem>
);
