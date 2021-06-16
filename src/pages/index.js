import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
  IconButton,
  useMediaQuery,
} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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

          <Box
            position='relative'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            style={{ height: '100vh', width: '100vw', margin: 0 }}
          >
            <Typography
              variant='h1'
              component='h2'
              align='center'
            >
              Brenton Hershner
            </Typography>
            <Typography
              variant='subtitle1'
              align='center'
            >
              Hire me!!! Software Engineer | ex-Mechanical Engineer.
            </Typography>
            <Box
              width='50%'
              display='flex'

              flexDirection='row'
              justifyContent='space-around'
              alignItems='center'
            >
              {/* <IconButton >
                <EmailIcon />
              </IconButton> */}

              <Box>
                <IconButton
                  target="_blank"
                  rel="noopener"
                  href="https://www.linkedin.com/in/brenton-hershner/"
                  aria-label="Link to LinkedIn of Brenton Hershner"
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>

              <Box>
                <IconButton
                  target="_blank"
                  rel="noopener"
                  href="https://github.com/brentonhershner"
                  aria-label="Link to GitHub of Brenton Hershner"
                >
                  <GitHubIcon />
                </IconButton>
              </Box>

              <Box>
                <IconButton
                  target="_blank"
                  rel="noopener"
                  href="https://twitter.com/BrentHershner"
                  aria-label="Link to twitter of Brenton Hershner"
                >
                  <TwitterIcon />
                </IconButton>
              </Box>

              <Box>
                <IconButton
                  target="_blank"
                  rel="noopener"
                  href="https://www.instagram.com/brenthersh/"
                  aria-label="Link to instagram of Brenton Hershner"
                >
                  <InstagramIcon />
                </IconButton>
              </Box>


            </Box>



          </Box>
        </Container>
      </ThemeProvider>
    </div >
  )
}
