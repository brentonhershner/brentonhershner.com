import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
// import profilePhoto from '../../assets/BrentonPier66smaller.jpg';

const ProfilePhoto = () => {
  return (
    <Card
      style={{ maxWidth: 200, borderRadius: '50%' }}
      >
      <CardMedia
      sx={{ height: 0 }}
        component="img"
        // image="../../assets/BrentonPier66smaller.jpg"
        src="../../BrentonPier66smaller.jpg"
        // src={profilePhoto}
        title="Brenton Hershner Profile Photo"
        alt="Brenton Hershner Profile Photo"
      />
    </Card>
  );
}

export default ProfilePhoto;