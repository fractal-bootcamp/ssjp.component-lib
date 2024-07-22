import React from "react";
import { InputSize, TextInputProps } from "./types";

const TextInput = ({ size }: TextInputProps) => {
  switch (size) {
    case InputSize.Small:
      return (
        <input type="text" size={InputSize.Small} className="bg-gray-200" />
      );
    case InputSize.Medium:
      return (
        <input type="text" size={InputSize.Medium} className="bg-gray-200" />
      );
    case InputSize.Large:
      return (
        <input type="text" size={InputSize.Large} className="bg-gray-200" />
      );
    default:
      return (
        <input type="text" size={InputSize.Medium} className="bg-gray-200" />
      );
  }
};

export default TextInput;
