import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    borderRadius: '50%',
  },
  media: {
    height: 200,
  },
}));

export default function ProfilePhoto() {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      style={{ borderRadius: '50%' }}
    >
      <CardMedia
        className={classes.media}
        component="img"
        image="../BrentonPier66smaller.jpg"
        title="Brenton Hershner Profile Photo"
        alt="Brenton Hershner Profile Photo"
      />
    </Card>
  );
}