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
  const [gotItRight, setGotItRight] = React.useState(false);

  function addGuess(guess) {
    setGuesses([...guesses, guess]);
    setGotItRight(guess === answer);
  }

  return <>
    {<GuessResults guesses={guesses} answer={answer} />}
    {gotItRight &&
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>3 guesses</strong>.
        </p>
      </div>
    }
    {guesses.length === NUM_OF_GUESSES_ALLOWED &&
      <div className="sad banner">
        <p>
          <strong>Game over!</strong> The answer was
          <strong>{answer}</strong>.
        </p>
      </div>
    }
    <GuessInput addGuess={addGuess} disabled={gotItRight || guesses.length === NUM_OF_GUESSES_ALLOWED}/>
  </>
}

export default Game;
