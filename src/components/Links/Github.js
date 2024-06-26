import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Github() {
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
  );
}
