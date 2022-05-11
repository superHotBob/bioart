import Button from "./button";





export default function InstallPhantom(props) {
 
  return (
    <div className="main">
      <p><b>No provider found</b></p>
      <p className="main__text">
         Install{" "}<br/>
        <a href="https://phantom.app/">Phantom Browser extension</a>
      </p>
      
      <style jsx>
        {`
          .main {
            position: absolute;
            right: 4vw;
            width: 280px;
            text-align: center;
            top: 90px;
            z-index: 100;
            display: ${props.view ? "block" : "none"};
            height: auto;
            padding: 50px 0;
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
            left: 30px;
            background: url("/icon_wlt.svg") 100% / 100% no-repeat;
          }
          p {
            font-family: "GmarketSansLight";
            font-weight: 800;
            line-height: 25px;
          }
          b {
            font-family: "GmarketSansBold"; 
          }
          a {
              color: #121fcf;
              text-decoration: underline;
              font-size: 20px;
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
