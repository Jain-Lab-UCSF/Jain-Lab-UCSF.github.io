/* ============================================================
   SITE SETTINGS
   Lab name, tagline, navigation menu, contact details, footer.
   Edit the text between the quote marks. Keep the quote marks.
   ============================================================ */

const SITE = {

  labName: "Jain Lab",

  // The logo wordmark. First word renders in sky blue, the rest in deep blue,
  // matching the brand sheet. Shown in caps automatically.
  wordmark: "JAIN LAB",

  // Tagline under the wordmark. The "|" dividers are styled for you.
  tagline: "OXYGEN | VITAMINS | AGING",

  // One-line description used by Google and link previews
  metaDescription:
    "The Isha Jain Lab at Arc Institute, Gladstone Institutes, and UCSF studies oxygen metabolism, hypoxia, vitamin metabolism, aging, and mitochondrial disease to uncover new therapies for human health.",

  // Institutions shown in the header strip on the home page
  affiliations: ["Arc Institute", "Gladstone Institutes", "UCSF"],

  // The navigation menu. To rename a tab, change the "label".
  // To remove a tab, delete its whole line. To reorder, move lines around.
  nav: [
    { label: "Research",     href: "research.html" },
    { label: "Team",         href: "team.html" },
    { label: "Publications", href: "publications.html" },
    { label: "Datasets",     href: "datasets.html" },
    { label: "Gallery",      href: "gallery.html" },
    { label: "Contact",      href: "contact.html" },
  ],

  // Home page hero
  hero: {
    headline: "We study oxygen and vitamin metabolism.",
    subhead:
      "Our work covers mitochondrial disease, high-altitude physiology, cancer, and aging.",
    // The mountain painting from the old home page. Shown beside the
    // headline. Swap the URL (or use "images/hero.png") to change it.
    image:
      "https://static.wixstatic.com/media/8e7e6b_17bb63c17331403280c67872a74778c0~mv2.png/v1/fill/w_960,h_1260,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/8e7e6b_17bb63c17331403280c67872a74778c0~mv2.png",
    imageAlt:
      "Painting of a mountain landscape shifting from deep blue to bright orange",
    buttons: [
      { label: "Our research",   href: "research.html",     style: "primary" },
      { label: "Join the lab",   href: "contact.html",      style: "ghost" },
    ],
  },

  contact: {
    email: "Isha.Jain@gladstone.ucsf.edu",
    addressLines: [
      "Jain Lab",
      "Gladstone Institutes, 4th Floor",
      "1650 Owens St.",
      "San Francisco, CA 94158",
    ],
    mapQuery: "1650 Owens St, San Francisco, CA 94158",

    joinBlurb:
      "We are looking for excited, motivated and curious new lab members — graduate students, visiting students, clinical fellows and post-docs — to join our team. Graduate students across Bay Area programs (UCSF Tetrad, UCSF BMS, UCSF–Berkeley Bioengineering, and others) are encouraged to apply.",

    // Bullets under "How to apply"
    applySteps: [
      "<strong>Post-docs:</strong> send a CV, a short description of past and current research interests, key publications, and 3 reference contacts.",
      "<strong>Graduate students:</strong> apply through your Bay Area program and reach out about rotations.",
      "<strong>Everyone else:</strong> email us describing your research interests.",
    ],
  },

  // Optional social / external links shown in the footer.
  // Delete a line to hide it.
  links: [
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=Yy1cKfMAAAAJ" },
    { label: "Arc Institute",  href: "https://arcinstitute.org" },
    { label: "Gladstone",      href: "https://gladstone.org" },
  ],

  footerNote: "© " + new Date().getFullYear() + " Jain Lab. All rights reserved.",
};
