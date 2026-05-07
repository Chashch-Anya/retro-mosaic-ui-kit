import React from 'react';
import { mosaicTheme } from './theme';
import type { MosaicTheme } from './theme';
import { ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
    children: React.ReactNode;

    theme?: Partial<MosaicTheme>;
}

const mergeTheme = (
    base: MosaicTheme,
    custom?: Partial<MosaicTheme>
): MosaicTheme => {
    if (!custom) return base;

    return {
        ...base,
        ...custom,

        colors: {
            ...base.colors,
            ...custom.colors,
        },

        spacing: {
            ...base.spacing,
            ...custom.spacing,
        },

        radius: {
            ...base.radius,
            ...custom.radius,
        },

        typography: {
            ...base.typography,
            ...custom.typography,
        },

        shadows: {
            ...base.shadows,
            ...custom.shadows,
        },

        surfaces: {
            ...base.surfaces,
            ...custom.surfaces,
        },
    };
};

export const ThemeProvider = ({
    children,
    theme,
}: ThemeProviderProps) => {
    const mergedTheme =
        mergeTheme(mosaicTheme, theme);

    return (
        <ThemeContext.Provider
            value={mergedTheme}
        >
            {children}
        </ThemeContext.Provider>
    );
};