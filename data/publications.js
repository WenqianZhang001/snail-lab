/* ============================================================================
   PUBLICATIONS

   Selected papers by Tara Boroushaki, mostly as first or second author,
   compiled on 2026-11-13 from her Google Scholar profile and her website
   (tara-boroushaki.com/publications), with titles, authors and DOIs checked
   against Crossref. Add new papers at the top of the array.

   Schema
   ------
   title    string   -- paper title
   authors  string[] -- names in order; names listed in SITE.labAuthors are bolded
   venue    string   -- short venue name shown in the list
   venueLong string  -- optional full venue name shown on hover
   year     number
   type     "conference" | "journal" | "workshop" | "preprint" | "thesis"
   topics   string[] -- optional labels, used if the page shows topic filters
   award    string   -- optional badge, e.g. "Best Paper Award"
   links    object   -- any of: paper, pdf, arxiv, doi, code, video, project, slides
   ========================================================================== */

window.PUBLICATIONS = [
  {
    title: "Non-Line-of-Sight 3D Object Reconstruction via mmWave Surface Normal Estimation",
    authors: ["Laura Dodds", "Tara Boroushaki", "Kaichen Zhou", "Fadel Adib"],
    venue: "ACM MobiSys",
    venueLong: "ACM International Conference on Mobile Systems, Applications, and Services",
    year: 2025,
    type: "conference",
    topics: ["RF Perception", "mmWave"],
    award: "Best Paper Finalist · Best Poster",
    links: {
      paper: "https://dl.acm.org/doi/10.1145/3711875.3729138",
      code: "https://github.com/signalkinetics/mmNorm",
    },
  },
  {
    title: "Ceilbot: A Ceiling-Mounted Robot for Fast and Accurate Localization of Off-the-Shelf RFIDs via Wideband SAR-Based Reinforcement Learning",
    authors: ["Weitung Chen", "Tara Boroushaki", "Isaac Perper", "John Carrick", "Fadel Adib"],
    venue: "IEEE Journal of RFID",
    venueLong: "IEEE Journal of Radio Frequency Identification, vol. 9",
    year: 2025,
    type: "journal",
    topics: ["RF Perception", "Robotics", "Learning"],
    links: { paper: "https://ieeexplore.ieee.org/abstract/document/11023525" },
  },
  {
    title: "MITO: A Millimeter-Wave Dataset and Simulator for Non-Line-of-Sight Perception",
    authors: ["Laura Dodds", "Tara Boroushaki", "Cusuh Ham", "Fadel Adib"],
    venue: "arXiv",
    venueLong: "arXiv preprint arXiv:2502.10259",
    year: 2025,
    type: "preprint",
    topics: ["RF Perception", "mmWave"],
    links: {
      arxiv: "https://arxiv.org/abs/2502.10259",
      code: "https://github.com/signalkinetics/MITO_Codebase",
      video: "https://www.youtube.com/watch?v=TyySRwsUpbY",
    },
  },
  {
    title: "SeaScan: An Energy-Efficient Underwater Camera for Wireless 3D Color Imaging",
    authors: ["Nazish Naeem", "Jack Rademacher", "Ritik Patnaik", "Tara Boroushaki", "Fadel Adib"],
    venue: "ACM MobiCom",
    venueLong: "ACM International Conference on Mobile Computing and Networking",
    year: 2024,
    type: "conference",
    topics: ["Wireless", "Imaging"],
    links: { paper: "https://dl.acm.org/doi/10.1145/3636534.3690661" },
  },
  {
    title: "Reinforcement Learning for RFID Localization",
    authors: ["Weitung Chen", "Tara Boroushaki", "Isaac Perper", "Fadel Adib"],
    venue: "IEEE RFID",
    venueLong: "IEEE International Conference on RFID",
    year: 2024,
    type: "conference",
    topics: ["RF Perception", "Learning"],
    links: { paper: "https://ieeexplore.ieee.org/abstract/document/10582639" },
  },
  {
    title: "Exploiting Synergies between Augmented Reality and RFIDs for Item Localization and Retrieval",
    authors: ["Tara Boroushaki", "Maisy Lam", "Weitung Chen", "Laura Dodds", "Aline Eid", "Fadel Adib"],
    venue: "IEEE RFID",
    venueLong: "IEEE International Conference on RFID",
    year: 2023,
    type: "conference",
    topics: ["RF Perception", "XR"],
    award: "Best Paper Award",
    links: {
      paper: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10178452",
      pdf: "http://www.mit.edu/~fadel/papers/RF_AR-paper.pdf",
    },
  },
  {
    title: "Augmenting Augmented Reality with Non-Line-of-Sight Perception",
    authors: ["Tara Boroushaki", "Maisy Lam", "Laura Dodds", "Aline Eid", "Fadel Adib"],
    venue: "USENIX NSDI",
    venueLong: "USENIX Symposium on Networked Systems Design and Implementation",
    year: 2023,
    type: "conference",
    topics: ["RF Perception", "XR"],
    links: {
      paper: "https://www.usenix.org/system/files/nsdi23-boroushaki.pdf",
      video: "https://www.youtube.com/watch?v=bdUN21ft7G0",
    },
  },
  {
    title: "FuseBot: mechanical search of rigid and deformable objects via multi-modal perception",
    authors: ["Tara Boroushaki", "Laura Dodds", "Nazish Naeem", "Fadel Adib"],
    venue: "Autonomous Robots",
    venueLong: "Autonomous Robots (Springer), vol. 47",
    year: 2023,
    type: "journal",
    topics: ["Robotics", "Sensor Fusion"],
    links: {
      paper: "https://link.springer.com/article/10.1007/s10514-023-10137-1",
      video: "https://www.youtube.com/watch?v=TFqz263uPN0",
    },
  },
  {
    title: "Demo: Real-time X-Ray Vision via Augmented Reality with RF Sensing",
    authors: ["Tara Boroushaki", "Maisy Lam", "Weitung Chen", "Laura Dodds", "Aline Eid", "Fadel Adib"],
    venue: "ACM SIGCOMM",
    venueLong: "Proceedings of the ACM SIGCOMM 2023 Conference (demo)",
    year: 2023,
    type: "conference",
    topics: ["RF Perception", "XR"],
    links: { paper: "https://dl.acm.org/doi/10.1145/3603269.3610838" },
  },
  {
    title: "FuseBot: RF-Visual Mechanical Search",
    authors: ["Tara Boroushaki", "Laura Dodds", "Nazish Naeem", "Fadel Adib"],
    venue: "RSS",
    venueLong: "Robotics: Science and Systems",
    year: 2022,
    type: "conference",
    topics: ["Robotics", "Sensor Fusion"],
    links: {
      paper: "https://www.roboticsproceedings.org/rss18/p067.pdf",
      video: "https://www.youtube.com/watch?v=TFqz263uPN0",
    },
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
    links: {
      paper: "https://dl.acm.org/doi/pdf/10.1145/3485730.3485944",
      video: "https://www.youtube.com/watch?v=iqehzw_aLc0",
    },
  },
  {
    title: "Robotic Grasping of Fully-Occluded Objects using RF Perception",
    authors: ["Tara Boroushaki", "Junshan Leng", "Ian Clester", "Alberto Rodriguez", "Fadel Adib"],
    venue: "IEEE ICRA",
    venueLong: "IEEE International Conference on Robotics and Automation",
    year: 2021,
    type: "conference",
    topics: ["Robotics", "RF Perception"],
    links: {
      paper: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9560956",
      project: "http://rfgrasp.media.mit.edu/",
      video: "https://www.youtube.com/watch?v=ZAzeYPcTM78",
    },
  },
];
