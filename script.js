/* ============================
   MOBILE NAV MENU
============================ */
document.addEventListener('DOMContentLoaded', () => {

  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  /* ============================
     THEME TOGGLE
  ============================ */
  const toggle = document.querySelector('.theme-toggle');
  const body = document.body;

  const updateToggleIcon = () => {
    if (body.classList.contains('dark')) {
      toggle.textContent = '🌙';
    } else if (body.classList.contains('light')) {
      toggle.textContent = '☀️';
    } else {
      toggle.textContent = '🌓';
    }
  };

  if (toggle) {
    toggle.addEventListener('click', () => {
      if (body.classList.contains('system')) {
        body.classList.remove('system');
        body.classList.add('light');
      } else if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
      } else {
        body.classList.remove('dark');
        body.classList.add('system');
      }
      updateToggleIcon();
    });

    updateToggleIcon();
  }

  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }


  /* ============================
     MODAL SYSTEM (CORRECTED)
  ============================ */

  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalClose');

  // ALL BUTTONS THAT SHOULD OPEN THE MODAL
  const triggerSelectors = [
    '.modal-trigger',      // NEW section-level CTAs
    '.link-button',        // legacy buttons
    '#openModalNav',       // nav CTA
    '#openModalHero',      // hero CTA
    '#floatingContactBtn'  // floating CTA
  ];

  triggerSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.addEventListener('click', () => {
        if (modalBackdrop) {
          modalBackdrop.style.display = 'flex';
        }
      });
    });
  });

  // CLOSE BUTTON
  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalBackdrop.style.display = 'none';
    });
  }

  // CLICK OUTSIDE MODAL TO CLOSE
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.style.display = 'none';
      }
    });
  }


  /* ============================
     SMOOTH SCROLL
  ============================ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  /* ============================
     FLOATING CONTACT BUTTON
  ============================ */
  const floatingBtn = document.getElementById('floatingContactBtn');

  if (floatingBtn) {
    floatingBtn.addEventListener('click', () => {
      if (modalBackdrop) modalBackdrop.style.display = 'flex';
    });
  }

});

<script>
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;

    // Toggle visibility
    body.style.display = body.style.display === 'block' ? 'none' : 'block';
  });
});
</script>



