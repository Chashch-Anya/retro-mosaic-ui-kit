import React from "react";
import { useTheme } from "../../styles/useTheme";
import './Checkbox.css';

export interface CheckboxProps {
    variant?: 'primary' | 'accent';
    checked?: boolean;
    onChange?: (
        checked: boolean
    ) => void;

    disabled?: boolean;
    label?: string;
}

export const Checkbox: React.FC<
    CheckboxProps
> = ({
    variant = 'primary',
    checked = false,
    onChange,
    disabled = false,
    label,
}) => {
        const theme = useTheme();
        const checkboxStyle = {
            '--checkbox-bg':
                checked
                    ? variant === 'primary'
                        ? theme.colors.primary[500]
                        : theme.colors.accent[500]
                    : theme.colors.gray[100],

            '--checkbox-border': theme.colors.black,

            '--checkbox-color':
                variant === 'accent'
                    ? theme.colors.black
                    : theme.colors.white,

            '--checkbox-shadow': theme.shadows.sm,
            
            '--checkbox-radius': theme.radius.none,

            '--checkbox-label-font': theme.typography.fonts.body,

            '--mosaic-surface': theme.surfaces.pixelTexture,

            '--mosaic-surface-size': theme.surfaces.pixelTextureSize,

        } as React.CSSProperties;

        return (
            <label
                className="checkbox"
                style={checkboxStyle}
            >
                <input
                    type="checkbox"
                    checked={checked}
                    disabled={disabled}
                    onChange={(e) =>
                        onChange?.(
                            e.target.checked
                        )
                    }
                    className="checkbox__input"
                />
                <span className="checkbox__box">
                    <span className="checkbox__indicator" />
                </span>

                {label && (
                    <span className="checkbox__label">
                        {label}
                    </span>
                )}
            </label>
        );
    };