// KYUB - Main Application Logic
const App = {
  currentScreen: 'splash',
  currentOnboardStep: 0,
  profile: JSON.parse(JSON.stringify(DEFAULT_PROFILE)),
  kyubState: { chapterIdx: 0, difficulty: 1, questionIdx: 0 },
  flashState: { cardIdx: 0, mastered: 0, toReview: 0 },

  init() {
    this.loadProfile();
    setTimeout(() => {
      const splash = document.querySelector('.splash');
      splash.classList.add('hide');
      setTimeout(() => {
        splash.remove();
        if (!this.profile.nickname) this.showScreen('onboarding');
        else this.showScreen('feed');
      }, 500);
    }, 2500);
    this.bindNav();
  },

  loadProfile() {
    const saved = localStorage.getItem('kyub_profile');
    if (saved) this.profile = JSON.parse(saved);
  },
  saveProfile() { localStorage.setItem('kyub_profile', JSON.stringify(this.profile)); },

  showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById('screen-' + id);
    if (el) { el.classList.add('active'); this.currentScreen = id; }
    document.querySelectorAll('.nav-item').forEach(n => {
      n.classList.toggle('active', n.dataset.screen === id);
    });
    const nav = document.querySelector('.bottom-nav');
    nav.style.display = (id === 'onboarding') ? 'none' : 'flex';
    if (id === 'feed') this.renderFeed();
    if (id === 'kyub') this.renderKyub();
    if (id === 'flashcards') this.renderFlashcards();
    if (id === 'profile') this.renderProfile();
    if (id === 'search') this.renderSearch();
    if (id === 'chat') this.renderChat();
  },

  bindNav() {
    document.querySelectorAll('.nav-item').forEach(n => {
      n.addEventListener('click', () => this.showScreen(n.dataset.screen));
    });
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
    FEED_POSTS.forEach((p, i) => {
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
          <div class="post-avatar" style="background:${disc.color}22;border:2px solid ${disc.color}">${disc.icon}</div>
          <div class="post-meta"><h4>${disc.name}</h4><span>Il y a ${Math.floor(Math.random()*12)+1}h</span></div>
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
    const chapters = CHAPTERS.filter(c =>
      this.profile.subscribedDisciplines.includes(c.disciplineId));
    if (chapters.length === 0) return;
    const ch = chapters[this.kyubState.chapterIdx % chapters.length];
    const disc = DISCIPLINES.find(d => d.id === ch.disciplineId);
    const qs = QUESTIONS.filter(q => q.chapterId === ch.id);
    const diff = this.kyubState.difficulty;

    document.getElementById('kyub-chapter').textContent = `${disc.icon} ${ch.title}`;
    const dots = document.getElementById('kyub-dots');
    dots.innerHTML = [1,2,3,4,5].map(i =>
      `<div class="kyub-dot${i<=diff?' active':''}" style="${i<=diff?`background:${disc.color}`:''}"></div>`
    ).join('');

    const cube = document.getElementById('cube');
    const faces = cube.querySelectorAll('.cube-face');
    const q = qs.find(qq => qq.difficulty === diff) || qs[0];
    if (q) {
      faces[0].innerHTML = `<div class="face-question">${q.question}</div>
        <div class="face-options">${(q.options||[]).map((o,i) =>
          `<button class="face-option" onclick="App.answerKyub(this,${i},${q.correctAnswer})">${o}</button>`
        ).join('')}</div>`;
    }
    // Adjacent faces hint
    faces[1].innerHTML = `<div style="font-size:2rem;margin-bottom:12px">🔥</div><p style="color:var(--text-muted);font-size:.85rem">Plus difficile →</p>`;
    faces[2].innerHTML = `<div style="font-size:2rem;margin-bottom:12px">😌</div><p style="color:var(--text-muted);font-size:.85rem">← Plus facile</p>`;
    faces[3].innerHTML = `<div style="font-size:2rem;margin-bottom:12px">⬆️</div><p style="color:var(--text-muted);font-size:.85rem">Question suivante</p>`;
    faces[4].innerHTML = `<div style="font-size:2rem;margin-bottom:12px">🚪</div><p style="color:var(--text-muted);font-size:.85rem">Quitter le Kyub</p>`;

    cube.style.transform = 'rotateY(0) rotateX(0)';
    cube.style.borderColor = disc.color;
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
    const deck = document.getElementById('flash-deck');
    const fcs = FLASHCARDS.slice();
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
        <div style="margin-top:20px;font-size:.7rem;color:var(--text-muted)">Tape pour retourner</div>
      </div>`;
    const card = document.getElementById('current-flash');
    card.onclick = () => card.classList.toggle('flipped');
    document.getElementById('flash-progress').textContent =
      `${s.cardIdx + 1} / ${s.cards.length}`;
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
    setTimeout(() => {
      const responses = [
        `Bonne question ! 🤔 En gros, c'est comme quand tu fais du vélo : tant que personne te freine, tu continues tout droit. C'est l'inertie ! La clé c'est que ΣF = 0 → mouvement rectiligne uniforme. 🚴‍♂️`,
        `Ah ça c'est un classique ! 😄 Retiens juste : n = m/M (quantité de matière = masse divisée par masse molaire). Le nombre d'Avogadro c'est 6,022 × 10²³. C'est genre… BEAUCOUP d'atomes. 🤯`,
        `Top comme question ! 💡 Pour résumer en 3 points : 1) L'atome = noyau + électrons, 2) Z = nombre de protons, 3) A = protons + neutrons. Et voilà, t'es prêt pour le contrôle ! ⚛️`,
      ];
      msgs.innerHTML += `<div class="chat-msg bot">${responses[Math.floor(Math.random()*responses.length)]}</div>`;
      msgs.scrollTop = msgs.scrollHeight;
    }, 800);
  },
};

document.addEventListener('DOMContentLoaded', () => App.init());
