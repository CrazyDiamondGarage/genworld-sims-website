import "./App.css";

const App = () => {
  //! play game
  const playGame = () => {
    //* Play Game!!
    console.debug("Play Game");
    const elem = document.getElementById("godot-game");
    if (elem) {
      elem.contentWindow.startGame();
    } else {
      console.debug("Cannot find game :-(");
    }
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/img/godot.png" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>GenWorld</h1>
      <button onClick={playGame}>Start Game</button>
      <iframe id="godot-game" className={`game-iframe`} title="GenWorld" src="/game/game.html" />
    </>
  );
};

export default App;
