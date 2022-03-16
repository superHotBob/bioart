import { urlObjectKeys } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BioArt</title>
        <meta name="description" content="Generated by create nft" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <section className={styles.wrapFirstBlock}>
          <div className={styles.firstBlock}>
            <div className={styles.firstBlockText}>
              <Image src="/icon_ba.svg" width={55} height={55} alt="icon" />
              <h3>BioArts</h3>
              <p>
                Artistic Transformation of
                <br /> Life into Information.
              </p>
              <span>Gold Hands</span>
              JHSASWHN-0001-20220101
            </div>
          </div>
        </section>
      </main>
      <section className={styles.slider}>
        <h2 style={{ textAlign: "center" }}>Popular NFTs</h2>
        <div className={styles.sliderWraper}>
          <button type="button" className={styles.sliderBtnPrev}></button>

          <div className={styles.bodySlider}>
            <div className={styles.itemSlider}>
              <div
                className={styles.itemSliderImage}
                style={{ backgroundImage: "url(/article-img.png)" }}
              />
              <span style={{ marginLeft: 15 }}>
                <Image src="/icon_ba.svg" width={55} height={55} alt="icon" />
              </span>
              <p>BioArts</p>
              <p>Artistic Transformation of Life into Information.</p>
            </div>
            <div className={styles.itemSlider}>
              <div
                className={styles.itemSliderImage}
                style={{ backgroundImage: "url(/article-img.png)" }}
              />
              <span style={{ marginLeft: 15 }}>
                <Image src="/icon_ba.svg" width={55} height={55} alt="icon" />
              </span>
              <p>BioArts</p>
              <p>Artistic Transformation of Life into Information.</p>
            </div>
            <div className={styles.itemSlider}>
              <div
                className={styles.itemSliderImage}
                style={{ backgroundImage: "url(/article-img.png)" }}
              />
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
          </div>
          <button type="button" className={styles.sliderBtnNext}></button>
        </div>
      </section>
      <section className={styles.table}>
        <h2>
          Rankings of Planets <a>over last 7 days ▼</a>
        </h2>
        <div className={styles.icons}>
          <Image src="/icon_cate_01.svg" width={54} height={40} alt="icon" />
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
            <h2>ALL</h2>
            {data.map((i, index) => (
              <p key={index} className={styles.headerTable}>
                <span style={{ textAlign: "left" }}>{i.ranking}</span>
                <span style={{ 
                  flexGrow: 4,
                  height: '50px', 
                  textAlign: "left",
                  
                  backgroundImage: "url(/icon_ba.svg)" ,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: "50px",
                  paddingLeft: 60,
                  }}>
                  {/* <b style={{marginRight: 10 }}>
                    <Image
                      src="/icon_ba.svg"
                      width={50}
                      height={50}
                      alt="icon"
                    />
                  </b> */}
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
