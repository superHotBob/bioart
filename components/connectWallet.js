import Button from "./button";
import { useDispatch } from 'react-redux';
import {  addAccount, changeBalance } from "../reduser";
import * as web3 from "@solana/web3.js";

const {  
  clusterApiUrl,
  LAMPORTS_PER_SOL,
  getBalance,
} = require("@solana/web3.js");

export default function ConnectWallet(props) {
  const connect = new web3.Connection(clusterApiUrl("devnet"));
  const dispatch = useDispatch();
  async function Connect() {     
    let resp = await window.solana.connect();
    const balance = await connect.getBalance(resp.publicKey);   
    dispatch(addAccount(resp.publicKey));
    dispatch(changeBalance(balance));
    localStorage.setItem('wallet', resp.publicKey);
 }
  return (
    <div className="main">
      <p>Wallet</p>
      <p className="main__text">Connect with wallet or create a new one.</p>
      <div className="button__image" onClick={Connect}>
        <Button
          text="Phantom"
          color="#000"
          background="#fff"
          width="100%"
          color_hover="#fff"
          background_hover="#00b4e6"
          Click={props.wallet}
        />
        <figure />
      </div>
      <style jsx>
        {`
          .main {
            position: absolute;
            right: 4vw;
            width: 280px;
            top: 90px;
            z-index: 100; 
            display: ${props.view ? 'none': 'block'};
            height: auto;
            padding: 30px 20px;
            text-align: center;
            border: 1px solid #c9c9c9;
            border-top: none;
            background-color: #fff;
          }
          figure {
            position: absolute;
            width: 30px;
            height: 30px;
            margin-top: 7px;
            left: 30px;
            background: url("/icon_wlt.svg") 100% / 100% no-repeat;
          }
          p {
            font-family: "GmarketSansLight";
            font-weight: 800;
          }
          .button__image {
            position: relative;
          }
          .button__image:hover figure {
            background: url("/icon_wlt_hv.svg") 100% / 100% no-repeat;
          }
          .main__text {
            margin: 30px 0;
          }
          @media screen and (max-width: 550px) {
            .main {
              right: -8px;
              width: 100vw;
              border: none;
              background-color: #f3f3f3;
            }
            
          }
        `}
      </style>
    </div>
  );
}
