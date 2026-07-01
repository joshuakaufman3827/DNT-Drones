document.addEventListener('DOMContentLoaded', () => {
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');

  // All buttons that should open the modal
  const modalButtons = [
    'openModalNav',
    'openModalHero',
    'openModalSpray',
    'openModalMap',
    'openModalInfra',
    'openModalAquatic',
    'floatingContactBtn'
  ];

  modalButtons.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', () => {
        modalBackdrop.style.display = 'flex';
      });
    }
  });

  // Close modal
  modalClose.addEventListener('click', () => {
    modalBackdrop.style.display = 'none';
  });

  // Close when clicking outside modal
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      modalBackdrop.style.display = 'none';
    }
  });
});
