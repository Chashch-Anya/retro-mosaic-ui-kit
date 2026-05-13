import React from 'react';
import { useTheme } from '../../styles/useTheme';
import './Textarea.css';

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {

    variant?: 'primary' | 'secondary' | 'accent';

    textareaSize?: 'small' | 'medium' | 'large';

    fullWidth?: boolean;

    error?: boolean;
}
export const Textarea: React.FC<
    TextareaProps
> = ({
    variant = 'primary',
    textareaSize = 'medium',
    fullWidth = false,
    error = false,
    className = '',
    ...props
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
                border: theme.colors.black,
            },

            secondary: {
                background: theme.colors.gray[100],
                color: theme.colors.black,
                border: theme.colors.gray[700],
            },

            accent: {
                background: theme.colors.accent[500],
                color: theme.colors.black,
                border: theme.colors.black,
            },
        };

        const currentSize = sizeMap[textareaSize];
        const currentVariant = variantMap[variant];

        const textareaStyle = {
            '--textarea-bg': currentVariant.background,

            '--textarea-color': currentVariant.color,

            '--textarea-border': error
                ? '#ff004d'
                : currentVariant.border,

            '--textarea-padding': currentSize.padding,

            '--textarea-font-size': currentSize.fontSize,

            '--textarea-font-family': theme.typography.fonts.body,

            '--textarea-radius': theme.radius.none,
            '--textarea-shadow': theme.shadows.sm,

            '--mosaic-surface': theme.surfaces.pixelTexture,

            '--mosaic-surface-size': theme.surfaces.pixelTextureSize,

            '--textarea-focus-shadow': theme.shadows.focus,
            
            width: fullWidth
                ? '100%'
                : 'auto',

        } as React.CSSProperties;
        return (
            <textarea
                {...props}
                style={textareaStyle}
                className={
                    `textarea ${className}`
                }
            />
        );
    }