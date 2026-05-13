import { Input } from "./Input";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'accent'],
            description: 'Тип поля',
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
            description: 'Размер поля',
        },
        disabled: {
            control: 'boolean',
            description: 'Отключенное состояние',
        },
        placeholder: {
            control: 'text',
            description:
                'Placeholder текст',
        },
        error: {
            control: 'boolean',
            description:
                'Состояние ошибки',
        },

        fullWidth: {
            control: 'boolean',
            description:
                'Поле на всю ширину',
        },
    },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        placeholder: 'Primary input',
        inputSize: 'medium',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        placeholder: 'Secondary input',
        inputSize: 'medium',
    },
};

export const Accent: Story = {
    args: {
        variant: 'accent',
        placeholder: 'Accent input',
        inputSize: 'medium',
    },
};

// Состояние ошибки
export const Error: Story = {
    args: {
        variant: 'primary',
        placeholder: 'Invalid input',
        error: true,
        inputSize: 'medium',
    },
};

// Disabled состояние
export const Disabled: Story = {
    args: {
        variant: 'secondary',
        placeholder: 'Disabled input',
        inputSize: 'medium',
        disabled: true,
    },
};

export const FullWidth: Story = {
    args: {
        variant: 'primary',
        placeholder: 'Full width input',
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
            <Input
                inputSize="small"
                placeholder="Small input"
            />

            <Input
                inputSize="medium"
                placeholder="Medium input"
            />
            <Input
                inputSize="large"
                placeholder="Large input"
            />
        </div>
    ),
};