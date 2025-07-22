# Website Profil Perusahaan (Full-Stack)

Proyek ini adalah sebuah website profil perusahaan yang dinamis, dibangun sebagai bagian dari Uji Kompetensi Keahlian (UKK) untuk sertifikasi Junior Web Developer. Website ini tidak hanya menampilkan halaman statis, tetapi juga memiliki sistem backend dengan fungsionalitas admin.

## Deskripsi Proyek

Website ini dirancang untuk menjadi representasi online sebuah perusahaan. Terdiri dari dua bagian utama:

1.  **Situs Publik**: Halaman yang dapat diakses oleh semua pengunjung, berisi informasi umum seperti profil, visi & misi, produk, kontak, dan galeri.
2.  **Area Admin**: Halaman yang dilindungi dan hanya bisa diakses setelah login. Admin dapat mengelola konten, seperti mengunggah file atau informasi penting lainnya.

## Fitur Utama

- **Desain Responsif**: Tampilan situs dapat beradaptasi dengan baik di berbagai perangkat (desktop, tablet, dan mobile) menggunakan framework Bootstrap 5.
- **Navigasi Konsisten**: Struktur header, sidebar, dan footer yang seragam di semua halaman untuk pengalaman pengguna yang baik.
- **Otentikasi Berbasis Client-Side (localStorage)**:
    - Sistem login dan pendaftaran sepenuhnya dikelola di browser menggunakan `localStorage`.
    - Pengguna dapat mendaftar melalui halaman `signup.html`.
    - Data pengguna (username, email, password) disimpan di `localStorage` dan divalidasi saat login.

- **Rute Terproteksi**: Halaman admin dan fungsionalitas upload hanya bisa diakses oleh pengguna yang sudah login.
- **Fungsionalitas Upload File**: Admin dapat mengunggah file melalui halaman admin, yang akan disimpan di server menggunakan **multer**.

## Status Proyek

**Selesai dan Stabil** - Semua fitur utama yang dijelaskan di atas telah diimplementasikan dan berfungsi dengan baik. Proyek saat ini dalam tahap pemeliharaan dan penyempurnaan, dengan fokus pada perbaikan antarmuka pengguna (UI/UX) dan memastikan konsistensi di seluruh halaman.

## Ringkasan Perbaikan Terbaru

- **Perbaikan Dropdown Sidebar**: Memperbaiki semua dropdown di menu sidebar yang sebelumnya tidak berfungsi agar kompatibel dengan Bootstrap 5.
- **Konsistensi Navigasi**: Menyamakan struktur sidebar di semua halaman, termasuk halaman login dan signup, untuk pengalaman pengguna yang lebih baik.
- **Perbaikan Logo Klien**: Mengganti URL logo klien yang rusak dengan sumber yang valid dan stabil.
- **Penyempurnaan Layout**: Melakukan berbagai perbaikan kecil pada tata letak halaman untuk meningkatkan profesionalitas dan keterbacaan.
- **Migrasi ke Client-Side**: Sistem otentikasi diubah total dari yang sebelumnya menggunakan database (SQLite) dan sesi (server-side) menjadi sepenuhnya berbasis `localStorage` (client-side).
- **Implementasi Ulang Pendaftaran**: Fitur pendaftaran yang sempat dihapus, kini diimplementasikan kembali menggunakan `localStorage`.

## Teknologi yang Digunakan

- **Frontend**:
    - `HTML5`
    - `CSS3`
    - `Bootstrap 5` (Untuk layout dan komponen UI)

- **Backend**:
    - `Node.js` (Sebagai runtime environment)
    - `Express.js` (Sebagai framework server)

- **Paket/Library Node.js Penting**:
    - `express`: Framework web untuk menyajikan file statis.
    - `multer`: Middleware untuk menangani `multipart/form-data` (upload file).

## Cara Menjalankan Proyek Secara Lokal

1.  **Prasyarat**: Pastikan Node.js dan npm sudah terinstal di komputer Anda.

2.  **Clone Repositori** (jika sudah ada di Git):
    ```bash
    git clone <URL_REPOSITORI_ANDA>
    cd <NAMA_FOLDER_PROYEK>
    ```

3.  **Instalasi Dependensi**:
    Buka terminal di direktori proyek dan jalankan perintah berikut untuk menginstal semua paket yang dibutuhkan dari `package.json`.
    ```bash
    npm install
    ```

4.  **Jalankan Server**:
    Setelah instalasi selesai, jalankan server dengan perintah:
    ```bash
    node server.js
    ```

5.  **Akses Website**:
    Buka browser dan kunjungi `http://localhost:3000`.

## Struktur Proyek

```
/                     # Direktori utama
├── node_modules/     # Folder berisi semua dependensi (dibuat oleh npm install)
├── uploads/          # Folder untuk menyimpan file yang diunggah oleh admin
├── about.html        # Halaman Tentang Kami
├── clients.html      # Halaman Klien
├── event.html        # Halaman Event
├── gallery.html      # Halaman Galeri
├── index.html        # Halaman utama (Home)
├── kontak.html       # Halaman Kontak
├── login.html        # Halaman Login
├── signup.html       # Halaman Pendaftaran Pengguna
├── produk.html       # Halaman Produk
├── profile.html      # Halaman Profil
├── visi_misi.html    # Halaman Visi & Misi
├── package.json      # Daftar dependensi dan informasi proyek
├── package-lock.json # Merekam versi pasti dari setiap dependensi
├── server.js         # Backend server (hanya untuk menyajikan file dan upload)
└── style.css         # File styling kustom
```
