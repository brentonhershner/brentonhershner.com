import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "gatsby";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textPrimary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://brentonhershner.com/">
        brentonhershner.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
