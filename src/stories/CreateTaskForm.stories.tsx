import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from '../components/Panel/Panel';
import { Input } from '../components/Input/Input';
import { Select } from '../components/Select/Select';
import { Textarea } from '../components/Textarea/Textarea';
import { Button } from '../components/Button/Button';

const meta: Meta = {
    title: 'Examples/CreateTaskForm',

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
                width: '420px',
            }}
        >
            <Panel title="Create Task">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                        }}
                    >
                        <span>
                            Title
                        </span>

                        <Input
                            placeholder="Enter task title..."
                        />
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                        }}
                    >
                        <span>
                            Priority
                        </span>

                        <Select
                            options={[
                                {
                                    label: 'Low',
                                    value: 'low',
                                },

                                {
                                    label: 'Medium',
                                    value: 'medium',
                                },

                                {
                                    label: 'High',
                                    value: 'high',
                                },
                            ]}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                        }}
                    >
                        <span>
                            Description
                        </span>

                        <Textarea
                            placeholder="Describe the task..."
                            rows={5}
                        />
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            marginTop: '8px',
                        }}
                    >
                        <Button>
                            Create Task
                        </Button>
                    </div>
                </div>
            </Panel>
        </div>
    ),
};