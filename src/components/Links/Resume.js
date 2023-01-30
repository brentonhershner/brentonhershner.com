import React from "react";
import { Tooltip, IconButton } from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
// import pdf from '../../../static/BrentonHershnerResume.pdf';

const Resume = () => {
  return (
    <Tooltip title="Resume">
      <IconButton
        target="_blank"
        rel="noopener"
        // href={pdf}
        href={`../../BrentonHershnerResume.pdf`}
        aria-label="Resume of Brenton Hershner"
      >
        <InsertDriveFileIcon />
      </IconButton>
    </Tooltip>
  );
};

export default Resume;
