import { createContext } from 'react';
import { mosaicTheme } from './theme';
import type { MosaicTheme } from './theme';
export const ThemeContext =
    createContext<MosaicTheme>(mosaicTheme);