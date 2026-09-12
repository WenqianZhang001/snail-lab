/* ============================================================================
   CONTENT RENDERING
   Each renderer looks for a container id; if the page does not have it, the
   renderer is skipped. window.renderPage() is called by assets/js/site.js
   once the header and footer are in place.
   ========================================================================== */

(function () {
  "use strict";

  const S = window.SITE || {};
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const LINK_META = {
    paper: { label: "Paper", icon: "paper" },
    pdf: { label: "PDF", icon: "paper" },
    arxiv: { label: "arXiv", icon: "paper" },
    doi: { label: "DOI", icon: "external" },
    slides: { label: "Slides", icon: "paper" },
    code: { label: "Code", icon: "code" },
    video: { label: "Video", icon: "video" },
    project: { label: "Project", icon: "globe" },
  };

  function $(id) {
    return document.getElementById(id);
  }

  function icon(name) {
    return window.icon ? window.icon(name) : "";
  }

  function formatDate(iso) {
    const parts = String(iso).split("-");
    if (parts.length < 3) return iso;
    return MONTHS[Number(parts[1]) - 1] + " " + Number(parts[2]) + ", " + parts[0];
  }

  function linkRow(links) {
    if (!links) return "";
    const items = Object.keys(links)
      .filter(function (key) {
        return links[key] && LINK_META[key];
      })
      .map(function (key) {
        const meta = LINK_META[key];
        const external = links[key] !== "#" ? ' target="_blank" rel="noopener"' : "";
        return '<a href="' + links[key] + '"' + external + ">" + icon(meta.icon) + meta.label + "</a>";
      });
    return items.length ? '<div class="link-row">' + items.join("") + "</div>" : "";
  }

  function tagList(topics) {
    if (!topics || !topics.length) return "";
    return (
      '<div class="tag-list">' +
      topics
        .map(function (t) {
          return '<span class="tag">' + t + "</span>";
        })
        .join("") +
      "</div>"
    );
  }

  /* ---- Research --------------------------------------------------------- */

  function renderResearchCards(host) {
    host.innerHTML = (window.RESEARCH || [])
      .map(function (area) {
        return (
          '<a class="card card--link" href="research.html#' + area.id + '">' +
          '<span class="card-icon">' + icon(area.icon) + "</span>" +
          "<h3>" + area.title + "</h3>" +
          "<p>" + area.summary + "</p>" +
          "</a>"
        );
      })
      .join("");
  }

  function renderResearchBlocks(host) {
    host.innerHTML = (window.RESEARCH || [])
      .map(function (area) {
        return (
          '<section class="research-block" id="' + area.id + '">' +
          "<div>" +
          '<span class="card-icon">' + icon(area.icon) + "</span>" +
          "<h2>" + area.title + "</h2>" +
          '<p class="lead">' + area.summary + "</p>" +
          "</div>" +
          "<div><p>" + area.body + "</p>" +
          '<ul class="thread-list">' +
          (area.threads || [])
            .map(function (t) {
              return "<li>" + t + "</li>";
            })
            .join("") +
          "</ul></div></section>"
        );
      })
      .join("");
  }

  /* ---- Projects --------------------------------------------------------- */

  function projectCard(p) {
    return (
      '<article class="project-card">' +
      '<div class="project-media"><img src="' + p.image + '" alt="' + p.title + '" loading="lazy"></div>' +
      '<div class="project-body">' +
      "<h3>" + p.title + "</h3>" +
      '<div class="project-subtitle">' + p.subtitle + "</div>" +
      "<p>" + p.blurb + "</p>" +
      tagList(p.topics) +
      linkRow(p.links) +
      "</div></article>"
    );
  }

  function renderProjects(host, featuredOnly) {
    const list = (window.PROJECTS || []).filter(function (p) {
      return !featuredOnly || p.featured;
    });
    host.innerHTML = list.map(projectCard).join("");
  }

  /* ---- News ------------------------------------------------------------- */

  function newsItem(n) {
    const tag = n.tag ? '<span class="tag">' + n.tag + "</span>" : "";
    const link = n.link
      ? ' <a href="' + n.link.href + '">' + n.link.label + " &rarr;</a>"
      : "";
    return (
      '<li class="news-item">' +
      '<div class="news-date">' + formatDate(n.date) + "</div>" +
      "<div><h3>" + n.title + tag + "</h3>" +
      "<p>" + (n.body || "") + link + "</p></div></li>"
    );
  }

  function renderNews(host, limit) {
    const list = (window.NEWS || []).slice(0, limit || undefined);
    host.innerHTML = list.map(newsItem).join("");
  }

  /* ---- Publications ----------------------------------------------------- */

  function authorLine(authors) {
    const lab = S.labAuthors || [];
    return authors
      .map(function (a) {
        return lab.indexOf(a) !== -1 ? "<strong>" + a + "</strong>" : a;
      })
      .join(", ");
  }

  function pubEntry(p, index) {
    const award = p.award ? '<span class="tag badge-award">' + p.award + "</span>" : "";
    const venueTitle = p.venueLong ? ' title="' + p.venueLong + '"' : "";
    return (
      '<article class="pub">' +
      '<div class="pub-index">' + (index ? index + "." : "") + "</div>" +
      "<div>" +
      '<div class="pub-title">' + p.title + "</div>" +
      '<div class="pub-authors">' + authorLine(p.authors || []) + "</div>" +
      '<div class="pub-venue"><em' + venueTitle + ">" + p.venue + "</em><span>" + p.year + "</span>" + award + "</div>" +
      linkRow(p.links) +
      "</div></article>"
    );
  }

  function groupByYear(items) {
    const years = [];
    const map = {};
    items.forEach(function (p) {
      if (!map[p.year]) {
        map[p.year] = [];
        years.push(p.year);
      }
      map[p.year].push(p);
    });
    years.sort(function (a, b) {
      return b - a;
    });
    return { years: years, map: map };
  }

  function initPublications(host) {
    const all = (window.PUBLICATIONS || []).slice().sort(function (a, b) {
      return b.year - a.year;
    });
    const searchEl = $("pub-search");
    const filtersEl = $("pub-filters");
    const countEl = $("pub-count");

    let topic = "All";
    let query = "";

    if (filtersEl) {
      const topics = ["All"];
      all.forEach(function (p) {
        (p.topics || []).forEach(function (t) {
          if (topics.indexOf(t) === -1) topics.push(t);
        });
      });
      filtersEl.innerHTML = topics
        .map(function (t) {
          return (
            '<button class="chip" type="button" data-topic="' + t + '" aria-pressed="' +
            (t === "All") + '">' + t + "</button>"
          );
        })
        .join("");

      filtersEl.addEventListener("click", function (event) {
        const btn = event.target.closest(".chip");
        if (!btn) return;
        topic = btn.dataset.topic;
        Array.prototype.forEach.call(filtersEl.querySelectorAll(".chip"), function (c) {
          c.setAttribute("aria-pressed", String(c === btn));
        });
        draw();
      });
    }

    if (searchEl) {
      searchEl.addEventListener("input", function () {
        query = searchEl.value.trim().toLowerCase();
        draw();
      });
    }

    function matches(p) {
      if (topic !== "All" && (p.topics || []).indexOf(topic) === -1) return false;
      if (!query) return true;
      const haystack = [p.title, p.venue, p.venueLong, p.year, (p.authors || []).join(" ")]
        .join(" ")
        .toLowerCase();
      return haystack.indexOf(query) !== -1;
    }

    function draw() {
      const items = all.filter(matches);

      if (countEl) {
        countEl.textContent =
          items.length + (items.length === 1 ? " publication" : " publications");
      }

      if (!items.length) {
        host.innerHTML = '<p class="empty-state">No publications match that filter.</p>';
        return;
      }

      const grouped = groupByYear(items);
      let n = 0;
      host.innerHTML = grouped.years
        .map(function (year) {
          const entries = grouped.map[year]
            .map(function (p) {
              n += 1;
              return pubEntry(p, n);
            })
            .join("");
          return '<h2 class="year-head">' + year + "</h2>" + entries;
        })
        .join("");
    }

    draw();
  }

  function renderSelectedPublications(host, limit) {
    const list = (window.PUBLICATIONS || [])
      .slice()
      .sort(function (a, b) {
        return b.year - a.year;
      })
      .slice(0, limit || 4);
    host.innerHTML = list
      .map(function (p) {
        return pubEntry(p, 0);
      })
      .join("");
  }

  /* ---- People ----------------------------------------------------------- */

  function personLinks(person) {
    const out = [];
    if (person.email) out.push(['mailto:' + person.email, "Email", "mail"]);
    if (person.website) out.push([person.website, "Website", "globe"]);
    if (person.scholar) out.push([person.scholar, "Google Scholar", "scholar"]);
    if (person.github) out.push([person.github, "GitHub", "github"]);
    if (person.twitter) out.push([person.twitter, "X", "x"]);
    if (person.linkedin) out.push([person.linkedin, "LinkedIn", "linkedin"]);
    if (!out.length) return "";
    return (
      '<div class="person-links">' +
      out
        .map(function (l) {
          return '<a href="' + l[0] + '" title="' + l[1] + '" aria-label="' + l[1] + '">' + icon(l[2]) + "</a>";
        })
        .join("") +
      "</div>"
    );
  }

  function personCard(person) {
    return (
      '<div class="person">' +
      '<img class="person-photo" src="' + person.photo + '" alt="' + person.name + '" loading="lazy">' +
      "<h3>" + person.name + "</h3>" +
      '<div class="person-role">' + person.role + "</div>" +
      personLinks(person) +
      "</div>"
    );
  }

  function renderPeople() {
    const data = window.PEOPLE || { groups: [], members: [], alumni: [] };
    const piHost = $("people-pi");
    const groupsHost = $("people-groups");
    const alumniHost = $("alumni");

    if (piHost) {
      const pi = data.members.filter(function (m) {
        return m.group === "pi";
      });
      piHost.innerHTML = pi
        .map(function (p) {
          return (
            '<div class="card pi-card">' +
            '<img class="person-photo" src="' + p.photo + '" alt="' + p.name + '">' +
            "<div><h3>" + p.name + "</h3>" +
            '<div class="person-role">' + p.role + "</div>" +
            "<p>" + (p.bio || "") + "</p>" +
            tagList(p.interests) +
            personLinks(p) +
            "</div></div>"
          );
        })
        .join("");
    }

    if (groupsHost) {
      groupsHost.innerHTML = data.groups
        .filter(function (g) {
          return g.key !== "pi";
        })
        .map(function (g) {
          const members = data.members.filter(function (m) {
            return m.group === g.key;
          });
          if (!members.length) return "";
          return (
            '<section class="people-group">' +
            '<h2 class="group-title">' + g.title + "</h2>" +
            '<div class="grid grid-4">' + members.map(personCard).join("") + "</div>" +
            "</section>"
          );
        })
        .join("");
    }

    if (alumniHost) {
      const alumni = data.alumni || [];
      const section = alumniHost.closest("section");
      if (!alumni.length) {
        if (section) section.hidden = true;
        return;
      }
      alumniHost.innerHTML = alumni
        .map(function (a) {
          const name = a.website
            ? '<a href="' + a.website + '">' + a.name + "</a>"
            : a.name;
          return (
            "<li><strong>" + name + "</strong><span>" + (a.role || "") + "</span>" +
            (a.next ? '<span class="alumni-next">' + a.next + "</span>" : "") +
            "</li>"
          );
        })
        .join("");
    }
  }

  /* ---- Sponsors --------------------------------------------------------- */

  function renderSponsors(host) {
    host.innerHTML = (S.sponsors || [])
      .map(function (s) {
        const body = s.logo
          ? '<img src="' + s.logo + '" alt="' + s.name + '">'
          : s.short || s.name;
        return (
          '<a class="sponsor" href="' + s.href + '" title="' + s.name + '" rel="noopener" target="_blank">' +
          body + "</a>"
        );
      })
      .join("");
  }

  /* ---- Page boot -------------------------------------------------------- */

  window.renderPage = function () {
    const map = [
      ["research-cards", renderResearchCards],
      ["research-blocks", renderResearchBlocks],
      ["featured-projects", function (h) { renderProjects(h, true); }],
      ["all-projects", function (h) { renderProjects(h, false); }],
      ["recent-news", function (h) { renderNews(h, 4); }],
      ["news-list", function (h) { renderNews(h, 0); }],
      ["selected-publications", function (h) { renderSelectedPublications(h, 4); }],
      ["publications", initPublications],
      ["sponsors", renderSponsors],
    ];

    map.forEach(function (entry) {
      const host = $(entry[0]);
      if (host) entry[1](host);
    });

    if ($("people-pi") || $("people-groups")) renderPeople();

    /* Close the mobile menu when a hash link scrolls within the page. */
    const hash = window.location.hash;
    if (hash && document.querySelector(hash)) {
      window.setTimeout(function () {
        const target = document.querySelector(hash);
        if (target) target.scrollIntoView({ behavior: "auto", block: "start" });
      }, 0);
    }
  };
})();
