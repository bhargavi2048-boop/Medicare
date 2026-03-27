// ===== HOME JS =====

const FEATURED_DOCTORS = [
  { id:1, name:'Dr. Ramesh Iyer', spec:'Cardiologist', exp:'18 yrs', rating:4.9, reviews:312, emoji:'👨‍⚕️', bg:'linear-gradient(135deg,#0a7c7c,#12a8a8)', avail:'Today, 10:30 AM', fee:800, tags:['Heart Disease','Hypertension','ECG'] },
  { id:2, name:'Dr. Meera Krishnan', spec:'Neurologist', exp:'14 yrs', rating:4.8, reviews:198, emoji:'👩‍⚕️', bg:'linear-gradient(135deg,#3a5a8a,#5a7aaa)', avail:'Today, 2:00 PM', fee:900, tags:['Migraine','Epilepsy','Stroke'] },
  { id:3, name:'Dr. Arjun Pillai', spec:'Paediatrician', exp:'10 yrs', rating:4.9, reviews:441, emoji:'👨‍⚕️', bg:'linear-gradient(135deg,#4a6741,#6b8f62)', avail:'Tomorrow, 9:00 AM', fee:600, tags:['Child Health','Vaccination','Nutrition'] },
];

const BLOG_POSTS = [
  { emoji:'🫀', bg:'linear-gradient(135deg,#fee,#fdd)', cat:'Cardiology', title:'5 Warning Signs Your Heart Sends You Early', excerpt:'Learn to recognise the subtle signals your heart gives before a major cardiac event. Early detection saves lives.', author:'Dr. Ramesh Iyer', date:'15 Jan 2025', time:'4 min read' },
  { emoji:'🧠', bg:'linear-gradient(135deg,#eef,#dde)', cat:'Neurology', title:'Migraines vs Headaches: Know the Difference', excerpt:'Not every headache is a migraine. A neurologist explains the key differences and when to seek specialist care.', author:'Dr. Meera Krishnan', date:'8 Jan 2025', time:'3 min read' },
  { emoji:'🌿', bg:'linear-gradient(135deg,#efe,#dfd)', cat:'Wellness', title:'The 7 Habits of Genuinely Healthy People', excerpt:'Beyond diet and exercise — a holistic look at the daily rituals that keep our healthiest patients thriving long-term.', author:'Dr. Pradeep Kumar', date:'2 Jan 2025', time:'5 min read' },
];

function renderHomeDoctors() {
  const grid = document.getElementById('home-doctors');
  if (!grid) return;
  grid.innerHTML = FEATURED_DOCTORS.map((d,i) => `
    <div class="doctor-card animate-up s${i+1}">
      <div class="doctor-top">
        <div class="doc-avatar" style="background:${d.bg}">${d.emoji}</div>
        <div>
          <div class="doc-name">${d.name}</div>
          <div class="doc-spec">${d.spec}</div>
          <div class="doc-exp">${d.exp} experience</div>
          <div class="doc-rating">
            <span class="doc-stars">★★★★★</span>
            <span class="doc-rating-num">${d.rating}</span>
            <span class="doc-reviews">(${d.reviews} reviews)</span>
          </div>
        </div>
      </div>
      <div class="doc-tags">
        ${d.tags.map(t=>`<span class="doc-tag-pill">${t}</span>`).join('')}
      </div>
      <div class="doctor-bottom">
        <div class="doc-avail">Next: <strong>${d.avail}</strong><br><span style="color:var(--muted);font-size:0.75rem">Fee: ₹${d.fee}</span></div>
        <a href="pages/booking.html?doctor=${d.id}" class="btn btn-primary btn-sm">Book Now</a>
      </div>
    </div>`).join('');

  setTimeout(() => {
    document.querySelectorAll('.doctor-card.animate-up').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible');
    });
  }, 100);
}

function renderBlog() {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;
  grid.innerHTML = BLOG_POSTS.map((b,i) => `
    <a href="pages/services.html" class="blog-card animate-up s${i}" style="display:block;color:inherit;text-decoration:none">
      <div class="blog-thumb" style="background:${b.bg}">${b.emoji}</div>
      <div class="blog-body">
        <div class="blog-cat">${b.cat}</div>
        <h4 class="blog-title">${b.title}</h4>
        <p class="blog-excerpt">${b.excerpt}</p>
        <div class="blog-meta">
          <span style="font-weight:600;color:var(--slate)">${b.author}</span>
          <span>${b.date} · ${b.time}</span>
        </div>
      </div>
    </a>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderHomeDoctors();
  renderBlog();

  const dateInput = document.getElementById('qs-date');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

  document.getElementById('qs-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    const dept = document.getElementById('qs-dept').value;
    const date = document.getElementById('qs-date').value;
    const name = document.getElementById('qs-name').value;
    let url = 'pages/doctors.html?';
    if (dept) url += `dept=${encodeURIComponent(dept)}&`;
    if (date) url += `date=${date}&`;
    if (name) url += `name=${encodeURIComponent(name)}&`;
    window.location.href = url;
  });
});
