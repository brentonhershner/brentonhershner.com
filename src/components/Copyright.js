import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby-theme-material-ui';

const Copyright = () => {
  return (
    <Typography variant="body2" color="secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://brentonhershner.com/">
        brentonhershner.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;