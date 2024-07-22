import React, { useState } from "react";
import { InputSize, TextInputProps } from "./types";

const TextInput = ({ size, placeholder }: TextInputProps) => {
  const [defaultPlaceholder, setDefaultPlaceholder] = useState<string>("");

  if (!placeholder) {
    setDefaultPlaceholder("Input");
  } else setDefaultPlaceholder(placeholder);

  switch (size) {
    case InputSize.Small:
      return (
        <input
          type="text"
          placeholder={defaultPlaceholder}
          size={InputSize.Small}
          className="bg-gray-200"
        />
      );
    case InputSize.Medium:
      return (
        <input
          type="text"
          placeholder={defaultPlaceholder}
          size={InputSize.Medium}
          className="bg-gray-200"
        />
      );
    case InputSize.Large:
      return (
        <input
          type="text"
          placeholder={defaultPlaceholder}
          size={InputSize.Large}
          className="bg-gray-200"
        />
      );
    default:
      return (
        <input
          type="text"
          placeholder={defaultPlaceholder}
          size={InputSize.Medium}
          className="bg-gray-200"
        />
      );
  }
};

export default TextInput;
