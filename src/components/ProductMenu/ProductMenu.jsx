import { FiShoppingBag } from "react-icons/fi";
import { products } from "../../data/products.js";
import { productArt } from "../../assets/illustrations.jsx";
import styles from "./Product.module.css";

const Flame = () => (
  <svg
    viewBox="0 0 24 24"
    className={styles.flame}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2c1 3-1 4-1 6s2 2 2 4-4 3-4 6c0 1.5.8 3 2.1 4 3.4-.6 6.9-3.6 5.9-8.3.6.7 1.2 1.6 1.6 2.8.8-3.8-1.6-7.3-6.6-14.5z" />
    <path d="M12 22c-2 0-3-1-3-2.5 0-1.2 2-2.2 2-4 0 0 3 1.6 3 4 0 1.5-1 2.5-2 2.5z" opacity=".5" />
  </svg>
);

function ProductCard({ product, index }) {
  return (
    <article
      className={styles.card}
      style={{ "--i": index }}
      id={`product-${product.id}`}
    >
      {product.badge && (
        <span className={styles.badge}>{product.badge}</span>
      )}

      <div className={styles.art}>{productArt(product.variant)}</div>

      <div className={styles.body}>
        <div className={styles.rating}>
          <Flame />
          Level {product.baseLevel}
        </div>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.desc}>{product.desc}</p>

        <div className={styles.bottom}>
          <span className={styles.price}>Rp{product.price.toLocaleString("id-ID")}</span>
          <a
            href="https://wa.me/62895384845837"
            target="_blank"
            rel="noreferrer"
            className={styles.buy}
          >
            <FiShoppingBag />
            Beli Sekarang
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ProductMenu() {
  return (
    <section className={styles.menu} id="menu">
      <div className="container">
        <div className={styles.head}>
          <span className="section-eyebrow">Katalog Menu</span>
          <h2 className="section-title">Varian Paling Dicari</h2>
          <p className="section-sub">
            Tiga senjata andalan yang selalu habis ditangan kanan. Pilih level pedasmu, sisanya kami urus.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <p className={styles.note}>
          Mau varian lain? Kabarin aja, kami racik khusus buat kamu.
          <a href="https://wa.me/62895384845837" target="_blank" rel="noreferrer" className={styles.custom}>
            Request Menu →
          </a>
        </p>
      </div>
    </section>
  );
}