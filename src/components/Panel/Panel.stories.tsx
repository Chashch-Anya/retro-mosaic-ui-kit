import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from './Panel';

const meta: Meta<typeof Panel> = {
    title: 'Components/Panel',

    component: Panel,

    parameters: {
        layout: 'padded',
    },

    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Panel>;

export const Default: Story = {
    args: {
        title: 'System Panel',

        children:
            'This is a simple mosaic styled panel component.',
    },
};

export const TaskPanel: Story = {
    render: () => (
        <div
            style={{
                width: '420px',
            }}
        >
            <Panel title="Today Tasks">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                    }}
                >
                </div>
            </Panel>
        </div>
    ),
};