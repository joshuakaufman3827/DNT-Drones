/* ============================================================
   SMOOTH SCROLL
   ============================================================ */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

/* ============================================================
   THEME TOGGLE
   ============================================================ */
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  themeToggle.textContent = document.body.classList.contains("dark") ? "☾" : "☀";
});

/* ============================================================
   MODAL LOGIC
   ============================================================ */
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");

function openModal() {
  modalBackdrop.style.display = "flex";
}

function closeModal() {
  modalBackdrop.style.display = "none";
}

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) closeModal();
});

/* Buttons that open modal */
document.querySelectorAll("#openModalNav, #openModalHero, #openModalSpray, #openModalMap, #openModalInfra, #openModalAquatic")
  .forEach(btn => btn?.addEventListener("click", openModal));

/* ============================================================
   FLOATING CONTACT BUTTON
   ============================================================ */
const floatingBtn = document.getElementById("floatingContactBtn");
floatingBtn.addEventListener("click", openModal);

/* ============================================================
   AUTO YEAR
   ============================================================ */
document.getElementById("year").textContent = new Date().getFullYear();



