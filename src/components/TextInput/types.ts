import React from "react";

export enum InputSize {
  Small = 10,
  Medium = 20,
  Large = 30,
}

export enum PasswordVisibility {
  Visible = "text",
  Hidden = "password",
}

export enum InputType {
  Text = "text",
  Password = "password",
}

export type PopoverProps = {
  icon: JSX.Element;
  active: boolean;
  content: string;
};

export type TextInputProps = {
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  size?: InputSize;
  placeholder?: string;
  disabled?: boolean;
  type?: InputType;
  popover?: PopoverProps;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix" | "suffix">;
