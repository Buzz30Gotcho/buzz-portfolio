# BUZZ — Portfolio

Portfolio personnel de **BUZZ**, développeur Full-Stack.
100 % statique — HTML5, CSS3 et JavaScript vanilla. Aucun framework, aucune étape de build, aucun back-end.

## Direction artistique

Identité **manga moderne et subtile** — les codes graphiques de la planche manga
(sans aucun personnage anime) au service d'un portfolio de développeur :

- Thème sombre + vert foncé (sans néon), sobre et minimaliste
- Cadres inspirés des *cases* (bordures fines + repères d'angle en coin)
- Trames *halftone*, fines lignes d'encre et texture de fond discrète
- Titre **BUZZ** en lettrage brush (trait d'encre animé) qui reste lisible
- Numérotation des sections et petites annotations graphiques
- Hero « première page de manga » : identité à gauche, **projet à la une** à
  droite (deux cases côte à côte), pour montrer d'emblée qui tu es *et* ton travail
- Transitions visuelles entre les sections (rule pointillé + losange)

## Caractéristiques

- Barre de navigation fixe et responsive avec menu hamburger et scroll-spy
- Sections Accueil (identité + projet phare), Projets, Compétences et Contact
  (la présentation « À propos » est fusionnée dans le hero)
- Animations discrètes (apparition au scroll, survol) respectant `prefers-reduced-motion`
- Contenu piloté par les données (Compétences / Projets dans le JS, sans toucher au HTML)
- HTML sémantique, navigation clavier, textes alternatifs et balises SEO / Open Graph

## Structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/     images de projets & OG (.svg)
│   └── icons/      favicon.svg
└── README.md
```

## Lancer en local

Aucun outil de build requis. Ouvrez `index.html` directement, ou servez-le :

```bash
python3 -m http.server 8000
# puis ouvrez http://localhost:8000
```

## Personnaliser le contenu

- **Informations personnelles** : remplacez les placeholders `[À COMPLÉTER]`,
  `[EMAIL]`, `[GITHUB_URL]`, `[LINKEDIN_URL]`, `[SITE_URL]` et similaires dans
  `index.html`.
- **Compétences, Projets** : modifiez les tableaux `SKILLS` et `PROJECTS` en
  haut de `js/script.js`. Pour masquer le bouton « Voir le projet » d'un projet,
  mettez son champ `demo` à `null`. Le **premier** projet du tableau `PROJECTS`
  est mis en avant « à la une » dans le hero ; la section Projets liste
  **tous** les projets (le projet phare compris). Ajoutez un champ
  `context` (ex. `"Projet d'école · ..."`) pour afficher un libellé de contexte
  sur la case.
- **Images de projets** : déposez vos images dans `assets/images/` et mettez à
  jour les chemins `image` dans `js/script.js`.

## Contact

Le site n'a pas de back-end : la section Contact affiche simplement vos moyens
de contact (email, GitHub, LinkedIn). Remplacez les placeholders `[EMAIL]`,
`[GITHUB_URL]` et `[LINKEDIN_URL]` par vos vraies coordonnées.

## Déployer sur GitHub Pages

1. Poussez ce dossier sur un dépôt GitHub.
2. Dans **Settings → Pages**, définissez la source (racine, ou le dossier
   `portfolio/` s'il est committé en sous-répertoire).
3. Le site est publié sur `https://<utilisateur>.github.io/<repo>/`.

## Licence

Projet personnel — libre de le personnaliser.
