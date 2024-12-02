function scanWallet() {
  var walletAddress = document.getElementById("walletAddress").value;
  var errorMessage = document.getElementById("error-message");

  // Reset error message
  errorMessage.innerHTML = "";

  // Cek apakah panjang alamat valid (42 karakter termasuk "0x")
  if (walletAddress.length !== 42) {
    errorMessage.innerHTML = "Awalan 0x bang (42 huruf)";
    return; // Menghentikan proses jika alamat tidak valid
  }

  // Membuka URL debank dengan alamat wallet
  var debankUrl = "https://debank.com/profile/" + walletAddress;
  window.open(debankUrl, "_blank");
}
