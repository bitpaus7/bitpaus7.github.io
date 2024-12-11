---
title: "Kronologi Peretasan Gala Games"
date: 2024-05-21
slug: /Kronologi-peretasan-gala-games/
image: images/gala.webp
tags:
  - berita

draft: false
---

Gala Games, sebuah proyek blockchain populer, menjadi sorotan akibat peretasan besar yang hampir mengakibatkan kerugian sebesar $216 juta. Peretasan ini melibatkan pencetakan ilegal 5 miliar token GALA dan menjual sebagian besar token tersebut untuk Ethereum (ETH). Berikut ini adalah penjelasan sederhana dan lengkap tentang apa yang terjadi.

### Awal Mula Serangan

1. Akses Admin Diretas
   Hacker berhasil menguasai alamat admin pada kontrak token GALA. Dengan kendali penuh ini, mereka mencetak 5 miliar token GALA, yang bernilai $216 juta pada saat itu.
2. Penjualan Token
   Setelah mencetak token, hacker memulai penjualan bertahap. Mereka menjual 592 juta token GALA melalui platform 0xProject, mendapatkan sekitar $21,8 juta dalam bentuk Ethereum (ETH). Penjualan dilakukan dalam batch 100 ETH untuk menghindari deteksi cepat.
3. Tindakan Gala Games
   Saat aktivitas mencurigakan terdeteksi, Gala Games segera bertindak:

- Menggunakan fungsi blocklist pada kontrak V2 untuk menghentikan aktivitas dompet hacker.
- Menghubungi FBI, Departemen Kehakiman AS (DOJ), dan otoritas internasional untuk menyelidiki insiden ini.
- Mengonfirmasi bahwa kontrak ETH untuk token GALA tetap aman, terlindungi oleh dompet multisignature, dan tidak ikut diretas.

### Detail Teknikal Peretasan

Menurut analisis dari Hacken, hacker memanfaatkan celah keamanan di sistem kontrol akses (access control). Berikut adalah langkah-langkah yang dilakukan:

1. Mengakses Akun Dormant
   Hacker mendapatkan kontrol atas akun MINTER yang sudah tidak aktif selama lebih dari 180 hari. Akun ini ternyata masih memiliki izin untuk mencetak token.
2. Persiapan Biaya Transaksi
   Hacker mengirimkan 2 ETH ke dompet yang mereka kendalikan untuk memastikan mereka memiliki gas fee untuk transaksi berikutnya.
3. Pencetakan dan Penjualan
   Setelah mencetak 5 miliar token GALA, hacker mulai menukarkan token tersebut ke ETH, menggunakan batch hingga 100 ETH per transaksi.

### Keadaan Mencurigakan Sebelum Peretasan

Beberapa kejadian sebelum insiden ini menimbulkan spekulasi adanya sabotase internal:

1. Pengunduran Diri Tokoh Kunci
   Tiga hari sebelum peretasan, Jason Brink (Bitbender), presiden blockchain Gala, mengumumkan perubahan perannya menjadi penasihat tidak tetap. Ia juga mengungkapkan bahwa beberapa staf Gala akan keluar dan membentuk organisasi baru bernama Let’s Fight Giants (LFG).
2. Catatan Insiden Sebelumnya
   Gala Games memiliki sejarah insiden keamanan: - 2021: Perusahaan kehilangan $130 juta akibat pencurian 8,65 miliar token GALA. Insiden ini melibatkan konflik internal antara pendiri Gala, Eric Schiermeyer dan Wright Thurston. - 2022: Ketakutan akan rug pull atau peretasan besar sempat menyebabkan harga GALA anjlok 25,6%.

### Dampak pada Komunitas dan Pasar

1. Harga Token Anjlok
   Ketakutan akibat peretasan menyebabkan harga GALA turun sekitar 20%, bertolak belakang dengan tren positif pasar yang didorong kabar potensi ETF Ethereum.
2. Langkah Stabilitas
   Untuk menenangkan pasar, DWF Labs membeli 28 juta token GALA senilai $1,2 juta demi menstabilkan harga.
3. Keraguan Komunitas
   Dengan catatan insiden keamanan yang panjang, banyak anggota komunitas mulai kehilangan kepercayaan terhadap Gala Games.

### Kesimpulan dan Pertanyaan yang Tersisa

Peretasan ini menyoroti pentingnya pengelolaan keamanan kontrak cerdas dalam proyek blockchain. Beberapa pertanyaan penting yang masih belum terjawab:

Apakah ini murni peretasan eksternal, atau ada unsur sabotase internal?
Dengan sejarah insiden keamanan Gala, apakah perusahaan ini dapat memulihkan kepercayaan komunitas?
