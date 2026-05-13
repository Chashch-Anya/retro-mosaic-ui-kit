import React from 'react';
import { useTheme } from '../../styles/useTheme';
import './Panel.css';

export interface PanelProps {
    children: React.ReactNode;

    title?: string;

    className?: string;
}

export const Panel: React.FC<PanelProps> = ({
    children,
    title,
    className = '',
}) => {
    const theme = useTheme();

    const panelStyle = {
        '--panel-bg': theme.surfaces.elevated,

        '--panel-border': theme.colors.primary[600],

        '--panel-shadow': theme.shadows.md,

        '--panel-radius': theme.radius.none,

        '--panel-padding': theme.spacing.lg,

        '--panel-title-color': theme.colors.primary[100],

        '--panel-font-family': theme.typography.fonts.body,

        '--panel-heading-font': theme.typography.fonts.heading,

        '--mosaic-surface': theme.surfaces.pixelTexture,

        '--mosaic-surface-size': theme.surfaces.pixelTextureSize,

        '--panel-surface-inset': theme.shadows.surfaceInset,
    } as React.CSSProperties;

    return (
        <section
            style={panelStyle}
            className={`
                panel
                ${className}
            `}
        >
            {title && (
                <div className="panel__header">
                    <h3 className="panel__title">
                        {title}
                    </h3>
                </div>
            )}

            <div className="panel__content">
                {children}
            </div>
        </section>
    );
};