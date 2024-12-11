import React, { FC, useEffect, useState } from "react";

import { ArrowToRightTopIcon, DeleteIcon, EditIcon } from "@/shared/lib/icons";

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
  onClick,
  onDelete,
}) => {
  const [finalImage, setFinalImage] = useState("/images/testPreviewPhoto.png");

  useEffect(() => {
    // Проверяем изображение
    const img = new Image();
    img.src = image;
    img.onload = () => setFinalImage(image); // Если загружается, используем его
    img.onerror = () => setFinalImage("/images/testPreviewPhoto.png"); // Иначе дефолтное
  }, [image]);

  return (
    <S.WrapperCard onClick={onClick}>
      {onEdit && (
        <S.EditBtn
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onEdit();
          }}
        >
          <EditIcon />
        </S.EditBtn>
      )}
      {onDelete && (
        <S.DeleteBtn
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onDelete();
          }}
        >
          <DeleteIcon />
        </S.DeleteBtn>
      )}
      <S.PreviewImage src={finalImage} alt="preview post photo" fill />
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
};
