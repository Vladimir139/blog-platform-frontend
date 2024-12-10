import React, { forwardRef } from "react";

import * as S from "./styles";
import { InputProps } from "./types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
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
    },
    ref,
  ) => (
    <S.Label stretch={stretch}>
      {label && <S.TextLabel>{label}</S.TextLabel>}
      <S.Input
        ref={ref}
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
  ),
);
