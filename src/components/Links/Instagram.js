import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

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
  );
}
