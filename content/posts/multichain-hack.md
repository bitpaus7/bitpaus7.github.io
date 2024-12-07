---
title: "Kronologi Multichain"
date: 2023-06-07
slug: /multi-chain/
image: images/multichain.webp
tags:
  - berita

draft: false
---

Multichain, proyek blockchain yang sebelumnya dikenal sebagai Anyswap, kembali menjadi sorotan setelah mengalami peretasan besar-besaran. Kali ini, dana senilai $126 juta dikuras dari alamat-alamat Multichain, mencakup sekitar 50% dari aset di jembatan Fantom (FTM) dan 80% dari aset di jembatan Moonriver.

### Sejarah Peretasan Multichain

Insiden ini bukan kali pertama Multichain mengalami masalah keamanan:

1. Tahun 2021: Saat masih bernama Anyswap, proyek ini diretas dengan kerugian mencapai $8 juta.
   2.. Awal 2022: Enam kontrak multi-token ditemukan rentan terhadap serangan yang menguras persetujuan pengguna, menyebabkan kerugian $3 juta.
2. Mei 2024: Multichain memicu kepanikan setelah keterlambatan bridging, rumor pembajakan oleh orang dalam, dan dugaan penangkapan timnya. Semua ini dijelaskan dengan istilah samar "force majeure".

### Kronologi Insiden

Kemarin, sejumlah besar aset yang terkunci di alamat Multichain MPC dipindahkan ke alamat yang tidak dikenal secara tidak wajar. Pernyataan resmi dari tim Multichain justru memicu lebih banyak kekhawatiran:

> "Aset yang terkunci di alamat Multichain MPC telah dipindahkan ke alamat tidak dikenal secara tidak normal. Tim belum yakin apa yang terjadi dan sedang menyelidiki. Disarankan agar semua pengguna menghentikan penggunaan layanan Multichain dan mencabut semua persetujuan kontrak terkait."

Fantom, yang sangat bergantung pada versi aset non-native seperti USDC, USDT, DAI, wETH, dan wBTC dari Multichain, juga tidak memiliki jawaban atas insiden ini.

### Kemungkinan Penyebab Peretasan

Sementara vektor serangan pasti belum diketahui, transaksi yang dilakukan menunjukkan bahwa penyerang dapat mengendalikan alamat secara langsung. Beberapa metode yang memungkinkan mencakup:

- Pelanggaran sistem backend,
- Pencurian kunci pribadi melalui spearphishing, atau
- Tindakan insider yang berbahaya.

Skenario serupa terjadi pada tahun 2021, ketika Anyswap diretas. Saat itu, penyerang mampu menghitung ulang kunci pribadi dari data transaksi v3 yang baru diluncurkan.

### Alamat Peretas dan Aset yang Dicuri

Berikut daftar alamat yang digunakan peretas dan jumlah aset di masing-masing:

$16.7 juta (DAI,LINK,USDT,CRV)

> [0x9d5765ae1c95c21d4cc3b1d5bba71bad3b012b68](https://etherscan.io/address/0x9d5765ae1c95c21d4cc3b1d5bba71bad3b012b68)

$30.1 juta (USDC)

> [0xefeef8e968a0db92781ac7b3b7c821909ef10c88](https://etherscan.io/address/0xefeef8e968a0db92781ac7b3b7c821909ef10c88)

$13.4 juta (wETH)

> [0x418ed2554c010a0c63024d1da3a93b4dc26e5bb7](https://etherscan.io/address/0x418ed2554c010a0c63024d1da3a93b4dc26e5bb7)

$30.9 juta (wBTC)

> [0x622e5f32e9ed5318d3a05ee2932fd3e118347ba0](https://etherscan.io/address/0x622e5f32e9ed5318d3a05ee2932fd3e118347ba0)

$7.5 juta (USDC,USDT,DAI,wBTC dari Moonriver)

> [0x48bead89e696ee93b04913cb0006f35adb844537](https://etherscan.io/address/0x48bead89e696ee93b04913cb0006f35adb844537)

$27.7 juta (USDC)

> [0x027f1571aca57354223276722dc7b572a5b05cd8](https://etherscan.io/address/0x027f1571aca57354223276722dc7b572a5b05cd8)

### Dugaan Tindakan Whitehat

Hingga saat ini, dana yang dicuri belum ditukar atau dipindahkan lebih jauh. Hal ini menimbulkan spekulasi bahwa tindakan ini mungkin dilakukan oleh seorang whitehat yang mencoba menunjukkan celah keamanan. Selain itu, lebih dari setengah jumlah dana yang dicuri ($65 juta) dapat dibekukan oleh Tether dan Circle.

### Jembatan Blockchain: Rentan dan Berisiko

Insiden ini menambah daftar panjang peretasan jembatan blockchain, menyusul peretasan Poly Network minggu lalu yang menyebabkan kompromi multisig. Ini menjadi pengingat atas peringatan Vitalik Buterin tentang risiko jembatan lintas-chain.

Seperti yang terjadi dalam peretasan Wormhole senilai $300 juta, kepercayaan terhadap teknologi baru yang belum matang dapat mengakibatkan kerugian besar.
