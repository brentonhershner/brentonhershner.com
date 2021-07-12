import React, {
  useContext,
  useState,
} from 'react';
import {
  Box,
  Container,
  CssBaseline,
  IconButton,
  responsiveFontSizes,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {
  createTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Title from '../components/Title';
import selfie from '../images/BrentonPier66.jpg';
import { StyledEngineProvider } from '@material-ui/core/styles';
import { previousOrPreferredTheme } from '../lib/helpers';

const darkTheme = createTheme({ palette: { mode: 'dark' }, });
const lightTheme = createTheme({ palette: { mode: 'light' }, });

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
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        disableGutters
        className='App'
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
            onClick={() => { toggleDarkMode(!darkMode) }}
          >
            {darkMode ? <Brightness7Icon /> : <Brightness3Icon />}
          </IconButton>
        </Box>
        <Title />
        <Card>
          <CardMedia
            image={selfie}
            title="Brenton Selfie"
          />
        </Card>
      </Container>
    </ThemeProvider>
  </StyledEngineProvider>
  );
};
