/* ============================================================
   TEAM
   To ADD a person: copy an existing { ... } block, paste it in the
   right group, and change the text. Keep the comma at the end.
   To REMOVE a person: delete their whole { ... } block.
   To REORDER: move blocks up or down.

   Fields:
     name    - displayed in caps automatically
     creds   - degrees, e.g. "PhD" or "BS, MS" (optional)
     pronouns- e.g. "she/her" (optional)
     role    - job title
     tags    - extra labels shown as small chips, e.g. ["CIRM Fellow"]
     photo   - image URL (or "images/name.jpg" once you add local photos)
     bio     - paragraph
     group   - must match one of the GROUP_ORDER names below
   ============================================================ */

// Controls the order the sections appear on the Team page.
const GROUP_ORDER = [
  "Principal Investigator",
  "Staff Scientists",
  "Postdoctoral Fellows",
  "Graduate Students",
  "Research & Operations",
];

const TEAM = [

  /* ---------- Principal Investigator ---------- */
  {
    group: "Principal Investigator",
    name: "Isha Jain",
    creds: "PhD",
    pronouns: "she/her",
    role: "Associate Professor",
    tags: ["Arc Core Investigator"],
    photo: "https://static.wixstatic.com/media/8e7e6b_3695320e339749c6a9d66f9170206c43~mv2.jpg/v1/crop/x_0,y_4,w_524,h_712/fill/w_226,h_307,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2023%20headshot%20zoomed%20out_edited.jpg",
    bio: "Isha received her undergraduate degree in Chemical and Physical Biology from Harvard University. Subsequently, she joined the Harvard-MIT Program in Health Sciences and Technology. During her PhD, she discovered that hypoxia could serve as a therapy for mitochondrial disorders. This work led to a Phase 1 clinical trial. Isha began as a UCSF Sandler Faculty Fellow and then joined the Gladstone Institutes and UCSF in 2021, followed by becoming an Arc Core Investigator in 2025. She has received the NIH Early Independence Award (DP5), NIH Transformative R01 Award (TR01), HHMI Freeman Hrabowski Award (declined), Searle Scholar Award, Klingenstein-Simons Award and Keck Medical Research Award.",
  },

  /* ---------- Staff Scientists ---------- */
  {
    group: "Staff Scientists",
    name: "Galih Haribowo",
    creds: "PhD",
    pronouns: "he/him",
    role: "Staff Scientist",
    tags: ["CIRM Fellow"],
    photo: "https://static.wixstatic.com/media/8e7e6b_f7ee47a166ad4bbea5f537651fd2e763~mv2.jpg/v1/crop/x_0,y_99,w_887,h_1023/fill/w_208,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC2464_edited_edited.jpg",
    bio: "Galih received his bachelor's degree in Biology from Gadjah Mada University. He then joined the labs of Joost Holthuis at Utrecht University and Anne-Claude Gavin at the EMBL-Heidelberg to study protein-lipid interactions for his master's degree. During his PhD, he worked in the labs of Howard Riezman at University of Geneva and Maya Schuldiner at the Weizmann Institute of Science, studying the roles of sphingolipid in neurodegenerative disease and ischemia-reperfusion injury. Galih is currently interested in understanding nutrient dependencies of cells under hypoxia and ischemia.",
  },
  {
    group: "Staff Scientists",
    name: "Ankur Garg",
    creds: "PhD",
    pronouns: "she/her",
    role: "Staff Scientist",
    tags: ["CIRM Fellow"],
    photo: "https://static.wixstatic.com/media/8e7e6b_ac77a807041a40a7a10a4506e0b23916~mv2.jpg/v1/crop/x_1592,y_156,w_2653,h_3058/fill/w_208,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_BBB2868_JPG.jpg",
    bio: "Ankur attended IIT Delhi for her undergraduate studies in Biochemical Engineering and Biotechnology. She received her PhD in Molecular Biology and Genetics, in the lab of Xin Zhang at Columbia University studying the role of Fgf signaling in tear gland development. During a post-doc at UCSD, she worked in the lab of Xin Sun where she studied pulmonary neuroendocrine cells. She is now interested in studying the signaling mechanisms underlying hypoxia as a therapeutic intervention for neurodegenerative and metabolic disorders.",
  },
  {
    group: "Staff Scientists",
    name: "Navdar Sever",
    creds: "PhD",
    pronouns: "he/him",
    role: "Staff Scientist",
    tags: [],
    photo: "https://static.wixstatic.com/media/8e7e6b_5e1568d5cbd34e53aad2cd38d63e3e7a~mv2.jpg/v1/crop/x_0,y_629,w_3527,h_4033/fill/w_216,h_270,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/navdar_sever02.jpg",
    bio: "Navdar received his undergraduate degree in Molecular Biology and Genetics from Bilkent University in Turkey and his PhD in Cell Regulation from University of Texas Southwestern Medical Center at Dallas. During his PhD, he worked in the labs of Mike Brown and Joe Goldstein, where he discovered Insig-mediated regulation of mammalian HMG CoA reductase ubiquitination and degradation. Subsequently, he did postdoctoral research on Hedgehog signal transduction pathway at The Johns Hopkins University and Stanford University, and on lung surfactant at Harvard Medical School. After working at a food-tech startup for a couple of years, Navdar is excited to return to basic biomedical research.",
  },
  {
    group: "Staff Scientists",
    name: "Yohei Abe",
    creds: "PhD",
    pronouns: "he/him",
    role: "Staff Scientist",
    tags: [],
    photo: "https://static.wixstatic.com/media/8e7e6b_033c8b5942844da49fa7b1d8d900f5ff~mv2.jpg/v1/crop/x_0,y_21,w_554,h_693/fill/w_216,h_314,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Headshot_Yohei.jpg",
    bio: "Yohei earned his undergraduate and master's degrees in pharmacology from the Tokyo University of Pharmacy and Life Sciences and is a certified pharmacist. His early research focused on cardiac mitochondrial function in heart failure rodent models. During his PhD at the University of Tokyo in Dr. Juro Sakai's lab, he studied epigenetic regulation in adipocytes to explore new clinical applications for obesity and diabetes. As a postdoc with Dr. Christopher K. Glass at UC San Diego, he expanded his expertise to chromatin dynamics and the epigenetic regulation of macrophage responses to environmental signals. Yohei is interested in investigating how vitamins influence gene regulation under physiological and pathological conditions. His ultimate goal is to contribute to drug discovery by translating basic research into clinical applications.",
  },
  {
    group: "Staff Scientists",
    name: "John Widen",
    creds: "PhD",
    pronouns: "he/him",
    role: "Staff Scientist",
    tags: [],
    photo: "https://static.wixstatic.com/media/8e7e6b_54197d05e907445d8c349c1de000eaee~mv2.jpg/v1/crop/x_35,y_0,w_409,h_720/fill/w_216,h_378,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2024_nico_headshots-jw-47_720.jpg",
    bio: "John completed his undergraduate studies in chemistry at the University of Iowa. He matriculated to the University of Minnesota for graduate school where he worked in Daniel Harki's lab in the Department of Medicinal Chemistry, developing natural product-inspired cysteine-reactive small molecules towards transcription factors. After obtaining his PhD, John joined Matthew Bogyo's lab at Stanford University in the Department of Pathology as a post-doctoral scholar. He developed quenched fluorescent substrates for in vivo imaging and fluorescence-guided surgery applications. John was awarded an NIH Ruth L. Kirschstein Individual National Research Service Award (F32) and an American Cancer Society Postdoctoral Award. John has greater than five years of experience as a medicinal chemist in biotech, developing small-molecule therapeutics towards challenging oncology and neurodegenerative drug targets. He has contributed to more than 7 patent applications. At Arc Institute, John is focused on the discovery and development of therapeutics towards novel drug targets involved in age-related diseases.",
  },

  /* ---------- Postdoctoral Fellows ---------- */
  {
    group: "Postdoctoral Fellows",
    name: "Yolanda Martí-Mateos",
    creds: "PhD",
    pronouns: "she/her",
    role: "Postdoctoral Fellow",
    tags: ["CIRM Fellow"],
    photo: "https://static.wixstatic.com/media/8e7e6b_2ff6f2765292423e9dafb6224a641f24~mv2.jpg/v1/crop/x_1558,y_84,w_2504,h_3303/fill/w_206,h_272,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_BBB2887_JPG.jpg",
    bio: "Yolanda received her undergraduate degree in Biochemistry from Universidad Autónoma de Madrid. There, she worked at the Biochemistry Department to study mitochondrial cardiomyopathy models in Drosophila melanogaster. For her PhD, she joined Dr. José Antonio Enríquez's lab at the Spanish National Center for Cardiovascular Research (CNIC) to work on murine models for heart failure therapies targeting mitochondrial protease OMA1. Following her work on age-associated chronic liver disease, she became interested in the study of aging etiology. At the Jain Lab, Yolanda is excited to be studying how molecular oxygen can modulate the aging process.",
  },
  {
    group: "Postdoctoral Fellows",
    name: "Gautam Susarla",
    creds: "PhD",
    pronouns: "he/him",
    role: "Postdoctoral Fellow",
    tags: [],
    photo: "https://static.wixstatic.com/media/8e7e6b_ca9b197ab2e044dab2f0396938619da1~mv2.jpg/v1/crop/x_576,y_390,w_1219,h_1394/fill/w_216,h_247,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gautam_Headshot.jpg",
    bio: "Gautam was born and raised in India. He earned his undergraduate degree in Life Sciences from Osmania University in Hyderabad. Following this, he joined the integrated master's and PhD program at the Indian Institute of Science (IISc) in Bangalore, where he had the opportunity to explore multiple scientific disciplines. For his doctoral research, he joined Dr. Patrick D'Silva's lab, focusing on the role of DJ-1 and its homologs in alleviating metabolic stress in Parkinson's disease. His current research interests focus on deciphering regulatory proteins that interact with vitamins.",
  },
  {
    group: "Postdoctoral Fellows",
    name: "Jonathan Tai",
    creds: "MD, PhD",
    pronouns: "he/him",
    role: "Postdoctoral Fellow",
    tags: ["UCSF Physician-Scientist Pathway"],
    photo: "https://static.wixstatic.com/media/8e7e6b_420500668c104d09bc623e72caa8ce1a~mv2.jpeg/v1/crop/x_0,y_125,w_1316,h_1504/fill/w_210,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0.jpeg",
    bio: "Jon received his undergraduate degree in Biochemistry from the University of Illinois at Urbana-Champaign. He subsequently completed his medical and graduate training at the University of Wisconsin–Madison, where he worked in the lab of David Pagliarini studying coenzyme Q biosynthesis. Jon is currently a clinical pathology resident at UCSF through the Physician-Scientist Pathway.",
  },
  {
    group: "Postdoctoral Fellows",
    name: "Rachael McMinimy",
    creds: "PhD",
    pronouns: "she/her",
    role: "Postdoctoral Fellow",
    tags: [],
    photo: "https://static.wixstatic.com/media/8e7e6b_5a57acbe0176404f9eeb16de58b37043~mv2.jpg/v1/crop/x_0,y_0,w_1058,h_1209/fill/w_210,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Rachael%20McMinimy.jpg",
    bio: "Rachael grew up in Bar Harbor, Maine and attended Oberlin College, where she majored in biology and neuroscience. Following her graduation, she worked as a research technician in Dr. Samara Reck-Peterson's lab at UCSD studying regulation of the motor protein, dynein. For her PhD, she joined Dr. Michael Rapé's lab at UC Berkeley where she investigated how reactive oxygen species regulate mitochondrial metabolism. Outside of lab, Rachael enjoys spending time outside and teaching her cat new tricks.",
  },
  {
    group: "Postdoctoral Fellows",
    name: "Rebekah Nicholson",
    creds: "PhD",
    pronouns: "she/her",
    role: "Postdoctoral Fellow",
    tags: [],
    photo: "https://static.wixstatic.com/media/8e7e6b_d81f168995c142cf8f266c8c5327d577~mv2.jpg/v1/crop/x_89,y_0,w_389,h_445/fill/w_210,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/nicholson_headshot_720.jpg",
    bio: "Bekah grew up in Whitefish, Montana, and received her undergraduate degree in Nutrition Science from Montana State University. She moved on to complete her MS and PhD at the University of Utah under the joint supervision of Scott Summers and Will Holland characterizing human genetic variants affecting sphingolipid metabolism and studying the role of ceramides in metabolic and renal pathologies. In the Jain lab, Bekah will focus on investigating vitamin-protein interactions. In her free time, Bekah loves outdoor activities with her dog, exploring new places, and playing music.",
  },
  {
    group: "Postdoctoral Fellows",
    name: "Biki Kundu",
    creds: "PhD",
    pronouns: "he/him",
    role: "Postdoctoral Fellow",
    tags: [],
    photo: "https://static.wixstatic.com/media/8e7e6b_628499d17677403d9adca6cee39adac8~mv2.jpg/v1/crop/x_338,y_311,w_591,h_737/fill/w_210,h_262,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Biki%20Headshot.jpg",
    bio: "Biki grew up in India and received his undergraduate degree from the Indian Institute of Technology Kharagpur. He completed his PhD in Systems, Synthetic, and Physical Biology at Rice University in the lab of Caroline Ajo-Franklin, where he investigated electron flux in electroactive bacteria and engineered bioelectronic interfaces for environmental sensing and biomanufacturing. At the Jain Lab, Biki is pivoting to mammalian systems to interrogate the control architecture of human metabolism and test how pathway rewiring shapes cellular physiology in health and disease. Outside the lab, Biki is still working out life's larger questions and has concluded that cooking is always a reasonable place to start.",
  },
  {
    group: "Postdoctoral Fellows",
    name: "Yaereen Dho",
    creds: "PhD",
    pronouns: "she/her",
    role: "Postdoctoral Fellow",
    tags: [],
    photo: "https://static.wixstatic.com/media/8e7e6b_91affc5a54174ebcb686d23de7e38d41~mv2.jpeg/v1/crop/x_25,y_0,w_1372,h_1568/fill/w_210,h_284,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0.jpeg",
    bio: "Yaereen received her BS in Chemistry (specialization in biochemistry) from New York University Abu Dhabi, where she worked in Prof. Ali Trabolsi's lab developing triphenylphosphine-modified gold nanoparticles for photothermal chemotherapy and covalent organic frameworks loaded with AuNPs for catalysts. She then moved to Stanford for a PhD, where she joined Prof. Elizabeth Sattely's lab for research on the discovery and characterization of new enzymes and intermediates involved in the biosynthesis of medicinal plant molecules. In the Jain lab, Yaereen is interested in investigating potential new micronutrients and vitamin mechanisms. Outside the lab, she enjoys running, singing, and playing the piano.",
  },

  /* ---------- Graduate Students ---------- */
  {
    group: "Graduate Students",
    name: "Brandon Desousa",
    creds: "BS",
    pronouns: "he/him",
    role: "BMS Graduate Student",
    tags: ["NDSEG Fellow"],
    photo: "https://static.wixstatic.com/media/8e7e6b_dc9f0c83d2ef4271803c384251b96d85~mv2.jpg/v1/crop/x_1840,y_133,w_2052,h_2367/fill/w_208,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_BBB2932_JPG.jpg",
    bio: "Brandon was born and raised in South Florida. He received a BS in Biochemistry and Neuroscience at the University of Miami. There, he worked on how neural stem cells can contribute to recovery after a brain injury. He then joined Dr. Ajit Divakaruni's mitochondrial bioenergetics lab at UCLA and studied the bioenergetics of glioblastoma and macrophage inflammatory activation. Outside of the lab, Brandon enjoys discovering new films at independent cinemas, and working towards crafting the perfect cup of coffee.",
  },
  {
    group: "Graduate Students",
    name: "Brandon Chew",
    creds: "BS",
    pronouns: "he/him",
    role: "PSPG Graduate Student",
    tags: ["NSF Fellow"],
    photo: "https://static.wixstatic.com/media/8e7e6b_99a4076d842845d7ae402a038ab05bcb~mv2.jpg/v1/crop/x_1824,y_243,w_1998,h_2305/fill/w_208,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_BBB2979_JPG.jpg",
    bio: "Brandon was born and raised in Hawaii on the island of Oahu. He received a BS in chemical engineering from the University of Southern California. At USC, he worked in the lab of Dr. Nicolas Graham where he helped to develop a protocol for enriching and detecting protein methylation via liquid chromatography-mass spectroscopy and analyzed multiple public data sets to determine metabolic pathway dependencies in cancer cell lines. Outside of lab, Brandon enjoys hiking, playing video games, and exploring ramen shops.",
  },
  {
    group: "Graduate Students",
    name: "Ayush Midha",
    creds: "BS",
    pronouns: "he/him",
    role: "Tetrad MD/PhD Student",
    tags: ["NIH F30 Fellow"],
    photo: "https://static.wixstatic.com/media/8e7e6b_b85dbedefa674ba089f89086406a8447~mv2.jpg/v1/crop/x_1769,y_179,w_2432,h_2877/fill/w_224,h_266,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_BBB2949_JPG.jpg",
    bio: "Ayush grew up in San Jose, California, and attended Harvard University, where he majored in developmental biology. As an undergraduate student, he worked in the labs of Dr. Susan Bonner-Weir and Dr. Cristina Aguayo-Mazzucato at Joslin Diabetes Center. There, he studied mechanisms of aging in pancreatic beta-cells and the secretory changes associated with cellular senescence. At UCSF, Ayush is excited about advocating for universal healthcare and studying metabolism in physiology and disease. In his free time, he loves watching and playing basketball, experimenting with new recipes on his cast-iron skillet, and seeing new movies.",
  },
  {
    group: "Graduate Students",
    name: "Will Flanigan",
    creds: "BS",
    pronouns: "he/him",
    role: "Bioengineering Graduate Student",
    tags: ["NIH F31 Fellow"],
    photo: "https://static.wixstatic.com/media/8e7e6b_414af7f5f2a945eb9c4ec5e2d85d631c~mv2.jpeg/v1/crop/x_175,y_86,w_568,h_632/fill/w_215,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/092D428C-18AF-4A72-B621-A086BF3CD5FE_1_105_c.jpeg",
    bio: "Will was born and raised in Madison, Wisconsin. He attended UW-Madison, earning his BS in Biomedical Engineering and Biochemistry. There, he worked in the lab of Dr. Pam Kreeger studying the microenvironmental factors that drive metastasis in ovarian cancer. At UCSF, Will is excited to investigate cardiac hypoxia/ischemia using iPSC-derived cardiac cell types. Outside of lab, Will loves to run and is learning how to make the perfect charcuterie board.",
  },
  {
    group: "Graduate Students",
    name: "Helen Huynh",
    creds: "BS, MS",
    pronouns: "she/her",
    role: "BMS Graduate Student",
    tags: [],
    photo: "https://static.wixstatic.com/media/8e7e6b_95e1089dcd82442c9c45492a726329cc~mv2.jpg/v1/crop/x_2128,y_201,w_1837,h_1847/fill/w_210,h_211,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/455A2205_JPG.jpg",
    bio: "Helen grew up in Fremont, California, and attended the University of California, San Diego, where she earned a BS and MS in Biology. At UCSD, she worked in the lab of Dr. Xi Fang studying the DELE1-mediated mitochondrial stress response in murine models of mitochondrial and acquired cardiomyopathies. In her free time, she likes to crochet, cook, and read.",
  },
  {
    group: "Graduate Students",
    name: "Caitlyn Dang",
    creds: "BS",
    pronouns: "she/her",
    role: "BMS Graduate Student",
    tags: [],
    photo: "https://static.wixstatic.com/media/8e7e6b_35045180d478434f8f148fa2282e6aa3~mv2.jpg/v1/crop/x_0,y_135,w_2054,h_2299/fill/w_210,h_248,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/dang_2025.jpg",
    bio: "Caitlyn was raised in the Chicagoland area and majored in biochemistry at Loyola University Chicago where she worked with Dr. Joerg Zimmermann to synthesize fluorescent HIV glycoproteins for use in laser femtosecond spectroscopy. After graduating, she worked with Dr. Bin Jiang at Northwestern University to develop preclinical disease models and therapeutics for peripheral vascular diseases. At UCSF, she is excited to explore metabolic dynamics in angiogenesis. In her free time, Caitlyn loves enjoying a good latte and spending time with her cat, Miso.",
  },
  {
    group: "Graduate Students",
    name: "Maia Madison",
    creds: "BS",
    pronouns: "she/her",
    role: "MSTP MD/PhD Graduate Student",
    tags: [],
    photo: "https://static.wixstatic.com/media/8e7e6b_81d9e924c2dc44d6aba0752a877e2274~mv2.png/v1/crop/x_75,y_0,w_569,h_672/fill/w_210,h_270,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/maia_headshot_720.png",
    bio: "Maia attended Dartmouth College where she studied Ecology, Evolution, Environment & Society. During college, she worked in the Lee Lab designing immunogens to study influenza antibody repertoires, and at the Broad Institute/Photys Therapeutics using computational tools to design chimeric small molecules. As a Fulbright scholar in Eswatini, she evaluated next-generation sequencing diagnostics for drug-resistant tuberculosis, and at UCSF she has contributed to developing diagnostics for infection-associated chronic illnesses. Across these experiences, Maia has been fascinated by evolution and in the Jain Lab she is excited to study the role of oxygen in shaping metabolism and physiology.",
  },

  /* ---------- Research & Operations ---------- */
  {
    group: "Research & Operations",
    name: "Skyler Blume",
    creds: "BS",
    pronouns: "he/him",
    role: "Lab Manager and Research Associate",
    tags: [],
    photo: "https://static.wixstatic.com/media/8e7e6b_f60d962873d14c83bcd44cf30e5a4a3c~mv2.jpg/v1/crop/x_0,y_136,w_1001,h_1155/fill/w_214,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/_DSC2437_edited_edited.jpg",
    bio: "Skyler grew up in Davis, California and received his Bachelor's Degree from UC Berkeley, where he majored in Molecular and Cell Biology. There, he worked in the lab of Gertrude Buehring where he studied Bovine Leukemia Virus as a potential etiological agent of breast cancer. He went on to work for a pathology practice in San Diego, where he performed immunohistochemistry. In his free time he enjoys learning about new cuisines, exploring nature, and listening to podcasts.",
  },
  {
    group: "Research & Operations",
    name: "Nysa Adurkar",
    creds: "BS",
    pronouns: "she/her",
    role: "Research Associate",
    tags: [],
    photo: "https://static.wixstatic.com/media/8e7e6b_3381151796984d3fbf4bff1e62edf961~mv2.jpg/v1/crop/x_407,y_39,w_1400,h_1507/fill/w_210,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/127a9282_edited.jpg",
    bio: "Nysa grew up in Mumbai, India and received her undergraduate degree from Johns Hopkins University in Molecular and Cellular Biology and Economics. At JHU, she worked in the lab of Dr. Maria Golson, studying the role of targeted estrogen therapy in pancreatic beta-cells as a potential therapy for gestational diabetes. Outside of the lab, she enjoys trying new restaurants, hiking and watching new tv shows.",
  },
  {
    group: "Research & Operations",
    name: "Fangyuan Gao",
    creds: "PhD",
    pronouns: "she/her",
    role: "Mass Spectrometry Core Manager",
    tags: [],
    photo: "https://static.wixstatic.com/media/8e7e6b_11ee41a7a2624a4e8b0015d63c05c71b~mv2.jpg/v1/crop/x_0,y_72,w_3024,h_3888/fill/w_210,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/unnamed.jpg",
    bio: "Fangyuan is an analytical scientist specializing in mass spectrometry–based proteomics, lipidomics, and peptidomics. She has extensive experience developing and applying LC–MS workflows to support biological and translational research. At Arc, Fangyuan focuses on advancing analytical strategies to enable high-quality molecular characterization and to support collaborative projects across research teams.",
  },
  {
    group: "Research & Operations",
    name: "Emma Straight",
    creds: "BS",
    pronouns: "she/her",
    role: "Administrative Associate",
    tags: [],
    photo: "https://static.wixstatic.com/media/8e7e6b_936e0bf60eea488ab872e8eed270c147~mv2.jpg/v1/crop/x_1193,y_220,w_1598,h_1957/fill/w_214,h_253,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6240_JPG.jpg",
    bio: "Emma graduated from Santa Clara University and holds a Bachelor's Degree in both Psychology and Public Health. During her time in college, she worked in a psychology lab and served as a student manager for the public health department & school of law. In addition to Emma's professional pursuits, she has a passion for live music, skiing, surfing, exercise, film photography, and travel. These interests allow her to maintain a well-rounded perspective and bring creativity and adaptability to her work.",
  },
];


/* ============================================================
   ALUMNI
   Shorter format — no photo or bio needed.
   ============================================================ */

const ALUMNI = [
  { name: "Alan Baik",             creds: "MD",  role: "Postdoctoral Fellow",       dates: "Dec 2020 – Feb 2026",  now: "Assistant Professor / PI, UCSF", nowHref: "https://www.baik-lab.com", nowLabel: "Baik Lab" },
  { name: "Tej Joshi",             creds: "BS",  role: "Research Associate",         dates: "Jul 2023 – Feb 2026",  now: "Medical Student" },
  { name: "Onurkan Karabulut",     creds: "",    role: "CIRM Intern",                dates: "Aug 2023 – Aug 2024",  now: "" },
  { name: "Kirsten Chen",          creds: "PhD", role: "Graduate Student Researcher",dates: "Sep 2018 – Jun 2024",  now: "Life Science Strategy Consulting, L.E.K." },
  { name: "Saahil Chadha",         creds: "BA",  role: "Undergraduate Researcher",   dates: "Oct 2019 – Aug 2022",  now: "MD Student, Yale School of Medicine" },
  { name: "Yuyin Zhou",            creds: "PhD", role: "Research Associate",         dates: "Apr 2021 – Jun 2022",  now: "Technical Development Senior Scientist, Genentech" },
  { name: "Alec Barrios",          creds: "BS",  role: "Research Associate",         dates: "Jul 2019 – May 2021",  now: "PhD Student, Broad Institute of MIT & Harvard" },
  { name: "Bruno Barros Queliconi",creds: "PhD", role: "Senior Staff Scientist",     dates: "Nov 2019 – Apr 2021",  now: "Director, Corporate Strategy Group, AbbVie" },
];
