import React, { FC } from "react";

import * as S from "./styles";
import { TextareaProps } from "./types";

export const Textarea: FC<TextareaProps> = ({
  size,
  label,
  placeholder,
  name,
  radius,
  stretch,
  disabled,
  theme,
  defaultValue,
  value,
  onChange,
  error,
}) => (
  <S.Label stretch={stretch}>
    {label && <S.TextLabel>{label}</S.TextLabel>}
    <S.Textarea
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      disabled={disabled}
      size={size}
      radius={radius}
      theme={theme}
    />
    {error && <S.Error>{error}</S.Error>}
  </S.Label>
);
