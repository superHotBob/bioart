import react, { useState } from "react";
import Button from "./button";
export default function Wallet() {
  const [lenght, setLength] = useState(0);  
  return (
    <div className="main">
      <p className="header">Geno`s World</p>
      <p>Wallet</p>
      <p className="main__total">Total balance (USD)</p>
      <h4>0.00</h4>
      <div className="wallet">
        <div className="data__wallet">
          <figure className="sol" /> <span>SOL</span>
          <span>0.00</span>
        </div>
        <div className="data__wallet">
          <figure className="gero" /> <span>GERO</span>
          <span>0.00</span>
        </div>
      </div>
      <p>Planets</p>
      {[
        "Genome NFT",
        "Geno’s Collection",
        "NYC Underground",
        "Genome Story",
      ].filter(index => index<lenght).map((i, index) => (
        <p key={index} className="planets"><figure />
          {i}
        </p>
      ))}
      <figure className="plus" />
      <div></div>
      <p className="setting"> Setting</p>
      <p className="logOut"> Log Out</p>
      <style jsx>
        {`
          .main {
            position: absolute;
            right: -10vw;
            width: 280px;
            top: 0;
            height: auto;
            text-align: center;
            border: 1px solid #c9c9c9;
            border-top: none;
            background-color: #fff;
          }
          .header {
            width: 100%;
            height: 50px;
            border-bottom: 1px solid #c9c9c9;
            margin: 0;
            line-height: 50px;
            font-size: 18px;
            background-color: #ebebeb;
            cursor: pointer;
            padding-left: 40px;
            background: #ebebeb url("/icon_cate_11.svg") 17% 32% / 15% no-repeat;
          }

          .wallet {
            padding: 0 20px 30px;
            border-bottom: 1px solid #c9c9c9;
          }
          .data__wallet {
            border: 1px solid #c9c9c9;
            border-radius: 20px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 15px 0;
            padding: 0 20px;
          }
          .data__wallet .sol,
          .data__wallet .gero {
            display: inline-block;
            width: 30px;
            margin: 0;
            height: 30px;
            background: url("/icon_cate_13.svg") 100% / 100% no-repeat;
          }
          .data__wallet .gero {
            background: url("/icon_graph_03.svg") 100% / 100% no-repeat;
            font-family: "GmarketSansLight";
            font-weight: 800;
          }
          .data__wallet span:last-of-type {
            color: #00b4e6;
          }

          p {
            font-family: "GmarketSansLight";
            font-weight: 800;
          }
          .button__image:hover figure {
            background: url("/icon_wlt_hv.svg") 100% / 100% no-repeat;
          }
          .main__total {
            margin: 20px 0;
          }
          h4 {
            color: #00b4e6;
            font-family: "GmarketSansLight";
            font-weight: 800;
            margin: 0;
            font-size: 24px;
            background: url("/icon_cate_12.svg") 30% / 10% no-repeat;
          }
          .plus {
            background: url("/icon_mrgr.svg") 50% / 25% no-repeat;
            height: 90px;
            cursor: pointer;
          }
          .plus:hover {
            background: url("/icon_mrbk.svg") 50% / 25% no-repeat;
            height: 90px;
          }
          .setting,
          .logOut {
            height: 50px;
            line-height: 63px;
            padding: 0 20px;
            text-align: left;
            padding-left: 50px;
            cursor: pointer;
            border-top: 1px solid #c9c9c9;
          }
          .setting:hover,
          .logOut:hover {
            color: #00b4e6;
          }
          .setting {
            background: url("/icon_setting.svg") 6% 75% / 8% no-repeat;
          }
          .logOut {
            background: url("/icon_logout.svg") 6% 75% / 8% no-repeat;
          }
          .planets {
            padding: 5px 0 5px 20px;
            text-align: left;
            }
            .planets figure {
                width: 30px;
                margin: 0 10px 0 0;
                border-radius: 50%;
                vertical-align: middle;
                display: inline-block;
                height: 30px;
            background: url("/article-img.png") center / 100% no-repeat;
          }
        `}
      </style>
    </div>
  );
}
