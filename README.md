# BUZZ — Portfolio

Portfolio personnel de **Frédéric Makha Sar** (alias **BUZZ**), développeur Full-Stack.

### 🌐 Site en ligne : **[buzz30gotcho.github.io/buzz-portfolio](https://buzz30gotcho.github.io/buzz-portfolio/)**

---

## À propos

Un portfolio **100 % statique** (HTML5, CSS3, JavaScript vanilla) — aucun framework,
aucune étape de build, aucun back-end. Il présente qui je suis, mes projets et mes
compétences, avec une direction artistique inspirée de l'univers **manga** (thème
sombre et vert foncé, cases à bordures fines, trames *halftone*, titre en lettrage
brush) tout en restant sobre et professionnel.

## Fonctionnalités

- Navigation fixe et responsive (menu hamburger + scroll-spy)
- Sections **Accueil** (identité + projet à la une), **Projets**, **Compétences**, **Contact**
- Contenu piloté par les données : on ajoute un projet ou une compétence en éditant
  simplement les tableaux dans `docs/js/script.js`, sans toucher au HTML
- Cartes projet avec vraies captures d'écran (fallback motif si pas d'image)
- Bouton de téléchargement du CV (PDF)
- Animations discrètes au scroll, respectant `prefers-reduced-motion`
- HTML sémantique, navigation clavier, SEO / Open Graph + données structurées (JSON-LD)

## Stack

`HTML5` · `CSS3` · `JavaScript (vanilla)` — hébergé sur **GitHub Pages**.

## Structure

```text
.
├── docs/                 # le site (servi par GitHub Pages)
│   ├── index.html
│   ├── css/style.css
│   ├── js/script.js
│   ├── cv_sar_frederic.pdf
│   └── assets/           # images (captures, OG) + favicon
├── LICENSE
└── README.md
```

## Lancer en local

Aucun outil de build. Depuis le dossier `docs/` :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

Ou ouvrir directement `docs/index.html` dans le navigateur.

## Déploiement

Le site est déployé via **GitHub Pages** depuis le dossier `docs/` de la branche `main`
(*Settings → Pages → Deploy from a branch → `main` / `/docs`*).

## Contact

- **Email** : f.makha.sar@gmail.com
- **GitHub** : [@Buzz30Gotcho](https://github.com/Buzz30Gotcho)
- **LinkedIn** : [Frédéric Sar](https://www.linkedin.com/in/frederic-sar-a377061a3/)

## Licence

Distribué sous licence [MIT](LICENSE) — © 2026 Frédéric Makha Sar.
