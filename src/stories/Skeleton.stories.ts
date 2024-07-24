import type {Meta, StoryObj} from '@storybook/react'

import Skeleton from '../components/Skeleton/component';

const meta: Meta<typeof Skeleton> = {
    title: 'Example/Skeleton',
    component: Skeleton,
    parameters: {
      layout: "centered", 
    },
    argTypes: {
        shape: {
          options: ["icon", "image", "title", "text", "user_post", "image_post"],
          control: { type: 'select' },
        },
        size: {
            options: ["small", "medium", "large"],
            control: { type: 'select' },
          },
        style: {
            options: ["pulse", "shimmer"], 
            control: {type: 'select'}
        }
  }
}


export default meta;

type Story = StoryObj<typeof meta> 
  
export const Default: Story = {
  args: {
    shape: "user_post",
    size: "medium",
    style: "pulse"
  }
}