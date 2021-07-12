import React from 'react';
import {
  Box,
  Typography,
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';
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
  // const classes = useStyles();

  return (
    <Box>
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
          component='h1'
          align='center'
        >Brenton Hershner</Typography>
        <Typography
          variant='subtitle1'
          align='center'
        >Software Engineer | BS in Mechancial Engineering | MBA</Typography>
        <Box
          width='50%'
          display='flex'
          maxWidth='600px'
          flexDirection='row'
          justifyContent='space-around'
          alignItems='center'
        >
          {/* <EmailIcon /> */}
          <Resume />
          <LinkedIn />
          <Github />
          <Twitter />
          <Instagram />

        </Box>
        <ProfilePhoto />
      </Box>
    </Box>
  )
}