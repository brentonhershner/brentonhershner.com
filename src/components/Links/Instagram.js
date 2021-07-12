import React from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Instagram() {
  return (
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
  )
}