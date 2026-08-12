import { memo, useState } from "react";
import { FiSearch, FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { productArt } from "../../assets/illustrations.jsx";
import styles from "./Hero.module.css";

const HeroVisual = memo(function HeroVisual() {
  return (
    <div className={styles.visual}>
      <div className={styles.ring} aria-hidden="true" />
      <div className={styles.card}>{productArt("large")}</div>
      <div className={styles.sticker} aria-hidden="true">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <path id="circ" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
          </defs>
          <text className={styles.stickerText}>
            <textPath href="#circ">• RENYAHNYA DAPET • PEDASNYA NENDANG</textPath>
          </text>
        </svg>
        <span className={styles.stickerEmoji}>🌶️</span>
      </div>
    </div>
  );
});

function SearchBar() {
  const [query, setQuery] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <form className={styles.search} onSubmit={submit}>
      <FiSearch className={styles.searchIcon} />
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        placeholder="Cari jajanan favoritmu di sini..."
        aria-label="Cari jajanan"
      />
      <button type="submit" aria-label="Cari">
        <FiArrowUpRight />
      </button>
    </form>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.blob} aria-hidden="true" />
      <div className={styles.peppers} aria-hidden="true">
        <svg className={styles.pepperA} viewBox="0 0 64 64" fill="none">
          <path d="M10 46 q-9 -18 3 -32 q12 -12 26 -6 q4 5 0 13 q6 -3 8 -12 q5 9 -2 21 q-7 14 -16 20 q-16 3 -19 -4 Z" fill="#dc2626" />
          <path d="M42 8 c-4 -5 -3 -12 2 -16 c8 2 7 13 -2 16 Z" fill="#65a30d" />
        </svg>
        <svg className={styles.pepperB} viewBox="0 0 64 64" fill="none">
          <path d="M54 46 q9 -18 -3 -32 q-12 -12 -26 -6 q-4 5 0 13 q-6 -3 -8 -12 q-5 9 2 21 q7 14 16 20 q16 3 19 -4 Z" fill="#f97316" />
          <path d="M22 8 c4 -5 3 -12 -2 -16 c-8 2 -7 13 2 16 Z" fill="#65a30d" />
        </svg>
      </div>

      <div className={`${styles.grid} container`}>
        <div className={styles.copy}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Digoreng dadakan, dikirim sama-sama renyah
          </div>

          <h1 className={styles.title}>
            Sensasi <span className={styles.hot}>Pedas</span> Gurih,
            <br />
            Bikin Susah <em>Berhenti</em> Ngunyah!
          </h1>

          <p className={styles.sub}>
            Jajanan pedas rumahan dengan cabai asli pilihan. Renyahnya dapet,
            pedasnya nendang. Cocok banget buat nemenin waktu santai atau
            nugas kamu.
          </p>

          <SearchBar />

          <div className={styles.meta}>
            <div className={styles.rating}>
              <span className={styles.stars}>★★★★★</span>
              <span>
                <strong>4.9/5</strong> dari 1.200+ penikmat pedas
              </span>
            </div>
            <div className={styles.loc}>
              <FiMapPin />
              Dapur rumahan, Jember
            </div>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}