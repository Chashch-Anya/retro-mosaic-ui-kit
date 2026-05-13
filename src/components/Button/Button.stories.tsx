import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'accent'],
            description: 'Button variant',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Button size',
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled button',
        },
        onClick: {
            action: 'clicked',
            description: 'onClick',
        },
    },
    args: {
        onClick: () => console.log('Button clicked!'),
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
        onClick: () => console.log('Clicked!'),
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
        onClick: () => console.log('Clicked!'),
    },
};

export const Accent: Story = {
    args: {
        variant: 'accent',
        children: 'Accent Button',
        onClick: () => console.log('Clicked!'),
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        children: 'Small Button',
        onClick: () => console.log('Clicked!'),
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
        children: 'Medium Button',
        onClick: () => console.log('Clicked!'),
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        children: 'Large Button',
        onClick: () => console.log('Clicked!'),
    },
};