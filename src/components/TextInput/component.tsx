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
  const [value, setValue] = useState<string>("");
  // state fopr password visibility if input type is password
  const [toggleVisibility, setToggleVisibility] = useState<PasswordVisibility>(
    PasswordVisibility.Hidden
  );

  // determines the input type
  const inputType = type
    ? // if type is password, set the toggle visibility to the password visibility state
      type === InputType.Password
      ? toggleVisibility
      : InputType.Text
    : // if type is not password, set the input type to text
      InputType.Text;

  const inputDisabled = disabled ? disabled : false;
  const inputPlaceholder = placeholder ? placeholder : "Input";
  const inputSize = size ? size : InputSize.Medium;

  return (
    <div className="h-fit w-fit flex flex-row items-center">
      <input
        type={inputType}
        value={value}
        placeholder={inputPlaceholder}
        size={inputSize}
        disabled={inputDisabled}
        className="bg-gray-200"
        onChange={({ target }) => setValue(target.value)}
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
