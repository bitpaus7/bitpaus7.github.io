const API_KEY = "I64X47HJFWK44PRIK5EGIVZWSC36CA28C9";
let ethPrice = 0;
let countdownInterval;

async function fetchEthPrice() {
  try {
    const priceResponse = await fetch(
      "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=" +
        API_KEY
    );
    const priceData = await priceResponse.json();
    ethPrice = parseFloat(priceData.result.ethusd);
    return ethPrice;
  } catch (error) {
    console.error("Gagal mengambil harga ETH:", error);
    return null;
  }
}

async function fetchGasPrice() {
  const gasInfoElement = document.getElementById("gasInfo");
  const lastUpdatedElement = document.getElementById("lastUpdated");
  const errorMessageElement = document.getElementById("errorMessage");

  // Tambahkan efek loading
  gasInfoElement.classList.add("refreshing");

  try {
    // Pastikan harga ETH sudah diambil
    if (ethPrice === 0) {
      await fetchEthPrice();
    }

    const response = await fetch(
      `https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${API_KEY}`
    );
    const result = await response.json();

    if (result.status === "1" && result.message === "OK") {
      const data = result.result;

      // Update konten tanpa menghapus struktur
      const cards = gasInfoElement.getElementsByClassName("gas-card");

      cards[0].querySelector(
        "p:nth-child(2)"
      ).textContent = `${data.SafeGasPrice} Gwei`;
      cards[0].querySelector("p:nth-child(3)").textContent = `$${(
        ((data.SafeGasPrice * 21000) / 1e9) *
        ethPrice
      ).toFixed(2)}`;

      cards[1].querySelector(
        "p:nth-child(2)"
      ).textContent = `${data.ProposeGasPrice} Gwei`;
      cards[1].querySelector("p:nth-child(3)").textContent = `$${(
        ((data.ProposeGasPrice * 21000) / 1e9) *
        ethPrice
      ).toFixed(2)}`;

      cards[2].querySelector(
        "p:nth-child(2)"
      ).textContent = `${data.FastGasPrice} Gwei`;
      cards[2].querySelector("p:nth-child(3)").textContent = `$${(
        ((data.FastGasPrice * 21000) / 1e9) *
        ethPrice
      ).toFixed(2)}`;

      // Hapus efek loading
      gasInfoElement.classList.remove("refreshing");
    } else {
      throw new Error("Gagal mengambil data gas");
    }
  } catch (error) {
    errorMessageElement.textContent =
      "Gagal memuat harga gas. Silakan periksa koneksi internet atau API key Anda.";
    console.error("Error:", error);

    // Hapus efek loading
    gasInfoElement.classList.remove("refreshing");
  }

  // Mulai countdown
  startCountdown();
}

// Fungsi inisialisasi
async function init() {
  const gasInfoElement = document.getElementById("gasInfo");

  // Buat struktur awal jika belum ada
  if (gasInfoElement.innerHTML.trim() === "") {
    gasInfoElement.innerHTML = `
                    <div class="gas-card">
                        <h3>Rendah</h3>
                        <p>Memuat...</p>
                        <p>-</p>
                    </div>
                    <div class="gas-card">
                        <h3>Standar</h3>
                        <p>Memuat...</p>
                        <p>-</p>
                    </div>
                    <div class="gas-card">
                        <h3>Cepat</h3>
                        <p>Memuat...</p>
                        <p>-</p>
                    </div>
                `;
  }

  // Pertama kali memuat
  await fetchGasPrice();

  // Set interval refresh setiap 15 detik
  setInterval(fetchGasPrice, 15000);
}

// Jalankan inisialisasi
init();
