import React from "react";
import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { create, CID, IPFSHTTPClient } from "ipfs-http-client";

function App() {
  const [getCid, setCID] = useState("");
  let ipfs: IPFSHTTPClient | undefined;

  const sendToIPFS = async (e: any) => {
    e.preventDefault();
    try {
      ipfs = create({
        url: "https://ipfs.infura.io:5001/api/v0",
      });

      const data = `Hey Bram`;

      const cid: any = await ipfs.add(data);
      setCID(cid.path);

      console.log(cid.path);
      return cid;
    } catch (error) {
      console.error("IPFS error ", error);
      ipfs = undefined;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {
          <>
            <p>Upload string using IPFS</p>
            <p>IPFS cid is {getCid}</p>
            <button onClick={sendToIPFS}>Send</button>
          </>
        }
      </header>
    </div>
  );
}

export default App;
