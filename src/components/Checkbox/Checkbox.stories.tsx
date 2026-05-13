import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        checked: {
            control: 'boolean',
            description: 'Состояние true',
        },

        disabled: {
            control: 'boolean',
            description: 'Состояние false',
        },

        label: {
            control: 'text',
            description: 'Текст',
        },

        variant: {
            control: 'select',
            options: [
                'primary',
                'accent',
            ],
            description:
                'Вариант checkbox',
        },
    },
};

export default meta;

type Story =
    StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        checked: false,
        label: 'Complete task',
        variant: 'primary',
    },
};

export const Checked: Story = {
    args: {
        checked: true,
        label: 'Task completed',
        variant: 'primary',
    },
};

export const Accent: Story = {
    args: {
        checked: true,
        label: 'Important task',
        variant: 'accent',
    },
};

export const Disabled: Story = {
    args: {
        checked: false,
        disabled: true,
        label: 'Disabled checkbox',
    },
};

const InteractiveCheckbox = () => {
    const [
        checked,
        setChecked,
    ] = useState(false);

    return (
        <Checkbox
            checked={checked}
            onChange={setChecked}
            label={
                checked
                    ? 'Completed'
                    : 'Incomplete'
            }
        />
    );
};

export const Interactive: Story = {
    render: () => (
        <InteractiveCheckbox />
    ),
};