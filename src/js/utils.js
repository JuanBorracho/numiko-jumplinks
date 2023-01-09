/*
 *  This module containes the slideDown and slideUp functions
 *  which we export for use in the menuToggle file.
 */

const slideDown = (el) => {
  el.setAttribute('aria-hidden', 'false');
  el.classList.replace('hidden', 'block');
  let height = getComputedStyle(el).getPropertyValue('height');
  el.style.height = '0';
  setTimeout(() => {
    el.style.height = height;
  }, 0);
};

const slideUp = (el) => {
  el.style.height = '0';
  el.setAttribute('aria-hidden', 'true');
  el.addEventListener(
    'transitionend',
    () => {
      el.classList.replace('block', 'hidden');
      el.style.height = null;
    },
    { once: true }
  );
};

export { slideDown, slideUp };
