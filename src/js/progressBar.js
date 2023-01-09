/*
 *  This module controls the progress bar that appears when scrolling
 *  within the jumplinks section.
 */

const jumplinkContainer = document.querySelector('[data-jumplink-container]');
const progressBar = document.querySelector('[data-progress-bar]');
const nav = document.querySelector('[data-jumplink-nav]');

/*
 *  Here we get the top coordinate of the jumplinkContainer bounding box.
 *  Then we divide this top coordinate by the height of the bounding box.
 *  Then we multiply this by 100 to get a percentage value.
 *  Then we update the width property of the progress bar
 *  with this percentage value.
 */

document.addEventListener('scroll', () => {
  if (nav.getBoundingClientRect().top === 0) {
    let coords = jumplinkContainer.getBoundingClientRect();
    let height = coords.height;
    let progressPercentage = (Math.abs(coords.top) / height) * 100;

    progressBar.style.width = `${progressPercentage}%`;
  }
});
