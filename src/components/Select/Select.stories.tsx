import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const statusOptions = [
    {
        label: 'TODO',
        value: 'todo',
    },

    {
        label: 'IN PROGRESS',
        value: 'in-progress',
    },

    {
        label: 'DONE',
        value: 'done',
    },
];

const priorityOptions = [
    {
        label: 'LOW',
        value: 'low',
    },

    {
        label: 'MEDIUM',
        value: 'medium',
    },

    {
        label: 'HIGH',
        value: 'high',
    },
];

const meta: Meta<typeof Select> = {
    title: 'Components/Select',
    component: Select,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'primary',
                'secondary',
                'accent',
            ],
            description: 'Вариант select',
        },

        selectSize: {
            control: 'select',
            options: [
                'small',
                'medium',
                'large',
            ],
            description: 'Размер select',
        },

        disabled: {
            control: 'boolean',
            description: 'Отключённое состояние',
        },

        error: {
            control: 'boolean',
            description: 'Состояние ошибки',
        },

        fullWidth: {
            control: 'boolean',
            description: 'Select на всю ширину',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        options: statusOptions,
        selectSize: 'medium',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        options: priorityOptions,
        selectSize: 'medium',
    },
};

export const Accent: Story = {
    args: {
        variant: 'accent',
        options: statusOptions,
        selectSize: 'medium',
    },
};

export const Error: Story = {
    args: {
        variant: 'primary',
        options: statusOptions,
        error: true,
    },
};


export const Disabled: Story = {
    args: {
        variant: 'secondary',
        options: statusOptions,
        disabled: true,
    },
};

export const FullWidth: Story = {
    args: {
        variant: 'primary',
        options: priorityOptions,
        fullWidth: true,
    },
};

export const SizeVariants: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                width: '300px',
            }}
        >
            <Select
                selectSize="small"
                options={statusOptions}
            />

            <Select
                selectSize="medium"
                options={statusOptions}
            />

            <Select
                selectSize="large"
                options={statusOptions}
            />
        </div>
    ),
};