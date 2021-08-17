import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const ProfilePhoto = () => {
  return (
    <Card
      style={{ maxWidth: 200, borderRadius: '50%' }}
      >
      <CardMedia
      sx={{ height: 0 }}
        component="img"
        src="../../BrentonPhoto.jpg"
        title="Brenton Hershner Profile Photo"
        alt="Brenton Hershner Profile Photo"
      />
    </Card>
  );
}

export default ProfilePhoto;