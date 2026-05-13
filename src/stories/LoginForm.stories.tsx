import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from '../components/Panel/Panel';
import { Input } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import { Checkbox } from '../components/Checkbox/Checkbox';

const meta: Meta = {
    title: 'Examples/LoginForm',

    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
    render: () => (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '32px',
            }}
        >
            <div
                style={{
                    width: '420px',
                }}
            >
                <Panel title="System Login">
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
                            <span
                                style={{
                                    fontSize: '12px',
                                    opacity: 0.7,
                                    textTransform: 'uppercase',
                                }}
                            >
                                Mosaic Interface System
                            </span>

                            <span
                                style={{
                                    fontSize: '14px',
                                    opacity: 0.6,
                                }}
                            >
                                Authorized access only
                            </span>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px',
                            }}
                        >
                            <span>
                                Username
                            </span>

                            <Input
                                placeholder="Enter username..."
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
                                Password
                            </span>

                            <Input
                                type="password"
                                placeholder="Enter password..."
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '12px',
                            }}
                        >
                            <Checkbox
                                label="Remember me"
                            />

                            <span
                                style={{
                                    fontSize: '12px',
                                    opacity: 0.7,
                                }}
                            >
                                v1.0.4
                            </span>
                        </div>

                        <Button fullWidth>
                            Login
                        </Button>

                    </div>

                    <div
                        style={{
                            textAlign: 'center',
                            fontSize: '12px',
                            opacity: 0.5,
                            paddingTop: '4px',
                        }}
                    >
                        Mosaic OS Interface v1.0.4
                    </div>
                </Panel>
            </div>
        </div>
    ),
};