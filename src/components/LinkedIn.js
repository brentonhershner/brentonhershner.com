import React from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function LInkedIn() {
  return (
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
  )
}