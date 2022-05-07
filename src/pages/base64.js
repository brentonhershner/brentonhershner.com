import React from "react";
import { Helmet } from "react-helmet";
import App from "../components/App";
import Base64 from "../components/Base64";

const base64 = () => {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Portfolio page for Brenton Hershner. A Software Engineer with a BS in Mechanical Enginering and MBA."
        />
        <meta name="keywords" content="base64" />
        <meta name="author" content="Brenton Hershner" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="revised" content="BrentonHershner, 7/11/2021" />
        <title>Base64 Converter</title>
      </Helmet>
      <Base64 />
    </div>
  );
};

export default base64;

/*
@material-ui/core@latest @material-ui/icons@latest @material-ui/styles@latest
@material-ui/core@next @material-ui/icons@next @material-ui/styles@next
*/
