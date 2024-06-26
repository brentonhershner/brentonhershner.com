import React from "react";
import { Box, Typography } from "@mui/material";
import ProfilePhoto from "./ProfilePhoto";
import Links from "./Links/Links";

const Title = () => {
  return (
    <Box
      className="wordsAndPhoto"
      display="flex"
      flex="1 0 0"
      flexDirection="row"
      flexWrap="wrap"
      position="relative"
      alignItems="center"
      alignContent="center"
      justifyContent="center"
      sx={{
        // height: '100%',
        width: "100%",
        "& > *": {
          margin: "10px",
        },
      }}
    >
      <ProfilePhoto />
      <Box
        className="wordsAndLinks"
        position="relative"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h2" component="h1" align="center">
          Brenton Hershner
        </Typography>
        <Typography variant="subtitle1" align="center">
          Software Engineer | BS in Mechancial Engineering | MBA
        </Typography>
        <Box
          width="50%"
          display="flex"
          maxWidth="600px"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Links />
        </Box>
      </Box>
    </Box>
  );
};

export default Title;
