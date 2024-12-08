---
title: "Kronologi Peretasan Bonqdao"
date: 2023-02-03
slug: /kronologi-peretasan-bonqdao/
image: images/bonqdao.webp
caption: ImmuneBytes
tags:
  - berita

draft: false
---

Protokol lending dan stablecoin berbasis Polygon, BonqDAO, menjadi korban peretasan senilai $120 juta. Namun, dari jumlah tersebut, peretas hanya berhasil mengamankan kurang dari $2 juta. Serangan yang terjadi pada hari Rabu ini melibatkan manipulasi oracle dalam dua tahap.

### Kronologi Serangan

Peringatan pertama tentang peretasan ini muncul di Twitter oleh pengguna @spreekaway, yang melaporkan aksi dumping dana curian secara langsung. Beberapa jam setelahnya, BonqDAO dan AllianceBlock, yang token ALBT-nya digunakan dalam eksploitasi, mengonfirmasi insiden tersebut.

Meskipun aktivitas peretasan terlihat jelas di blockchain, admin grup Telegram BonqDAO mencoba meredam kekhawatiran sambil timnya bekerja untuk memahami apa yang sebenarnya terjadi.

"FUD dan spam tidak akan ditoleransi," tulis salah satu admin.
Namun, fakta di blockchain berkata lain. Peretasan ini melibatkan manipulasi oracle yang memungkinkan peretas memalsukan nilai kolateral untuk meminjam stablecoin secara berlebihan.

### Alamat Terkait Peretas dan Kontrak

Alamat Peretas: 0xcacf2d28b2a5309e099f0c6e8c60ec3ddf656642
Contoh Transaksi Peretasan: 0x31957ecc...
Kontrak yang Diserang: 0x8f55d884cad66b79e1a131f6bcb0e66f4fd84d5b

### Tahapan Peretasan

1. #### Manipulasi Harga ALBT

   Peretas menggunakan kontrak TellorFlex untuk secara manual memperbarui harga kolateral WALBT dengan cara menyetor 10 token TRB (bernilai sekitar $175). Melalui fungsi submitValue, peretas melaporkan harga palsu WALBT ke oracle. Karena BonqDAO menggunakan nilai instan dari oracle ini, peretas bisa meminjam melawan kolateral yang nilainya telah digelembungkan.

1. #### Peningkatan Harga dan Likuidasi Kolateral
   Harga ALBT dinaikkan, memungkinkan peretas mencetak 100 juta BEUR (stablecoin yang dipatok ke Euro) hanya dengan 0,1 WALBT sebagai kolateral.
   Dalam transaksi kedua, harga WALBT diturunkan drastis, menyebabkan kolateral pengguna lain dilikuidasi. Peretas berhasil mengumpulkan sekitar 113 juta WALBT dengan cara ini.

Hasilnya, BonqDAO kehilangan TVL (Total Value Locked) dari sekitar $13 juta menjadi hanya $100 ribu.

### Kerugian dan Dampak

Meskipun nilai token yang dicuri mencapai $120 juta berdasarkan harga saat peretasan, peretas hanya berhasil menukarkan sekitar $1,7 juta menjadi ETH dan DAI.

#### Saldo Peretas Saat Ini:

    711 ETH (~$1,2 juta)
    535 ribu DAI
    89 juta ALBT (dengan nilai sekitar $3 juta, meskipun sulit dijual karena likuiditas rendah).

Dana curian BEUR senilai $500 ribu ditukarkan di Polygon, lalu dikirim ke alamat Ethereum peretas, di mana ALBT dijual secara bertahap untuk mendapatkan ETH. Sebagian besar dana ini kemudian dimasukkan kembali ke Tornado Cash untuk mencuci hasil curian.

### Kelemahan pada BonqDAO

Audit dari Omniscia sebelumnya telah memperingatkan tentang "banyak kerentanan dan kelemahan desain inti". Namun, BonqDAO memutuskan untuk tidak menggunakan implementasi yang telah diaudit dan malah menggunakan oracle seperti Tellor, yang menjadi penyebab utama kerentanan ini.

Kerugian juga berdampak signifikan pada AllianceBlock, di mana likuidasi kolateral menyebabkan harga token ALBT turun hingga 75%. AllianceBlock berencana menerbitkan ulang token ini dan mendistribusikannya kepada pengguna berdasarkan snapshot sebelum peretasan.

Stablecoin BEUR juga kehilangan nilai, dengan harga turun sekitar 25% di bawah patokannya, sementara token BNQ milik BonqDAO juga turun lebih dari 30%.
