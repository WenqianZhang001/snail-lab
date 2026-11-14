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
| Lab name, tagline, address, email, nav links | [`data/site.js`](data/site.js) |
| Research directions (the four themes) | [`data/research.js`](data/research.js) |
| Project cards | [`data/projects.js`](data/projects.js) |
| Publication list | [`data/publications.js`](data/publications.js) |
| Lab members and alumni | [`data/people.js`](data/people.js) |
| News items | [`data/news.js`](data/news.js) |

Longer prose — the homepage introduction and the *Join Us* page — lives directly in the
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
  topics: ["RF Perception"],    // optional labels
  award: "Best Paper Award",    // optional
  links: { paper: "...", code: "...", video: "..." },
},
```

Names listed in `SITE.labAuthors` (in `data/site.js`) are automatically bolded. The page lists papers
newest year first; it has no search box or topic filter, so `topics` is optional.

### Add a person

Add an entry to `members` in `data/people.js` and set `group` to one of the group keys defined at the
top of that file (`pi`, `phd`, `ms`, `undergrad`, `visitor`). Groups with no members are hidden
automatically, and the **Alumni** section disappears until you add someone to the `alumni` array.
An optional `note` shows as a small line under the role, e.g.
`note: "Advised by Prof. Leandros Tassiulas"`.

Drop a square photo into `assets/img/people/` and point `photo` at it. 600×600 px or larger looks
best; the site crops it to a circle.

### Add a news item

Add an entry to the top of `data/news.js`. Dates must be `YYYY-MM-DD`. News appears only on the
homepage, which lists every item in the file — there is no separate archive, so delete old entries
when the list grows too long.

### Add a project

Add an entry to `data/projects.js` and set `direction` to the `id` of a research direction in
`data/research.js` (`rf-perception`, `multimodal-sensing`, `robotics`, or `hri`); the project then
appears under that direction on the research page. Project images are 16:9; replace the placeholder
SVGs in `assets/img/projects/` with real photos or figures.

---

## Customizing the design

Colors, fonts, spacing, and corner radii are CSS variables at the top of
[`assets/css/style.css`](assets/css/style.css). The five palette colors — `--mint`, `--pistachio`,
`--butter`, `--coral`, and `--lilac` — drive every pastel on the site (the hero, the spectrum rules
under the header and above the footer, research cards, buttons, and the call-to-action band), so
changing one there changes it everywhere. Text and link colors (`--text`, `--muted`, `--accent`) are
darker shades chosen to stay readable on the pastels. The site uses this single light color scheme.

The header and footer are generated once in [`assets/js/site.js`](assets/js/site.js) from the `nav`
array in `data/site.js`, so navigation only has to be edited in one place.

### Add a page

1. Copy `people.html` to `yourpage.html`.
2. Change `<title>`, the `<body data-page="...">` value, and replace the sections inside `<main>`.
3. Add an entry to the `nav` array in `data/site.js` using the same `key` you put in `data-page`.

---

## Before launch

- [ ] **Have the PI check the publication list.** `data/publications.js` was compiled from her Google
      Scholar profile and website (mostly papers where she is first or second author).
- [ ] Replace the placeholder art in `assets/img/` — lab photo, member photos, project figures.
- [ ] `data/site.js` also keeps a `sponsors` list that no page shows at the moment. To display it, add
      `<div class="sponsor-row" id="sponsors"></div>` to a page, and confirm any logos are used with
      permission.

`url` in `data/site.js`, plus `sitemap.xml` and `robots.txt`, are set to `https://snail-yale.github.io`,
where the site is published from the **SNAIL-Yale/snail-yale.github.io** repository.

---

## Layout

```
.
├── index.html              Home
├── research.html           Research directions, each with its projects
├── publications.html       Publication list
├── people.html             PI, students, alumni
├── join.html               Openings, contact
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
