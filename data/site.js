/* ============================================================================
   SITE CONFIGURATION
   Edit this file to change the lab name, contact details, navigation and
   footer. Everything here is plain JavaScript -- no build step required.
   ========================================================================== */

window.SITE = {
  shortName: "SNAIL Lab",

  fullName: "Sensing, Networking, and AI Lab",

  tagline:
    "Sensing and mobile technologies for wireless networking, cyber-physical systems, and human-computer interaction.",

  description:
    "We develop algorithms and build systems for multi-modal sensing to connect, perceive, and interact with the environment in novel ways — enabling more efficient, more robust, and more capable mobile, cyber-physical, and cyber-human systems.",

  institution: "Department of Electrical &amp; Computer Engineering",
  university: "Yale University",

  // Used for absolute URLs in sitemap.xml and social preview cards.
  url: "https://snail-yale.github.io",

  email: "tara.boroushaki@yale.edu",

  address: [
    "Becton Center, Room 315",
    "15 Prospect Street",
    "New Haven, CT 06511",
  ],

  // Author names matched here are bolded automatically in publication lists.
  labAuthors: ["Tara Boroushaki", "Wenqian Zhang", "Jiacheng Cheng", "Shuyan Huang", "Tejas Bharadwaj", "Luke Huh", "Justin Chen", "Aliaa Mahgoub", "Ethan Reynolds"],

  nav: [
    { key: "home", label: "Home", href: "index.html" },
    { key: "research", label: "Research", href: "research.html" },
    { key: "publications", label: "Publications", href: "publications.html" },
    { key: "people", label: "People", href: "people.html" },
    { key: "news", label: "News", href: "news.html" },
    { key: "join", label: "Join Us", href: "join.html" },
  ],

  social: [
    { key: "scholar", label: "Google Scholar", href: "https://scholar.google.com/citations?user=cHbx6vAAAAAJ" },
    //{ key: "github", label: "GitHub", href: "https://github.com/" },
    { key: "x", label: "X", href: "https://x.com/Tara_Boroushaki" },
    { key: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
  ],

  // Set `logo` to an image path once you have permission to use the real mark.
  sponsors: [
    { name: "National Science Foundation", short: "NSF", href: "https://www.nsf.gov/" },
    { name: "Yale University", short: "Yale", href: "https://www.yale.edu/" },
    { name: "Yale SEAS", short: "SEAS", href: "https://seas.yale.edu/" },
    { name: "Your sponsor here", short: "Sponsor", href: "#" },
  ],
};
