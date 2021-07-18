import React, { useState, } from 'react';
import { Box, CssBaseline, responsiveFontSizes, } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Title from '../components/Title';
// import { StyledEngineProvider } from '@material-ui/core/styles';
import { previousOrPreferredTheme } from '../lib/helpers';
import DarkToggle from './DarkToggle';
import Copyright from './Copyright';
import AboutMe from './AboutMe';
// import Projects from './Projects';

const darkTheme = createTheme({ palette: { type: 'dark' }, });
const lightTheme = createTheme({ palette: { type: 'light' }, });

const App = () => {
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
        display='flex'
        flexDirection='column'
        // justifyContent='space-between'
        style={{
          height: '100vh',
          width: '100vw',
          minWidth: '310px',
          overflowX: 'hidden',
        }}
      >
        <DarkToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Title />
        {/* <AboutMe /> */}
        {/* <Projects /> */}
        <Copyright />
      </Box>
    </ThemeProvider>
    // </StyledEngineProvider> {/* this needs added for MUI v5 */}
  );
};

export default App;
