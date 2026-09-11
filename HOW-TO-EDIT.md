# How to edit the Jain Lab site

**The short version:** all the content lives in the `data/` folder, in five plain text files. Nothing else needs to be touched. You can either edit those files yourself, or just ask Claude.

---

## Open it right now

Double-click `index.html`. It opens in your browser and works fully offline — no server, no install, no build step.

---

## The only folder that matters

```
data/
  site.js          Lab name, tagline, menu, home page text, contact info
  team.js          Everyone in the lab, plus alumni
  publications.js  Every paper
  research.js      The research areas
  datasets.js      Interactive datasets
  gallery.js       Photos
```

Everything else (`assets/`, the `.html` files) is the machinery. You should not need to open it.

---

## Just ask Claude

This is the intended workflow. Point Claude at this folder and say things like:

> Add Priya Raman to the team — postdoc, she/her, PhD from Stanford, started this month. Here's her bio and headshot.

> Add our new Nature paper to the publications page.

> Bekah is now an Assistant Professor at Michigan — move her to alumni.

> Swap the home page headline to something about vitamins.

> Reorder the team so graduate students come before postdocs.

Claude edits the right file and you're done. This is the main reason the site is built this way.

---

## Or edit by hand

Open any file in `data/` with TextEdit, VS Code, or any plain text editor. Save. Refresh the browser.

### Adding a lab member

Open `data/team.js`. Find the group they belong to, copy an existing block, and change the text:

```js
{
  group: "Postdoctoral Fellows",
  name: "Priya Raman",
  creds: "PhD",
  pronouns: "she/her",
  role: "Postdoctoral Fellow",
  tags: ["NIH F32 Fellow"],
  photo: "images/priya-raman.jpg",
  bio: "Priya received her undergraduate degree in ...",
},
```

- `group` must exactly match one of the names in `GROUP_ORDER` at the top of the file.
- `tags` shows small blue chips. Use `[]` for none.
- If you leave `photo` blank (`""`), the card shows their initials instead. It won't break.
- The `bio` is shown in full on the page — nobody has to click to read it.
- Keep the comma after the closing `}`.

**To remove someone:** delete their whole `{ ... }` block.
**To reorder:** move blocks up or down.

### Adding a publication

Open `data/publications.js` and add a block at the top:

```js
{
  year: 2026,
  title: "Short display title",
  authors: "A. Author, B. Author, I. H. Jain",
  journal: "Nature",
  details: "612, 88–94",              // optional
  href: "https://doi.org/...",
  featured: true,                      // shows it on the home page
  preprint: false,                     // true = filed under Preprints
  topics: ["Oxygen"],                  // "Oxygen" and/or "Vitamins", or [] 
  news: [
    { label: "Gladstone: headline here", href: "https://..." },
  ],
  video: "https://youtu.be/...",       // optional
},
```

The page sorts by `year` automatically and builds the year headings for you.

There are two filter rows. **Topic** is built from the `topics` field — currently just Oxygen and Vitamins. **Type** is built from `preprint`, splitting the list into Published and Preprints. Both combine with the search box.

Six older papers — the cyanobacteria, zebrafish, glass-surface and ferroptosis work — have `topics: []` because they're neither oxygen nor vitamin research. They appear under "All topics" but not under either theme. If you'd rather they had their own chip, say the word and I'll add one.

### Adding a dataset

Open `data/datasets.js` and copy an existing block:

```js
{
  title: "Hypoxia Tissue Metabolomics",
  href: "https://jain-lab-ucsf.github.io/hypoxia-metabolomics/",
  year: 2026,
  theme: "Oxygen",                 // sets the accent colour, like the research page
  lead: "Ayush Midha",             // who built it
  summary: "One or two sentences on what's in it.",
  facts: ["7 tissues", "10 conditions"],   // small chips
  tools: ["Volcano plots", "Heat maps"],   // what you can do once you're there
  paper: null,                     // or { label: "...", href: "https://..." }
  draft: false,                    // true hides it
},
```

Datasets live on their own tab. Links open in a new tab so people don't lose the lab site.

### Research figures and headings

The Research page headline changes with the tab you're on. Those three versions live at the top of `data/research.js` in `THEME_INTRO` — edit the `headline` and `blurb` for All, Oxygen, and Vitamins.

Each point has a simple icon in a pale blue circle, drawn as an **SVG** in `assets/figures/`. SVGs are code, not pixels, so they stay sharp at any size and load in under a kilobyte. They use the brand blues directly, so changing `--deep` and `--sky` recolors them too.

| File | Icon |
|---|---|
| `icon-toxicity.svg` | a curve that peaks then falls off at both ends |
| `icon-altitude.svg` | a mountain peak |
| `icon-dial.svg` | a dial with the needle turned down |
| `icon-vitamin.svg` | a capsule |
| `icon-discover.svg` | a magnifying glass over a question mark |

To change one, just describe what it should show and I'll redraw it.

### Gallery photos

All 75 photos live in this project at `images/gallery/` — the gallery no longer depends on Wix at all.

They are listed in `data/gallery.js` in **download order, most recent first**. Each line carries its position and the timestamp it was downloaded, so you can always see where a photo sits:

```js
{ src: "images/gallery/01-316e3f3792.webp", w: 1400, h: 1050, caption: "" },   // #1 · downloaded 2026-08-14 15:59:42
```

- **To reorder:** move lines up or down. The page renders them top to bottom.
- **To add:** drop the file in `images/gallery/` and add a line at the top.
- **To remove:** delete the line.
- **Captions** show under the photo when enlarged, and are read aloud by screen readers. They're empty right now — worth filling in for the ones with a story.
- `w` and `h` are the pixel dimensions; they reserve the right space so the page doesn't jump around while photos load.

The originals were AVIF files straight from Wix. They're converted to WebP at up to 1400px — about 171 KB each, 13 MB for the whole set, and every photo loads only when you scroll to it.

Clicking a photo opens it full screen. From there, **← and → step through all 75**, the on-screen arrows do the same, swiping works on a phone, and Escape closes it.

### Changing the menu, headline, or contact info

All in `data/site.js`. To rename a menu tab, change its `label`. To remove one, delete its line.

The mountain painting on the home page is `hero.image` in the same file. It's the one image still loading from Wix — download it and drop it in as `images/hero.png`, then change that one line, and the site is completely free of Wix.

---

## Brand system

The site is built to the JainLab brand family sheet.

**Colors** — all at the top of `assets/style.css`:

```css
--deep:   #1b78b7;   /* deep blue  */
--sky:    #55b5eb;   /* sky blue   */
--shadow: #12658f;   /* shadow     */

--vit:    #b0461e;   /* burnt orange — vitamin research */
```

Change those and the entire site re-themes.

**Two research colors.** The brand blues carry the site and all the oxygen work. Vitamin work is burnt orange, so the two halves of the lab read apart instantly. This is automatic: anything marked `theme: "Vitamins"` in `data/research.js` — or tagged `"Vitamins"` in `topics` in `data/publications.js` — picks up the orange on its own. You never set a color by hand.

It shows up as: the icon circle and number badge on each research aim, the whole page header washing to that color when you switch tabs, the Vitamins filter button, the label on the home page teasers, and a slim tick beside vitamin papers on the Publications page.

One thing to know: the research icons are drawn in their color, so `icon-vitamin.svg` and `icon-discover.svg` are orange files while the three oxygen icons are blue. If you ever move an aim from one theme to the other, tell me and I'll recolor its icon to match.

**Type** — Inter throughout, per the sheet. SemiBold (600) for headings and labels, Medium (500) for navigation and small caps, Regular (400) for body copy. No second typeface.

**The lockup is live text, not an image.** Only the O2 mark is a PNG; "JAIN LAB" and the tagline are real HTML text set in Inter with the sheet's letterspacing and two-tone color. That means it stays perfectly sharp at every size, on every screen, and search engines can read it. The wording is in `data/site.js`:

```js
wordmark: "JAIN LAB",              // first word renders sky blue, rest deep blue
tagline:  "OXYGEN | VITAMINS | AGING",
```

Variants are generated automatically — horizontal in the header and footer, stacked in the hero, and reversed (white) on every dark section.

**Mark files** in `assets/`:

| File | Where it's used |
|---|---|
| `logo-mark.png` / `-white.png` | full mark with the subscript 2 — lockups |
| `logo-compact.png` / `-white.png` | compact icon, no subscript — small sizes |
| `favicon.png` | browser tab, uses the compact icon per the sheet's ≤64px rule |

**The speed lines** from the logo are reused as a design element — they mark every page kicker and appear in the hero. That motif is pure CSS (`.speedlines`), so it recolors with the brand variables.

If you have the logo as an **SVG**, send it over — the mark would then be vector everywhere too.

---

## Before launch

1. **The headshots are still hosted on Wix.** Gallery photos and research figures are now local, but the 23 team headshots still point at `static.wixstatic.com` URLs, capped at roughly 210px wide. If you cancel Wix they disappear. Drop the original headshot files into `images/team/` — the same way you did for the gallery — and I'll rewire the paths and the photos get noticeably sharper.

2. **The Vitamins research copy is still mine, not yours.** Your live site has a Vitamins page I couldn't pull the text from. The two questions and their figures are in place — send me the real wording and I'll swap it in.

3. **Headshot backgrounds.** To put everyone on one clean background, the subjects have to be cut out of their photos. Send the originals (see item 1) and I'll cut each person out, place them on a single neutral backdrop, and match the crop and eye-line across all 23.

4. **Check the team page once.** Every one of the 23 people has a photo and all 25 gallery images are in — but I couldn't open a browser in my sandbox to confirm each one renders. If any card shows initials instead of a face, that photo URL needs replacing; tell me which and I'll fix it.

---

## Publishing it

**Recommendation: GitHub Pages.** Free, fast, no monthly fee, and it keeps a full history of every change — so if an edit goes wrong you can see exactly what changed and roll it back. That history is worth a lot for a site several people touch.

Cloud Run (where the internal portal lives) is also fine and would match Arc's existing setup, but it's more machinery than a static site needs, and it costs money to keep running.

**Rough steps for GitHub Pages:**

1. Create a free GitHub account for the lab (or use an existing one).
2. Create a new repository named `jainlab-site`.
3. Upload this folder's contents to it.
4. Settings → Pages → Source: `main` branch, `/ (root)` → Save.
5. Wait a minute. Your site is live at `https://<account>.github.io/jainlab-site/`.
6. Once you're happy, point `ishajainlab.com` at it: add the custom domain in Settings → Pages, then update the DNS records where the domain is registered.

Keep the Wix site up until the new one is live and the domain has switched over. Nothing here touches Wix, so there's no risk to the current site.

Claude can walk you through any of these steps, or do the file preparation for you.

---

## If something breaks

Almost always it's a missing comma or a missing quote mark in a `data/` file. Open the page, press `Cmd+Option+I` (Mac) to open the browser console, and the error message will name the file. Or just tell Claude "the team page went blank" and paste the error.
