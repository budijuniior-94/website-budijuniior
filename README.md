# RuangBaca — Website Majalah Digital

Website majalah statis modern untuk GitHub Pages. Dibangun dengan HTML, CSS, dan JavaScript tanpa backend.

## Fitur
- Desain responsif desktop dan mobile
- Hero / artikel pilihan
- Daftar artikel contoh
- Filter kategori dan pencarian
- Modal untuk membaca artikel
- Tombol tema gelap
- Form newsletter demo (belum menyimpan email ke server)

## Cara memasang di GitHub
1. Ekstrak ZIP.
2. Buka repository `website-budijuniior` di GitHub.
3. Klik **Add file → Upload files**.
4. Unggah `index.html`, `style.css`, `script.js`, dan `README.md` (folder `assets` boleh ikut diunggah jika nanti diisi).
5. Pilih **Commit changes** pada branch `main`.
6. Buka **Settings → Pages** dan pastikan source `Deploy from a branch`, branch `main`, folder `/(root)`.
7. Tunggu workflow `pages build and deployment` selesai dengan centang hijau.
8. Buka `https://budijuniior-94.github.io/website-budijuniior/`.

## Mengubah konten
Buka `script.js`, lalu edit array `articles`. Setiap artikel memiliki:
- `id`
- `category`
- `date`
- `read`
- `title`
- `excerpt`
- `image`
- `body`

Gunakan URL gambar milik sendiri atau gambar yang memiliki izin penggunaan. Foto contoh saat ini memakai Unsplash Source URL dan memerlukan koneksi internet.

## Catatan
- Ini adalah website frontend statis.
- Form newsletter hanya simulasi; belum mengirim atau menyimpan alamat email.
- Belum ada CMS, login admin, database, atau fitur unggah artikel.
- Jangan menaruh password, API key, atau data rahasia di file frontend publik.
