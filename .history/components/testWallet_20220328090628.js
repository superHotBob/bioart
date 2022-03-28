import Button from "./button";
import Image from "next/image";
export default function WalletError() {
  return (
    <div className="main">
      <p>Wallet</p>
      <p className="main__text">Connect with wallet or create a new one.</p>
      <Button
        text="Phantom"
        color="#000"
        background="#fff"
        width="100%"
        color_hover="#fff"
        background_hover="#00b4e6"
        class="button"
      />
      <figure />

      <style jsx>
        {`
          .main {
            position: absolute;
            right: -7vw;
            width: 280px;
            top: 0;
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
            top: 66%;
            left: 6px;
            background: url("/icon_wlt.svg") 100% / 100% no-repeat;
          }
          p {
            font-family: "GmarketSansLight";
            font-weight: 800;
          }
          .button:hover + figure {
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
