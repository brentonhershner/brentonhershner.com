import React from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Twitter() {
  return (
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
  )
}