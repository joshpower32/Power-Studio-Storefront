/* =====================================================================
   Power Studio — Freelancer storefront
   ---------------------------------------------------------------------
   Everything sellable is data-driven below. To ADD A NEW FRAMEWORK demo,
   add one entry to PORTFOLIO. To change pricing, edit PACKAGES / CARE /
   PHOTO / ADDONS. To take real payments, drop your Stripe Payment Link /
   PayPal.Me / e-transfer email into CONFIG.
   ===================================================================== */

const CONFIG = {
  pexelsKey: "4SuTxTJkprUsJAP1CZoSkd412wKx4EuXt7xfK5HzZf9DreiCe8Wv0twm",
  deposit: 99,                 // booking deposit (CAD), applied to the total
  // Live payments — paste your own links (see README):
  stripeLink: "https://buy.stripe.com/your-payment-link",
  paypalLink: "https://www.paypal.com/paypalme/yourstudio",
  etransferEmail: "hello@powerstudio.example",
  // Joshua's real photo for the About section (overrides Pexels). Swap freely.
  aboutPortraitImage: "assets/joshua-portrait.jpg",
  aboutPortraitQuery: "photographer with laptop portrait",
};

/* ---------- Framework demos (add a framework = add an entry) ---------- */
const PORTFOLIO = [
  { id: "flower", name: "Flower Shop", tagline: "Online store", url: "https://joshpower32.github.io/Flower-Shop-Framework/",
    desc: "A full e-commerce store with cart, checkout, and stock — for florists, bakeries, and any small shop selling online.",
    tags: ["E-commerce", "Cart & checkout"], query: "flower shop bouquet" },
  { id: "contractor", name: "Contractor / Trades", tagline: "Service business", url: "https://joshpower32.github.io/Contractor-Framework/",
    desc: "Project gallery, services, reviews, and a quote-request form — built for renovators, trades, and home services.",
    tags: ["Lead form", "Gallery"], query: "home renovation construction" },
  { id: "portfolio", name: "Portfolio & Resume", tagline: "Personal brand", url: "https://joshpower32.github.io/Portfolio-Resume-Framework/",
    desc: "A clean personal site with work gallery and résumé — for freelancers, creatives, and job seekers. 10 styles to choose from.",
    tags: ["Personal", "Multi-style"], query: "creative workspace desk" },
  { id: "car", name: "Car Dealership", tagline: "Inventory site", url: "https://joshpower32.github.io/Car-Dealership-Framework/",
    desc: "Searchable vehicle inventory, detail pages, and a live finance calculator — for dealers and private sellers.",
    tags: ["Inventory", "Calculator"], query: "car dealership cars" },
  { id: "realestate", name: "Real Estate Agent", tagline: "Agent site", url: "https://joshpower32.github.io/Real-Estate-Framework/",
    desc: "Property listings, mortgage calculator, and lead-capture forms that bring agents buyer and seller leads.",
    tags: ["Listings", "Lead capture"], query: "real estate house keys" },
  // + Add your next framework here (church/charity, restaurant booking, salon, gym…)
];

/* ---------- Website packages (competitive Hamilton-local pricing, CAD) ---------- */
const PACKAGES = [
  { id: "starter", name: "Starter Site", price: 599, for: "Portfolios, landing pages, simple one-page business sites.",
    features: ["Single-page, mobile-friendly site", "Personalised from a demo you like", "Contact form", "Free hosting setup", "1 round of revisions", "Live in about 1 week"] },
  { id: "business", name: "Business Site", price: 1199, featured: true, for: "Contractors, agents, shops, restaurants — most local businesses.",
    features: ["Up to 5 sections / pages", "Custom design + your branding", "Gallery or listings", "Lead-capture forms", "Basic SEO setup", "2 rounds of revisions", "Live in about 2 weeks"] },
  { id: "commerce", name: "Commerce / Pro", price: 2400, priceSuffix: "+", for: "Online stores, bookings, inventory, member logins.",
    features: ["Everything in Business", "E-commerce or dynamic data", "Online payments setup", "Booking / accounts (Firebase)", "Priority build", "3 rounds of revisions"] },
];

const ADDONS = [
  { name: "Custom photo session", price: "$199" },
  { name: "Logo & brand kit", price: "$149" },
  { name: "Extra page / section", price: "$99" },
  { name: "Copywriting (per page)", price: "$69" },
  { name: "Domain setup (1st yr incl.)", price: "$39" },
  { name: "Rush delivery", price: "+20%" },
];

const CARE = [
  { id: "basic", name: "Care Basic", price: 29, features: ["Hosting & domain management", "Security & software updates", "Up to 30 min of edits / month", "Email support"] },
  { id: "plus", name: "Care Plus", price: 59, featured: true, features: ["Everything in Basic", "1 hour of content updates / month", "Monthly analytics snapshot", "Priority support"] },
  { id: "pro", name: "Care Pro", price: 99, features: ["Everything in Plus", "Store / listing management", "Quarterly photo refresh", "Ongoing SEO & speed tuning"] },
];

const PHOTO = [
  { id: "realestate", name: "Real estate photos", price: "$199", unit: "/ property", desc: "Up to 25 edited photos, next-day delivery. Perfect for agents and rentals.", query: "real estate interior bright" },
  { id: "business", name: "Business & product", price: "$249", unit: "half-day", desc: "On-site shoot, ~30 edited photos of your space, team, or products.", query: "product photography" },
  { id: "portrait", name: "Portraits & headshots", price: "$149", unit: "session", desc: "30-minute session, 5 professionally edited images. Great for LinkedIn.", query: "professional headshot portrait" },
  { id: "event", name: "Event coverage", price: "$99", unit: "/ hour", desc: "Openings, parties, and community events. 2-hour minimum.", query: "event photography party" },
];

const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const $ = (id) => document.getElementById(id);
const money = (n) => "$" + Math.round(n).toLocaleString("en-CA");

/* ---------- SVG fallback ---------- */
function gradientSVG(seed = 0) {
  const h = (seed * 47 + 36) % 360;
  return `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Preview placeholder">
    <defs><linearGradient id="sg${seed}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${h},30%,28%)"/><stop offset="1" stop-color="hsl(${h},24%,16%)"/></linearGradient></defs>
    <rect width="320" height="200" fill="url(#sg${seed})"/>
    <circle cx="250" cy="56" r="30" fill="hsl(42,60%,55%)" opacity=".5"/></svg>`;
}

/* ---------- Pexels cache ---------- */
const IMG_CACHE_KEY = "studio_imgcache";
let imgCache = JSON.parse(localStorage.getItem(IMG_CACHE_KEY) || "{}");
const cachedUrl = (k) => imgCache[k]?.url || null;
async function fetchPexels(query, orientation = "landscape") {
  const res = await fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1&orientation=${orientation}`,
    { headers: { Authorization: CONFIG.pexelsKey } });
  if (!res.ok) return null;
  return (await res.json()).photos?.[0] || null;
}
function media(k, seed, alt) {
  const url = cachedUrl(k);
  if (url) return `<img src="${esc(url)}" alt="${esc(alt)}" loading="lazy">`;
  return gradientSVG(seed);
}
async function hydrate(items, prefix, seedBase, sel) {
  for (let i = 0; i < items.length; i++) {
    const it = items[i], k = prefix + it.id;
    if (cachedUrl(k)) continue;
    try {
      const photo = await fetchPexels(it.query);
      if (!photo) continue;
      imgCache[k] = { url: photo.src.large, photographer: photo.photographer };
      localStorage.setItem(IMG_CACHE_KEY, JSON.stringify(imgCache));
      const el = document.querySelector(`${sel}[data-k="${k}"]`);
      if (el) { const old = el.querySelector("svg, img"); if (old) old.outerHTML = media(k, i + seedBase, it.name); }
    } catch (_) { /* keep fallback */ }
  }
}

/* ---------- Render: work demos ---------- */
function renderWork() {
  $("workGrid").innerHTML = PORTFOLIO.map((p, i) => {
    const host = p.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `
    <a class="work-card" href="${esc(p.url)}" target="_blank" rel="noopener">
      <div class="browser-bar"><i></i><i></i><i></i><span class="browser-url">${esc(host)}</span></div>
      <div class="work-media" data-k="work${p.id}">${media("work" + p.id, i + 1, p.name)}<span class="work-tagline"><b>${esc(p.name)}</b></span></div>
      <div class="work-body">
        <p>${esc(p.desc)}</p>
        <div class="work-tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      </div>
    </a>`;
  }).join("") + `
    <div class="work-soon"><div><b>Your industry next?</b>More demos on the way — or tell me what you need and I’ll build it.</div></div>`;
}

/* ---------- Render: packages ---------- */
function renderPackages() {
  $("packageGrid").innerHTML = PACKAGES.map((p) => `
    <div class="package ${p.featured ? "featured" : ""}">
      ${p.featured ? `<span class="package-tag">Most popular</span>` : ""}
      <h3>${esc(p.name)}</h3>
      <p class="pkg-for">${esc(p.for)}</p>
      <div class="price">${money(p.price)}<small>${p.priceSuffix || ""}</small></div>
      <ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
      <button class="btn ${p.featured ? "btn-primary" : "btn-ghost"}" data-pkg="${p.id}">Get started</button>
    </div>`).join("");
  $("packageGrid").querySelectorAll("[data-pkg]").forEach((b) =>
    b.addEventListener("click", () => openCheckout(b.dataset.pkg)));
}

/* ---------- Render: add-ons, care, photography ---------- */
function renderAddons() {
  $("addonList").innerHTML = ADDONS.map((a) => `<li><span>${esc(a.name)}</span><b>${esc(a.price)}</b></li>`).join("");
}
function renderCare() {
  $("careGrid").innerHTML = CARE.map((c) => `
    <div class="care-card ${c.featured ? "featured" : ""}">
      <h3>${esc(c.name)}</h3>
      <div class="price">${money(c.price)}<small> / month</small></div>
      <ul>${c.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
      <button class="btn ${c.featured ? "btn-primary" : "btn-ghost"}" data-care="${c.id}">Choose ${esc(c.name)}</button>
    </div>`).join("");
  $("careGrid").querySelectorAll("[data-care]").forEach((b) =>
    b.addEventListener("click", () => { $("contactPackage").value = "Care plan"; toast("Care plan noted — finish the form below to start."); $("contact").scrollIntoView({ behavior: "smooth" }); }));
}
function renderPhoto() {
  $("photoGrid").innerHTML = PHOTO.map((p, i) => `
    <div class="photo-card">
      <div class="photo-media" data-k="photo${p.id}">${media("photo" + p.id, i + 1, p.name)}</div>
      <div class="photo-body">
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.desc)}</p>
        <span class="photo-price">${esc(p.price)} <small style="font-size:.7rem;color:var(--muted)">${esc(p.unit)}</small></span>
      </div>
    </div>`).join("");
}

/* ---------- Checkout / deposit modal ---------- */
const modal = $("checkoutModal");
function openCheckout(pkgId) {
  const p = PACKAGES.find((x) => x.id === pkgId);
  if (!p) return;
  $("checkoutBody").innerHTML = `
    <div class="co-head"><h3>Reserve: ${esc(p.name)}</h3><p class="muted">Pay a small deposit to book your spot — it’s applied to your total.</p></div>
    <div class="co-sum">
      <div class="co-line"><span>${esc(p.name)}</span><span>${money(p.price)}${p.priceSuffix || ""}</span></div>
      <div class="co-line"><span>Booking deposit (applied to total)</span><span>${money(CONFIG.deposit)}</span></div>
      <div class="co-line co-total"><span>Pay now to reserve</span><b>${money(CONFIG.deposit)}</b></div>
    </div>
    <div class="co-pay">
      <a class="btn btn-primary btn-block" href="${esc(CONFIG.stripeLink)}" target="_blank" rel="noopener">Pay deposit with card</a>
      <a class="btn btn-ghost btn-block" href="${esc(CONFIG.paypalLink)}" target="_blank" rel="noopener">Pay with PayPal</a>
      <button class="btn btn-ghost btn-block" id="coEtransfer">Pay by Interac e-Transfer</button>
    </div>
    <p class="co-note">Balance invoiced as the project progresses. The deposit reserves your spot and is fully credited to your total.</p>
    <p class="co-or">Not ready? <a href="#contact" id="coConsult">Book a free consult instead →</a></p>`;
  $("coEtransfer").addEventListener("click", () => {
    $("checkoutBody").querySelector(".co-pay").insertAdjacentHTML("afterend",
      `<div class="co-sum" style="margin-top:12px"><b>Interac e-Transfer</b><p style="margin:6px 0 0;font-size:.9rem">Send <b>${money(CONFIG.deposit)}</b> to <a href="mailto:${esc(CONFIG.etransferEmail)}">${esc(CONFIG.etransferEmail)}</a> and include the package name. I’ll confirm by email.</p></div>`);
  });
  $("coConsult").addEventListener("click", () => { closeCheckout(); $("contactPackage").value = p.name; });
  modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden";
}
function closeCheckout() { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }
$("checkoutClose").addEventListener("click", closeCheckout);
modal.addEventListener("click", (e) => { if (e.target === modal) closeCheckout(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCheckout(); });

/* ---------- Contact form ---------- */
$("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = new FormData(e.target).get("name") || "";
  e.target.reset();
  toast(`Thanks ${String(name).split(" ")[0]} — I’ll reply within one business day!`);
  $("contactNote").textContent = "Demo: captured locally. Wire to email/Firebase for real delivery (see README).";
});

/* ---------- Mobile nav + misc ---------- */
const navToggle = $("navToggle"), navLinks = $("navLinks");
navToggle.addEventListener("click", () => { const o = navLinks.classList.toggle("open"); navToggle.setAttribute("aria-expanded", o); });
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("open")));

let toastTimer;
function toast(msg) {
  const t = $("toast"); t.textContent = msg; t.hidden = false;
  requestAnimationFrame(() => t.classList.add("show"));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.classList.remove("show"); setTimeout(() => (t.hidden = true), 250); }, 3000);
}
$("year").textContent = new Date().getFullYear();

/* ---------- Init ---------- */
renderWork();
renderPackages();
renderAddons();
renderCare();
renderPhoto();
hydrate(PORTFOLIO, "work", 1, ".work-media");
hydrate(PHOTO, "photo", 1, ".photo-media");
(async () => {
  if (CONFIG.aboutPortraitImage) { $("aboutPortrait").style.backgroundImage = `url("${CONFIG.aboutPortraitImage}")`; return; }
  const k = "__about";
  if (cachedUrl(k)) { $("aboutPortrait").style.backgroundImage = `url("${cachedUrl(k)}")`; return; }
  try {
    const photo = await fetchPexels(CONFIG.aboutPortraitQuery, "portrait");
    if (photo) { imgCache[k] = { url: photo.src.large }; localStorage.setItem(IMG_CACHE_KEY, JSON.stringify(imgCache)); $("aboutPortrait").style.backgroundImage = `url("${photo.src.large}")`; }
  } catch (_) {}
})();
