import { useRouter } from "next/router";
import Image from "next/image";
const NFT = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className="mainNft">
      <div style={{ margin: "50px 0" }}>
        <div className="menu">
          <p></p>
          <p></p>
          <p></p>
        </div>
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
            <span style={{ flexGrow: 3, textAlign: "left" }}>
              Owner by <b style={{ color: "#00b4e6" }}>you</b>
            </span>
            <span className="view">1 {"  "}View</span>
            <span className="comment">1 {"  "}Comment</span>
            <span className="like">1 {"  "}Like</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 50, height: "auto" }}>
        <div className="commemtListingInfo">
          <div className="viewOffers" style={{ marginTop: 0 }}>
            <h3>
              <b style={{ float: "left", margin: "9px" }}>
                <Image
                  src="/icon_bubblebk.svg"
                  width={30}
                  height={30}
                  alt="icon"
                />
              </b>
              Comment{" "}
              <b>
                <Image
                  src="/icon_vwar_02.svg"
                  width={30}
                  height={30}
                  alt="icon"
                />
              </b>
            </h3>
          </div>
          <div className="viewOffers">
            <h3>
              <b style={{ float: "left", margin: "9px" }}>
                <Image
                  src="/icon_pclbk.svg"
                  width={30}
                  height={30}
                  alt="icon"
                />
              </b>
              Listing{" "}
              <b>
                <Image
                  src="/icon_vwar_02.svg"
                  width={30}
                  height={30}
                  alt="icon"
                />
              </b>
            </h3>
          </div>
          <div className="viewOffers info">
            <h3>
              <b style={{ float: "left", margin: "9px" }}>
                <Image
                  src="/icon_graph_09.svg"
                  width={30}
                  height={30}
                  alt="icon"
                />
              </b>
              Info{" "}
              <b>
                <Image
                  src="/icon_vwar_02.svg"
                  width={30}
                  height={30}
                  alt="icon"
                />
              </b>
            </h3>
            <p>
              <span>Contract Address</span>
              <span style={{color: '#00b4e6'}}>0xb47e...3bbb</span>
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
        </div>
        <div className="offerPiceList">
          <button className="BtnPriceOffer">Price Offer</button>
          <div className="viewOffers">
            <h3>
              <b style={{ float: "left", margin: "9px" }}>
                <Image
                  src="/icon_graph_08.svg"
                  width={30}
                  height={30}
                  alt="icon"
                />
              </b>
              Offers{" "}
              <b>
                <Image
                  src="/icon_vwar_02.svg"
                  width={30}
                  height={30}
                  alt="icon"
                />
              </b>
            </h3>
          </div>
          <div className="viewOffers">
            <h3>
              <b style={{ float: "left", margin: "9px" }}>
                <Image
                  src="/icon_graph_01.svg"
                  width={30}
                  height={30}
                  alt="icon"
                />
              </b>
              Price History{" "}
              <b>
                <Image
                  src="/icon_vwar_02.svg"
                  width={30}
                  height={30}
                  alt="icon"
                />
              </b>
            </h3>
          </div>
          <div className="viewOffers">
            <h3>
              <b style={{ float: "left", margin: "9px" }}>
                <Image
                  src="/icon_graph_10.svg"
                  width={30}
                  height={30}
                  alt="icon"
                />
              </b>
              Item log{" "}
              <b>
                <Image
                  src="/icon_vwar_02.svg"
                  width={30}
                  height={30}
                  alt="icon"
                />
              </b>
            </h3>
          </div>
        </div>
        <h2 style={{ textAlign: "center" }}>More from this Planet</h2>
        <section className={styles.slider}>
        <h2 style={{ textAlign: "center" }}>Popular NFTs</h2>
        <div className={styles.sliderWraper}>
          <Slider {...settings}>
            <div className={styles.itemSlider}>
              <Link href="/nft/one" passHref>
                <div
                  className={styles.itemSliderImage}
                  style={{ backgroundImage: "url(/article-img.png)" }}
                />
              </Link>
              <span style={{ marginLeft: 15 }}>
                <Image src="/icon_ba.svg" width={55} height={55} alt="icon" />
              </span>
              <p>BioArts</p>
              <p>Artistic Transformation of Life into Information.</p>
            </div>
            <div className={styles.itemSlider}>
              <Link href="/nft/one" passHref>
                <div
                  className={styles.itemSliderImage}
                  style={{ backgroundImage: "url(/article-img.png)" }}
                />
              </Link>
              <span style={{ marginLeft: 15 }}>
                <Image src="/icon_ba.svg" width={55} height={55} alt="icon" />
              </span>
              <p>BioArts</p>
              <p>Artistic Transformation of Life into Information.</p>
            </div>
            <div className={styles.itemSlider}>
              <Link href="/nft/one" passHref>
                <div
                  className={styles.itemSliderImage}
                  style={{ backgroundImage: "url(/article-img.png)" }}
                />
              </Link>
              <span style={{ marginLeft: 15 }}>
                <Image
                  src="/icon_facebook_b.png"
                  width={55}
                  height={55}
                  alt="facebook"
                />
              </span>
              <p>BioArts</p>
              <p>Artistic Transformation of Life into Information.</p>
            </div>
            <div className={styles.itemSlider}>
              <Link href="/nft/one" passHref>
                <div
                  className={styles.itemSliderImage}
                  style={{ backgroundImage: "url(/article-img.png)" }}
                />
              </Link>
              <span style={{ marginLeft: 15 }}>
                <Image src="/icon_ba.svg" width={55} height={55} alt="icon" />
              </span>
              <p>BioArts</p>
              <p>Artistic Transformation of Life into Information.</p>
            </div>
            <div className={styles.itemSlider}>
              <Link href="/nft/one" passHref>
                <div
                  className={styles.itemSliderImage}
                  style={{ backgroundImage: "url(/article-img.png)" }}
                />
              </Link>
              <span style={{ marginLeft: 15 }}>
                <Image src="/icon_ba.svg" width={55} height={55} alt="icon" />
              </span>
              <p>BioArts</p>
              <p>Artistic Transformation of Life into Information.</p>
            </div>
            <div className={styles.itemSlider}>
              <Link href="/nft/one" passHref>
                <div
                  className={styles.itemSliderImage}
                  style={{ backgroundImage: "url(/article-img.png)" }}
                />
              </Link>
              <span style={{ marginLeft: 15 }}>
                <Image
                  src="/icon_facebook_b.png"
                  width={55}
                  height={55}
                  alt="facebook"
                />
              </span>
              <p>BioArts</p>
              <p>Artistic Transformation of Life into Information.</p>
            </div>
          </Slider>
        </div>
      </section>
      </div>

      <style jsx>{`
        a {
          color: #00b4e6 !important;
          margin-right: 10px;
          letter-spacing: 1.5px;
          font-size: 18px;
        }
        h1 {
          font-weight: 400;
          font-size: 38px;
          font-family: "GmarketSansMedium";
        }
        h3 {
          background-color: #f3f3f3;
          padding: 0 20px;
          height: 80px;
          margin: 0 0 40px;
          font-size: 22px;
          font-family: "GmarketSansMedium";
          font-weight: 400;
          line-height: 80px;
        }
        h3 b {
          margin-top: 15px;
          float: right;
          cursor: pointer;
        }
        .mainNft {
          width: 70%;
          margin: 0 auto;
          height: auto;
        }
        .menu {
          width: 40px;
          height: 40px;
          margin: 10px 0 0 98%;
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
        .menu:hover > p {
          color: #00b4e6;
        }
        .image {
          height: 500px;
          width: 40%;
          margin: 0;
          display: inline-block;
          background-image: url("/article-img.png");
          background-size: 100%;
          background-position: center top;
          background-repeat: no-repeat;
        }
        .content {
          height: 500px;
          width: 54%;
          vertical-align: top;
          margin-left: 20px;
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
          bottom: 10px;
          width: 100%;
          height: 40px;
          justify-content: space-between;
        }
        .lastString span {
          flex-grow: 1;
          text-align: right;
        }
        .view,
        .comment,
        .like {
          background-size: 30%;
          background-position: 18% top;
          background-repeat: no-repeat;
        }
        .view {
          background-image: url("/icon_view.svg");
        }
        .comment {
          background-image: url("/icon_bubblebk.svg");
          background-size: 15%;
        }
        .like {
          background-image: url("/icon_like_on.svg");
          background-size: 25%;
          background-position: 28% top;
        }
        .commemtListingInfo {
          width: 40%;
          margin: 0;
          display: inline-block;
        }
        .offerPiceList {
          width: 54%;
          vertical-align: top;
          margin-left: 20px;
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
          height: 319px;
          border: 1px solid #c9c9c9;
          border-radius: 10px;
          overflow: hidden;
          background: url('/icon_graph_16.svg')  center 70% / 150px no-repeat;
        }
        .info p{
          font-weight: 600;
          font-size: 18px;
          color: #333;
          padding: 0 20px;
          font-family: "GmarketSansMedium";
        }
        .info p span:last-of-type {
          float: right;
        }
      `}</style>
    </div>
  );
};

export default NFT;
