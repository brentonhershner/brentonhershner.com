import React, {
  useContext,
  // useState,
} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Box, Container, IconButton, } from '@material-ui/core';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Title from './Title';
// import ProfilePhoto from './ProfilePhoto';
import DarkModeTheme from '../themes/DarkModeTheme';
// import { previousOrPreferredTheme } from '../lib/helpers';

export default function App() {
  const darkContext = useContext(DarkModeTheme);
  const { theme, toggleDarkMode } = darkContext;

  const isDark = Boolean(theme === 'dark');
  // const [darkMode, setDarkMode] = useState(previousOrPreferredTheme);

  // let theme = createTheme({ palette: { type: darkTheme ? 'dark' : 'light' }, })

  return (
    <ThemeProvider theme={theme}>
      {/* <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> */}
      <Container
        disableGutters
        className='LandingPage'
        position='absolute'
        style={{ margin: '0' }}
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
            {isDark ? <Brightness7Icon /> : <Brightness3Icon />}
          </IconButton>
        </Box>
        <Title />
        {/* <ProfilePhoto /> */}
      </Container>
      {/* </ThemeProvider> */}

    </ThemeProvider>
  )
}
