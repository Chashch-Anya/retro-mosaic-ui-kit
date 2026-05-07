import React from "react";

import { useTheme } from "../../styles/useTheme";

import './Button.css';

export interface ButtonProps {
    children: React.ReactNode;

    variant?: 'primary' | 'secondary' | 'accent';

    size?: 'small' | 'medium' | 'large';

    onClick?: (
        event: React.MouseEvent<HTMLButtonElement>
    ) => void;

    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'small',
    onClick,
    disabled = false
}) => {
    const theme = useTheme();

    const sizeMap = {
        small: {
            padding: theme.spacing.sm,
            fontSize: theme.typography.sizes.sm,
        },

        medium: {
            padding: theme.spacing.md,
            fontSize: theme.typography.sizes.md,
        },

        large: {
            padding: theme.spacing.lg,
            fontSize: theme.typography.sizes.lg,
        },
    };

    const variantMap = {
        primary: {
            background: theme.colors.primary[500],
            color: theme.colors.white,
        },

        secondary: {
            background: theme.colors.gray[500],
            color: theme.colors.white,
        },

        accent: {
            background: theme.colors.accent[500],
            color: theme.colors.black,
        },
    };

    const currentSize = sizeMap[size];

    const currentVariant = variantMap[variant];

    const buttonStyle = {
        '--btn-bg': currentVariant.background,

        '--btn-color': currentVariant.color,

        '--btn-padding': currentSize.padding,

        '--btn-font-size': currentSize.fontSize,

        '--btn-font-family':
            theme.typography.fontFamily,

        '--btn-radius':
            theme.radius.none,

        '--btn-shadow':
            theme.shadows.md,

        '--mosaic-surface':
            theme.surfaces.pixelTexture,

        '--mosaic-surface-size':
            theme.surfaces.pixelTextureSize,
    } as React.CSSProperties;

    return (
        <button
            style={buttonStyle}
            onClick={onClick}
            disabled={disabled}
            className={`btn btn--${variant}`}
        >
            {children}
        </button>
    );
};