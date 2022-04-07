import Image from "next/image";
import Link from "next/link";
import Button from "../../components/button";
import react, { useEffect, useState } from "react";
import { createMint, AccountLayout, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import {
  clusterApiUrl,
  Connection,
  PublicKey,
  Keypair,
  getAccountInfo,
} from "@solana/web3.js";
const web3 = require("@solana/web3.js");

export default function CreateItem() {
  const [imageNft, selectedImageNft] = useState();
  const [type_nft, setTypeNft] = useState();
  const [publicNft, setPublicNft] = useState(false);
  const [myscreen, setMyScreen] = useState(true);
  useEffect(() => setMyScreen(window.screen.width > 500), []);

  //   const connection = new web3.Connection(
  //     web3.clusterApiUrl("devnet"),
  //     "confirmed"
  //   );
  useEffect(() => {
    async function Blob() {
      const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
      // let sss = await getAccountInfo("7NDNkxWFHFsFrw93pxv5UC8613pm67E8CoAYmd8mZ3rT");
      // console.log(sss);
      const wallet = Keypair.generate();

      const tokenAccounts = await connection.getTokenAccountsByOwner(
        new PublicKey("7NDNkxWFHFsFrw93pxv5UC8613pm67E8CoAYmd8mZ3rT"),
        {
          programId: TOKEN_PROGRAM_ID,
        }
      );

      console.log("Token                                         Balance");
      console.log(
        "------------------------------------------------------------"
      );
      tokenAccounts.value.forEach((e) => {
        const accountInfo = AccountLayout.decode(e.account.data);
        console.log(
          `${new PublicKey(accountInfo.mint)}   ${accountInfo.amount}`
        );
      });
    }
    Blob();
  }, []);
  //   console.log(connection);
  const viewImage = async (event) => {
    let file = event.target.files[0];
    setTypeNft(file.type);
    console.log(file);
    const reader = new FileReader();
    reader.onloadend = function () {
      selectedImageNft(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="mainCreateItemBlock">
      {!myscreen && (
        <>
          <h1>Create New Item</h1>
          <p className="itemName requared "> requared input</p>
        </>
      )}
      <div className="imageBlock">
        <div className="choose_file">
          {imageNft ? (
            <div>
              <b className="iconClose" onClick={() => selectedImageNft()} />

              {type_nft === "video/mp4" ? (
                <video
                  src={imageNft}
                  width="100%"
                  loop
                  autoPlay
                  mute
                  type="video/mp4"
                />
              ) : type_nft === "audio/mpeg" ? (
                <audio
                  controls
                  loop
                  autoPlay
                  type="audio/mpeg"
                  src={imageNft}
                />
              ) : (
                <div className="main_image" />
              )}
            </div>
          ) : (
            <>
              <form>
                <label className="addImage">
                  <div className="plus" />
                  <input
                    type="file"
                    id="file"
                    name="file"
                    style={{ display: "none" }}
                    accept="image/png, image/gif, image/webp, image/jpeg, video/mp4,audio/mp3"
                    onChange={(e) => viewImage(e)}
                  />
                </label>
              </form>
            </>
          )}
        </div>
        <div className="supported">
          <p>File types supported</p>
          JPG, JPEG, PNG, GIF, TIFF, SVG, BMP,
          <br />
          MP4, AVI, MOV, WMV, KMV
          <p>Max size: 100 MB</p>
        </div>
      </div>
      <div className="contentBlock">
        {!myscreen && (
          <>
            <h1>Create New Item</h1>
            <p className="itemName requared"> requared input</p>
          </>
        )}

        <label>
          <p className="itemName"> Item Name</p>
          <input type="text" />
        </label>
        <label>
          <p>Website</p>
          <input type="text" />
        </label>
        <label>
          <p>Description</p>
          <textarea rows="10" />
        </label>
        <label>
          <p>Hashtag</p>
          <input
            type="text"
            placeholder="e.g) #Genome #Bio #NFT #Game #Tiger #Whale"
          />
        </label>
        <div className="btnBlock">
          <span className="publicOn" onClick={() => setPublicNft(!publicNft)} />
          <div style={{ width: myscreen ? "100%" : "50%" }}>
            <Link href="/createitem/createitem_02" passHref>
              <Button
                width="48%"
                color="#fff"
                background="#be0000"
                text="Cancel"
                background_hover="#8b0000"
              />
            </Link>
            <Button
              width="48%"
              color="#000"
              background="#f3f3f3"
              text="Create"
              background_hover="#00b4e6"
              color_hover="#fff"
            />{" "}
          </div>
        </div>
      </div>
      <style jsx>{`
        .mainCreateItemBlock {
          width: 69%;
          height: auto;
          margin: 90px auto;
          display: flex;
          justify-content: space-between;
          font-family: "GmarketSansMedium";
        }
        * {
          font-family: "GmarketSansMedium";
        }
        .choose_file {
          text-align: center;
          position: relative;
          z-index: 1;
          background-color: #ebebeb;
          height: ${imageNft ? "auto" : "500px"};
          border: 1px solid rgba(4, 4, 5, 0.1);
          border-radius: 15px;
        }
        .choose_file:after {
          content: "* File Upload";
          position: absolute;
          top: 110%;
          display: ${imageNft ? "none" : "block"};
          left: 0;
          font-size: 25px;
        }
        .iconClose {
          cursor: pointer;
          position: absolute;
          left: 93%;
          top: 1%;
          z-index: 100;
          border-radius: 50%;
          display: block;
          background-color: #fff;
          background-image: url(/close.svg);
          background-size: 100%;
          background-position: center;
          width: 34px;
          height: 34px;
        }
        .requared {
          margin-bottom: 60px;
          color: #c9c9c9;
        }

        .main_image {
          width: 100%;
          height: 500px;
          background: url(${imageNft})  center / auto 100% no-repeat;
          
        }
        h1 {
          margin-top: 0;
          font-size: 38px;
          font-family: "GmarketSansLight";
        }
        .imageBlock {
          width: 40%;
        }
        .contentBlock {
          width: 58%;
        }
        .contentBlock label {
          display: block;
          font-size: 22px;
          font-family: "GmarketSansMedium";
          margin-bottom: 60px;
        }
        .itemName:before {
          content: "";
          background-image: url("/icon_star.svg");
          background-position: center center;
          background-repeat: no-repeat;
          width: 10px;
          height: 10px;
          background-size: 10px;
          display: inline-block;
          margin-right: 5px;
          margin-left: -15px;
        }
        .itemName {
          margin-left: 15px;
        }
        input,
        textarea {
          width: 100%;
          font-size: 20px;
          height: 44px;
          border: 1px solid #c9c9c9;
          padding: 20px;
          border-radius: 20px;
          outline: none;
        }
        textarea {
          height: 200px;
        }
        .btnBlock {
          display: flex;
          justify-content: space-between;
        }
        .supported {
          margin: 100px 20px 0;
          line-height: 20px;
          color: #c9c9c9;
        }
        .supported p {
          color: #000;
        }
        .addImage {
          cursor: pointer;
          height: 100%;
        }
        .btnBlock {
          margin-top: 100px;
        }
        .plus {
          background-image: url("/icon_mrwt.svg");
          background-repeat: no-repeat;
          background-size: 23%;
          height: 500px;
          background-position: center;
        }
        .plus:hover {
          background-image: url("/icon_mrbk.svg");
        }
        .publicOn {
          height: 30px;
          width: 60px;
          position: relative;
          top: 6px;
          display: inline-block;
          background-color: ${publicNft ? "#00b4e6" : "#c9c9c9"};
          -webkit-transition: 0.5s;
          transition: 0.4s;
          border-radius: 20px;
          cursor: pointer;
        }
        .publicOn:before {
          content: "";
          position: absolute;
          top: 10%;
          left: ${publicNft ? "5%" : "55%"};
          width: 23px;
          transition: all 0.5s;
          height: 23px;
          background-color: #fff;
          border-radius: 52%;
          display: inline-block;
        }
        .publicOn:after {
          content: "Public";
          position: absolute;
          top: 17%;
          left: 130%;
          font-size: 22px;
        }

        @media screen and (max-width: 1300px) {
          .mainCreateItemBlock {
            width: 80%;
          }
        }
        @media screen and (max-width: 550px) {
          .mobileNo {
            display: none;
          }
          .mobileYes {
          }
          .mainCreateItemBlock {
            width: 94%;
            margin: 50px auto 20px;
            display: block;
          }
          .imageBlock,
          .contentBlock {
            width: 100%;
          }
          .main_image,
          .choose_file,
          .plus {
            height: 96vw;
          }
          .btnBlock {
            flex-direction: column;
            margin: 0;
          }
          .publicOn {
            margin-bottom: 30px;
          }
          h1 {
            font-size: 24px;
          }
          .requared {
            margin-bottom: 25px;
          }
          .contentBlock label {
            margin-bottom: 30px;
            font-size: 18px;
          }
          .choose_file:after {
            font-size: 14px;
          }
          .supported {
            margin: 70px 20px 0;
          }
        }
      `}</style>
    </div>
  );
}
