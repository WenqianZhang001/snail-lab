/* ============================================================================
   PROJECTS
   Each project appears on research.html under the research direction named
   by `direction`, which must match an `id` in data/research.js. Within a
   direction, projects show in the order listed here. Replace the placeholder
   SVGs in assets/img/projects/ with real photos or figures (16:9 works best).
   ========================================================================== */

window.PROJECTS = [
  /* Radio Frequency Perception */
  {
    id: "mmnorm",
    direction: "rf-perception",
    title: "mmNorm",
    subtitle: "Non-line-of-sight 3D reconstruction with mmWave",
    blurb:
      "Reconstructs the 3D shape of objects hidden behind occlusions by estimating their surface normals from millimeter-wave signals.",
    image: "assets/img/projects/mmnorm.svg",
    topics: ["RF Perception", "mmWave"],
    year: 2025,
    links: {
      paper: "https://dl.acm.org/doi/10.1145/3711875.3729138",
      code: "https://github.com/signalkinetics/mmNorm",
      video: "https://www.youtube.com/watch?v=OQrsuXaoddY",
    },
  },
  {
    id: "x-ar",
    direction: "rf-perception",
    title: "X-AR",
    subtitle: "Augmented reality with X-ray vision",
    blurb:
      "An augmented reality headset that extends human perception beyond line of sight, letting a wearer see and retrieve items hidden inside boxes, bins, and cluttered shelves.",
    image: "assets/img/projects/x-ar.svg",
    topics: ["RF Perception", "XR", "HCI"],
    year: 2023,
    links: {
      paper: "https://www.usenix.org/system/files/nsdi23-boroushaki.pdf",
      video: "https://www.youtube.com/watch?v=bdUN21ft7G0",
    },
  },

  /* Multi-Modal Sensing & Fusion */
  {
    id: "mito",
    direction: "multimodal-sensing",
    title: "MITO",
    subtitle: "A millimeter-wave dataset and simulator",
    blurb:
      "Everyday objects captured by two mmWave radars and an RGB-D camera on a robot arm, in and out of line of sight, with an open-source simulator for synthetic mmWave images.",
    image: "assets/img/projects/mito.svg",
    topics: ["RF Perception", "Sensor Fusion", "Datasets"],
    year: 2025,
    links: {
      arxiv: "https://arxiv.org/abs/2502.10259",
      code: "https://github.com/signalkinetics/MITO_Codebase",
      video: "https://www.youtube.com/watch?v=TyySRwsUpbY",
    },
  },
  {
    id: "fusebot",
    direction: "multimodal-sensing",
    title: "FuseBot",
    subtitle: "RF-visual mechanical search",
    blurb:
      "A robotic system that reasons jointly over RF and visual evidence to decide which object to move next when the target is buried under a pile of rigid and deformable items.",
    image: "assets/img/projects/fusebot.svg",
    topics: ["Robotics", "Sensor Fusion"],
    year: 2022,
    links: {
      paper: "https://www.roboticsproceedings.org/rss18/p067.pdf",
      video: "https://www.youtube.com/watch?v=TFqz263uPN0",
    },
  },

  /* Robotics & Cyber-Physical Systems */
  {
    id: "ceilbot",
    direction: "robotics",
    title: "Ceilbot",
    subtitle: "A ceiling-mounted robot for RFID localization",
    blurb:
      "A ceiling-mounted robot that localizes off-the-shelf RFID tags quickly and accurately, combining wideband synthetic aperture radar with reinforcement learning.",
    image: "assets/img/projects/ceilbot.svg",
    topics: ["Robotics", "RF Perception", "Learning"],
    year: 2025,
    links: { paper: "https://ieeexplore.ieee.org/abstract/document/11023525" },
  },
  {
    id: "rfusion",
    direction: "robotics",
    title: "RFusion",
    subtitle: "Robotic grasping via RF-visual sensing and learning",
    blurb:
      "A robotic arm with an antenna at its fingertips that locates fully hidden objects and learns an efficient policy for extracting them — without a pre-built map of the pile.",
    image: "assets/img/projects/rfusion.svg",
    topics: ["Robotics", "RF Perception", "Learning"],
    year: 2021,
    links: {
      paper: "https://dl.acm.org/doi/pdf/10.1145/3485730.3485944",
      video: "https://www.youtube.com/watch?v=iqehzw_aLc0",
    },
  },
  {
    id: "rf-grasp",
    direction: "robotics",
    title: "RF-Grasp",
    subtitle: "Grasping what the camera cannot see",
    blurb:
      "Grasp planning for fully occluded objects, using RF measurements to seed and continuously refine a target pose estimate as the manipulator disturbs the scene.",
    image: "assets/img/projects/rf-grasp.svg",
    topics: ["Robotics", "RF Perception"],
    year: 2021,
    links: {
      project: "http://rfgrasp.media.mit.edu/",
      paper: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9560956",
      video: "https://www.youtube.com/watch?v=ZAzeYPcTM78",
    },
  },
];
