import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function LinkedIn() {
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
  );
}
