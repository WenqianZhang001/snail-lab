/* ============================================================================
   PROJECTS
   Featured projects appear on the home page; all of them appear on
   research.html. Replace the placeholder SVGs in assets/img/projects/ with
   real photos or figures (16:9 works best).
   ========================================================================== */

window.PROJECTS = [
  {
    id: "x-ar",
    title: "X-AR",
    subtitle: "Augmented reality with X-ray vision",
    blurb:
      "An augmented reality headset that extends human perception beyond line of sight, letting a wearer see and retrieve items hidden inside boxes, bins, and cluttered shelves.",
    image: "assets/img/projects/x-ar.svg",
    topics: ["RF Perception", "XR", "HCI"],
    year: 2023,
    featured: true,
    links: { project: "#", paper: "#", video: "#" },
  },
  {
    id: "fusebot",
    title: "FuseBot",
    subtitle: "RF-visual mechanical search",
    blurb:
      "A robotic system that reasons jointly over RF and visual evidence to decide which object to move next when the target is buried under a pile of rigid and deformable items.",
    image: "assets/img/projects/fusebot.svg",
    topics: ["Robotics", "Sensor Fusion"],
    year: 2022,
    featured: true,
    links: { project: "#", paper: "#", video: "#", code: "#" },
  },
  {
    id: "rfusion",
    title: "RFusion",
    subtitle: "Robotic grasping via RF-visual sensing and learning",
    blurb:
      "A robotic arm with an antenna at its fingertips that locates fully hidden objects and learns an efficient policy for extracting them — without a pre-built map of the pile.",
    image: "assets/img/projects/rfusion.svg",
    topics: ["Robotics", "RF Perception", "Learning"],
    year: 2021,
    featured: true,
    links: { project: "#", paper: "#", video: "#" },
  },
  {
    id: "rf-grasp",
    title: "RF-Grasp",
    subtitle: "Grasping what the camera cannot see",
    blurb:
      "Grasp planning for fully occluded objects, using RF measurements to seed and continuously refine a target pose estimate as the manipulator disturbs the scene.",
    image: "assets/img/projects/rf-grasp.svg",
    topics: ["Robotics", "RF Perception"],
    year: 2021,
    featured: false,
    links: { project: "#", paper: "#" },
  },
];
