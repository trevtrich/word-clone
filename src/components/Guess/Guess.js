import React from "react";
import {checkGuess} from '../../game-helpers';
import {range} from '../../utils';


function GuessLetter(props) {
  return <span className={`cell ${props.answerStyle}`}>
          {props.characterResult.letter}
        </span>;
}

function Guess({guess, answer}) {
  if (guess === "") {
    return <p className="guess">
      {range(0, 5).map((c, index) => <span key={index} className="cell"></span>)}
    </p>;
  }

  const guessResults = checkGuess(guess, answer);

  return <p className="guess">
    {guessResults.map((characterResult, index) => {
      if (guessResults[index].status === "correct") {
        return <GuessLetter key={index} answerStyle="correct" characterResult={characterResult}/>
      } else if (guessResults[index].status === "misplaced") {
        return <GuessLetter key={index} answerStyle="misplaced" characterResult={characterResult} />
      }

      return <GuessLetter key={index} characterResult={characterResult} />
    })}
  </p>;
}

export default Guess;
