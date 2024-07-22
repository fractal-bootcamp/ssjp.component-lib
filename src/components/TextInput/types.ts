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
  size?: InputSize;
  placeholder?: string;
  disabled?: boolean;
  type?: InputType;
} & React.InputHTMLAttributes<HTMLInputElement>;
