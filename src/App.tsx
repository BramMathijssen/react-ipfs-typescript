import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { create, CID, IPFSHTTPClient } from "ipfs-http-client";

function App() {
  let ipfs: IPFSHTTPClient | undefined;

  const sendToIPFS = async (e:any) => {
    e.preventDefault();
    try {
      ipfs = create({
        url: "https://ipfs.infura.io:5001/api/v0",
      });

      const data = `Hey Bram`;

      const cid = await ipfs.add(data);

      console.log(cid.path);
    } catch (error) {
      console.error("IPFS error ", error);
      ipfs = undefined;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {(
          <>
            <p>Upload File using IPFS</p>

            <form onSubmit={sendToIPFS}>

              <button type="submit">Send</button>
            </form>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
