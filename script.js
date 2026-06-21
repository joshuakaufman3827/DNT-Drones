// =========================
// YEAR IN FOOTER
// =========================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();


// =========================
// SMOOTH SCROLL
// =========================
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
}


// =========================
// THEME TOGGLE
// =========================
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light");

    document.body.classList.toggle("light", !isLight);
    document.body.classList.toggle("dark", isLight);

    themeToggle.textContent = isLight ? "☾" : "☀";
  });
}


// =========================
// MODAL LOGIC
// =========================
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const contactForm = document.getElementById("contactForm");

function openModal() {
  if (modalBackdrop) modalBackdrop.style.display = "flex";
}

function closeModal() {
  if (modalBackdrop) modalBackdrop.style.display = "none";
}

// Buttons that open the modal
[
  "openModalNav",
  "openModalHero",
  "openModalSpray",
  "openModalMap",
  "openModalInfra",
  "openModalAquatic",
  "openModalWildlife"
].forEach(id => {
  const btn = document.getElementById(id);
  if (btn) btn.addEventListener("click", openModal);
});

// Close button
if (modalClose) modalClose.addEventListener("click", closeModal);

// Click outside modal closes it
if (modalBackdrop) {
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
}

// Form submission (preview only)
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Preview only: this would send directly to DroneTech’s email in production.");
    contactForm.reset();
    closeModal();
  });
}


// =========================
// FLIP CARD LOGIC (SOLAR + WILDLIFE ONLY)
// =========================
document.querySelectorAll(".flip-card").forEach(card => {
  const viewBtn = card.querySelector(".flip-btn:not(.flip-close)");
  const closeBtn = card.querySelector(".flip-close");

  // FRONT → BACK
  if (viewBtn) {
    viewBtn.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      card.classList.add("flipped");
    });
  }

  // BACK → FRONT
  if (closeBtn) {
    closeBtn.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation();
      card.classList.remove("flipped");
    });
  }
});


