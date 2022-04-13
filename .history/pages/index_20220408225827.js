import Slider from "react-slick";

import { useState, useEffect, useRef } from "react";
import   mainback  from '../public/main_top_bg.webp';
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {

  const [myscreen, setMyScreen] = useState(1300);
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => setMyScreen(window.screen.width),[]);

  const data = [
    {
      ranking: 1229,
      planet: "BioArts",
      volume: 16.61,
      hours: "-53.52%",
      days: "4.02%",
      floorPrice: 1.3,
      owners: 160,
      items: 150,
    },
    {
      ranking: 1229,
      planet: "BioArts",
      volume: 16.61,
      hours: "-53.52%",
      days: "4.02%",
      floorPrice: 1.3,
      owners: 160,
      items: 150,
    },
    {
      ranking: 1229,
      planet: "BioArts",
      volume: 16.61,
      hours: "-53.52%",
      days: "4.02%",
      floorPrice: 1.3,
      owners: 160,
      items: 150,
    },
    {
      ranking: 1239,
      planet: "BioArts",
      volume: 17.61,
      hours: "-53.52%",
      days: "4.02%",
      floorPrice: 1.3,
      owners: 163,
      items: 156,
    },
    {
      ranking: 1239,
      planet: "BioArts",
      volume: 17.61,
      hours: "-53.52%",
      days: "4.02%",
      floorPrice: 1.3,
      owners: 163,
      items: 156,
    },
    {
      ranking: 1239,
      planet: "BioArts",
      volume: 17.61,
      hours: "-53.52%",
      days: "4.02%",
      floorPrice: 1.3,
      owners: 163,
      items: 156,
    },
    {
      ranking: 1239,
      planet: "BioArts",
      volume: 17.61,
      hours: "-53.52%",
      days: "4.02%",
      floorPrice: 1.3,
      owners: 163,
      items: 156,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    lazyLoad: true,  
    cssEase: "linear",    
    slidesToShow: myscreen > 500 ? 3 : 1,
    slidesToScroll: myscreen > 500 ? 3 : 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,    
    beforeChange: (current, next) => setSlideIndex(next),
    
     
  };
  const slider = useRef();
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        type="button"
        className={styles.sliderBtnNext}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.wrapFirstBlock}>
        <div className={styles.firstBlock} >
          <Image src={mainback} layout='fill' alt="mainbackground" />
        </div>
        <div className={styles.firstBlockText}>
          <Image src="/icon_ba.svg" width={55} height={55} alt="icon" />
          <div className={styles.firstBlockTextOnly}>
            {(myscreen < 500) && 
            <Image src="/korona.png" width={46} height={28} alt="icon" />}
            <h3>BioArts</h3>
            <p>
              Artistic Transformation of
              Life into Information.
            </p>
            <span className={styles.gold}>GOLD HANDS</span>
            JHSASWHN-0001-20220101
          </div>
        </div>
      </section>

      <section className={styles.slider}>
        <h2>
          {myscreen > 500 ? "Popular NFTs" : "Notable NFTs"}
        </h2>
 
       
          <Slider ref={slider} {...settings}>
            <div className={styles.itemSlider}>
              <Link href="/nft/one" passHref>
                <div
                  className={styles.itemSliderImage}
                  style={{ backgroundImage: "url(/twowoman.webp)" }}
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
                  style={{ backgroundImage: "url(/article-img.webp)" }}
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
                  style={{ backgroundImage: "url(/article-img.webp)" }}
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
                  style={{ backgroundImage: "url(/article-img.webp)" }}
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
                  style={{ backgroundImage: "url(/twowoman.webp)" }}
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
                  style={{ backgroundImage: "url(/article-img.webp)" }}
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
          <input style={{width: '100%'}}
            type="range" 
            className={styles.range}
            min={0}
            max={5}
            onChange={e => slider.current.slickGoTo(e.target.value)}
            value={slideIndex}
          />
       
      </section>
      <section className={styles.table}>
        <h2>
          Rankings of Planets <br className={styles.br} />
          <a>over last 7 days ▼</a>
        </h2>
        <div className={styles.icons}>
          <Image src="/icon_cate_on_01.svg" width={54} height={40} alt="icon" />
          <Image src="/icon_cate_02.svg" width={54} height={40} alt="icon" />
          <Image src="/icon_cate_04.svg" width={54} height={40} alt="icon" />
        </div>
        <div className={styles.tableBody}>
          <div className={styles.headerTable}>
            <span className={styles.mobile} style={{ textAlign: "left" }}>
              Ranking
            </span>
            <span style={{ textAlign: "left",flexGrow: 3 }}>Planet</span>
            <span>Volume ▼</span>
            <span className={styles.mobile}>24h%</span>
            <span className={styles.mobile}>7d%</span>
            <span className={styles.mobile}>Floor price</span>
            <span className={styles.mobile}>Owners</span>
            <span className={styles.mobile}>Items</span>
          </div>
          <div className={styles.data}>
            <p className={styles.headerTableFirst}>
              <span
                className={styles.mobile}
                style={{ textAlign: "left", fontSize: "28px" }}
              >
                1239
              </span>
              <span
                className={styles.planetsTableData}
                style={{ textAlign: "left", flexGrow: 3 }}
              >
                BioArts <br className={styles.br} />{" "}
                <span className={styles.mobileYes}> Rankin 1247</span>
              </span>
              <span className={styles.volumeIcon}>
                17.61
                <br className={styles.br} />{" "}
                <span className={styles.mobileYes}> -53.52%</span>
              </span>
              <span className={styles.mobile}>-53.52%</span>
              <span className={styles.mobile} style={{ color: "#00b4e6" }}>
                4.41%
              </span>
              <span className={styles.volumeIcon_2}>1.3</span>
              <span className={styles.mobile}>163</span>
              <span className={styles.czczxc}>150</span>
            </p>
            <h2>All</h2>
            {data.map((i, index) => (
              <p key={index} className={styles.bodyTable}>
                <span className={styles.mobile} style={{ textAlign: "left" }}>
                  Rankin {i.ranking}
                </span>
                <span
                  className={styles.planetsTableData}
                  style={{ textAlign: "left" ,flexGrow: 3}}
                >
                  {i.planet} <br />
                  <span className={styles.mobileYes}>Ranking {i.ranking}</span>
                </span>
                <span className={styles.volumeIcon}>
                  {i.volume}
                  <br className={styles.br} />{" "}
                  <span className={styles.mobileYes}>{i.hours}</span>
                </span>
                <span className={styles.mobile}>{i.hours}</span>
                <span className={styles.mobile} style={{ color: "#00b4e6" }}>
                  {i.days}
                </span>
                <span className={styles.volumeIcon_2}>{i.floorPrice}</span>
                <span className={styles.mobile}>{i.owners}</span>
                <span className={styles.mobile}>{i.items}</span>
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
