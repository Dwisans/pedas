import { FiThermometer } from "react-icons/fi";
import { spiceLevels } from "../../data/products.js";
import styles from "./LevelGuide.module.css";

export default function LevelGuide() {
  const maxEmojis = Math.max(...spiceLevels.map((l) => l.emojis.length));

  return (
    <section className={styles.section} id="level">
      <div className="container">
        <div className={styles.head}>
          <span className="section-eyebrow">Panduan Level</span>
          <h2 className="section-title">Berani Coba Level Berapa?</h2>
          <p className="section-sub">
            Semua varian bisa dibuat sesuai level seleramu. Pilih pintu masuk yang paling pas.
          </p>
        </div>

        <div className={styles.track}>
          <div className={styles.thermoBar} aria-hidden="true">
            <span />
          </div>

          {spiceLevels.map((level) => (
            <div
              key={level.id}
              className={styles.card}
              style={{
                "--accent": level.accent,
                "--glow": level.glow,
                "--anim": `${level.id * 0.18}s`,
              }}
            >
              <div className={styles.top}>
                <div className={styles.gauge} style={{ "--accent": level.accent }}>
                  <span className={styles.mercury} style={{ "--accent": level.accent, height: `${level.id * 11 + 6}%` }} />
                </div>
                <div className={styles.heading}>
                  <h3 className={styles.name}>{level.name}</h3>
                  <p className={styles.tagline}>
                    <FiThermometer /> {level.tagline}
                  </p>
                </div>
                <div className={styles.emojis}>
                  {Array.from({ length: maxEmojis }, (_, i) => (
                    <span
                      key={i}
                      className={`${styles.emoji} ${i >= level.emojis.length ? styles.ghost : ""}`}
                    >
                      {level.emojis[i] ?? "🐣"}
                    </span>
                  ))}
                </div>
              </div>

              <p className={styles.desc}>{level.desc}</p>
              <div className={styles.example}>
                <span className={styles.bullet} style={{ background: level.accent }} />
                {level.examples}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}