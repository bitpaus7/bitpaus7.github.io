---
title: "Kronologi Peretasan BadgerDao"
date: 2021-02-12
slug: /peratasan-badgerdao/
image: images/badger.webp
tags:
  - berita

draft: false
---

Pada tanggal 2 Desember 2021 pukul 00:00:23 UTC, komunitas kripto dikejutkan oleh serangan yang menargetkan BadgerDAO, sebuah proyek DeFi yang fokus membawa Bitcoin ke dunia keuangan terdesentralisasi. Peretas berhasil menyusupkan persetujuan tambahan (approvals) yang memungkinkan mereka menguras token dari dompet pengguna langsung ke alamat mereka sendiri.

### Kronologi Serangan

Serangan dimulai dengan peretas memanfaatkan celah pada proses deposit dan klaim reward di platform Badger. Ketika pengguna melakukan transaksi yang sah, sistem secara otomatis memberikan izin tak terbatas (unlimited wallet approvals) kepada alamat milik peretas. Akibatnya, peretas dapat memindahkan token terkait Bitcoin dari alamat pengguna tanpa hambatan.

Pihak BadgerDAO menghentikan kontrak pintar mereka sekitar 2 jam 20 menit setelah serangan dimulai. Langkah ini menghentikan transaksi jahat lebih lanjut, namun kerugian besar telah terjadi.

### Kerugian yang Diderita

Sebagian besar aset yang dicuri adalah token deposit vault yang kemudian dicairkan oleh peretas. Token yang berkaitan dengan BTC dikembalikan ke jaringan Bitcoin, sementara token ERC20 lainnya tetap berada di Ethereum. Contoh transaksi melibatkan pengurasan sekitar 900 byvWBTC senilai lebih dari $50 juta hanya dalam satu kali transaksi.

Menurut Peckshield, persetujuan pertama untuk alamat peretas terdeteksi hampir dua minggu sebelum serangan dimulai. Lebih dari 500 alamat pengguna memberikan izin kepada alamat peretas, yaitu:

> [0x1fcdb04d0c5364fbd92c73ca8af9baa72c269107](https://etherscan.io/address/0x1fcdb04d0c5364fbd92c73ca8af9baa72c269107)

### Penyebab dan Keamanan

Diduga, serangan ini melibatkan manipulasi antarmuka pengguna (front-end) BadgerDAO, yang telah disusupi sejak 12 hari sebelumnya. Ada pula rumor bahwa akun Cloudflare milik proyek telah diretas, meskipun belum ada konfirmasi resmi. Beberapa pengguna sempat melaporkan aktivitas mencurigakan di Discord Badger, termasuk penggunaan fungsi `increaseAllowance()` yang tidak biasa. Namun, laporan tersebut tampaknya tidak segera ditindaklanjuti oleh tim pengembang.

### Pelajaran dari Kasus BadgerDAO

1. **Diversifikasi adalah Kunci:** Jangan menyimpan seluruh aset di satu platform. Keamanan dalam DeFi sangat dinamis, bahkan proyek mapan seperti BadgerDAO dapat menjadi korban.
2. **Periksa Persetujuan Dompet:** Sebelum menandatangani transaksi, pengguna sebaiknya memeriksa keabsahan kontrak melalui alat seperti [Etherscan Token Approval Checker](https://etherscan.io/tokenapprovalchecker) untuk memastikan tidak ada izin yang diberikan secara tidak sengaja.
3. **Higienitas Dompet:** Praktik pengelolaan dompet yang baik, seperti mencabut persetujuan yang tidak digunakan, dapat meminimalkan risiko serangan.

### Langkah Mencegah Serangan di Masa Depan

Untuk mencapai adopsi DeFi yang lebih luas, ekosistem harus membuat proses keamanan menjadi lebih sederhana dan dapat diakses oleh pengguna awam. Misalnya, memperbaiki antarmuka pengguna agar transparan, atau memberikan peringatan otomatis untuk transaksi berisiko tinggi.

Kasus ini menjadi pengingat bahwa meskipun teknologi blockchain memberikan peluang besar, keamanan tetap menjadi prioritas utama. BadgerDAO hanyalah salah satu contoh bagaimana kerentanan kecil dapat berujung pada kerugian besar. Sebagai pengguna DeFi, mari terus waspada dan bijak dalam mengelola aset digital kita.
