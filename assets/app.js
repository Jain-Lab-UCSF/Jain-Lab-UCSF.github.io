/* ============================================================
   JAIN LAB — site engine
   You should not normally need to edit this file.
   All content lives in the data/ folder.
   ============================================================ */

(function () {
  "use strict";

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) =>
    String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  // the three speed lines from the logo, reused as a section marker
  const SPEEDLINES   = `<span class="speedlines" aria-hidden="true"><i></i><i></i><i></i></span>`;
  const SPEEDLINES_R = `<span class="speedlines speedlines--reverse" aria-hidden="true"><i></i><i></i><i></i></span>`;

  /* ---------------- brand lockup ----------------
     The wordmark is live text in Inter, per the brand sheet, so it
     stays sharp at any size. Only the O2 mark is an image.
     opts: { tagline:true, stacked:true, reverse:true, compact:true } */

  function lockup(opts) {
    const o = opts || {};
    const cls = ["lockup"];
    if (o.stacked) cls.push("lockup--stacked");
    if (o.reverse) cls.push("lockup--reverse");

    // brand sheet: use the compact icon (no subscript 2) at small sizes
    const file = (o.compact ? "logo-compact" : "logo-mark") + (o.reverse ? "-white" : "") + ".png";

    const parts = String(SITE.wordmark || "JAIN LAB").split(" ");
    const name = `<i>${esc(parts[0])}</i>${parts.length > 1 ? " " + esc(parts.slice(1).join(" ")) : ""}`;

    const tag = o.tagline
      ? `<span class="lk-tag">${SITE.tagline.split("|").map(esc).join('<span>|</span>')}</span>`
      : "";

    return `<img class="lk-mark" src="assets/${file}" alt="" aria-hidden="true">
            <span><span class="lk-name">${name}</span>${tag}</span>`;
  }

  function lockupEl(tag, href, opts) {
    const o = opts || {};
    const cls = ["lockup"]
      .concat(o.stacked ? ["lockup--stacked"] : [])
      .concat(o.reverse ? ["lockup--reverse"] : [])
      .join(" ");
    const attrs = href ? ` href="${href}"` : "";
    return `<${tag} class="${cls}"${attrs}>${lockup(o)}</${tag}>`;
  }

  /* ---------------- header & footer ---------------- */

  function buildChrome() {
    const page = document.body.dataset.page || "";

    const navLinks = SITE.nav
      .map((n) => {
        const cur = n.href.replace(".html", "") === page ? ' aria-current="page"' : "";
        return `<a href="${esc(n.href)}"${cur}>${esc(n.label)}</a>`;
      })
      .join("");

    const header = `
      <a class="skip" href="#main">Skip to content</a>
      <header class="site-header">
        <div class="wrap bar">
          ${lockupEl("a", "index.html", { tagline: true })}
          <button class="nav-toggle" aria-expanded="false" aria-controls="site-nav" aria-label="Menu">☰</button>
          <nav class="site-nav" id="site-nav">${navLinks}</nav>
        </div>
      </header>`;

    const footLinks = (SITE.links || [])
      .map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`)
      .join("");

    const footer = `
      <footer class="site-footer">
        <div class="wrap row">
          <div>
            ${lockupEl("span", null, { tagline: true })}
            <div>${esc((SITE.affiliations || []).join(" · "))}</div>
            <div class="legal">${SITE.footerNote}</div>
          </div>
          <nav>${footLinks}<a href="contact.html">Contact</a></nav>
        </div>
      </footer>`;

    // The header and footer may already be baked into the HTML by the
    // pre-render step. Clear those out first so they aren't duplicated.
    $$(".site-header, .site-footer, a.skip").forEach((el) => el.remove());

    document.body.insertAdjacentHTML("afterbegin", header);
    document.body.insertAdjacentHTML("beforeend", footer);

    const btn = $(".nav-toggle");
    const nav = $(".site-nav");
    const sync = () => {
      if (window.innerWidth <= 860) {
        nav.hidden = btn.getAttribute("aria-expanded") !== "true";
      } else {
        nav.hidden = false;
      }
    };
    btn.addEventListener("click", () => {
      btn.setAttribute("aria-expanded", btn.getAttribute("aria-expanded") === "true" ? "false" : "true");
      sync();
    });
    window.addEventListener("resize", sync);
    sync();

    // page title
    if (!document.title) document.title = SITE.labName;
  }

  /* ---------------- home ---------------- */

  function buildHome() {
    const h = SITE.hero;
    const hero = $("#hero");
    if (!hero) return;

    // Wrap the last word of the headline in the light brand blue.
    const words = String(h.headline).trim().split(" ");
    const headline = words.length > 1
      ? esc(words.slice(0, -1).join(" ")) + " <em>" + esc(words[words.length - 1]) + "</em>"
      : esc(h.headline);

    hero.innerHTML = `
      ${h.image ? `
      <div class="hero-bg" role="img" aria-label="${esc(h.imageAlt || "")}"
           style="background-image:url('${h.image}')"></div>
      <div class="hero-scrim" aria-hidden="true"></div>` : ""}
      <div class="wrap">
        <div class="hero-copy">
          <div class="eyebrow">${SPEEDLINES_R}${esc(SITE.affiliations.join(" · "))}</div>
          <h1>${headline}</h1>
          <p class="lede">${esc(h.subhead)}</p>
          <div class="btn-row">
            ${h.buttons.map((b) =>
              `<a class="btn btn-${b.style === "primary" ? "primary" : "ghost"}" href="${esc(b.href)}">${esc(b.label)}</a>`
            ).join("")}
          </div>
        </div>
      </div>
      <span class="edge" aria-hidden="true"></span>`;

    // research teaser
    // One teaser per theme, so the home page shows both halves of the lab.
    const rt = $("#research-teaser");
    if (rt && typeof RESEARCH !== "undefined") {
      const picks = [];
      (typeof THEMES !== "undefined" ? THEMES : []).forEach((t) => {
        RESEARCH.filter((r) => r.theme === t).slice(0, 2).forEach((r) => picks.push(r));
      });
      const show = (picks.length ? picks : RESEARCH).slice(0, 4);
      rt.innerHTML = show.map((r) => `
        <a class="feature" href="research.html" data-theme="${esc(r.theme)}">
          <div class="yr">${esc(r.theme).toUpperCase()}</div>
          <div class="t">${esc(r.question)}</div>
          <div class="j">Read more →</div>
        </a>`).join("");
    }

    // featured publications
    const fp = $("#featured-pubs");
    if (fp && typeof PUBLICATIONS !== "undefined") {
      const feat = PUBLICATIONS.filter((p) => p.featured).slice(0, 6);
      fp.innerHTML = feat.map((p) => `
        <a class="feature" href="${esc(p.href || "publications.html")}" ${p.href ? 'target="_blank" rel="noopener"' : ""}>
          <div class="yr">${esc(p.year)}</div>
          <div class="t">${esc(p.title)}</div>
          <div class="j">${esc(p.journal)}${p.details ? " · " + esc(p.details) : ""}</div>
        </a>`).join("");
    }
  }

  /* ---------------- research ---------------- */

  function buildResearch() {
    const list = $("#research-list");
    if (!list || typeof RESEARCH === "undefined") return;

    const tabs = $("#theme-tabs");
    const headEl  = $("#research-headline");
    const blurbEl = $("#research-blurb");
    let active = "All";

    // Swap the page headline and blurb to match the selected theme, and
    // tint the page head so the whole header takes on that theme's colour.
    const pageHead = $(".page-head");
    const setIntro = () => {
      if (pageHead) pageHead.dataset.theme = active;
      const intro = (typeof THEME_INTRO !== "undefined" && THEME_INTRO[active]) || null;
      if (!intro) return;
      if (headEl)  headEl.textContent  = intro.headline;
      if (blurbEl) blurbEl.textContent = intro.blurb;
    };

    const render = () => {
      setIntro();
      const items = RESEARCH.filter((r) => active === "All" || r.theme === active);
      list.innerHTML = items.map((r, i) => `
        <article class="research-item${r.image ? "" : " no-image"}" data-theme="${esc(r.theme)}">
          ${r.image ? `<div class="fig"><img src="${esc(r.image)}" alt="${esc(r.imageAlt || "")}" loading="lazy"></div>` : ""}
          <div>
            <div class="num"><span>${String(i + 1).padStart(2, "0")}</span>${esc(r.theme)}</div>
            <h3>${esc(r.question)}</h3>
            <p>${r.body}</p>
          </div>
        </article>`).join("");
    };

    if (tabs) {
      const all = ["All"].concat(THEMES);
      tabs.innerHTML = all.map((t) =>
        `<button class="chip" aria-pressed="${t === "All"}" data-theme="${esc(t)}">${esc(t)}</button>`
      ).join("");
      tabs.addEventListener("click", (e) => {
        const b = e.target.closest(".chip");
        if (!b) return;
        active = b.dataset.theme;
        $$(".chip", tabs).forEach((c) => c.setAttribute("aria-pressed", c === b));
        render();
      });
    }

    render();
  }

  /* ---------------- team ---------------- */

  // If a photo URL ever fails, show the person's initials instead of a broken image.
  const FALLBACK =
    `this.onerror=null;` +
    `var d=this.parentNode;d.classList.add('empty');d.textContent=this.dataset.initials;`;

  function personCard(p) {
    const initials = p.name.split(/\s+/).map((w) => w[0]).slice(0, 2).join("");
    const photo = p.photo
      ? `<div class="ph"><img src="${esc(p.photo)}" alt="${esc(p.name)}" loading="lazy"
           data-initials="${esc(initials)}" onerror="${FALLBACK}"></div>`
      : `<div class="ph empty" aria-hidden="true">${esc(initials)}</div>`;
    const tags = (p.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
    return `
      <article class="person">
        ${photo}
        <div class="info">
          <h3 class="nm">${esc(p.name)}${p.creds ? ", " + esc(p.creds) : ""}</h3>
          <div class="rl">${esc(p.role)}${p.pronouns ? ` <span class="pr">(${esc(p.pronouns)})</span>` : ""}</div>
          ${tags ? `<div class="tags">${tags}</div>` : ""}
          <p class="bio">${esc(p.bio)}</p>
        </div>
      </article>`;
  }

  function buildTeam() {
    const root = $("#team-root");
    if (!root || typeof TEAM === "undefined") return;

    let html = "";

    GROUP_ORDER.forEach((g) => {
      const members = TEAM.filter((p) => p.group === g);
      if (!members.length) return;

      if (g === "Principal Investigator" && members.length === 1) {
        const pi = members[0];
        const i = TEAM.indexOf(pi);
        html += `
          <section class="team-group">
            <h2>${esc(g)}</h2>
            <div class="pi-card">
              ${pi.photo ? `<img src="${esc(pi.photo)}" alt="${esc(pi.name)}">` : ""}
              <div>
                <div class="nm">${esc(pi.name)}${pi.creds ? ", " + esc(pi.creds) : ""}</div>
                <div class="rl">${esc(pi.role)}${pi.pronouns ? " · " + esc(pi.pronouns) : ""}</div>
                <p>${esc(pi.bio)}</p>
              </div>
            </div>
          </section>`;
        return;
      }

      html += `
        <section class="team-group">
          <h2>${esc(g)}<span class="count">${members.length}</span></h2>
          <div class="people">${members.map((p) => personCard(p)).join("")}</div>
        </section>`;
    });

    // anyone whose group doesn't match GROUP_ORDER — still show them
    const orphans = TEAM.filter((p) => !GROUP_ORDER.includes(p.group));
    if (orphans.length) {
      html += `
        <section class="team-group">
          <h2>Other</h2>
          <div class="people">${orphans.map((p) => personCard(p)).join("")}</div>
        </section>`;
    }

    root.innerHTML = html;

    // alumni
    const al = $("#alumni-root");
    if (al && typeof ALUMNI !== "undefined") {
      al.innerHTML = ALUMNI.map((a) => `
        <div class="alum">
          <div>
            <div class="nm">${esc(a.name)}${a.creds ? ", " + esc(a.creds) : ""}</div>
            <div class="rl">${esc(a.role)}</div>
          </div>
          <div class="dt">${esc(a.dates)}</div>
          <div class="nw">${a.now ? `<span>Now</span>${esc(a.now)}${a.nowHref ? ` · <a href="${esc(a.nowHref)}" target="_blank" rel="noopener">${esc(a.nowLabel || "Website")}</a>` : ""}` : ""}</div>
        </div>`).join("");
    }
  }

  /* ---------------- publications ---------------- */

  function buildPubs() {
    const root = $("#pub-root");
    if (!root || typeof PUBLICATIONS === "undefined") return;

    // entries marked draft (or with no title yet) never reach the page
    const live = PUBLICATIONS.filter((p) => !p.draft && p.title);
    const sorted = live.slice().sort((a, b) => b.year - a.year);
    const allTopics = Array.from(new Set(sorted.flatMap((p) => p.topics || []))).sort();

    let topic = "All";
    let status = "All";
    let query = "";

    const chips = $("#pub-topics");
    if (chips) {
      chips.innerHTML = ["All"].concat(allTopics).map((t) =>
        `<button class="chip" aria-pressed="${t === "All"}" data-topic="${esc(t)}">${t === "All" ? "All topics" : esc(t)}</button>`
      ).join("");
      chips.addEventListener("click", (e) => {
        const b = e.target.closest(".chip");
        if (!b) return;
        topic = b.dataset.topic;
        $$(".chip", chips).forEach((c) => c.setAttribute("aria-pressed", c === b));
        render();
      });
    }

    // Published vs preprint
    const stat = $("#pub-status");
    if (stat) {
      stat.innerHTML = [["All", "All types"], ["Published", "Published"], ["Preprint", "Preprints"]]
        .map(([v, label]) =>
          `<button class="chip" aria-pressed="${v === "All"}" data-status="${esc(v)}">${esc(label)}</button>`
        ).join("");
      stat.addEventListener("click", (e) => {
        const b = e.target.closest(".chip");
        if (!b) return;
        status = b.dataset.status;
        $$(".chip", stat).forEach((c) => c.setAttribute("aria-pressed", c === b));
        render();
      });
    }

    const search = $("#pub-search");
    if (search) {
      search.addEventListener("input", () => { query = search.value.toLowerCase().trim(); render(); });
    }

    function render() {
      const items = sorted.filter((p) => {
        if (topic !== "All" && !(p.topics || []).includes(topic)) return false;
        if (status === "Preprint"  && !p.preprint) return false;
        if (status === "Published" &&  p.preprint) return false;
        if (!query) return true;
        return (p.title + " " + p.authors + " " + p.journal + " " + p.year).toLowerCase().includes(query);
      });

      const cnt = $("#pub-count");
      if (cnt) {
        const bits = [];
        if (topic !== "All")  bits.push(topic);
        if (status !== "All") bits.push(status);
        if (query)            bits.push(`“${query}”`);
        cnt.textContent =
          `${items.length} publication${items.length === 1 ? "" : "s"}` +
          (bits.length ? "  ·  " + bits.join("  ·  ") : "");
      }

      if (!items.length) {
        root.innerHTML = `<div class="empty-note">No publications match that filter.</div>`;
        return;
      }

      let html = "";
      let lastYear = null;
      items.forEach((p) => {
        if (p.year !== lastYear) {
          html += `<h2 class="pub-year">${esc(p.year)}</h2>`;
          lastYear = p.year;
        }
        const title = p.href
          ? `<a class="t" href="${esc(p.href)}" target="_blank" rel="noopener">${esc(p.title)}</a>`
          : `<span class="t">${esc(p.title)}</span>`;

        const extras = []
          .concat((p.news || []).map((n) => `<a href="${esc(n.href)}" target="_blank" rel="noopener">${esc(n.label)}</a>`))
          .concat(p.video ? [`<a href="${esc(p.video)}" target="_blank" rel="noopener">Video summary</a>`] : [])
          .concat(p.preview ? [`<a href="${esc(p.preview)}" target="_blank" rel="noopener">Journal preview</a>`] : []);

        const pills = []
          .concat(p.preprint ? [`<span class="pill preprint">Preprint</span>`] : [])
          .concat(p.review   ? [`<span class="pill review">Review</span>`] : [])
          .concat(p.featured ? [`<span class="pill featured">Selected</span>`] : []);

        // colour-code by topic: vitamin papers pick up the burnt orange
        const vt = (p.topics || []).includes("Vitamins") ? ' data-theme="Vitamins"' : "";

        html += `
          <article class="pub"${vt}>
            <div>
              ${title}
              <div class="a">${esc(p.authors)}</div>
              <div class="j"><em>${esc(p.journal)}</em>${p.details ? ", " + esc(p.details) : ""} (${esc(p.year)})</div>
              ${extras.length ? `<div class="extras">${extras.join("")}</div>` : ""}
            </div>
            <div class="side">${pills.join("")}</div>
          </article>`;
      });
      root.innerHTML = html;
    }

    render();
  }

  /* ---------------- datasets ---------------- */

  function buildDatasets() {
    const root = $("#datasets-root");
    if (!root || typeof DATASETS === "undefined") return;

    const live = DATASETS.filter((d) => !d.draft && d.title);
    if (!live.length) {
      root.innerHTML = `<div class="empty-note">No datasets published yet.</div>`;
      return;
    }

    root.innerHTML = live.map((d) => {
      const facts = (d.facts || []).map((f) => `<span class="tag">${esc(f)}</span>`).join("");
      const tools = (d.tools || []).map((t) => `<li>${esc(t)}</li>`).join("");
      const paper = d.paper && d.paper.href
        ? `<p class="ds-paper">Related paper:
             <a href="${esc(d.paper.href)}" target="_blank" rel="noopener">${esc(d.paper.label)}</a></p>`
        : "";
      return `
        <article class="dataset"${d.theme ? ` data-theme="${esc(d.theme)}"` : ""}>
          <div class="ds-head">
            <div>
              <h2 class="ds-title">
                <a href="${esc(d.href)}" target="_blank" rel="noopener">${esc(d.title)}</a>
              </h2>
              <div class="ds-meta">
                ${d.lead ? `Built by ${esc(d.lead)}` : ""}${d.lead && d.year ? "  ·  " : ""}${d.year ? esc(d.year) : ""}
              </div>
            </div>
            <a class="btn btn-primary ds-open" href="${esc(d.href)}" target="_blank" rel="noopener">Explore</a>
          </div>

          <p class="ds-summary">${esc(d.summary || "")}</p>
          ${facts ? `<div class="tags ds-facts">${facts}</div>` : ""}
          ${tools ? `<div class="ds-tools"><span class="ds-tools-label">In the browser</span><ul>${tools}</ul></div>` : ""}
          ${paper}
          <a class="ds-link" href="${esc(d.href)}" target="_blank" rel="noopener">${esc(d.href.replace(/^https?:\/\//, "").replace(/\/$/, ""))}</a>
        </article>`;
    }).join("");
  }

  /* ---------------- gallery ---------------- */

  function buildGallery() {
    const root = $("#gallery-root");
    if (!root || typeof GALLERY === "undefined") return;

    root.innerHTML = GALLERY.map((g, i) => {
      const dim = g.w && g.h ? ` width="${g.w}" height="${g.h}"` : "";
      return `<figure><img src="${esc(g.src)}" alt="${esc(g.caption || "Jain Lab photo " + (i + 1))}"
        title="${esc(g.caption || "")}" loading="lazy" decoding="async"${dim} data-i="${i}"></figure>`;
    }).join("");

    /* ---- lightbox with arrow-key navigation ---- */
    const lb = $("#lightbox");
    if (!lb) return;
    let at = 0;

    lb.innerHTML = `
      <button class="lb-nav lb-prev" aria-label="Previous photo">&#8249;</button>
      <figure class="lb-stage">
        <img alt="">
        <figcaption class="lb-cap"></figcaption>
      </figure>
      <button class="lb-nav lb-next" aria-label="Next photo">&#8250;</button>
      <button class="lb-close" aria-label="Close">&#10005;</button>`;

    const lbImg  = $("img", lb);
    const lbCap  = $(".lb-cap", lb);

    function show(i) {
      at = (i + GALLERY.length) % GALLERY.length;      // wraps around both ways
      const g = GALLERY[at];
      lbImg.src = g.src;
      lbImg.alt = g.caption || `Jain Lab photo ${at + 1}`;
      lbCap.textContent = g.caption
        ? `${g.caption}  ·  ${at + 1} / ${GALLERY.length}`
        : `${at + 1} / ${GALLERY.length}`;
      // preload the neighbours so arrowing through feels instant
      [at + 1, at - 1].forEach((n) => {
        const nb = GALLERY[(n + GALLERY.length) % GALLERY.length];
        if (nb) { const im = new Image(); im.src = nb.src; }
      });
    }

    root.addEventListener("click", (e) => {
      const img = e.target.closest("img");
      if (!img) return;
      show(+img.dataset.i);
      lb.showModal();
    });

    $(".lb-prev", lb).addEventListener("click", (e) => { e.stopPropagation(); show(at - 1); });
    $(".lb-next", lb).addEventListener("click", (e) => { e.stopPropagation(); show(at + 1); });
    $(".lb-close", lb).addEventListener("click", () => lb.close());

    // click the backdrop to close, but not the photo itself
    lb.addEventListener("click", (e) => {
      if (!e.target.closest(".lb-stage") && !e.target.closest(".lb-nav")) lb.close();
    });

    // ← and → step through; Escape closes (handled natively by <dialog>)
    lb.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); show(at + 1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); show(at - 1); }
    });

    // swipe on touch screens
    let x0 = null;
    lb.addEventListener("touchstart", (e) => { x0 = e.changedTouches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 45) show(at + (dx < 0 ? 1 : -1));
      x0 = null;
    }, { passive: true });
  }

  /* ---------------- contact ---------------- */

  function buildContact() {
    const c = SITE.contact;
    const blurb = $("#join-blurb");
    if (blurb) blurb.textContent = c.joinBlurb;

    const steps = $("#apply-steps");
    if (steps) steps.innerHTML = c.applySteps.map((s) => `<li>${s}</li>`).join("");

    const em = $("#contact-email");
    if (em) { em.href = "mailto:" + c.email; em.textContent = c.email; }

    const addr = $("#contact-address");
    if (addr) addr.innerHTML = c.addressLines.map(esc).join("<br>");

    const map = $("#contact-map");
    if (map) map.href = "https://maps.google.com/?q=" + encodeURIComponent(c.mapQuery);
  }

  /* ---------------- boot ---------------- */

  /* ---------------- brand polish ----------------
     Speed-line marker in every page kicker + CTA lockups + scroll reveal. */

  function decorate() {
    // page-head kickers get the logo's speed lines
    $$(".page-head .kicker").forEach((k) => {
      if (!k.querySelector(".speedlines")) k.insertAdjacentHTML("afterbegin", SPEEDLINES);
    });

    // reversed lockup in each dark call-to-action strip
    $$(".cta .cta-logo").forEach((el) => {
      el.outerHTML = lockupEl("span", null, { reverse: true, tagline: true, compact: false });
    });

    // gentle reveal on scroll
    const targets = $$(".feature, .research-item, .card");
    if (!("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -40px 0px", threshold: 0.02 });
    targets.forEach((t, i) => {
      t.classList.add("reveal");
      t.style.transitionDelay = Math.min(i % 8, 7) * 35 + "ms";
      io.observe(t);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    try { buildChrome(); }   catch (e) { console.error("header/footer:", e); }
    try { buildHome(); }     catch (e) { console.error("home:", e); }
    try { buildResearch(); } catch (e) { console.error("research:", e); }
    try { buildTeam(); }     catch (e) { console.error("team:", e); }
    try { buildPubs(); }     catch (e) { console.error("publications:", e); }
    try { buildDatasets(); } catch (e) { console.error("datasets:", e); }
    try { buildGallery(); }  catch (e) { console.error("gallery:", e); }
    try { buildContact(); }  catch (e) { console.error("contact:", e); }
    try { decorate(); }      catch (e) { console.error("decorate:", e); }
  });
})();
