/* ============================================================
   RESEARCH
   Each { ... } block is one research area, shown as a numbered
   section on the Research page. To add one, copy a block.

   Fields:
     theme    - which tab it belongs to (see THEMES below)
     question - the big question, shown as the heading
     body     - paragraph. You can use <a href="...">links</a> and <strong>bold</strong>.
     image    - illustration URL (optional)
     imageAlt - description of the image for screen readers
   ============================================================ */

// Tabs across the top of the Research page.
const THEMES = ["Oxygen", "Vitamins"];

/* The big heading at the top of the Research page changes with the tab.
   Edit the headline and blurb for each one here. */
const THEME_INTRO = {
  "All": {
    headline: "Oxygen and vitamin metabolism",
    blurb: "We study how oxygen and vitamins are sensed and used by cells, and whether altering them can treat disease.",
  },
  "Oxygen": {
    headline: "Oxygen metabolism",
    blurb: "Both too little and too much oxygen are toxic. We study the mechanisms behind that toxicity, how the body senses oxygen, and which diseases respond to lowering it.",
  },
  "Vitamins": {
    headline: "Vitamin metabolism",
    blurb: "We map how vitamins act inside cells, identify the proteins they interact with, and search for micronutrients that have not yet been characterized.",
  },
};

const RESEARCH = [

  {
    theme: "Oxygen",
    question: "Why is too little or too much oxygen toxic?",
    image: "assets/figures/icon-toxicity.svg",
    imageAlt: "Curve peaking in the middle and falling at both ends",
    body: `Oxygen deprivation (hypoxia) and excess (hyperoxia) are both toxic to humans. Oxygen deprivation contributes to 3 of the 5 leading causes of mortality in developed nations — heart attack, stroke, and respiratory failure. On the other hand, hyperoxia is toxic to nearly all organisms and contributes to the pathology of ischemia-reperfusion injury, mitochondrial disease and hyperoxic lung injury. However, the molecular mechanisms underlying hypoxia and hyperoxia toxicity remain unknown. By deciphering these mechanisms, we strive to nominate novel therapeutic candidates. Our recent work highlights such mechanisms of hyperoxia toxicity and the cycle of damage caused by destabilization of specific iron-containing protein complexes (<a href="https://www.cell.com/molecular-cell/pdf/S1097-2765(23)00116-8.pdf">Baik*, Haribowo*, Chen* et al., 2023, Molecular Cell</a>).`,
  },

  {
    theme: "Oxygen",
    question: "How does the body sense and adapt to varying oxygen levels?",
    image: "assets/figures/icon-altitude.svg",
    imageAlt: "Mountain peak",
    body: `Mammals are capable of sensing and adapting to moderate variations in oxygen tensions. For example, over 1 million individuals reside permanently at altitudes above 4500m (where there is half the amount of oxygen as sea level). The most well-known hypoxia adaptive pathway centers around the HIF transcription factors. This work led to countless clinical advances and the 2019 Nobel Prize. We set out to more comprehensively understand — how do organisms sense and adapt to both hypoxia and hyperoxia (<a href="https://www.cell.com/cell/pdf/S0092-8674(20)30321-4.pdf">Jain*, Calvo* et al., 2020, Cell</a>)? Beyond HIF, can we identify additional metabolic rewiring that enables survival in such conditions? Along these lines, we recently demonstrated that fuel sources are differentially redistributed across organs in acute and chronic hypoxia (<a href="https://www.cell.com/cell-metabolism/pdfExtended/S1550-4131(23)00043-8">Midha*, Zhou* et al., 2023, Cell Metabolism</a>).`,
  },

  {
    theme: "Oxygen",
    question: "Which diseases can be treated by turning the oxygen dial?",
    image: "assets/figures/icon-dial.svg",
    imageAlt: "Dial with the needle turned down",
    body: `We recently demonstrated that chronically lowering inhaled oxygen tensions can extend the life of a mitochondrial disease mouse model by five-fold (<a href="https://www.science.org/doi/10.1126/science.aad9642">Jain et al., 2016, Science</a>; <a href="https://www.cell.com/cell-metabolism/pdf/S1550-4131(19)30379-1.pdf">Jain et al., 2019, Cell Metabolism</a>). Moreover, starting late-stage disease treatment can not only prevent, but even reverse the disease (<a href="https://www.pnas.org/doi/10.1073/pnas.1621511114">Ferrari*, Jain* et al., 2017, PNAS</a>). MRI-detectable lesions are completely cured within weeks of breathing chronic hypoxia. This work has already led to a Phase 1 clinical trial for healthy human hypoxia exposure. We believe that this paradoxical finding is just the tip of the iceberg. While small molecules and biologics are the most common forms of therapy, we believe we have uncovered a new mode of treating metabolic disorders. We now hope to extend our findings to additional inborn errors of metabolism, as well as more common metabolic disorders, including aging and age-associated damage.`,
  },

  /* ---- Vitamins ----
     Placeholder text below — replace with your Vitamins page copy.
     Ask Claude: "update the Vitamins research section with this text: ..." */
  {
    theme: "Vitamins",
    question: "What do vitamins actually do inside cells?",
    image: "assets/figures/icon-vitamin.svg",
    imageAlt: "Capsule",
    body: `Vitamins are among the oldest and most widely used interventions in medicine, yet the molecular details of how many of them act remain surprisingly unresolved. We use nutrigenomic screens, chemical biology, and mass spectrometry to map vitamin-protein interactions and to identify the regulatory machinery that controls vitamin metabolism. Our recent work on vitamin B2 and B3 nutrigenomics uncovered a therapy for NAXD disease (<a href="https://www.sciencedirect.com/science/article/pii/S0092867426001091">Garg et al., 2026, Cell</a>).`,
  },

  {
    theme: "Vitamins",
    question: "Are there micronutrients we haven't discovered yet?",
    image: "assets/figures/icon-discover.svg",
    imageAlt: "Magnifying glass over a question mark",
    body: `The canonical list of human vitamins was largely assembled in the first half of the twentieth century. We are asking whether that list is complete — searching for previously uncharacterized small molecules that behave like micronutrients, and for the transporters and enzymes that handle them.`,
  },
];
