const scrollContainer = document.getElementById('scrollContainer');
const animationFrame = document.getElementById('animationFrame');
const frameCounter = document.getElementById('frameCounter');
const slowFactor = 0.25; // Facteur pour ralentir le scroll

// Liste des frames (correspond au chemin relatif "frames/")
const frames = Array.from({ length: 63 }, (_, i) => `frames/f${i + 1}.png`);

// Gestion du scroll
scrollContainer.addEventListener('scroll', () => {
  const scrollTop = scrollContainer.scrollTop;
  const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;

  // Appliquer le facteur de ralentissement
  const scrollFraction = (scrollTop / maxScroll);

  // Calcul de l'index de la frame
  const frameIndex = Math.min(
    Math.floor(scrollFraction * frames.length),
    frames.length - 1
  );
  

  // Mise à jour de l'image
  animationFrame.src = frames[frameIndex];

  // Mise à jour du compteur de frame
  frameCounter.textContent = `Frame: ${frameIndex + 1}`;
});
