const slidesContainer = document.querySelector(".slides");

// Data artikel
let articles = [
  { title: "Artikel 1", content: "Konten artikel 1" },
  { title: "Artikel 2", content: "Konten artikel 2" },
  { title: "Artikel 3", content: "Konten artikel 3" },
  { title: "Artikel 4", content: "Konten artikel 4" },
  { title: "Artikel 5", content: "Konten artikel 5" },
];

// Render artikel sebagai slide
function renderSlides() {
  slidesContainer.innerHTML = "";
  articles.forEach((article) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.innerHTML = `
      <h2>${article.title}</h2>
      <p>${article.content}</p>
    `;
    slidesContainer.appendChild(slide);
  });
}

// Fungsi untuk memutar slide
let currentIndex = 0;
function rotateSlides() {
  currentIndex = (currentIndex + 1) % articles.length;
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Menambahkan artikel baru
function addArticle(title, content) {
  articles.unshift({ title, content });
  if (articles.length > 5) {
    articles.pop();
  }
  renderSlides();
}

// Inisialisasi
renderSlides();
setInterval(rotateSlides, 5000);
