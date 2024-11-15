// Daftar folder artikel
const artikelFolders = [
    'artikel1',
    'artikel2',
    'artikel3',
    'artikel4',
    'artikel5',
    'artikel6',
    'artikel7'
];

const sliderContainer = document.querySelector('.slider');
let currentSlide = 0;

// Fungsi untuk memuat artikel dari folder
async function loadArticles() {
    for (const folder of artikelFolders) {
        try {
            const response = await fetch(`${folder}/index.html`);
            if (!response.ok) {
                console.error(`Gagal memuat artikel dari ${folder}`);
                continue;
            }
            const htmlContent = await response.text();
            const slideElement = document.createElement('div');
            slideElement.classList.add('slide');
            slideElement.innerHTML = htmlContent;
            sliderContainer.appendChild(slideElement);
        } catch (error) {
            console.error(`Error memuat artikel dari ${folder}:`, error);
        }
    }
    initSlider();
}

// Fungsi untuk menginisialisasi slider
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        slides[currentSlide].classList.add('active');

        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }
}

// Mulai memuat artikel
loadArticles();
