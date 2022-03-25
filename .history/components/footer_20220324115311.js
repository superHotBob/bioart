import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>
        <Image src="/symbol.svg" alt=" Logo" width={112} height={80} />
      </span>
      <p className={styles.footerIconText}>GenoVerse</p>
      <p className={styles.footerText}>
        GenoVerse is a unique NFT market specialized in the genome.
      </p>
      <a src="/#" className={styles.learnFooter}>
        Learn more about me &#9654;
      </a>
    </footer>
  );
}
