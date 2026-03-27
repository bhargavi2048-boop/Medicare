// ===== MEDICARE PRO — PAGES JS (pages/*.html) =====

// ── Scroll Animations ─────────────────────────────────────
function initScrollAnimations() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.animate-up,.animate-fade,.animate-left,.animate-right').forEach(el => obs.observe(el));
}

// ── Navbar ────────────────────────────────────────────────
function injectNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  nav.innerHTML = `
    <a href="../index.html" class="nav-logo">
      <div class="logo-mark"><div class="logo-cross"></div></div>
      MediCare
    </a>
    <ul class="nav-links">
      <li><a href="../index.html">Home</a></li>
      <li><a href="doctors.html">Doctors</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <div class="nav-actions">
      <a href="tel:+911800123456" class="btn btn-ghost btn-sm" style="background:var(--mist);color:var(--teal);border:1.5px solid var(--border)">📞 Emergency</a>
      <a href="booking.html" class="btn btn-primary btn-sm">Book Appointment</a>
      <button class="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>`;

  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));

  const hb = nav.querySelector('.hamburger');
  const nl = nav.querySelector('.nav-links');
  hb?.addEventListener('click', () => {
    nl?.classList.toggle('open');
    const spans = hb.querySelectorAll('span');
    const open = nl?.classList.contains('open');
    spans[0].style.transform = open ? 'translateY(7px) rotate(45deg)' : '';
    spans[1].style.opacity   = open ? '0' : '';
    spans[2].style.transform = open ? 'translateY(-7px) rotate(-45deg)' : '';
  });
  nl?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nl.classList.remove('open')));

  const cur = window.location.pathname.split('/').pop() || 'index.html';
  nav.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href').split('/').pop() === cur) a.classList.add('active');
  });
}

// ── Footer ────────────────────────────────────────────────
function injectFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="../index.html" class="nav-logo" style="color:white">
          <div class="logo-mark"><div class="logo-cross"></div></div>
          MediCare
        </a>
        <p>Compassionate healthcare, expertly delivered. Book the right doctor in under 2 minutes — trusted by 50,000+ patients across Tamil Nadu.</p>
        <div class="footer-social">
          <a href="#" title="Facebook">📘</a>
          <a href="#" title="Twitter">🐦</a>
          <a href="#" title="Instagram">📸</a>
          <a href="#" title="YouTube">▶️</a>
          <a href="#" title="LinkedIn">💼</a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Quick Links</h5>
        <ul>
          <li><a href="../index.html">Home</a></li>
          <li><a href="doctors.html">Find Doctors</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="booking.html">Book Appointment</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Departments</h5>
        <ul>
          <li><a href="doctors.html?dept=Cardiology">Cardiology</a></li>
          <li><a href="doctors.html?dept=Neurology">Neurology</a></li>
          <li><a href="doctors.html?dept=Paediatrics">Paediatrics</a></li>
          <li><a href="doctors.html?dept=Orthopaedics">Orthopaedics</a></li>
          <li><a href="doctors.html?dept=Dermatology">Dermatology</a></li>
          <li><a href="doctors.html?dept=Gynaecology">Gynaecology</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contact Us</h5>
        <ul>
          <li><a href="tel:18001234567">📞 1800-123-456 (Toll Free)</a></li>
          <li><a href="tel:+914428001234">📞 +91 44 2800 1234</a></li>
          <li><a href="mailto:care@medicare.in">✉️ care@medicare.in</a></li>
          <li><a href="contact.html">📍 Find Our Locations</a></li>
          <li><a href="contact.html">💬 Live Chat Support</a></li>
          <li><a href="booking.html">📱 Book Appointment</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} MediCare Hospital. All rights reserved. | NABH Accredited | ISO 9001:2015</span>
      <span>Designed & built with ❤️ by <strong style="color:var(--teal-light)">Bhargavi N</strong></span>
    </div>`;
}

// ── Toast ─────────────────────────────────────────────────
function showToast(msg, type = 'success') {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.className = `toast ${type}`;
  const icon = type === 'success' ? '✓' : '✕';
  t.innerHTML = `<span style="font-size:1.1rem">${icon}</span> ${msg}`;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3800);
}

// ── Form validation ───────────────────────────────────────
function validateForm(form) {
  let valid = true;
  form.querySelectorAll('[data-required]').forEach(input => {
    const err = input.nextElementSibling;
    const val = input.value.trim();
    input.classList.remove('error');
    err?.classList.remove('show');
    if (!val) {
      input.classList.add('error');
      if (err) { err.textContent = 'This field is required.'; err.classList.add('show'); }
      valid = false;
    } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      input.classList.add('error');
      if (err) { err.textContent = 'Enter a valid email address.'; err.classList.add('show'); }
      valid = false;
    } else if (input.type === 'tel' && !/^\d{10}$/.test(val.replace(/\s/g,''))) {
      input.classList.add('error');
      if (err) { err.textContent = 'Enter a valid 10-digit phone number.'; err.classList.add('show'); }
      valid = false;
    } else if (input.dataset.minlen && val.length < +input.dataset.minlen) {
      input.classList.add('error');
      if (err) { err.textContent = `Minimum ${input.dataset.minlen} characters required.`; err.classList.add('show'); }
      valid = false;
    }
  });
  return valid;
}

// ── Booking storage ───────────────────────────────────────
const Bookings = {
  all: () => JSON.parse(sessionStorage.getItem('mc_bookings') || '[]'),
  add(b) {
    const list = this.all();
    b.id = 'MC-' + Date.now().toString().slice(-6);
    b.createdAt = new Date().toLocaleString('en-IN');
    list.push(b);
    sessionStorage.setItem('mc_bookings', JSON.stringify(list));
    return b.id;
  }
};

// ── Counter animation ─────────────────────────────────────
function animateCounter(el, target, duration = 1800) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString('en-IN') + (el.dataset.suffix || '');
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = parseInt(e.target.dataset.count);
        if (target) animateCounter(e.target, target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
}

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  injectNavbar();
  injectFooter();
  initScrollAnimations();
  initCounters();
});
