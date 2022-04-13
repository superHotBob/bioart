import Image from "next/image";
import { useState } from "react";

export default function Sell() {
  const [type, setType] = useState(true);
  const [duration, setDuration] = useState(1);
  return (
    <div className="sellMain">
      <div className="nft">
        <div className="itemSliderImageNft">
          <b
            className="iconItemNft"
            style={{ backgroundImage: "url(/icon_ba.svg)" }}
          />
          <p className="priceNft">
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
          <input type="radio" onChange={() => setType(!type)} checked={type} />
          <span className="fixedPrice">Fixed Price</span>
        </label>
        <br />
        <br />
        <label>
          <input type="radio" onChange={() => setType(!type)} checked={!type} />
          <span className="timedAuction">Timed Auction</span>
        </label>
        {type ? (
          <>
            <p>Price</p>
            <label className="solPrice">
              <span className="sol">SOL</span>
              <input type="text" placeholder="Amount" />
            </label>
          </>
        ) : (
          <>
            <p>Starting Price</p>
            <label className="solPrice">
              <span className="sol">SOL</span>
              <input type="text" placeholder="Amount" />
            </label>
            <p>
              <input type="checkbox" /> Ending Price
            </p>
            <label className="solPrice">
              <span className="sol">SOL</span>
              <input type="text" placeholder="Amount" />
            </label>
          </>
        )}
        <p>Duration</p>
        <div className="blockRadios">
          <label>
            <input
              type="radio"
              onChange={() => setDuration(1)}
              checked={duration === 1}
            />
            1 day
          </label>
          <label>
            <input
              type="radio"
              onChange={() => setDuration(7)}
              checked={duration === 7}
            />
            7 day
          </label>
          <label>
            <input
              type="radio"
              onChange={() => setDuration(30)}
              checked={duration === 30}
            />
            1 mounth
          </label>
          <span className="mobileView">Starting</span>
          <div className="starting">
          <span className="mobileHide">Starting</span>
            <select style={{ width: "25%" }}>
              <Image
                src="/icon_drp_arr.svg"
                width={25}
                height={25}
                alt="icon"
              />
              <option>sdfsdf</option>
            </select>
            <select></select>
            <select></select>
            <b>:</b>
            <select></select>
          </div>
          <span className="mobileView">Ending</span>
          <div className="starting">
            <span className="mobileHide">Ending</span>
            <select style={{ width: "25%" }}></select>
            <select></select>
            <select></select>
            <b>:</b>
            <select></select>
          </div>
        </div>
        <hr />
        <p>Fees</p>
        <span className="service">
          Service Free<b>0.5%</b>
        </span>
        <div className="creatorFree">
          Creator Free<b>10.0%</b>
          <button className="question">?</button>
          <b className="answer">dsfsdfsdf</b>
        </div>
        <div className="buttons">
          <button className="cancel">Cancel</button>
          <button className="complete">Complete Listing</button>
        </div>
      </div>
      <style jsx>{`
        .mobileView {
          display: none;
        }
        .mobileHide {
          display: inline-block;
        }
        hr {
          margin: 80px 0 60px;
          color: #c9c9c9;
        }
        .sellMain {
          width: 68%;
          margin: 0 auto;
          padding: 80px 0;
        }
        @media screen and (max-width: 1300px) {
          .sellMain {
            width: 80%;
          }
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
          margin: 70px 0 15px;
          font-weight: 700;
        }
        input[placeholder="Amount"] {
          width: 80%;
          height: 44px;
          font-size: 18px;
          border: 1px solid #c9c9c9;
          padding: 0 20px 0 30px;
          border-radius: 20px;
        }
        .solPrice {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        label span {
          font-size: 22px;
          font-weight: 600;
          font-family: "GmarketSansMedium";
        }
        .blockRadios label {
          margin-right: 20px;
          font-size: 20px;
          color: #333;
          display: inline-block;
        }
        input[type="radio"],
        input[type="checkbox"] {
          height: 20px;
          width: 20px;
          margin-right: 25px;
          vertical-align: sub;
        }
        .firstString {
          font-size: 37px;
          margin: 0 0 25px;
          font-family: "GmarketSansLight";
          font-weight: 800;
        }
        .itemSliderImageNft {
          outline-offset: 3px;
          height: 500px;
          width: 300px;
          padding-top: 270px;
          background-image: url('/article-img.png');
          outline: 1px solid #ddd;
          background-size: 100% auto;
          border-radius: 10px;
          background-position: center top;
          background-repeat: no-repeat;
          position: relative;
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
          margin: 0 10px 0 0;
          vertical-align: middle;
          width: 40px;
          height: 40px;
          display: inline-block;
        }
        .buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 50px;
        }
        .cancel,
        .complete {
          height: 44px;
          border-radius: 20px;
          border: 1px solid #c9c9c9;
          display: inline-block;
          font-size: 18px;
          font-family: "GmarketSansMedium";
        }
        .cancel {
          width: 35%;
          background-color: red;
          color: #fff;
        }
        .cancel:hover {
          background-color: #000;
        }
        .complete {
          background-color: #f3f3f3;
          width: 60%;
        }
        .complete:hover {
          background-color: #00b4e6;
          color: #fff;
        }
        .service,
        .creatorFree {
          margin-bottom: 30px;
          line-height: 1.5;
          font-weight: 600;
          font-size: 18px;
          color: #333;
          display: block;
          font-family: "GmarketSansLight";
          font-weight: 300;
          font-weight: 800;
        }
        .service b,
        .creatorFree b {
          margin-left: 20px;
          font-family: "GmarketSansMedium";
        }
        .question {
          border: 3px solid #c9c9c9;
          font-size: 18px;
          border-radius: 50%;
          text-align: center;
          color: #c9c9c9;
          margin: 0 10px;
        }
        .answer {
          display: none;
        }
        .question:hover ~ .answer {
          display: inline-block;
        }
        .starting {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 40px 0;
        }
        .starting select {
          -webkit-appearance: none;
          -moz-appearance: none;
          width: 18%;
          height: 44px;
          padding-left: 20px;
          font-size: 18px;
          background: transparent;
          border: 1px solid #c9c9c9;
          border-radius: 20px;
          background: url(/icon_drp_arr.svg) no-repeat 100% / 34% 35%;
        }

        .starting span {
          font-size: 18px;
          width: 10%;
          font-weight: 800;
          font-family: "GmarketSansLight";
        }
        @media screen and (max-width: 1300px) {
          .starting span {
            font-size: 15px;
          }
        }
        @media screen and (max-width: 550px) {
          .sellMain {
            width: 96%;
            margin: 0 auto;
          }
          .nft,
          .content {
            width: 100%;
          }
          .itemSliderImageNft {
            width: 100%;
            height: 150vw;
            padding-top: 97vw;
          }
          input[placeholder="Amount"] {
            width: 70%;
          }
          input[type="radio"] {
            margin-right: 14px;
          }
          .starting {
            display: block;
            margin-top: 10px;
          }
          .mobileView {
            display: block;
            margin-top: 30px;
            font: 400 18px/20px 'GmarketSansMedium';
          }
          .mobileHide {
            display: none;
          }
          .starting select {
            width: 24.5%;
          }
          .blockRadios label {
            margin-right: 10px;
          }
        }
      `}</style>
    </div>
  );
}
