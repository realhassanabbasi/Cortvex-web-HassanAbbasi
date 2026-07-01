/**
 * CORTVEX — Hero Character 3D Tilt + Particles
 * Creates an immersive 3D parallax effect on the AI character
 * using CSS transforms driven by mouse position.
 */

/* ============================================================
   CHARACTER 3D TILT
   ============================================================ */
function initCharacterTilt() {
  const charWrap = document.querySelector('.hero-character-wrap');
  const charImg = document.querySelector('.char-img');
  if (!charWrap || !charImg) return;

  const MAX_TILT_X = 8;   // degrees
  const MAX_TILT_Y = 12;  // degrees
  const LERP_SPEED = 0.08; // smoothing factor

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let animFrame;

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function onMouseMove(e) {
    // Normalize mouse position to [-1, 1]
    const nx = (e.clientX / window.innerWidth) * 2 - 1;
    const ny = (e.clientY / window.innerHeight) * 2 - 1;

    // Target tilt: horizontal mouse → Y rotation, vertical → X rotation
    targetY = nx * MAX_TILT_Y;
    targetX = -ny * MAX_TILT_X * 0.5;
  }

  function animate() {
    currentX = lerp(currentX, targetX, LERP_SPEED);
    currentY = lerp(currentY, targetY, LERP_SPEED);

    charImg.style.transform = `
      perspective(800px)
      rotateX(${currentX}deg)
      rotateY(${currentY}deg)
      scale3d(1.02, 1.02, 1.02)
    `;

    animFrame = requestAnimationFrame(animate);
  }

  window.addEventListener('mousemove', onMouseMove, { passive: true });

  // Touch support — tilt based on device orientation
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (e) => {
      if (e.gamma !== null && e.beta !== null) {
        targetY = (e.gamma / 45) * MAX_TILT_Y;
        targetX = ((e.beta - 45) / 45) * MAX_TILT_X * 0.5;
      }
    }, { passive: true });
  }

  // Reset on mouse leave
  document.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
  });

  animate();
}

/* ============================================================
   FLOATING PARTICLE DOTS
   ============================================================ */
function initParticles() {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'hero-particles';
  canvas.style.cssText = `
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 2;
    opacity: 0.5;
  `;
  hero.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animFrame;

  function resize() {
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = -Math.random() * 0.4 - 0.1;
      this.opacity = Math.random() * 0.6 + 0.1;
      this.life = 0;
      this.maxLife = Math.random() * 300 + 200;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.life++;
      if (this.life > this.maxLife) this.reset();
      if (this.y < -5) this.reset();
    }
    draw() {
      const lifeRatio = this.life / this.maxLife;
      const alpha = this.opacity * (1 - lifeRatio) * (lifeRatio < 0.1 ? lifeRatio * 10 : 1);
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(167, 139, 250, ${alpha})`;
      ctx.fill();
    }
  }

  function initParticleArray() {
    const count = Math.min(80, Math.floor(canvas.width / 18));
    particles = [];
    for (let i = 0; i < count; i++) {
      const p = new Particle();
      p.life = Math.random() * p.maxLife; // stagger start
      particles.push(p);
    }
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    animFrame = requestAnimationFrame(loop);
  }

  resize();
  initParticleArray();
  loop();

  window.addEventListener('resize', () => {
    resize();
    initParticleArray();
  }, { passive: true });

  // Cleanup
  return () => cancelAnimationFrame(animFrame);
}

/* ============================================================
   HERO TEXT — TYPED WORD CYCLING
   ============================================================ */
function initWordCycle() {
  const el = document.getElementById('hero-word-cycle');
  if (!el) return;

  const words = ['Dead Sites', 'Old WordPress', 'Outdated Pages', 'Lost Customers'];
  let idx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeDelay = 120;
  let pause = 1800;

  function type() {
    const word = words[idx];

    if (!isDeleting) {
      el.textContent = word.substring(0, charIdx + 1);
      charIdx++;
      if (charIdx === word.length) {
        isDeleting = true;
        typeDelay = pause;
      } else {
        typeDelay = 100 + Math.random() * 40;
      }
    } else {
      el.textContent = word.substring(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        isDeleting = false;
        idx = (idx + 1) % words.length;
        typeDelay = 400;
      } else {
        typeDelay = 50;
      }
    }

    setTimeout(type, typeDelay);
  }

  setTimeout(type, 1000);
}

/* ============================================================
   INIT ALL HERO EFFECTS
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  initCharacterTilt();
  initParticles();
  initWordCycle();
});
