import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'Components/Tabs',

    component: Tabs,

    parameters: {
        layout: 'centered',
    },

    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'accent'],
            description: 'Tabs variant',
        },
    }
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    render: () => {
        const [value, setValue] =
            useState('Tasks');

        return (
            <Tabs
                items={[
                    'Tasks',
                    'Activity',
                    'Settings',
                ]}
                value={value}
                onChange={setValue}
            />
        );
    },
};

export const Primary: Story = {
    render: () => {
        const [value, setValue] =
            useState('Tasks');

        return (
            <Tabs
                variant="primary"
                items={[
                    'Tasks',
                    'Activity',
                    'Settings',
                ]}
                value={value}
                onChange={setValue}
            />
        );
    },
};

export const Secondary: Story = {
    render: () => {
        const [value, setValue] =
            useState('Tasks');

        return (
            <Tabs
                variant="secondary"
                items={[
                    'Tasks',
                    'Activity',
                    'Settings',
                ]}
                value={value}
                onChange={setValue}
            />
        );
    },
};

export const Accent: Story = {
    render: () => {
        const [value, setValue] =
            useState('Tasks');

        return (
            <Tabs
                variant="accent"
                items={[
                    'Tasks',
                    'Activity',
                    'Settings',
                ]}
                value={value}
                onChange={setValue}
            />
        );
    },
};