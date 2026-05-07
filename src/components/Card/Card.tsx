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
}) => {
        const theme = useTheme();

        const cardStyle: React.CSSProperties = {
            backgroundColor: variant === 'primary' ? theme.colors.primary[500] :
                variant === 'secondary' ? theme.colors.gray[300] :
                    theme.colors.accent[500],
            color: variant === 'accent' ? theme.colors.black : theme.colors.white,
            borderColor: variant === 'primary' ? theme.colors.black :
                variant === 'secondary' ? theme.colors.gray[700] :
                    theme.colors.accent[500],
            padding: padding === 'none' ? '0' :
                padding === 'small' ? theme.spacing[1] :
                    padding === 'medium' ? theme.spacing[2] :
                        padding === 'large' ? theme.spacing[3] : '',
            boxShadow: theme.shadow,
        };

        return (
            <div
                style={cardStyle}
                className={`card card--${variant}`}
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

    const headerStyle: React.CSSProperties = {
        borderBottomColor: theme.colors.black,
    };

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

    const footerStyle: React.CSSProperties = {
        borderTopColor: theme.colors.black,
    };

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