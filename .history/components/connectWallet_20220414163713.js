import Button from "./button";
export default function ConnectWallet(props) {
  return (
    <div className="main">
      <p>Wallet</p>
      <p className="main__text">Connect with wallet or create a new one.</p>
      <div className="button__image">
        <Button
          text="Phantom"
          color="#000"
          background="#fff"
          width="100%"
          color_hover="#fff"
          background_hover="#00b4e6"
          Click={props.wallet}
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
            margin-top: 7px;
            left: 42px;
            background: url("/icon_wlt.svg") 100% / 100% no-repeat;
          }
          p {
            font-family: "GmarketSansLight";
            font-weight: 800;
          }
          .button__image {
            position: relative;
          }
          .button__image:hover figure {
            background: url("/icon_wlt_hv.svg") 100% / 100% no-repeat;
          }
          .main__text {
            margin: 30px 0;
          }
          @media screen and (max-width: 550px) {
            .main {
              right: -8px;
              width: 100vw;
              border: none;
              background-color: #f3f3f3;
            }
            
          }
        `}
      </style>
    </div>
  );
}
