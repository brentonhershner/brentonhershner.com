import React from 'react';
import {
  Box,
  IconButton,
  Tooltip,
  Typography,
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import pdf from '../../static/BrentonHershnerResume.pdf';

export default function Title() {
  return (
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
      >Software Engineer | BS in Mechancial Engineering | MBA</Typography>
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

        <Tooltip title="Resume">
          <IconButton
            target="_blank"
            rel="noopener"
            href={pdf}
            aria-label="Resume of Brenton Hershner"
          >
            <InsertDriveFileIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="LinkedIn">
          <IconButton
            target="_blank"
            rel="noopener"
            href="https://www.linkedin.com/in/brenton-hershner/"
            aria-label="Link to LinkedIn of Brenton Hershner"
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="GitHub">
          <IconButton
            target="_blank"
            rel="noopener"
            href="https://github.com/brentonhershner"
            aria-label="Link to GitHub of Brenton Hershner"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Twitter">
          <IconButton
            target="_blank"
            rel="noopener"
            href="https://twitter.com/BrentHershner"
            aria-label="Link to twitter of Brenton Hershner"
          >
            <TwitterIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Instagram">
          <IconButton
            target="_blank"
            rel="noopener"
            href="https://www.instagram.com/brenthersh/"
            aria-label="Link to instagram of Brenton Hershner"
          >
            <InstagramIcon />
          </IconButton>
        </Tooltip>

      </Box>
    </Box>
  )
}