import React from "react";
import { Card, CardContent } from "../../ui/card";

const IRenta: React.FC = () => {
  return (
    <div className="h-screen">
      <div className="mb-4">
        <h2 className="text-3xl font-bold">iRenta</h2>
        <p className="text-muted-foreground">
          An app for property managers to easily call tenants, get driving
          directions to properties, and manage maintenance requests. Completed
          in two days but more features are coming
        </p>
      </div>
      <Card className="max-w-md mx-auto">
        <CardContent className="p-0">
          <img
            src="./Maintenance.png"
            alt="Maintenance"
            className="w-full h-auto rounded"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default IRenta; 