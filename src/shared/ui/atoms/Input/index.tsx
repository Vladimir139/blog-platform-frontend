import React, { ChangeEvent, Dispatch, forwardRef, SetStateAction } from "react";

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
  ) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value as typeof value;

      if (typeof onChange === "function") {
        if (onChange.length === 2) {
          // @ts-ignore
          (onChange as (event: ChangeEvent<HTMLInputElement>, value: typeof value) => void)(
            event,
            inputValue,
          );
        } else {
          // Если onChange — это функция SetStateAction (например, от useState)
          (onChange as Dispatch<SetStateAction<typeof value>>)(inputValue);
        }
      }
    };

    return (
      <S.Label stretch={stretch}>
        {label && <S.TextLabel>{label}</S.TextLabel>}
        <S.Input
          ref={ref}
          value={value}
          onChange={handleChange}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled}
          /* ---- */
          size={size}
          radius={radius}
          theme={theme}
        />
        {error && <S.Error>{error}</S.Error>}
      </S.Label>
    );
  },
);
