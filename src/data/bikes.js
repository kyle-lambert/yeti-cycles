// SB165 images
import SB165_COMPLETE_BLACK from "../images/bikes/SB165/2020_YetiCycles_SB165_Complete_Black.jpg";
import SB165_COMPLETE_TURQ from "../images/bikes/SB165/2020_YetiCycles_SB165_Complete_Turq.jpg";

// SB150 images
import SB150_COMPLETE_ANTHRACITE from "../images/bikes/SB150/2020_YetiCycles_SB150_Complete_Anthracite.jpg";
import SB150_COMPLETE_TURQ from "../images/bikes/SB150/2020_YetiCycles_SB150_Complete_Turq.jpg";
import SB150_COMPLETE_VERDE from "../images/bikes/SB150/2020_YetiCycles_SB150_Complete_Verde_HR.jpg";

// SB140 images
import SB140_COMPLETE_INFERO from "../images/bikes/SB140/2020_YetiCycles_SB140_Complete_Inferno.jpg";
import SB140_COMPLETE_TURQ from "../images/bikes/SB140/2020_YetiCycles_SB140_Complete_Turq.jpg";
import SB140_COMPLETE_SMOKE from "../images/bikes/SB140/2020_YetiCycles_SB140_Complete_Smoke.jpg";

// SB130 images
import SB130_COMPLETE_ANTHRACITE from "../images/bikes/SB130/2020_YetiCycles_SB130_Complete_Anthracite.jpg";
import SB130_COMPLETE_STORM from "../images/bikes/SB130/2020_YetiCycles_SB130_Complete_Storm.jpg";
import SB130_COMPLETE_TURQ from "../images/bikes/SB130/2020_YetiCycles_SB130_Complete_Turq.jpg";

// SB100 images
import SB100_COMPLETE_BLACK from "../images/bikes/SB100/2020_YetiCycles_SB100_Black.jpg";
import SB100_COMPLETE_TURQ from "../images/bikes/SB100/2020_YetiCycles_SB100_Turq.jpg";

const bikes = [
  {
    id: 1,
    name: "SB165",
    summary:
      "Master of the gnarniverse. Bold claim. The SB165 was created to get after whatever you’re getting after. The slackest sled in our lineup. With kinematics tuned for a coil-shock. At home outside the tape and trusted on the lines where mistakes can’t happen. The SB165 already has you covered.",
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
  },
  {
    id: 3,
    name: "SB140",
    summary:
      "Some say the SB140 never met a dirt it didn’t like. We agree in spades. What’s your pleasure? Drag a bar. Make an edit. Stay out after dark. Try it. Land it. Or just stay at it. Happy to pedal. Greedy for more.The mayor of jibtown, proudly wearing the rip crown. The SB140. Down to fun.",
    info: {
      rearTravel: '140mm (5.6")',
      wheelSize: '27.5"',
      designedFor: "Trail",
      materials: "Turq or C/Series",
      suspensionTech: "Switch Infinity",
    },
    colors: [
      {
        id: 1,
        name: "Smoke",
        path: SB140_COMPLETE_SMOKE,
      },
      {
        id: 2,
        name: "Turquoise",
        path: SB140_COMPLETE_TURQ,
      },
      {
        id: 3,
        name: "Inferno",
        path: SB140_COMPLETE_INFERO,
      },
    ],
  },
  {
    id: 4,
    name: "SB130",
    summary:
      "The rebel yell of the middle child. Fed a steady diet of super-tech climbs. The SB130 was built to crush the biggest terrain. No trail “too” anything. Point it up or down. Enter a last-minute enduro just for the eff of it. We say no one bike can rule all. But the SB130? One bike that rules.",
    info: {
      rearTravel: '130mm (5.1")',
      wheelSize: '29"',
      designedFor: "Trail / Enduro",
      materials: "Turq or C/Series",
      suspensionTech: "Switch Infinity",
    },
    colors: [
      {
        id: 1,
        name: "Storm",
        path: SB130_COMPLETE_STORM,
      },
      {
        id: 2,
        name: "Anthracite",
        path: SB130_COMPLETE_ANTHRACITE,
      },
      {
        id: 3,
        name: "Turquoise",
        path: SB130_COMPLETE_TURQ,
      },
    ],
  },
  {
    id: 5,
    name: "SB100",
    summary:
      "Last we checked, “xc-style” racing on a mountain bike doesn’t stop once you crest the climb. Crushing souls on the descent is more than half the fun. And a hell of a lot more than half the point. For racers who want to fly down as much as soar up, the SB100 is the bike we’ve always wanted to make.",
    info: {
      rearTravel: '100mm (4.0")',
      wheelSize: '29"',
      designedFor: "XCountry / Trail",
      materials: "Turq or C/Series",
      suspensionTech: "Switch Infinity",
    },
    colors: [
      {
        id: 1,
        name: "Turquoise",
        path: SB100_COMPLETE_TURQ,
      },
      {
        id: 2,
        name: "Black",
        path: SB100_COMPLETE_BLACK,
      },
    ],
  },
];

export default bikes;
