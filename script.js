// DOM Elements
const photoUpload = document.getElementById('photoUpload');
const gallery = document.getElementById('gallery');
const heroImage = document.getElementById('heroImage');
const heroPlaceholder = document.getElementById('heroPlaceholder');
const heroSticker = document.getElementById('heroSticker');
const heroDots = document.getElementById('heroDots');
const giftButton = document.getElementById('giftButton');
const surpriseMessage = document.getElementById('surpriseMessage');
const confettiLayer = document.getElementById('confettiLayer');
const celebrateBtn = document.getElementById('celebrateBtn');

// Lightbox Elements
const lightbox = document.getElementById('lightbox');
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTag = document.getElementById('lightboxTag');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxCaption = document.getElementById('lightboxCaption');
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');

let loveCounter = 0;

// Hero Dot Switcher
if (heroDots) {
  heroDots.addEventListener('click', (e) => {
    const dot = e.target.closest('.hero-dot');
    if (!dot) return;

    heroDots.querySelectorAll('.hero-dot').forEach(d => d.classList.remove('active'));
    dot.classList.add('active');

    const src = dot.getAttribute('data-src');
    const sticker = dot.getAttribute('data-sticker');

    heroImage.style.opacity = '0.3';
    setTimeout(() => {
      heroImage.src = src;
      if (sticker && heroSticker) heroSticker.textContent = sticker;
      heroImage.style.opacity = '1';
    }, 150);
  });
}

// Hero Celebrate Button
if (celebrateBtn) {
  celebrateBtn.addEventListener('click', () => {
    launchConfetti();
  });
}

// Open Lightbox on Gallery Card Click
if (gallery) {
  gallery.addEventListener('click', (e) => {
    const card = e.target.closest('.memory-card');
    if (!card) return;

    const img = card.querySelector('.memory-photo img');
    const tag = card.querySelector('.month');
    const title = card.querySelector('.memory-caption strong');
    const caption = card.querySelector('.memory-caption p');

    if (!img) return;

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || 'Nehal memory';
    lightboxTag.textContent = tag ? tag.textContent : 'MILESTONE';
    lightboxTitle.textContent = title ? title.textContent : 'Sweet Memory';
    lightboxCaption.textContent = caption ? caption.textContent : '';

    loveCounter = Math.floor(Math.random() * 15) + 24;
    likeCount.textContent = `${loveCounter} hearts sent ♡`;

    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  });
}

// Close Lightbox
function closeLightbox() {
  if (lightbox) {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }
}

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && !lightbox.hidden) {
    closeLightbox();
  }
});

// Like Button (Burst hearts)
if (likeBtn) {
  likeBtn.addEventListener('click', () => {
    loveCounter++;
    likeCount.textContent = `${loveCounter} hearts sent ♡`;
    burstHearts(likeBtn);
  });
}

function burstHearts(target) {
  const rect = target.getBoundingClientRect();
  for (let i = 0; i < 8; i++) {
    const heart = document.createElement('span');
    heart.className = 'confetti';
    heart.textContent = '♡';
    heart.style.position = 'fixed';
    heart.style.left = `${rect.left + rect.width / 2 + (Math.random() * 60 - 30)}px`;
    heart.style.top = `${rect.top}px`;
    heart.style.color = '#e28eaf';
    heart.style.fontSize = `${16 + Math.random() * 12}px`;
    confettiLayer.appendChild(heart);
    setTimeout(() => heart.remove(), 2500);
  }
}

// Photo Upload (Add custom local preview)
if (photoUpload) {
  photoUpload.addEventListener('change', (event) => {
    const files = Array.from(event.target.files || []).filter(file => file.type.startsWith('image/'));
    if (!files.length) return;

    // Use the first selected image as the main hero photo.
    const heroUrl = URL.createObjectURL(files[0]);
    heroImage.src = heroUrl;
    heroImage.hidden = false;
    if (heroPlaceholder) heroPlaceholder.hidden = true;
    if (heroSticker) heroSticker.textContent = 'new favorite ✨';

    // Show selected photos as memory cards in the gallery.
    files.forEach((file, index) => {
      const url = URL.createObjectURL(file);
      const card = document.createElement('article');
      card.className = `memory-card ${index % 2 ? 'tilt-right' : 'tilt-left'}`;
      const safeName = file.name.replace(/\.[^/.]+$/, '').replace(/[_-]+/g, ' ').slice(0, 45);
      card.innerHTML = `
        <div class="memory-photo">
          <span class="card-badge">New Photo</span>
          <img alt="Nehal memory" src="${url}">
        </div>
        <div class="memory-caption">
          <span class="month">EXTRA MOMENT</span>
          <strong>${safeName || 'Our Little Prince'}</strong>
          <p>A precious memory to cherish forever. 💙</p>
        </div>`;
      gallery.appendChild(card);
    });

    photoUpload.value = '';
    launchConfetti();
  });
}

// Gift Button (Surprise)
if (giftButton) {
  giftButton.addEventListener('click', () => {
    if (surpriseMessage) surpriseMessage.hidden = false;
    giftButton.classList.add('opened');
    launchConfetti();
  });
}

// Confetti Effect
function launchConfetti() {
  const symbols = ['✦', '♡', '✧', '★', '👶', '🎉', '💙'];
  const colors = ['#8ec9f0', '#f2aac4', '#f2d58a', '#b9e4d0', '#ffffff', '#4fa3d4'];
  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti';
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.7}s`;
    piece.style.fontSize = `${12 + Math.random() * 16}px`;
    confettiLayer.appendChild(piece);
    window.setTimeout(() => piece.remove(), 4000);
  }
}
