/* ============================================================
   PUBLICATIONS
   Newest first. To ADD a paper, copy a { ... } block to the top
   and change the text. To REMOVE one, delete its whole block.

   Titles are the exact published titles, verbatim. If you shorten
   one for display, the entry no longer matches the article it links
   to — which is how several errors crept in before.

   Fields:
     year     - number, used for sorting and the year filter
     title    - exact published title (shown in caps)
     authors  - full author list as plain text
     journal  - e.g. "Nature Metabolism"
     details  - volume/pages, e.g. "189, 2648–2662" (optional)
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

  {
    year: 2026,
    title: "The diversity of terminal electron acceptors across eukaryotes",
    authors: "A. D. Midha, I. H. Jain",
    journal: "Trends in Biochemical Sciences",
    href: "https://www.cell.com/trends/biochemical-sciences/fulltext/S0968-0004(26)00217-3",
    review: true,
    topics: ["Oxygen"],
  },

  {
    year: 2026,
    title: "The Disease Gene THAP12 is a Transcriptional Regulator of Mitochondrial ETC Complex I",
    authors: "B. R. Desousa, Y. Abe, M. Kampmann, I. H. Jain",
    journal: "bioRxiv",
    href: "https://www.biorxiv.org/content/10.64898/2026.07.16.738975v1",
    preprint: true,
    topics: ["Oxygen"],
  },

  {
    year: 2026,
    title: "Hypoxia rescues complex 1-associated disease caused by proteostatic defects",
    authors: "A. Garg, B. R. Desousa, R. Roy, A. Flis, S. Y. Blume, Y. Abe, A. A. Melo, R. R. Cupo, G. Grigorean, D. R. Southworth, J. Shorter, I. H. Jain",
    journal: "Nature Metabolism",
    details: "8, 1791–1804",
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
    authors: "A. Garg, S. Y. Blume, H. Huynh, A. M. Barrios, O. O. Karabulut, Q. Zhao, A. D. Midha, A. W. Turner, B. V. Resnick, X. Chen, A. Agrawal, J. Kim, L. Chen, Q. Ran, A. M. Ryan, R. C. Larson, M. Negahban, S. C. K. Nelson, A. C. Yang, M. Traglia, R. Thomas, R. Sun, M. Paredes, M. R. Corces, H. Lin, I. H. Jain",
    journal: "Cell",
    details: "189, 2648–2662",
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
    details: "38, 529–545",
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
    authors: "A. D. Midha, B. T. L. Chew, B. M. H. Choi, J. M. Suh, C. Carpenter, A. H. Baik, T. Joshi, S. Y. Blume, A. G. Haribowo, P. Ruivo, W. R. Flanigan, A. Garg, D. D. Zhang, V. Subramanyam, R. Shuere, Y. Seo, H. VanBrocklin, H. Goodarzi, I. H. Jain",
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
    href: "https://www.biorxiv.org/content/10.64898/2026.01.26.701810v1",
    preprint: true,
    topics: ["Oxygen"],
  },

  {
    year: 2025,
    title: "HypoxyStat, a small-molecule form of hypoxia therapy that increases oxygen-hemoglobin affinity",
    authors: "S. Y. Blume, A. Garg, Y. Martí-Mateos, A. D. Midha, B. T. L. Chew, B. Lin, C. Yu, R. Dick, P. S. Lee, E. Situ, R. Sarwaikar, E. Green, V. Ramanan, G. Grotenbreg, M. Hoek, C. Sinz, I. H. Jain",
    journal: "Cell",
    details: "188, 1580–1588",
    href: "https://www.cell.com/cell/fulltext/S0092-8674(25)00098-4",
    featured: true,
    topics: ["Oxygen"],
    news: [
      { label: "Gladstone: Daily drug captures health benefits of high-altitude living", href: "https://gladstone.org/news/daily-drug-captures-health-benefits-high-altitude-low-oxygen-living" },
    ],
    preview: "https://www.cell.com/cell/fulltext/S0092-8674(25)00207-7",
    video: "https://www.youtube.com/watch?v=J-LY9Hov1NI",
  },

  {
    year: 2023,
    title: "In vivo protein turnover rates in varying oxygen tensions nominate MYBBP1A as a mediator of the hyperoxia response",
    authors: "X. Chen, A. G. Haribowo, A. H. Baik, A. Fossati, E. Stevenson, Y. R. Chen, N. S. Reyes, T. Peng, M. A. Matthay, M. Traglia, A. R. Pico, D. F. Jarosz, A. Buchwalter, S. Ghaemmaghami, D. L. Swaney, I. H. Jain",
    journal: "Science Advances",
    details: "9, eadj4884",
    href: "https://www.science.org/doi/10.1126/sciadv.adj4884",
    topics: ["Oxygen"],
    news: [
      { label: "Gladstone: A dynamic picture of how we respond to high or low oxygen", href: "https://gladstone.org/news/dynamic-picture-how-we-respond-high-or-low-oxygen-levels" },
    ],
  },

  {
    year: 2023,
    title: "Oxygen toxicity causes cyclic damage by destabilizing specific Fe-S cluster-containing protein complexes",
    authors: "A. H. Baik*, A. G. Haribowo*, X. Chen*, B. B. Queliconi, A. M. Barrios, A. Garg, M. Maishan, A. R. Campos, M. A. Matthay, I. H. Jain (*equal contribution)",
    journal: "Molecular Cell",
    details: "83, 942–960",
    href: "https://www.cell.com/molecular-cell/fulltext/S1097-2765(23)00116-8",
    featured: true,
    topics: ["Oxygen"],
    news: [
      { label: "Gladstone: How too much oxygen damages cells and tissues", href: "https://gladstone.org/news/researchers-discover-how-too-much-oxygen-damages-cells-and-tissues" },
    ],
  },

  {
    year: 2023,
    title: "Organ-specific fuel rewiring in acute and chronic hypoxia redistributes glucose and fatty acid metabolism",
    authors: "A. D. Midha*, Y. Zhou*, B. B. Queliconi, A. M. Barrios, A. G. Haribowo, B. T. L. Chew, C. O. Y. Fong, J. E. Blecha, H. VanBrocklin, Y. Seo, I. H. Jain (*equal contribution)",
    journal: "Cell Metabolism",
    details: "35, 504–516",
    href: "https://www.cell.com/cell-metabolism/fulltext/S1550-4131(23)00043-8",
    featured: true,
    topics: ["Oxygen"],
    preview: "https://www.cell.com/cell-metabolism/fulltext/S1550-4131(23)00047-5",
    news: [
      { label: "Gladstone: How high altitude changes your body's metabolism", href: "https://gladstone.org/news/how-high-altitude-changes-your-bodys-metabolism" },
    ],
  },

  {
    year: 2022,
    title: "The Goldilocks Oxygen Principle: not too little and not too much",
    authors: "W. R. Flanigan, I. H. Jain",
    journal: "Nature Cardiovascular Research",
    details: "1, 1101–1103",
    href: "https://www.nature.com/articles/s44161-022-00178-7",
    topics: ["Oxygen"],
  },

  {
    year: 2022,
    title: "Coordinated Transcriptional and Catabolic Programs Support Iron-Dependent Adaptation to RAS–MAPK Pathway Inhibition in Pancreatic Cancer",
    authors: "M. Ravichandran, J. Hu … B. R. Desousa … I. H. Jain … R. M. Perera",
    journal: "Cancer Discovery",
    details: "12, 2198–2219",
    href: "https://aacrjournals.org/cancerdiscovery/article/12/9/2198/708778/Coordinated-Transcriptional-and-Catabolic-Programs",
    topics: [],
  },

  {
    year: 2021,
    title: "Airway stem cells sense hypoxia and differentiate into protective solitary neuroendocrine cells",
    authors: "M. Shivaraju, U. K. Chitta, R. M. H. Grange, I. H. Jain … J. Rajagopal",
    journal: "Science",
    details: "371, 52–57",
    href: "https://www.science.org/doi/10.1126/science.aba0629",
    topics: ["Oxygen"],
  },

  {
    year: 2020,
    title: "Turning the Oxygen Dial: Balancing the Highs and Lows",
    authors: "A. H. Baik, I. H. Jain",
    journal: "Trends in Cell Biology",
    details: "30, 516–536",
    href: "https://www.sciencedirect.com/science/article/pii/S096289242030091X?via%3Dihub",
    review: true,
    topics: ["Oxygen"],
  },

  {
    year: 2020,
    title: "Genetic Screen for Cell Fitness in High or Low Oxygen Highlights Mitochondrial and Lipid Metabolism",
    authors: "I. H. Jain*, S. E. Calvo*, A. L. Markhard … V. K. Mootha (*equal contribution)",
    journal: "Cell",
    details: "181, 716–727",
    href: "https://www.cell.com/cell/fulltext/S0092-8674(20)30321-4",
    featured: true,
    topics: ["Oxygen"],
  },

  {
    year: 2019,
    title: "Leigh Syndrome Mouse Model Can Be Rescued by Interventions that Normalize Brain Hyperoxia, but Not HIF Activation",
    authors: "I. H. Jain*, L. Zazzeron*, O. Goldberger … W. M. Zapol**, V. K. Mootha** (*, **equal contribution)",
    journal: "Cell Metabolism",
    details: "30, 824–832",
    href: "https://www.cell.com/cell-metabolism/fulltext/S1550-4131(19)30379-1",
    topics: ["Oxygen"],
    preview: "https://www.cell.com/cell-metabolism/fulltext/S1550-4131(19)30507-8",
  },

  {
    year: 2017,
    title: "Hypoxia treatment reverses neurodegenerative disease in a mouse model of Leigh syndrome",
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
    title: "Spatial ordering of chromosomes enhances the fidelity of chromosome partitioning in cyanobacteria",
    authors: "I. H. Jain*, V. Vijayan*, E. K. O'Shea (*equal contribution)",
    journal: "PNAS",
    details: "109 (34), 13638–13643",
    href: "https://www.pnas.org/doi/10.1073/pnas.1211144109",
    topics: [],
  },

  {
    year: 2011,
    title: "A high resolution map of a cyanobacterial transcriptome",
    authors: "V. Vijayan, I. H. Jain, E. K. O'Shea",
    journal: "Genome Biology",
    details: "12, R47",
    href: "https://genomebiology.biomedcentral.com/articles/10.1186/gb-2011-12-5-r47",
    topics: [],
  },

  {
    year: 2008,
    title: "Connexin43 (GJA1) is required in the population of dividing cells during fin regeneration",
    authors: "A. D. Hoptak-Solga, S. Nielsen, I. Jain, R. Thummel, D. R. Hyde, M. K. Iovine",
    journal: "Developmental Biology",
    details: "317, 541–548",
    href: "https://doi.org/10.1016/j.ydbio.2008.02.051",
    topics: [],
  },

  {
    year: 2007,
    title: "Bone growth in zebrafish fins occurs via multiple pulses of cell proliferation",
    authors: "I. Jain, C. Stroka, J. Yan, W.-M. Huang, M. K. Iovine",
    journal: "Developmental Dynamics",
    details: "236, 2668–2674",
    href: "https://doi.org/10.1002/dvdy.21270",
    topics: [],
  },

  {
    year: 2003,
    title: "Inhomogeneous evolution of a glass surface via free, rapid expansion",
    authors: "A. Sharma, H. Jain, J. O. Carnali, I. H. Jain",
    journal: "Applied Physics Letters",
    details: "83 (14), 2802–2804",
    href: "https://doi.org/10.1063/1.1614841",
    topics: [],
  },
];
