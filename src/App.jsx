import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [playing, setPlaying] = useState(false);

  //! play game
  const playGame = () => {
    //* Play Game!!
    console.debug("Play Game");
    const elem = document.getElementById("godot-game");
    if (elem) {
      elem.contentWindow.startGame();
      setPlaying(true);
    } else {
      console.debug("Cannot find game :-(");
    }
  };
  return (
    <>
      <div id="gw-top">
        <div id="gw-logo">
          <img src="/img/genworld.png" className="logo" alt="GenWorld" />
        </div>
        <button id="gw-btn-start-game" onClick={playGame} disabled={playing}>
          RUN
        </button>
      </div>

      <br />
      <br />
      <iframe id="godot-game" className={`game-iframe`} title="GenWorld" src="/game/game.html" />

      <div id="gw-footer">
        <h4 id="gw-copyright">Copyright © 2023 MetaBorn. All rights reserved.</h4>

        <a id="gw-godot" href="https://https://godotengine.org/" target="_blank" rel="noreferrer">
          <img src="/img/godot.png" className="logo" alt="Vite logo" />
        </a>
        <h4>
          Made by <a href="https://https://godotengine.org/">Godot Engine</a>.
        </h4>
      </div>
    </>
  );
};

export default App;
