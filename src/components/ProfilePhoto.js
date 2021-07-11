import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    width: 200,
    borderRadius: '50%',
  },
  media: {
    height: 200,
  },
});

export default function ProfilePhoto() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../BrentonPier66.jpg"
          title="Brenton Hershner Profile Image"
        />
      </CardActionArea>
    </Card>
  );
}