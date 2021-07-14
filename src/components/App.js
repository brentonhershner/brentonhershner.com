import React, { useState, } from 'react';
import {
  Box,
  // Container,
  CssBaseline,
  IconButton,
  responsiveFontSizes,
} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Title from '../components/Title';
// import { StyledEngineProvider } from '@material-ui/core/styles';
import { previousOrPreferredTheme } from '../lib/helpers';
import Copyright from './Copyright';
// import Projects from './Projects';

const darkTheme = createMuiTheme({ palette: { type: 'dark' }, });
const lightTheme = createMuiTheme({ palette: { type: 'light' }, });

export default function App() {
  const [darkMode, setDarkMode] = useState(previousOrPreferredTheme);

  let theme = darkMode ? darkTheme : lightTheme;
  theme = responsiveFontSizes(theme);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    localStorage.setItem('darkMode', newDarkMode);
    setDarkMode(newDarkMode);
  }

  return (
    // <StyledEngineProvider injectFirst> {/* this needs added for MUI v5 */}
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        // disableGutters
        className='App'
        position='absolute'
        style={{
          height: '100vh',
          width: '100vw',
          minWidth: '310px',
          overflowX: 'hidden',
        }}
      >
        <Box
          style={{
            position: 'absolute',
            zIndex: 1000,
            right: '0'
          }}
          m={1}
        >
          <IconButton
            aria-label='dark mode toggle'
            size='small'
            position='relative'
            onClick={toggleDarkMode}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness3Icon />}
          </IconButton>
        </Box>
        <Title />
        {/* <Projects /> */}
        <Copyright />
      </Box>
    </ThemeProvider>
    // </StyledEngineProvider> {/* this needs added for MUI v5 */}
  );
};
