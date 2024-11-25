const scrollContainer = document.getElementById('scrollContainer');
const scrollArrow = document.getElementById('scrollArrow');
const animationFrame = document.getElementById('animationFrame');

// Liste des frames (corrige le chemin en fonction de `frames/`)
const frames = Array.from({ length: 64 }, (_, i) => `frames/f${i + 1}.png`);

// Gestion du scroll
scrollContainer.addEventListener('scroll', () => {
  const scrollTop = scrollContainer.scrollTop;
  const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
  const scrollFraction = scrollTop / maxScroll;

  // Calcul de l'index de la frame
  const frameIndex = Math.min(
    Math.floor(scrollFraction * frames.length),
    frames.length - 1
  );

  // Mise à jour de l'image
  animationFrame.src = frames[frameIndex];
});

// Gestion de la flèche
scrollArrow.addEventListener('click', () => {
  const currentScroll = scrollContainer.scrollTop;
  const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;

  // Taille d'une frame en hauteur
  const frameHeight = maxScroll / frames.length;

  // Scroll vers la prochaine frame
  scrollContainer.scrollTo({
    top: currentScroll + frameHeight,
    behavior: 'smooth',
  });
});
