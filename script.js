// Data Artikel
const articles = [
  { title: "Artikel 1", content: "Ini adalah isi dari artikel 1." },
  { title: "Artikel 2", content: "Ini adalah isi dari artikel 2." },
  { title: "Artikel 3", content: "Ini adalah isi dari artikel 3." },
  { title: "Artikel 4", content: "Ini adalah isi dari artikel 4." },
  { title: "Artikel 5", content: "Ini adalah isi dari artikel 5." },
];

const slidesContainer = document.querySelector(".slides");

// Render Artikel
function renderSlides() {
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

// Slider Logika
let currentIndex = 0;
function rotateSlides() {
  currentIndex = (currentIndex + 1) % articles.length;
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Inisialisasi
renderSlides();
setInterval(rotateSlides, 5000);
