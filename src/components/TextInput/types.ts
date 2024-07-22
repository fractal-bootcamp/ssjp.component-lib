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

export type TextInputProps = {
  prefix?: JSX.Element;
  suffix?: React.ReactNode;
  size?: InputSize;
  placeholder?: string;
  disabled?: boolean;
  type?: InputType;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix" | "suffix">;
