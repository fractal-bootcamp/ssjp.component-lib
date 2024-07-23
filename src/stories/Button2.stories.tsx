import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import Button from "../components/Button/component";
import { Home, Settings } from 'lucide-react';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            control: { type: 'select', options: ['primary', 'secondary', 'tertiary'] },
        },
        size: {
            control: { type: 'select', options: ['small', 'medium', 'large'] },
        },
        loading: { control: 'boolean' },
        disabled: { control: 'boolean' },
        iconPosition: {
            control: { type: 'select', options: ['small', 'medium', 'large'] },
        },
        onClick: { action: 'click' } //dont action know how action args work in storybook yet 
    }
};

export default meta;
//Defining the story type
type Story = StoryObj<typeof Button>;

//defining the individual stories 
export const Primary: Story = {
    args: {
        children: 'Primary Button',
        variant: 'primary'
    },
};

export const Secondary: Story = {
    args: {
        children: 'Secondary Button',
        variant: 'secondary',
    },
};

export const Tertiary: Story = {
    args: {
        children: 'Tertiary Button',
        variant: 'tertiary',
    },
};

export const Small: Story = {
    args: {
        children: 'Small Button',
        size: 'small',
    },
};

export const Medium: Story = {
    args: {
        children: 'Medium Button',
        size: 'medium',
    },
};

export const Large: Story = {
    args: {
        children: "Large Button",
        size: 'large'
    }
}

export const Loading: Story = {
    args: {
        children: 'Loading Button',
        loading: true,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Disabled Button',
        loading: true,
    },
};

export const WithLeftIcon: Story = {
    args: {
        children: 'Button with Left Icon',
        icon: Home,
        iconPosition: 'left'
    },
};

export const WithRightIcon: Story = {
    args: {
        children: 'Button with Right Icon',
        icon: Settings,
        iconPosition: 'right'
    },
};

export const WithToolTip: Story = {
    args: {
        children: 'Button with Tooltip',
        tooltip: 'legendary tip'
    },
};