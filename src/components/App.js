import React, { useState, } from 'react';
import { Box, CssBaseline, responsiveFontSizes, } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Title from '../components/Title';
import { previousOrPreferredTheme } from '../lib/helpers';
import DarkToggle from './DarkToggle';
import Copyright from './Copyright';
// import AboutMe from './AboutMe';
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        className='App'
        position='absolute'
        display='flex'
        flexDirection='column'
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
  );
};

export default App;
