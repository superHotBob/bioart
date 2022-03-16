import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BioArt</title>
        <meta name="description" content="Generated by create nft" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <img src='/symbol.svg' width={70} height={50} />
          <a src="/#" className={styles.learn}>Learn about me &#9654;</a>
          <div className={styles.menu_tab}>     
                           
            <input type="search" className={styles.search} placeholder="Search" />
                           
                       
                      
          <a src="/#" className={styles.tab01}/>
          <a className={styles.tab02}/>
          <a className={styles.tab03}/>
                       
          </div>

        </div>
        <section className={styles.slider}>
          <h1>Popular NFTs</h1>
        </section>
        <div className={styles.firstBlock}>
          <div className={styles.firstBlockText}>
            <img src="/icon_ba.svg" width={55} height={55}/>
            <h2>BioArts</h2>
            <p>Artistic Transformation of<br/> Life into Information.</p>
            <span>Gold Hands</span>
            JHSASWHN-0001-20220101
          </div>

        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
