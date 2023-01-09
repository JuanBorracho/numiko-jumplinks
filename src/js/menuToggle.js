/*
 *  This module shows and hides the dropdown menu on click.
 *  It toggles the aria-hidden attribute for accessibility.
 *  We import the slideDown and slideUp animations from utils.
 */

import { slideDown, slideUp } from './utils';

const menuToggle = document.querySelector('[data-menu-toggle]');
const menuDropdown = document.querySelector('[data-menu-dropdown]');

menuToggle.addEventListener('click', () => {
  menuDropdown.getAttribute('aria-hidden') == 'true'
    ? slideDown(menuDropdown)
    : slideUp(menuDropdown);
});

/*
 *  The listener below closes the dropdown menu
 *  if a user clicks outside of it.
 */

document.addEventListener('click', (e) => {
  if (
    e.target !== menuToggle &&
    menuDropdown.getAttribute('aria-hidden') == 'false'
  ) {
    slideUp(menuDropdown);
  }
});
