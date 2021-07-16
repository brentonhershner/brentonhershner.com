import React from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
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
  )
}

export default Resume;