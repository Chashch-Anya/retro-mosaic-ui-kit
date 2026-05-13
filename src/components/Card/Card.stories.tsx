import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'accent'],
            description: 'Card variant',
        },
        padding: {
            control: { type: 'select' },
            options: ['none', 'small', 'medium', 'large'],
            description: 'Card padding',
        },
        children: {
            control: { type: 'text' },
            description: 'Card children',
        },
        onClick: {
            action: 'clicked',
            description: 'Обработчик клика',
        },
    },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Card',
        padding: 'medium',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Card',
        padding: 'medium',
    },
};

export const Accent: Story = {
    args: {
        variant: 'accent',
        children: 'Accent Card',
        padding: 'medium',
    },
};

// Варианты отступов (padding)
export const PaddingVariants: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Card with different padding',
    },
    render: () => (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>

            {/* Карточка без отступов */}
            <Card variant="primary" padding="none">
                <Card.Content>Not padding (none)</Card.Content>
            </Card>

            {/* Маленькие отступы */}
            <Card variant="primary" padding="small">
                <Card.Content>Small padding (small)</Card.Content>
            </Card>

            {/* Средние отступы */}
            <Card variant="primary" padding="medium">
                <Card.Content>Moddle padding (medium)</Card.Content>
            </Card>

            {/* Большие отступы  */}
            <Card variant="primary" padding="large">
                <Card.Content>Large padding (large)</Card.Content>
            </Card>
        </div>
    ),
};

// Комплексный пример с header и footer
export const WithHeaderAndFooter: Story = {
    args: {
        variant: "primary",
        children: 'Primary Card with Header and Footer',
    },
    render: () => (
        <div style={{ maxWidth: 480 }}>
            <Card variant="primary" padding="large" >

                <Card.Header>
                    <h3>
                        Card heaer
                    </h3>
                </Card.Header>

                <Card.Content>
                    <p>
                        Card content with different information
                    </p>
                </Card.Content>

                <Card.Footer>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                        <Button size="small" variant="accent">Cancel</Button>
                        <Button size="small" variant="primary">Save</Button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    ),
};