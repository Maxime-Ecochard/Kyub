// KYUB Educational Database - Seconde (Official Curriculum)
const EDUCATIONAL_DB = {
  seconde: {
    maths: {
      chapters: [
        {
          id: 'maths-2de-nombres',
          title: 'Nombres et calculs',
          qcm: [
            { q: "Lequel est irrationnel ?", a: ["3,14", "22/7", "√2", "0"], c: 2, e: "√2 ne s'écrit pas a/b.", d: 1 },
            { q: "x ∈ [-2 ; 5[", a: ["x=5 ok", "x>-2", "x=-2 ok", "x>0"], c: 2, e: "Crochet fermé = inclus.", d: 1 },
            { q: "(2³ × 2⁵) / 2⁴", a: ["2⁴", "2¹⁵", "2²", "2⁸"], c: 0, e: "8 - 4 = 4.", d: 2 },
            { q: "Réels", a: ["N", "Z", "Q", "R"], c: 3, e: "R = Réels.", d: 1 },
            { q: "(x+3)²", a: ["x²+9", "x²+3x+9", "x²+6x+9", "2x+6"], c: 2, e: "a²+2ab+b².", d: 2 },
            { q: "x²-16", a: ["(x-4)(x+4)", "(x-8)(x+8)", "(x-4)²", "(x+4)²"], c: 0, e: "a²-b².", d: 2 },
            { q: "0,00045 sci.", a: ["45e-5", "4,5e-4", "0,45e-3", "4,5e4"], c: 1, e: "4 rangs droite.", d: 2 },
            { q: "0,75 =", a: ["1/2", "2/3", "3/4", "4/5"], c: 2, e: "3/4.", d: 1 },
            { q: "2x-5=7", a: ["x=1", "x=6", "x=12", "x=-1"], c: 1, e: "12/2=6.", d: 1 },
            { q: "∈ signifie", a: ["égal", "≠", "appartient", "inclus"], c: 2, e: "Appartenance.", d: 1 },
            { q: "Z =", a: ["Naturels", "Relatifs", "Rationnels", "Réels"], c: 1, e: "Relatifs.", d: 1 },
            { q: "2+3×4", a: ["20", "14", "9", "24"], c: 1, e: "Multi d'abord.", d: 1 },
            { q: "Inverse 5", a: ["-5", "1/5", "0,5", "5"], c: 1, e: "1/x.", d: 1 },
            { q: "Opposé -8", a: ["8", "1/8", "-1/8", "0"], c: 0, e: "-x.", d: 1 },
            { q: "Premiers < 10", a: ["3", "4", "5", "2"], c: 1, e: "2,3,5,7.", d: 2 },
            { q: "|-12|", a: ["-12", "0", "12", "1,2"], c: 2, e: "Distance > 0.", d: 2 },
            { q: "√32", a: ["4√2", "2√4", "16√2", "8"], c: 0, e: "16*2.", d: 3 },
            { q: "Plus petit ens.", a: ["N", "Z", "D", "Q"], c: 0, e: "N ⊂ Z.", d: 1 },
            { q: "x²=25", a: ["5", "-5", "5 ou -5", "Ø"], c: 2, e: "±√a.", d: 2 },
            { q: "(2x-1)(x+4)", a: ["2x²-4", "2x²+7x-4", "2x²+9x+4", "x²+3x-4"], c: 1, e: "Double dist.", d: 3 }
          ],
          flashcards: [
            { r: "N", v: "{0,1,2...}" }, { r: "Z", v: "{...,-1,0,1...}" }, { r: "Q", v: "a/b" },
            { r: "(a+b)²", v: "a²+2ab+b²" }, { r: "(a-b)²", v: "a²-2ab+b²" }, { r: "a²-b²", v: "(a-b)(a+b)" },
            { r: "|x|", v: "Distance à 0" }, { r: "Premier", v: "div par 1 et soi" }, { r: "Inverse", v: "1/x" }, { r: "Opposé", v: "-x" }
          ]
        }
      ]
    },
    physique: {
      chapters: [
        {
          id: 'phys-2de-mouv',
          title: 'Mouvement',
          qcm: [
            { q: "Choix premier ?", a: ["Montre", "Référentiel", "Règle", "Objet"], c: 1, e: "Relativité.", d: 1 },
            { q: "Traj. droite", a: ["Circ", "Curv", "Rect", "Unif"], c: 2, e: "Droit.", d: 1 },
            { q: "Vitesse ↑", a: ["Ralenti", "Accéléré", "Unif", "Stable"], c: 1, e: "Plus vite.", d: 1 },
            { q: "MRU vitesse", a: ["Nulle", "↑", "↓", "Cste"], c: 3, e: "Uniforme = Cste.", d: 1 },
            { q: "Unité SI", a: ["km/h", "m/s", "cm/min", "mph"], c: 1, e: "m/s.", d: 1 },
            { q: "Formule v", a: ["d*t", "t/d", "d/t", "d+t"], c: 2, e: "d/t.", d: 1 },
            { q: "36 km/h =", a: ["3,6", "10", "360", "100"], c: 1, e: "/3,6.", d: 3 },
            { q: "Trajectoire", a: ["v", "Ens. pos.", "t", "F"], c: 1, e: "Chemin.", d: 1 },
            { q: "Héliocentrique", a: ["Terre", "Soleil", "Galaxie", "Lune"], c: 1, e: "Hélios.", d: 1 },
            { q: "Éolienne point", a: ["Rect", "Circ", "Imm", "Osc"], c: 1, e: "Cercle.", d: 1 },
            { q: "Chronophoto", a: ["m", "V", "Pos/t", "T"], c: 2, e: "Positions.", d: 2 },
            { q: "Points espacés", a: ["Acc", "Ral", "Unif", "Imm"], c: 0, e: "Plus vite.", d: 2 },
            { q: "100m en 4s", a: ["400", "0,04", "25", "50"], c: 2, e: "100/4.", d: 2 },
            { q: "Géocentrique", a: ["Planètes", "Satellites", "Voiture", "Atome"], c: 1, e: "Géo = Terre.", d: 2 },
            { q: "20 m/s =", a: ["20", "72", "5,5", "200"], c: 1, e: "*3,6.", d: 3 },
            { q: "Valve vélo/sol", a: ["Cercle", "Droite", "Cycloïde", "Point"], c: 2, e: "Complexe.", d: 4 },
            { q: "v instantanée", a: ["Tout", "Instant t", "Début", "Fin"], c: 1, e: "Compteur.", d: 2 },
            { q: "Réf = objet +", a: ["Thermo", "Repère+t", "Moteur", "Lumière"], c: 1, e: "Espace+temps.", d: 3 },
            { q: "v lumière", a: ["3e5 km/s", "340 m/s", "1e3 km/h", "1,5e8 km/s"], c: 0, e: "3*10^8 m/s.", d: 2 },
            { q: "Unité SI temps", a: ["min", "h", "s", "j"], c: 2, e: "Seconde.", d: 1 }
          ],
          flashcards: [
            { r: "Référentiel", v: "Objet de réf." }, { r: "Traj.", v: "Ens. positions" }, { r: "Rectiligne", v: "Droite" },
            { r: "Uniforme", v: "v constante" }, { r: "Accéléré", v: "v augmente" }, { r: "Ralenti", v: "v diminue" },
            { r: "v moyenne", v: "d / Δt" }, { r: "km/h -> m/s", v: "div par 3,6" }, { r: "Réf Géoc", v: "Centré Terre" }, { r: "Réf Hélioc", v: "Centré Soleil" }
          ]
        }
      ]
    },
    svt: {
      chapters: [
        {
          id: 'svt-2de-adn',
          title: 'ADN et Cellule',
          qcm: [
            { q: "Unité du vivant", a: ["Atome", "Organe", "Cellule", "Molécule"], c: 2, e: "Tout vivant est cellule.", d: 1 },
            { q: "ADN localisé", a: ["Noyau", "Cytoplasme", "Paroi", "Membrane"], c: 0, e: "Eucaryotes : noyau.", d: 1 },
            { q: "ADN forme", a: ["Ligne", "Double hélice", "Cercle", "Sphère"], c: 1, e: "Watson & Crick.", d: 1 },
            { q: "Base A avec", a: ["C", "G", "T", "U"], c: 2, e: "Adénine-Thymine.", d: 2 },
            { q: "Base G avec", a: ["A", "C", "T", "U"], c: 1, e: "Guanine-Cytosine.", d: 2 },
            { q: "Gène =", a: ["Protéine", "Portion ADN", "Cellule", "Organisme"], c: 1, e: "Information codée.", d: 1 },
            { q: "Mutation =", a: ["Mort", "Modif ADN", "Reproduction", "Énergie"], c: 1, e: "Changement séquence.", d: 2 },
            { q: "Transgénèse", a: ["Greffe", "Transfert gène", "Cure", "Clonage"], c: 1, e: "Entre espèces.", d: 3 },
            { q: "Procaryote", a: ["Pas de noyau", "Noyau", "Pluricellulaire", "Grand"], c: 0, e: "Ex: Bactérie.", d: 2 },
            { q: "Complémentaires", a: ["A-G", "A-T", "C-T", "G-A"], c: 1, e: "A-T et C-G.", d: 1 },
            { q: "Nucléotide =", a: ["ADN seul", "Base+sucre+P", "Protéine", "Acide"], c: 1, e: "Unité de base.", d: 3 },
            { q: "Chromosome", a: ["ADN condensé", "Sucre", "Liquide", "Gaz"], c: 0, e: "Visible pdt mitose.", d: 2 },
            { q: "Allèle", a: ["Gène différent", "Version gène", "ADN", "Cellule"], c: 1, e: "Ex: Yeux bleus.", d: 2 },
            { q: "Phénotype", a: ["ADN", "Caractères obs.", "Gènes", "Milieu"], c: 1, e: "Ce qu'on voit.", d: 2 },
            { q: "Génotype", a: ["Ens. gènes", "Aspect", "Taille", "Poids"], c: 0, e: "Patrimoine génétique.", d: 2 },
            { q: "Universel ADN", a: ["Oui", "Non", "Que humains", "Que plantes"], c: 0, e: "Partagé par tout vivant.", d: 2 },
            { q: "Séquence", a: ["Ordre bases", "Nombre bases", "Poids", "Couleur"], c: 0, e: "L'ordre fait le code.", d: 3 },
            { q: "Vivant =", a: ["ADN", "Métabolisme", "Reproduction", "Tout ça"], c: 3, e: "Critères du vivant.", d: 1 },
            { q: "Microscope", a: ["Voir cellules", "Voir atomes", "Voir étoiles", "Voir son"], c: 0, e: "Outil bio.", d: 1 },
            { q: "Organite", a: ["Petite cellule", "Compartiment", "Organe", "Muscle"], c: 1, e: "Ex: Noyau.", d: 3 }
          ],
          flashcards: [
            { r: "Cellule", v: "Unité structurelle" }, { r: "ADN", v: "Acide DésoxyriboNucléique" }, { r: "A", v: "Adénine" },
            { r: "T", v: "Thymine" }, { r: "C", v: "Cytosine" }, { r: "G", v: "Guanine" },
            { r: "Gène", v: "Portion d'ADN" }, { r: "Allèle", v: "Version d'un gène" }, { r: "Mutation", v: "Modif séquence" }, { r: "Noyau", v: "Contient ADN" }
          ]
        }
      ]
    },
    chimie: {
      chapters: [
        {
          id: 'chim-2de-atome',
          title: 'Constitution de l\'atome',
          qcm: [
            { q: "De quoi est composé le noyau ?", a: ["Électrons", "Protons et Neutrons", "Vide", "Atomes"], c: 1, e: "Le noyau contient les nucléons.", d: 1 },
            { q: "Charge d\'un proton ?", a: ["-e", "+e", "0", "2e"], c: 1, e: "Positif.", d: 1 },
            { q: "Atome est neutre car :", a: ["Pas de charge", "P = E", "N = P", "Noyau = Vide"], c: 1, e: "Protons = Électrons.", d: 1 },
            { q: "Masse atome ≈", a: ["Masse noyau", "Masse électrons", "Masse vide", "0"], c: 0, e: "Électrons négligeables.", d: 2 },
            { q: "Z est le nombre de :", a: ["Nucléons", "Protons", "Neutrons", "Masse"], c: 1, e: "Numéro atomique.", d: 1 },
            { q: "A est le nombre de :", a: ["Nucléons", "Protons", "Neutrons", "Masse"], c: 0, e: "Nombre de masse.", d: 2 },
            { q: "Nombre de neutrons =", a: ["A + Z", "A - Z", "Z", "A"], c: 1, e: "N = A - Z.", d: 2 },
            { q: "Taille atome vs Noyau ?", a: ["100x", "10^5x", "10^2x", "Pareil"], c: 1, e: "100 000 fois plus grand.", d: 2 },
            { q: "Symbole Carbone ?", a: ["Ca", "Cb", "C", "Cr"], c: 2, e: "C.", d: 1 },
            { q: "Isotopes ont même :", a: ["A", "Z", "N", "Masse"], c: 1, e: "Même Z, A différent.", d: 3 },
            { q: "Anion a :", a: ["Gagné e-", "Perdu e-", "Gagné p+", "Perdu p+"], c: 0, e: "Charge négative.", d: 2 },
            { q: "Cation a :", a: ["Gagné e-", "Perdu e-", "Gagné p+", "Perdu p+"], c: 1, e: "Charge positive.", d: 2 },
            { q: "Cortège électronique :", a: ["Noyau", "Électrons", "Protons", "Neutrons"], c: 1, e: "Autour du noyau.", d: 1 },
            { q: "Électrons de valence :", a: ["Cœur", "Dernière couche", "Noyau", "Tous"], c: 1, e: "Couche externe.", d: 2 },
            { q: "Règle de l\'octet :", a: ["2 e-", "8 e-", "10 e-", "1 e-"], c: 1, e: "Stabilité à 8.", d: 3 },
            { q: "Gaz nobles sont :", a: ["Réactifs", "Stables", "Liquides", "Acides"], c: 1, e: "Couche saturée.", d: 2 },
            { q: "Symbole Azote ?", a: ["Az", "N", "A", "Ni"], c: 1, e: "Nitrogen.", d: 2 },
            { q: "Symbole Oxygène ?", a: ["Ox", "O", "Oz", "Om"], c: 1, e: "O.", d: 1 },
            { q: "Masse proton vs électron ?", a: ["Pareil", "p+ >> e-", "e- >> p+", "2x"], c: 1, e: "Environ 1836 fois.", d: 3 },
            { q: "Atome : structure ...", a: ["Pleine", "Lacunaire", "Liquide", "Cubique"], c: 1, e: "Beaucoup de vide.", d: 2 }
          ],
          flashcards: [
            { r: "Proton", v: "Charge + / Noyau" }, { r: "Neutron", v: "Charge 0 / Noyau" }, { r: "Électron", v: "Charge - / Cortège" },
            { r: "Z", v: "Numéro atomique" }, { r: "A", v: "Nombre de nucléons" }, { r: "N", v: "A - Z (neutrons)" },
            { r: "Isotope", v: "Même Z, A ≠" }, { r: "Cation", v: "Ion positif" }, { r: "Anion", v: "Ion négatif" }, { r: "Valence", v: "Électrons couche externe" }
          ]
        }
      ]
    },
    histoire: {
      chapters: [
        {
          id: 'hist-2de-antiq',
          title: 'Monde Méditerranéen Antique',
          qcm: [
            { q: "Cité grecque modèle démocratique ?", a: ["Sparte", "Athènes", "Thèbes", "Corinthe"], c: 1, e: "Vème siècle av. JC.", d: 1 },
            { q: "Lieu de la démocratie à Athènes", a: ["Acropole", "Pnyx", "Agora", "Parthénon"], c: 1, e: "Colline des débats.", d: 2 },
            { q: "Citoyen athénien est d'abord :", a: ["Riche", "Soldat", "Philosophe", "Marchand"], c: 1, e: "Défense de la cité.", d: 2 },
            { q: "Périclès est :", a: ["Roi", "Stratège", "Dieu", "Esclave"], c: 1, e: "Grand dirigeant athénien.", d: 1 },
            { q: "Ostracisme =", a: ["Récompense", "Exil politique", "Élection", "Fête"], c: 1, e: "Bannissement 10 ans.", d: 3 },
            { q: "Empire Romain débute avec :", a: ["César", "Auguste", "Néron", "Romulus"], c: 1, e: "27 av. JC.", d: 2 },
            { q: "Pax Romana =", a: ["Guerre", "Paix romaine", "Loi", "Religion"], c: 1, e: "Stabilité de l'Empire.", d: 1 },
            { q: "Romanisation =", a: ["Conquête", "Adoption culture", "Esclavage", "Destruction"], c: 1, e: "Mode de vie romain.", d: 2 },
            { q: "Limes =", a: ["Fruit", "Frontière fortifiée", "Route", "Armée"], c: 1, e: "Défense de l'Empire.", d: 2 },
            { q: "Édit de Milan (313)", a: ["Guerre", "Tolérance chrétienne", "Impôts", "Jeux"], c: 1, e: "Par Constantin.", d: 3 },
            { q: "Héliée =", a: ["Temple", "Tribunal populaire", "Marché", "Théâtre"], c: 1, e: "Justice à Athènes.", d: 3 },
            { q: "Métèque =", a: ["Esclave", "Étranger libre", "Citoyen", "Prêtre"], c: 1, e: "Vit à Athènes sans droits.", d: 2 },
            { q: "Isonomie =", a: ["Inégalité", "Égalité devant loi", "Dictature", "Vote"], c: 1, e: "Base démocratie.", d: 3 },
            { q: "Urbs =", a: ["Campagne", "La ville (Rome)", "Fleuve", "Dieu"], c: 1, e: "Rome par excellence.", d: 2 },
            { q: "Apothéose =", a: ["Mort", "Empereur devient dieu", "Naissance", "Guerre"], c: 1, e: "Culte impérial.", d: 2 },
            { q: "Citoyenneté romaine accordée à tous (212)", a: ["Édit Caracalla", "Loi Julia", "Code Civil", "Édit Nantes"], c: 0, e: "Unification Empire.", d: 3 },
            { q: "Ecclésia =", a: ["Église", "Assemblée citoyens", "École", "Armée"], c: 1, e: "Vote des lois.", d: 2 },
            { q: "Polythéisme", a: ["1 dieu", "Plusieurs dieux", "0 dieu", "Nature"], c: 1, e: "Grèce et Rome.", d: 1 },
            { q: "Forum =", a: ["Montagne", "Place publique", "Maison", "Port"], c: 1, e: "Cœur vie romaine.", d: 1 },
            { q: "Thalassocratie", a: ["Puissance terre", "Puissance mer", "Argent", "Savoir"], c: 1, e: "Athènes et sa flotte.", d: 3 }
          ],
          flashcards: [
            { r: "Démocratie", v: "Démos (peuple) + Kratos (pouvoir)" }, { r: "Ecclésia", v: "Assemblée souveraine" }, { r: "Stratège", v: "Chef militaire/politique" },
            { r: "Auguste", v: "1er empereur romain" }, { r: "Romanisation", v: "Diffusion culture Rome" }, { r: "Pax Romana", v: "Paix et prospérité" },
            { r: "Constantin", v: "Empereur chrétien" }, { r: "Citoyen", v: "Droits et devoirs" }, { r: "Métèque", v: "Étranger à Athènes" }, { r: "Pnyx", v: "Colline du débat" }
          ]
        }
      ]
    },
    francais: {
      chapters: [
        {
          id: 'fra-2de-recit',
          title: 'Le Récit au XIXème',
          qcm: [
            { q: "Mouvement de Balzac ?", a: ["Romantisme", "Réalisme", "Humanisme", "Surréalisme"], c: 1, e: "La Comédie Humaine.", d: 1 },
            { q: "Auteur de Germinal ?", a: ["Hugo", "Zola", "Flaubert", "Stendhal"], c: 1, e: "Naturalisme.", d: 1 },
            { q: "Incipit =", a: ["Fin", "Début du récit", "Milieu", "Résumé"], c: 1, e: "Premiers mots.", d: 1 },
            { q: "Point de vue 'Dieu' ?", a: ["Interne", "Externe", "Omniscient", "Subjectif"], c: 2, e: "Sait tout, voit tout.", d: 2 },
            { q: "Naturalisme va plus loin que :", a: ["Poésie", "Réalisme", "Théâtre", "Conte"], c: 1, e: "Science et milieu.", d: 2 },
            { q: "Narration à la 1ère pers. ?", a: ["Omniscient", "Interne", "Externe", "Neutre"], c: 1, e: "À travers un perso.", d: 2 },
            { q: "Ellipse =", a: ["Répétition", "Saut dans le temps", "Description", "Dialogue"], c: 1, e: "On passe sous silence.", d: 3 },
            { q: "Protagoniste =", a: ["Méchante", "Perso principal", "Narrateur", "Auteur"], c: 1, e: "Héros/Héroïne.", d: 1 },
            { q: "Focalisation externe ?", a: ["Sait tout", "Caméra neutre", "Pensées perso", "Rien"], c: 1, e: "Juste les faits.", d: 3 },
            { q: "Analepse =", a: ["Flashback", "Futur", "Pause", "Fin"], c: 0, e: "Retour en arrière.", d: 3 },
            { q: "Prolepsse =", a: ["Passé", "Anticipation futur", "Ralenti", "Image"], c: 1, e: "Bond en avant.", d: 3 },
            { q: "Auteur de Bel-Ami ?", a: ["Maupassant", "Flaubert", "Zola", "Hugo"], c: 0, e: "Réalisme social.", d: 2 },
            { q: "Auteur de Mme Bovary ?", a: ["Zola", "Flaubert", "Stendhal", "Balzac"], c: 1, e: "Perfection du style.", d: 2 },
            { q: "Excipit =", a: ["Préface", "Dernière scène", "Titre", "Note"], c: 1, e: "Fin du livre.", d: 2 },
            { q: "Schéma actanciel : qui aide ?", a: ["Opposant", "Adjuvant", "Destinateur", "Sujet"], c: 1, e: "L'allié.", d: 2 },
            { q: "Élément déclencheur ?", a: ["Fin", "Modifie situation init.", "Description", "Morale"], c: 1, e: "Lance l'action.", d: 1 },
            { q: "Roman épistolaire =", a: ["Images", "Lettres", "Vers", "Journal"], c: 1, e: "Correspondance.", d: 2 },
            { q: "Portrait physique/moral =", a: ["Action", "Description", "Dialogue", "Argument"], c: 1, e: "Pause narrative.", d: 1 },
            { q: "Temps du récit ?", a: ["Présent", "Passé simple / Imparfait", "Futur", "Subjonctif"], c: 1, e: "Convention classique.", d: 1 },
            { q: "Pastiche =", a: ["Critique", "Imitation style", "Vol", "Original"], c: 1, e: "Hommage ou parodie.", d: 3 }
          ],
          flashcards: [
            { r: "Incipit", v: "Début du roman" }, { r: "Excipit", v: "Fin du roman" }, { r: "Réalisme", v: "Peindre le réel" },
            { r: "Naturalisme", v: "Réalisme + Science (Zola)" }, { r: "Focalisation", v: "Angle de vue" }, { r: "Omniscient", v: "Le narrateur sait tout" },
            { r: "Ellipse", v: "Temps passé sous silence" }, { r: "Analepse", v: "Flashback" }, { r: "Allégorie", v: "Idée en image" }, { r: "Métaphore", v: "Comparaison sans 'comme'" }
          ]
        }
      ]
    },
    ses: {
      chapters: [
        {
          id: 'ses-2de-intro',
          title: 'Introduction aux SES',
          qcm: [
            { q: "SES veut dire :", a: ["Sport Et Santé", "Sciences Éco et Soc", "Savoir Et Science", "Soin Et Secours"], c: 1, e: "Économie + Sociologie.", d: 1 },
            { q: "Objet de l'économie ?", a: ["Amour", "Rareté et choix", "Météo", "Sport"], c: 1, e: "Gérer ressources limitées.", d: 1 },
            { q: "Sociologie étudie :", a: ["Prix", "Faits sociaux / Liens", "Plantes", "Atomes"], c: 1, e: "Vivre ensemble.", d: 1 },
            { q: "Science politique ?", a: ["Vendre", "Exercice du pouvoir", "Dessiner", "Chanter"], c: 1, e: "Gouvernance et État.", d: 1 },
            { q: "Corrélation ≠", a: ["Calcul", "Causalité", "Chiffre", "Courbe"], c: 1, e: "Lien n'est pas tjs cause.", d: 3 },
            { q: "Modèle en science ?", a: ["Maquette", "Simplification réel", "Vêtement", "Jouet"], c: 1, e: "Pour comprendre.", d: 2 },
            { q: "Donnée quantitative ?", a: ["Texte", "Chiffre / Quantité", "Avis", "Couleur"], c: 1, e: "Mesurable.", d: 1 },
            { q: "Donnée qualitative ?", a: ["Poids", "Entretien / Qualité", "Taille", "Prix"], c: 1, e: "Description riche.", d: 2 },
            { q: "Moyenne =", a: ["Somme / effectif", "Milieu", "Plus fréquent", "Max - Min"], c: 0, e: "Indicateur central.", d: 1 },
            { q: "Médiane =", a: ["Somme", "Sépare en deux 50%", "Moyenne", "Écart"], c: 1, e: "Partage la population.", d: 2 },
            { q: "Incitations =", a: ["Punition", "Récompenses/Sanctions", "Rien", "Cadeau"], c: 1, e: "Oriente les choix.", d: 2 },
            { q: "Socialisation =", a: ["Fête", "Apprendre codes soc.", "Parler", "Voter"], c: 1, e: "Devenir un membre soc.", d: 2 },
            { q: "Ressource rare ?", a: ["Air", "Temps / Pétrole", "Sable", "Eau mer"], c: 1, e: "Disponible en qt limitée.", d: 1 },
            { q: "Microéconomie ?", a: ["Grands agrégats", "Individus / Entreprises", "Mondialisation", "Chômage"], c: 1, e: "Petite échelle.", d: 2 },
            { q: "Macroéconomie ?", a: ["Boutiques", "PIB / Inflation", "1 personne", "Rien"], c: 1, e: "Échelle d'un pays.", d: 2 },
            { q: "Enquête par sondage ?", a: ["Tous", "Échantillon", "1 seul", "Auteur"], c: 1, e: "Partie représentative.", d: 2 },
            { q: "Variable explicative ?", a: ["Résultat", "Cause supposée", "Hasard", "Rien"], c: 1, e: "Ce qui fait varier y.", d: 3 },
            { q: "Pouvoir public ?", a: ["Amazon", "État / Mairie", "Moi", "Chat"], c: 1, e: "Collectivités publiques.", d: 1 },
            { q: "Arbitrage =", a: ["Match", "Choisir entre options", "Dormir", "Manger"], c: 1, e: "Coût d'opportunité.", d: 2 },
            { q: "Norme sociale ?", a: ["Loi écrite", "Règle de conduite", "Amende", "Prix"], c: 1, e: "Usage et coutume.", d: 2 }
          ],
          flashcards: [
            { r: "SES", v: "Éco, Socio, Sc. Politique" }, { r: "Rareté", v: "Besoin > Ressources" }, { r: "Arbitrage", v: "Faire un choix" },
            { r: "Causalité", v: "A provoque B" }, { r: "Corrélation", v: "A et B varient ensemble" }, { r: "Médiane", v: "Sépare 50/50" },
            { r: "Norme", v: "Règle de comportement" }, { r: "Valeur", v: "Idéal partagé" }, { r: "Modèle", v: "Représentation simplifiée" }, { r: "PIB", v: "Richesse produite" }
          ]
        }
      ]
    },
    anglais: {
      chapters: [
        {
          id: 'ang-2de-culture',
          title: 'Language & Culture',
          qcm: [
            { q: "Which tense for a habit in the present?", a: ["Present Continuous", "Present Simple", "Past Simple", "Future"], c: 1, e: "Facts and habits.", d: 1 },
            { q: "Meaning of 'Actually'?", a: ["Actuellement", "En fait / En réalité", "Parfois", "Souvent"], c: 1, e: "False friend!", d: 2 },
            { q: "Capital of the UK?", a: ["New York", "London", "Dublin", "Edinburgh"], c: 1, e: "Classic.", d: 1 },
            { q: "Which is a modal verb for ability?", a: ["Must", "Can", "Should", "Will"], c: 1, e: "I can swim.", d: 1 },
            { q: "Past of 'Go'?", a: ["Goed", "Went", "Gone", "Going"], c: 1, e: "Irregular.", d: 1 },
            { q: "Meaning of 'Eventually'?", a: ["Éventuellement", "Finalement", "Soudain", "Jamais"], c: 1, e: "False friend!", d: 3 },
            { q: "Official residence of the US President?", a: ["The Capitol", "The White House", "Pentagon", "Empire State"], c: 1, e: "Washington D.C.", d: 1 },
            { q: "Suffix for most adverbs?", a: ["-ed", "-ing", "-ly", "-s"], c: 2, e: "Slowly, happily.", d: 2 },
            { q: "Which verb for 'Present Perfect'?", a: ["Be", "Have", "Do", "Go"], c: 1, e: "I have eaten.", d: 2 },
            { q: "Synonym of 'Huge'?", a: ["Tiny", "Enormous", "Small", "Weak"], c: 1, e: "Very big.", d: 1 },
            { q: "Meaning of 'To achieve'?", a: ["Achever", "Réussir / Accomplir", "Acheter", "Arriver"], c: 1, e: "Reaching a goal.", d: 2 },
            { q: "When to use 'Since'?", a: ["Duration", "Starting point", "Future", "Never"], c: 1, e: "Since 2010.", d: 2 },
            { q: "When to use 'For'?", a: ["Starting point", "Duration", "Place", "Person"], c: 1, e: "For 5 years.", d: 2 },
            { q: "Opposite of 'Borrow'?", a: ["Take", "Lend", "Give", "Lose"], c: 1, e: "Borrow from, Lend to.", d: 3 },
            { q: "Currency in the USA?", a: ["Pound", "Euro", "Dollar", "Yen"], c: 2, e: "US Dollar.", d: 1 },
            { q: "Tag for 'You are tired, ...?'", a: ["are you", "aren't you", "don't you", "do you"], c: 1, e: "Question tags.", d: 3 },
            { q: "Past of 'Buy'?", a: ["Buyed", "Bought", "Brought", "Bin"], c: 1, e: "Bought (buy), Brought (bring).", d: 2 },
            { q: "Meaning of 'Overseas'?", a: ["Sous l'eau", "À l'étranger", "Près", "Dedans"], c: 1, e: "Across the sea.", d: 2 },
            { q: "Which is a superlative?", a: ["Bigger", "The biggest", "Big", "More big"], c: 1, e: "Comparing to all.", d: 2 },
            { q: "Commonwealth is an association of:", a: ["Cities", "Ex-British colonies", "American states", "Banks"], c: 1, e: "Shared history with UK.", d: 3 }
          ],
          flashcards: [
            { r: "Actually", v: "En fait" }, { r: "Eventually", v: "Finalement" }, { r: "To achieve", v: "Accomplir" },
            { r: "Since", v: "Depuis (date)" }, { r: "For", v: "Pendant (durée)" }, { r: "To borrow", v: "Emprunter" },
            { r: "To lend", v: "Prêter" }, { r: "Hardly", v: "Presque pas" }, { r: "Unless", v: "À moins que" }, { r: "Whether", v: "Si / Que ce soit" }
          ]
        }
      ]
    },
    espagnol: {
      chapters: [
        {
          id: 'esp-2de-basicos',
          title: 'Lengua y Cultura',
          qcm: [
            { q: "¿Cómo se dice 'Bonjour' por la tarde?", a: ["Buenos días", "Buenas tardes", "Buenas noches", "Hola"], c: 1, e: "Après 14h.", d: 1 },
            { q: "Verbo para una característica permanente:", a: ["Estar", "Ser", "Haber", "Tener"], c: 1, e: "Ser (Soy francés).", d: 2 },
            { q: "Verbo para un estado temporal:", a: ["Ser", "Estar", "Haber", "Tener"], c: 1, e: "Estar (Estoy cansado).", d: 2 },
            { q: "¿Capital de España?", a: ["Barcelona", "Madrid", "Sevilla", "Valencia"], c: 1, e: "Al centro.", d: 1 },
            { q: "Gerundio de 'Hablar':", a: ["Hablando", "Hablado", "Hablaré", "Hablaba"], c: 0, e: "-ando para -ar.", d: 2 },
            { q: "Gerundio de 'Comer':", a: ["Comendo", "Comiendo", "Comido", "Comerá"], c: 1, e: "-iendo para -er/-ir.", d: 2 },
            { q: "Significado de 'Todavía':", a: ["Tous", "Encore / Toujours", "Tout de suite", "Jamais"], c: 1, e: "Même sens que 'Aún'.", d: 2 },
            { q: "Significado de 'Luego':", a: ["Lieu", "Ensuite / Plus tard", "Lentement", "Ici"], c: 1, e: "Hasta luego!", d: 1 },
            { q: "¿Quién escribió Don Quijote?", a: ["Picasso", "Cervantes", "Dalí", "Lorca"], c: 1, e: "Miguel de Cervantes.", d: 1 },
            { q: "Diptongación de 'Querer' (Pres.):", a: ["Quero", "Quiero", "Queremos", "Queres"], c: 1, e: "e -> ie.", d: 2 },
            { q: "Diptongación de 'Poder' (Pres.):", a: ["Podo", "Puedo", "Podemos", "Podes"], c: 1, e: "o -> ue.", d: 2 },
            { q: "Falso amigo 'Embarazada':", a: ["Embarrassée", "Enceinte", "Fatiguée", "Triste"], c: 1, e: "Cuidado!", d: 3 },
            { q: "¿País de los Aztecas?", a: ["Perú", "México", "Chile", "España"], c: 1, e: "América Central.", d: 1 },
            { q: "Verbo para la edad:", a: ["Ser", "Estar", "Tener", "Hacer"], c: 2, e: "Tengo 15 años.", d: 1 },
            { q: "Significado de 'Mañana':", a: ["Maintenant", "Demain / Matin", "Hier", "Toujours"], c: 1, e: "Dépand du contexte.", d: 1 },
            { q: "Color de la bandera española:", a: ["Azul y rojo", "Rojo y amarillo", "Verde y blanco", "Negro"], c: 1, e: "La Rojigualda.", d: 1 },
            { q: "Plural de 'El pez':", a: ["Los pezs", "Los peces", "Los pezes", "Los pez"], c: 1, e: "z -> ces.", d: 2 },
            { q: "Pretérito de 'Ir' (Yo):", a: ["Fui", "Iba", "Fueron", "Voy"], c: 0, e: "Irregular.", d: 3 },
            { q: "Significado de 'Demasiado':", a: ["Assez", "Trop", "Un peu", "Rien"], c: 1, e: "Quantité excessive.", d: 2 },
            { q: "Museo famoso de Madrid:", a: ["Louvre", "Prado", "Guggenheim", "British"], c: 1, e: "El Museo del Prado.", d: 2 }
          ],
          flashcards: [
            { r: "Ser", v: "Caractère permanent" }, { r: "Estar", v: "État passager / Lieu" }, { r: "Todavía", v: "Encore" },
            { r: "Luego", v: "Ensuite" }, { r: "Embarazada", v: "Enceinte" }, { r: "Tener", v: "Avoir" },
            { r: "Pronto", v: "Bientôt" }, { r: "A lo mejor", v: "Peut-être" }, { r: "A menudo", v: "Souvent" }, { r: "Diptongo", v: "Modif voyelle (e->ie, o->ue)" }
          ]
        }
      ]
    },
    geo: {
      chapters: [
        {
          id: 'geo-2de-dev',
          title: 'Enjeux du développement',
          qcm: [
            { q: "Indicateur richesse pays ?", a: ["IDH", "PIB", "Taux natalité", "Chômage"], c: 1, e: "Produit Intérieur Brut.", d: 1 },
            { q: "Indicateur bien-être complet ?", a: ["PIB", "IDH", "Espérance vie", "Alphabétisation"], c: 1, e: "Indice Dével. Humain.", d: 2 },
            { q: "IDH maximum possible ?", a: ["100", "1", "10", "1000"], c: 1, e: "Entre 0 et 1.", d: 2 },
            { q: "Pays du 'Sud' désigne :", a: ["Hémisphère sud", "Pays en dével.", "Pays chauds", "Afrique"], c: 1, e: "Notion éco/sociale.", d: 2 },
            { q: "Transition démographique =", a: ["Déménagement", "Baisse natalité/mortalité", "Guerre", "Vieillissement"], c: 1, e: "Passage régime tradi -> moderne.", d: 3 },
            { q: "Seuil de pauvreté (mondial) ?", a: ["$10/j", "$2,15/j", "$100/j", "$1/j"], c: 1, e: "Fixé par Banque Mondiale.", d: 3 },
            { q: "Dével. Durable (piliers) ?", a: ["1", "2", "3", "4"], c: 2, e: "Éco, Social, Écolo.", d: 2 },
            { q: "Croissance démo actuelle ?", a: ["Baisse", "Ralentit mais continue", "Explose", "Stoppée"], c: 1, e: "Vers 10 milliards.", d: 2 },
            { q: "Alphabétisation =", a: ["Lire/Écrire", "Calculer", "Travailler", "Voter"], c: 0, e: "Base de l'IDH.", d: 1 },
            { q: "Pays émergent ?", a: ["Pauvre", "Croissance forte / BRICS", "Riche", "Isolé"], c: 1, e: "Ex: Inde, Brésil.", d: 2 },
            { q: "Urbanisation =", a: ["Vivre forêt", "Vivre ville", "Vivre mer", "Voyager"], c: 1, e: "Hausse pop urbaine.", d: 1 },
            { q: "Exode rural =", a: ["Ville vers campagne", "Campagne vers ville", "Tourisme", "Immigration"], c: 1, e: "Départ des paysans.", d: 1 },
            { q: "Mégalopole =", a: ["Petit village", "Grande région urbaine", "Immeuble", "Parc"], c: 1, e: "Ex: Nord-Est USA.", d: 2 },
            { q: "PMA =", a: ["Pays Moins Avancés", "Pays Multi-Actifs", "Petit Mode", "Prix"], c: 0, e: "Les plus pauvres.", d: 2 },
            { q: "Indice de Gini mesure :", a: ["Bonheur", "Inégalités revenus", "Pluie", "Population"], c: 1, e: "0=Égalité, 1=Inégalité max.", d: 3 },
            { q: "Sécurité alimentaire ?", a: ["Manger bio", "Accès nourriture suffisante", "Pas de poison", "Manger peu"], c: 1, e: "Enjeu majeur.", d: 2 },
            { q: "Stress hydrique ?", a: ["Trop d'eau", "Manque d'eau", "Eau sale", "Eau mer"], c: 1, e: "Rareté ressource eau.", d: 2 },
            { q: "Transition écolo ?", a: ["Plus de pétrole", "Énergies renouvelables", "Rien", "Plus d'autos"], c: 1, e: "Vers la durabilité.", d: 1 },
            { q: "Desserte =", a: ["Repas", "Moyens transport/com", "Forêt", "École"], c: 1, e: "Accessibilité.", d: 3 },
            { q: "Interface =", a: ["Écran", "Zone contact/échange", "Mur", "Porte"], c: 1, e: "Ex: Littoral.", d: 3 }
          ],
          flashcards: [
            { r: "PIB", v: "Richesse éco" }, { r: "IDH", v: "Santé, Éduc, Revenu" }, { r: "PMA", v: "Pays très pauvres" },
            { r: "Transition démo", v: "Baisse mortalité puis natalité" }, { r: "Dével. Durable", v: "Besoins actuels vs futurs" }, { r: "Émergent", v: "Développement rapide" },
            { r: "Gini", v: "Mesure inégalités" }, { r: "Bidonville", v: "Habitat précaire" }, { r: "Métropole", v: "Ville influence majeure" }, { r: "Littoralisation", v: "Concentration vers côtes" }
          ]
        }
      ]
    }
  },
  '3eme': {
    maths: {
      chapters: [
        {
          id: 'maths-3eme-geometrie',
          title: 'Pythagore et Thalès',
          qcm: [
            { q: "Condition pour Pythagore ?", a: ["Triangle isocèle", "Triangle rectangle", "Triangle équilatéral", "N'importe quel triangle"], c: 1, e: "Obligatoire !", d: 1 },
            { q: "Calculer l'hypoténuse si côtés = 3 et 4.", a: ["5", "7", "25", "12"], c: 0, e: "√(3²+4²) = √25 = 5.", d: 2 },
            { q: "Côté le plus long d'un triangle rectangle ?", a: ["Base", "Hauteur", "Hypoténuse", "Côté opposé"], c: 2, e: "Face à l'angle droit.", d: 1 },
            { q: "Réciproque de Pythagore sert à :", a: ["Calculer longueur", "Prouver qu'un triangle est rectangle", "Calculer aire", "Prouver parallélisme"], c: 1, e: "Vérifier l'angle droit.", d: 2 },
            { q: "Théorème de Thalès sert à :", a: ["Calculer angles", "Calculer longueurs (parallèles)", "Prouver perpendicularité", "Rien"], c: 1, e: "Configuration 'papillon' ou 'emboîté'.", d: 2 },
            { q: "Condition pour Thalès ?", a: ["Droites sécantes", "Droites parallèles", "Droites perpendiculaires", "Angles égaux"], c: 1, e: "Les bases doivent être parallèles.", d: 2 },
            { q: "Cosinus (angle) =", a: ["Opp / Hyp", "Adj / Hyp", "Opp / Adj", "Hyp / Adj"], c: 1, e: "CAH : Cos = Adj / Hyp.", d: 2 },
            { q: "Sinus (angle) =", a: ["Opp / Hyp", "Adj / Hyp", "Opp / Adj", "Hyp / Opp"], c: 0, e: "SOH : Sin = Opp / Hyp.", d: 2 },
            { q: "Tangente (angle) =", a: ["Opp / Hyp", "Adj / Hyp", "Opp / Adj", "Adj / Opp"], c: 2, e: "TOA : Tan = Opp / Adj.", d: 2 },
            { q: "Unité d'un angle ?", a: ["Mètre", "Degré", "Litre", "Seconde"], c: 1, e: "Ou Radian, mais en 3e c'est Degré.", d: 1 },
            { q: "Somme des angles d'un triangle ?", a: ["90°", "180°", "360°", "270°"], c: 1, e: "Toujours 180°.", d: 1 },
            { q: "Triangle rectangle : sin(30°) =", a: ["0,5", "1", "0", "0,86"], c: 0, e: "Valeur remarquable.", d: 3 },
            { q: "Triangle 3, 4, 5 est :", a: ["Rectangle", "Isocèle", "Équilatéral", "Plat"], c: 0, e: "3²+4²=5².", d: 1 },
            { q: "Sinus et Cosinus sont toujours :", a: ["> 1", "Entre -1 et 1", "< 0", "Entiers"], c: 1, e: "Rapport côté / hypoténuse.", d: 3 },
            { q: "Thalès : rapports sont ...", a: ["Égaux", "Différents", "Nuls", "Grands"], c: 0, e: "Proportionnalité.", d: 2 },
            { q: "Calculer côté adj si hyp=10 et cos=0.8", a: ["8", "12", "0.08", "2"], c: 0, e: "Adj = Hyp * Cos = 10 * 0.8 = 8.", d: 3 },
            { q: "Réciproque de Thalès prouve :", a: ["Égalité longueurs", "Parallélisme", "Rectangle", "Cercle"], c: 1, e: "Si rapports égaux -> //. ", d: 2 },
            { q: "Point sur médiatrice est ... des extrémités", a: ["Loin", "Équidistant", "Près", "Perpendiculaire"], c: 1, e: "Définition médiatrice.", d: 2 },
            { q: "Aire triangle rectangle", a: ["L*l", "b*h/2", "r²", "c³"], c: 1, e: "Base * Hauteur / 2.", d: 1 },
            { q: "Trigonométrie veut dire :", a: ["Mesure du cercle", "Mesure du triangle", "Calcul rapide", "Science des chiffres"], c: 1, e: "Grec : Trigono (triangle) + Metron.", d: 2 }
          ],
          flashcards: [
            { r: "Pythagore", v: "a² + b² = c²" }, { r: "SOH", v: "Sin = Opp / Hyp" }, { r: "CAH", v: "Cos = Adj / Hyp" },
            { r: "TOA", v: "Tan = Opp / Adj" }, { r: "Thalès", v: "AM/AB = AN/AC = MN/BC" }, { r: "Hypoténuse", v: "Côté face angle droit" },
            { r: "Somme angles", v: "180°" }, { r: "Réciproque Pyth", v: "Prouve angle droit" }, { r: "Réciproque Thalès", v: "Prouve parallèles" }, { r: "Cosinus 0°", v: "1" }
          ]
        }
      ]
    },
    'physique-chimie': {
      chapters: [
        {
          id: 'pc-3eme-atome',
          title: 'Atomes et Ions',
          qcm: [
            { q: "Charge d'un électron ?", a: ["Positive", "Négative", "Neutre", "Variable"], c: 1, e: "Charge -e.", d: 1 },
            { q: "Charge d'un noyau ?", a: ["Positive", "Négative", "Neutre", "Nulle"], c: 0, e: "Contient des protons (+).", d: 1 },
            { q: "Un atome est globalement :", a: ["Chargé +", "Chargé -", "Électriquement neutre", "Instable"], c: 2, e: "Protons = Électrons.", d: 1 },
            { q: "Un ion est :", a: ["Un atome neutre", "Un atome ayant gagné/perdu électrons", "Une molécule", "Un neutron"], c: 1, e: "Perte/gain de charge -.", d: 2 },
            { q: "Anion est chargé :", a: ["Positivement", "Négativement", "Pas chargé", "Très fort"], c: 1, e: "A gagné des électrons.", d: 2 },
            { q: "Cation est chargé :", a: ["Positivement", "Négativement", "Neutre", "Léger"], c: 0, e: "A perdu des électrons.", d: 2 },
            { q: "Ion Cl- a :", a: ["Perdu 1 e-", "Gagné 1 e-", "Perdu 1 proton", "Gagné 1 neutron"], c: 1, e: "Signe - = gain de charge -.", d: 2 },
            { q: "Solution conductrice contient :", a: ["Sucre", "Ions", "Air", "Sable"], c: 1, e: "Déplacement des charges.", d: 2 },
            { q: "Symbole du Fer ?", a: ["F", "Fe", "Fr", "Fi"], c: 1, e: "Ferrum.", d: 1 },
            { q: "Symbole du Cuivre ?", a: ["C", "Cu", "Cr", "Ci"], c: 1, e: "Cuprum.", d: 1 },
            { q: "Test pH < 7 :", a: ["Basique", "Acide", "Neutre", "Alcalin"], c: 1, e: "Beaucoup d'ions H+.", d: 1 },
            { q: "Ion H+ responsable de :", a: ["L'acidité", "La basicité", "La couleur", "L'odeur"], c: 0, e: "Plus il y en a, plus c'est acide.", d: 2 },
            { q: "Ion OH- responsable de :", a: ["L'acidité", "La basicité", "Le goût", "Le gaz"], c: 1, e: "Ion hydroxyde.", d: 2 },
            { q: "Précipité bleu avec soude :", a: ["Fer II", "Cuivre II", "Fer III", "Zinc"], c: 1, e: "Caractéristique Cu2+.", d: 3 },
            { q: "Précipité vert avec soude :", a: ["Fer II", "Fer III", "Cuivre", "Aluminium"], c: 0, e: "Caractéristique Fe2+.", d: 3 },
            { q: "Précipité rouille avec soude :", a: ["Fer II", "Fer III", "Cuivre", "Zinc"], c: 1, e: "Caractéristique Fe3+.", d: 3 },
            { q: "Nombre de protons = ?", a: ["A", "Z", "N", "M"], c: 1, e: "Numéro atomique.", d: 1 },
            { q: "Masse atome concentrée dans :", a: ["Électrons", "Noyau", "Vide", "Nuage"], c: 1, e: "Protons + Neutrons.", d: 2 },
            { q: "Atome hydrogène : Z=1. Nb électrons ?", a: ["0", "1", "2", "3"], c: 1, e: "Atome neutre -> 1 proton = 1 électron.", d: 1 },
            { q: "Taille atome vs Noyau ?", a: ["Pareil", "Atome 100 000x plus grand", "Noyau plus grand", "Atome 2x plus grand"], c: 1, e: "Structure lacunaire (beaucoup de vide).", d: 2 }
          ],
          flashcards: [
            { r: "Atome", v: "Noyau (+) + Électrons (-)" }, { r: "Ion", v: "Atome chargé (gain/perte e-)" }, { r: "Cation", v: "Charge + (perte e-)" },
            { r: "Anion", v: "Charge - (gain e-)" }, { r: "Z", v: "Nb de protons" }, { r: "Électron", v: "Charge négative" },
            { r: "Solution ionique", v: "Conductrice" }, { r: "pH acide", v: "H+ > OH-" }, { r: "pH basique", v: "OH- > H+" }, { r: "pH neutre", v: "pH = 7" }
          ]
        }
      ]
    }
  }
};
