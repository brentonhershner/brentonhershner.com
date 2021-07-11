import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  IconButton,
  useMediaQuery,
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { createMuiTheme } from '@material-ui/core/styles';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Title from '../components/Title';
import selfie from '../images/BrentonPier66.jpg';

export default function Home() {

  const darkMediaQuery = useMediaQuery('(prefers-color-scheme: dark)');
  // const darkModeContext = localStorage.getItem('darkMode') ?? darkMediaQuery;

  const [darkMode, setDarkMode] = React.useState(darkMediaQuery);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
        },
      }),
    [darkMode],
  );

  theme.typography.h1 = {
    fontSize: '3rem',
    '@media (min-width:600px)': {
      fontSize: '4rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '6rem',
    },
  };

  const toggleDarkMode = () => {
    const currentDarkMode = darkMode;
    setDarkMode(!currentDarkMode);
    // localStorage.setItem('darkMode', currentDarkMode);
  }

  return (

    <div className='application'>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content="Hire me!!! I'm a Software Engineer with a background in Mechanical Enginering and Product Management." />
        <meta name='keywords' content='Software, Engineer, Developer, JavaScript, Full-stack, React' />
        <meta name='author' content='Brenton Hershner' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='revised' content='BrentonHershner, 6/16/2021' />
        <title>Brenton Hershner</title>
      </Helmet>

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
    </div >
  )
}
