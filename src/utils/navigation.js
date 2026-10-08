/**
 * Global navigation helper for consistent Call Now / Contact scrolling
 */
export const handleCallNowClick = (e, navigate, location) => {
  if (e && e.preventDefault) e.preventDefault();

  const performScroll = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Add brief highlight class to contact phone card
      const phoneBox = document.getElementById('contact-phone-card');
      if (phoneBox) {
        phoneBox.classList.add('highlight-pulse');
        setTimeout(() => {
          phoneBox.classList.remove('highlight-pulse');
        }, 2200);
      }
    }
  };

  if (location && location.pathname !== '/') {
    navigate('/#contact');
    setTimeout(performScroll, 150);
  } else {
    performScroll();
  }
};
