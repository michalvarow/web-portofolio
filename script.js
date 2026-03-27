/* script.js */

// ─── I18N (Multi-language) ──────────────────────────────────────────────────
const translations = {
  en: {
    "nav.about":"About","nav.portfolio":"Portfolio","nav.certificates":"Certificates","nav.experience":"Experience","nav.contact":"Contact",
    "hero.badge":"Digital Marketing & Content Creator",
    "hero.tagline":"Helping brands grow through creative content and digital marketing strategies that drive results and engagement.",
    "hero.cta1":"View Portfolio","hero.cta2":"Get in Touch","hero.scroll":"Scroll",
    "about.label":"About Me","about.title":"Where Psychology Meets Visual Art",
    "about.p1":"Psychology graduate with over 5 years of experience as a visual editor and photographer. I specialize in producing emotionally resonant content that connects brands with their audiences on a deeper level.",
    "about.p2":"From concept development to post-production — my approach blends behavioral insights with compelling visual storytelling to drive engagement and build lasting brand impact.",
    "stat.years":"Years Exp.","stat.companies":"Companies","stat.gpa":"GPA","stat.hskk":"HSKK",
    "portfolio.label":"Portfolio","portfolio.title":"Selected Works",
    "exp.label":"Experience","exp.title":"Work History",
    "cert.label":"Achievements","cert.title":"My Certificates",
    "footer.made":"Visual Storyteller · Content Creator · Photographer"
  },
  zh: {
    "nav.about":"关于我","nav.portfolio":"作品集","nav.certificates":"证书","nav.experience":"工作经历","nav.contact":"联系方式",
    "hero.badge":"数字营销与内容创作专家",
    "hero.tagline":"通过创意内容和数字营销策略，助力品牌实现增长并提升互动与成效",
    "hero.cta1":"查看作品集","hero.cta2":"联系我","hero.scroll":"向下滚动",
    "about.label":"关于我","about.title":"心理学与视觉艺术的交汇",
    "about.p1":"心理学本科毕业，拥有超过五年的视觉编辑与摄影经验，擅长创作能够与受众产生深度情感共鸣的视觉内容，帮助品牌建立更有影响力的形象。",
    "about.p2":"从概念创作到后期制作，我将行为心理学洞察融入视觉叙事，以此提升用户参与度，并为品牌建立持久的传播影响力。",
    "stat.years":"年经验","stat.companies":"服务企业","stat.gpa":"学业绩点","stat.hskk":"HSKK",
    "portfolio.label":"作品集","portfolio.title":"精选作品",
    "exp.label":"工作经历","exp.title":"职业履历",
    "cert.label":"成就","cert.title":"我的证书",
    "footer.made":"数字营销 · 内容创作者 · 摄影师"
  }
};

let currentLang = 'en';
function toggleLang() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  document.documentElement.setAttribute('data-lang', currentLang);
  document.getElementById('langLabel').textContent = currentLang === 'en' ? '中文' : 'EN';
  applyTranslations();
}
function applyTranslations() {
  const t = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
}

// ─── THEME ──────────────────────────────────────────────────────────────────
let isDark = true;
function toggleTheme() {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  document.getElementById('themeLabel').textContent = isDark ? 'Light' : 'Dark';
  document.getElementById('themeIcon').innerHTML = isDark
    ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
}

// ─── PORTFOLIO FILTER ────────────────────────────────────────────────────────
// function filterPortfolio(cat) {
//   document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
//   document.querySelectorAll('#portfolio .portfolio-item').forEach(item => {
//     const show = cat === 'all' || item.dataset.cat === cat;
//     item.classList.toggle('hidden', !show);
//   });
// }

// Fungsi Filter & Animasi Marquee
// function filterPortfolio(cat) {
//     const grid = document.getElementById('portfolioGrid');
//     const marquee = document.getElementById('portfolioMarquee');
//     const track = document.getElementById('marqueeTrack');

//     if (!grid || !marquee || !track) {
//         console.error("Gagal nemuin elemen! Cek ID di HTML-mu.");
//         return;
//     }

//     // 1. Update Tombol Aktif
//     document.querySelectorAll('.tab-btn').forEach(btn => {
//         btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
//     });

//     if (cat === 'all') {
//         // --- MODE ANIMASI JALAN ---
//         grid.style.display = 'none';
//         marquee.style.display = 'block';

//         // Cek kalau track masih kosong, isi dengan foto dari grid
//         if (track.children.length === 0) {
//             const originalItems = grid.querySelectorAll('.portfolio-item');
//             originalItems.forEach(item => {
//                 const clone = item.cloneNode(true);
//                 clone.className = 'marquee-item'; // Pake class CSS khusus marquee
//                 // Pastikan fungsi klik preview tetep jalan
//                 clone.onclick = () => {
//                     const src = item.getAttribute('data-src');
//                     const type = item.getAttribute('data-type');
//                     const title = item.getAttribute('data-title');
//                     openMedia({ dataset: { src, type, title } });
//                 };
//                 track.appendChild(clone);
//             });
//             // Duplikat isi biar jalannya ga putus (Infinite)
//             track.innerHTML += track.innerHTML;
//         }
//     } else {
//         // --- MODE GRID STANDAR ---
//         marquee.style.display = 'none';
//         grid.style.display = 'grid';

//         const items = grid.querySelectorAll('.portfolio-item');
//         items.forEach(item => {
//             const itemCat = item.getAttribute('data-cat');
//             if (itemCat === cat) {
//                 item.style.display = 'block';
//             } else {
//                 item.style.display = 'none';
//             }
//         });
//     }
// }

// --- JANGAN UBAH CODE LAIN, CUKUP GANTI FUNGSI INI ---
function filterPortfolio(cat) {
    const grid = document.getElementById('portfolioGrid');
    const marquee = document.getElementById('portfolioMarquee');
    // Hanya gunakan 2 track (Baris)
    const tracks = [
        document.getElementById('marqueeTrack1'),
        document.getElementById('marqueeTrack2')
    ];

    if (!grid || !marquee) return;

    // 1. Update status tombol filter yang aktif
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
    });

    if (cat === 'all') {
        // --- MODE ALL (BINABOX 2 BARIS) ---
        grid.style.display = 'none';
        marquee.style.display = 'flex'; // Pakai flex agar gap antar baris aktif

        // Isi track jika masih kosong
        if (tracks[0] && tracks[0].children.length === 0) {
            const items = grid.querySelectorAll('.portfolio-item');
            
            items.forEach((item, index) => {
                const clone = item.cloneNode(true);
                
                // BERSIHKAN STATUS: Paksa tampil & gunakan class khusus marquee
                clone.className = 'marquee-item';
                clone.style.display = 'block';
                clone.style.opacity = '1';
                clone.style.visibility = 'visible';
                
                // Pasang fungsi klik preview
                clone.onclick = () => {
                    if (typeof openMedia === 'function') openMedia(item);
                };
                
                // Bagi rata ke 2 baris (index 0 dan 1)
                const trackIdx = index % 2; 
                if (tracks[trackIdx]) tracks[trackIdx].appendChild(clone);
            });

            // Duplikasi isi track agar animasi looping (Infinite) tidak putus
            tracks.forEach(t => { 
                if(t) t.innerHTML += t.innerHTML; 
            });
        }
    } else {
        // --- MODE KATEGORI (GRID) ---
        marquee.style.display = 'none';
        grid.style.display = 'grid';

        grid.querySelectorAll('.portfolio-item').forEach(item => {
            const itemCat = item.getAttribute('data-cat');
            if (itemCat === cat) {
                item.style.display = 'block';
                item.classList.remove('hidden');
            } else {
                item.style.display = 'none';
                item.classList.add('hidden');
            }
        });
    }
}

// Pastikan All langsung jalan
document.addEventListener('DOMContentLoaded', () => {
    filterPortfolio('all');
});


// ─── MEDIA MODAL ─────────────────────────────────────────────────────────────
function openMedia(el) {
  const type = el.dataset.type;
  const title = el.dataset.title;
  const desc = el.dataset.desc;
  const cat = el.dataset.cat;
  const src = el.dataset.src;
  const videoUrl = el.dataset.videoUrl;
  let mediaHtml = '';
  
  if (type === 'video' && videoUrl) {
    mediaHtml = `<iframe class="modal-media" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
  } else if (type === 'video' && src) {
    mediaHtml = `<video class="modal-media" src="${src}" controls autoplay></video>`;
  } else if (src) {
    mediaHtml = `<img class="modal-media-img" src="${src}" alt="${title}">`;
  }
  
  document.getElementById('modalMediaContent').innerHTML = mediaHtml;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalCat').textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
  document.getElementById('modalDesc').textContent = desc || '';
  document.getElementById('mediaModal').classList.add('open');
}

function closeModal(id) {
  const m = document.getElementById(id);
  m.classList.remove('open');
  if (id === 'mediaModal') document.getElementById('modalMediaContent').innerHTML = '';
}
function closeIfBg(e) {
  if (e.target === e.currentTarget) closeModal(e.currentTarget.id);
}

// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

