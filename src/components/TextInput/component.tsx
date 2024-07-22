import React from "react";
import { InputSize, InputType, TextInputProps } from "./types";

const TextInput = ({
  size,
  placeholder,
  disabled,
  type,
  ...otherProps
}: TextInputProps) => {
  const inputDisabled = disabled ? disabled : false;
  const inputPlaceholder = placeholder ? placeholder : "Input";
  const inputType = type ? type : InputType.Text;
  const inputSize = size ? size : InputSize.Medium;

  return (
    <input
      type={inputType}
      placeholder={inputPlaceholder}
      size={inputSize}
      disabled={inputDisabled}
      className="bg-gray-200"
      {...otherProps}
    />
  );
};

export default TextInput;
