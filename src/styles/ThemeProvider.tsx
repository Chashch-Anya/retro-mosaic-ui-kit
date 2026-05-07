import React, { createContext } from 'react';
import { mosaicTheme } from './theme';

const ThemeContext = createContext(mosaicTheme);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <ThemeContext.Provider value={mosaicTheme}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext };