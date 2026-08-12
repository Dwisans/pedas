import { FiMessageCircle } from "react-icons/fi";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />

      <div className="container">
        <div className={styles.ctaBand}>
          <div>
            <h2 className={styles.ctaTitle}>
              Udah ngiler? <span>Pesan sekarang.</span>
            </h2>
            <p className={styles.ctaSub}>
              Antar cepat se-Jember, atau tunggu pesananku dingin sebelum sampai.
            </p>
          </div>
          <a href="https://wa.me/62895384845837" target="_blank" rel="noreferrer" className={styles.ctaBtn}>
            <FiMessageCircle />
            Order via WhatsApp
          </a>
        </div>

        <div className={styles.copyright}>
          <p>© 2026 Pedas.in. Dibuat dengan penuh rasa pedas.</p>
          <a href="#top" className={styles.backTop}>
            Kembali ke atas ↑
          </a>
        </div>
      </div>
    </footer>
  );
}