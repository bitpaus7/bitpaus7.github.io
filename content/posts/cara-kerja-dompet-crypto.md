---
title: "Cara kerja dompet crypto Dengan Seed Phrase"
date: 2024-12-01
slug: /cara-kerja-dompet-crypto/
image: /images/bip39.webp
tags:
  - opini
  - tutorial

draft: false
---

Dalam pembuatan dompet kripto, seed phrase adalah elemen penting yang memungkinkan pengguna memulihkan dompet mereka kapan saja. Ether.js menyediakan mekanisme untuk membuat dompet dari seed phrase dengan keamanan dan keunikan yang sangat tinggi.

Berikut adalah penjelasan tentang proses ini dan bagaimana seed phrase memastikan dompet yang dihasilkan adalah asli dan unik.

### Apa itu seed phrase

Seed phrase, atau recovery phrase, adalah sekumpulan 12 atau 24 kata acak yang dihasilkan dari proses kriptografi. Kata-kata ini berfungsi sebagai representasi dari kunci privat dompet kripto. Seed phrase dirancang untuk mudah diingat oleh manusia dan sangat aman, sehingga pengguna dapat memulihkan dompet kapan saja.

Dengan standar BIP39 kombinasi yang dihasilkan adalah.

{{< figure src="/images/jumlah-kombinasi.jpg" alt="ilustrasi dompet menurut chatgpt" caption="jumlah kombinasi yang dapat dihasilkan" width="80%" >}}

Setiap dompet yang dihasilkan dari seed phrase menggunakan Ether.js adalah asli dan bukan salinan dari dompet lain. Proses acak dan deterministik dalam pembuatan seed phrase memastikan bahwa dompet benar-benar baru dan aman untuk digunakan dalam transaksi kripto.

### Standar BIP-39 Diciptakan untuk Memudahkan Pengguna

BIP-39 (Bitcoin Improvement Proposal 39) diperkenalkan untuk membuat proses backup dan pemulihan dompet lebih ramah pengguna. Sebelum standar ini, pengguna harus mencatat kunci privat dalam format hexadecimal yang panjang dan sulit diingat.

Contoh Private keys bitcoin

> L1scNH9xeW7uXwKFgPJvcivXcsYd5YheQgKX891esWh3ZN8a221L

Meskipun BIP-39 awalnya dibuat untuk Bitcoin, namun standar ini kini digunakan di berbagai blockchain seperti Ethereum, Binance Smart Chain, Tron, Cardano dan lain-lain.

inti nya seed phrase membungkus banyak private keys sekaligus,
