/*
 *  This module controls the progress bar that appears when scrolling
 *  the in the jumplinks section
 */

const jumplinkContainer = document.querySelector('[data-jumplink-container]');
const progressBar = document.querySelector('[data-progress-bar]');
const nav = document.querySelector('[data-jumplink-nav]');

// Get the top coordinate of the jumplinkContainer bounding box
// If this is negative then we have scrolled into it
// Divide this top coordinate by the height of the bounding box to get the percentage
// Update the width property of the progress bar based on this

document.addEventListener('scroll', () => {
  if (nav.getBoundingClientRect().top === 0) {
    let coords = jumplinkContainer.getBoundingClientRect();
    let height = coords.height;
    let progressPercentage = (Math.abs(coords.top) / height) * 100;

    progressBar.style.width = `${progressPercentage}%`;
  }
});

observer.observe(jumplinkContainer);
