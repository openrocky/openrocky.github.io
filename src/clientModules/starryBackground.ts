// Canvas-based starry sky background for all pages

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  len: number;
  speed: number;
  opacity: number;
  angle: number;
  active: boolean;
  timer: number;
  delay: number;
}

function initStarrySky() {
  if (typeof document === 'undefined' || typeof window === 'undefined') return;
  if (document.getElementById('starry-canvas')) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'starry-canvas';
  canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
  `;
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = window.innerWidth;
  let height = window.innerHeight;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  // Generate stars
  const starColors = [
    'rgba(255,255,255,',      // white
    'rgba(200,220,255,',      // blue-white
    'rgba(180,200,255,',      // cool blue
    'rgba(255,240,220,',      // warm white
    'rgba(160,200,255,',      // blue
    'rgba(74,199,227,',       // cyan (accent)
  ];

  const STAR_COUNT = Math.min(400, Math.floor((width * height) / 3000));
  const stars: Star[] = [];

  for (let i = 0; i < STAR_COUNT; i++) {
    const isBright = Math.random() < 0.15;
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: isBright ? 0.8 + Math.random() * 1.5 : 0.3 + Math.random() * 0.8,
      opacity: isBright ? 0.6 + Math.random() * 0.4 : 0.15 + Math.random() * 0.4,
      twinkleSpeed: 0.5 + Math.random() * 2.5,
      twinkleOffset: Math.random() * Math.PI * 2,
      color: starColors[Math.floor(Math.random() * starColors.length)],
    });
  }

  // Shooting stars
  const shootingStars: ShootingStar[] = [
    { x: 0, y: 0, len: 80, speed: 6, opacity: 0, angle: Math.PI / 4, active: false, timer: 0, delay: 4000 + Math.random() * 6000 },
    { x: 0, y: 0, len: 60, speed: 8, opacity: 0, angle: Math.PI / 5, active: false, timer: 0, delay: 8000 + Math.random() * 10000 },
  ];

  function resetShootingStar(s: ShootingStar) {
    s.x = Math.random() * width * 0.7 + width * 0.2;
    s.y = Math.random() * height * 0.3;
    s.opacity = 1;
    s.active = true;
    s.len = 50 + Math.random() * 80;
    s.speed = 4 + Math.random() * 6;
    s.angle = Math.PI / 6 + Math.random() * Math.PI / 6;
  }

  let lastTime = 0;

  function draw(time: number) {
    const dt = time - lastTime;
    lastTime = time;

    ctx!.clearRect(0, 0, width, height);

    // Draw background gradient
    const bgGrad = ctx!.createRadialGradient(
      width * 0.5, 0, 0,
      width * 0.5, 0, height * 1.2
    );
    bgGrad.addColorStop(0, '#0d1528');
    bgGrad.addColorStop(0.4, '#080c18');
    bgGrad.addColorStop(1, '#050810');
    ctx!.fillStyle = bgGrad;
    ctx!.fillRect(0, 0, width, height);

    // Subtle nebula glow
    const nebula = ctx!.createRadialGradient(
      width * 0.3, height * 0.2, 0,
      width * 0.3, height * 0.2, width * 0.4
    );
    nebula.addColorStop(0, 'rgba(74, 100, 180, 0.03)');
    nebula.addColorStop(0.5, 'rgba(74, 199, 227, 0.015)');
    nebula.addColorStop(1, 'transparent');
    ctx!.fillStyle = nebula;
    ctx!.fillRect(0, 0, width, height);

    const nebula2 = ctx!.createRadialGradient(
      width * 0.7, height * 0.6, 0,
      width * 0.7, height * 0.6, width * 0.35
    );
    nebula2.addColorStop(0, 'rgba(140, 80, 180, 0.02)');
    nebula2.addColorStop(1, 'transparent');
    ctx!.fillStyle = nebula2;
    ctx!.fillRect(0, 0, width, height);

    // Draw stars
    const t = time / 1000;
    for (const star of stars) {
      const twinkle = Math.sin(t * star.twinkleSpeed + star.twinkleOffset);
      const currentOpacity = star.opacity * (0.5 + 0.5 * twinkle);

      if (currentOpacity < 0.02) continue;

      ctx!.beginPath();
      ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx!.fillStyle = star.color + currentOpacity.toFixed(3) + ')';
      ctx!.fill();

      // Add glow for bright stars
      if (star.radius > 1.2 && currentOpacity > 0.5) {
        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
        ctx!.fillStyle = star.color + (currentOpacity * 0.15).toFixed(3) + ')';
        ctx!.fill();
      }
    }

    // Draw shooting stars
    for (const s of shootingStars) {
      if (!s.active) {
        s.timer += dt;
        if (s.timer >= s.delay) {
          resetShootingStar(s);
          s.timer = 0;
          s.delay = 5000 + Math.random() * 12000;
        }
        continue;
      }

      // Move
      s.x += Math.cos(s.angle) * s.speed;
      s.y += Math.sin(s.angle) * s.speed;
      s.opacity -= 0.008;

      if (s.opacity <= 0 || s.x > width + 100 || s.y > height + 100) {
        s.active = false;
        continue;
      }

      // Draw trail
      const tailX = s.x - Math.cos(s.angle) * s.len;
      const tailY = s.y - Math.sin(s.angle) * s.len;
      const grad = ctx!.createLinearGradient(tailX, tailY, s.x, s.y);
      grad.addColorStop(0, 'rgba(74, 199, 227, 0)');
      grad.addColorStop(0.7, `rgba(200, 230, 255, ${s.opacity * 0.5})`);
      grad.addColorStop(1, `rgba(255, 255, 255, ${s.opacity})`);

      ctx!.beginPath();
      ctx!.moveTo(tailX, tailY);
      ctx!.lineTo(s.x, s.y);
      ctx!.strokeStyle = grad;
      ctx!.lineWidth = 1.5;
      ctx!.stroke();

      // Head glow
      ctx!.beginPath();
      ctx!.arc(s.x, s.y, 2, 0, Math.PI * 2);
      ctx!.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
      ctx!.fill();
    }

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStarrySky);
  } else {
    initStarrySky();
  }
}

export default {};
