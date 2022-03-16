import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Navbar() {
  return (
    <div className={styles.header}>
      <Image src="/symbol.svg" width={70} height={50} alt="symbol" />
      <a src="/#" className={styles.learn}>
        Learn more about me &#9654;
      </a>
      <div className={styles.menu_tab}>
        <span className={styles.symbol}>
        <Image src="/icon_search.svg" width={22} height={22} alt="search" />
        </span>
        <input
          type="search"
          className={styles.search_input}
          placeholder="Search"
        />

        <a src="/#" className={styles.tab01} />
        <a className={styles.tab02} />
        <a className={styles.tab03} />
      </div>
    </div>
  );
}
