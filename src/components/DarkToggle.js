import React from "react";
import { Box, IconButton } from "@mui/material";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const DarkToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <Box
      style={{
        position: "absolute",
        zIndex: 1000,
        right: "0",
      }}
      m={1}
    >
      <IconButton
        aria-label="dark mode toggle"
        size="small"
        position="relative"
        onClick={toggleDarkMode}
      >
        {darkMode ? <Brightness7Icon /> : <Brightness3Icon />}
      </IconButton>
    </Box>
  );
};

export default DarkToggle;
