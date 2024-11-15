const username = "bitpaus7"; // Ganti dengan username GitHub Anda
const repo = "bitpaus7.github.io"; // Ganti dengan nama repository Anda
const branch = "main"; // Ganti dengan branch utama Anda (default biasanya "main")

const slidesContainer = document.querySelector(".slides");

// Fetch data dari GitHub API
async function fetchArticles() {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${username}/${repo}/contents?ref=${branch}`
    );
    if (!response.ok) throw new Error("Gagal mengambil data dari GitHub API");

    const data = await response.json();
    const folders = data.filter((item) => item.type === "dir");

    const articles = folders.map((folder) => ({
      title: folder.name.replace(/-/g, " "), // Mengganti "-" menjadi spasi
      content: `Baca artikel ${folder.name} di sini!`, // Contoh konten sementara
    }));

    renderSlides(articles);
  } catch (error) {
    console.error(error.message);
    slidesContainer.innerHTML = `<p>Gagal memuat artikel.</p>`;
  }
}

// Render slide
function renderSlides(articles) {
  slidesContainer.innerHTML = articles
    .map(
      (article) => `
    <div class="slide">
      <h2>${article.title}</h2>
      <p>${article.content}</p>
    </div>
  `
    )
    .join("");
}

// Rotasi otomatis
let currentIndex = 0;
function rotateSlides(articles) {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % articles.length;
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, 5000);
}

// Inisialisasi
fetchArticles();
