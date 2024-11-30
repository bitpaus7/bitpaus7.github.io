let walletsData = [];

function generateWallets() {
  const walletCountInput = document.getElementById("walletCount");
  const walletCount = parseInt(walletCountInput.value);
  const walletsContainer = document.getElementById("walletsContainer");
  const errorMessage = document.getElementById("error");
  const loadingIndicator = document.getElementById("loading");
  const copyAllButton = document.getElementById("copyAllButton");
  const progressText = document.getElementById("progressText");

  errorMessage.style.display = "none";

  if (isNaN(walletCount) || walletCount < 1 || walletCount > 100) {
    errorMessage.style.display = "inline";
    return;
  }

  loadingIndicator.style.display = "block"; // Menampilkan indikator loading
  copyAllButton.style.display = "none"; // Menyembunyikan tombol salin
  walletsContainer.innerHTML = ""; // Mengosongkan kontainer dompet
  walletsData = []; // Reset data dompet

  progressText.textContent = `Membuat dompet 0 dari ${walletCount}...`;

  let i = 0;

  function createWallet() {
    if (i < walletCount) {
      const randomWallet = ethers.Wallet.createRandom();
      walletsData.push({
        seedPhrase: randomWallet.mnemonic.phrase,
        address: randomWallet.address,
      });

      // Update progress
      progressText.textContent = `Membuat dompet ${
        i + 1
      } dari ${walletCount}...`;
      i++;

      // Call the next wallet creation step asynchronously
      requestAnimationFrame(createWallet);
    } else {
      // Setelah selesai membuat semua wallet, tampilkan hasilnya
      displayWallets();
    }
  }

  // Fungsi untuk menampilkan semua wallet setelah pembuatan selesai
  function displayWallets() {
    walletsData.forEach((wallet, index) => {
      const walletDiv = document.createElement("div");
      walletDiv.classList.add("wallet");

      walletDiv.innerHTML = `
        <p><strong>Wallet ${index + 1}</strong></p>
        <p><strong>Seed Phrase:</strong> ${wallet.seedPhrase}</p>
        <p><strong>Wallet Address:</strong> ${wallet.address}</p>
      `;

      walletsContainer.appendChild(walletDiv);
    });

    loadingIndicator.style.display = "none"; // Menyembunyikan indikator loading
    copyAllButton.style.display = "inline-block"; // Menampilkan tombol salin
    progressText.textContent = "Semua dompet berhasil dibuat!";
  }

  // Mulai proses pembuatan wallet
  createWallet();
}

document.getElementById("copyAllButton").addEventListener("click", () => {
  const formattedData = walletsData
    .map((wallet, index) => {
      return `Wallet ${index + 1}:\nSeed Phrase: ${
        wallet.seedPhrase
      }\nWallet Address: ${wallet.address}\n\n`;
    })
    .join("");

  navigator.clipboard
    .writeText(formattedData)
    .then(() => {
      const copyButton = document.getElementById("copyAllButton");
      copyButton.textContent = "Berhasil Disalin!";
      copyButton.disabled = true;

      setTimeout(() => {
        copyButton.textContent = "Salin Semua";
        copyButton.disabled = false;
      }, 3000);
    })
    .catch(() => {
      alert("Gagal menyalin seed phrase dan alamat wallet.");
    });
});

document
  .getElementById("generateWalletButton")
  .addEventListener("click", generateWallets);
