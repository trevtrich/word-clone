import React from "react";
import Guess from '../Guess';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

function GuessResults({guesses, answer}) {
  const grid = Array.from(Array(NUM_OF_GUESSES_ALLOWED), () => "");
  guesses.forEach((guess, index) => {
    grid[index] = guess;
  });


  return <div className="guess-results">
    {grid.map((guess, index) => <Guess guess={guess} answer={answer} key={index} />)}
  </div>;
}

export default GuessResults;
