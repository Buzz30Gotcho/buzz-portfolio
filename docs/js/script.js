/* ============================================================
   BUZZ — Portfolio interactions & content
   Vanilla JS, no dependencies.
   ============================================================ */

"use strict";

/* ------------------------------------------------------------
   1. DATA
   Edit these arrays to add / remove content. No HTML needed.
   ------------------------------------------------------------ */

const SKILLS = [
  {
    title: "Frontend",
    icon: "layout",
    items: ["JavaScript", "TypeScript", "React", "Vue.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "server",
    items: ["Node.js", "Python", "Java", "PHP"],
  },
  {
    title: "Base de données",
    icon: "database",
    items: ["PostgreSQL", "Supabase"],
  },
  {
    title: "Outils / DevOps",
    icon: "tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

/* Pour ajouter un projet, copiez un objet et modifiez les champs.
   Mettez `demo` à null (ou supprimez-le) pour masquer le bouton Démo. */
const PROJECTS = [
  {
    name: "SAJA — Livraison de luxe",
    context: "Projet d'école · Ynov Ydays 2025",
    description:
      "Projet réalisé dans le cadre de ma formation (Ynov, Ydays 2025). Plateforme e-commerce et conciergerie de livraison haut de gamme : boutique client avec suivi de commande en temps réel, et tableau de bord coursier (missions, position GPS, statistiques).",
    tags: ["React", "Node.js", "Express", "Supabase"],
    image: "assets/images/saja.png",
    github: "https://github.com/Buzz30Gotcho/Ynov_Ydays_2025_e_commerce",
    demo: null,
  },
  {
    name: "CENTRAL CINEMA — Réservation de billets",
    context: "Architecture microservices",
    description:
      "Application web de réservation de billets de cinéma bâtie en architecture microservices : un frontend Vue.js dialogue avec une API Gateway qui orchestre trois services indépendants (authentification JWT en Flask, catalogue de films en PHP, séances en Node.js), chacun avec sa propre base PostgreSQL, le tout conteneurisé avec Docker.",
    tags: ["Vue.js", "Microservices", "Node.js", "Docker", "PostgreSQL"],
    image: "assets/images/central-cinema.png",
    github: "https://github.com/Buzz30Gotcho/micro_service_cinema_ynov",
    demo: null,
  },
];

/* Passions / centres d'intérêt affichés dans le hero.
   Modifiez librement label + icon (voir la liste ICONS plus bas). */
const PASSIONS = [
  { icon: "manga", label: "Manga & culture jap." },
  { icon: "game", label: "Jeux vidéo" },
  { icon: "design", label: "Design & UI" },
  { icon: "tech", label: "Nouvelles technos" },
];

/* Inline SVG icons (stroke-based, no neon) — catégories & passions. */
const ICONS = {
  layout:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
  server:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',
  database:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg>',
  tools:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2 2.3-2.3z"/></svg>',
  manga:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6.5C10.5 5 8 4.5 4 4.5V19c4 0 6.5.5 8 2 1.5-1.5 4-2 8-2V4.5c-4 0-6.5.5-8 2z"/><path d="M12 6.5V21"/></svg>',
  game:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="7" width="20" height="10" rx="5"/><path d="M7 12h3M8.5 10.5v3"/><path d="M15.5 11h.01M18 13.5h.01"/></svg>',
  design:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19l7-7-4-4-7 7v4z"/><path d="M15 8l1.5-1.5a2 2 0 0 0-3-3L12 5"/><path d="M4 20h6"/></svg>',
  tech:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/></svg>',
  music:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V6l11-2v12"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/></svg>',
  film:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/></svg>',
  sport:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18M3 12h18M5 6c3 2 11 2 14 0M5 18c3-2 11-2 14 0"/></svg>',
};

/* ------------------------------------------------------------
   2. RENDERING
   ------------------------------------------------------------ */

const escapeHtml = (str) =>
  String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));

/* Corner ticks shared by manga-style panels. */
const CORNERS =
  '<span class="corner corner--tl" aria-hidden="true"></span>' +
  '<span class="corner corner--tr" aria-hidden="true"></span>' +
  '<span class="corner corner--bl" aria-hidden="true"></span>' +
  '<span class="corner corner--br" aria-hidden="true"></span>';

const pad2 = (n) => String(n + 1).padStart(2, "0");

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = SKILLS.map(
    (cat, i) => `
    <article class="skill-cat panel reveal">
      ${CORNERS}
      <span class="skill-cat__no" aria-hidden="true">${pad2(i)}</span>
      <div class="skill-cat__head">
        <span class="skill-cat__icon">${ICONS[cat.icon] || ""}</span>
        <h3 class="skill-cat__title">${escapeHtml(cat.title)}</h3>
      </div>
      <div class="skill-tags">
        ${cat.items
          .map((s) => `<span class="skill-tag">${escapeHtml(s)}</span>`)
          .join("")}
      </div>
    </article>`
  ).join("");
}

const githubIcon =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.74 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.8 1.08.8 2.18v3.23c0 .31.2.66.79.55A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z"/></svg>';

const externalIcon =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h7v7h-2V6.4l-8.3 8.3-1.4-1.4L17.6 5H14V3zM5 5h5v2H7v10h10v-3h2v5H5V5z"/></svg>';

/* Build one project "case". `i` is the original index (drives numbering).
   `flag` shows the "À LA UNE" ribbon (used for the hero highlight). */
function projectCard(p, i, flag) {
  const tags = p.tags
    .map((t) => `<span class="project__tag">${escapeHtml(t)}</span>`)
    .join("");

  const demoBtn = p.demo
    ? `<a class="project__link project__link--primary" href="${escapeHtml(
        p.demo
      )}" target="_blank" rel="noopener noreferrer">${externalIcon} Voir le projet</a>`
    : "";

  const ribbon = flag
    ? '<span class="project__flag" aria-hidden="true">À LA UNE</span>'
    : "";

  // Si le projet a une image, on l'affiche ; sinon on retombe sur le motif.
  const visual = p.image
    ? `<img class="project__img" src="${escapeHtml(
        p.image
      )}" alt="Aperçu du projet ${escapeHtml(
        p.name
      )}" loading="lazy" width="640" height="360" />`
    : '<div class="project__motif" aria-hidden="true"></div>';

  return `
    <article class="project panel reveal">
      ${CORNERS}
      <div class="project__media">
        ${ribbon}
        <span class="project__no" aria-hidden="true">N°${pad2(i)}</span>
        ${visual}
      </div>
      <div class="project__body">
        <span class="project__kicker">${
          p.context ? escapeHtml(p.context) : "Projet " + pad2(i)
        }</span>
        <h3 class="project__title">${escapeHtml(p.name)}</h3>
        <p class="project__desc">${escapeHtml(p.description)}</p>
        <div class="project__tags">${tags}</div>
        <div class="project__actions">
          <a class="project__link" href="${escapeHtml(
            p.github
          )}" target="_blank" rel="noopener noreferrer">${githubIcon} GitHub</a>
          ${demoBtn}
        </div>
      </div>
    </article>`;
}

/* Hero side panel = passions / centres d'intérêt. */
function renderPassions() {
  const grid = document.getElementById("passions-grid");
  if (!grid) return;

  grid.innerHTML = PASSIONS.map(
    (p) => `
    <span class="passion">
      <span class="passion__icon">${ICONS[p.icon] || ""}</span>
      <span class="passion__label">${escapeHtml(p.label)}</span>
    </span>`
  ).join("");
}

/* Section = all projects (the hero just highlights the first one too). */
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  if (!PROJECTS.length) {
    const section = document.getElementById("projects");
    if (section) section.hidden = true;
    return;
  }

  grid.innerHTML = PROJECTS
    .map((p, i) => projectCard(p, i, false))
    .join("");
}

/* ------------------------------------------------------------
   3. NAVBAR
   ------------------------------------------------------------ */

function initNav() {
  const nav = document.getElementById("nav");
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  const links = menu ? menu.querySelectorAll(".nav__link") : [];

  // shadow / background on scroll
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // mobile hamburger
  const closeMenu = () => {
    menu.classList.remove("is-open");
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Ouvrir le menu");
  };
  const openMenu = () => {
    menu.classList.add("is-open");
    toggle.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fermer le menu");
  };

  toggle.addEventListener("click", () =>
    menu.classList.contains("is-open") ? closeMenu() : openMenu()
  );

  links.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // active link on scroll (scroll spy)
  const sections = [...links]
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((l) =>
          l.classList.toggle("is-active", l.getAttribute("href") === `#${id}`)
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

/* ------------------------------------------------------------
   4. SCROLL REVEAL
   Re-run after dynamic content is injected.
   ------------------------------------------------------------ */

function initReveal() {
  const items = document.querySelectorAll(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window) || items.length === 0) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => observer.observe(el));
}

/* ------------------------------------------------------------
   5. INIT
   ------------------------------------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderPassions();
  renderProjects();
  initNav();
  initReveal(); // après le contenu dynamique pour observer les .reveal injectés

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
