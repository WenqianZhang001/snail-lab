/* ============================================================================
   SHARED SITE CHROME
   Builds the header and footer from data/site.js so navigation lives in one
   place, and handles the theme toggle and the mobile menu.
   ========================================================================== */

(function () {
  "use strict";

  const S = window.SITE || {};
  const ICONS = window.ICONS || {};
  const THEME_KEY = "snail-theme";

  function icon(name) {
    return ICONS[name] || "";
  }

  window.icon = icon;

  /* ---- Theme ------------------------------------------------------------ */

  function systemTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function activeTheme() {
    return document.documentElement.getAttribute("data-theme") || systemTheme();
  }

  function toggleTheme() {
    const next = activeTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch (e) {
      /* private browsing or blocked storage — the toggle still works for this page */
    }
  }

  /* ---- Header ----------------------------------------------------------- */

  function buildHeader(host) {
    const page = document.body.dataset.page;

    const links = (S.nav || [])
      .map(function (item) {
        const current = item.key === page ? ' aria-current="page"' : "";
        return '<li><a href="' + item.href + '"' + current + ">" + item.label + "</a></li>";
      })
      .join("");

    host.className = "site-header";
    host.innerHTML =
      '<a class="skip-link" href="#main">Skip to content</a>' +
      '<div class="container">' +
      '<nav class="nav" aria-label="Main">' +
      '<a class="brand" href="index.html">' +
      '<span class="brand-mark">' + icon("brand") + "</span>" +
      '<span class="brand-text">' +
      '<span class="brand-name">' + (S.shortName || "Lab") + "</span>" +
      '<span class="brand-sub">' + (S.university || "") + "</span>" +
      "</span></a>" +
      '<div class="nav-right">' +
      '<ul class="nav-links" id="nav-links">' + links + "</ul>" +
      '<button class="icon-btn theme-toggle" id="theme-toggle" type="button" aria-label="Toggle dark mode">' +
      '<span class="icon-sun">' + icon("sun") + "</span>" +
      '<span class="icon-moon">' + icon("moon") + "</span>" +
      "</button>" +
      '<button class="icon-btn nav-toggle" id="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">' +
      icon("menu") +
      "</button>" +
      "</div></nav></div>";

    host.querySelector("#theme-toggle").addEventListener("click", toggleTheme);

    const navToggle = host.querySelector("#nav-toggle");
    const navLinks = host.querySelector("#nav-links");

    navToggle.addEventListener("click", function () {
      const open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      navToggle.innerHTML = open ? icon("close") : icon("menu");
    });
  }

  /* ---- Footer ----------------------------------------------------------- */

  function buildFooter(host) {
    const links = (S.nav || [])
      .map(function (item) {
        return '<li><a href="' + item.href + '">' + item.label + "</a></li>";
      })
      .join("");

    const social = (S.social || [])
      .filter(function (s) {
        return s.href && s.href !== "#";
      })
      .map(function (s) {
        return (
          '<a href="' + s.href + '" title="' + s.label + '" aria-label="' + s.label +
          '" rel="noopener" target="_blank">' + icon(s.key) + "</a>"
        );
      })
      .join("");

    const address = (S.address || [])
      .map(function (line) {
        return line + "<br>";
      })
      .join("");

    host.className = "site-footer";
    host.innerHTML =
      '<div class="container">' +
      '<div class="footer-grid">' +
      "<div>" +
      '<div class="footer-brand"><span class="brand-mark">' + icon("brand") + "</span>" +
      (S.shortName || "Lab") + "</div>" +
      "<p>" + (S.fullName || "") + "<br>" + (S.institution || "") + ", " + (S.university || "") + "</p>" +
      '<div class="footer-social">' + social + "</div>" +
      "</div>" +
      "<div><h4>Navigate</h4><ul class=\"footer-links\">" + links + "</ul></div>" +
      "<div><h4>Contact</h4><address class=\"footer-address\">" +
      address +
      '<a href="mailto:' + (S.email || "") + '">' + (S.email || "") + "</a>" +
      "</address></div>" +
      "</div>" +
      '<div class="footer-bottom">' +
      "<span>&copy; " + new Date().getFullYear() + " " + (S.shortName || "Lab") + ". All rights reserved.</span>" +
      "<span>Static site — no trackers, no cookies.</span>" +
      "</div></div>";
  }

  /* ---- Boot ------------------------------------------------------------- */

  function init() {
    const header = document.getElementById("site-header");
    const footer = document.getElementById("site-footer");
    if (header) buildHeader(header);
    if (footer) buildFooter(footer);
    if (typeof window.renderPage === "function") window.renderPage();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
