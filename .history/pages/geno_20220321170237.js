import { useRouter } from "next/router";
import Image from "next/image";
import react, { useState } from "react";
import styles from "../styles/Home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function Geno() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // appendDots: dots => (
    //   <div
    //     style={{
    //       backgroundColor: "#ddd",
    //       borderRadius: "10px",
    //       padding: "10px"
    //     }}
    //   >
    //     <ul style={{ margin: "0 20px",color: "red"}}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: i => (
    //   <div
    //     style={{
    //       width: "400px",
    //       float: 'left',
    //       color: "blue",
    //       border: "1px blue solid"
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // )
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        type="button"
        className={styles.sliderBtnNext}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        type="button"
        style={{ zIndex: 1 }}
        className={styles.sliderBtnPrev}
        onClick={onClick}
      />
    );
  }
  return (
    <div className="genosMain">
      <h1 className="genoWord">Geno`s World</h1>
      <p className="headerText">
        When the judgement`s weak, The prejudice is strong.
        <br />
        Joined 01.01.2022
      </p>
      <button className="btnGenomData">Genome Data Download</button>

      <div className="totalBalabceBlock">
        <h2>Total balance (USD)</h2>
        <p className="balance">0.00</p>
      </div>
      <div className="sol">
        <div className="count">
          <Image src="/icon_cate_13.svg" width={50} height={50} alt="icon" />
          <span>SOL</span>
          <span>0.00</span>
        </div>
        <div className="token">
          <span>0xd5b8848a29ab901b63910ce175c55be4648953d8</span>
          <button>Copy</button>
          <div className="menu">
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="sol">
        <div className="count">
          <Image src="/icon_graph_03.svg" width={50} height={50} alt="icon" />
          <span>GERO</span>
          <span>0.00</span>
        </div>
        <div className="token">
          <span>0xd5b8848a29ab901b63910ce175c55be4648953d8</span>
          <button>Copy</button>
          <div className="menu">
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
      <h2 className="planetsHeader">Planets</h2>
      <div className="planets">
        <div className="planetItems">
          <Image src="/planet-img-01.png" width={650} height={325} alt="item" />
          <b style={{ backgroundImage: "url(/icon_ba.svg)" }} />
          <h2>Genom NFT</h2>
          <p className="planetRslt">Sequencing date ?? 01.01.2022</p>
          <p className="planetRslt">Genome coverage ?? 154.7x</p>
          <div className="lastString">
            <span>8</span>
            <span>305</span>
          </div>
        </div>
        <div className="planetItems">
          <Image src="/planet-img-02.png" width={650} height={325} alt="item" />
          <b style={{ backgroundImage: "url(/planet-img-01.png)" }} />
          <h2>Geno's Colections</h2>
          <p className="planetRslt">Genome store</p>
          <div className="lastString">
            <span>8</span>
            <span>305</span>
          </div>
        </div>
        <div className="planetItems">
          <Image src="/article-img.png" width={650} height={325} alt="item" />
          <b style={{ backgroundImage: "url(/planet-img-01.png)" }} />
          <h2>NYC Underground Stories</h2>
          <p className="planetRslt">Genome store</p>
          <div className="lastString">
            <span>8</span>
            <span>305</span>
          </div>
        </div>
        <div className="planetItems">
          <Image src="/planet-img-02.png" width={650} height={325} alt="item" />
          <b style={{ backgroundImage: "url(/planet-img-01.png)" }} />
          <h2>Genome Store</h2>
          <p className="planetRslt">Genome store</p>
          <div className="lastString">
            <span>8</span>
            <span>305</span>
          </div>
        </div>
        <div className="plus" />
      </div>
      <div className="subscribePlanets">
        <h2 className="planetsHeader"> Subscribe Planets</h2>
        <div className={styles.sliderWraper}>
          <Slider {...settings}>
            <div className="planetItems" style={{padding: 20}}>
              <Image
                src="/planet-img-02.png"
                width={650}
                height={325}
                alt="item"
              />
              <b style={{ backgroundImage: "url(/planet-img-01.png)" }} />
              <h2>Genome Store</h2>
              <p className="planetRslt">Genome store</p>
              <div className="lastString">
                <span>8</span>
                <span>305</span>
              </div>
            </div>
            <div className="planetItems" style={{padding: 20}}>
              <Image
                src="/planet-img-02.png"
                width={650}
                height={325}
                alt="item"
              />
              <b style={{ backgroundImage: "url(/planet-img-01.png)" }} />
              <h2>Genome Store</h2>
              <p className="planetRslt">Genome store</p>
              <div className="lastString">
                <span>8</span>
                <span>305</span>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <style jsx>{`
        * {
          font-family: "GmarketSansMedium";
        }
        .genosMain {
          width: 69%;
          margin: 80px auto;
        }
        .genoWord {
          font-size: 38px;
          font-family: "GmarketSansMedium";
          font-weight: 400;
          line-spacing: 1.5px;
          margin: 0;
        }
        .headerText {
          font-size: 20px;
          margin: 0;
          line-height: 40px;
          font-weight: 700;
          color: #333;
          font-family: "GmarketSansLight";
        }
        .btnGenomData {
          width: 400px;
          font-size: 20px;
          height: 44px;
          margin: 20px 0;
          background-color: #f3f3f3;
          border-radius: 20px;
          border: 1px solid #c9c9c9;
          text-align: center;
          line-height: 43px;
        }
        .totalBalabceBlock {
          width: 100%;
          height: 290px;
          border-radius: 10px;
          border: 1px solid #c9c9c9;
          margin-top: 150px;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          background-color: #ebebeb;
          position: relative;
        }
        .totalBalabceBlock:before {
          content: "Wallet";
          font-size: 30px;
          top: -90px;
          position: absolute;
        }
        .totalBalabceBlock h2 {
          font-size: 31px;
          font-family: "GmarketSansLight";
          font-weight: 600;
        }
        .balance {
          font-size: 55px;
          font-family: "GmarketSansBold";
          color: #00b4e6;
          line-height: 0;
          margin-left: 50px;
          position: relative;
        }
        .balance:before {
          content: url("/icon_cate_12.svg");
          width: 55px;
          height: 55px;
          display: inline-block;
          position: absolute;
          top: -32px;
          left: -70px;
        }
        .sol {
          border: 1px solid #c9c9c9;
          border-radius: 10px;
          margin: 50px 0;
          position: relative;
          height: 120px;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .count {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 23%;
          font-size: 28px;
        }
        .count span:last-of-type {
          font-family: "GmarketSansMedium";
          font-weight: 700;
          font-size: 34px;
          color: #00b4e6;
        }
        .token {
          width: 60%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .menu {
          width: 40px;
          height: 40px;
          display: inline-block;
          text-align: right;
          text-align: center;
          cursor: pointer;
        }
        .menu p {
          margin: 5px auto;
          width: 5px;
          height: 5px;
          background-color: #333;
        }
        .token span {
          color: #c9c9c9;
          font-weight: 400;
          font-size: 20px;
          font-family: "GmarketSansLight";
        }
        .token button {
          color: #00b4e6;
          border: none;
          font-size: 18px;
          background-color: #fff;
          font-family: "GmarketSansMedium";
          position: relative;
        }
        .token button:before {
          content: url("/icon_cp.svg");
          display: inline-block;
          width: 25px;
          margin-right: 10px;
          position: absolute;
          left: -25px;
        }
        .token button:hover {
          color: #000;
        }
        .token button:hover:before {
          content: url("/icon_cp_hv.svg");
          display: inline-block;
          width: 25px;
          margin-right: 10px;
          position: absolute;
          left: -25px;
        }
        .planets {
          display: flex;
          justify-content: space-between;
          display: flex;
          flex-wrap: wrap;
        }
        .planetsHeader {
          margin: 180px 0 80px;
          text-align: center;
          font-size: 30px;
          font-family: "GmarketSansLight";
        }
        .planetRslt {
          margin: 0;
          font-family: "GmarketSansLight";
          font-size: 18px;
        }
        .planetItems {
          margin-bottom: 30px;
          border: 2px solid #ddd;
          border-radius: 10px;
          width: 635px;
          height: 535px;
          text-align: center;
          position: relative;
          background-color: #f3f3f3;
        }
        .planetItems:first-of-type {
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
        .planetItems h2 {
          font-size: 34px;
          font-family: "GmarketSansMedium";
          font-weight: 400;
          margin: 0;
        }
        .planetItems b {
          border-radius: 50%;
          border: 3px solid #fff;
          width: 70px;
          height: 70px;
          position: relative;
          background-color: aliceblue;
          z-index: 12;
          margin-top: -50px;
          display: inline-block;
          background-repeat: no-repeat;
          background-size: 100%;
          background-position: center;
        }
        .lastString {
          position: absolute;
          width: 90%;
          border-top: 1px solid #ddd;
          margin: 0 auto;
          padding: 20px 0;
          bottom: 5px;
          left: 5%;
        }
        .lastString span:last-of-type {
          float: right;
          font-size: 18px;
          color: #00b4e6;
        }
        .lastString span:first-of-type {
          float: left;
          font-size: 18px;
          color: #00b4e6;
        }
        .lastString span:last-of-type:before {
          content: "subscribers";
          font-size: 18px;
          margin-right: 10px;
          color: #333;
        }
        .lastString span:first-of-type:before {
          content: "Items";
          font-size: 18px;
          margin-right: 10px;
          color: #333;
        }
        .plus {
          background-image: url("/icon_mrwt.svg");
          background-repeat: no-repeat;
          background-size: 23%;
          height: 500px;
          width: 48%;
          background-color: #ebebeb;
          border: 1px solid #c9c9c9;
          border-radius: 10px;
          background-position: center;
        }
        .plus:hover {
          background-image: url("/icon_mrbk.svg");
        }
        .publicOn {
          height: 30px;
          width: 60px;
          position: relative;
          top: 6px;
          display: inline-block;
          background-color: "#c9c9c9";
          -webkit-transition: 0.5s;
          transition: 0.4s;
          border-radius: 20px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
