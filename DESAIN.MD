# Design System & Landing Page Blueprint: [Nama Brand Jajanan Pedas]
*Tema Visual: Warm & Spicy (Menggugah Selera, Berani, dan Hangat)*

---

## 1. Panduan Gaya Visual & Desain (Style Guide)

### A. Palet Warna (Color Palette)
* **Primary (Warna Utama):** Fiery Red (`#DC2626`) - Warna merah cabai yang berani. Digunakan untuk tombol utama (Call to Action), elemen penunjuk penting, dan aksen logo untuk merangsang selera makan dan merepresentasikan rasa pedas.
* **Secondary (Warna Pendukung):** Crunchy Orange (`#EA580C`) - Warna oranye hangat. Digunakan untuk ikon, badge diskon/promo, atau penanda level pedas menengah. Menggambarkan kerenyahan jajanan goreng.
* **Background (Latar Belakang):** Soft Cream / Warm White (`#FFFBEB`) - Menggantikan warna putih polos atau abu-abu dingin. Latar krem hangat ini membuat mata lebih nyaman dan sangat cocok dipadukan dengan foto atau ilustrasi makanan.
* **Text Primary (Teks Utama):** Espresso Brown / Dark Charcoal (`#292524`) - Warna cokelat sangat gelap. Digunakan untuk headline dan teks paragraf. Lebih menyatu dengan tema makanan dibandingkan warna hitam murni atau biru dongker.
* **Card & Navbar Background:** Pure White (`#FFFFFF`) - Digunakan khusus untuk latar belakang *floating navbar* dan *card* produk agar terlihat menonjol dan bersih di atas latar belakang Soft Cream.

### B. Tipografi (Typography)
* **Font Family:** Poppins / Montserrat (Sans-Serif dengan karakter bulat, ramah, dan modern yang cocok untuk brand kuliner/F&B).
* **Heading 1 (H1 - Hero Title):** Extra Bold, ukuran 48px - 56px, Line height 1.2, Warna Espresso Brown dengan aksen Fiery Red pada kata tertentu (misal: kata "Pedas").
* **Heading 2 (H2 - Section Title):** Bold, ukuran 32px - 38px.
* **Body Text (Paragraf):** Regular, ukuran 16px, Line height 1.6, Warna Espresso Brown dengan opacity 80%.
* **Button & Label Text:** Semi-bold, ukuran 14px - 16px, huruf kapital di awal kata.

### C. Gaya Komponen & Elemen UI
* **Border Radius:** Menggunakan sudut melengkung sedang (`16px` untuk card produk, `9999px` untuk tombol dan search bar) agar selaras dengan kesan brand makanan yang ramah.
* **Shadow / Elevasi:** Bayangan dengan rona hangat (warm shadow). Contoh CSS: `box-shadow: 0 10px 25px -5px rgba(220, 38, 38, 0.1)`. Ini memberikan efek melayang yang tidak kaku.
* **Ilustrasi:** Grafis vektor 2D minimalis dengan garis tegas (line art berwarna) atau ilustrasi bergaya vektor *flat* bernuansa merah, oranye, dan kuning.

---

## 2. Alur Pengunjung (User Flow)
1. **Landing / Masuk:** Pengunjung mengakses tautan dari media sosial dan disambut dengan *Hero Section* berwarna hangat yang langsung menampilkan ilustrasi jajanan menggugah selera.
2. **Eksplorasi Informasi:** Pengunjung menggulir ke bawah untuk melihat tiga pilar keunggulan produk di bagian *Tentang Kami*.
3. **Pemilihan Produk & Level:** Pengunjung melihat *Katalog Menu* bergaya *card* dan panduan *Level Pedas* untuk mencocokkan selera.
4. **Konversi / Aksi (CTA):** Pengunjung menekan tombol "Pesan Sekarang" (berwarna Fiery Red) yang mengarahkan mereka ke WhatsApp atau platform pemesanan.

---

## 3. Struktur Komponen Desain Halaman

### A. Navigasi Bar (Floating Navbar)
* **Background:** Card putih murni (`#FFFFFF`) melengkung dengan bayangan hangat tipis.
* **Logo Brand:** Teks tebal di sisi kiri dengan warna Fiery Red (Contoh: **Pedas.in**).
* **Menu Navigasi (Tengah):**
  * Tentang Kami
  * Katalog Menu
  * Level Pedas
* **Tombol Aksi (Kanan):**
  * Tombol Sekunder: `Masuk` (Teks warna Espresso Brown, tanpa kotak)
  * Tombol Utama: `Pesan Sekarang` (Background warna Fiery Red, teks putih, bentuk *pill* melengkung penuh)

### B. Hero Section (Bagian Utama)
* **Background Section:** Soft Cream (`#FFFBEB`).
* **Layout:** 2 Kolom (Kiri: Teks, Kanan: Ilustrasi).
* **Kolom Kiri (Teks & Call to Action):**
  * **Headline:** 
    > Sensasi Pedas Gurih, Bikin Susah Berhenti Ngunyah!
  * **Sub-headline:** 
    > Jajanan pedas rumahan dengan cabai asli pilihan. Renyahnya dapet, pedasnya nendang. Cocok banget buat nemenin waktu santai atau nugas kamu.
  * **Interactive Bar (Pill-shaped):**
    * *Latar Input:* Putih dengan border tipis Crunchy Orange.
    * *Placeholder Teks:* `Cari jajanan favoritmu di sini...`
    * *Tombol Aksi (Kanan dalam bar):* Tombol bulat penuh berwarna Fiery Red dengan ikon panah atau kaca pembesar.
* **Kolom Kanan (Visual):**
  * Ilustrasi vektor 2D dari kemasan produk dengan elemen cabai merah dan cipratan bumbu oranye yang beterbangan ringan di sekitarnya.

### C. Section: Tentang Kami (About)
* **Heading:** Kenapa Bikin Nagih?
* **Grid 3 Kolom (Card Putih):**
  1. **Cabai Segar Asli:** Menggunakan 100% cabai asli tanpa bubuk instan buatan. (Ikon: Cabai Vektor)
  2. **Digoreng Dadakan:** Produksi setiap hari, dijamin selalu renyah saat sampai di tanganmu. (Ikon: Wajan/Kerenyahan)
  3. **Bumbu Melimpah:** Takaran bumbu berani dan merata di setiap gigitan. (Ikon: Daun Jeruk/Bumbu)

### D. Section: Katalog Menu (Produk)
* **Heading:** Varian Paling Dicari
* **Grid Produk (Card Layout):**
  * *Latar Card:* Putih murni dengan border radius 16px.
  * *Konten:* Vektor 2D produk (Makaroni, Basreng, Keripik Kaca), nama varian tebal, harga warna Crunchy Orange.
  * *Aksi:* Tombol lebar di bawah tiap produk dengan teks `Beli Sekarang` (Warna dasar Fiery Red).

### E. Section: Panduan Level Pedas
* **Heading:** Berani Coba Level Berapa?
* **Visualisasi Level (Progresi Warna):**
  * **Level 1 (Pemula):** Warna aksen kuning/krem gelap - Pedas manja, aman di perut.
  * **Level 2 (Menengah):** Warna aksen Crunchy Orange - Pedas gurih, pas buat ngemil santai.
  * **Level 3 (Ekstrem):** Warna aksen Fiery Red - Pedas gila, khusus buat yang nyari keringat.

### F. Footer
* **Background:** Warna Espresso Brown (`#292524`).
* **Konten:** 
  * Teks menggunakan warna krem/putih tulang agar kontras dan mudah dibaca.
  * Tautan navigasi cepat, jam buka, dan kontak pesanan.
* **Copyright:** © 2026 [Nama Brand]. Dibuat dengan penuh rasa pedas.