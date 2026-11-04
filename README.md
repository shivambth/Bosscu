# Untuk Aira — My Favourite Chapter ❤️

Digital love book statis untuk GitHub Pages. Dibuat dengan HTML, CSS, dan vanilla JavaScript.

## Isi
- `index.html`, `style.css`, `script.js`
- 160 layar/halaman yang dibangun dari konten cerita, surat, 100 alasan, foto, amplop, masa depan, dan 9 mini-game.
- Layout buku ukuran sedang, warna cokelat gelap dan champagne-gold, halaman krem, navigasi tombol/keyboard/swipe.
- Tidak ada backend, API berbayar, atau audio autoplay.

## Menambahkan foto asli tanpa mengganti nama file
Browser GitHub Pages tidak bisa membaca daftar isi folder secara otomatis. Karena itu, halaman album memakai placeholder yang aman sampai nama file asli dimasukkan.

1. Unggah foto-foto milikmu ke folder `assets/photos/` dengan nama aslinya.
2. Buka `script.js`, cari fungsi `renderPhotos(p)`.
3. Ganti bagian `const placeholder`/pembuatan placeholder dengan daftar nama file asli yang kamu miliki. Contoh pola pemakaian (gunakan nama file ASLI milikmu):

```js
const photoFiles = [
  "NAMA_FILE_ASLI_1.jpeg",
  "NAMA_FILE_ASLI_2.jpg"
];
// Untuk menampilkan:
// <img src="assets/photos/${encodeURIComponent(photoFiles[n])}" alt="Kenangan Aira" style="object-fit:contain">
```

Jangan gunakan nama contoh di atas sebagai nama file sungguhan. Masukkan tepat nama yang ada di foldermu. Foto tidak diubah, dihapus, atau ditimpa oleh proyek ini.

## Jalankan di GitHub Pages
1. Buat repository GitHub baru.
2. Unggah `index.html`, `style.css`, `script.js`, dan folder `assets/photos/` beserta foto aslimu.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, lalu Save.
5. Tunggu URL Pages muncul, lalu buka URL tersebut di iPhone.

## Catatan penting
- Pesan yang ditulis Aira disimpan di `localStorage` browser/perangkat yang dipakai dan tidak dikirim ke Shivam.
- Tidak ada tanggal pertemuan yang dibuat-buat. Bagian masa depan menyebut harapan bertemu tahun depan dan bahwa Aira pernah menyebut 2028.
- Konten menggunakan detail yang diberikan. Periksa kembali ejaan/panggilan sebelum membagikan tautan.
- Font eksternal dari Google Fonts dipakai sebagai peningkatan visual; jika offline, fallback font tetap bekerja.
