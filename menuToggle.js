/*
 *  This module shows and hides the dropdown menu on click.
 *  Toggles aria-hidden attribute for accessibility
 */

const menuToggle = document.querySelector('[data-menu-toggle]');
const menuDropdown = document.querySelector('[data-menu-dropdown]');

menuToggle.addEventListener('click', () => {
  /* Slide down effect */
  if (menuDropdown.getAttribute('aria-hidden') == 'true') {
    menuDropdown.setAttribute('aria-hidden', 'false');
    menuDropdown.classList.replace('hidden', 'block');
    let height = getComputedStyle(menuDropdown).getPropertyValue('height');
    console.log(height);
    menuDropdown.style.height = '0';
    setTimeout(() => {
      menuDropdown.style.height = height;
    }, 0);
    return;
  } else {
    /* Slide up effect */
    menuDropdown.style.height = '0';
    menuDropdown.setAttribute('aria-hidden', 'true');
    menuDropdown.addEventListener(
      'transitionend',
      () => {
        menuDropdown.classList.replace('block', 'hidden');
        menuDropdown.style.height = null;
      },
      { once: true }
    );
  }
});

/*
 *  Close the dropdown menu if a user clicks outside of it
 */
