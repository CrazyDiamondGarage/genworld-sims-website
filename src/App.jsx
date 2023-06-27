import React, { useState } from "react";
import "./App.css";

const Popup = (props) => {
  const onCancel = () => {
    props.setPopup(false);
  };

  const onConfirm = () => {
    props.setPopup(false);
  };

  return (
    <div className="gw-popup">
      <div className="gw-popup-inner">
        <h3>
          Confirm to airdrop <span>{props.item}</span> to <span>{props.npc}</span>?
        </h3>
        <img src={props.itemImg} alt={props.item} />
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    </div>
  );
};

const App = () => {
  const [playing, setPlaying] = useState(false);
  const [item, setItem] = useState("a bottle of Coke");
  const [itemImg, setItemImg] = useState("/img/coke.png");
  const [npc, setNpc] = useState("Mohan Guo");
  const [popup, setPopup] = useState(false);

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

  const codePlus = () => {
    setItem("a bottle of Coke");
    setNpc("Mohan Guo");
    setItemImg("/img/coke.png");
    setPopup(true);
  };

  const axePlus = () => {
    setItem("a shape Axe");
    setNpc("Musk Wang");
    setItemImg("/img/axe.png");
    setPopup(true);
  };

  return (
    <>
      <div id="gw-top">
        <div id="gw-logo">
          <img src="/img/genworld.png" className="logo" alt="GenWorld" />
        </div>
        <button id="gw-btn-start-game" className={playing ? "gw-hide" : ""} onClick={playGame} disabled={playing}>
          RUN
        </button>
      </div>

      <br />
      <br />

      <iframe id="godot-game" className="game-window" title="GenWorld" src="/game/game.html" />

      {/* <img className="game-window" src="/img/screenshot_01.png"></img> */}

      <div id="gw-middle" className={playing ? "" : "gw-hide"}>
        <button id="gw-btn-coke" onClick={codePlus}>
          COKE +1
        </button>
        <button id="gw-btn-axe" onClick={axePlus}>
          AXE +1
        </button>
      </div>
      <br />
      <br />

      <div>
        <h2>Hachathon Team</h2>
        <p>Frank Chen - Team Lead</p>
        <p>Todd Zhang - Game Dev</p>
        <p>Chang - Backend Dev</p>
        <p>Yewlne Lin - PM</p>
        <p>Aero Xi - AI Engr</p>
        <p>Shuju Chen - Prompt Engr</p>
        <h2>Credits</h2>
        <p>
          <a href="https://limezu.itch.io/">LimeZu</a> - Pixel Arts
        </p>
        <h2>Contact Us</h2>
        <img id="qw-qrcode" src="/img/qrcode.png" alt="QR Code" />
      </div>

      <br />
      <br />

      <div id="gw-footer">
        <h4 id="gw-copyright">
          Copyright © 2023 Crazy Diamond. All rights reserved. Made by{" "}
          <a href="https://https://godotengine.org/">Godot Engine</a> and{" "}
          <a href="https://github.com/101dotxyz/GPTeam">GPTeam</a>.
        </h4>
      </div>
      {popup && <Popup item={item} itemImg={itemImg} npc={npc} setPopup={setPopup} />}
    </>
  );
};

export default App;
