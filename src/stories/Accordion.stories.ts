import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Accordion",
  component: Accordion,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    data: { array: true },
    expanded: { control: "boolean" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { 
    data: [
      {
        title: "Single Item 1",
        content: "Single Item 1 content",
      },
    ],
    expanded: true,
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SingleItem: Story = {
  args: {
    data: [
      {
        title: "Single Item 1",
        content: "Single Item 1 content",
      },
    ],
    expanded: true,
  },
};

export const Nested: Story = {
  args: {
    data:[
      {
        title: "Single Item",
        content: "Single Item content",
      },
      {
        title: "Nested Item",
        content: [
          {
            title: "Nested Item 1",
            content: "Nested Item 1 content",
          },
          {
            title: "Nested Item 2",
            content: [
              {
                title: "Nested Item 2.1",
                content: "Nested Item 2.1 content",
              },
              {
                title: "Nested Item 2.2",
                content: "Nested Item 2.2 content",
              },
            ],
          },
          {
            title: "Nested Item 3",
            content: "Nested Item 3 content",
          },
        ],
      },
      {
        title: "Single Item 2",
        content: "Single Item 2 content",
      },
    ],
    expanded: false,
  },
};

export const MultiItem: Story = {
  args: {
    data: [
      {
        title: "Single Item 1",
        content: "Single Item 1 content",
      },
      {
        title: "Single Item 2",
        content: "Single Item 2 content",
      },
    ],
    expanded: true,
  },
};

export const StyledItem: Story = {
  args: {
    data: [
      {
        title: "Styled Item",
        content: "Styled Item content",
      },
    ],
    listStyle: {
      header: { backgroundColor: "red" },
      item: { backgroundColor: "blue" },
      text: { color: "green" },
    },
  },
};