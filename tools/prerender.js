/* ============================================================
   PRE-RENDER  —  bakes the rendered page into the HTML files

   WHY THIS EXISTS
   The site builds its content from data/*.js in the browser. People
   see everything, but a search engine that does not run JavaScript
   sees almost nothing — no team members, no publications, no bios.
   Google usually runs JavaScript; Bing is less reliable about it, and
   link-preview scrapers never do.

   This script loads each page the way a browser would, waits for the
   content to render, and writes the finished HTML back to the file.
   The JavaScript still runs afterwards for filters, the lightbox and
   the mobile menu — it just replaces the baked content with an
   identical copy, so nothing changes for a visitor.

   WHEN TO RUN IT
   After editing anything in data/. If you forget, the site is still
   completely correct for people — only the search-engine snapshot
   goes stale. Nothing breaks.

   HOW TO RUN IT
       npm install jsdom
       node tools/prerender.js

   Or just ask Claude to re-run it.
   ============================================================ */

const { JSDOM, VirtualConsole } = require("jsdom");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PAGES = [
  "index.html", "research.html", "team.html",
  "publications.html", "datasets.html", "gallery.html", "contact.html",
];

const IGNORE = /fonts\.googleapis|stylesheet|Could not load|Not implemented/i;

(async () => {
  let total = 0;

  for (const page of PAGES) {
    const file = path.join(ROOT, page);
    const errs = [];
    const vc = new VirtualConsole();
    vc.on("jsdomError", (e) => { if (!IGNORE.test(e.message)) errs.push(e.message); });
    vc.on("error", (...a) => errs.push(a.join(" ")));

    const dom = await JSDOM.fromFile(file, {
      runScripts: "dangerously",
      resources: "usable",
      pretendToBeVisual: true,
    });
    await new Promise((r) => setTimeout(r, 900));

    const d = dom.window.document;

    if (errs.length) {
      console.log(`SKIPPED ${page} — page reported errors, not overwriting:`);
      errs.forEach((e) => console.log("   " + e));
      dom.window.close();
      continue;
    }

    // The scroll-reveal animation starts elements at opacity 0. Strip it, so
    // the baked file is readable with JavaScript and CSS both switched off.
    d.querySelectorAll(".reveal").forEach((el) => {
      el.classList.remove("reveal", "in");
      el.style.removeProperty("transition-delay");
      if (!el.getAttribute("style")) el.removeAttribute("style");
      if (!el.getAttribute("class")) el.removeAttribute("class");
    });

    // Drop stamps left by earlier runs, plus the blank lines they leave behind,
    // so neither piles up one per run.
    [...d.body.childNodes].forEach((n) => {
      if (n.nodeType === 8 && /pre-rendered from data/.test(n.nodeValue)) n.remove();
    });
    while (d.body.firstChild && d.body.firstChild.nodeType === 3 &&
           !d.body.firstChild.nodeValue.trim()) {
      d.body.firstChild.remove();
    }

    // Note in the source that this file is generated, so nobody hand-edits it.
    const stamp = d.createComment(
      ` Content below was pre-rendered from data/*.js on ${new Date().toISOString().slice(0, 10)}. ` +
      `Edit the data files, then re-run tools/prerender.js. `
    );
    d.body.insertBefore(stamp, d.body.firstChild);

    const html = "<!DOCTYPE html>\n" + d.documentElement.outerHTML + "\n";
    fs.writeFileSync(file, html);

    const words = d.body.textContent.replace(/\s+/g, " ").trim().split(" ").length;
    console.log(`baked ${page.padEnd(19)} ${String(words).padStart(5)} words  ${(html.length / 1024).toFixed(0)} KB`);
    total++;
    dom.window.close();
  }

  console.log(`\n${total}/${PAGES.length} pages pre-rendered`);
})();
