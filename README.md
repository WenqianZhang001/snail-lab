# SNAIL Lab website

Static website for the **SNAIL Lab** (Sensing, Networking, and AI Lab),
Department of Electrical & Computer Engineering, Yale University.

Plain HTML, CSS, and JavaScript — **no build step, no dependencies, no framework**. All content
lives in small JavaScript data files under [`data/`](data/), so adding a paper, a person, or a news
item is a few lines of editing and a `git push`.

---

## Quick start

**Preview it locally.** Either double-click `index.html`, or serve the folder so paths behave
exactly as they will in production:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

**Publish it.** Push this folder to GitHub, then in **Settings → Pages** set the source to
**GitHub Actions**. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
publishes the site on every push to `main`.

> If you prefer not to use Actions, set **Settings → Pages → Source** to *Deploy from a branch*
> (`main` / `/root`) instead. The `.nojekyll` file is already in place so GitHub serves the files
> as-is rather than running Jekyll on them.

---

## Editing content

Every file in `data/` is plain JavaScript. Keep the commas and quotes where they are, and you can
copy an existing entry as a starting point.

| What you want to change | File |
| --- | --- |
| Lab name, tagline, address, email, nav links, sponsors | [`data/site.js`](data/site.js) |
| Research directions (the four themes) | [`data/research.js`](data/research.js) |
| Project cards | [`data/projects.js`](data/projects.js) |
| Publication list | [`data/publications.js`](data/publications.js) |
| Lab members and alumni | [`data/people.js`](data/people.js) |
| News items | [`data/news.js`](data/news.js) |

Longer prose — the homepage introduction, the *Join Us* page, the FAQ — lives directly in the
corresponding `.html` file.

### Add a publication

Add an entry to the top of the array in `data/publications.js`:

```js
{
  title: "Your Paper Title",
  authors: ["First Author", "Tara Boroushaki"],
  venue: "ACM MobiCom",
  venueLong: "ACM International Conference on Mobile Computing and Networking",
  year: 2026,
  type: "conference",           // conference | journal | workshop | preprint | thesis
  topics: ["RF Perception"],    // these become the filter chips
  award: "Best Paper Award",    // optional
  links: { paper: "...", code: "...", video: "..." },
},
```

Names listed in `SITE.labAuthors` (in `data/site.js`) are automatically bolded. Topics are collected
automatically — a new topic string becomes a new filter chip.

### Add a person

Add an entry to `members` in `data/people.js` and set `group` to one of the group keys defined at the
top of that file (`pi`, `phd`, `ms`, `undergrad`, `visitor`). Groups with no members are hidden
automatically, and the **Alumni** section disappears until you add someone to the `alumni` array.

Drop a square photo into `assets/img/people/` and point `photo` at it. 600×600 px or larger looks
best; the site crops it to a circle.

### Add a news item

Add an entry to the top of `data/news.js`. Dates must be `YYYY-MM-DD`. The homepage shows the four
most recent items; `news.html` shows all of them.

### Add a project

Add an entry to `data/projects.js`. Set `featured: true` to show it on the homepage — all projects
appear on the research page regardless. Project images are 16:9; replace the placeholder SVGs in
`assets/img/projects/` with real photos or figures.

---

## Customizing the design

Colors, fonts, spacing, and corner radii are CSS variables at the top of
[`assets/css/style.css`](assets/css/style.css). To change the accent color across the whole site,
edit `--accent` in the `:root` block (light theme) and in the two dark-theme blocks below it.

The site follows the visitor's system light/dark preference and has a manual toggle in the header;
the choice is remembered in `localStorage`.

The header and footer are generated once in [`assets/js/site.js`](assets/js/site.js) from the `nav`
array in `data/site.js`, so navigation only has to be edited in one place.

### Add a page

1. Copy `news.html` to `yourpage.html`.
2. Change `<title>`, the `<body data-page="...">` value, and the page content.
3. Add an entry to the `nav` array in `data/site.js` using the same `key` you put in `data-page`.

---

## Before launch

- [ ] **Verify every publication entry.** The seed entries in `data/publications.js` were drafted
      from public sources and must be checked against the official record.
- [ ] Replace the placeholder art in `assets/img/` — lab photo, member photos, project figures.
- [ ] Replace the `#` placeholders in project and publication `links`.
- [ ] Confirm sponsor logos are used with permission, then set `logo:` paths in `data/site.js`.

`url` in `data/site.js`, plus `sitemap.xml` and `robots.txt`, are set to `https://snail-yale.github.io`
— the address the site will have once the repo lives in the **SNAIL-Yale** organization and is named
`snail-yale.github.io`. While the repo is hosted anywhere else those three values are simply
inaccurate; they affect search indexing only, not rendering.

---

## Layout

```
.
├── index.html              Home
├── research.html           Research directions + all projects
├── publications.html       Searchable, filterable publication list
├── people.html             PI, students, alumni
├── news.html               News archive
├── join.html               Openings, FAQ, contact
├── 404.html
├── data/                   All editable content
├── assets/
│   ├── css/style.css       Design tokens + every style rule
│   ├── js/
│   │   ├── icons.js        Inline SVG icon set
│   │   ├── render.js       Turns data/ into page sections
│   │   └── site.js         Header, footer, theme toggle, mobile menu
│   └── img/                Logo, placeholder art, photos
└── .github/workflows/      GitHub Pages deployment
```

## Notes

- Every page uses relative asset paths, so the site works both at a domain root and at a project
  subpath such as `username.github.io/repo-name/`.
- Fonts (Inter, Source Serif 4) load from Google Fonts and fall back to system fonts offline.
- The site sets no cookies and loads no analytics or trackers.

## License

Code is released under the MIT License (see [LICENSE](LICENSE)). Lab content — text, photos,
figures, and publications — is not covered by that license and remains the property of its authors.
