import Image from "next/image";
import react, { useState } from "react";

export default function CreateItem() {
  const [imageNft, selectedImageNft] = useState();
  const [type_nft, setTypeNft] = useState();
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
                  width="80%"
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
        <p>* requared input</p>
        <label>
          <p>* Item Name</p>
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
          <input type="text" />
        </label>
        <div className="btnBlock">
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
          height: 500px;
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
          height: 80vh;
          margin: 100px auto 0;
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
        input,
        textarea {
          width: 100%;
          font-size: 20px;
          height: 44px;
          border: 1px solid #c9c9c9;
          padding: 0 20px 0 30px;
          border-radius: 20px;
        }
        textarea {
          height: 200px;
        }
        button {
          height: 44px;
          border: 1px solid #c9c9c9;
          border-radius: 20px;
          width: 25%;
          margin: 50px 0 0 20px;
          float: right;
          font-size: 18px;
        }
        .cancelBtn {
          background-color: red;
          color: #fff;
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
        .plus {
          background-image: url(${imageNft ? imageNft : "/icon_mrbk.svg"});
          background-repeat: no-repeat;
          background-size: 30%;
          height: 500px;
          background-position: center;
        }
        .plus:hover {
          background-image: url("/icon_mrbk.svg");
        }
      `}</style>
    </div>
  );
}
