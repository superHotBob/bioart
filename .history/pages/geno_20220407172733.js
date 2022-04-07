import Image from "next/image";
import styles from "../styles/Home.module.css";
import { sliderGenoOne, PrevArrow, NextArrow } from "../components/sliders";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import LastStringNft from "../components/lastStringNft";
import ConnectWallet from "../components/connectWallet";
import Wallet from "../components/wallet";
import react, { useState, useEffect } from "react";

export default function Geno() {
  const [wallet, setWallet] = useState(true);
  const [viewText, setViewText] = useState(false);
  const [myscreen, setMyScreen] = useState(true);
  useEffect(() => setMyScreen(window.screen.width > 500), []);
  const sliderGenoTwo = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: myscreen ? 4 : 2,
    slidesToScroll: myscreen ? 4 : 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const sliderGenoOne = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: myscreen ? 2 : 1,
    slidesToScroll: myscreen ? 2 : 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const MySetWallet = () => setWallet(!wallet);
  return (
    <div className="genosMain">
      <h1 className="genoWord">Geno`s World</h1>
      <p className="headerText">
        When the judgement`s weak, The prejudice is strong.
        <b className="pencil" />
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
          <span style={{ margin: "0 10px" }}>SOL</span>
          <span>0.00</span>
        </div>
        <div className="token">
          {myscreen && (
            <>
              <span>0xd5b8848a29ab901b63910ce175c55be4648953d8</span>
              <button>Copy</button>
            </>
          )}
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
          <span style={{ margin: "0 10px" }}>GERO</span>
          <span>0.00</span>
        </div>
        <div className="token">
          {myscreen && (
            <>
              <span>0xd5b8848a29ab901b63910ce175c55be4648953d8</span>
              <button>Copy</button>
            </>
          )}
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
          <div
            className="image"
            style={{
              backgroundImage: "url(/planet-img-01.png)",
            }}
          />
          <b style={{ backgroundImage: "url(/icon_ba.svg)" }} />
          <h2>Genom NFT</h2>
          <p className="planetRslt">Sequencing date · 01.01.2022</p>
          <p className="planetRslt">Genome coverage · 154.7x</p>
          <div className="lastString">
            <span>8</span>
            <span>305</span>
          </div>
        </div>
        <div className="planetItems">
          <div
            className="image"
            style={{ backgroundImage: "url(/planet-img-02.png)" }}
          />
          <b style={{ backgroundImage: "url(/planet-img-01.png)" }} />
          <h2>Geno`s Colections</h2>
          <p className="planetRslt">Genome store</p>
          <div className="lastString">
            <span>8</span>
            <span>305</span>
          </div>
        </div>
        <div className="planetItems">
          <div
            className="image"
            style={{ backgroundImage: "url(/article-img.png)" }}
          />
          <b style={{ backgroundImage: "url(/planet-img-01.png)" }} />
          <h2>NYC Underground Stories</h2>
          <p className="planetRslt">Genome store</p>
          <div className="lastString">
            <span>8</span>
            <span>305</span>
          </div>
        </div>
        <div className="planetItems">
          <div
            className="image"
            style={{ backgroundImage: "url(/planet-img-02.png)" }}
          />
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
        <Image src="/icon_graph_04.svg" width={70} height={70} alt="icon" />
        <div className={styles.sliderWraper} style={{ width: "100%" }}>
          <Slider {...sliderGenoOne}>
            <div className="planetItems slider">
              <div
                className="image"
                style={{ backgroundImage: "url(/article-img.png)" }}
              />
              <b style={{ backgroundImage: "url(/icon_ba.svg)" }} />
              <h2>Genom NFT</h2>
              <p className="planetRslt">Sequencing date · 01.01.2022</p>
              <p className="planetRslt">Genome coverage · 154.7x</p>
              <div className="lastString">
                <span>8</span>
                <span>305</span>
              </div>
            </div>
            <div className="planetItems slider" style={{ width: "98%" }}>
              <div
                className="image"
                style={{ backgroundImage: "url(/flower.png)" }}
              />
              <b style={{ backgroundImage: "url(/planet-img-01.png)" }} />
              <h2>Genome Store</h2>
              <p className="planetRslt">Genome store</p>
              <div className="lastString">
                <span>8</span>
                <span>305</span>
              </div>
            </div>
            <div className="planetItems slider">
              <div
                className="image"
                style={{ backgroundImage: "url(/article-img.png)" }}
              />
              <b style={{ backgroundImage: "url(/planet-img-01.png)" }} />
              <h2>Genome Store</h2>
              <p className="planetRslt">Genome store</p>
              <div className="lastString">
                <span>8</span>
                <span>305</span>
              </div>
            </div>
            <div className="planetItems slider">
              <div
                className="image"
                style={{ backgroundImage: "url(/flower.png)" }}
              />

              <b style={{ backgroundImage: "url(/icon_ba.svg)" }} />
              <h2>Genom NFT</h2>
              <p className="planetRslt">Sequencing date · 01.01.2022</p>
              <p className="planetRslt">Genome coverage · 154.7x</p>
              <div className="lastString">
                <span>8</span>
                <span>305</span>
              </div>
            </div>
          </Slider>
        </div>
        <div className="likeBlok">
          <h2 className="planetsHeader">Like</h2>
          <Image src="/icon_graph_04.svg" width={70} height={70} alt="icon" />
          <div className={styles.sliderWraper} style={{ width: "100%" }}>
            <Slider {...sliderGenoTwo}>
              {Array(8)
                .fill(1)
                .map((i, index) => (
                  <>
                    <div className="itemSliderNft" key={index}>
                      <Link href="/nft/one" passHref>
                        <div
                          className="itemSliderImageNft"
                          style={{
                            paddingTop: "106%",
                            height: "100%",
                            marginBottom: 0,
                            backgroundImage:
                              index % 2 == 0
                                ? "url(/article-img.png)"
                                : "url(/cat.png)",
                          }}
                        />
                      </Link>

                      <b
                        className="iconSlider"
                        style={{ backgroundImage: "url(/icon_ba.svg)" }}
                      />
                      <p style={{ textAlign: "center" }}>
                        <b className="iconGraph">
                          <Image
                            src="/icon_graph_01.svg"
                            alt="icon"
                            width={30}
                            height={30}
                          />
                        </b>
                        <span>1.3</span>
                      </p>
                      <p
                        className="textNft"
                        onClick={() => setViewText(!viewText)}
                      >
                        Artistic Transformation
                        {viewText && <>...</>}
                        <span className="hide"> of Life into Information.</span>
                      </p>
                      <LastStringNft mobile={myscreen} />
                    </div>
                  </>
                ))}
            </Slider>
          </div>
        </div>
      </div>
      {wallet ? (
        <ConnectWallet wallet={MySetWallet} />
      ) : (
        <Wallet logOut={MySetWallet} />
      )}
      <style jsx>{`
        
        .image {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          height: 56%;
          background-size: cover;
          background-position: center top;
        }
        .genosMain {
          width: 69%;
          padding: 80px 0;
          margin: 0 auto;
          position: relative;
        }

        .genoWord {         
          font: 400 38px/38px "GmarketSansMedium";         
          line-spacing: 1.5px;
          margin: 0;
        }
        .headerText {
         
          margin: 0;
         
          color: #333;
          font: 700 20px/40px "GmarketSansLight";
        }
        .pencil {
          margin: 0 20px;
          height: 25px;
          width: 25px;
          display: inline-block;
          vertical-align: middle;
          cursor: pointer;
          background: url("/icon_pcl.svg") center / 100% no-repeat;
        }
        .pencil:hover {
          background: url("/icon_pclbk.svg") center / 100% no-repeat;
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
        .btnGenomData:hover {
          color: #fff;
          background-color: #00b4e6;
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
          font-family: "GmarketSansLight";
          font-weight: 600;
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
          font-size: 28px;
        }
        .count span:last-of-type {
          font-family: "GmarketSansMedium";
          font-weight: 700;
          font-size: 34px;
          color: #00b4e6;
        }
        .token {
          width: 66%;
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
        .menu:hover p {
          background-color: #00b4e6;
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
          border: 2px solid #ddd;
          border-radius: 10px;
          width: 48%;
          margin-bottom: 40px;
          height: 30vw;
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

        .planetItems b,
        .iconSlider {
          border-radius: 50%;
          border: 1px solid #c9c9c9;
          width: 70px;
          height: 70px;
          position: relative;
          background-color: aliceblue;
          padding: 1px 2px;
          z-index: 12;
          margin-top: -35px;
          display: inline-block;
          background-repeat: no-repeat;
          background-size: 96%;
          background-position: center;
        }
        .planetItems b {
          margin-top: -37px;
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
          width: 48.5%;
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
        .subscribePlanets {
          text-align: center;
        }
        .slider {
          border: 1px solid #d9d9d9 !important;
          width: 98% !important;
        }
        .itemSliderNft {
          height: auto;
          margin: 5px;
          text-align: center;
          border-radius: 10px;
          border: 1px solid #ddd;
        }
        .itemSliderNft p:first-of-type {
          font-size: 26px;
          margin: 15px;
          font-family: "GmarketSansMedium";
          font-weight: 400;
        }
        .textNft {
          width: 80%;
          margin: 15px auto;
          font: 300 18px/22px 'GmarketSansLight';
        }

        .itemSliderImageNft {
          border-bottom: 1px solid #ddd;
          background-size: cover;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          background-position: center top;
          background-repeat: no-repeat;
          height: 60%;
          margin-bottom: 40px;
          cursor: pointer;
        }
        .itemSliderNft:hover {
          box-shadow: 0px 0px 15px 2px rgba(34, 60, 80, 0.2);
        }

        @media screen and (max-width: 1300px) {
          .genosMain {
            width: 80%;
          }
          .token span {
            font-size: 15px;
          }
          .token {
            width: 68%;
          }
          .planetItems {
            height: 35vw;
          }
          .planetItems h2 {
            font-size: 28px;
          }
        }
        @media screen and (max-width: 550px) {
          .hide {
            display: ${viewText ? "inline-block" : "none"};
            font: 300 12px/16px  'GmarketSansLight';
          }
          .textNft {
            font: 300 12px/16px  'GmarketSansLight';
          }
          .genosMain {
            width: 96%;
            margin: 0 auto;
          }
          .planetItems {
            width: 100%;
            height: 96vw;
            margin-bottom: 20px;
          }
          .planetItems h2 {
            font-size: 20px;
          }
          .btnGenomData,
          .plus {
            width: 100%;
          }
          .sol {
            padding: 0 25px;
          }
          .token {
            width: 0;
          }
          .plus {
            height: 96vw;
          }
          .lastString {
            padding: 10px 0;
          }
          .lastString span:first-of-type:before,
          .lastString span:first-of-type,
          .lastString span:last-of-type,
          .lastString span:last-of-type:before {
            font-size: 12px;
          }
          .iconSlider {
            width: 50px;
            height: 50px;           
          }         
         
          .itemSliderNft p:first-of-type {
            font-size: 22px;
            margin: 0 0 5px;
          }
          .iconGraph {
            height: 21px;
            width: 21px;
            margin: 5px;
            vertical-align: text-bottom;
          }

          h5 span {
            font-size: 14px;
            font-family: "GmarketSansLight";
          }
          h5 b {
            height: 14px;
            width: 5px;
          }
          .planetsHeader {
            margin: 150px 0 35px;
          }
        }
      `}</style>
    </div>
  );
}
