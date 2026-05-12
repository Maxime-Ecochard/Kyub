// ============================================================
// KYUB - Mock Data (Phase 1 : Physique-Chimie Lycée)
// ============================================================

const DISCIPLINES = [
  {
    id: 'physique',
    name: 'Physique',
    color: '#00D4FF',
    colorRgb: '0, 212, 255',
    icon: '⚛️',
    avatarName: 'Le Physicien',
    avatarDesc: 'Cube bleu électrique avec un atome en orbite',
  },
  {
    id: 'chimie',
    name: 'Chimie',
    color: '#00FF87',
    colorRgb: '0, 255, 135',
    icon: '🧪',
    avatarName: 'Le Chimiste',
    avatarDesc: 'Cube vert émeraude avec liquide effervescent',
  },
  {
    id: 'maths',
    name: 'Mathématiques',
    color: '#A78BFA',
    colorRgb: '167, 139, 250',
    icon: '📐',
    avatarName: "L'Architecte",
    avatarDesc: 'Cube violet gravé de π et ∞',
  },
  {
    id: 'svt',
    name: 'SVT',
    color: '#34D399',
    colorRgb: '52, 211, 153',
    icon: '🧬',
    avatarName: 'Le Biologiste',
    avatarDesc: "Cube vert nature avec ADN visible",
  },
  {
    id: 'histoire',
    name: 'Histoire',
    color: '#F59E0B',
    colorRgb: '245, 158, 11',
    icon: '📜',
    avatarName: "L'Historien",
    avatarDesc: 'Cube style grimoire avec sceaux de cire',
  },
  {
    id: 'geo',
    name: 'Géographie',
    color: '#3B82F6',
    colorRgb: '59, 130, 246',
    icon: '🌍',
    avatarName: "L'Explorateur",
    avatarDesc: 'Cube mini-planète avec relief',
  },
  {
    id: 'francais',
    name: 'Français',
    color: '#EAB308',
    colorRgb: '234, 179, 8',
    icon: '✒️',
    avatarName: "L'Écrivain",
    avatarDesc: 'Cube parchemin avec plume',
  },
  {
    id: 'anglais',
    name: 'Anglais',
    color: '#F87171',
    colorRgb: '248, 113, 113',
    icon: '🇬🇧',
    avatarName: 'Le Globe-Trotter',
    avatarDesc: 'Cube pop Union Jack',
  },
  {
    id: 'ses',
    name: 'SES',
    color: '#10B981',
    colorRgb: '16, 185, 129',
    icon: '📊',
    avatarName: "L'Économiste",
    avatarDesc: 'Cube avec courbes boursières',
  },
  {
    id: 'philo',
    name: 'Philosophie',
    color: '#94A3B8',
    colorRgb: '148, 163, 184',
    icon: '🪞',
    avatarName: 'Le Penseur',
    avatarDesc: 'Cube miroir changeant',
  },
  {
    id: 'nsi',
    name: 'NSI',
    color: '#4ADE80',
    colorRgb: '74, 222, 128',
    icon: '💻',
    avatarName: 'Le Codeur',
    avatarDesc: 'Cube terminal noir avec code vert',
  },
  {
    id: 'espagnol',
    name: 'Espagnol',
    color: '#FB923C',
    colorRgb: '251, 146, 60',
    icon: '🇪🇸',
    avatarName: 'El Viajero',
    avatarDesc: 'Cube terre cuite avec mosaïques',
  },
  {
    id: 'arts',
    name: 'Arts Plastiques',
    color: '#E879F9',
    colorRgb: '232, 121, 249',
    icon: '🎨',
    avatarName: "L'Artiste",
    avatarDesc: 'Cube palette avec coulures de peinture',
  },
  {
    id: 'musique',
    name: 'Musique',
    color: '#FB7185',
    colorRgb: '251, 113, 133',
    icon: '🎵',
    avatarName: 'Le Musicien',
    avatarDesc: 'Cube-enceinte avec clé de sol',
  },
  {
    id: 'eps',
    name: 'EPS',
    color: '#FF6B35',
    colorRgb: '255, 107, 53',
    icon: '🏃',
    avatarName: "L'Athlète",
    avatarDesc: 'Cube ballon avec chronomètre',
  },
  {
    id: 'techno',
    name: 'Technologie',
    color: '#64748B',
    colorRgb: '100, 116, 139',
    icon: '⚙️',
    avatarName: "L'Ingénieur",
    avatarDesc: 'Cube avec rouages et circuits',
  },
  {
    id: 'allemand',
    name: 'Allemand',
    color: '#FCD34D',
    colorRgb: '252, 211, 77',
    icon: '🇩🇪',
    avatarName: 'Der Forscher',
    avatarDesc: "Cube industriel noir-rouge-or",
  },
  {
    id: 'italien',
    name: 'Italien',
    color: '#F97316',
    colorRgb: '249, 115, 22',
    icon: '🇮🇹',
    avatarName: "L'Artista",
    avatarDesc: 'Cube Renaissance avec fresques',
  },
  {
    id: 'hggsp',
    name: 'HGGSP',
    color: '#8B5CF6',
    colorRgb: '139, 92, 246',
    icon: '🏛️',
    avatarName: 'Le Diplomate',
    avatarDesc: 'Cube moitié marbre, moitié radar',
  },
  {
    id: 'hlp',
    name: 'HLP',
    color: '#C084FC',
    colorRgb: '192, 132, 252',
    icon: '📖',
    avatarName: 'Le Poète',
    avatarDesc: 'Cube entouré de lumière douce',
  },
];

const CHAPTERS = [
  // Physique - Seconde
  {
    id: 'phys-2-mouvement',
    disciplineId: 'physique',
    title: 'Description du mouvement',
    level: 'seconde',
    order: 1,
  },
  {
    id: 'phys-2-forces',
    disciplineId: 'physique',
    title: 'Modélisation des forces',
    level: 'seconde',
    order: 2,
  },
  {
    id: 'phys-2-signaux',
    disciplineId: 'physique',
    title: 'Émission et perception du son',
    level: 'seconde',
    order: 3,
  },
  // Physique - Première Spé
  {
    id: 'phys-1-inertie',
    disciplineId: 'physique',
    title: "Principe d'inertie",
    level: 'premiere',
    order: 1,
  },
  {
    id: 'phys-1-energie',
    disciplineId: 'physique',
    title: 'Énergie mécanique',
    level: 'premiere',
    order: 2,
  },
  // Physique - Terminale Spé
  {
    id: 'phys-t-newton',
    disciplineId: 'physique',
    title: 'Lois de Newton',
    level: 'terminale',
    order: 1,
  },
  // Chimie - Seconde
  {
    id: 'chim-2-atome',
    disciplineId: 'chimie',
    title: "Constitution de l'atome",
    level: 'seconde',
    order: 1,
  },
  {
    id: 'chim-2-mole',
    disciplineId: 'chimie',
    title: 'La mole',
    level: 'seconde',
    order: 2,
  },
  // Chimie - Première Spé
  {
    id: 'chim-1-reactions',
    disciplineId: 'chimie',
    title: 'Réactions chimiques',
    level: 'premiere',
    order: 1,
  },
];

const QUESTIONS = [
  // Principe d'inertie - Face 1 à 6
  {
    id: 'q-inertie-1',
    chapterId: 'phys-1-inertie',
    difficulty: 1,
    cubeFace: 1,
    type: 'qcm',
    question: "Qu'est-ce que le principe d'inertie ?",
    options: [
      "Un corps reste immobile ou en mouvement rectiligne uniforme si les forces se compensent",
      "Un corps accélère toujours sous l'effet d'une force",
      "Un corps s'arrête toujours quand on ne le pousse plus",
      "Un corps change de direction sans force"
    ],
    correctAnswer: 0,
    explanation: "Le principe d'inertie (1ère loi de Newton) dit qu'un objet persévère dans son état de repos ou de mouvement rectiligne uniforme si la somme des forces est nulle. 💡"
  },
  {
    id: 'q-inertie-2',
    chapterId: 'phys-1-inertie',
    difficulty: 1,
    cubeFace: 1,
    type: 'qcm',
    question: "Quelle est la condition pour qu'un objet soit en équilibre ?",
    options: [
      "Il doit être immobile",
      "La somme des forces doit être nulle",
      "Il doit être posé sur le sol",
      "Aucune force ne s'exerce sur lui"
    ],
    correctAnswer: 1,
    explanation: "L'équilibre = somme vectorielle des forces = vecteur nul. L'objet peut bouger en ligne droite à vitesse constante ! 🎯"
  },
  {
    id: 'q-inertie-3',
    chapterId: 'phys-1-inertie',
    difficulty: 2,
    cubeFace: 2,
    type: 'qcm',
    question: "Un passager est projeté vers l'avant lors d'un freinage brusque. Pourquoi ?",
    options: [
      "Une force le pousse vers l'avant",
      "Son corps tend à conserver sa vitesse initiale (inertie)",
      "Le siège le repousse",
      "La gravité change de direction"
    ],
    correctAnswer: 1,
    explanation: "C'est l'inertie ! Ton corps veut continuer à avancer à la même vitesse que la voiture avait. La ceinture, c'est la force qui te retient. 🚗💨"
  },
  {
    id: 'q-inertie-4',
    chapterId: 'phys-1-inertie',
    difficulty: 3,
    cubeFace: 3,
    type: 'qcm',
    question: "Une balle de 500g est lancée horizontalement à 20 m/s. Quelle est sa quantité de mouvement ?",
    options: [
      "10 kg·m/s",
      "100 kg·m/s",
      "0,1 kg·m/s",
      "10 000 kg·m/s"
    ],
    correctAnswer: 0,
    explanation: "p = m × v = 0,5 × 20 = 10 kg·m/s. N'oublie pas de convertir les grammes en kg ! ⚡"
  },
  {
    id: 'q-inertie-5',
    chapterId: 'phys-1-inertie',
    difficulty: 4,
    cubeFace: 4,
    type: 'qcm',
    question: "Un satellite en orbite circulaire est-il soumis au principe d'inertie ?",
    options: [
      "Oui, il va en ligne droite",
      "Non, car sa trajectoire est courbe donc les forces ne se compensent pas",
      "Oui, car il n'y a pas de frottement dans l'espace",
      "Non, car il est en apesanteur"
    ],
    correctAnswer: 1,
    explanation: "La trajectoire courbe montre que la somme des forces N'EST PAS nulle (la gravité l'attire). Le principe d'inertie ne s'applique donc pas ici. 🛰️"
  },
  {
    id: 'q-inertie-6',
    chapterId: 'phys-1-inertie',
    difficulty: 5,
    cubeFace: 5,
    type: 'qcm',
    question: "Dans un référentiel non galiléen, le principe d'inertie :",
    options: [
      "S'applique normalement",
      "Ne s'applique pas, il faut ajouter des forces fictives",
      "S'applique seulement si l'objet est immobile",
      "N'existe pas"
    ],
    correctAnswer: 1,
    explanation: "Le principe d'inertie n'est valable que dans un référentiel galiléen. Dans un manège (non galiléen), tu ressens une force centrifuge... qui est fictive ! 🌀"
  },
  // Atome questions
  {
    id: 'q-atome-1',
    chapterId: 'chim-2-atome',
    difficulty: 1,
    cubeFace: 1,
    type: 'qcm',
    question: "De quoi est constitué un atome ?",
    options: [
      "Un noyau (protons + neutrons) et des électrons",
      "Uniquement de protons",
      "De molécules",
      "D'ions"
    ],
    correctAnswer: 0,
    explanation: "L'atome = un noyau (protons ⊕ + neutrons) entouré d'électrons ⊖ qui tournent autour. Le tout est électriquement neutre ! ⚛️"
  },
  {
    id: 'q-atome-2',
    chapterId: 'chim-2-atome',
    difficulty: 2,
    cubeFace: 2,
    type: 'qcm',
    question: "Le numéro atomique Z représente :",
    options: [
      "Le nombre de neutrons",
      "Le nombre de protons (= nombre d'électrons)",
      "La masse de l'atome",
      "Le nombre de couches électroniques"
    ],
    correctAnswer: 1,
    explanation: "Z = nombre de protons = nombre d'électrons (atome neutre). C'est ce qui définit l'élément chimique ! 🔬"
  },
  // La mole
  {
    id: 'q-mole-1',
    chapterId: 'chim-2-mole',
    difficulty: 1,
    cubeFace: 1,
    type: 'qcm',
    question: "Que vaut le nombre d'Avogadro ?",
    options: [
      "6,022 × 10²³ mol⁻¹",
      "3,14 × 10⁸ mol⁻¹",
      "9,81 mol⁻¹",
      "1,6 × 10⁻¹⁹ mol⁻¹"
    ],
    correctAnswer: 0,
    explanation: "Nₐ = 6,022 × 10²³ mol⁻¹. C'est le nombre d'entités dans une mole. C'est ÉNORME, genre 602 200 milliards de milliards ! 🤯"
  },
];

const FLASHCARDS = [
  // Inertie
  {
    id: 'fc-inertie-1',
    chapterId: 'phys-1-inertie',
    recto: "Principe d'inertie (1ère loi de Newton)",
    verso: "Si la somme des forces exercées sur un objet est nulle, alors il reste immobile ou en mouvement rectiligne uniforme.",
  },
  {
    id: 'fc-inertie-2',
    chapterId: 'phys-1-inertie',
    recto: "Référentiel galiléen",
    verso: "Référentiel dans lequel le principe d'inertie est vérifié. Exemples : terrestre (approx.), héliocentrique.",
  },
  {
    id: 'fc-inertie-3',
    chapterId: 'phys-1-inertie',
    recto: "Quantité de mouvement",
    verso: "p⃗ = m × v⃗\nEn kg·m/s. C'est le produit de la masse par la vitesse.",
  },
  {
    id: 'fc-inertie-4',
    chapterId: 'phys-1-inertie',
    recto: "Que se passe-t-il si ΣF⃗ ≠ 0⃗ ?",
    verso: "L'objet n'est PAS en équilibre : il accélère, décélère ou change de direction.",
  },
  // Atome
  {
    id: 'fc-atome-1',
    chapterId: 'chim-2-atome',
    recto: "Composition du noyau atomique",
    verso: "Protons (charge +) et Neutrons (pas de charge). Ensemble = nucléons. A = Z + N",
  },
  {
    id: 'fc-atome-2',
    chapterId: 'chim-2-atome',
    recto: "Qu'est-ce qu'un isotope ?",
    verso: "Atomes avec le même nombre de protons (Z) mais un nombre de neutrons (N) différent. Ex: ¹²C et ¹⁴C",
  },
  // La mole
  {
    id: 'fc-mole-1',
    chapterId: 'chim-2-mole',
    recto: "La mole (mol)",
    verso: "Unité de quantité de matière. 1 mol = 6,022 × 10²³ entités (atomes, molécules, ions...)",
  },
  {
    id: 'fc-mole-2',
    chapterId: 'chim-2-mole',
    recto: "Masse molaire M",
    verso: "Masse d'une mole d'entités. En g/mol.\nn = m / M (quantité de matière = masse / masse molaire)",
  },
];

const FEED_POSTS = [
  {
    id: 'post-1',
    disciplineId: 'physique',
    type: 'daily_fact',
    title: '💫 Le savais-tu ?',
    content: "Dans l'espace, personne ne peut t'entendre crier. Le son a besoin d'un milieu matériel pour se propager — pas de molécules, pas de son !",
    likes: 234,
    saves: 89,
  },
  {
    id: 'post-2',
    disciplineId: 'chimie',
    type: 'fiche',
    title: "🧪 Fiche Express : L'atome",
    content: "L'atome est constitué d'un noyau (protons + neutrons) et d'électrons.\n\n⚡ Proton : charge +e\n⚡ Électron : charge -e\n⚡ Neutron : charge nulle\n\n📏 Taille noyau : 10⁻¹⁵ m\n📏 Taille atome : 10⁻¹⁰ m\n\n→ Le noyau est 100 000× plus petit !",
    likes: 456,
    saves: 312,
  },
  {
    id: 'post-3',
    disciplineId: 'physique',
    type: 'qcm_rapide',
    title: '⚡ QCM Flash',
    content: 'Un objet en chute libre sans frottement a un mouvement...',
    question: {
      options: ['Rectiligne uniforme', 'Rectiligne uniformément accéléré', 'Circulaire', 'Quelconque'],
      correct: 1,
    },
    likes: 178,
    saves: 67,
  },
  {
    id: 'post-4',
    disciplineId: 'chimie',
    type: 'daily_fact',
    title: "🔥 Fun Fact Chimie",
    content: "L'or est créé lors de l'explosion d'étoiles (supernovae). Chaque bijou en or que tu portes vient littéralement des étoiles ! ✨⭐",
    likes: 891,
    saves: 445,
  },
  {
    id: 'post-5',
    disciplineId: 'physique',
    type: 'rappel',
    title: "🔄 Rappel",
    content: "Ton Kyub 'Principe d'inertie' commence à prendre la poussière ! Fais un swipe rapide pour ne pas perdre ta série de 5 jours 🔥",
    likes: 45,
    saves: 12,
  },
];

const CLASS_LEVELS = [
  { id: '6eme', label: '6ème', cycle: 'college' },
  { id: '5eme', label: '5ème', cycle: 'college' },
  { id: '4eme', label: '4ème', cycle: 'college' },
  { id: '3eme', label: '3ème', cycle: 'college' },
  { id: 'seconde', label: 'Seconde', cycle: 'lycee' },
  { id: 'premiere', label: 'Première', cycle: 'lycee' },
  { id: 'terminale', label: 'Terminale', cycle: 'lycee' },
];

const SPECIALTIES = [
  { id: 'spe-physique', name: 'Physique-Chimie', icon: '⚛️' },
  { id: 'spe-maths', name: 'Mathématiques', icon: '📐' },
  { id: 'spe-svt', name: 'SVT', icon: '🧬' },
  { id: 'spe-ses', name: 'SES', icon: '📊' },
  { id: 'spe-hggsp', name: 'HGGSP', icon: '🏛️' },
  { id: 'spe-nsi', name: 'NSI', icon: '💻' },
  { id: 'spe-hlp', name: 'HLP', icon: '📖' },
  { id: 'spe-arts', name: 'Arts', icon: '🎨' },
  { id: 'spe-musique', name: 'Musique', icon: '🎵' },
  { id: 'spe-llce-anglais', name: 'LLCE Anglais', icon: '🇬🇧' },
  { id: 'spe-llce-espagnol', name: 'LLCE Espagnol', icon: '🇪🇸' },
];

const KYUB_MATERIALS = [
  { id: 'graphite', name: 'Graphite', minScore: 0, color: '#6B7280', glow: false },
  { id: 'acier', name: 'Acier', minScore: 40, color: '#9CA3AF', glow: false },
  { id: 'titane', name: 'Titane', minScore: 70, color: '#C0C0C0', glow: true },
  { id: 'or', name: 'Or', minScore: 90, color: '#FFD700', glow: true },
  { id: 'plasma', name: 'Plasma', minScore: 100, color: '#8B5CF6', glow: true, holographic: true },
];

// Default user profile for demo
const DEFAULT_PROFILE = {
  nickname: '',
  classLevel: '',
  specialties: [],
  subscribedDisciplines: ['physique', 'chimie'],
  streak: 5,
  masteryScores: {
    physique: 65,
    chimie: 42,
  },
  kyubCollection: [
    { chapterId: 'phys-2-mouvement', material: 'titane', score: 85, completedAt: '2026-05-10' },
    { chapterId: 'phys-2-forces', material: 'acier', score: 62, completedAt: '2026-05-08' },
    { chapterId: 'chim-2-atome', material: 'or', score: 95, completedAt: '2026-05-11' },
  ],
  xp: 1250,
  level: 7,
};
