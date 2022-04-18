import { useRouter } from "next/router";
import Image from "next/image";
import react, { useState, useEffect } from "react";
import strelka from "../../public/strelka.png";
import styles from "../../styles/Home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import SideMenu from "../../components/sidemenu";

const offers = [
  { price: 0.00001, expiration: "in 5 mounths", from: "You" },
  { price: 0.00001, expiration: "in 5 mounths", from: "Bob" },
  { price: 0.00011, expiration: "in 2 mounths", from: "Fill" },
];
const text = `
Hi everyone, this collection is all about enjoying and cherishing
the small things in life. Appreciate all that you have. Soak in all
the peace that nature has to offer, and be present. Lead with love
and kindness, it will take you to a beautiful place. Hi everyone,
this collection is all about enjoying and cherishing the small
things in life. Appreciate all that you have. Soak in all the peace`;

export default function NFT() {
  const [myscreen, setMyScreen] = useState(true);
  useEffect(() => setMyScreen(window.screen.width > 500), []);
  const [viewText, setViewText] = useState(false);
  const [viewOffers, setViewOffers] = useState(false);
  const [viewLog, setViewLog] = useState(false);
  const [viewComment, setViewComment] = useState(false);
  const [viewListing, setViewListing] = useState(false);
  const [viewHistory, setViewHistory] = useState(false);
  const [sidemenu, viewSideMenu] = useState(false);
  const [viewInfo, setViewInfo] = useState(false);

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        type="button"
        className={styles.sliderBtnNext}
        style={{ zIndex: 1, top: "52%" }}
        onClick={onClick}
      />
    );
  }
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        type="button"
        style={{ zIndex: 1, top: "52%" }}
        className={styles.sliderBtnPrev}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: myscreen ? 4 : 2,
    slidesToScroll: myscreen ? 4 : 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="mainNft">
      <div style={{ margin: "20px 0", position: "relative" }}>
        <div className="menu" onClick={() => viewSideMenu(!sidemenu)}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        {sidemenu && <SideMenu />}
      </div>
      <div className="mobileYes" style={{ width: "100%", marginBottom: 10 }}>
        <span>
          Owner by <b style={{ color: "rgb(0, 180, 230)" }}>you</b>
        </span>
        <span
          className="view"
          style={{
            marginTop: "-5px",
            alignItems: "center",
            float: "right",
            width: "38%",
          }}
        >
          <b>
            <Image src="/icon_view.svg" width={30} height={30} alt="icon" />
          </b>
          <b className="bold">100</b>
          <span>View</span>
        </span>
      </div>
      <div>
        <div className="image" />
        <div className="content">
          <a>BioArts</a>|<a style={{ marginLeft: 10 }}>bioarts.net</a>
          <h1>
            BioArts for Humans -<br /> # Night Explorer
          </h1>
          <p>{text}</p>
          <div className="viewText" onClick={() => setViewText(!viewText)} />
          <div className="lastString">
            <div
              className="mobileNo"
              style={{ flexGrow: 4, textAlign: "left" }}
            >
              Owner by{" "}
              <b className="blue" style={{ margin: "0 5px", padding: 0 }}>
                you
              </b>
            </div>
            <div className="view mobileNo">
              <b>
                <Image src="/icon_view.svg" width={30} height={30} alt="icon" />
              </b>
              1<span>View</span>
            </div>
            <div className="comment">
              <b>
                <Image
                  src="/icon_bubblebk.svg"
                  width={30}
                  height={30}
                  alt="icon"
                />
              </b>
              1<span>Comment</span>
            </div>
            <div className="like">
              <b>
                <Image
                  src="/icon_like_on.svg"
                  width={30}
                  height={30}
                  alt="icon"
                />
              </b>
              1<span>Like</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 50, height: "auto" }}>
        <div className="sale">
          <h3>
            Sale end April 25,
            <br /> 2020 at 10:15 KST
          </h3>
          <p>Minimum bid</p>

          <div>
            <b className="big blue">0.00</b>($ 0.00)
            <span style={{ margin: 5, verticalAlign: "middle" }}>
              <Image src={strelka} width="20" height="20" alt="strelka" />{" "}
            </span>
          </div>
          <div className="saleBottom">Enter Bid</div>
        </div>
        <div className="commemtListingInfo">
          <div className="viewOffers" style={{ marginTop: 0 }}>
            <h3 className="offer_comment">
              Comment 223
              <b>
                <Image
                  src={viewComment ? "/icon_vwar_02.svg" : "/icon_vwar_01.svg"}
                  width={30}
                  height={30}
                  alt="icon"
                  onClick={() => setViewComment(!viewComment)}
                />
              </b>
            </h3>
            {viewComment && (
              <div className="datablock">
                <div className="one_comment">
                  <figure
                    style={{
                      background:
                        "url(/article-img.png) center / 100% no-repeat",
                    }}
                  />
                  <div className="main_comment">
                    <b className="bold">Geny</b>
                    Good piece of work.
                    <p>
                      <figure
                        style={{
                          border: "none",
                          verticalAlign: "middle",
                          outline: "none",
                          background:
                            "url(/icon_like_off.svg) center / 80% no-repeat",
                        }}
                      />
                      245
                      <span> 2 days ago</span>
                      <b> . . .</b>
                    </p>
                  </div>
                </div>
                <div className="one_comment">
                  <figure
                    style={{
                      background:
                        "url(/article-img.png) center / 100% no-repeat",
                    }}
                  />{" "}
                  <div className="main_comment">
                    <b className="bold">Geny</b>
                    It`s so pretty and I love this picture. thank you.
                    <p>
                      <figure
                        style={{
                          border: "none",
                          verticalAlign: "middle",
                          outline: "none",
                          background:
                            "url(/icon_like_on.svg) center / 80% no-repeat",
                        }}
                      />
                      245
                      <span> 2 days ago</span>
                      <b> . . .</b>
                    </p>
                  </div>
                </div>

                <div className="inputComment">
                  <input type="text" placeholder="Comment" />
                  <button>Send</button>
                </div>
              </div>
            )}
          </div>
          {/* Listing */}
          <div className="viewOffers">
            <h3 className="listing">
              Listing
              <b>
                <Image
                  src={viewListing ? "/icon_vwar_02.svg" : "/icon_vwar_01.svg"}
                  width={30}
                  height={30}
                  alt="icon"
                  onClick={() => setViewListing(!viewListing)}
                />
              </b>
            </h3>
            {viewListing && (
              <div className="datablock">
                <p
                  className="headerData bold"
                  
                >
                  <span>Price</span>
                  <span className="mobileNo">
                    Expiration
                  </span>
                  <span>From</span>
                  <span> </span>
                </p>
                {offers.map((i, index) => (
                  <div key={index} className="headerData data">
                    <span>
                      <b className="solana blue">{i.price}</b><br/>
                      <b>$316.46</b>
                    </span>
                    <span className="mobileNo">
                      {i.expiration}
                    </span>
                    <span>
                      <b className="blue" style={{padding: 0}}>{i.from}</b><br/>
                      <b className="mobileYes">May 22, 2022</b>
                    </span>
                    <span>
                      <figure className="delete_listing" />
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* info */}
          <div className="viewOffers">
            <h3 className="info">
              Info
              <b>
                <Image
                  src={viewOffers ? "/icon_vwar_02.svg" : "/icon_vwar_01.svg"}
                  width={30}
                  height={30}
                  alt="icon"
                  onClick={() => setViewInfo(!viewInfo)}
                />
              </b>
            </h3>
            {viewInfo && (
              <div className="datablock info_block">
                <p>
                  <span>Contract Address</span>
                  <span className="blue">0xb47e...3bbb</span>
                </p>
                <p>
                  <span>Token ID</span>
                  <span>3100</span>
                </p>
                <p>
                  <span>Token Standard</span>
                  <span>CryptoPunks</span>
                </p>
                <p>
                  <span>Blockchain</span>
                  <span>Solane</span>
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="offerPiceList">
          <Link href="/sell" passHref>
            <div className="BlockPriceOffer">Price Offer</div>
          </Link>
          {/* OFFERS */}
          <div className="viewOffers">
            <h3 className="offers">
              Offers
              <b>
                <Image
                  src={viewOffers ? "/icon_vwar_02.svg" : "/icon_vwar_01.svg"}
                  width={30}
                  height={30}
                  alt="icon"
                  onClick={() => setViewOffers(!viewOffers)}
                />
              </b>
            </h3>
            {viewOffers && (
              <div className="datablock">
                <p className="headerData bold">
                  <span>Price</span>
                  <span className="mobileNo">Expiration</span>
                  <span style={{textAlign: 'center'}}>From</span>
                  <span></span>
                </p>
                {offers.map((i, index) => (
                  <div key={index} className="headerData data">
                    <span>
                      <b className="solana blue"> {i.price}</b>
                      <br />
                      <b>$ 314.46</b>
                    </span>
                    <span className="mobileNo">{i.expiration}</span>
                    <span>
                      <b className="blue" style={{ padding: 0 }}>{i.from}</b><br/>
                      <b className="mobileYes">May 22, 2022</b>
                    </span>
                    <span>
                      <figure className="delete_listing" />
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="viewOffers">
            <h3 className="history">
              Price History
              <b>
                <Image
                  src={viewHistory ? "/icon_vwar_02.svg" : "/icon_vwar_01.svg"}
                  width={30}
                  height={30}
                  alt="icon"
                  onClick={() => setViewHistory(!viewHistory)}
                />
              </b>
            </h3>
            {viewHistory && (
              <div className="datablock">
                <div style={{ height: 50 }}>
                  <select>
                    <option value="7">Last 7 Days</option>
                  </select>
                </div>
                <div style={{ textAlign: "right", margin: "10px 0" }}>
                  All Time Avg.Price <span className="solana blue">0.1</span>
                </div>
              </div>
            )}
          </div>
          {/* Item log */}
          <div className="viewOffers">
            <h3 className="log">
              Item log
              <b>
                <Image
                  src={viewLog ? "/icon_vwar_02.svg" : "/icon_vwar_01.svg"}
                  width={30}
                  height={30}
                  alt="icon"
                  onClick={() => setViewLog(!viewLog)}
                />
              </b>
            </h3>
            {viewLog && (
              <div className="datablock">
                <div style={{ height: 50 }}>
                  <select>
                    <option value="7">Filter</option>
                  </select>
                </div>
                <div className="filterLog">
                  <span>Sales x</span>
                  <span>Transfer x</span>
                </div>
                <p className="headerData bold">
                  <span className="mobileNo">Event</span>
                  <span>Price</span>
                  <span className="mobileNo">From</span>
                  <span className="mobileYes">From / To</span>
                  <span className="mobileNo">To</span>
                </p>
                {[1, 2, 3, 4].map((i, index) => (
                  <p key={index} className="headerData">
                    <span className="mobileNo">
                      List <br />7 days ago
                    </span>
                    <span>
                      <b
                        
                        className="mobileYes"
                      >
                        Minted | 7 days ago
                      </b>{" "}
                      <br />
                      <b className="solana blue">0.0001</b>
                </span>
                      <b className="mobileNo">$316.46</b>
                  
                    <span className="blue mobileNo" style={{ padding: 0 }}>
                      You
                    </span>
                    <span className="mobileYes you__bioarts">
                      You / BioArts
                    </span>
                    <span className="blue mobileNo" style={{ padding: 0 }}>
                      You
                    </span>
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        <section className={styles.sliderNft} style={{ marginTop: 150 }}>
          <h2 style={{ textAlign: "center" }}>More from this Planet</h2>
          <div style={{ height: "auto" }} className={styles.sliderWraperNft}>
            <Slider {...settings}>
              {Array(8)
                .fill(1)
                .map((i, index) => (
                  <div className="itemSliderNft" key={index}>
                    <Link href="/nft/one" passHref>
                      <div
                        className="itemSliderImageNft"
                        style={{
                          paddingTop: "89%",
                          height: "100%",
                          marginBottom: 0,
                          backgroundImage: "url(/article-img.png)",
                        }}
                      >
                        <span className="iconItemNft">
                          <Image
                            src="/icon_ba.svg"
                            width={60}
                            height={60}
                            alt="icon"
                          />
                        </span>
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
                        <p>Artistic Transformation of Life into Information.</p>

                        <h5>
                          <b>
                            <Image
                              src="/icon_like_on.svg"
                              width={25}
                              height={25}
                              alt="icon"
                            />{" "}
                          </b>
                          <span style={{ flexGrow: 8, textAlign: "left" }}>
                            15
                          </span>
                          <b>
                            <Image
                              src="/icon_bubble.svg"
                              width={25}
                              height={25}
                              alt="icon"
                            />
                          </b>
                          <span>25</span>
                        </h5>
                      </div>
                    </Link>
                  </div>
                ))}
            </Slider>
          </div>
          <button className="viewItemBtn">View Planet</button>
        </section>
      </div>

      <style jsx>{`
        a {
          color: #00b4e6 !important;
          margin-right: 10px;
          letter-spacing: 1.5px;
          font-size: 18px;
        }
        :not(b) {
          font-family: "GmarketSansLight";
          font-weight: 800;
        }
        h1 {
          font: 400 38px/38px "GmarketSansMedium";
        }
        h3 {
          padding: 0 20px 0 60px;
          height: 80px;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
          margin: 0;
          font: 400 22px/80px "GmarketSansMedium";
        }
        h3 span:before {
          width: 25px;
          position: absolute;
          top: 6px;
          left: -40px;
        }
        h3 b {
          margin-top: 10px;
          float: right;
          cursor: pointer;
        }
        .mainNft {
          width: 70%;
          margin: 0 auto;
          height: auto;
          position: relative;
        }
        .menu {
          width: 40px;
          height: 40px;
          margin: 10px 0 0 97%;
          border: 1px solid #ddd;
          border-radius: 10px;
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
        .image {
          height: 500px;
          width: 40%;
          margin: 0;
          border-radius: 10px;
          display: inline-block;
          background-image: url("/article-img.png");
          background-size: 100%;
          background-position: center top;
        }
        .content {
          height: 500px;
          width: 58%;
          vertical-align: top;
          margin-left: 2%;
          display: inline-block;
          position: relative;
        }
        .content p {
          font: 800 20px/25px "GmarketSansLight";
          height: ${viewText ? "auto" : "100px"};
          color: #333;
          -webkit-mask-image: ${viewText
            ? "none"
            : `-webkit-gradient(linear, left top, left bottom, 
            from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))`};
        }
        .viewText {
          height: 30px;
          background: url(${viewText
              ? "/icon_vwar_01.svg"
              : "/icon_vwar_02.svg"})
            center / 5% no-repeat;
        }
        .viewText:hover {
          background: url(${viewText
              ? "/icon_vwar_01_hv.svg"
              : "/icon_vwar_02_hv.svg"})
            center / 5% no-repeat;
        }
        .lastString {
          font-family: "GmarketSansMedium";
          font-weight: 400;
          font-size: 16px;
          display: flex;
          line-height: 26px;
          position: absolute;
          bottom: -5px;
          width: 100%;
          height: 40px;
          justify-content: space-between;
          text-align: right;
        }
        .view,
        .comment,
        .like {
          flex-grow: 1;
          display: flex;
          justify-content: space-around;
          margin-left: 15px;
        }
        .lastString div b {
          margin-top: -5px;
        }
        .commemtListingInfo {
          width: 40%;
          margin: 0;
          display: inline-block;
        }
        .main_comment {
          display: inline-block;
          width: 80%;
        }
        .offerPiceList {
          width: 58%;
          vertical-align: top;
          margin-left: 2%;
          display: inline-block;
        }
        .BlockPriceOffer {
          border-radius: 12px;
          text-align: center;
          margin-bottom: 30px;
          background-color: #be0000;
          color: #fff;
          border: 1px solid #d9d9d9;
          font: 400 22px/60px "GmarketSansMedium";
        }
        .BlockPriceOffer:hover {
          background-color: #f3f3f3;
          color: #000;
        }
        .viewOffers,
        .sale {
          width: 100%;
          margin-bottom: 30px;
          height: auto;
          border: 1px solid #c9c9c9;
          border-radius: 10px;
        }
        .sale {
          height: 330px;
          text-align: center;
          position: relative;
        }
        .sale h3 {
          line-height: 25px;
          text-align: left;
        }
        .saleBottom {
          position: absolute;
          width: 100%;
          border-bottom-left-radius: 6px;
          border-bottom-right-radius: 6px;
          bottom: 0;
          color: #fff;
          background: #00b4e6;
          cursor: pointer;
        }
        .sale p,
        .saleBottom {
          font: 400 24px/60px "GmarketSansMedium";
          margin-bottom: 0;
        }
        .sale b {
          font: 800 34px/60px "GmarketSansMedium";
          padding: 0 10px 0 45px;
          background: url("/icon_graph_01.svg") left 12% / 30% no-repeat;
        }
        .info_block p {
          font-size: 18px;
          color: #333;
        }
        .info_block p span:last-of-type {
          float: right;
        }
        .iconSlider {
          margin: 0 auto;
          background-color: #fff;
          display: table;
          border-radius: 50px;
        }
        .iconGraph {
          margin: 0px 10px;
          vertical-align: top;
          display: inline-block;
        }
        h5 {
          width: 90%;
          margin: 10px auto;
          padding: 10px 0;
          border-top: 1px solid #c9c9c9;
          font-size: 18px;
          color: #333;
          display: flex;
          justify-content: space-between;
        }
        h5 b {
          margin: 0 5px 0 0;
          flex-grow: 1;
        }
        .viewItemBtn {
          width: 100%;
          background-color: #00b4e6;
          border-radius: 10px;
          color: #fff;
          border: none;
          font: 400 18px/60px "GmarketSansMedium";
          margin-bottom: 50px;
        }
        .viewItemBtn:hover {
          color: #000;
          background-color: #f3f3f3;
        }
        .itemSliderNft {
          height: auto;
          padding: 0 10px;
          text-align: center;
        }
        .itemSliderNft p:first-of-type {
          font-size: 26px;
          margin: 15px;
          font-family: "GmarketSansMedium";
          font-weight: 400;
        }
        .itemSliderNft p:last-of-type {
          font-size: 1vw;
          margin: 15px;
          font-family: "GmarketSansLight";
        }
        .itemSliderNft .img {
          margin: 15px;
        }
        .itemSliderImageNft {
          outline-offset: 3px;
          outline: 1px solid #ddd;
          background-size: 100% auto;
          border-radius: 10px;
          background-position: center top;
          height: 60%;
          margin-bottom: 40px;
          cursor: pointer;
        }
        .you__bioarts {
          width: 50%;
          color: rgb(0, 180, 230);
          font-size: 14px;
        }
        .itemSliderImageNft:hover {
          box-shadow: 0px 0px 12px 5px rgba(34, 60, 80, 0.2);
        }
        .inputComment {
          display: flex;
          margin: 50px auto 0;
          justify-content: space-between;
        }
        .inputComment input {
          height: 44px;
          width: 60%;
          font-family: "GmarketSansLight";
          font-size: 18px;
          border: 1px solid #c9c9c9;
          padding: 0 20px 0 30px;
          border-radius: 20px;
        }
        .inputComment button {
          height: 44px;
          width: 35%;
          border: 1px solid #c9c9c9;
          padding: 0 20px 0 30px;
          border-radius: 20px;
        }
        .inputComment button:hover {
          color: #fff;
          background-color: #00b4e6;
        }
        .datablock div select {
          float: right;
          width: 40%;
        }
        .datablock {
          padding: 20px;
        }
        .data .solana {
          width: 15%;
        }
        .headerData {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #c9c9c9;
          padding: 15px 0;
          margin: 0;
          font-size: 18px;
          font-family: "GmarketSansMedium";
          text-align: center;
        }
       
        .data span:first-of-type {
            text-align: left;
            padding-left: 10px;
          }
        .delete_listing {
          width: 30px;
          display: inline-block;
          height: 30px;
          cursor: pointer;
          background: url("/icon_cls_hv.svg") 89% 41% / 70% no-repeat;
        }
        .delete_listing:hover {
          background: url("/icon_cls.svg") 89% 41% / 70% no-repeat;
        }
        .data {
          font-family: "GmarketSansLight";
          font-weight: 800;
        }
        .headerData span {
          width: 20%;
          display: inline-block;
        }
        .offers {
          background: #f3f3f3 url("/icon_graph_08.svg") 16px 13px / 30px
            no-repeat;
        }
        .history {
          background: #f3f3f3 url("/icon_graph_01.svg") 16px center / 30px
            no-repeat;
        }
        .log {
          background: #f3f3f3 url("/icon_graph_10.svg") 16px center / 30px
            no-repeat;
        }
        .listing {
          background: #f3f3f3 url("/icon_pclbk.svg") 16px center / 30px
            no-repeat;
        }
        .sale h3 {
          background: #f3f3f3 url(/clock_sale.jpg) 16px 35% / 30px no-repeat;
          line-height: 30px;
          height: 100px;
          padding-top: 25px;
        }
        .offer_comment {
          background: #f3f3f3 url("/icon_bubblebk.svg") 16px 45% / 30px
            no-repeat;
        }
        .info {
          background: #f3f3f3 url("/icon_graph_09.svg") 16px 45% / 30px
            no-repeat;
        }
        .filterLog {
          text-align: right;
          margin: 20px 0 40px;
        }
        .filterLog span {
          font-size: 20px;
          margin-left: 30px;
        }
        .bold span {
          font-family: "GmarketSansMedium";
          font-weight: 800;
        }
        .one_comment {
          font-size: 20px;
          margin-bottom: 30px;
        }
        .one_comment b {
          margin-right: 10px;
        }
        .one_comment p {
          margin: 10px 0 0;
        }
        .one_comment figure {
          border-radius: 50%;
          margin-right: 15px;
          width: 40px;
          height: 40px;
          vertical-align: top;
          outline: 1px solid #ccc;
          border: 2px solid #fff;
        }
        .mobileYes {
          display: none !important;
        }
        .mobileNo {
          display: inline-block !important;
        }
        @media screen and (max-width: 1300px) {
          .mainNft {
            width: 80%;
          }
        }
        @media screen and (max-width: 550px) {
          .mobileYes {
            display: inline-block !important;
          }
          .mobileNo {
            display: none !important;
          }
          .image,
          .content,
          .commemtListingInfo,
          .offerPiceList {
            display: block;
            width: 98%;
            margin: 0 auto;
          }
          .content p {
            margin-top: 80px;
          }
          .image {
            height: 110vw;
          }
          .mainNft {
            width: 98%;
          }
          h1 {
            font-size: 25px;
          }
          .datablock div select {
            width: 100%;
          }
          .headerData {
            font-size: 16px;
          }
          .headerData  span {
            width: 48%;
            text-align: left;
            
          }
          .headerData b {
          font-size: 14px;
        }
          .menu {
            margin: 10px 0 0 86%;
          }
          .itemSliderImageNft p:last-of-type {
            font-size: 14px;
          }
          h3 {
            font-size: 18px;
          }
          h5 {
            font-size: 14px;
            align-items: center;
          }
          .lastString {
            width: 70%;
            bottom: 66%;
          }
          .comment {
            margin-left: 0;
          }
          .BtnPriceOffer {
            display: none;
          }
          .info_block p {
            font-size: 15px;
          }
          
          .headerData span:last-of-type {
            text-align: right;
            width: 25%;
          }
        }
      `}</style>
    </div>
  );
}
