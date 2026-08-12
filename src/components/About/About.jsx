import { AboutIcons } from "../../assets/illustrations.jsx";
import styles from "./About.module.css";

const pillars = [
  {
    icon: "chili",
    title: "Cabai Segar Asli",
    desc: "Menggunakan 100% cabai asli tanpa bubuk instan buatan.",
    ticker: "Cabai merah keriting & rawit setan, dihaluskan tiap pagi.",
  },
  {
    icon: "wok",
    title: "Digoreng Dadakan",
    desc: "Produksi setiap hari, dijamin selalu renyah saat sampai di tanganmu.",
    ticker: "Fresh fry jam 6 pagi, dikemas sore harinya. Gak ada stok basi.",
  },
  {
    icon: "spice",
    title: "Bumbu Melimpah",
    desc: "Takaran bumbu berani dan merata di setiap gigitan.",
    ticker: "Bawang putih, daun jeruk, & sentuhan cabe bubur. Dijamin nempel.",
  },
];

export default function About() {
  return (
    <section className={styles.about} id="tentang">
      <div className="container">
        <div className={styles.head}>
          <span className="section-eyebrow">Tentang Kami</span>
          <h2 className="section-title">Kenapa Bikin Nagih?</h2>
          <p className="section-sub">
            Karena kami urusin tiga hal ini sampai benar-benar beres, setiap hari, tanpa kompromi.
          </p>
        </div>

        <div className={styles.grid}>
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className={styles.card}
              style={{ "--i": i, ["--tint"]: p.tint }}
            >
              <div className={styles.iconWrap}>{AboutIcons({ name: p.icon })}</div>
              <div className={styles.num}>0{i + 1}</div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.foot}>
                <span className={styles.ampersand}>&amp;</span>
                {p.ticker}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}