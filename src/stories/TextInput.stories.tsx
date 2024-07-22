import { Meta, StoryObj } from "@storybook/react";
import TextInput from "../components/TextInput/component";
import {
  InputSize,
  InputType,
  InputValidation,
} from "../components/TextInput/types";
import { Info, Menu, Search } from "lucide-react";

const meta = {
  title: "ComponentLibrary/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: [InputType.Text, InputType.Password],
    },
    size: {
      control: { type: "select" },
      options: [InputSize.Small, InputSize.Medium, InputSize.Large],
    },
    validation: {
      control: { type: "select" },
      options: [InputValidation.Success, InputValidation.Error],
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const ExampleTextInput: StoryObj<typeof meta> = {
  args: {
    placeholder: "Placeholder",

    type: InputType.Text,
    prefix: <Search />,
    suffix: <Menu />,
    popover: {
      icon: <Info />,
      active: false,
      content:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    size: InputSize.Large,
  },
};

export const DefaultInput: Story = {
  args: {
    ...ExampleTextInput.args,
  },
};

export const SuccessInput: Story = {
  args: {
    ...ExampleTextInput.args,
    validation: InputValidation.Success,
  },
};

export const ErrorInput: Story = {
  args: {
    ...ExampleTextInput.args,
    validation: InputValidation.Error,
  },
};
