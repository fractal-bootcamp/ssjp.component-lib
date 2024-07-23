import type {Meta, StoryObj} from '@storybook/react'

import Tooltip from './Tooltip'

const meta: Meta<typeof Tooltip> = {
    title: 'Example/Tooltip',
    component: Tooltip,
    parameters: {
      layout: "centered", 
    },
    argTypes: {
        position: {
          options: ['top', 'bottom', 'left', 'right'],
          control: { type: 'select' },
        },
  }
}


export default meta;

type Story = StoryObj<typeof meta> 
  
export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    
  }
}