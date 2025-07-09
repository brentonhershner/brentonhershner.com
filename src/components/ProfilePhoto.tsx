import { Card, CardContent } from "./ui/card";

const ProfilePhoto = () => {
  return (
    <Card className="max-w-[200px] rounded-full overflow-hidden">
      <CardContent className="p-0">
        <img
          src="../../BrentonPhoto.jpg"
          title="Brenton Hershner Profile Photo"
          alt="Brenton Hershner Profile Photo"
          className="w-full h-auto"
        />
      </CardContent>
    </Card>
  );
};

export default ProfilePhoto;
