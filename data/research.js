/* ============================================================================
   RESEARCH DIRECTIONS
   Rendered on index.html (summary cards) and research.html (full sections).
   `icon` refers to a key in assets/js/icons.js. An optional `threads` list of
   short strings shows as bullet points under the description on research.html.
   ========================================================================== */

window.RESEARCH = [
  {
    id: "rf-perception",
    icon: "waves",
    title: "Radio Frequency Perception",
    summary:
      "Seeing through walls, boxes, and clutter by turning ordinary wireless signals into a perception modality for machines.",
    body:
      "Cameras and LiDAR stop at the first opaque surface. Radio frequency signals do not — they traverse occlusions, reflect off hidden items, and carry identity when paired with battery-free tags. We build the localization, imaging, and inference algorithms that make RF a first-class sensing modality.",
  },
  {
    id: "multimodal-sensing",
    icon: "layers",
    title: "Multi-Modal Sensing &amp; Fusion",
    summary:
      "Fusing RF, vision, depth, and touch so that each modality covers the blind spots of the others.",
    body:
      "No single sensor is sufficient in the real world. Vision is precise but blocked; RF penetrates but is coarse; touch is certain but slow. We study how to combine heterogeneous, asynchronous, and noisy modalities into a single belief about the world — and how to decide, at runtime, which sensor is worth listening to next.",
  },
  {
    id: "robotics",
    icon: "robot",
    title: "Robotics &amp; Cyber-Physical Systems",
    summary:
      "Robots that can find, reach, and manipulate objects they cannot see, in the cluttered spaces where people actually live and work.",
    body:
      "We close the loop from perception to action. By giving manipulators a sense that extends past the surface of a pile, we enable mechanical search, retrieval, and inventory tasks that were previously out of reach — in warehouses, retail floors, hospitals, and homes. Our systems are evaluated on real hardware, in real clutter, not only in simulation.",
  },
  {
    id: "hri",
    icon: "hri",
    title: "Human-Robot Interaction",
    summary:
      "Robot arms and ground robots, like robot dogs, that use wireless sensing to understand, assist, and work alongside people.",
    body:
      "Robots increasingly share space with people. We build systems in which people work with robot arms and ground robots, such as robot dogs, and we pair those robots with wireless sensing so they can perceive the people and objects around them, even when cameras are blocked. The goal is robots that help people directly — fetching, handing over, and guiding — and that take on other tasks in the same shared spaces.",
  },
];
