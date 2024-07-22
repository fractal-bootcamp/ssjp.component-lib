import React, { useState } from "react";
import {
  InputSize,
  InputType,
  PasswordVisibility,
  TextInputProps,
} from "./types";
import EyesOff from "../icons/EyesOff";

const TextInput = ({
  size,
  placeholder,
  disabled,
  type,
  ...otherProps
}: TextInputProps) => {
  const [toggleVisibility, setToggleVisibility] = useState<PasswordVisibility>(
    PasswordVisibility.Hidden
  );
  const inputDisabled = disabled ? disabled : false;
  const inputPlaceholder = placeholder ? placeholder : "Input";
  const inputSize = size ? size : InputSize.Medium;
  const inputType = type
    ? type === InputType.Password
      ? toggleVisibility
      : InputType.Text
    : InputType.Text;

  return (
    <div className="h-fit w-fit flex flex-row items-center">
      <input
        type={inputType}
        placeholder={inputPlaceholder}
        size={inputSize}
        disabled={inputDisabled}
        className="bg-gray-200"
        {...otherProps}
      />
      {type === InputType.Password && (
        <button
          onClick={() => {
            setToggleVisibility(
              toggleVisibility === PasswordVisibility.Visible
                ? PasswordVisibility.Hidden
                : PasswordVisibility.Visible
            );
          }}
          className="bg-transparent h-fit"
        >
          <EyesOff />
        </button>
      )}
    </div>
  );
};

export default TextInput;
