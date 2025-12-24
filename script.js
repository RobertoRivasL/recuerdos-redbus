document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initModal();
    initCarousel();
});

// TABS
function initTabs() {
    const tabs = document.querySelectorAll('.nav-btn');
    const contents = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
        });
    });
}

// MODAL
function initModal() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgExpanded");
    const closeBtn = document.querySelector(".close");
    document.querySelectorAll('.zoomable').forEach(img => {
        img.addEventListener('click', (e) => {
            modal.style.display = "flex";
            modalImg.src = e.target.src;
        });
    });
    closeBtn.addEventListener('click', () => modal.style.display = "none");
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = "none"; });
}

// CARRUSEL
function initCarousel() {
    let slideIndex = 1;
    const slides = document.querySelectorAll(".mySlides");
    if (slides.length === 0) return;

    showSlides(slideIndex);
    document.querySelector(".prev").addEventListener('click', () => plusSlides(-1));
    document.querySelector(".next").addEventListener('click', () => plusSlides(1));

    function plusSlides(n) { showSlides(slideIndex += n); }
    function showSlides(n) {
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;
        slides.forEach(s => s.style.display = "none");
        slides[slideIndex - 1].style.display = "block";
    }
}