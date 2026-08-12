import { FiMapPin, FiClock, FiTruck, FiMessageCircle, FiNavigation } from "react-icons/fi";
import styles from "./Location.module.css";

const info = [
  {
    icon: <FiMapPin />,
    title: "Alamat Dapur",
    lines: ["Jl. Melati No. 45, Kec. Sumbersari", "Kabupaten Jember, Jawa Timur 68121"],
    action: "Buka di Maps",
    href: "https://www.google.com/maps/search/?api=1&query=Jember+Jawa+Timur",
  },
  {
    icon: <FiClock />,
    title: "Jam Buka",
    lines: ["Senin – Sabtu", "08.00 – 20.00 WIB"],
    action: null,
    href: null,
  },
  {
    icon: <FiTruck />,
    title: "Area Antar",
    lines: ["Se-Jember (gratis diatas Rp50rb)", "Pemesanan H-1 untuk pesanan besar"],
    action: "Order via WhatsApp",
    href: "https://wa.me/62895384845837",
    wa: true,
  },
];

export default function Location() {
  return (
    <section className={styles.location} id="lokasi">
      <div className="container">
        <div className={styles.head}>
          <span className="section-eyebrow">Lokasi Kami</span>
          <h2 className="section-title">Gampang Ditemuin, Gampang Dipesen</h2>
          <p className="section-sub">
            Dapur rumahan kami ada di jantung Kota Jember. Intip peta di bawah,
            atau langsung antri ngemil.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.mapWrap}>
            <iframe
              title="Peta lokasi Pedas.in Jember"
              src="https://maps.google.com/maps?q=Kota%20Jember%2C%20Jawa%20Timur&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
              allowFullScreen
            />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jember+Jawa+Timur"
              target="_blank"
              rel="noreferrer"
              className={styles.mapCta}
            >
              <FiNavigation />
              Rute ke sini
            </a>
          </div>

          <div className={styles.cards}>
            {info.map((item) => (
              <article className={styles.card} key={item.title}>
                <div className={styles.cardIcon}>{item.icon}</div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  {item.lines.map((l) => (
                    <p className={styles.cardLine} key={l}>
                      {l}
                    </p>
                  ))}
                  {item.action && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`${styles.cardAction} ${item.wa ? styles.cardActionWa : ""}`}
                    >
                      {item.wa && <FiMessageCircle />}
                      {item.action} →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
