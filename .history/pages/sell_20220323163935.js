import Image from "next/image";
import { useState } from "react";

export default function Sell() {
  const [type, setType] = useState(true);
  const [duration, setDuration] = useState(1);
  return (
    <div className="sellMainBlock">
      <div className="nft">
        <div
          className="itemSliderImageNft"
          style={{
            height: "520px",
            width: "300px",
            paddingTop: "270px",
            backgroundImage: "url(/article-img.png)",
          }}
        >
          <b
            className="iconItemNft"
            style={{ backgroundImage: "url(/icon_ba.svg)" }}
          />
          <p style={{ textAlign: "center" }}>
            <b className="iconGraph">
              <Image
                src="/icon_graph_01.svg"
                alt="icon"
                width={35}
                height={35}
              />
            </b>
            <span>1.3</span>
          </p>
          <p className="textNft">
            Artistic Transformation of Life into Information.
          </p>

          <h5 className="lastStringNft">
            <b>
              <Image
                src="/icon_like_on.svg"
                width={25}
                height={25}
                alt="icon"
              />{" "}
            </b>
            <span style={{ flexGrow: 8, textAlign: "left" }}>15.285</span>
            <b>
              <Image src="/icon_bubble.svg" width={25} height={25} alt="icon" />
            </b>
            <span>25.000</span>
          </h5>
        </div>
      </div>
      <div className="content">
        <h1 className="firstString">List item for Sale</h1>
        <p>Type</p>
        <label>
          <input type="radio" onClick={() => setType(!type)} checked={type} />
          <span className="fixedPrice">Fixed Price</span>
        </label>
        <br />
        <br />
        <label>
          <input type="radio" onClick={() => setType(!type)} checked={!type} />
          <span className="timedAuction">Timed Auction</span>
        </label>
        {type ? (
          <>
            <p>Price</p>
            <label>
              <span className="sol">SOL</span>
              <input type="text" placeholder="Amount" />
            </label>
          </>
        ) : (
          <>
            <p>Starting Price</p>
            <label>
              <span className="sol">SOL</span>
              <input type="text" placeholder="Amount" />
            </label>
            <p>
              <input type="checkbox" /> Ending Price
            </p>
            <label>
              <span className="sol">SOL</span>
              <input type="text" placeholder="Amount" />
            </label>
          </>
        )}
        <p>Duration</p>
        <div className="blockRadios">
          <label>
            <input type="radio" onChange={()=>setDuration(1)} checked={duration === 1}/>1 day
          </label>
          <label>
            <input type="radio" onChange={()=>setDuration(7)} checked={duration === 7}/>7 day
          </label>
          <label>
            <input type="radio" onChange={()=>setDuration(30)} checked={duration === 30}/>1 mounth
          </label>
        </div>
        <div className="buttons">
          <button className="cancel">Cancel</button>
          <button className="complete">Complete Listing</button>
        </div>
      </div>
      <style jsx>{`
        .sellMainBlock {
          width: 68%;
          margin: 0 auto;
          padding: 80px 0;
        }
        .nft {
          display: inline-block;
          width: 34%;
        }
        .content {
          display: inline-block;
          width: 65%;
          vertical-align: top;
        }
        .content p {
          font-size: 22px;
          font-family: "GmarketSansMedium";
          margin: 60px 0 20px;
        }
        input[placeholder="Amount"] {
          width: 80%;
          height: 44px;
          border: 1px solid #c9c9c9;
          padding: 0 20px 0 30px;
          border-radius: 20px;
        }
        label {
          margin-bottom: 100px;
        }
        label span {
          font-size: 22px;
          font-weight: 600;
          font-family: "GmarketSansMedium";
          margin-right: 20px;
        }
        .blockRadios label {
          margin-right: 20px;
          font-size: 18px;
          color: #333;
          display: inline-block;
        }
        input[type="radio"],
        input[type="checkbox"] {
          height: 20px;
          width: 20px;
          margin-right: 20px;
          vertical-align: sub;
        }
        .firstString {
          font-size: 38px;
          margin: 0 0 25px;
          font-family: "GmarketSansMedium";
          font-weight: 400;
        }
        .itemSliderImageNft {
          outline-offset: 3px;
          outline: 1px solid #ddd;
          background-size: 100% auto;
          border-radius: 10px;
          background-position: center top;
          background-repeat: no-repeat;
          height: auto;
          margin-bottom: 40px;
          cursor: pointer;
        }
        .sol:before {
          content: "";
          background: url("/icon_graph_01.svg") center center no-repeat;
          margin-right: 10px;
          vertical-align: middle;
          width: 34px;
          height: 27px;
          display: inline-block;
        }
        label .fixedPrice,
        label .timedAuction {
          font-weight: 600;
          font-size: 18px;
          color: #333;
        }
        label .fixedPrice:before {
          content: "";
          background: url("/icon_cate_off_12.svg") center center no-repeat;
          margin-right: 10px;
          vertical-align: middle;
          width: 40px;
          height: 40px;
          display: inline-block;
        }
        label .timedAuction:before {
          content: "";
          background: url("/icon_time.svg") center center no-repeat;
          margin-right: 10px;
          vertical-align: middle;
          width: 40px;
          height: 40px;
          display: inline-block;
        }
        .buttons {
            display: flex;
            justify-content: space-between;
            font-family: "GmarketSansMedium";
        }
        
      
        .cancel {
            font-size: 18px;
            width: 30%;
            height: 44px;
            border-radius: 20px;
            border: 1px solid #c9c9c9;
            display: inline-block;
            background-color: red;
            color: #fff;
        }
        .complete {
            font-size: 18px;
            background-color: #f3f3f3;
            width: 65%;
            border-radius: 20px;
            height: 44px;
            border: 1px solid #c9c9c9;
            display: inline-block;
        }
      `}</style>
    </div>
  );
}
