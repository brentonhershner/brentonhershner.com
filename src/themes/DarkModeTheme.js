import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import themes from './themes';
import { previousOrPreferredTheme } from '../lib/helpers';

export const ThemeContext = React.createContext();

export default function DarkModeTheme(props) {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkMode = () => {
    localStorage.setItem('darkTheme', !darkTheme);
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  const { children } = props;
  const [themeName, setThemeName] = useState(previousOrPreferredTheme);
  const isDark = themeName === 'dark';

  console.log(themes);

  return (
    <ThemeProvider
      theme={themes[themeName]}
      toggleDarkMode={toggleDarkMode}
    >
      {children}
    </ThemeProvider>
  )
};
