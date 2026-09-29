(async () => {
  const memoryShelf = document.querySelector('#memories');
  let photos;
  try {
    const response = await fetch('content.json');
    if (!response.ok) throw new Error('Photo list could not be loaded');
    photos = await response.json();
  } catch {
    // Browsers block fetch() from file:// pages; keep the bundled photos visible there too.
    photos = JSON.parse(document.querySelector('#photo-fallback').textContent);
  }
  photos.forEach(photo => {
    const figure = document.createElement('figure');
    figure.className = 'memory';
    const img = document.createElement('img');
    img.src = photo.image;
    img.alt = photo.alt;
    img.loading = 'lazy';
    figure.append(img);
    memoryShelf.append(figure);
  });

  const scene = document.querySelector('#hug-scene');
  const note = document.querySelector('#love-note');
  const messages = {
    hug: 'Wrapping you up in the biggest, softest hug.',
    kiss: 'One little kiss for my sleepy love.',
    love: 'You are my favorite person. Always.'
  };
  let resetTimer;
  document.querySelectorAll('[data-action]').forEach(button => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;
      scene.classList.remove('is-kiss', 'is-love');
      void scene.offsetWidth;
      if (action === 'kiss') scene.classList.add('is-kiss');
      if (action === 'love') scene.classList.add('is-love');
      note.textContent = messages[action];
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => scene.classList.remove('is-kiss', 'is-love'), 2400);
    });
  });
})();
