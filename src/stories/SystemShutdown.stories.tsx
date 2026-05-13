import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/Modal/Modal';
import { Button } from '../components/Button/Button';
import { Badge } from '../components/Badge/Badge';

const meta: Meta = {
    title: 'Examples/SystemShutdown',

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
            }}
        >
            <Modal
                open
                onClose={() => { }}
                title="System Warning"
            >

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                        minWidth: '320px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                        }}
                    >
                        <Badge variant="danger">
                            Critical Warning
                        </Badge>

                        <span>
                            Shut down system now?
                        </span>

                        <span
                            style={{
                                opacity: 0.7,
                                fontSize: '14px',
                            }}
                        >
                            Unsaved progress will be lost.
                        </span>
                    </div>
                </div>

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

                    <Button variant="secondary">
                        Shutdown
                    </Button>
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        opacity: 0.5,
                        fontSize: '12px',
                        marginTop: '8px',
                    }}
                >
                    <span>
                        SYS://POWER_MANAGER
                    </span>

                    <span>
                        v2.4.1
                    </span>
                </div>
            </Modal>
        </div>
    ),
};