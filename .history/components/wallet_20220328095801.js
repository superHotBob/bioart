import Button from "./button";
export default function Wallet() {
  return (
    <div className="main">
      <p className="header">Geno`s World</p>
      <p>Wallet</p>
      <p className="main__text">Total balance (USD)</p>
      <div className="wallet">
        <div className="data__wallet">
          <figure /> <span>SOL</span>
          <span>0.00</span>
        </div>
        <div className="data__wallet">
          <figure /> <span>GERO</span>
          <span>0.00</span>
        </div>
      </div>
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
          }
          .wallet {
            padding: 20px;
          }
          .data__wallet {
            border: 1px solid #c9c9c9;
            border-radius: 20px;
            height: 44px;
            justify-content: space-between;
            margin: 15px 0;
            padding: 0 20px;
          }
          .data__wallet figure {
            display: inline-block;
            width: 30px;
            height: 30px;
           
            background: url("/icon_wlt.svg") 100% / 100% no-repeat;
          }
          p {
            font-family: "GmarketSansLight";
            font-weight: 800;
          }
          .button__image:hover figure {
            background: url("/icon_wlt_hv.svg") 100% / 100% no-repeat;
          }
          .main__text {
            margin: 30px 0;
          }
        `}
      </style>
    </div>
  );
}
