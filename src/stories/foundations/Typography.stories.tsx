import type { Meta, StoryObj } from '@storybook/react';
import { mosaicTheme } from '../../styles/theme';

const meta: Meta = {
    title: 'Foundations/Typography',

    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj;

const TypographyRow = ({
    label,
    children,
}: {
    label: string;

    children: React.ReactNode;
}) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
            }}
        >
            <span
                style={{
                    opacity: 0.6,
                    fontSize: '12px',
                }}
            >
                {label}
            </span>

            {children}
        </div>
    );
};

export const Default: Story = {
    render: () => {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '48px',
                    padding: '32px',
                    background: mosaicTheme.surfaces.base,
                    color: mosaicTheme.colors.white,
                    minHeight: '100vh',
                }}
            >
                <TypographyRow label="Heading Font">
                    <div
                        style={{
                            fontFamily: mosaicTheme.typography.fonts.heading,
                            fontSize: mosaicTheme.typography.sizes.lg,
                        }}
                    >
                        MOSAIC UI KIT
                    </div>
                </TypographyRow>

                <TypographyRow label="Body Font">
                    <div
                        style={{
                            fontFamily: mosaicTheme.typography.fonts.body,
                            fontSize: mosaicTheme.typography.sizes.md,
                            lineHeight: mosaicTheme.typography.lineHeights.md,
                        }}
                    >
                        Mosaic-inspired React UI kit with
                        pixel aesthetics and reusable
                        components.
                    </div>
                </TypographyRow>

                <TypographyRow label="Font Sizes">
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                        }}
                    >
                        {
                            (
                                Object.entries(mosaicTheme.typography.sizes) as [string, string][]
                            ).map(([key, value]) => (
                                <div
                                    key={key}
                                    style={{
                                        fontSize: value,
                                        fontFamily: mosaicTheme.typography.fonts.body,
                                    }}
                                >
                                    {key.toUpperCase()} — {value}
                                </div>
                            ))
                        }
                    </div>
                </TypographyRow>
            </div>
        );
    },
};