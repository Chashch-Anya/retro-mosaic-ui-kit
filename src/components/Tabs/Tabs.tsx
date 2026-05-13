import React from 'react';
import './Tabs.css';
import { useTheme } from '../../styles/useTheme';

export interface TabsProps {
    items: string[];

    value: string;

    variant?: 'primary' | 'secondary' | 'accent';

    onChange?: (value: string) => void;

    className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
    items,

    value,

    variant = 'primary',

    onChange,

    className = '',
}) => {
    const theme = useTheme();
    const variantMap = {
        primary: {
            bg: theme.surfaces.elevated,
            activeBg: theme.surfaces.overlay,
            border: theme.colors.primary[600],
            color: theme.colors.white,
            shadow: theme.shadows.primary.md,
        },

        secondary: {
            bg: theme.colors.gray[700],
            activeBg: theme.colors.gray[500],
            border: theme.colors.gray[300],
            color: theme.colors.gray[100],
            shadow: theme.shadows.secondary.md,
        },

        accent: {
            bg: theme.colors.gray[100],
            activeBg: theme.colors.accent[500],
            border: theme.colors.gray[500],
            color: theme.colors.black,
            shadow: theme.shadows.accent.md,
        },
    };

    const currentVariant = variantMap[variant];

    const tabsStyle = {
        '--tabs-bg': currentVariant.bg,

        '--tabs-active-bg': currentVariant.activeBg,

        '--tabs-border': currentVariant.border,

        '--tabs-color': currentVariant.color,

        '--tabs-shadow': currentVariant.shadow,

        '--tabs-font': theme.typography.fonts.heading,

        '--mosaic-surface': theme.surfaces.pixelTexture,

        '--mosaic-surface-size': theme.surfaces.pixelTextureSize,

    } as React.CSSProperties;

    return (
        <div style={tabsStyle}
            className={`tabs ${className}`}>
            {items.map((item) => {
                const isActive =
                    item === value;

                return (
                    <button
                        key={item}
                        type="button"
                        className={`
                            tabs__item
                            ${isActive ? 'tabs__item--active' : ''}
                        `}
                        onClick={() => onChange?.(item)}
                    >
                        {item}
                    </button>
                );
            })}
        </div>
    );
};