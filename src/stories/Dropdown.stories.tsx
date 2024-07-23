import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DropDown, { DropdownProps } from '../components/Dropdown/component';

export default {
    title: 'Components/Dropdown',
    component: DropDown,
    argTypes: {
        onChange: { action: 'changed' },
    },
} as Meta;

type Story = StoryObj<typeof DropDown>;

export const Primary: Story = {
    args: {
        options: [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
        ],
        multiSelect: false,
        placeholder: 'Select an option',
        onChange: (selected) => console.log('Selected:', selected),

    },
};