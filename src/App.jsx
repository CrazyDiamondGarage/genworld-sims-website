import { useState } from "react";
import { MirrorWorld, Ethereum, Sui } from "@mirrorworld/web3.js";
import { RequestManager } from "eth-connect";
// in index.js
import packageJson from "../package.json";
console.log(packageJson.version); // "1.0.0"
import "./App.css";

const mirrorworld = new MirrorWorld({
  apiKey: import.meta.env.VITE_APP_MIRROR_WORLD_API_KEY,
  chainConfig: Sui("mainnet"),
});

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
  const [ethAcc, setEthAcc] = useState(null);
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

  const loginEthereum = async () => {
    if (!web3) {
      alert("Please install MetaMask");
      return;
    }
    const requestManager = new RequestManager(web3.currentProvider);
    const accounts = await requestManager.eth_accounts();
    if (accounts && accounts.length >= 0) {
      setEthAcc(accounts[0]);
    }
  };

  const loginSui = async () => {};

  return (
    <>
      <div id="gw-top">
        <div id="gw-logo">
          <img src="/img/genworld.png" className="logo" alt="GenWorld" />
        </div>
      </div>

      <div id="gw-social">
        <button onClick={loginEthereum}>{ethAcc ? ethAcc : "ETH"}</button>
        <button onClick={loginSui}>SUI</button>
      </div>

      <br />
      <br />

      <div id="game-view">
        <iframe
          id="godot-game"
          className={`${playing ? "" : "gw-hide"} game-window`}
          title="GenWorld"
          src="/game/game.html"
        />

        <img className={`${playing ? "gw-hide" : ""} game-window`} src="/img/screenshot_01.png" />
        <button id="gw-btn-start-game" className={playing ? "gw-hide" : ""} onClick={playGame} disabled={playing}>
          RUN
        </button>
      </div>

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
        <p>
          <a href="https://twitter.com/chenboos5" rel="noreferrer" target="_blank">
            Frank Chen
          </a>{" "}
          - Team Lead
        </p>
        <p>
          <a href="https://twitter.com/JustinSoong_eth" rel="noreferrer" target="_blank">
            Justin Song
          </a>{" "}
          - Marketing & Community
        </p>
        <p>
          <a href="https://twitter.com/yewlne7" rel="noreferrer" target="_blank">
            Yewlne Lin
          </a>{" "}
          - Project Manager
        </p>
        <p>
          <a href="https://twitter.com/_endaye" rel="noreferrer" target="_blank">
            Todd Zhang
          </a>{" "}
          - Game Developer
        </p>
        <p>
          <a href="https://twitter.com/33Cha2" rel="noreferrer" target="_blank">
            Chang
          </a>{" "}
          - Backend Developer
        </p>
        <p>
          <a href="https://twitter.com/magic_talent" rel="noreferrer" target="_blank">
            Aero Xi
          </a>{" "}
          - AI Engineer
        </p>
        <p>Shuju Chen - Prompt Engineer</p>
        <h2>Credits</h2>
        <p>
          <a href="https://limezu.itch.io/" rel="noreferrer" target="_blank">
            LimeZu
          </a>{" "}
          - Pixel Arts
        </p>
        <p>
          <a href="https://https://godotengine.org/" rel="noreferrer" target="_blank">
            Godot Engine
          </a>{" "}
          - Game Engine
        </p>
        <p>
          <a href="https://github.com/101dotxyz/GPTeam" rel="noreferrer" target="_blank">
            GPTeam
          </a>{" "}
          - AI Agents
        </p>
        <p>
          <a href="https://mirrorworld.fun/" rel="noreferrer" target="_blank">
            Mirror World
          </a>{" "}
          - Web3 Auth
        </p>

        <h2>Contact Us</h2>
        <p>
          <a href="mailto:contact@genworld.io">contact@genworld.io</a>{" "}
        </p>
        <img id="qw-qrcode" src="/img/qrcode.png" alt="QR Code" />
      </div>

      <br />
      <br />

      <div id="gw-footer">
        <h5 id="gw-copyright">
          <a onClick={() => window.scrollTo(0, 0)}>GenWorld</a> v{packageJson.version}. Copyright © 2023 Crazy Diamond.
          All rights reserved.
        </h5>
      </div>
      {popup && <Popup item={item} itemImg={itemImg} npc={npc} setPopup={setPopup} />}
    </>
  );
};

export default App;
