---
title: "Kronologi Peretasan Brutal Nomad Bridge"
date: 2022-01-08
slug: /kronologi-nomad-bridge/
image: images/nomad.webp
tags:
  - berita

draft: false
---

Malam itu menjadi mimpi buruk bagi Nomad Bridge. Dalam waktu 2,5 jam, likuiditas senilai $190 juta hilang dalam serangan besar-besaran.

Menariknya, serangan ini sepenuhnya sesuai dengan prinsip DeFi: tanpa izin. Setelah serangan pertama terjadi, kabar langsung menyebar, dan banyak orang ikut memanfaatkan situasi untuk merebut sisa-sisa yang ada.

Jembatan lintas-chain (cross-chain bridge) terus menjadi titik lemah di ekosistem DeFi sekaligus target empuk bagi para peretas. Ketika serangan terjadi, kehancurannya sering kali total.

### Dampak ke Rantai Lain

Kerugian dari aset-aset yang tidak didukung telah menyebabkan kerusakan besar pada jaringan yang bergantung pada Nomad. Moonbeam, EVMOS, dan Milkomeda terkena dampak serius, dengan penurunan signifikan pada Total Value Locked (TVL) mereka.

Insiden ini juga unik karena sifatnya yang "siapa cepat dia dapat". Namun, beberapa pelaku mengklaim diri mereka sebagai whitehat. Banyak yang menunggu dan melihat berapa banyak dana yang akan dikembalikan nantinya.

Namun, melihat fakta bahwa empat dari lima insiden terbesar di leaderboard melibatkan jembatan lintas-chain, klaim Nomad bahwa mereka adalah “masa depan komunikasi lintas-chain yang optimis” tampaknya semakin sulit dipercaya.

### Apa Penyebabnya?

Masalah bermula dari pembaruan rutin pada bulan Juni, ketika kontrak Replica dari jembatan ini memiliki cacat keamanan fatal. Alamat 0x00 disetel sebagai trusted root, membuat semua pesan dianggap valid secara default.

Setelah percobaan pertama gagal (menghabiskan $350 ribu untuk gas), penyerang utama berhasil memanfaatkan cacat ini. Transaksi eksploitasi yang dilakukan penyerang pertama kemudian menjadi cetak biru yang diikuti oleh penyerang lainnya. Mereka hanya perlu menyalin transaksi process() melalui Etherscan, mengganti alamat mereka dengan alamat penyerang sebelumnya.

Fungsi process() bertanggung jawab untuk memproses semua pesan lintas-chain. Namun, pembaruan yang keliru membuat transaksi dengan nilai message 0 (yang biasanya tidak valid) dianggap valid karena 0x00 didefinisikan sebagai trusted root. Akibatnya, panggilan fungsi process() dapat dilakukan oleh siapa saja tanpa validasi lebih lanjut.

Serangan ini menjadi kekacauan penuh dengan aktivitas crowdhacking, upaya whitehat yang panik, dan intervensi MEV-bot.

### Siapa yang Terlibat?

Beberapa pelaku berhasil menarik jumlah besar, seperti

> [0x9634445e293A87aB77Ca3Cf5B43da94AaBc544B6](https://etherscan.io/address/0x9634445e293a87ab77ca3cf5b43da94aabc544b6#tokentxns)
> yang memperoleh $4 juta dan mengklaim bertindak sebagai whitehat:

“Saya akan mengembalikan uang ini, FBI tolong jangan panik. Saya tidak berniat mencuri dan ya, saya tahu alamat ini terdeteksi.”
Namun, beberapa nama lain bertindak sebaliknya. Misalnya, pelaku eksploitasi Rari Capital dari April lalu, yang mencuri hampir $3 juta dalam bentuk stablecoin dan langsung mencucinya melalui Tornado Cash.

Tiga alamat terbesar yang terlibat adalah:

> [0x56D8B635A7C88Fd1104D23d632AF40c1C3Aac4e3](https://etherscan.io/address/0x56D8B635A7C88Fd1104D23d632AF40c1C3Aac4e3)

> [0xBF293D5138a2a1BA407B43672643434C43827179](https://etherscan.io/address/0xBF293D5138a2a1BA407B43672643434C43827179)

> [0xB5C55f76f90Cc528B2609109Ca14d8d84593590E](https://etherscan.io/address/0xB5C55f76f90Cc528B2609109Ca14d8d84593590E)

### Respon Tim dan Dampak Ekosistem

Tim Nomad baru memberikan pengakuan resmi tiga jam setelah eksploitasi dimulai, sebuah respons yang dianggap terlambat. Eksploitasi dihentikan dengan mencabut kontrak Replica sebagai pemilik, tetapi dana sudah tidak dapat diselamatkan.

Rantai alternatif (alt-L1) seperti Moonbeam, EVMOS, dan Milkomeda mengalami kerugian besar pada TVL mereka:

Moonbeam: dari $300 juta ke $135 juta.
EVMOS: dari ~$7 juta ke ~$3 juta.
Milkomeda: dari $31 juta ke $20 juta.
Kerugian kepercayaan mungkin memiliki dampak lebih besar daripada hilangnya $190 juta.

### Pelajaran dari Insiden Ini

Serangan terhadap jembatan lintas-chain adalah yang paling menyakitkan karena dapat mencemari keseluruhan ekosistem. Meski demikian, industri DeFi perlahan belajar dari setiap insiden di leaderboard rekt.news.

Namun, saat ini masih banyak mangsa mudah di DeFi, dan para pemangsa terus mengintai dari atas. Apakah ini akan berubah di masa depan? Hanya waktu yang akan menjawab.
