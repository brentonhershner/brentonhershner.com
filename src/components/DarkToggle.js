import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const DarkToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <Box
      style={{
        position: 'absolute',
        zIndex: 1000,
        right: '0'
      }}
      m={1}
    >
      <IconButton
        aria-label='dark mode toggle'
        size='small'
        position='relative'
        onClick={toggleDarkMode}
      >
        {darkMode ? <Brightness7Icon /> : <Brightness3Icon />}
      </IconButton>
    </Box>
  );
}

export default DarkToggle;