import React, { useEffect, useState } from "react";
import "../styles/WordleHelper.css";
import { words } from "../lib/words.js";
import { Helmet } from "react-helmet";
import unique from "just-unique";

const isValidInput = (input) => !!input.match(/^[a-zA-Z]*$/);

const WordleHelper = () => {
  const WORD_DISPLAY_LIMIT = 500;

  const [possible, setPossible] = useState(words);
  const [excluded, setExcluded] = useState("");
  const [misplaced, setMisplaced] = useState("");
  const [located, setLocated] = useState(Array(5).fill(""));

  const isFiltered = excluded || misplaced || !located.every((l) => !l);

  const changeLetter = (e, position) => {
    const newLetter = e.target.value.slice(-1);
    if (!isValidInput(newLetter)) {
      return;
    }
    const newLocated = located.slice();
    newLocated.splice(position, 1, newLetter.toUpperCase());
    setLocated(newLocated);

    if (newLetter && e.target.nextSibling) {
      e.target.nextSibling.focus();
    } else if (e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  };

  const updateExcluded = (e) => {
    if (!isValidInput(e.target.value)) {
      return;
    }
    setExcluded(unique(e.target.value.toUpperCase().split("")).join(""));
  };

  const updateMisplaced = (e) => {
    if (!isValidInput(e.target.value)) {
      return;
    }
    setMisplaced(e.target.value.toUpperCase());
  };

  const filterLocated = (word) => {
    return located.every((letter, index) => {
      return letter === "" || letter === word[index];
    });
  };

  const filterExcluded = (word) => {
    return !excluded
      .split("")
      .some((excludedLetter) => word.includes(excludedLetter));
  };

  const filterMisplaced = (candidateWord) => {
    return (
      true !==
      misplaced.split("").reduce((word, letter) => {
        if (word === true) {
          return true;
        }
        const index = word.indexOf(letter);
        if (index === -1) {
          return true;
        }
        return word.slice(0, index).concat(word.slice(index + 1));
      }, candidateWord.split(""))
    );
  };

  useEffect(() => {
    if (!excluded) {
      setPossible(words);
    }
    const updatedList = words
      .filter(filterExcluded)
      .filter(filterMisplaced)
      .filter(filterLocated);

    setPossible(updatedList);
  }, [excluded, located, misplaced]);

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="revised" content="BrentonHershner, 7/11/2021" />
        <title>WordleHelper</title>
      </Helmet>
      <header className="App-header">
        <h1>Wordle Helper</h1>

        <h2 className="label">Correct Letters</h2>
        <form className="inputs">
          {located.map((value, position) => {
            return (
              <input
                key={position}
                position={position}
                value={value}
                className="letter"
                type={"text"}
                onChange={(e) => changeLetter(e, position)}
              />
            );
          })}

          <h2 className="label">Misplaced but Correct</h2>
          <input
            className="misplaced"
            name="misplaced"
            type={"text"}
            value={misplaced}
            onChange={updateMisplaced}
          />

          <h2 className="label">Rejects</h2>
          <input
            className="rejects"
            name="rejects"
            type={"text"}
            value={excluded}
            onChange={updateExcluded}
          />
        </form>
      </header>
      <div className="results">
        {isFiltered ? (
          <>
            <h2 className="label">{possible.length} possible words</h2>
            <ul className="list">
              {possible.slice(0, WORD_DISPLAY_LIMIT).map((word) => (
                <li key={word}>{word}</li>
              ))}
            </ul>
            <>
              {possible.length > WORD_DISPLAY_LIMIT && (
                <p key="last">
                  Only displaying the first {WORD_DISPLAY_LIMIT} words. Filter
                  some more.
                </p>
              )}
            </>
          </>
        ) : (
          <p>Try to filter down the list of words using the fields above.</p>
        )}
      </div>
    </div>
  );
};

export default WordleHelper;
