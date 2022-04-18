import { useRouter } from "next/router";
import Image from "next/image";
import react, { useState } from "react";
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

export default function NFT() {
  const router = useRouter();
  const [viewOffers, setViewOffers] = useState(false);
  const [viewLog, setViewLog] = useState(false);
  const [viewComment, setViewComment] = useState(false);
  const [viewListing, setViewListing] = useState(false);
  const [viewHistory, setViewHistory] = useState(false);
  const [sidemenu, viewSideMenu] = useState(false);
  const [viewInfo, setViewInfo] = useState(false);
  const { pid } = router.query;
  function SampleNextArrow(props) {
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
  function SamplePrevArrow(props) {
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
    slidesToShow: 4,
    slidesToScroll: 4,
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
  return (
    <div className="mainNft">
      <div style={{ margin: "50px 0", position: "relative" }}>
        <div className="menu" onClick={() => viewSideMenu(!sidemenu)}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        {sidemenu && <SideMenu />}
      </div>
      <div>
        <div className="image" />
        <div className="content">
          <a>BioArts</a>|<a style={{ marginLeft: 10 }}>bioarts.net</a>
          <h1>
            BioArts for Humans -<br /> # Night Explorer
          </h1>
          <p>
            Hi everyone, this collection is all about enjoying and cherishing
            the small things in life. Appreciate all that you have. Soak in all
            the peace that nature has to offer, and be present. Lead with love
            and kindness, it will take you to a beautiful place. Hi everyone,
            this collection is all about enjoying and cherishing the small
            things in life. Appreciate all that you have. Soak in all the peace
          </p>
          <div className="lastString">
            <div style={{ flexGrow: 4, textAlign: "left" }}>
              Owner by <b style={{ color: "#00b4e6" }}>you</b>
            </div>
            <div className="view">
              <b>
                <Image src="/icon_view.svg" width={30} height={30} alt="icon" />
              </b>
              <span>1</span>
              <span>View</span>
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

              <span>1</span>
              <span>Comment</span>
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
              <span>1</span>
              <span>Like</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 50, height: "auto" }}>
        <div className="commemtListingInfo">
          <div className="viewOffers" style={{ marginTop: 0 }}>
            <h3>
              <span className="comment">Comment</span>
              <b>
                <Image
                  src="/icon_vwar_02.svg"
                  width={30}
                  height={30}
                  alt="icon"
                  onClick={() => setViewComment(!viewComment)}
                />
              </b>
            </h3>
            {viewComment && (
              <div className="inputComment">
                <input type="text" placeholder="Comment" />
                <button>Send</button>
              </div>
            )}
          </div>
          <div className="viewOffers">
            <h3>
              <span className="listing">Listing</span>
              <b>
                <Image
                  src="/icon_vwar_02.svg"
                  width={30}
                  height={30}
                  alt="icon"
                  onClick={() => setViewListing(!viewListing)}
                />
              </b>
            </h3>
            {viewListing && (
              <div className="datablock">
                <p className="headerData">
                  <span>Price</span>
                  <span style={{ width: "86%" }}>Expiration</span>
                  <span>From</span>
                  <span />
                </p>
                {offers.map((i, index) => (
                  <p key={index} className="headerData data">
                    <span className="solana blue">
                      {i.price}
                      <br />
                      <b style={{ color: "#000", marginLeft: -35 }}>$316.46</b>
                    </span>
                    <span style={{ width: "40%" }}>{i.expiration}</span>
                    <span className="blue">{i.from}</span>
                    <figure className="delete_listing" />
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="viewOffers">
            <h3>
              <span className="info">Info</span>
              <b>
                <Image
                  src="/icon_vwar_02.svg"
                  width={30}
                  height={30}
                  alt="icon"
                  onClick={() => setViewInfo(!viewInfo)}
                />
              </b>
            </h3>
            {viewInfo && (
              <div className="datablock info">
                <p>
                  <span>Contract Address</span>
                  <span style={{ color: "#00b4e6" }}>0xb47e...3bbb</span>
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
            <button className="BtnPriceOffer">Price Offer</button>
          </Link>
          <div className="viewOffers">
            <h3>
              <span className="offers">Offers</span>
              <b>
                <Image
                  src="/icon_vwar_02.svg"
                  width={30}
                  height={30}
                  alt="icon"
                  onClick={() => setViewOffers(!viewOffers)}
                />
              </b>
            </h3>
            {viewOffers && (
              <div className="datablock">
                <p className="headerData">
                  <span style={{textAlign: 'center'}}>Price</span>
                  <span>Expiration</span>
                  <span>From</span>
                </p>
                {offers.map((i, index) => (
                  <p key={index} className="headerData data">
                    <span className="solana blue">
                      {i.price}
                      <br />
                      <b style={{ color: "#000", marginLeft: -80 }}>$316.46</b>
                    </span>
                    <span>{i.expiration}</span>
                    <span className="blue">{i.from}</span>
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="viewOffers">
            <h3>
              <span className="history"> Price History</span>
              <b>
                <Image
                  src="/icon_vwar_02.svg"
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
                <div>
                  All Time Avg.Price <span className="solana blue">0.1</span>
                </div>
              </div>
            )}
          </div>
          <div className="viewOffers">
            <h3>
              <span className="log">Item log</span>
              <b>
                <Image
                  src="/icon_vwar_02.svg"
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
                <p className="headerData">
                  <span>Event</span>
                  <span style={{ width: "9%" }}>Price</span>
                  <span>From</span>
                  <span>To</span>
                </p>
                <p className="headerData">
                  <span>
                    List <br />
                    <b>7 days ago</b>
                  </span>
                  <span
                    className="solana"
                    style={{ width: "9%", textAlign: "end" }}
                  >
                    0.1
                    <br />
                    <b>$316.46</b>
                  </span>
                  <span className="blue">You</span>
                  <span className="blue">You</span>
                </p>
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
                            15.285
                          </span>
                          <b>
                            <Image
                              src="/icon_bubble.svg"
                              width={25}
                              height={25}
                              alt="icon"
                            />
                          </b>
                          <span>25.000</span>
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
        * {
          font-family: "GmarketSansLight";
          font-weight: 800;
        }
        h1 {
          font-weight: 400;
          font-size: 38px;
          font-family: "GmarketSansMedium";
        }
        h3 {
          background-color: #f3f3f3;
          padding: 0 20px 0 55px;
          height: 80px;
          display: flex;
          justify-content: space-between;
          margin: 0;
          font-size: 22px;
          font-family: "GmarketSansLight";
          font-weight: 800;
          line-height: 80px;
        }
        h3 span {
          vertical-align: middle;
          display: inline-block;
          position: relative;
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
        @media screen and (max-width: 1300px) {
          .mainNft {
            width: 80%;
          }
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
          background-repeat: no-repeat;
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
          font-size: 20px;
          line-height: 25px;
          font-family: "GmarketSansLight";
          color: #333;
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
        .offerPiceList {
          width: 58%;
          vertical-align: top;
          margin-left: 2%;
          display: inline-block;
        }
        .BtnPriceOffer {
          width: 100%;
          border-radius: 10px;
          height: 60px;
          background-color: #be0000;
          color: #fff;
          border: 1px solid #d9d9d9;
          font-size: 18px;
          font-family: "GmarketSansMedium";
        }
        .BtnPriceOffer:hover {
          background-color: #f3f3f3;
          color: #000;
        }
        .viewOffers {
          width: 100%;
          margin-top: 30px;
          height: auto;
          border: 1px solid #c9c9c9;
          border-radius: 10px;
          overflow: hidden;
        }
        .info p {
          font-weight: 600;
          font-size: 18px;
          color: #333;
          padding: 0 20px;
          font-family: "GmarketSansMedium";
        }
        .info p span:last-of-type {
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
          height: 60px;
          display: block;
          border-radius: 10px;
          text-align: center;
          color: #fff;
          line-height: 60px;
          border: none;
          font-size: 18px;
          cursor: pointer;
          font-family: "GmarketSansMedium";
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
          background-repeat: no-repeat;
          height: 60%;
          margin-bottom: 40px;
          cursor: pointer;
        }
        .itemSliderImageNft:hover {
          box-shadow: 0px 0px 12px 5px rgba(34, 60, 80, 0.2);
        }
        .inputComment {
          display: flex;
          width: 90%;
          margin: 150px auto 0;
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
          font-family: "GmarketSansMedium";
          font-size: 18px;
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
        .headerData {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #c9c9c9;
          padding: 0 15px 15px 15px;
          font-size: 18px;
          font-family: "GmarketSansMedium";
          text-align: center;
        }
        .headerData b {
          font-size: 14px;
        }
        .delete_listing {
          width: 30px;
          display: inline-block;
          height: 30px;
          cursor: pointer;
          background: url("/icon_cls_hv.svg") 89% 41% / 60% no-repeat;
        }
        .delete_listing:hover {
          background: url("/icon_cls.svg") 89% 41% / 60% no-repeat;
        }

        .data {
          font-family: "GmarketSansLight";
          font-weight: 800;
        }
        .headerData span {
          width: 20%;
          display: inline-block;
        }
        .offers:before {
          content: url("/icon_graph_08.svg");
        }
        h3 span.history:before {
          content: url("/icon_graph_01.svg");
          top: 3px;
        }
        h3 span.log:before {
          content: url("/icon_graph_10.svg");
          top: 3px;
        }
        h3 span.listing:before {
          content: url("/icon_pclbk.svg");
          top: 3px;
        }
        h3 span.comment:before {
          content: url("/icon_bubblebk.svg");
          top: 3px;
        }
        h3 span.info:before {
          content: url("/icon_graph_09.svg");
        }
        .filterLog {
          text-align: right;
          margin: 20px 0 40px;
        }
        .filterLog span {
          font-size: 20px;
          margin-left: 30px;
        }
      `}</style>
    </div>
  );
}
