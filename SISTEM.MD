# Arsitektur Sistem & Spesifikasi Teknis: Landing Page [Nama Brand]

Dokumen ini menguraikan struktur teknis untuk pengembangan landing page UMKM jajanan pedas. Sistem dirancang agar ringan, cepat diakses, dan mudah dikelola (maintainable).

---

## 1. Tumpukan Teknologi (Tech Stack)

*   **Framework Frontend:** React.js (Memudahkan pembuatan komponen UI yang dapat digunakan ulang seperti *Card Produk* dan *Navbar*).
*   **Pendekatan Styling:** CSS Modules atau murni Vanilla CSS. Penggunaan CSS Modules sangat direkomendasikan untuk mencegah bentrok nama *class* antar komponen dan menjaga *environment* pengembangan tetap stabil tanpa perlu konfigurasi framework utility tambahan yang rentan *error*.
*   **Ikon & Aset:** 
    *   React Icons (untuk ikon antarmuka standar).
    *   Aset Vektor/2D lokal (disimpan dalam format `.svg` atau `.webp` untuk optimasi kecepatan muat).
*   **Hosting/Deployment:** Vercel atau Netlify (Sangat optimal untuk aplikasi berbasis React statis).

---

## 2. Arsitektur Komponen

Aplikasi dibagi menjadi komponen-komponen modular (berdiri sendiri) yang disatukan dalam halaman utama (`App.jsx` atau `Home.jsx`).

1.  **`Navbar.jsx`**: Komponen navigasi melayang (*floating*). Memiliki *state* sederhana untuk mendeteksi *scroll* agar bayangan (*shadow*) muncul saat halaman digulir.
2.  **`Hero.jsx`**: Bagian atas halaman. Berisi teks utama, kotak pencarian (*input bar*), dan gambar vektor produk.
3.  **`About.jsx`**: Grid statis yang menampilkan 3 poin keunggulan (Cabai segar, produksi harian, bumbu melimpah).
4.  **`ProductMenu.jsx`**: Komponen yang memetakan (*mapping*) data produk mentah ke dalam komponen anak `ProductCard.jsx`.
5.  **`ProductCard.jsx`**: Komponen anak yang menerima *props* (gambar, nama, harga).
6.  **`LevelGuide.jsx`**: Menampilkan 3 tingkatan pedas menggunakan palet warna progresif (Kuning, Oranye, Merah).
7.  **`Footer.jsx`**: Bagian bawah halaman untuk tautan sosial dan hak cipta.

---

## 3. Struktur Direktori (Folder Structure)

Struktur ini memastikan aset dan kode terpisah dengan logis:

```text
/src
 ├── /assets
 │    ├── /images          # Gambar vektor produk, logo (.svg, .png, .webp)
 │    └── /icons           # Ikon kustom jika tidak menggunakan library
 ├── /components
 │    ├── Navbar           
 │    │   ├── Navbar.jsx
 │    │   └── Navbar.module.css
 │    ├── Hero
 │    │   ├── Hero.jsx
 │    │   └── Hero.module.css
 │    ├── About
 │    ├── ProductMenu
 │    │   ├── ProductMenu.jsx
 │    │   ├── ProductCard.jsx
 │    │   └── Product.module.css
 │    ├── LevelGuide
 │    └── Footer
 ├── /data
 │    └── products.js      # Data dummy/statis untuk katalog produk (JSON format)
 ├── /styles
 │    └── globals.css      # Variabel warna CSS utama (Primary, Secondary) & reset CSS
 ├── App.jsx               # Komponen akar yang merender seluruh urutan seksi
 └── main.jsx              # Entry point React