import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from '../components/Panel/Panel';
import { Button } from '../components/Button/Button';

const meta: Meta = {
    title: 'Examples/SystemConfirm',

    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <div
            style={{
                width: '360px',
            }}
        >
            <Panel title="System Message">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                    }}
                >
                    <span>
                        Save current changes?
                    </span>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: '12px',
                        }}
                    >
                        <Button variant="accent">
                            Cancel
                        </Button>

                        <Button>
                            Save
                        </Button>
                    </div>
                </div>
            </Panel>
        </div>
    ),
};