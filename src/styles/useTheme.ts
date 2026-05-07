import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  
  return theme;
};