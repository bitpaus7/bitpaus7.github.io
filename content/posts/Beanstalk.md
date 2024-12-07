---
title: "Kronologi peretasan Beanstalk"
date: 2024-04-17
slug: /kronologi-peretasan-beanstalk/
image: images/beanstalk.webp
tags:
  - berita

draft: false
---

Sebuah proposal pemerintahan jahat berhasil diloloskan melalui pinjaman kilat, dan pelaku kemudian memberikan suara untuk mentransfer semua aset ke akun mereka sendiri.

Serangan dimulai dengan pelaku yang memperoleh kekuatan suara yang cukup untuk segera melaksanakan proposal pemerintahan darurat yang merugikan, yang menguras protokol. Meskipun serangan tersebut terjadi dengan cepat, beberapa persiapan sebelumnya diperlukan:

terdapat penundaan sekitar satu hari untuk semua tindakan pemerintahan dalam kontrak $BEAN. Pelaku sebenarnya sudah mempersiapkan serangan ini sejak kemarin dengan mengajukan dua proposal pemerintahan. Proposal pertama (#18) mencuri semua uang dalam kontrak. Proposal berikutnya (#19) mengirimkan dana senilai $250 ribu dalam bentuk $BEAN ke alamat donasi Ukraina. Proposal Ukraina ini dinamai Bip18 (bukan Bip19).

Setelah penundaan selesai, serangan pun dilaksanakan: Pelaku memperoleh dana melalui jembatan Synapse Protocol [meskipun awalnya berasal dari Tornado]. Mereka menggunakan pinjaman kilat untuk mendapatkan:

- 350 juta DAI, 500 juta USDC, dan 150 juta USDT dari Aave;
- 32 juta BEAN dari Uniswap v2;
- 11,6 juta LUSD dari SushiSwap.

Token-token ini digunakan untuk menambah likuiditas di kolam Curve dengan BEAN untuk voting pemerintahan. Selanjutnya, mereka meluncurkan dan memberikan suara untuk BIP-18 palsu yang memindahkan seluruh dana dari kontrak protokol ke akun pelaku. Langkah berikutnya adalah menghapus likuiditas, membayar pinjaman kilat, dan mengonversi semua dana yang diterima menjadi 24,8 ribu WETH ($76 juta), yang kemudian dikirim ke Tornado Cash.

Alamat Pelaku:

Hacker:
>[0x1c5dcdd006ea78a7e4783f9e6021c32935a10fb4](https://etherscan.io/address/0x1c5dcdd006ea78a7e4783f9e6021c32935a10fb4)
Kontrak Hacker:
>[0x79224bc0bf70ec34f0ef56ed8251619499a59def](https://etherscan.io/address/0x79224bc0bf70ec34f0ef56ed8251619499a59def)
BIP18:
>[0xe5ecf73603d98a0128f05ed30506ac7a663dbb69](https://etherscan.io/address/0xe5ecf73603d98a0128f05ed30506ac7a663dbb69)
Transaksi Proposal BIP18:
>[0x68cdec0ac76454c3b0f7af0b8a3895db00adf6daaf3b50a99716858c4fa54c6f](https://etherscan.io/tx/0x68cdec0ac76454c3b0f7af0b8a3895db00adf6daaf3b50a99716858c4fa54c6f)
Transaksi Hack:
>[0xcd314668aaa9bbfebaf1a0bd2b6553d01dd58899c508d4729fa7311dc5d33ad7](https://etherscan.io/tx/0x68cdec0ac76454c3b0f7af0b8a3895db00adf6daaf3b50a99716858c4fa54c6f)

### Langkah-langkah Serangan:

1. Flashloan 350 juta DAI, 500 juta USDC, 150 juta USDT, 32,425,202 BEAN, dan 11,643,065 LUSD.
2. Menambahkan likuiditas dengan 350 juta DAI, 500 juta USDC, dan 150 juta USDT untuk mendapatkan 979,691,328 3Crv.
3. Menukarkan 15 juta 3Crv menjadi 15,251,318 LUSD.
4. Mengonversi 964,691,328 3Crv menjadi 795,425,740 BEAN3CRV-f.
5. Menambahkan likuiditas untuk mengonversi 32 juta BEAN dan 26 juta LUSD menjadi 58,924,887 BEANLUSD-f.
6. Menyimpan likuiditas ke Diamond.
7. Melakukan voting untuk BIP-18.
8. Menjalankan eksekusi kontrak dan mengalihkan dana ke kontrak pelaku.
9. Menghapus likuiditas dan membayar kembali pinjaman kilat.
10. Mengonversi dana menjadi 24,8 ribu WETH dan mengirimnya ke Tornado Cash.

Penting untuk dicatat bahwa meskipun serangan ini sukses besar, pelaku mengambil langkah-langkah untuk menghindari kecurigaan dengan menyembunyikan identitas mereka. Pengelola protokol, Publius, yang anonim sebelumnya, memutuskan untuk mengungkapkan identitas mereka sebagai sekelompok tiga orang dalam sebuah pernyataan yang dipublikasikan di Discord.

Omniscia juga mencatat bahwa serangan ini berada di luar cakupan audit mereka, meskipun laporan mereka menyebutkan kontrak pemerintahan. Meskipun demikian, ini menjadi kejutan bahwa kerentanannya tidak terdeteksi sebelumnya, mengingat pinjaman kilat bukanlah ancaman baru bagi tata kelola DeFi. Penundaan eksekusi proposal pemerintahan dapat menjadi cara untuk mencegah serangan seperti ini.

Peristiwa ini dapat mendorong pemegang token untuk lebih hati-hati dalam memantau proposal pemerintahan. Namun, pengguna biasa mungkin mengharapkan bahwa proyek besar seperti Beanstalk sudah dipantau oleh pihak yang lebih berpengalaman.
