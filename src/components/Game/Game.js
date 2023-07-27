import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  function addGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  return <>
    <GuessResults guesses={guesses} answer={answer} />
    {guesses.length < NUM_OF_GUESSES_ALLOWED && <GuessInput addGuess={addGuess} />}
  </>
}

export default Game;
