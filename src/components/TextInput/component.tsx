import React, { useState } from "react";
import {
  InputSize,
  InputType,
  PasswordVisibility,
  TextInputProps,
} from "./types";

import { Eye, EyeOff } from "lucide-react";
import Popover from "../base/Popover";

const TextInput = ({
  size,
  placeholder,
  disabled,
  type,
  prefix,
  suffix,
  popover,
  ...otherProps
}: TextInputProps) => {
  // state for popover
  const [active, setActive] = useState(popover?.active || false);
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
  const inputPopover = popover ? (
    <Popover popover={popover} active={active} setActive={setActive} />
  ) : null;

  return (
    <div className="relative py-6 px-4  flex flex-col items-center justify-center">
      {/* ^relative to position the popover - could be pt-6 pr-4 */}
      {inputPopover && inputPopover}
      <div
        className={`bg-gray-200 px-4 rounded-full h-fit w-fit flex flex-row items-center ${active && "opacity-50"}`}
      >
        <input
          type={inputType}
          value={value}
          placeholder={inputPlaceholder}
          size={inputSize}
          disabled={inputDisabled}
          className="bg-transparent py-4 px-2 hover:border-transparent focus:outline-0"
          onChange={({ target }) => setValue(target.value)}
          {...otherProps}
        />

        <div className="flex flex-row items-center gap-2">
          {type === InputType.Password ? (
            toggleVisibility === PasswordVisibility.Visible ? (
              <Eye
                onClick={() => {
                  setToggleVisibility(
                    toggleVisibility === PasswordVisibility.Visible
                      ? PasswordVisibility.Hidden
                      : PasswordVisibility.Visible
                  );
                }}
              />
            ) : (
              <EyeOff
                onClick={() => {
                  setToggleVisibility(
                    toggleVisibility === PasswordVisibility.Hidden
                      ? PasswordVisibility.Visible
                      : PasswordVisibility.Hidden
                  );
                }}
              />
            )
          ) : null}

          {suffix && suffix}
        </div>
      </div>
    </div>
  );
};

export default TextInput;
