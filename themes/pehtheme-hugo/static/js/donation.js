function showEthereumAddress(event) {
  event.preventDefault(); // Mencegah perilaku default (scrolling atau reload)

  const ethereumAddress = "0xE3aD1B1576E13346DeC319676D658fCB681738b3"; // Ganti dengan alamat Ethereum Anda

  // Membuat elemen pop-up
  const popup = document.createElement("div");
  popup.className = "custom-popup";

  // Menambahkan alamat Ethereum ke dalam popup
  const addressText = document.createElement("span");
  addressText.className = "address-text";
  addressText.innerText = `Alamat: ${ethereumAddress}`;

  // Menambahkan tombol salin
  const copyButton = document.createElement("button");
  copyButton.className = "copy-button";
  copyButton.innerHTML = "Salin"; // Teks tombol Salin

  // Event untuk menyalin alamat ke clipboard
  copyButton.onclick = function () {
    navigator.clipboard
      .writeText(ethereumAddress)
      .then(() => {
        // Mengganti teks tombol menjadi ikon ceklis hijau
        copyButton.innerHTML = "<span class='checkmark'>&#10004;</span>"; // Teks ceklis
        copyButton.style.backgroundColor = "#4CAF50"; // Ubah warna tombol menjadi hijau
        copyButton.disabled = true; // Menonaktifkan tombol setelah disalin
      })
      .catch((err) => {
        console.log("Gagal menyalin alamat.", err);
      });
  };

  // Menambahkan elemen ke dalam pop-up
  popup.appendChild(addressText);
  popup.appendChild(copyButton);

  // Menambahkan pop-up ke body
  document.body.appendChild(popup);

  // Menambahkan animasi slide down setelah sedikit delay
  setTimeout(() => {
    popup.classList.add("show");
  }, 50);

  // Menghapus pop-up setelah beberapa detik
  setTimeout(() => {
    popup.remove();
  }, 15000); // Hapus setelah 4 detik
}
