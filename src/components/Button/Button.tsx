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

    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'small',
    onClick,
    disabled = false,
    fullWidth = false,
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
            border: theme.colors.primary[500],
            shadow: theme.shadows.primary.md,
            shadowHover: theme.shadows.primary.lg,
        },

        secondary: {
            background: theme.colors.gray[500],
            color: theme.colors.white,
            border: theme.colors.gray[300],
            shadow: theme.shadows.secondary.md,
            shadowHover: theme.shadows.secondary.lg,
        },

        accent: {
            background: theme.colors.accent[500],
            color: theme.colors.black,
            border: theme.colors.white,
            shadow: theme.shadows.accent.md,
            shadowHover: theme.shadows.accent.lg,
        },
    };

    const currentSize = sizeMap[size];

    const currentVariant = variantMap[variant];

    const buttonStyle = {
        '--btn-bg': currentVariant.background,

        '--btn-color': currentVariant.color,

        '--btn-padding': currentSize.padding,

        '--btn-font-size': currentSize.fontSize,

        '--btn-font-family': theme.typography.fonts.heading,

        '--btn-radius': theme.radius.none,

        '--btn-shadow': currentVariant.shadow,

        '--btn-shadow-hover': currentVariant.shadowHover,

        '--btn-border': currentVariant.border,

        '--mosaic-surface': theme.surfaces.pixelTexture,

        '--mosaic-surface-size': theme.surfaces.pixelTextureSize,
    } as React.CSSProperties;

    return (
        <button
            style={buttonStyle}
            onClick={onClick}
            disabled={disabled}
            className={`btn btn--${variant} ${fullWidth ? 'button--full-width' : ''}`}
        >
            {children}
        </button>
    );
};