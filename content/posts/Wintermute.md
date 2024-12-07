---
title: "Kronologi Wintermute"
date: 2024-09-20
slug: /kronologi-wintermute/
image: images/wintermute.webp
tags:
  - berita
draft: false
---

Wintermute telah kehilangan lebih dari $160 juta dalam insiden kedua mereka musim panas ini. Pada bulan Juni, penyedia pasar ini mengirimkan 20 juta token OP ke akun yang tidak mereka kendalikan. Kini, dompet panas mereka telah terkompromi, kemungkinan besar melalui penggunaan alamat vanity yang dibuat dengan alat rentan Profanity. Kehilangan ini diumumkan oleh CEO Wintermute, Evgeny Gaevoy, sekitar tiga jam setelah pencurian tersebut:

"Kami telah diretas sekitar $160 juta dalam operasi DeFi kami. Operasi Cefi dan OTC tidak terpengaruh. Kami masih solvent dengan ekuitas dua kali lipat dari jumlah itu yang tersisa."

CEO perusahaan tersebut menyatakan bahwa penggunaan alamat vanity ini dimaksudkan untuk "penghematan gas" sebuah pilihan yang sangat mahal. Ketika Wintermute mengalami kerugian sebelumnya, pelaku mengembalikan (sebagian besar) dana yang dicuri. Apakah mereka akan tetap beruntung kali ini?

Alamat peretas:
[0xe74b28c2eAe8679e3cCc3a94d5d0dE83CCB84705](https://etherscan.io/address/0xe74b28c2eAe8679e3cCc3a94d5d0dE83CCB84705)
Kontrak serangan:
[0x0248f752802b2cfb4373cc0c3bc3964429385c26](https://etherscan.io/address/0x0248f752802b2cfb4373cc0c3bc3964429385c26)
Transaksi utama serangan:
[0xedd31e2a…](https://etherscan.io/tx/0xedd31e2a949b7957a786d44b071dbe1bc5abd5c57e269edb9ec2bf1af30e9ec4)
Transaksi serangan kedua:
[0xc253450f…](https://etherscan.io/tx/0xc253450fc3e0e124224aef2936c13b371a86056e82e778113fc3ce8800bbe876)

Penyebab yang mungkin dari peretasan ini adalah kelemahan dalam alat Profanity yang digunakan untuk membuat alamat vanity. Setelah pengungkapan kerentanannya minggu lalu, $3,3 juta dicuri dari berbagai dompet oleh alamat 0x6AE09A… dalam beberapa hari berikutnya. Baik dompet panas Wintermute maupun kontrak vault DeFi mereka tampaknya memiliki alamat vanity, dengan beberapa angka nol di depan. Kunci pribadi dompet panas kemungkinan besar terkompromi dan digunakan untuk menguras vault.

Meskipun masalah keamanan pada alamat yang dihasilkan oleh Profanity baru-baru ini menjadi sorotan, masalah ini sebenarnya sudah dibahas di GitHub proyek tersebut pada bulan Januari.

Vault hanya memungkinkan admin untuk melakukan transfer ini, dan dompet panas Wintermute adalah admin, sebagaimana diharapkan. Oleh karena itu, kontrak berfungsi seperti yang diharapkan, tetapi alamat admin itu sendiri kemungkinan besar terkompromi. Sekitar saat pengungkapan ini terjadi, Wintermute menghapus seluruh ether dari alamat admin ini yang menunjukkan bahwa mereka menyadari adanya potensi kerentanannya. Namun, mereka lupa untuk menghapus alamat tersebut sebagai admin dari vault mereka.

Dana yang dicuri sebagian besar terdiri dari stablecoin, totalnya $118,4 juta. Sebagian besar dari dana ini disetor ke 3pool di Curve, kemungkinan besar untuk menghindari pemblokiran. Pelaku sekarang menjadi pemegang 3CRV terbesar ketiga dengan lebih dari 13% dari pasokan yang ada.

Tornado 3pool?
Sisa loot terdiri dari 671 WBTC (~$13 juta) dan 6.928 ETH ($9,4 juta) serta berbagai token lainnya. Pada saat penulisan, alamat pelaku diperkirakan bernilai sekitar $162,3 juta. Meskipun pernyataan Wintermute meyakinkan bahwa "tidak akan ada penjualan besar," beberapa token dengan kapitalisasi pasar lebih kecil berisiko terhadap potensi dump, dengan hingga 21% dari pasokan beredar yang dicuri dalam peretasan ini:

$PRIMATE 21%
$CUBE 12%
$NYM 2,44%
$eXRD 1,93%
$YGG 1,17%

Sebagian besar aset belum dipertukarkan. Apakah pelaku mencoba bernegosiasi untuk mendapatkan hadiah white-hat?

Tak lama setelah berita ini muncul, peluncuran token honeypot, WinterMuteInu, dipalsukan dari alamat pelaku untuk memanfaatkan perhatian semua orang yang menunggu tanda-tanda pergerakan. Penipu tersebut menambah likuiditas sebesar 35 ETH ke kolam Uniswap, yang sejauh ini telah mengumpulkan sekitar 166 ETH (~ $225k).

Insiden hari ini menandai peretasan besar pertama sejak sanksi terhadap Tornado Cash bulan lalu. Jika Wintermute tidak berhasil mengambil kembali dana tersebut, menarik untuk melihat bagaimana dana tersebut dicuci. Pasca-sanksi Tornado, potensi penggunaan 3pool sebagai pengganti mixer harus menjadi perhatian bagi semua pengguna Curve. Tapi untuk saat ini, tetap rendah hati...
