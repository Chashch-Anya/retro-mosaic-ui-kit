import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',

    component: Badge,

    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],

    argTypes: {
        variant: {
            control: 'select',
            options: [
                'success',
                'warning',
                'danger',
                'info',
            ],
        },

        size: {
            control: 'select',
            options: ['sm', 'md'],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Success: Story = {
    args: {
        children: 'DONE',
        variant: 'success',
        size: 'md',
    },
};

export const Warning: Story = {
    args: {
        children: 'IN PROGRESS',
        variant: 'warning',
        size: 'md',
    },
};

export const Danger: Story = {
    args: {
        children: 'BLOCKED',
        variant: 'danger',
        size: 'md',
    },
};

export const Info: Story = {
    args: {
        children: 'REVIEW',
        variant: 'info',
        size: 'md',
    },
};

export const Small: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                gap: '12px',
            }}
        >
            <Badge
                variant="success"
                size="sm"
            >
                DONE
            </Badge>

            <Badge
                variant="warning"
                size="sm"
            >
                TODO
            </Badge>

            <Badge
                variant="danger"
                size="sm"
            >
                BUG
            </Badge>
        </div>
    ),
};

export const TaskStatuses: Story = {
    render: () => (
        <div
            style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap',
            }}
        >
            <Badge variant="success">
                DONE
            </Badge>

            <Badge variant="warning">
                IN PROGRESS
            </Badge>

            <Badge variant="danger">
                BLOCKED
            </Badge>

            <Badge variant="info">
                REVIEW
            </Badge>
        </div>
    ),
};