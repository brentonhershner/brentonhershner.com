import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  CssBaseline,
  IconButton,
  responsiveFontSizes,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Title from '../components/Title';
// import selfie from '../images/BrentonPier66.jpg';
import ProfilePhoto from '../components/ProfilePhoto';

const stringToBool = (str) => {
  if (str === true || str === 'true') { return true; }
  if (str === false || str === 'false') { return false; }
  return null;
}

const isBrowser = typeof window !== "undefined"

export default function Home() {
  const darkModeQuery = isBrowser ? 
    window.matchMedia('(prefers-color-scheme: dark)').matches : null;
  let darkModeStored = isBrowser ? localStorage.getItem('darkMode') : null;
  const darkModeContext = stringToBool(darkModeStored) ?? darkModeQuery;

  const [darkMode, setDarkMode] = useState(darkModeContext);

  let darkTheme = darkMode ?? darkModeContext;
  let theme = createTheme({ palette: { type: darkTheme ? 'dark' : 'light' }, })
  theme = responsiveFontSizes(theme);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    localStorage.setItem('darkMode', newDarkMode);
    setDarkMode(newDarkMode);
  }

  return (
    <div className='application'>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content="Portfolio page for Brenton Hershner. A Software Engineer with a BS in Mechanical Enginering and MBA." />
        <meta name='keywords' content='Software, Engineer, Developer, JavaScript, Full-stack' />
        <meta name='author' content='Brenton Hershner' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='revised' content='BrentonHershner, 7/11/2021' />
        <title>Brenton Hershner</title>
      </Helmet>

      <ThemeProvider theme={theme}>
        <CssBaseline />
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
              onClick={() => { toggleDarkMode(!darkMode) }}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness3Icon />}
            </IconButton>
          </Box>
          <Title />
          {/* <Card>
            <CardMedia
              image={selfie}
              title="Brenton Selfie"
            />
          </Card> */}
          {/* <ProfilePhoto /> */}
        </Container>
      </ThemeProvider>
    </div >
  )
}
