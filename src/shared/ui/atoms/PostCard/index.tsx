import React, { FC } from "react";

import { ArrowToRightTopIcon, EditIcon } from "@/shared/lib/icons";

import * as S from "./styles";
import { PostCardProps } from "./types";

export const PostCard: FC<PostCardProps> = ({
  image,
  firstname,
  surname,
  date,
  title,
  shortDesc,
  onEdit,
}) => (
  <S.WrapperCard>
    {onEdit && (
      <S.EditBtn onClick={onEdit}>
        <EditIcon />
      </S.EditBtn>
    )}
    <S.PreviewImage src={image} alt="preview post photo" fill />
    <S.AdditionalInfo>
      {firstname} {surname} • {date}
    </S.AdditionalInfo>
    <S.TitleWrapper>
      <S.Title>{title}</S.Title>
      <S.WrapperIcon>
        <ArrowToRightTopIcon />
      </S.WrapperIcon>
    </S.TitleWrapper>
    <S.ShortDescription>{shortDesc}</S.ShortDescription>
  </S.WrapperCard>
);
