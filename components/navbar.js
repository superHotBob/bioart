import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import {  addAccount, changeBalance } from "../reduser";
import { walletAddress } from "../reduser";
import react, { useState, useEffect } from "react";
import ConnectWallet from "./connectWallet";
import * as web3 from "@solana/web3.js";
import Wallet from "./wallet";
import InstallPhantom from "./inatallPhantom";
const {  
  clusterApiUrl,
  LAMPORTS_PER_SOL,
  getBalance,
} = require("@solana/web3.js");

const likes = [
  { name: "Bob", date: 2 },
  { name: "Fill", date: 4 },
  { name: "Bill", date: 3 },
  { name: "Martin", date: 12 },
  { name: "Ali", date: 14 },
  { name: "Ivan", date: 13 },
];

export default function Navbar() {

  const my_wallet = useSelector(walletAddress);
  const dispatch = useDispatch();
  const connect = new web3.Connection(clusterApiUrl("devnet"));
  const [myPhantom, setMyPhantom] = useState(false)
  const [likesView, setLikesView] = useState(false);
  const [viewPhantom, setViewPhantom] = useState(false);
  
  const getProvider = async () => {
    const wallet = localStorage.getItem('wallet'); 
    if ("solana" in window) {     
      //  let resp =  await window.solana.connect();
      
       const pub = await window.solana.publicKey;
       if ( wallet ) {
         setViewPhantom(false)
         dispatch(addAccount(wallet))
         const balance = await connect.getBalance(resp.publicKey); 
         console.log('Balance',balance)
        //  dispatch(changeBalance(balance))
       } else {
          setViewPhantom(true)
          dispatch(addAccount(''))
       }   
      //  const balance = await connect.getBalance(resp.publicKey);
      //  console.log(resp.publicKey.toString(),balance);
      // let info = await connect.getAccountInfo(resp.publicKey);
      console.log(pub)
      // setViewPhantom(false);
      const provider = window.solana;
      console.log(window.solana);
    } else {
      setMyPhantom(true)
      setViewPhantom(true);
      console.log(myPhantom);
      console.log("Is connected", window.solana);
    }

   

    //  console.log('PublicKey',resp.publicKey.toString())
    // console.log(window.solana.isConnected)
    // if (provider.isPhantom) {

    //   return provider;
    //  } else {
    //    setViewPhantom(true)
    //  }
    // }
  };

  

  useEffect(() => {
    getProvider();
  }, []);

  return (
    <div className={styles.header}>
      <Link href="/explore" passHref>
        <figure className={styles.symbol_icon} />
      </Link>

      <Link href="/" passHref>
        <b className={styles.learn}>Learn more about me &#9654;</b>
      </Link>
      <div className={styles.menu_tab}>
        <span className={styles.symbol}>
          <Image src="/icon_search.svg" width={22} height={22} alt="search" />
        </span>
        <input
          type="search"
          className={styles.search_input}
          placeholder="Search"
        />
        <Link href="/createitem/createitem" passHref>
          <b className={styles.tab01} />
        </Link>
        <Link href="/geno" passHref>
          <b className={styles.tab02} />
        </Link>
        {my_wallet &&
        <b className={styles.tab03active}>
          <div className={styles.wallet} style={{width: 100,height: 100}}>
            {" "}
            <Wallet />
          </div>
        </b>}

        {my_wallet && <b
          className={styles.iconLike}
          onClick={() => setLikesView(!likesView)}
        />}

        {likesView && (
          <div className={styles.block_likes}>
            LIKE
            {likes.map((i, index) => (
              <div key={index}>
                <figure className={styles.icon_like}>
                  <Image
                    src="/article-img.png"
                    width={50}
                    height={50}
                    alt="icon"
                  />
                </figure>
                <span className={styles.name}> {i.name} likes this</span>
                <span>{i.date} days ago</span>
                <figure className={styles.icon_like}>
                  <Image src="/icon_ba.svg" width={50} height={50} alt="icon" />
                </figure>
                <figure className={styles.icon_like_last}>
                  <Image
                    src="/planet-img-02.png"
                    width={50}
                    height={50}
                    alt="icon"
                  />
                </figure>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {viewPhantom && <ConnectWallet Click="wallet" view={my_wallet} />}
      <InstallPhantom view={myPhantom} />
    </div>
  );
}
