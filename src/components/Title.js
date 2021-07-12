import React from 'react';
import { Box, Typography, } from '@material-ui/core';
import ProfilePhoto from './ProfilePhoto';
import Resume from './Resume';
import LinkedIn from './LinkedIn';
import Github from './Github';
import Twitter from './Twitter';
import Instagram from './Instagram';

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

export default function Title() {
  return (
    <Box
      className='wordsAndPhoto'
      display='flex'
      flexDirection='row'
      flexWrap='wrap-reverse'
      position='relative'
      alignItems='center'
      alignContent='center'
      justifyContent='center'
      sx={{
        height: '100%', width: '100%',
        '& > *': {
          margin: '10px',
        }
      }}
    >
      <Box
        className='wordsAndLinks'
        position='relative'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      // style={{ height: '100vh', width: '100vw', margin: 0 }}
      >
        <Typography variant='h2' component='h1' align='center' >
          Brenton Hershner
        </Typography>
        <Typography variant='subtitle1' align='center' >
          Software Engineer | BS in Mechancial Engineering | MBA
        </Typography>
        <Box
          width='50%'
          display='flex'
          maxWidth='600px'
          flexDirection='row'
          justifyContent='space-around'
          alignItems='center'
        >
          {/* <Email /> */}
          <Resume />
          <LinkedIn />
          <Github />
          <Twitter />
          <Instagram />
        </Box>
      </Box>
      <ProfilePhoto />
    </Box>
  )
}