import type { Meta, StoryObj } from '@storybook/react';
import { mosaicTheme } from '../../styles/theme';

const meta: Meta = {
    title: 'Foundations/Colors',

    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj;

const ColorGroup = ({
    title,
    colors,
}: {
    title: string;

    colors: Record<string, string>;
}) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
            }}
        >
            <h2>
                {title}
            </h2>

            <div
                style={{
                    display: 'flex',
                    gap: '16px',
                    flexWrap: 'wrap',
                }}
            >
                {Object.entries(colors).map(
                    ([key, value]) => (
                        <div
                            key={key}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px',
                            }}
                        >
                            <div
                                style={{
                                    width: '120px',
                                    height: '80px',
                                    background: value,
                                    border:
                                        '2px solid #081820',
                                    boxShadow:
                                        '4px 4px 0 rgba(0,0,0,0.15)',
                                }}
                            />

                            <span>
                                {key}
                            </span>

                            <span
                                style={{
                                    opacity: 0.7,
                                    fontSize: '12px',
                                }}
                            >
                                {value}
                            </span>
                        </div>
                    )
                )}
            </div>
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
                    minHeight: '100vh',
                }}
            >
                <ColorGroup
                    title="Primary"
                    colors={{
                        100: mosaicTheme.colors.primary[100],
                        500: mosaicTheme.colors.primary[500],
                        600: mosaicTheme.colors.primary[600],
                        700: mosaicTheme.colors.primary[700],
                    }}
                />

                <ColorGroup
                    title="Secondary"
                    colors={{
                        100: mosaicTheme.colors.gray[100],
                        300: mosaicTheme.colors.gray[300],
                        500: mosaicTheme.colors.gray[500],
                        700: mosaicTheme.colors.gray[700],
                        900: mosaicTheme.colors.gray[900],
                    }}
                />

                <ColorGroup
                    title="Accent"
                    colors={{
                        500: mosaicTheme.colors.accent[500],
                        600: mosaicTheme.colors.accent[600],
                    }}
                />

                <ColorGroup
                    title="Feedback"
                    colors={{
                        success: mosaicTheme.colors.feedback.success,
                        warning: mosaicTheme.colors.feedback.warning,
                        danger: mosaicTheme.colors.feedback.danger,
                        info: mosaicTheme.colors.feedback.info,
                    }}
                />

                <ColorGroup
                    title="Surfaces"
                    colors={{
                        base: mosaicTheme.surfaces.base,
                        elevated: mosaicTheme.surfaces.elevated,
                        overlay: mosaicTheme.surfaces.overlay,
                    }}
                />
            </div>
        );
    },
};