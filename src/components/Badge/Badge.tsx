import React from 'react';
import { useTheme } from '../../styles/useTheme';
import './Badge.css';

export interface BadgeProps {
    children: React.ReactNode;

    variant?: | 'success' | 'warning' | 'danger' | 'info';

    size?: 'sm' | 'md';

    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    children,

    variant = 'success',

    size = 'md',

    className = '',
}) => {
    const theme = useTheme();

    const sizeMap = {
        sm: {
            padding: '4px 8px',
            fontSize: theme.typography.sizes.xs,
        },

        md: {
            padding: '6px 10px',
            fontSize: theme.typography.sizes.sm,
        },
    };

    const variantMap = {
        success: {
            background: theme.colors.feedback.success,
            color: theme.colors.black,
            border: theme.colors.primary[700],
            shadow: theme.shadows.sm,
        },

        warning: {
            background: theme.colors.feedback.warning,
            color: theme.colors.black,
            border: theme.colors.gray[700],
            shadow: theme.shadows.sm,
        },

        danger: {
            background: theme.colors.feedback.danger,
            color: theme.colors.white,
            border: theme.colors.black,
            shadow: theme.shadows.sm,
        },

        info: {
            background: theme.colors.feedback.info,
            color: theme.colors.black,
            border: theme.colors.gray[700],
            shadow: theme.shadows.sm,
        },
    };

    const currentSize = sizeMap[size];
    const currentVariant = variantMap[variant];

    const badgeStyle = {
        '--badge-bg': currentVariant.background,

        '--badge-color': currentVariant.color,

        '--badge-border': currentVariant.border,

        '--badge-shadow': currentVariant.shadow,

        '--badge-padding': currentSize.padding,

        '--badge-font-size': currentSize.fontSize,

        '--badge-font-family': theme.typography.fonts.heading,

        '--badge-radius': theme.radius.none,

        '--mosaic-surface': theme.surfaces.pixelTexture,

        '--mosaic-surface-size': theme.surfaces.pixelTextureSize,

    } as React.CSSProperties;

    return (
        <span
            style={badgeStyle}
            className={`
                badge
                badge--${variant}
                badge--${size}
                ${className}
            `}
        >
            {children}
        </span>
    );
};