---
title: "Kronologi Compound Finance"
date: 2021-10-04
slug: /compound-finance/
image: images/compound.webp
tags:
  - berita

draft: false
---

Pekan lalu, ditemukan kerentanan pada Compound Comptroller vault yang baru saja diperbarui. Akibatnya, sekitar $80 juta COMP secara keliru didistribusikan. Tim Compound berusaha meminimalkan kerugian yang terlihat, tetapi mereka tahu bahwa situasi ini hanya akan bertambah buruk.

Sekarang, sekitar $68,8 juta COMP lagi telah dikirim ke vault yang rentan tersebut, sehingga semakin banyak token COMP yang salah dibagikan. Bagaimana kesalahan ini bisa terjadi?

### Tidak Bisa Menghentikan Serangan

Setelah kerugian awal, Compound tidak dapat menghentikan serangan yang terus berlangsung. Siapa pun bisa memanggil fungsi drip() pada Reservoir vault Compound, yang secara otomatis akan mengisi kembali Comptroller dan menyebabkan lebih banyak COMP didistribusikan secara salah.

Reservoir Compound mengakumulasi 0,5 COMP per blok. Pada saat insiden pertama, Reservoir tidak dikosongkan selama kurang lebih dua bulan. Dengan lebih dari 200.000 COMP (~$68 juta) di dalam Reservoir, tim Compound hanya bisa menunggu dan berharap tidak ada yang menyadari bahwa kerusakan ini belum sepenuhnya selesai.

Namun, hanya tiga setengah hari setelah insiden pertama, rahasia ini terbongkar. Comptroller diisi ulang, dan tambahan $68,8 juta COMP dialokasikan ke vault yang rentan.

Seperti yang ditulis oleh Banteg:

"Jika menghitung kerugian awal sebesar $80 juta, $22 juta yang sudah diklaim setelah fungsi drip() dipanggil, serta $45 juta yang masih berisiko, maka total bug ini mencapai $147 juta."

### Bukan Eksploitasi, Melainkan "Kesalahan Bank"

Meskipun kerugian ini lebih menyerupai "kesalahan sistem" daripada eksploitasi, Compound tetap harus menghadapi konsekuensi yang berat. Sebelumnya, kasus serupa juga terjadi pada protokol Alchemix, yang kehilangan sekitar $6,5 juta akibat kesalahan mereka sendiri.

Namun, berbeda dengan Compound, Alchemix berhasil mendapatkan kembali 55% dana mereka karena pendekatan yang lebih persuasif. Compound, di sisi lain, tampaknya tidak seberuntung itu.

### Reaksi Leshner yang Kontroversial

Pendiri Compound, Robert Leshner, sebelumnya pernah berkomentar soal prinsip "code is law" dalam dunia DeFi, dengan mengatakan:

“Mengandalkan pengadilan tradisional merusak prinsip ‘code is law’ yang menjadi dasar DeFi. Jika Anda ingin dilindungi oleh pengadilan dan politisi, ada ‘keuangan tradisional’. Jika Anda menginginkan sistem yang tangguh, mandiri, terbuka, dan dapat ditingkatkan, maka ada DeFi.”
Namun, komentar ini tampaknya bertentangan dengan tanggapannya terhadap insiden ini. Leshner membuat pernyataan yang terdengar seperti ancaman:

“Jika Anda menerima jumlah COMP yang besar secara salah dari kesalahan protokol Compound:

Harap kembalikan ke Compound Timelock (0x6d903f6003cca6255D85CcA4D3B5E5146dC33925).
Simpan 10% sebagai white-hat reward.
Jika tidak, ini akan dilaporkan sebagai penghasilan kepada IRS, dan sebagian besar dari Anda sudah teridentifikasi (doxxed).”

Ancaman ini membuat reputasi Compound semakin buruk, bahkan lebih buruk daripada kerugian jutaan dolar itu sendiri. Leshner kemudian meminta maaf atas ucapannya, tetapi apakah reputasinya masih bisa pulih?

### Pelajaran dari Insiden Compound

Kasus ini menunjukkan betapa rapuhnya protokol DeFi terhadap kerentanan dalam kode mereka. Selain itu, ini menyoroti tantangan yang dihadapi sistem hukum dan keuangan tradisional dalam menghadapi konsep keuangan yang terdesentralisasi.

Namun, satu hal yang pasti: jika ingin benar-benar menikmati kebebasan dari DeFi, maka tanggung jawab penuh atas risiko yang menyertainya juga harus diterima.
