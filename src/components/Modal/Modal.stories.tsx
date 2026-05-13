import { Modal } from "./Modal";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,

    parameters: {
        layout: 'fullscreen',
    },

    tags: ['autodocs'],

    argTypes: {
        open: {
            control: 'boolean',
            description: 'Modal visibility',
        },

        title: {
            control: 'text',
            description: 'Modal title',
        },
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultModal: Story = {
    args: {
        open: true,
        title: 'Inventory',
    },

    render: (args) => (
        <Modal {...args}>
            <p>
                Wooden sword acquired.
            </p>
        </Modal>
    ),
};

export const LargeContent: Story = {
    args: {
        open: true,
        title: 'Large Content',
    },

    render: (args) => (
        <Modal {...args}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                }}
            >
                <p>
                    Active quests:
                </p>
                <ul>
                    <li>
                        Find ancient sword
                    </li>

                    <li>
                        Defeat dungeon boss
                    </li>

                    <li>
                        Collect 10 herbs
                    </li>
                </ul>
            </div>
        </Modal>
    ),
};