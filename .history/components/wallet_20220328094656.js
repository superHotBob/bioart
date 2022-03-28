import Button from "./button";
export default function Wallet() {
  return (
    <div className="main">
      <p className="header">Geno`s World</p>
      <p>Wallet</p>
      <p className="main__text">Total balance (USD)</p>
      <div className="button__image">
        <Button
          text="Phantom"
          color="#000"
          background="#fff"
          width="100%"
          color_hover="#fff"
          background_hover="#00b4e6"
        />
        <figure />
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
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #ebebeb;
            cursor: pointer;
          }
          figure {
            position: absolute;
            width: 30px;
            height: 30px;
            top: 65.5%;
            left: 6px;
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
