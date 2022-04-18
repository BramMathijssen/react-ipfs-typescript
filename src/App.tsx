import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { create, CID, IPFSHTTPClient } from "ipfs-http-client";

function App() {
  let ipfs: IPFSHTTPClient | undefined;
  try {
    ipfs = create({
      url: "https://ipfs.infura.io:5001/api/v0",
    });
  } catch (error) {
    console.error("IPFS error ", error);
    ipfs = undefined;
  }

  return (
    <div className="App">
      <header className="App-header">
        {!ipfs && (
          <p>Oh oh, Not connected to IPFS. Checkout out the logs for errors</p>
        )}
        <p> connected to ipfs</p>
      </header>
    </div>
  );
}

export default App;
