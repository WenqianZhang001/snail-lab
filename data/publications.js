/* ============================================================================
   PUBLICATIONS

   NOTE: the entries below are seed data drawn from the PI's prior work so the
   template looks realistic. Verify every title, venue, year and author list
   against the official record before publishing the site.

   Schema
   ------
   title    string   -- paper title
   authors  string[] -- names in order; names listed in SITE.labAuthors are bolded
   venue    string   -- short venue name shown in the list
   venueLong string  -- optional full venue name shown on hover
   year     number
   type     "conference" | "journal" | "workshop" | "preprint" | "thesis"
   topics   string[] -- used by the filter chips
   award    string   -- optional badge, e.g. "Best Paper Award"
   links    object   -- any of: paper, pdf, arxiv, doi, code, video, project, slides
   ========================================================================== */

window.PUBLICATIONS = [
  {
    title: "Exploiting Synergies between Augmented Reality and RFIDs for Item Localization and Retrieval",
    authors: ["Tara Boroushaki", "Maisy Lam", "Weitung Chen", "Laura Dodds", "Aline Eid", "Fadel Adib"],
    venue: "IEEE RFID",
    venueLong: "IEEE International Conference on RFID",
    year: 2023,
    type: "conference",
    topics: ["RF Perception", "XR", "HCI"],
    award: "Best Paper Award",
    links: { paper: "#", video: "#" },
  },
  {
    title: "Augmenting Augmented Reality with Non-Line-of-Sight Perception",
    authors: ["Tara Boroushaki", "Maisy Lam", "Laura Dodds", "Aline Eid", "Fadel Adib"],
    venue: "USENIX NSDI",
    venueLong: "USENIX Symposium on Networked Systems Design and Implementation",
    year: 2023,
    type: "conference",
    topics: ["RF Perception", "XR", "Wireless"],
    links: { paper: "#", project: "#", video: "#" },
  },
  {
    title: "FuseBot: Mechanical Search of Rigid and Deformable Objects via Multi-Modal Perception",
    authors: ["Tara Boroushaki", "Laura Dodds", "Nazish Naeem", "Fadel Adib"],
    venue: "Autonomous Robots",
    venueLong: "Springer Autonomous Robots (journal extension of RSS 2022)",
    year: 2023,
    type: "journal",
    topics: ["Robotics", "Sensor Fusion"],
    links: { paper: "#", doi: "#" },
  },
  {
    title: "FuseBot: RF-Visual Mechanical Search",
    authors: ["Tara Boroushaki", "Laura Dodds", "Nazish Naeem", "Fadel Adib"],
    venue: "RSS",
    venueLong: "Robotics: Science and Systems",
    year: 2022,
    type: "conference",
    topics: ["Robotics", "Sensor Fusion"],
    links: { paper: "#", project: "#", video: "#", code: "#" },
  },
  {
    title: "RFusion: Robotic Grasping via RF-Visual Sensing and Learning",
    authors: ["Tara Boroushaki", "Isaac Perper", "Mergen Nachin", "Alberto Rodriguez", "Fadel Adib"],
    venue: "ACM SenSys",
    venueLong: "ACM Conference on Embedded Networked Sensor Systems",
    year: 2021,
    type: "conference",
    topics: ["Robotics", "RF Perception", "Learning"],
    award: "Best Paper Finalist",
    links: { paper: "#", project: "#", video: "#" },
  },
  {
    title: "Robotic Grasping of Fully-Occluded Objects using RF Perception",
    authors: ["Tara Boroushaki", "Junshan Leng", "Ian Clester", "Alberto Rodriguez", "Fadel Adib"],
    venue: "IEEE ICRA",
    venueLong: "IEEE International Conference on Robotics and Automation",
    year: 2021,
    type: "conference",
    topics: ["Robotics", "RF Perception"],
    links: { paper: "#", video: "#" },
  },
  {
    title: "A Template Entry — Replace Me With Your Next Paper",
    authors: ["xxx", "Tara Boroushaki"],
    venue: "arXiv",
    venueLong: "arXiv preprint",
    year: 2026,
    type: "preprint",
    topics: ["Wireless", "Learning"],
    links: { arxiv: "#", code: "#" },
  },
];
