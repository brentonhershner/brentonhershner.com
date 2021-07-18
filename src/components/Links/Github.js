import React from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Github () {
  return (
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
  )
}
