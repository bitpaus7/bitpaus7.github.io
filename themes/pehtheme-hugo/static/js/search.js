document.addEventListener("DOMContentLoaded", () => {
  console.log("Script search dimuat");

  // Cari elemen input di dalam search-bar
  const searchInput = document.querySelector("#search-bar input");

  // Pastikan elemen input ditemukan
  if (searchInput) {
    // Tambahkan event listener untuk tombol Enter
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        // Cek jika tombol Enter ditekan
        e.preventDefault(); // Hindari perilaku default form
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
          // Redirect langsung ke Google dengan query site:bitpaus.com
          window.location.href = `https://www.google.com/search?q=site:bitpaus.com+${encodeURIComponent(
            searchTerm
          )}`;
        }
      }
    });
  } else {
    console.error("Elemen input pencarian tidak ditemukan.");
  }
});
