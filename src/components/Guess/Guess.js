import React from "react";
import {checkGuess} from '../../game-helpers';
import {range} from '../../utils';


function GuessLetter({answerStyle, letter}) {
  return <span className={`cell ${answerStyle}`}>
          {letter}
        </span>;
}

function Guess({guess, answer}) {
  // if (guess === "") {
  //   return <p className="guess">
  //     {range(0, 5).map((c, index) => <span key={index} className="cell"></span>)}
  //   </p>;
  // }

  const guessResults = checkGuess(guess, answer);
  console.log(guessResults);

  return <p className="guess">
    {range(0,5).map((number) => {
      const characterResult = guessResults ? guessResults[number].letter : "";
      return <GuessLetter key={number} answerStyle={guessResults ? guessResults[number].status : ""} letter={characterResult}/>
    })}
  </p>;
}

export default Guess;
