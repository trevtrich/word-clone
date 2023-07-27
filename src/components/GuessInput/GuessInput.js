import React from "react";

function GuessInput({addGuess, disabled}) {
  const [guess, setGuess] = React.useState("");

  return <form className="guess-input-wrapper" onSubmit={event => {
    event.preventDefault();
    addGuess(guess);
    setGuess("");
  }}>
    <label htmlFor="guess-input">Enter guess:</label>
    <div id="guess-input-wrapper">
      <input id="guess-input" disabled={disabled} type="text" value={guess} required minLength={5} maxLength={5} pattern="[a-zA-Z]{5}" onChange={event => setGuess(event.target.value.toUpperCase())} />
    </div>
  </form>;
}

export default GuessInput;
