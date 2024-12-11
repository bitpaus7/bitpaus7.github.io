document.addEventListener("DOMContentLoaded", () => {
  console.log("Script search dimuat");

  // Seleksi semua input pencarian (desktop & mobile)
  const searchInputs = document.querySelectorAll(
    "#search-bar input, #mobile-search-input"
  );

  // Loop semua input yang ditemukan
  searchInputs.forEach((searchInput) => {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault(); // Hindari submit form default
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
          // Redirect ke pencarian Google dengan site-specific
          window.location.href = `https://www.google.com/search?q=site:bitpaus.com+${encodeURIComponent(
            searchTerm
          )}`;
        }
      }
    });
  });

  if (searchInputs.length === 0) {
    console.error("Input pencarian tidak ditemukan.");
  }
});
