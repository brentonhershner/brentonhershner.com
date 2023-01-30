import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const ProfilePhoto = () => {
  return (
    <Card style={{ maxWidth: 200, borderRadius: "50%" }}>
      <CardMedia
        sx={{ height: 0 }}
        component="img"
        src="../../BrentonPhoto.jpg"
        title="Brenton Hershner Profile Photo"
        alt="Brenton Hershner Profile Photo"
      />
    </Card>
  );
};

export default ProfilePhoto;
