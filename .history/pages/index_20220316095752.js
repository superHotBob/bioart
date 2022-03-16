import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BioArt</title>
        <meta name="description" content="Generated by create nft" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        {/* <div className={styles.header}>
          <Image src="/symbol.svg" width={70} height={50} alt="symbol"/>
          <a src="/#" className={styles.learn}>
            Learn more about me &#9654;
          </a>
          <div className={styles.menu_tab}>
            <Image src="/icon_search.svg" width={22} height={22} alt="search"/>
            <input
              type="search"
              className={styles.search_input}
              placeholder="Search"
            />

            <a src="/#" className={styles.tab01} />
            <a className={styles.tab02} />
            <a className={styles.tab03} />
          </div>
        </div> */}
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
            <div
              className={styles.itemSlider}
             
            >
              <div className={styles.itemSliderImage} 
               style={{ backgroundImage: "url(/article-img.png)" }}
              />
              <Image src="/icon_ba.svg" width={55} height={55} alt="icon" />
              <p>BioArts</p>
              <p>Artistic Transformation of Life into Information.</p>
            </div>
            <div
              className={styles.itemSlider}
             
            >
               <div className={styles.itemSliderImage} 
               style={{ backgroundImage: "url(/article-img.png)" }}
              />
              <Image src="/icon_ba.svg" width={55} height={55} alt="icon"/>
              <p>BioArts</p>
              <p>Artistic Transformation of Life into Information.</p>
            </div>
            <div
              className={styles.itemSlider}
              
            >
               <div className={styles.itemSliderImage} 
               style={{ backgroundImage: "url(/article-img.png)" }}
              />
              <Image src="/icon_facebook_b.png" width={55} height={55} alt="facebook"/>
              <p>BioArts</p>
              <p>Artistic Transformation of Life into Information.</p>
            </div>
          </div>
          <button type="button" className={styles.sliderBtnNext}></button>
        </div>
      </section>
     
    </div>
  );
}
