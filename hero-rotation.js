(() => {
  "use strict";

  const hero = document.querySelector("[data-rotating-hero]");

  if (!hero) {
    return;
  }

  const variants = ["historic", "skyline"];
  let selectedIndex;

  if (window.crypto && typeof window.crypto.getRandomValues === "function") {
    const randomByte = new Uint8Array(1);
    window.crypto.getRandomValues(randomByte);
    selectedIndex = randomByte[0] % variants.length;
  } else {
    selectedIndex = Math.floor(Math.random() * variants.length);
  }

  const selectedVariant = variants[selectedIndex];
  const selectedImage = hero.querySelector("[data-rotating-hero-image]");

  if (!selectedImage) {
    return;
  }

  hero.dataset.heroActive = selectedVariant;
  selectedImage.src = hero.dataset[`${selectedVariant}Src`];
  selectedImage.alt = hero.dataset[`${selectedVariant}Alt`];
})();
