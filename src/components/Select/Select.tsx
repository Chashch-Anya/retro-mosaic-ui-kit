import React from 'react';
import { useTheme } from '../../styles/useTheme';
import './Select.css';

export interface SelectOption {
    label: string;
    value: string;
}

export interface SelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: SelectOption[];
    variant?: 'primary' | 'secondary' | 'accent';
    selectSize?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    error?: boolean;
}

export const Select: React.FC<
    SelectProps
> = ({
    options,
    variant = 'primary',
    selectSize = 'medium',
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

        const currentSize = sizeMap[selectSize];
        const currentVariant = variantMap[variant];

        const selectStyle = {
            '--select-bg': currentVariant.background,

            '--select-color': currentVariant.color,

            '--select-border': error
                ? '#ff004d'
                : currentVariant.border,

            '--select-padding': currentSize.padding,

            '--select-font-size': currentSize.fontSize,

            '--select-font-family': theme.typography.fonts.body,

            '--select-radius': theme.radius.none,

            '--select-shadow': theme.shadows.sm,

            '--mosaic-surface': theme.surfaces.pixelTexture,

            '--mosaic-surface-size': theme.surfaces.pixelTextureSize,

            '--select-focus-shadow': theme.shadows.focus,

            '--select-option-bg': theme.colors.black,

            '--select-option-color': theme.colors.white,
            
            width: fullWidth
                ? '100%'
                : 'auto',

        } as React.CSSProperties;

        return (
            <select
                {...props}
                style={selectStyle}
                className={`select ${className}`}
            >
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        );
    };