import React from 'react';
import { useTheme } from '../../styles/useTheme';
import './Modal.css';

export interface ModalProps {
    children: React.ReactNode;

    open: boolean;

    onClose: () => void;

    title?: string;
}

export const Modal: React.FC<ModalProps> = ({
    children,
    open,
    onClose,
    title,
}) => {
    const theme = useTheme();

    if (!open) return null;

    const modalStyle = {
        '--modal-bg': theme.surfaces.overlay,

        '--modal-color': theme.colors.white,

        '--modal-border': theme.colors.primary[500],

        '--modal-shadow': theme.shadows.lg,

        '--modal-font-family': theme.typography.fonts.body,

        '--modal-radius': theme.radius.none,

        '--modal-padding': theme.spacing.lg,

        '--mosaic-surface': theme.surfaces.pixelTexture,

        '--mosaic-surface-size': theme.surfaces.pixelTextureSize,

        '--modal-heading-font': theme.typography.fonts.heading,

        '--modal-surface-inset': theme.shadows.surfaceInset,
    } as React.CSSProperties;

    return (
        <div
            className="modal-overlay"
            onClick={onClose}
        >
            <div
                className="modal"
                style={modalStyle}
                onClick={(e) =>
                    e.stopPropagation()
                }
            >
                {title && (
                    <div className="modal__header">
                        {title}
                    </div>
                )}

                <div className="modal__content">
                    {children}
                </div>
            </div>
        </div>
    );
};