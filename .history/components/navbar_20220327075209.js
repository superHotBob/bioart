import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import react, { useState} from 'react';

const likes = [
  { name: "Bob", date: 2 },
  { name: "Fill", date: 4 },
  { name: "Bill", date: 3 },
];
export default function Navbar() {
  const [likesView, setLikesView] = useState(false);
  return (
    <div className={styles.header}>
      <Link href="/explore" passHref>
        <Image src="/symbol.svg" width={70} height={50} alt="symbol" />
      </Link>

      <Link href="/">
        <a className={styles.learn}>Learn more about me &#9654;</a>
      </Link>
      <div className={styles.menu_tab}>
        <span className={styles.symbol}>
          <Image src="/icon_search.svg" width={22} height={22} alt="search" />
        </span>
        <input
          type="search"
          className={styles.search_input}
          placeholder="Search"
        />
        <Link href="/createitem/createitem">
          <a className={styles.tab01} />
        </Link>
        <Link href="/geno">
          <a className={styles.tab02} />
        </Link>
        <Link href="/profilesetting">
          {/* <a className={styles.tab03} /> */}
          <a className={styles.tab03active} />
        </Link>

        <a className={styles.iconLike} />

        {like && <div className={styles.block_likes}>
          LIKE
          {likes.map((i, index) => (
            <p key={index}>
              <b className={styles.icon_like}>
                <Image
                  src="/article-img.png"
                  width={50}
                  height={50}
                  alt="icon"
                />
              </b>
              <span> {i.name} likes this</span>
              <span>{i.date} days ago</span>
              <b className={styles.icon_like}>
                <Image src="/icon_ba.svg" width={50} height={50} alt="icon" />
              </b>
              <b className={styles.icon_like_last}>
                <Image
                  src="/planet-img-02.png"
                  width={50}
                  height={50}
                  alt="icon"
                />
              </b>
            </p>
          ))}
        </div>}
      </div>
    </div>
  );
}
