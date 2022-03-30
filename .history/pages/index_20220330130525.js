import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home() {
const [myscreen, setMyScreen] = useState(1300);
useEffect(() => setMyScreen(window.screen.width));
const data = [
  {
    ranking: 1229,
    planet: "BioArt",
    volume: 16.61,
    hours: "-53.52%",
    days: "4.02%",
    floorPrice: 1.3,
    owners: 160,
    items: 150,
  },
  {
    ranking: 1229,
    planet: "BioArt",
    volume: 16.61,
    hours: "-53.52%",
    days: "4.02%",
    floorPrice: 1.3,
    owners: 160,
    items: 150,
  },
  {
    ranking: 1229,
    planet: "BioArt",
    volume: 16.61,
    hours: "-53.52%",
    days: "4.02%",
    floorPrice: 1.3,
    owners: 160,
    items: 150,
  },
  {
    ranking: 1239,
    planet: "BioArt",
    volume: 17.61,
    hours: "-53.52%",
    days: "4.02%",
    floorPrice: 1.3,
    owners: 163,
    items: 156,
  },
  {
    ranking: 1239,
    planet: "BioArt",
    volume: 17.61,
    hours: "-53.52%",
    days: "4.02%",
    floorPrice: 1.3,
    owners: 163,
    items: 156,
  },
  {
    ranking: 1239,
    planet: "BioArt",
    volume: 17.61,
    hours: "-53.52%",
    days: "4.02%",
    floorPrice: 1.3,
    owners: 163,
    items: 156,
  },
  {
    ranking: 1239,
    planet: "BioArt",
    volume: 17.61,
    hours: "-53.52%",
    days: "4.02%",
    floorPrice: 1.3,
    owners: 163,
    items: 156,
  },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: myscreen > 500 ? 3 : 1,
  slidesToScroll: myscreen > 500 ? 3 : 1,
  nextArrow: myscreen > 500 ? <SampleNextArrow /> : null,
  prevArrow: myscreen > 500 ? <SamplePrevArrow /> : null,
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
    <button type="button" className={styles.sliderBtnNext} onClick={onClick} />
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
    <div className={styles.container}>
      <Head>
        <title>BioArt</title>
        <meta name="description" content="Generated by create nft" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <section className={styles.wrapFirstBlock}>
        <div className={styles.firstBlock} />
        <div className={styles.firstBlockText}>
          <Image src="/icon_ba.svg" width={55} height={55} alt="icon" />
          <div className={styles.firstBlockTextOnly}>
            <h3>BioArts</h3>
            <p>
              Artistic Transformation of
              <br /> Life into Information.
            </p>
            <span className={styles.gold}>GOLD HANDS</span>
            JHSASWHN-0001-20220101
          </div>
        </div>
      </section>

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
              <span>
                <Image src="/icon_ba.svg" width={55} height={55} alt="icon" />
              </span>
              <div className={styles.sliderText}>
                BioArts
                <p>Artistic Transformation of Life into Information.</p>
              </div>
            </div>
            <div className={styles.itemSlider}>
              <Link href="/nft/one" passHref>
                <div
                  className={styles.itemSliderImage}
                  style={{ backgroundImage: "url(/article-img.png)" }}
                />
              </Link>
              <span>
                <Image src="/icon_ba.svg" width={55} height={55} alt="icon" />
              </span>
              <div className={styles.sliderText}>
                BioArts
                <p>Artistic Transformation of Life into Information.</p>
              </div>
            </div>
            <div className={styles.itemSlider}>
              <Link href="/nft/one" passHref>
                <div
                  className={styles.itemSliderImage}
                  style={{ backgroundImage: "url(/article-img.png)" }}
                />
              </Link>
              <span>
                <Image
                  src="/icon_facebook_b.png"
                  width={55}
                  height={55}
                  alt="facebook"
                />
              </span>
              <div className={styles.sliderText}>
                BioArts
                <p>Artistic Transformation of Life into Information.</p>
              </div>
            </div>
            <div className={styles.itemSlider}>
              <Link href="/nft/one" passHref>
                <div
                  className={styles.itemSliderImage}
                  style={{ backgroundImage: "url(/article-img.png)" }}
                />
              </Link>
              <span>
                <Image src="/icon_ba.svg" width={55} height={55} alt="icon" />
              </span>
              <div className={styles.sliderText}>
                BioArts
                <p>Artistic Transformation of Life into Information.</p>
              </div>
            </div>
            <div className={styles.itemSlider}>
              <Link href="/nft/one" passHref>
                <div
                  className={styles.itemSliderImage}
                  style={{ backgroundImage: "url(/article-img.png)" }}
                />
              </Link>
              <span>
                <Image src="/icon_ba.svg" width={55} height={55} alt="icon" />
              </span>
              <div className={styles.sliderText}>
                BioArts
                <p>Artistic Transformation of Life into Information.</p>
              </div>
            </div>
            <div className={styles.itemSlider}>
              <Link href="/nft/one" passHref>
                <div
                  className={styles.itemSliderImage}
                  style={{ backgroundImage: "url(/article-img.png)" }}
                />
              </Link>
              <span>
                <Image
                  src="/icon_facebook_b.png"
                  width={55}
                  height={55}
                  alt="facebook"
                />
              </span>
              <div className={styles.sliderText}>
                BioArts
                <p>Artistic Transformation of Life into Information.</p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className={styles.table}>
        <h2>
          Rankings of Planets <br className={styles.br}/><a>over last 7 days ▼</a>
        </h2>
        <div className={styles.icons}>
          <Image src="/icon_cate_on_01.svg" width={54} height={40} alt="icon" />
          <Image src="/icon_cate_02.svg" width={54} height={40} alt="icon" />
          <Image src="/icon_cate_04.svg" width={54} height={40} alt="icon" />
        </div>
        <div className={styles.tableBody}>
          <div className={styles.headerTable}>
            <span style={{ textAlign: "left" }}>Ranking</span>
            <span style={{ flexGrow: 4, textAlign: "left" }}>Planet</span>
            <span>Volume ▼</span>
            <span>24h%</span>
            <span>7d%</span>
            <span>Floor price</span>
            <span>Owners</span>
            <span>Items</span>
          </div>
          <div className={styles.data}>
            <p className={styles.headerTableFirst}>
              <span style={{ textAlign: "left", fontSize: "28px" }}>1239</span>
              <span
                style={{
                  flexGrow: 4,
                  fontSize: "28px",
                  height: "50px",
                  textAlign: "left",
                  backgroundImage: "url(/icon_ba.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "50px",
                  paddingLeft: 60,
                }}
              >
                BioArt
              </span>
              <span className={styles.volumeIcon}>17.61</span>
              <span>-53.52%</span>
              <span style={{ color: "#00b4e6" }}>4.41%</span>
              <span className={styles.volumeIcon}>1.3</span>
              <span>163</span>
              <span>150</span>
            </p>
            <h2>All</h2>
            {data.map((i, index) => (
              <p key={index} className={styles.headerTable}>
                <span style={{ textAlign: "left" }}>{i.ranking}</span>
                <span
                  style={{
                    flexGrow: 4,
                    height: "50px",
                    textAlign: "left",
                    backgroundImage: "url(/icon_ba.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "50px",
                    paddingLeft: 60,
                  }}
                >
                  {i.planet}
                </span>
                <span className={styles.volumeIcon}>{i.volume}</span>
                <span>{i.hours}</span>
                <span style={{ color: "#00b4e6" }}>{i.days}</span>
                <span className={styles.volumeIcon}>{i.floorPrice}</span>
                <span>{i.owners}</span>
                <span>{i.items}</span>
              </p>
            ))}
          </div>
          <p className={styles.btnPage}>
            <button className={styles.btnPrev}>1 - 100</button>
            <button className={styles.btnNext} style={{ color: "#00b4e6" }}>
              101-202
            </button>
          </p>
        </div>
      </section>
    </div>
  );
}
