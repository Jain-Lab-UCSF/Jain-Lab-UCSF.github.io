/* ============================================================
   PUBLICATIONS
   Newest first. To ADD a paper, copy a { ... } block to the top
   and change the text. To REMOVE one, delete its whole block.

   Fields:
     year     - number, used for sorting and the year filter
     title    - short display title (shown in caps)
     authors  - full author list as plain text
     journal  - e.g. "Nature Metabolism"
     details  - volume/pages, e.g. "189, 1–15" (optional)
     href     - link to the paper
     featured - true puts it in the "Selected work" section on the home page
     preprint - true marks it a preprint; drives the Published/Preprint filter
     review   - true adds a "Review" label (for reviews and perspectives)
     draft    - true hides it from the site. Use for papers not yet public,
                or an entry you haven't finished filling in.
     topics   - "Oxygen" and/or "Vitamins". Leave empty ([]) for earlier work
                that predates the lab — it still shows under "All topics".
     news     - list of press links: { label, href }
     video    - link to a video summary (optional)
     preview  - link to a journal preview/commentary (optional)
   ============================================================ */

const PUBLICATIONS = [

  /* ------------------------------------------------------------------
     TRENDS IN BIOCHEMICAL SCIENCES REVIEW — NEEDS TITLE AND AUTHORS

     Claude could not read the title or author list: cell.com renders
     its pages with JavaScript, and PubMed/Crossref were unreachable.
     Rather than guess at a citation, this entry is set to draft, so it
     does NOT appear on the site yet.

     To publish it: fill in title and authors below, then delete the
     `draft: true` line. Or paste the citation to Claude and it will.
     ------------------------------------------------------------------ */
  {
    draft: true,
    year: 2026,
    title: "",
    authors: "",
    journal: "Trends in Biochemical Sciences",
    href: "https://www.cell.com/trends/biochemical-sciences/fulltext/S0968-0004(26)00217-3",
    review: true,
    topics: [],
  },

  {
    year: 2026,
    title: "The disease gene THAP12 is a transcriptional regulator of mitochondrial ETC Complex 1",
    authors: "B. R. Desousa, Y. Abe, M. Kampmann, I. H. Jain",
    journal: "bioRxiv",
    href: "https://www.biorxiv.org/content/10.64898/2026.07.16.738975v1",
    preprint: true,
    topics: ["Oxygen"],
  },

  {
    year: 2026,
    title: "Hypoxia rescues Complex 1-associated disease caused by proteostatic defects",
    authors: "A. Garg, B. R. Desousa, R. Roy, A. Flis, S. Y. Blume, Y. Abe, A. A. Melo, R. R. Cupo, G. Gregorian, D. R. Southworth, J. Shorter, I. H. Jain",
    journal: "Nature Metabolism",
    href: "https://www.nature.com/articles/s42255-026-01566-0",
    featured: true,
    topics: ["Oxygen"],
    news: [
      { label: "Gladstone: Controlling oxygen to fight disease", href: "https://gladstone.org/news/controlling-oxygen-fight-disease" },
    ],
  },

  {
    year: 2026,
    title: "Vitamin B2 and B3 nutrigenomics reveals a therapy for NAXD disease",
    authors: "A. Garg, S. Y. Blume, H. Huynh, A. M. Barrios, O. O. Karabulut, Q. Zhao, A. D. Midha, A. W. Turner, B. V. Resnick, X. Chen, A. Agrawal, J. Kim, L. Chen, Q. Ran, A. M. Ryan, R. C. Larson, M. Negahban, S. C. K. Nelson, A. C. Yang, M. Traglia, I. H. Jain",
    journal: "Cell",
    details: "189, 1–15",
    href: "https://www.sciencedirect.com/science/article/pii/S0092867426001091",
    featured: true,
    topics: ["Vitamins"],
    news: [
      { label: "Gladstone: Vitamin B3 therapy offers hope for fatal childhood disease", href: "https://gladstone.org/news/vitamin-b3-therapy-offers-hope-fatal-childhood-disease" },
      { label: "Arc Institute: Vitamin hunters", href: "https://arcinstitute.org/news/vitamin-hunters" },
    ],
    video: "https://youtu.be/v2dQjNjwwgQ",
  },

  {
    year: 2026,
    title: "Red blood cells serve as a primary glucose sink to improve glucose tolerance at altitude",
    authors: "Y. Martí-Mateos, Z. Safari, S. Bevers, A. D. Midha, W. R. Flanigan, T. Joshi, H. Huynh, B. R. Desousa, S. Y. Blume, A. H. Baik, S. Rogers, A. V. Issaian, A. Doctor, A. D'Alessandro, I. H. Jain",
    journal: "Cell Metabolism",
    details: "38, 1–17",
    href: "https://www.cell.com/cell-metabolism/fulltext/S1550-4131(26)00018-5",
    featured: true,
    topics: ["Oxygen"],
    news: [
      { label: "Gladstone: Red blood cells soak up sugar at high altitude", href: "https://gladstone.org/news/red-blood-cells-soak-sugar-high-altitude-protecting-against-diabetes" },
      { label: "Arc Institute: Red blood cells, glucose, altitude", href: "https://arcinstitute.org/news/red-blood-cells-glucose-altitude" },
    ],
  },

  {
    year: 2026,
    title: "Systemic hypoxia suppresses solid tumor growth",
    authors: "A. D. Midha, B. T. L. Chew, B. M. H. Choi, J. M. Suh, C. Carpenter, A. H. Baik, T. A. Joshi, S. Y. Blume, A. G. Haribowo, P. Ruivo, W. R. Flanigan, A. Garg, D. D. Zhang, V. Subramanyam, R. Shuere, Y. Seo, H. VanBrocklin, H. Goodarzi, I. H. Jain",
    journal: "bioRxiv",
    href: "https://www.biorxiv.org/content/10.64898/2026.02.09.704975v1",
    preprint: true,
    topics: ["Oxygen"],
  },

  {
    year: 2026,
    title: "Genome-wide CRISPRi screen identifies basigin loss as protective in cardiac hypoxia",
    authors: "W. R. Flanigan, A. D. Midha, S. Y. Blume, Y. Martí-Mateos, M. W. Costa, Y. Huang, A. H. Baik, H. Huynh, G. Susarla, N. K. Bennett, R. A. Nowak, D. Srivastava, K. Nakamura, I. H. Jain",
    journal: "bioRxiv",
    href: "https://www.biorxiv.org/content/10.64898/2026.01.26.701810v1.article-info",
    preprint: true,
    topics: ["Oxygen"],
  },

  {
    year: 2025,
    title: "HypoxyStat, a small molecule form of hypoxia therapy",
    authors: "S. Y. Blume, A. Garg, Y. Martí-Mateos, A. D. Midha, B. T. L. Chew, B. Lin, C. Yu, R. Dick, P. S. Lee, E. Situ, R. Sarwaikar, E. Green, V. Ramanan, G. Grotenbreg, M. Hoek, C. Sinz, I. H. Jain",
    journal: "Cell",
    details: "188",
    href: "https://www.cell.com/cell/pdf/S0092-8674(25)00098-4.pdf",
    featured: true,
    topics: ["Oxygen"],
    news: [
      { label: "Gladstone: Daily drug captures health benefits of high-altitude living", href: "https://gladstone.org/news/daily-drug-captures-health-benefits-high-altitude-low-oxygen-living" },
    ],
    preview: "https://www.cell.com/cell/abstract/S0092-8674(25)00207-7",
    video: "https://www.youtube.com/watch?v=J-LY9Hov1NI",
  },

  {
    year: 2023,
    title: "In vivo protein turnover nominates MYBBP1A as a mediator of the hyperoxia response",
    authors: "X. Chen, A. G. Haribowo, A. H. Baik, A. Fossati, E. Stevenson, Y. R. Chen, N. S. Reyes, T. Peng, M. A. Matthay, M. Traglia, A. R. Pico, D. F. Jarosz, A. Buchwalter, S. Ghaemmaghami, D. L. Swaney, I. H. Jain",
    journal: "Science Advances",
    details: "9",
    href: "https://www.science.org/doi/10.1126/sciadv.adj4884",
    topics: ["Oxygen"],
    news: [
      { label: "Gladstone: A dynamic picture of how we respond to high or low oxygen", href: "https://gladstone.org/news/dynamic-picture-how-we-respond-high-or-low-oxygen-levels" },
    ],
  },

  {
    year: 2023,
    title: "Mechanisms of oxygen toxicity",
    authors: "A. H. Baik*, A. G. Haribowo*, X. Chen*, B. B. Queliconi, A. M. Barrios, A. Garg, M. Maishan, A. R. Campos, M. A. Matthay, I. H. Jain (*equal contribution)",
    journal: "Molecular Cell",
    details: "83, 1–19",
    href: "https://www.sciencedirect.com/science/article/pii/S1097276523001168?via%3Dihub",
    featured: true,
    topics: ["Oxygen"],
    news: [
      { label: "Gladstone: How too much oxygen damages cells and tissues", href: "https://gladstone.org/news/researchers-discover-how-too-much-oxygen-damages-cells-and-tissues" },
    ],
  },

  {
    year: 2023,
    title: "Organ-specific fuel rewiring in acute and chronic hypoxia",
    authors: "A. M. Midha*, Y. Zhou*, B. B. Queliconi, A. M. Barrios, C. O. Y. Fong, J. E. Blecha, H. VanBrocklin, Y. Seo, I. H. Jain (*equal contribution)",
    journal: "Cell Metabolism",
    details: "35, 504–516",
    href: "https://linkinghub.elsevier.com/retrieve/pii/S1550-4131(23)00043-8",
    featured: true,
    topics: ["Oxygen"],
    preview: "https://www.cell.com/cell-metabolism/pdf/S1550-4131(23)00047-5.pdf",
    news: [
      { label: "Gladstone: How high altitude changes your body's metabolism", href: "https://gladstone.org/news/how-high-altitude-changes-your-bodys-metabolism" },
    ],
  },

  {
    year: 2022,
    title: "The Goldilocks oxygen principle: not too little and not too much",
    authors: "W. R. Flanigan, I. H. Jain",
    journal: "Nature Cardiovascular Research",
    details: "1, 1101–1103",
    href: "https://www.nature.com/articles/s44161-022-00178-7",
    topics: ["Oxygen"],
  },

  {
    year: 2022,
    title: "Ferroptosis and PDAC therapy resistance",
    authors: "M. Ravichandran, J. Hu … B. R. Desousa … I. H. Jain … R. M. Perera",
    journal: "Cancer Discovery",
    details: "OF1–OF22",
    href: "https://aacrjournals.org/cancerdiscovery/article/12/9/2198/708778/Coordinated-Transcriptional-and-Catabolic-Programs",
    topics: [],
  },

  {
    year: 2021,
    title: "Airway stem cells sense hypoxia and differentiate into protective neuroendocrine cells",
    authors: "M. Shivaraju, U. K. Chitta, R. M. H. Grange, I. H. Jain … J. Rajagopal",
    journal: "Science",
    details: "371, 52–57",
    href: "https://www.science.org/doi/10.1126/science.aba0629",
    topics: ["Oxygen"],
  },

  {
    year: 2020,
    title: "Turning the oxygen dial: balancing the highs and lows",
    authors: "A. H. Baik, I. H. Jain",
    journal: "Trends in Cell Biology",
    href: "https://www.sciencedirect.com/science/article/pii/S096289242030091X?via%3Dihub",
    review: true,
    topics: ["Oxygen"],
  },

  {
    year: 2020,
    title: "Peroxisomal lipid metabolism as a hypoxia adaptation",
    authors: "I. H. Jain*, S. E. Calvo*, A. L. Markhard … V. K. Mootha (*equal contribution)",
    journal: "Cell",
    details: "181, 1–12",
    href: "https://linkinghub.elsevier.com/retrieve/pii/S0092-8674(20)30321-4",
    featured: true,
    topics: ["Oxygen"],
  },

  {
    year: 2019,
    title: "Hypoxia therapy normalizes brain hyperoxia in mitochondrial disease",
    authors: "I. H. Jain*, L. Zazzeron*, O. Goldberger … W. M. Zapol**, V. K. Mootha** (*, **equal contribution)",
    journal: "Cell Metabolism",
    details: "30, 1–9",
    href: "https://linkinghub.elsevier.com/retrieve/pii/S1550-4131(19)30379-1",
    topics: ["Oxygen"],
    preview: "https://www.cell.com/cell-metabolism/pdf/S1550-4131(19)30507-8.pdf",
  },

  {
    year: 2017,
    title: "Hypoxia reverses neurological lesions in mitochondrial disease",
    authors: "M. Ferrari*, I. H. Jain*, O. Goldberger … V. K. Mootha**, W. M. Zapol** (*equal contribution)",
    journal: "PNAS",
    details: "114 (21), E4241–E4250",
    href: "https://www.pnas.org/doi/10.1073/pnas.1621511114",
    topics: ["Oxygen"],
    news: [
      { label: "HHMI: Low oxygen reverses mitochondrial disease in mice", href: "https://www.hhmi.org/news/low-oxygen-reverses-mitochondrial-disease-mice" },
    ],
  },

  {
    year: 2016,
    title: "Hypoxia as a therapy for mitochondrial disease",
    authors: "I. H. Jain, L. Zazzeron, R. Goli … F. Zhang, W. Goessling, W. M. Zapol, V. K. Mootha",
    journal: "Science",
    details: "352 (6281), 54–61",
    href: "https://www.science.org/doi/10.1126/science.aad9642",
    featured: true,
    topics: ["Oxygen"],
    news: [
      { label: "Science: Oxygen deprivation counters deadly mitochondrial disease", href: "https://www.science.org/content/article/oxygen-deprivation-counters-deadly-mitochondrial-disease-animals" },
    ],
    preview: "https://www.science.org/doi/pdf/10.1126/science.aaf5248",
  },

  {
    year: 2012,
    title: "Chromosome ordering and segregation in cyanobacteria",
    authors: "I. H. Jain*, V. Vijayan*, E. K. O'Shea (*equal contribution)",
    journal: "PNAS",
    details: "109 (34), 13638–13643",
    href: "https://www.pnas.org/doi/10.1073/pnas.1211144109",
    topics: [],
  },

  {
    year: 2011,
    title: "Circadian gene expression in cyanobacteria",
    authors: "V. Vijayan, I. H. Jain, E. K. O'Shea",
    journal: "Genome Biology",
    details: "12:R47",
    href: "",
    topics: [],
  },

  {
    year: 2008,
    title: "Connexin43 and bone regeneration",
    authors: "A. D. Hoptak-Solga, S. Nielsen, I. H. Jain, R. Thummel, D. Hyde, M. K. Iovine",
    journal: "Developmental Biology",
    href: "",
    topics: [],
  },

  {
    year: 2007,
    title: "Pulsatile bone growth",
    authors: "I. H. Jain, C. Stroka, J. Yan, W. Huang, M. K. Iovine",
    journal: "Developmental Dynamics",
    details: "236, 2668–2674",
    href: "",
    topics: [],
  },

  {
    year: 2003,
    title: "Effects of rapid expansion on glass surfaces",
    authors: "A. Sharma, H. Jain, J. O. Carnali, I. H. Jain",
    journal: "Applied Physics Letters",
    details: "83, 2802–2804",
    href: "",
    topics: [],
  },
];
