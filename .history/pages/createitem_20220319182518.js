import Image from "next/image";
import react, { useState } from "react";
import { createMint } from "@solana/spl-token";
const web3 = require("@solana/web3.js");

export default function CreateItem() {
  const [imageNft, selectedImageNft] = useState();
  const [type_nft, setTypeNft] = useState();
  const [publicNft, setPublicNft] = useState(false);

  const connection = new web3.Connection(
    web3.clusterApiUrl("devnet"),
    "confirmed"
  );
  console.log(connection);
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
    <div className="createItem">
      <div className="imageBlock">
        <div className="choose_file">
          {imageNft ? (
            <div>
              <b className="iconClose" onClick={() => selectedImageNft()}></b>

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
                  <div className="plus"></div>
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
        <h1>Create New Item</h1>
        <p className="itemName"> requared input</p>
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

          <button className="createBtn">Create</button>
          <button className="cancelBtn">Cancel</button>
        </div>
      </div>
      <style jsx>{`
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
        .createItem {
          width: 78%;
          height: auto;
          margin: 100px auto;
          display: flex;
          justify-content: space-between;
          font-family: "GmarketSansMedium";
        }
        .main_image {
          width: 100%;
          height: 500px;
          background-image: url(${imageNft});
          background-repeat: no-repeat;
          background-size: auto 100%;
          background-position: center;
        }
        h1 {
          margin-top: 0;
        }
        .imageBlock {
          width: 38%;
        }
        .contentBlock {
          width: 60%;
        }

        label {
          display: block;

          font-size: 22px;
          font-family: "GmarketSansMedium";
          margin-bottom: 50px;
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
        button {
          height: 44px;
          border: 1px solid #c9c9c9;
          border-radius: 20px;
          width: 25%;
          margin: 0 0 0 20px;
          float: right;
          font-size: 18px;
        }
        .cancelBtn {
          background-color: red;
          color: #fff;
        }
        .createBtn:hover {
          background-color: #00b4e6;
          color: #fff;
        }
        .cancelBtn:hover {
          background-color: #000;
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
          background-size: 30%;
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
          top: 6%;
          left: ${publicNft ? "5%" : "50.8%"};
          width: 26px;
          transition: all 0.5s;
          height: 26px;
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
      `}</style>
    </div>
  );
}
