---
title: "Kronologi Cream Finance"
date: 2021-10-28
slug: /kronologi-cream-finance/
image: images/cream.webp
tags:
  - berita

draft: false
---

Cream Finance, salah satu protokol dalam ekosistem Yearn Finance, kembali menjadi korban peretasan besar-besaran. Dalam insiden terbaru ini, sekitar $130 juta berhasil dicuri oleh peretas. Serangan ini menyoroti risiko dalam DeFi dan juga mengungkap konflik tersembunyi di antara pengembang protokol.

### Ekosistem Yearn yang Terlalu Besar untuk Gagal?

Yearn Finance, yang dikenal karena agresivitasnya dalam mengakuisisi protokol DeFi, tampaknya kesulitan menjaga keamanan platform yang ada di bawah kendalinya. Setelah serangkaian akuisisi pada 2020, banyak yang berharap keamanan protokol di ekosistem Yearn meningkat. Namun, kenyataannya berkata lain.

Ini adalah kali kedua Cream Finance menjadi korban peretasan besar dan merupakan entri ke-10 insiden dari ekosistem Yearn dalam daftar pelanggaran keamanan DeFi. Dengan skala besar ekosistem ini, tanggung jawab besar yang menyertainya tampaknya tidak sepenuhnya diemban.

### Detail Serangan

Peretas menggunakan dua alamat utama dan memanfaatkan kerentanan dalam mekanisme harga CREAM untuk mencuri dana:

1. Alamat-alamat peretas:
   [Address A](https://etherscan.io/address/0x961d2b694d9097f35cfffa363ef98823928a330d)

   [Address B](https://etherscan.io/address/0x24354d31bc9d90f62fe5f2454709c32049cf866b)

2. Rincian serangan:
   - Peretas menggunakan flash loan sebesar 500M DAI dari MakerDAO, yang kemudian disetor ke Curve's yPool untuk memperoleh yDAI. yDAI ini digunakan untuk mencetak yUSD yang kemudian dimasukkan ke strategi Yearn’s yUSDVault.
   - Dengan menggunakan token yUSDVault sebagai agunan di CREAM, peretas mencetak ~$500M crYUSD.
   - Flash loan kedua senilai $2B ETH diambil melalui AAVE menggunakan Address B, lalu digunakan sebagai agunan tambahan di CREAM untuk meminjam lebih banyak yUSD.
3. Eksploitasi mekanisme harga:
   - Harga token yUSDVault diatur oleh formula yUSD balance / totalSupply yUSDVault. Peretas menukarkan token yUSDVault senilai ~$500M untuk yUSD, sehingga total pasokan vault turun drastis menjadi hanya $8M.
   - Dengan menyetor kembali sekitar $8M yUSD, peretas memanipulasi nilai token yUSDVault menjadi dua kali lipat dari nilai semula.

Dengan harga yang dimanipulasi, sistem melihat Address A memiliki agunan senilai $3B crYUSD, yang digunakan untuk meminjam $2B ETH untuk melunasi flash loan Address B dan menarik sisa dana dari vault.

Hasil Peretasan
Setelah serangan selesai, peretas menguras $130 juta aset di vault pinjaman CREAM, termasuk:

- 2760 ETH,
- 76 BTC (renBTC, WBTC, HBTC),
- Puluhan juta dalam stablecoin dan token lainnya.

Dana yang dicuri kemudian dikirim ke dompet lain melalui Tornado Cash dan renBridge untuk konversi ke BTC. Sebagian dana juga ditambahkan ke Uniswap’s ETH-CRETH2 pool sebagai upaya mencairkan token curian.

### Pesan untuk Peretas

Proyek Cream Finance mencoba berkomunikasi dengan peretas melalui blockchain, dengan pesan berikut:
"Anda menang. Kami kalah. Tolong kembalikan dana, dan kami akan memberikan 10% sebagai hadiah."

Namun, hingga kini belum ada kabar pengembalian dana.

### Lebih dari Sekadar Keuangan

Insiden ini mengungkap lebih dari sekadar kelemahan kode. Dalam pesan input data transaksi, ada indikasi rivalitas di antara protokol:
gÃTµ Baave lucky, iron bank lucky, cream not. ydev: incest bad, dont do.

Menurut pengamat seperti Mudit Gupta, serangan ini menunjukkan bahwa pelakunya adalah pengembang DeFi berpengalaman, bukan sekadar peretas biasa. Selain menunjukkan kelemahan kode, insiden ini memperlihatkan perang di belakang layar antara protokol besar dalam ekosistem DeFi.
