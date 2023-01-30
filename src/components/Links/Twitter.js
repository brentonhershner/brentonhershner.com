import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";

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
  );
}
