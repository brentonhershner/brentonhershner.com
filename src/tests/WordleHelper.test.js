const misplaced = "abca";

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

const words = ["abcd", "abcda", "efgh", "cbaaagh"];

// it("should filter misplacd letters", () => {
//   expect(words.filter(filterMisplaced)).toEqual(["abcda", "cbaaagh"]);
// });
