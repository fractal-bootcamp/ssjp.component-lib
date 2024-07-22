import React from "react";
import { InputSize, TextInputProps } from "./types";

const TextInput = ({
  size,
  placeholder,
  disabled,
  ...otherProps
}: TextInputProps) => {
  const inputPlaceholder = placeholder ? placeholder : "Input";

  switch (size) {
    case InputSize.Small:
      if (disabled) {
        return (
          <input
            type="text"
            placeholder={inputPlaceholder}
            size={InputSize.Small}
            className="bg-gray-200 cursor-not-allowed"
            disabled
            {...otherProps}
          />
        );
      } else {
        return (
          <input
            type="text"
            placeholder={inputPlaceholder}
            size={InputSize.Small}
            className="bg-gray-200"
            {...otherProps}
          />
        );
      }

    case InputSize.Medium:
      if (disabled) {
        return (
          <input
            type="text"
            placeholder={inputPlaceholder}
            size={InputSize.Medium}
            className="bg-gray-200 cursor-not-allowed"
            disabled
            {...otherProps}
          />
        );
      } else {
        return (
          <input
            type="text"
            placeholder={inputPlaceholder}
            size={InputSize.Medium}
            className="bg-gray-200"
            {...otherProps}
          />
        );
      }
    case InputSize.Large:
      if (disabled) {
        return (
          <input
            type="text"
            placeholder={inputPlaceholder}
            size={InputSize.Large}
            className="bg-gray-200 cursor-not-allowed"
            disabled
            {...otherProps}
          />
        );
      } else {
        return (
          <input
            type="text"
            placeholder={inputPlaceholder}
            size={InputSize.Large}
            className="bg-gray-200"
            {...otherProps}
          />
        );
      }
    default:
      return (
        <input
          type="text"
          placeholder={inputPlaceholder}
          size={InputSize.Medium}
          className="bg-gray-200"
          {...otherProps}
        />
      );
  }
};

export default TextInput;
