---
title: "Kronologi Peretasan Euler Finance"
date: 2023-03-14
slug: /kronologi-euler-finance/
image: images/euler.webp
tags:
  - berita

draft: false
---

Di tengah krisis perbankan dan ketegangan di pasar stablecoin, dunia DeFi kembali diguncang dengan serangan besar yang menargetkan salah satu protokol pinjaman terbesar, Euler Finance. Serangan ini menyebabkan kerugian sekitar $200 juta, yang langsung mempengaruhi berbagai proyek dan dana yang terikat di dalamnya.

### Bagaimana Serangan Terjadi?

Euler Finance mengelola pinjaman melalui eToken (jaminan) dan dToken (utang). Ketika seorang pengguna memiliki lebih banyak dToken daripada eToken, proses likuidasi akan berjalan. Namun, celah di protokol ini terletak pada fungsi donateToReserves, yang memungkinkan pengguna menyumbangkan eToken ke cadangan Euler tanpa memeriksa kondisi utang mereka.

Peretas memanfaatkan celah ini dengan membuat dua kontrak: satu kontrak untuk menumpuk utang melalui donateToReserves dan satu lagi untuk bertindak sebagai likuidator. Dengan memanfaatkan dana pinjaman flash dan leverage Euler, kontrak likuidator berhasil memperoleh jaminan eToken dengan harga diskon dan menariknya menjadi aset asli.

### Dampak Serangan

Total kerugian akibat serangan ini mencakup

- $134,6 juta dalam ETH,
- $18,6 juta dalam WBTC,
- $34 juta dalam USDC,
- dan $8,9 juta dalam DAI.

### Proyek-proyek yang terpengaruh antara lain:

Angle Protocol: Kerugian lebih dari $17 juta dalam agEUR.
Balancer: Kerugian $11,9 juta.
Temple DAO: Kerugian $5 juta.
Swissborg: Kerugian $2,6 juta dalam ETH dan $1,7 juta dalam USDT.
Yearn dan proyek lainnya juga terkena dampak.

### Respons dan Upaya Pemulihan

Euler Finance segera menghubungi penyerang, berharap dapat menemukan solusi melalui komunikasi. Namun, dengan sebagian dana yang dikirim ke Tornado Cash melalui alamat percobaan, prospek pemulihan dana sangat kecil. Meski begitu, protokol asuransi smart contract, Sherlock, mengakui kelalaian mereka dalam meninjau EIP-14 dan berjanji untuk membayar klaim sebesar $4,5 juta.

### Dampak pada Komunitas DeFi

Serangan ini menunjukkan betapa rentannya sistem DeFi meskipun memiliki potensi luar biasa dalam membangun ekosistem keuangan yang terbuka dan terdesentralisasi. Sejumlah proyek besar yang terintegrasi dengan Euler turut merasakan dampaknya, dan banyak yang mengungkapkan solidaritas kepada tim Euler.

### Apakah DeFi Benar-Benar Aman?

Meskipun DeFi menawarkan potensi besar dalam menciptakan inovasi keuangan, serangan ini menunjukkan bahwa sistem ini masih membutuhkan peningkatan dalam hal keamanan. Ke depan, penting bagi semua pihak di dalam ekosistem DeFi untuk membangun infrastruktur yang lebih kuat dan aman untuk menghindari kejadian serupa. Namun, di dunia yang semakin penuh ketidakpastian ini, pertanyaan besar tetap ada: di mana tempat yang benar-benar aman?
