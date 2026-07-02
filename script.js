document.addEventListener('DOMContentLoaded', () => {
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');

  // All buttons that should open the modal
 const modalButtons = [
  // Existing buttons
  'openModalNav',
  'openModalHero',
  'openModalSpray',
  'openModalMap',
  'openModalInfra',
  'floatingContactBtn',

  // Aquatic
  'openModalAquatic1',
  'openModalAquatic2',
  'openModalAquatic3',
  'openModalAquatic4',

  // Solar
  'openModalSolar1',
  'openModalSolar2',
  'openModalSolar3',
  'openModalSolar4',

  // Wildlife
  'openModalWildLife1',
  'openModalWildLife2',
  'openModalWildLife3',
  'openModalWildLife4'
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
