import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import styles from "./Navbar.module.css";

const links = [
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Katalog Menu", href: "#menu" },
  { label: "Level Pedas", href: "#level" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={`${styles.inner} container`}>
        <a href="#top" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.logoMark}>°</span>
          Pedas<span>.in</span>
        </a>

        <ul className={`${styles.menu} ${open ? styles.open : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={styles.link}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className={styles.cta}
          >
            Pesan Sekarang
            <FiArrowRight />
          </a>
        </div>

        <button
          className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
