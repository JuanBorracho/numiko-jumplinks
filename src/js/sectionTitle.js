/*
 *  This module uses the intersection observer API to
 *  watch for when the jumplink sections are intersecting
 *  and then update the section title on the jumplink nav.
 */

const sectionName = document.querySelector('[data-section-title]');
const sections = document.querySelectorAll('[data-jumplink-item]');
const jumplinksContainer = document.querySelector('[data-jumplink-container]');
const nav = document.querySelector('[data-jumplink-nav]');

document.addEventListener('scroll', (e) => {
  if (nav.getBoundingClientRect().top === 0) {
    const options = {
      root: null,
      threshold: 0.5,
      rootMargin: '-60px 0px -60px 0px',
    };

    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        sectionName.innerHTML = `Section ${entry.target.getAttribute(
          'data-jumplink-item'
        )}`;
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });
  }
});
