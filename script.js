const photoUpload = document.getElementById('photoUpload');
const gallery = document.getElementById('gallery');
const heroImage = document.getElementById('heroImage');
const heroPlaceholder = document.getElementById('heroPlaceholder');
const giftButton = document.getElementById('giftButton');
const surpriseMessage = document.getElementById('surpriseMessage');
const confettiLayer = document.getElementById('confettiLayer');

photoUpload.addEventListener('change', (event) => {
  const files = Array.from(event.target.files || []).filter(file => file.type.startsWith('image/'));
  if (!files.length) return;

  // Use the first selected image as the main hero photo.
  const heroUrl = URL.createObjectURL(files[0]);
  heroImage.src = heroUrl;
  heroImage.hidden = false;
  heroPlaceholder.hidden = true;

  // Show selected photos as memory cards in the gallery.
  files.forEach((file, index) => {
    const url = URL.createObjectURL(file);
    const card = document.createElement('article');
    card.className = `memory-card ${index % 2 ? 'tilt-right' : 'tilt-left'}`;
    const safeName = file.name.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' ').slice(0, 45);
    card.innerHTML = `
      <div class="memory-photo"><img alt="Nehal memory" src="${url}"></div>
      <div class="memory-caption">
        <span class="month">A SPECIAL MEMORY</span>
        <strong></strong>
        <p>A little moment to keep forever. 💙</p>
      </div>`;
    card.querySelector('.memory-caption strong').textContent = safeName || 'Our little prince';
    gallery.appendChild(card);
  });

  // Clear the file input so the same photo can be selected again later.
  photoUpload.value = '';
});

giftButton.addEventListener('click', () => {
  surpriseMessage.hidden = false;
  giftButton.classList.add('opened');
  launchConfetti();
});

function launchConfetti() {
  const symbols = ['✦', '♡', '✧', '★'];
  const colors = ['#8ec9f0', '#f2aac4', '#f2d58a', '#b9e4d0', '#ffffff'];
  for (let i = 0; i < 75; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    piece.style.fontSize = `${10 + Math.random() * 12}px`;
    confettiLayer.appendChild(piece);
    window.setTimeout(() => piece.remove(), 4000);
  }
}
