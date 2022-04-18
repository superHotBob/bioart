import Button from "../../components/button";
import react, { useEffect, useState } from "react";

export default function CreateNewPlanetOne() {
  const [myscreen, setMyScreen] = useState(true);
  useEffect(() => setMyScreen(window.screen.width > 500), []);

  return (
    <div className="createNewBlock">
      <h1>Create New Planet</h1>
      <p>Upload your genomic data or create a generic planet.</p>
      <div className="twoBloks">
        <div className="genome">
          <div />
        </div>
        <div className="common"></div>
      </div>
      <div style={{textAlign: 'right',marginBottom: 150}}>
        <Button
          width={myscreen ? "30%" : "100%"}
          color="#fff"
          background="#be0000"
          text="Cancel"
          background_hover="#8b0000"
        />
      </div>
      <style jsx>{`
        .createNewBlock {
          width: 68%;
          height: 80vh;
          margin: 0 auto;
          padding-top: 60px;
        }
        h1 {
          font-size: 38px;
          font-family: "GmarketSansMedium";
          font-weight: 400;
        }
        p {
          font-weight: 600;
          font-family: "GmarketSansLight";
          font-size: 18px;
          color: #333;
        }
        .twoBloks {
          display: flex;
          justify-content: space-between;
          margin-top: 130px;
        }
        .genome,
        .common,
        .genome div {
          width: 48.5%;
          height: 28vw;
          border-radius: 10px;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 120px;
          cursor: pointer;
        }
        .genome {
          border: 2px solid transparent;
          background: linear-gradient(#f3f3f3, #f3f3f3) padding-box,
            linear-gradient(
                150deg,
                rgba(0, 0, 255, 1) 0%,
                rgba(152, 0, 255, 1) 41%,
                rgba(255, 0, 255, 1) 68%,
                rgba(255, 0, 0, 1) 100%
              )
              border-box;
        }
        .genome div {
          background-image: url("/icon_upbk.svg");
          width: 100%;
          margin-top: 16px;
        }
        .genome div:hover {
          background-image: url("/icon_upwt.svg");
        }
        .genome:before {
          content: "Genome";
          font-family: "GmarketSansMedium";
          display: block;
          margin-top: -50px;
          font-size: 22px;
        }
        .common {
          background-color: #ebebeb;
          border: 1px solid #c9c9c9;
          background-image: url("/icon_mrwt.svg");
        }
        .common:hover {
          background-image: url("/icon_mrbk.svg");
        }
        .common:before {
          content: "Common";
          font-family: "GmarketSansMedium";
          display: block;
          margin-top: -50px;
          font-size: 22px;
        }
       
        @media screen and (max-width: 550px) {
          .createNewBlock {
            width: 96%;
            height: auto;
            margin: 0 auto;
            padding-top: 60px;
          }
          .twoBloks {
            flex-direction: column;
          }
          .genome,
          .common,
          .genome div {
            width: 100%;
            height: 98vw;
            margin-bottom: 50px;
          }
        }
      `}</style>
    </div>
  );
}
