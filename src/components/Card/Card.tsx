import React from "react";
import { useTheme } from "../../styles/useTheme";
import './Card.css';

export interface CardProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'accent';
    padding?: 'none' | 'small' | 'medium' | 'large';
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    className?: string;
}

export interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

export interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}

export interface CardImageProps {
    src: string;
    alt: string;
    className?: string;
}

export const Card: React.FC<CardProps> & {
    Header: React.FC<CardHeaderProps>;
    Content: React.FC<CardContentProps>;
    Footer: React.FC<CardFooterProps>;
    Image: React.FC<CardImageProps>;
} = ({
    children,
    variant = 'primary',
    padding = 'medium',
    onClick,
    className = '',
}) => {
        const theme = useTheme();

        const paddingMap = {
            none: '0',
            small: theme.spacing.sm,
            medium: theme.spacing.md,
            large: theme.spacing.lg,
        };

        const currentPadding = paddingMap[padding];

        const variantMap = {
            primary: {
                bg: theme.colors.primary[500],
                color: theme.colors.white,
                border: theme.colors.black,
            },

            secondary: {
                bg: theme.colors.gray[300],
                color: theme.colors.white,
                border:  theme.colors.gray[700],
            },

            accent: {
                bg: theme.colors.accent[500],
                color: theme.colors.black,
                border: theme.colors.accent[500],
            }
        }

        const currentVariant = variantMap[variant];

        const cardStyle = {
            '--card-bg': currentVariant.bg,

            '--card-color': currentVariant.color,

            '--card-border': currentVariant.border,
            
            '--card-padding': currentPadding,

            '--card-shadow': theme.shadows.md,

            '--card-font-family': theme.typography.fonts.body,

            '--card-radius': theme.radius.none,

            '--mosaic-surface': theme.surfaces.pixelTexture,

            '--mosaic-surface-size': theme.surfaces.pixelTextureSize,

            '--card-surface-inset': theme.shadows.surfaceInset,

            '--card-heading-font': theme.typography.fonts.heading,

            '--card-body-font': theme.typography.fonts.body,

        } as React.CSSProperties;

        return (
            <div
                style={cardStyle}
                className={`card card--${variant} ${className}`}
                onClick={onClick}
                role={onClick ? 'button' : undefined}
                tabIndex={onClick ? 0 : undefined}
            >
                {children}
            </div>
        );
    }

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
    const theme = useTheme();

    const headerStyle = {
        '--card-divider':
            theme.colors.black,
    } as React.CSSProperties;

    return (
        <div
            style={headerStyle}
            className={`card__header ${className}`}
        >
            {children}
        </div>
    );
};

const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
    return (
        <div className={`card__content ${className}`}>
            {children}
        </div>
    );
};

const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => {
    const theme = useTheme();

    const footerStyle = {
        '--card-divider':
            theme.colors.black,
    } as React.CSSProperties;

    return (
        <div
            style={footerStyle}
            className={`card__footer ${className}`}
        >
            {children}
        </div>
    );
};

const CardImage: React.FC<CardImageProps> = ({ src, alt, className = '' }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`card__image ${className}`}
        />
    );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Image = CardImage;