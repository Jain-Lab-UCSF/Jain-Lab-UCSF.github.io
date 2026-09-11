/* ============================================================
   DATASETS
   Interactive data the lab has published for others to explore.

   To ADD one: copy a { ... } block and change the text.
   To REMOVE: delete the whole block.
   To REORDER: move blocks up or down — newest first is the habit.

   Fields:
     title   - name of the dataset
     href    - where it lives
     year    - shown in the corner
     theme   - "Oxygen" or "Vitamins"; sets the accent colour
     lead    - who built it
     summary - a sentence or two on what's in it
     facts   - short chips: sample counts, conditions, timepoints
     tools   - what you can do with it once you're there
     paper   - the related publication, if there is one:
               { label: "Midha et al., 2023, Cell Metabolism",
                 href: "https://..." }
     draft   - true hides it from the site
   ============================================================ */

const DATASETS = [

  {
    title: "Hypoxia Tissue Metabolomics",
    href: "https://jain-lab-ucsf.github.io/hypoxia-metabolomics/",
    year: 2026,
    theme: "Oxygen",
    lead: "Ayush Midha",
    summary:
      "Normalized polar metabolite abundances across brain, heart, liver, lung, muscle, plasma, and epididymal white adipose tissue. Mice were exposed to 8% or 11% oxygen for 3 hours, 24 hours, 1 week, or 3 weeks, or treated with the HIF stabilizer FG-4592 for 24 hours. Every tissue carries the same ten conditions, so panels are directly comparable.",
    facts: ["7 tissues", "10 conditions", "3 hours – 3 weeks", "Global metabolomics (HD4)"],
    tools: ["Time courses", "Volcano plots", "Heat maps", "CSV and PNG export"],
    paper: null,
  },

];
