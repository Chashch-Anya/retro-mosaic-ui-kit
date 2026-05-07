import React from "react";
import { useTheme } from "../../styles/useTheme";
import './Button.css';

export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'accent',
    size?: 'small' | 'medium' | 'large',
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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

    const buttonStyle: React.CSSProperties = {
        padding: size === 'small' ? theme.spacing[1] :
            size === 'medium' ? theme.spacing[2] :
                size === 'large' ? theme.spacing[3] : '',
        backgroundColor: variant === 'primary' ? theme.colors.primary[500] :
            variant === 'secondary' ? theme.colors.gray[500] : theme.colors.accent[500],
        color: variant === 'accent' ? theme.colors.black : theme.colors.white,
        border: 'none',
        borderRadius: theme.borderRadius.none,
        fontSize: '16px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
    };

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
}