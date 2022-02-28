import React from "react";
import "../styles/WordleHelper.css";

import { Helmet } from "react-helmet";

const WordleHelper = () => {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Wordle Helper. A simple app made in a few hours to help with wordle."
        />
        <meta
          name="keywords"
          content="Wordle, Helper, Wordle Helper, Wordle Help, Wordle Cheat, Wordle Tips"
        />
        <meta name="author" content="Brenton Hershner" />
        <meta name="email" content="brenthershner@gmail.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="revised" content="BrentonHershner, 2/27/2022" />
        <meta
          http-equiv="Refresh"
          content="0; url='https://www.wordlehelper.dev'"
        />
        <title>WordleHelper</title>
      </Helmet>
    </div>
  );
};

export default WordleHelper;
