import React from 'react';
import { Box, Card, CardActionArea, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography'
// import maintenanceImg from './Maintenance.png';

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
  textDescription: {

  },
});

export default function IRenta() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.textDescription}>
        <Typography variant="h2" >iRenta</Typography>
        <Typography variant="subtitle1" >An app for property managers to easily call tenants, get driving directions to properties, and manage maintenance requests. Completed in two days but more features are coming</Typography>
      </Box>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image='./Maintenance.png'
          />
        </CardActionArea>
      </Card>
    </Box>
  );
};
