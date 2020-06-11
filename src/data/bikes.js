// Feature thumbnails
import SWITCH_INFINITY from "../images/features/Yeti_SwitchInfinity_Mech-thumb-switch-infinity.jpg";
import TUNED_TO_RIP from "../images/features/2020_YetiCycles_SB165_Detail_01-thumb-tuned-to-rip.jpg";
import INTERNAL_ROUTING from "../images/features/2020_YetiCycles_SB165_Detail_02-thumb-internal-routing.jpg";
import INTEGRATED_HEADSET from "../images/features/2020_YetiCycles_SB165_Detail_03-thumb-integrated-headset.jpg";
import GRAVITY_TESTED from "../images/features/2020_YetiCycles_SB165_Raw_Frame_Carbon_Dark_02-thumb-gravity-tested.jpg";
import SLACK_GEOMETRY from "../images/features/SLorence_Yeti_SB165_4958-thumb-slack-geometry.jpg";
import CHAIN_GUIDE_READY from "../images/features/SLorence_Yeti_SB165_2814-2-thumb-chain-guide-ready.jpg";
import SHOCK_EXTENDER from "../images/features/2019_YetiCycles_Prototype_SB150_Ext_Explode-thumb-shock-extender.jpg";
import TESTED_TO_DH_STANDARDS from "../images/features/2019_YetiCycles_SB150_Frame_Carbon_Dark_02-thumb-tested-to-dh-standards.jpg";
import NEW_WATER_BOTTLE_LOCATION from "../images/features/BLong_Revelstoke_SB150_9713-thumb-new-water-bottle-location.jpg";
import TUNED_FOR_ENDURO_PERFORMANCE from "../images/features/YetiCycles_SB150_Detail_01-thumb-turned-for-enduro-performance.jpg";
import PROGRESSIVE_GEOMETRY from "../images/features/YetiCycles_SB150_Frame_Carbon_01-thumb-progressive-geometry.jpg";

// SB165 images
import SB165_COMPLETE_BLACK from "../images/bikes/SB165/2020_YetiCycles_SB165_Complete_Black.jpg";
import SB165_COMPLETE_TURQ from "../images/bikes/SB165/2020_YetiCycles_SB165_Complete_Turq.jpg";

// SB150 images
import SB150_COMPLETE_ANTHRACITE from "../images/bikes/SB150/2020_YetiCycles_SB150_Complete_Anthracite.jpg";
import SB150_COMPLETE_TURQ from "../images/bikes/SB150/2020_YetiCycles_SB150_Complete_Turq.jpg";
import SB150_COMPLETE_VERDE from "../images/bikes/SB150/2020_YetiCycles_SB150_Complete_Verde_HR.jpg";

const bikes = [
  {
    id: 1,
    name: "SB165",
    info: {
      rearTravel: '165mm (6.5")',
      wheelSize: '27.5"',
      designedFor: "Trail / Enduro",
      materials: "Turq or C/Series",
      suspensionTech: "Switch Infinity",
    },
    colors: [
      {
        id: 1,
        name: "Black",
        path: SB165_COMPLETE_BLACK,
      },
      {
        id: 2,
        name: "Turquoise",
        path: SB165_COMPLETE_TURQ,
      },
    ],
    summary:
      "Master of the gnarniverse. Bold claim. The SB165 was created to get after whatever you’re getting after. The slackest sled in our lineup. With kinematics tuned for a coil-shock. At home outside the tape and trusted on the lines where mistakes can’t happen. The SB165 already has you covered.",
    features: [
      {
        id: 1,
        name: "Switch Infinity",
        info:
          "At the heart of the SB165 suspension design is our patented Switch Infinity suspension system.",
        path: SWITCH_INFINITY,
      },
      {
        id: 2,
        name: "Tuned To Rip",
        info:
          "Tuned to rip on the gnarliest trails outside the tape, with kinematics specific for a coil or high-volume air shock.",
        path: TUNED_TO_RIP,
      },
      {
        id: 3,
        name: "Gravity Tested",
        info:
          "Everyone knows the rowdiest trails are outside the tape. So, we built it tough to handle tosses and nasty tech.",
        path: GRAVITY_TESTED,
      },
      {
        id: 4,
        name: "Slack Geometry",
        info:
          "The SB165 is designed to handle the steeps, so we made it low, long, and slack.",
        path: SLACK_GEOMETRY,
      },
      {
        id: 5,
        name: "Chain Guide Ready",
        info: "Chain Guide ready out of the box with ISCG 05 mounts.",
        path: CHAIN_GUIDE_READY,
      },
      {
        id: 6,
        name: "Internal Routing",
        info:
          "Internally tunneled cable routing allows for clean lines and a quiet, rattle-free ride.",
        path: INTERNAL_ROUTING,
      },
      {
        id: 7,
        name: "Integrated Headset",
        info:
          "An integrated headset allows for a lower overall stack height and cleaner carbon layup.",
        path: INTEGRATED_HEADSET,
      },
    ],
  },
  {
    id: 2,
    name: "SB150",
    summary:
      "Race bred.” it’s not just a slogan printed on the SB150 top tube. We’ve been pinning on numbers and pinning the throttle since 1985. So when choices had to be made on the SB150, every single one was made in the name of unbridled speed. The ultimate example of breeding a bike to beat the clock.",
    info: {
      rearTravel: '150mm (5.9")',
      wheelSize: '29"',
      designedFor: "Enduro",
      materials: "Turq or C/Series",
      suspensionTech: "Switch Infinity",
    },
    colors: [
      {
        id: 1,
        name: "Anthracite",
        path: SB150_COMPLETE_ANTHRACITE,
      },
      {
        id: 2,
        name: "Turquoise",
        path: SB150_COMPLETE_TURQ,
      },
      {
        id: 3,
        name: "Verde",
        path: SB150_COMPLETE_VERDE,
      },
    ],
    features: [
      {
        id: 1,
        name: "Switch Infinity",
        info:
          "At the heart of the SB150 suspension design is our patented Switch Infinity suspension system.",
        path: SWITCH_INFINITY,
      },
      {
        id: 2,
        name: "Tuned For Enduro Performace",
        info:
          "Tuned to perform on the most grueling enduro tracks in the world.",
        path: TUNED_FOR_ENDURO_PERFORMANCE,
      },
      {
        id: 3,
        name: "Tested To DH Standards",
        info:
          'Built Richie "F-ing" Rude tough, this frame meets Yeti DH testing standards.',
        path: TESTED_TO_DH_STANDARDS,
      },
      {
        id: 4,
        name: "Progressive Geometry",
        info:
          "The SB150 has progressive enduro inspired geometry. We took what we learned from our EWS team riders and made it low, slack, and long.",
        path: PROGRESSIVE_GEOMETRY,
      },
      {
        id: 5,
        name: "Shock Extender",
        info:
          "A patent pending wishbone shock extender was developed to change the leverage ratio and shock clearance.",
        path: SHOCK_EXTENDER,
      },
      {
        id: 6,
        name: "New Water Bottle Location",
        info:
          "The water bottle fits comfortably inside the front triangle, where you might be used to looking for it.",
        path: NEW_WATER_BOTTLE_LOCATION,
      },
      {
        id: 7,
        name: "Internal Routing",
        info:
          "Internally tunneled cable routing allows for clean lines and a quiet, rattle-free ride.",
        path: INTERNAL_ROUTING,
      },
    ],
  },
];
