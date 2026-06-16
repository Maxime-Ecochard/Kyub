// KYUB - Main Application Logic
const App = {
  currentScreen: 'splash',
  currentOnboardStep: 0,
  profile: JSON.parse(JSON.stringify(DEFAULT_PROFILE)),
  kyubState: { chapterIdx: 0, difficulty: 1, questionIdx: 0 },
  flashState: { cardIdx: 0, mastered: 0, toReview: 0 },
  grandKyubMode: false,
  grandKyubFace: 0,
  grandKyubScore: 0,
  deferredPrompt: null,

  init() {
    // Force clean old service worker caches once
    const CURRENT_VERSION = '2.2';
    if (window.location.protocol !== 'file:') {
      try {
        if (localStorage.getItem('kyub_version') !== CURRENT_VERSION) {
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(regs => {
              regs.forEach(r => r.unregister());
            });
          }
          if ('caches' in window) {
            caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
          }
          localStorage.setItem('kyub_version', CURRENT_VERSION);
          if (localStorage.getItem('kyub_version') === CURRENT_VERSION) {
            setTimeout(() => window.location.reload(), 300);
            return;
          }
        }
      } catch (e) {
        console.warn("Could not write version to localStorage (likely disk full or sandboxed):", e);
      }
    }

    this.loadProfile();
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      try {
        navigator.serviceWorker.register('./sw.js').then(reg => {
          reg.update();
        }).catch(console.error);
      } catch (err) {
        console.warn("Service Worker registration skipped (likely file:// protocol):", err);
      }
    }
    // PWA Prompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      if (!localStorage.getItem('kyub_pwa_dismissed')) {
        document.getElementById('pwa-banner').classList.add('show');
      }
    });
    // Reset disciplines for fresh onboarding
    if (!this.profile.nickname) {
      this.profile.subscribedDisciplines = [];
      this.profile.specialties = [];
      this.profile.classLevel = '';
    }
    setTimeout(() => {
      const splash = document.querySelector('.splash');
      if (splash) {
        splash.classList.add('hide');
        setTimeout(() => {
          splash.remove();
          if (!this.profile.nickname) this.showScreen('onboarding');
          else this.showScreen('feed');
        }, 500);
      } else {
        if (!this.profile.nickname) this.showScreen('onboarding');
        else this.showScreen('feed');
      }
    }, 2500);
    this.bindNav();
  },

  loadProfile() {
    let saved = null;
    try {
      saved = localStorage.getItem('kyub_profile');
    } catch (e) {
      console.warn('localStorage not available', e);
    }
    if (saved) {
      try {
        this.profile = JSON.parse(saved);
      } catch (e) {
        this.profile = JSON.parse(JSON.stringify(DEFAULT_PROFILE));
      }
    }
    // Safe fallbacks for older/incomplete profiles
    if (!this.profile) this.profile = JSON.parse(JSON.stringify(DEFAULT_PROFILE));
    if (!this.profile.subscribedDisciplines || this.profile.subscribedDisciplines.length === 0) {
      this.profile.subscribedDisciplines = ['physique', 'chimie'];
    }
    if (!this.profile.classLevel) {
      this.profile.classLevel = 'seconde';
    }
  },
  saveProfile() {
    try {
      localStorage.setItem('kyub_profile', JSON.stringify(this.profile));
    } catch (e) {
      console.warn("Could not save profile to localStorage (likely disk full):", e);
    }
  },

  showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById('screen-' + id);
    if (el) { el.classList.add('active'); this.currentScreen = id; }
    document.querySelectorAll('.nav-item').forEach(n => {
      n.classList.toggle('active', n.dataset.screen === id);
    });
    const nav = document.querySelector('.bottom-nav');
    nav.style.display = (id === 'onboarding' || id === 'grandkyub') ? 'none' : 'flex';
    if (id === 'feed') this.renderFeed();
    if (id === 'kyub') this.renderKyub();
    if (id === 'flashcards') this.renderFlashcards();
    if (id === 'profile') this.renderProfile();
    if (id === 'search') this.renderSearch();
    if (id === 'grandkyub') this.renderGrandKyub();
    if (id === 'chat') this.renderChat();
  },

  bindNav() {
    document.querySelectorAll('.nav-item').forEach(n => {
      n.addEventListener('click', () => this.showScreen(n.dataset.screen));
    });
  },

  installPWA() {
    const banner = document.getElementById('pwa-banner');
    if(banner) banner.classList.remove('show');
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then(() => { this.deferredPrompt = null; });
    }
  },

  dismissPWA() {
    const banner = document.getElementById('pwa-banner');
    if(banner) banner.classList.remove('show');
    try {
      localStorage.setItem('kyub_pwa_dismissed', '1');
    } catch (e) {
      console.warn("Could not save PWA dismissal to localStorage:", e);
    }
  },

  // === ONBOARDING ===
  nextOnboard() {
    const steps = document.querySelectorAll('.onboard-step');
    const step = this.currentOnboardStep;
    if (step === 0) {
      const nick = document.getElementById('input-nickname').value.trim();
      if (!nick) return; this.profile.nickname = nick;
    } else if (step === 1) {
      if (!this.profile.classLevel) return;
    } else if (step === 2) {
      const lvl = this.profile.classLevel;
      if ((lvl === 'premiere' || lvl === 'terminale') && this.profile.specialties.length === 0) return;
    } else if (step === 3) {
      if (this.profile.subscribedDisciplines.length === 0) return;
      this.saveProfile();
      this.showScreen('feed');
      return;
    }
    steps[step].classList.remove('active');
    this.currentOnboardStep++;
    // Skip specialty step if not 1ère/Tle
    if (this.currentOnboardStep === 2 && !['premiere','terminale'].includes(this.profile.classLevel)) {
      this.currentOnboardStep = 3;
    }
    steps[this.currentOnboardStep].classList.add('active');
  },

  selectLevel(lvl) {
    this.profile.classLevel = lvl;
    document.querySelectorAll('.level-btn').forEach(b => b.classList.toggle('selected', b.dataset.level === lvl));
  },

  toggleSpecialty(id) {
    const idx = this.profile.specialties.indexOf(id);
    if (idx >= 0) this.profile.specialties.splice(idx, 1);
    else {
      const max = this.profile.classLevel === 'terminale' ? 2 : 3;
      if (this.profile.specialties.length < max) this.profile.specialties.push(id);
    }
    document.querySelectorAll('.spec-btn').forEach(b =>
      b.classList.toggle('selected', this.profile.specialties.includes(b.dataset.id)));
  },

  toggleDiscipline(id) {
    const idx = this.profile.subscribedDisciplines.indexOf(id);
    if (idx >= 0) this.profile.subscribedDisciplines.splice(idx, 1);
    else this.profile.subscribedDisciplines.push(id);
    document.querySelectorAll('.disc-btn').forEach(b =>
      b.classList.toggle('selected', this.profile.subscribedDisciplines.includes(b.dataset.id)));
  },

  // === FEED ===
  renderFeed() {
    this.renderStories();
    const feed = document.getElementById('feed-posts');
    feed.innerHTML = '';
    const allPosts = [...FEED_POSTS, ...FEED_DATABASE];
    allPosts.sort((a, b) => b.id.localeCompare(a.id)); // Simple shuffle/order
    allPosts.forEach((p, i) => {
      const disc = DISCIPLINES.find(d => d.id === p.disciplineId);
      const div = document.createElement('div');
      div.className = 'feed-post';
      div.style.animationDelay = (i * 0.1) + 's';
      let body = '';
      if (p.type === 'qcm_rapide' && p.question) {
        body = `<h3>${p.title}</h3><p>${p.content}</p>
          <div class="qcm-options">${p.question.options.map((o, j) =>
            `<button class="qcm-option" onclick="App.answerFeedQCM(this,${j},${p.question.correct})">${o}</button>`
          ).join('')}</div>`;
      } else {
        body = `<h3>${p.title}</h3><p>${p.content}</p>`;
      }
      div.innerHTML = `
        <div class="post-header">
          <div class="post-avatar" style="background:${disc?disc.color:'var(--brand-cyan)'}22;border:2px solid ${disc?disc.color:'var(--brand-cyan)'}">${disc?disc.icon:'📚'}</div>
          <div class="post-meta"><h4>${disc?disc.name:'Discipline'}</h4><span>Il y a ${Math.floor(Math.random()*12)+1}h</span></div>
        </div>
        <div class="post-body">${body}</div>
        <div class="post-actions">
          <button class="post-action" onclick="this.classList.toggle('liked')"><span class="icon">♡</span>${p.likes}</button>
          <button class="post-action" onclick="this.classList.toggle('saved')"><span class="icon">🔖</span>${p.saves}</button>
          <button class="post-action" onclick="App.showScreen('kyub')"><span class="icon">🎲</span>Kyub</button>
        </div>`;
      feed.appendChild(div);
    });
  },

  answerFeedQCM(btn, chosen, correct) {
    const parent = btn.parentElement;
    parent.querySelectorAll('.qcm-option').forEach((o, i) => {
      o.disabled = true;
      if (i === correct) o.classList.add('correct');
      else if (i === chosen && i !== correct) o.classList.add('wrong');
    });
  },

  renderStories() {
    const bar = document.getElementById('stories-bar');
    bar.innerHTML = '';
    const subDiscs = DISCIPLINES.filter(d => this.profile.subscribedDisciplines.includes(d.id));
    subDiscs.forEach(d => {
      const div = document.createElement('div');
      div.className = 'story-bubble';
      div.onclick = () => this.openStory(d);
      div.innerHTML = `
        <div class="story-ring" style="border-color:${d.color};background:${d.color}15">${d.icon}</div>
        <span class="story-name">${d.name}</span>`;
      bar.appendChild(div);
    });
  },

  openStory(disc) {
    const viewer = document.getElementById('story-viewer');
    const stories = [
      { title: `${disc.icon} Micro-cours`, text: `Bienvenue dans le micro-cours de ${disc.name} !\n\nChaque jour, une nouvelle notion express pour progresser sans stress.`, formula: null },
      { title: '📌 Point clé du jour', text: `En ${disc.name}, retiens bien cette notion fondamentale pour tes prochains contrôles.`, formula: disc.id === 'physique' ? 'F⃗ = m × a⃗' : 'n = m / M' },
      { title: '⚡ Question Flash', text: 'Es-tu prêt à tester tes connaissances ?\n\nSwipe vers le Kyub pour t\'entraîner !', formula: null },
    ];
    let idx = 0;
    viewer.classList.add('open');
    const render = () => {
      const s = stories[idx];
      viewer.querySelector('.st-icon').textContent = disc.icon;
      viewer.querySelector('.st-name').textContent = disc.name;
      viewer.querySelector('.story-content h2').textContent = s.title;
      viewer.querySelector('.story-content p').textContent = s.text;
      const f = viewer.querySelector('.story-content .formula');
      f.textContent = s.formula || ''; f.style.display = s.formula ? 'block' : 'none';
      viewer.querySelectorAll('.story-progress-bar').forEach((b, i) => {
        b.classList.remove('active', 'done');
        if (i < idx) b.classList.add('done');
        else if (i === idx) { b.classList.add('active'); }
      });
    };
    render();
    viewer.onclick = (e) => {
      if (e.target.classList.contains('story-close')) { viewer.classList.remove('open'); return; }
      idx++;
      if (idx >= stories.length) { viewer.classList.remove('open'); return; }
      render();
    };
  },

  // === KYUB 3D ===
  renderKyub() {
    const userLvl = this.profile.classLevel || 'seconde';
    let chapters = CHAPTERS.filter(c =>
      c.level === userLvl && (this.profile.subscribedDisciplines || []).includes(c.disciplineId));
    
    if (chapters.length === 0) {
      // Fallback: any chapter for the user's level
      chapters = CHAPTERS.filter(c => c.level === userLvl);
    }
    if (chapters.length === 0) {
      // Direct fallback to all chapters
      chapters = CHAPTERS;
    }
    if (chapters.length === 0) return;

    const ch = chapters[this.kyubState.chapterIdx % chapters.length];
    const disc = DISCIPLINES.find(d => d.id === ch.disciplineId);
    const qs = QUESTIONS.filter(q => q.chapterId === ch.id);
    const diff = this.kyubState.difficulty;

    document.getElementById('kyub-chapter').textContent = `${disc ? disc.icon : '🎲'} ${ch.title}`;
    const dots = document.getElementById('kyub-dots');
    dots.innerHTML = [1,2,3,4,5].map(i =>
      `<div class="kyub-dot${i<=diff?' active':''}" style="${i<=diff?`background:${disc?disc.color:'var(--brand-cyan)'}`:''}"></div>`
    ).join('');

    const cube = document.getElementById('cube');
    const faces = cube.querySelectorAll('.cube-face');
    
    // Get questions from new database if available
    let currentQs = [];
    const dbLvl = EDUCATIONAL_DB[userLvl];
    if (dbLvl && dbLvl[ch.disciplineId]) {
      const dbChapter = dbLvl[ch.disciplineId].chapters.find(c => c.id === ch.id || c.title === ch.title);
      if (dbChapter) {
        currentQs = dbChapter.qcm.map((q, idx) => ({
          id: `db-${idx}`,
          chapterId: ch.id,
          difficulty: q.d,
          question: q.q,
          options: q.a,
          correctAnswer: q.c,
          explanation: q.e
        }));
      }
    }

    if (currentQs.length === 0) {
      currentQs = qs;
    }

    const q = currentQs.find(qq => qq.difficulty === diff) || currentQs[0];
    if (q) {
      faces[0].innerHTML = `<div class="face-question">${q.question}</div>
        <div class="face-options">${(q.options||[]).map((o,i) =>
          `<button class="face-option" onclick="App.answerKyub(this,${i},${q.correctAnswer})">${o}</button>`
        ).join('')}</div>`;
    } else {
      faces[0].innerHTML = `<div class="face-question" style="opacity:0.6;font-size:1rem">
        Désolé, aucune question disponible pour ce chapitre et ce niveau.<br><br>
        <button class="btn-primary" style="padding:8px 16px;font-size:0.8rem;max-width:200px;margin:0 auto" onclick="App.showScreen('feed')">Retour au Feed</button>
      </div>`;
    }
    // Adjacent faces hint
    faces[1].innerHTML = `<div style="font-size:2rem;margin-bottom:12px">🔥</div><p style="color:var(--text-muted);font-size:.85rem">Plus difficile →</p>`;
    faces[2].innerHTML = `<div style="font-size:2rem;margin-bottom:12px">😌</div><p style="color:var(--text-muted);font-size:.85rem">← Plus facile</p>`;
    faces[3].innerHTML = `<div style="font-size:2rem;margin-bottom:12px">⬆️</div><p style="color:var(--text-muted);font-size:.85rem">Question suivante</p>`;
    faces[4].innerHTML = `<div style="font-size:2rem;margin-bottom:12px">🚪</div><p style="color:var(--text-muted);font-size:.85rem">Quitter le Kyub</p>`;

    cube.style.transform = 'rotateY(0) rotateX(0)';
    cube.style.borderColor = disc ? disc.color : 'var(--brand-cyan)';
    this.initKyubSwipe(disc);
  },

  answerKyub(btn, chosen, correct) {
    const parent = btn.parentElement;
    parent.querySelectorAll('.face-option').forEach((o, i) => {
      o.style.pointerEvents = 'none';
      if (i === correct) o.classList.add('correct');
      else if (i === chosen) o.classList.add('wrong');
    });
    if (chosen === correct) {
      setTimeout(() => { this.kyubState.questionIdx++; this.renderKyub(); }, 800);
    }
  },

  initKyubSwipe(disc) {
    const el = document.getElementById('kyub-container');
    let sx, sy;
    const onStart = (e) => { const t = e.touches?.[0]||e; sx=t.clientX; sy=t.clientY; };
    const onEnd = (e) => {
      const t = e.changedTouches?.[0]||e;
      const dx = t.clientX - sx, dy = t.clientY - sy;
      if (Math.abs(dx) < 40 && Math.abs(dy) < 40) return;
      const cube = document.getElementById('cube');
      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) { // Right = harder
          this.kyubState.difficulty = Math.min(5, this.kyubState.difficulty + 1);
          cube.style.transform = 'rotateY(-90deg)';
        } else { // Left = easier
          this.kyubState.difficulty = Math.max(1, this.kyubState.difficulty - 1);
          cube.style.transform = 'rotateY(90deg)';
        }
      } else {
        if (dy < 0) { // Up = next question
          this.kyubState.questionIdx++;
          cube.style.transform = 'rotateX(90deg)';
        } else { // Down = exit
          cube.style.transform = 'rotateX(-90deg)';
          setTimeout(() => this.showScreen('feed'), 600);
          return;
        }
      }
      setTimeout(() => this.renderKyub(), 600);
    };
    el.removeEventListener('touchstart', el._ts);
    el.removeEventListener('touchend', el._te);
    el.removeEventListener('mousedown', el._md);
    el.removeEventListener('mouseup', el._mu);
    el._ts = onStart; el._te = onEnd; el._md = onStart; el._mu = onEnd;
    el.addEventListener('touchstart', onStart, {passive:true});
    el.addEventListener('touchend', onEnd);
    el.addEventListener('mousedown', onStart);
    el.addEventListener('mouseup', onEnd);
  },

  // === FLASHCARDS ===
  renderFlashcards() {
    let fcs = FLASHCARDS.slice();
    const dbLvl = EDUCATIONAL_DB[this.profile.classLevel || 'seconde'];
    if (dbLvl) {
      const subDiscs = this.profile.subscribedDisciplines;
      let allDbCards = [];
      subDiscs.forEach(dId => {
        if (dbLvl[dId]) {
          dbLvl[dId].chapters.forEach(ch => {
            (ch.flashcards || []).forEach((fc, idx) => {
              allDbCards.push({
                id: `db-fc-${dId}-${idx}`,
                chapterId: ch.id,
                recto: fc.r,
                verso: fc.v
              });
            });
          });
        }
      });
      if (allDbCards.length > 0) fcs = allDbCards;
    }
    this.flashState = { cardIdx: 0, mastered: 0, toReview: 0, cards: fcs };
    this.renderCurrentFlashcard();
  },

  renderCurrentFlashcard() {
    const deck = document.getElementById('flash-deck');
    const s = this.flashState;
    if (s.cardIdx >= s.cards.length) {
      deck.innerHTML = `<div style="text-align:center;padding:40px;">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <h3>Session terminée !</h3>
        <p style="color:var(--text-muted);margin-top:8px">✅ ${s.mastered} maîtrisées · ❌ ${s.toReview} à revoir</p>
      </div>`;
      return;
    }
    const fc = s.cards[s.cardIdx];
    const ch = CHAPTERS.find(c => c.id === fc.chapterId);
    const disc = ch ? DISCIPLINES.find(d => d.id === ch.disciplineId) : null;
    deck.innerHTML = `
      <div class="flash-card" id="current-flash">
        <div class="card-label">${disc ? disc.icon+' '+disc.name : ''}</div>
        <div class="card-front"><div class="card-text">${fc.recto}</div></div>
        <div class="card-back"><div class="card-text">${fc.verso}</div></div>
        <div class="flash-tap-hint">Tape pour retourner</div>
        <div class="flash-swipe-indicator left-ind">✖ À revoir</div>
        <div class="flash-swipe-indicator right-ind">♡ Maîtrisé</div>
      </div>`;
    const card = document.getElementById('current-flash');
    card.addEventListener('click', (e) => {
      if (!card._dragged) card.classList.toggle('flipped');
      card._dragged = false;
    });
    this.initFlashSwipeGesture(card);
    document.getElementById('flash-progress').textContent =
      `${s.cardIdx + 1} / ${s.cards.length}`;
  },

  initFlashSwipeGesture(card) {
    let startX = 0, startY = 0, currentX = 0, isDragging = false;
    const onStart = (e) => {
      const t = e.touches ? e.touches[0] : e;
      startX = t.clientX; startY = t.clientY; currentX = 0;
      isDragging = true; card._dragged = false;
      card.style.transition = 'none';
    };
    const onMove = (e) => {
      if (!isDragging) return;
      const t = e.touches ? e.touches[0] : e;
      currentX = t.clientX - startX;
      const rotate = currentX * 0.08;
      card.style.transform = `translateX(${currentX}px) rotate(${rotate}deg)`;
      // Show indicators
      const leftInd = card.querySelector('.left-ind');
      const rightInd = card.querySelector('.right-ind');
      if (leftInd) leftInd.style.opacity = currentX < -30 ? Math.min(1, Math.abs(currentX)/100) : 0;
      if (rightInd) rightInd.style.opacity = currentX > 30 ? Math.min(1, currentX/100) : 0;
      if (Math.abs(currentX) > 10) card._dragged = true;
      e.preventDefault();
    };
    const onEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      card.style.transition = 'transform .4s ease, opacity .4s ease';
      if (Math.abs(currentX) > 80) {
        this.swipeFlash(currentX > 0 ? 'right' : 'left');
      } else {
        card.style.transform = '';
        const leftInd = card.querySelector('.left-ind');
        const rightInd = card.querySelector('.right-ind');
        if (leftInd) leftInd.style.opacity = 0;
        if (rightInd) rightInd.style.opacity = 0;
      }
    };
    card.addEventListener('touchstart', onStart, {passive: true});
    card.addEventListener('touchmove', onMove, {passive: false});
    card.addEventListener('touchend', onEnd);
    card.addEventListener('mousedown', onStart);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
  },

  swipeFlash(dir) {
    const card = document.getElementById('current-flash');
    if (!card) return;
    card.classList.add(dir === 'right' ? 'swiped-right' : 'swiped-left');
    if (dir === 'right') this.flashState.mastered++;
    else this.flashState.toReview++;
    setTimeout(() => {
      this.flashState.cardIdx++;
      this.renderCurrentFlashcard();
    }, 400);
  },

  // === PROFILE ===
  renderProfile() {
    const p = this.profile;
    document.getElementById('profile-nickname').textContent = p.nickname || 'Kyuber';
    document.getElementById('profile-level-text').textContent =
      `Niveau ${p.level || 1} · ${p.xp || 0} XP`;
    document.getElementById('profile-streak').textContent = `🔥 ${p.streak || 0} jours`;

    const statsEl = document.getElementById('profile-stats');
    statsEl.innerHTML = `
      <div class="stat-card"><div class="stat-value text-gradient">${p.kyubCollection?.length||0}</div><div class="stat-label">Kyubs</div></div>
      <div class="stat-card"><div class="stat-value text-gradient">${p.streak||0}</div><div class="stat-label">Streak</div></div>
      <div class="stat-card"><div class="stat-value text-gradient">${p.xp||0}</div><div class="stat-label">XP</div></div>`;

    const mastEl = document.getElementById('mastery-bars');
    mastEl.innerHTML = '';
    Object.entries(p.masteryScores || {}).forEach(([id, score]) => {
      const disc = DISCIPLINES.find(d => d.id === id);
      if (!disc) return;
      const div = document.createElement('div');
      div.className = 'mastery-bar-wrap';
      div.innerHTML = `
        <span class="mastery-icon">${disc.icon}</span>
        <span class="mastery-name">${disc.name}</span>
        <div class="mastery-track"><div class="mastery-fill" style="width:0;background:${disc.color}"></div></div>
        <span class="mastery-pct">${score}%</span>`;
      mastEl.appendChild(div);
      setTimeout(() => div.querySelector('.mastery-fill').style.width = score + '%', 100);
    });

    const collEl = document.getElementById('collection-grid');
    collEl.innerHTML = '';
    (p.kyubCollection || []).forEach(k => {
      const ch = CHAPTERS.find(c => c.id === k.chapterId);
      const disc = ch ? DISCIPLINES.find(d => d.id === ch.disciplineId) : null;
      const mat = KYUB_MATERIALS.find(m => m.id === k.material);
      const div = document.createElement('div');
      div.className = 'collection-kyub' + (mat?.glow ? ' glow' : '');
      div.style.borderColor = mat?.color || '';
      div.innerHTML = `<span class="kyub-icon">${disc?.icon||'🎲'}</span>
        <span class="kyub-mat" style="color:${mat?.color||''}">${mat?.name||''}</span>`;
      collEl.appendChild(div);
    });
  },

  // === SEARCH ===
  renderSearch() {
    const list = document.getElementById('search-list');
    list.innerHTML = '';
    DISCIPLINES.forEach(d => {
      const sub = this.profile.subscribedDisciplines.includes(d.id);
      const div = document.createElement('div');
      div.className = 'search-disc-item';
      div.innerHTML = `
        <div class="sdi-icon" style="background:${d.color}20;border:2px solid ${d.color}">${d.icon}</div>
        <div class="sdi-info"><div class="sdi-name">${d.name}</div><div class="sdi-desc">${d.avatarName}</div></div>
        <button class="sub-toggle ${sub?'subscribed':''}" onclick="App.toggleSub('${d.id}',this)">${sub?'Abonné':'S\'abonner'}</button>`;
      list.appendChild(div);
    });
  },

  toggleSub(id, btn) {
    const idx = this.profile.subscribedDisciplines.indexOf(id);
    if (idx >= 0) this.profile.subscribedDisciplines.splice(idx, 1);
    else this.profile.subscribedDisciplines.push(id);
    this.saveProfile();
    btn.classList.toggle('subscribed');
    btn.textContent = btn.classList.contains('subscribed') ? 'Abonné' : "S'abonner";
  },

  // === CHAT ===
  renderChat() {
    const msgs = document.getElementById('chat-messages');
    if (msgs.children.length === 0) {
      msgs.innerHTML = `<div class="chat-msg bot">Salut ! 👋 Je suis ton assistant Kyub. Pose-moi une question sur tes cours et je t'explique ça de façon simple et fun ! 🎲</div>`;
    }
  },

  sendChat() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;
    const msgs = document.getElementById('chat-messages');
    msgs.innerHTML += `<div class="chat-msg user">${text}</div>`;
    input.value = '';
    
    // Auto-scroll
    msgs.scrollTop = msgs.scrollHeight;

    setTimeout(() => {
      const response = this.getBotResponse(text);
      // Format response text with markdown support (like bold or lists)
      const formatted = response
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/👉/g, '👉')
        .replace(/💡/g, '💡')
        .replace(/✅/g, '✅')
        .replace(/🧠/g, '🧠')
        .replace(/⚡/g, '⚡')
        .replace(/🏷️/g, '🏷️')
        .replace(/📝/g, '📝');

      msgs.innerHTML += `<div class="chat-msg bot">${formatted}</div>`;
      msgs.scrollTop = msgs.scrollHeight;
    }, 850);
  },

  getBotResponse(text) {
    const query = text.toLowerCase();
    
    // Help commands
    if (query.includes('aide') || query.includes('help') || query.includes('comment') || query.includes('kyub') || query.includes('fonctionne')) {
      return `🎲 **Comment fonctionne Kyub ?**\n\n1. **Le Feed** : Découvre chaque jour des anecdotes et des QCM flash.\n2. **Le Kyub 3D** : Swipe pour changer de difficulté. Réponds aux questions directement sur les faces du cube.\n3. **Flash-Swipe** : Révise rapidement avec le paquet de cartes. Swipe à droite si tu connais, à gauche si tu dois réviser.\n4. **Grand Kyub** : Évalue-toi sur 6 faces pour forger ton cube dans un matériau rare !`;
    }
    
    const db = EDUCATIONAL_DB[this.profile.classLevel || 'seconde'] || EDUCATIONAL_DB['seconde'];
    let bestMatch = null;
    let matchType = '';
    
    // Search chapters and questions
    for (const discId in db) {
      const disc = db[discId];
      if (disc.chapters) {
        for (const ch of disc.chapters) {
          // Chapter title match
          if (query.includes(ch.title.toLowerCase()) || ch.title.toLowerCase().split(' ').some(w => w.length > 3 && query.includes(w))) {
            bestMatch = { discId, ch };
            matchType = 'chapter';
            break;
          }
          // QCM match
          if (ch.qcm) {
            for (const q of ch.qcm) {
              if (query.includes(q.q.toLowerCase()) || q.q.toLowerCase().split(' ').some(w => w.length > 4 && query.includes(w))) {
                bestMatch = { discId, ch, q };
                matchType = 'qcm';
                break;
              }
            }
          }
          // Flashcard match
          if (ch.flashcards) {
            for (const fc of ch.flashcards) {
              if (query.includes(fc.r.toLowerCase())) {
                bestMatch = { discId, ch, fc };
                matchType = 'flashcard';
                break;
              }
            }
          }
          if (bestMatch) break;
        }
      }
      if (bestMatch) break;
    }
    
    if (bestMatch) {
      const discObj = DISCIPLINES.find(d => d.id === bestMatch.discId);
      const discName = discObj ? discObj.name : bestMatch.discId;
      if (matchType === 'chapter') {
        const qSample = bestMatch.ch.qcm && bestMatch.ch.qcm[0];
        return `📖 En **${discName}** (Chapitre : *${bestMatch.ch.title}*), voici un exemple de question clé :\n\n👉 **${qSample ? qSample.q : 'Concept clé'}**\n💡 *Explication* : ${qSample ? qSample.e : 'Réviser dans l\'app'}\n\nTu peux tester ce chapitre complet sur ton Kyub 3D !`;
      }
      if (matchType === 'qcm') {
        return `💡 En **${discName}**, voici ce qu'il faut savoir :\n\n❓ **${bestMatch.q.q}**\n✅ *Bonne réponse* : **${bestMatch.q.a[bestMatch.q.c]}**\n🧠 *Explication* : ${bestMatch.q.e}`;
      }
      if (matchType === 'flashcard') {
        return `⚡ Fiche Mémoire (**${discName}**) :\n\n🏷️ **Terme** : *${bestMatch.fc.r}*\n📝 **Définition** : *${bestMatch.fc.v}*\n\nRetrouve cette carte dans ton deck de révision !`;
      }
    }
    
    // Quick keyword matching fallbacks
    if (query.includes('math') || query.includes('calcul')) {
      return `📐 **Révision Mathématiques** :\nPour la classe de Seconde, n'oublie pas les identités remarquables comme *(a+b)² = a² + 2ab + b²* et *(a-b)(a+b) = a² - b²*. Quel chapitre aimerais-tu aborder ?`;
    }
    if (query.includes('atome') || query.includes('proton') || query.includes('electron') || query.includes('électron') || query.includes('noyau')) {
      return `⚛️ **Zoom sur l'Atome** :\nIl est constitué d'un noyau central (comprenant des protons chargés positivement et des neutrons de charge nulle) et d'un nuage d'électrons chargés négativement. L'atome est électriquement neutre.`;
    }
    if (query.includes('mole') || query.includes('avogadro') || query.includes('matière')) {
      return `🧪 **La Mole & Masse Molaire** :\nUne mole est un paquet contenant exactement *6,022 × 10²³* entités (atomes ou molécules). Formule indispensable : *n = m / M* (quantité de matière = masse / masse molaire).`;
    }
    if (query.includes('force') || query.includes('inertie') || query.includes('mouvement')) {
      return `🚴‍♂️ **Principe d'inertie** :\nSi les forces exercées sur un objet se compensent (somme des forces = 0), l'objet reste immobile ou conserve son mouvement rectiligne uniforme. C'est l'inertie !`;
    }
    if (query.includes('adn') || query.includes('cellule') || query.includes('gène') || query.includes('mutation')) {
      return `🧬 **SVT Express** :\nL'ADN (Acide DésoxyriboNucléique) est le support universel de l'information génétique. Une cellule contient des organites comme le noyau où loge l'ADN. Les mutations modifient la séquence d'ADN et créent de nouveaux allèles.`;
    }
    if (query.includes('histoire') || query.includes('empire') || query.includes('grec') || query.includes('romain')) {
      return `📜 **Rappel Histoire** :\nEn Seconde, on étudie le monde méditerranéen antique : l'empreinte grecque (démocratie athénienne, cités) et l'empire romain (pax romana, cités gallo-romaines). Pose-moi une question sur ces notions !`;
    }
    if (query.includes('géo') || query.includes('géographie') || query.includes('développement')) {
      return `🌍 **Rappel Géographie** :\nLe programme porte sur les nouveaux enjeux du développement face à la croissance démographique et aux ressources limitées. Quels concepts veux-tu clarifier ?`;
    }
    if (query.includes('ses') || query.includes('économie') || query.includes('social')) {
      return `📊 **Introduction aux SES** :\nOn y étudie comment les ménages et les entreprises font des choix économiques (marché, consommation, production) et comment s'organise le lien social.`;
    }
    if (query.includes('anglais') || query.includes('english') || query.includes('espagnol') || query.includes('langue')) {
      return `🇬🇧🇪🇸 **Langues vivantes** :\nLe meilleur moyen de progresser est d'utiliser les flashcards pour mémoriser le vocabulaire clé régulièrement. Quel terme te pose problème ?`;
    }

    const lvlLabel = this.profile.classLevel === '3eme' ? 'Troisième' : 'Seconde';
    return `🤔 Je ne suis pas sûr de pouvoir répondre précisément à : "${text}".\n\nJe suis entraîné à t'aider sur le programme officiel de **${lvlLabel}** (Maths, Physique-Chimie, SVT, Histoire-Géo, SES, Français, Anglais, Espagnol).\n\nPose-moi une question claire, par exemple :\n- *"C'est quoi un isotope ?"*\n- *"Explique la mole"*\n- *"Comment fonctionne le principe d'inertie ?"*\n- *"Formule de la vitesse"*`;
  }

  // === GRAND KYUB (6-face evaluation) ===
  renderGrandKyub() {
    this.grandKyubFace = 0;
    this.grandKyubScore = 0;
    
    // Choose chapter based on subscribed disciplines
    const chapters = CHAPTERS.filter(c => this.profile.subscribedDisciplines.includes(c.disciplineId));
    const ch = chapters[this.kyubState.chapterIdx % chapters.length] || CHAPTERS[0];
    const disc = DISCIPLINES.find(d => d.id === ch.disciplineId);
    
    // Get questions from database
    let qs = QUESTIONS.filter(q => q.chapterId === ch.id).sort((a,b) => a.difficulty - b.difficulty);
    const dbLvl = EDUCATIONAL_DB[this.profile.classLevel || 'seconde'];
    if (dbLvl && dbLvl[ch.disciplineId]) {
      const dbChapter = dbLvl[ch.disciplineId].chapters.find(c => c.id === ch.id || c.title === ch.title);
      if (dbChapter) {
        qs = dbChapter.qcm.map((q, idx) => ({
          id: `db-gk-${idx}`,
          question: q.q,
          options: q.a,
          correctAnswer: q.c,
          explanation: q.e,
          difficulty: q.d
        })).sort((a,b) => a.difficulty - b.difficulty);
      }
    }

    const container = document.getElementById('grandkyub-content');
    const renderFace = () => {
      const face = this.grandKyubFace;
      if (face >= 6) {
        const mat = this.grandKyubScore >= 6 ? 'plasma' : this.grandKyubScore >= 5 ? 'or' : this.grandKyubScore >= 4 ? 'titane' : this.grandKyubScore >= 2 ? 'acier' : 'graphite';
        const matData = KYUB_MATERIALS.find(m => m.id === mat) || KYUB_MATERIALS[0];
        container.innerHTML = `<div class="gk-result">
          <div class="gk-cube-reward" style="border-color:${matData.color};box-shadow:0 0 30px ${matData.color}40">
            <span style="font-size:2.5rem">${disc ? disc.icon : '🎲'}</span>
            <span style="color:${matData.color};font-weight:700;font-size:1.1rem">${matData.name}</span>
          </div>
          <h2 style="margin:20px 0 8px">Kyub complété !</h2>
          <p style="color:var(--text-muted)">${this.grandKyubScore}/6 faces réussies</p>
          <button class="btn-primary" style="margin-top:24px;max-width:280px" onclick="App.showScreen('feed')">Retour au Feed</button>
        </div>`;
        return;
      }
      
      if (!qs || qs.length === 0) {
        container.innerHTML = `<div class="gk-result">
          <h2 style="margin:20px 0 8px">Oups !</h2>
          <p style="color:var(--text-muted)">Aucune question disponible pour ce chapitre.</p>
          <button class="btn-primary" style="margin-top:24px;max-width:280px" onclick="App.showScreen('feed')">Retour au Feed</button>
        </div>`;
        return;
      }

      const q = qs[face % qs.length];
      const labels = ['Définition','Application','Application','Analyse','Analyse','Master 🏆'];
      const faceColors = ['#22C55E','#3B82F6','#3B82F6','#F59E0B','#F59E0B','#EF4444'];
      container.innerHTML = `
        <div class="gk-face-info">
          <span class="gk-face-num" style="background:${faceColors[face]}20;color:${faceColors[face]}">Face ${face+1}/6</span>
          <span class="gk-face-label">${labels[face]}</span>
        </div>
        <div class="gk-progress-cubes">${[0,1,2,3,4,5].map(i => `<div class="gk-mini-cube ${i < face ? 'done' : i === face ? 'current' : ''}" style="${i < face ? 'background:'+faceColors[i] : ''}"></div>`).join('')}</div>
        <div class="gk-question-card glass-card" style="border-color:${faceColors[face]}40">
          <p class="gk-q-text">${q.question}</p>
          <div class="gk-options">${(q.options||[]).map((o,i) =>
            `<button class="gk-option" onclick="App.answerGrandKyub(this,${i},${q.correctAnswer},${face})">${o}</button>`
          ).join('')}</div>
        </div>`;
    };
    renderFace();
    this._renderGKFace = renderFace;
  },

  answerGrandKyub(btn, chosen, correct, face) {
    const parent = btn.closest('.gk-options');
    parent.querySelectorAll('.gk-option').forEach((o, i) => {
      o.style.pointerEvents = 'none';
      if (i === correct) o.classList.add('correct');
      else if (i === chosen) o.classList.add('wrong');
    });
    if (chosen === correct) this.grandKyubScore++;
    setTimeout(() => {
      this.grandKyubFace++;
      this._renderGKFace();
    }, 900);
  },
};

document.addEventListener('DOMContentLoaded', () => App.init());
