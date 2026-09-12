/* ============================================================================
   RESEARCH DIRECTIONS
   Rendered on index.html (summary cards) and research.html (full sections).
   `icon` refers to a key in assets/js/icons.js.
   ========================================================================== */

window.RESEARCH = [
  {
    id: "rf-perception",
    icon: "waves",
    title: "Radio Frequency Perception",
    summary:
      "Seeing through walls, boxes, and clutter by turning ordinary wireless signals into a perception modality for machines.",
    body:
      "Cameras and LiDAR stop at the first opaque surface. Radio frequency signals do not — they traverse occlusions, reflect off hidden items, and carry identity when paired with battery-free tags. We build the localization, imaging, and inference algorithms that make RF a first-class sensing modality, and we design the antennas and radios that make those algorithms deployable on real mobile platforms.",
    threads: [
      "Sub-centimeter localization of battery-free RFID tags from a moving platform",
      "Non-line-of-sight imaging and material inference with mmWave and UWB radar",
      "Signal processing pipelines that survive multipath, mobility, and clutter",
    ],
  },
  {
    id: "multimodal-sensing",
    icon: "layers",
    title: "Multi-Modal Sensing &amp; Fusion",
    summary:
      "Fusing RF, vision, depth, and touch so that each modality covers the blind spots of the others.",
    body:
      "No single sensor is sufficient in the real world. Vision is precise but blocked; RF penetrates but is coarse; touch is certain but slow. We study how to combine heterogeneous, asynchronous, and noisy modalities into a single belief about the world — and how to decide, at runtime, which sensor is worth listening to next.",
    threads: [
      "Cross-modal representation learning across RF, RGB-D, and tactile streams",
      "Uncertainty-aware fusion that degrades gracefully when a modality fails",
      "Active sensing: choosing the next measurement that most reduces uncertainty",
    ],
  },
  {
    id: "robotics",
    icon: "robot",
    title: "Robotics &amp; Cyber-Physical Systems",
    summary:
      "Robots that can find, reach, and manipulate objects they cannot see, in the cluttered spaces where people actually live and work.",
    body:
      "We close the loop from perception to action. By giving manipulators a sense that extends past the surface of a pile, we enable mechanical search, retrieval, and inventory tasks that were previously out of reach — in warehouses, retail floors, hospitals, and homes. Our systems are evaluated on real hardware, in real clutter, not only in simulation.",
    threads: [
      "Mechanical search and retrieval of fully occluded objects",
      "RF-visual grasping policies learned from real-world interaction",
      "Autonomous inventory and logistics for unstructured environments",
    ],
  },
  {
    id: "hci-xr",
    icon: "headset",
    title: "Human-Computer Interaction &amp; XR",
    summary:
      "Extended reality interfaces that let people perceive and act on information their eyes cannot reach.",
    body:
      "The same perception that helps a robot can help a person. We build wearable and mixed-reality systems that surface hidden physical context directly in a user's field of view, and we study the interaction design questions that follow: how to render uncertainty, how to guide attention, and how to keep a person in control of an autonomous partner.",
    threads: [
      "Headsets with non-line-of-sight perception for item localization and retrieval",
      "Interaction techniques for conveying sensor uncertainty to end users",
      "Human studies on trust, guidance, and hand-off in sensing-augmented tasks",
    ],
  },
];
