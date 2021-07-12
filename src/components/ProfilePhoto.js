import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


export default function ProfilePhoto() {
  return (
    <Card
      sx={{ maxWidth: 200, borderRadius: '50%' }}
      >
      <CardMedia
      sx={{ height: 0 }}
        component="img"
        image="../BrentonPier66smaller.jpg"
        title="Brenton Hershner Profile Photo"
        alt="Brenton Hershner Profile Photo"
      />
    </Card>
  );
}