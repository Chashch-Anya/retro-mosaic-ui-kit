import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
    title: 'Components/Textarea',
    component: Textarea,
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
            description: 'Textarea variant',
        },
        textareaSize: {
            control: 'select',
            options: [
                'small',
                'medium',
                'large',
            ],
            description: 'Textarea size',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text',
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled textarea',
        },
        error: {
            control: 'boolean',
            description: 'Textarea error',
        },
        fullWidth: {
            control: 'boolean',
            description: 'Textarea full width',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        placeholder: 'Primary textarea',
        textareaSize: 'medium',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        placeholder: 'Secondary textarea',
        textareaSize: 'medium',
    },
};

export const Accent: Story = {
    args: {
        variant: 'accent',
        placeholder: 'Accent textarea',
        textareaSize: 'medium',
    },
};

export const Error: Story = {
    args: {
        variant: 'primary',
        placeholder: 'Invalid description',
        error: true,
    },
};

export const Disabled: Story = {
    args: {
        variant: 'secondary',
        placeholder: 'Disabled textarea',
        disabled: true,
    },
};

export const FullWidth: Story = {
    args: {
        variant: 'primary',
        placeholder: 'Full width textarea',
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
                width: '400px',
            }}
        >
            <Textarea
                textareaSize="small"
                placeholder="Small textarea"
            />

            <Textarea
                textareaSize="medium"
                placeholder="Medium textarea"
            />

            <Textarea
                textareaSize="large"
                placeholder="Large textarea"
            />
        </div>
    ),
};