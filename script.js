// Modal logic
const modal = document.getElementById("contactModal");
const openBtn = document.getElementById("openModal");
const openBtn2 = document.getElementById("openModal2");
const openQuote = document.getElementById("openQuote");
const closeBtn = document.getElementById("closeModal");

if (openBtn) openBtn.onclick = () => modal.style.display = "flex";
if (openBtn2) openBtn2.onclick = () => modal.style.display = "flex";
if (openQuote) openQuote.onclick = () => modal.style.display = "flex";
if (closeBtn) closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};

// Multi-step form
const steps = document.querySelectorAll(".form-step");
const dots = document.querySelectorAll(".step-dot");
const nextBtn = document.querySelector(".next-step");
const prevBtn = document.querySelector(".prev-step");

let currentStep = 1;

function showStep(step) {
    steps.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    const activeStep = document.querySelector(`.form-step[data-step="${step}"]`);
    const activeDot = document.querySelector(`.step-dot[data-step="${step}"]`);

    if (activeStep) activeStep.classList.add("active");
    if (activeDot) activeDot.classList.add("active");
}

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        currentStep = 2;
        showStep(currentStep);
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        currentStep = 1;
        showStep(currentStep);
    });
}

// Initialize first step
showStep(currentStep);

// Form submit (front-end only)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        // For Netlify, you can let it submit normally.
        // If you want to keep the alert and no page reload, uncomment below:
        e.preventDefault();
        alert("Your message has been sent. Thank you!");
        modal.style.display = "none";
        contactForm.reset();
        currentStep = 1;
        showStep(currentStep);
    });
}

// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        themeToggle.textContent = isDark ? "☀️" : "🌙";
    });
}

// Gallery lightbox
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxClose = document.querySelector(".lightbox-close");

galleryItems.forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
    });
});

if (lightboxClose) {
    lightboxClose.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

window.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
