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
  // Web3Forms access key — get a FREE one in 30s at https://web3forms.com
  // (enter joshpower32@hotmail.com, check your inbox, paste the key here).
  // Until this is set, the form falls back to opening your email app.
  web3formsKey: "118e9a29-bf8e-4f4b-b262-09ea5a1de6af",
  deposit: 99,                 // booking deposit (CAD), applied to the total
  // Live payments via Stripe only. Paste your Stripe Payment Link here —
  // the "Pay Now" button (packages + photo sessions) sends here.
  stripeLink: "https://buy.stripe.com/fZucN7dxt5IF17CcdP9oc00",
  // Joshua's real photo for the About section (overrides Pexels). Swap freely.
  aboutPortraitImage: "assets/joshua-portrait.jpg",
  aboutPortraitQuery: "photographer with laptop portrait",
};

/* ---------- Framework demos (add a framework = add an entry) ---------- */
const PORTFOLIO = [
  { id: "photography", name: "Photography Studio", tagline: "Creative portfolio", url: "https://joshpower32.github.io/Joes-Photography-Framework/",
    desc: "A bold, image-first site with a searchable gallery plus hire-me and contact pages — for photographers, videographers, and creatives.",
    tags: ["Gallery", "Creative"], query: "photographer camera", image: "assets/work/photography.jpg" },
  { id: "realestate", name: "Real Estate Agent", tagline: "Agent site", url: "https://joshpower32.github.io/Real-Estate-Framework/",
    desc: "For real estate agents, salespeople, and interior decorators — property listings, mortgage calculator, and lead-capture forms that bring you buyer and seller leads.",
    tags: ["Listings", "Lead capture"], query: "real estate house keys", image: "assets/work/realestate.jpg" },
  { id: "flower", name: "Flower Shop", tagline: "Online store", url: "https://joshpower32.github.io/Flower-Shop-Framework/",
    desc: "A full e-commerce store with cart, checkout, and stock — for florists, bakeries, and any small shop selling online.",
    tags: ["E-commerce", "Cart & checkout"], query: "flower shop bouquet", image: "assets/work/flower.jpg" },
  { id: "creator", name: "Creator Portfolio", tagline: "Models & influencers", url: "https://joshpower32.github.io/Creator-Portfolio-Framework/",
    desc: "Photo & video gallery, social media links, product shop, and exclusive membership tiers — for models, creators, influencers, and photographers.",
    tags: ["Gallery", "Video", "Shop", "Socials"], preview: "https://joshpower32.github.io/Creator-Portfolio-Framework/" },
  { id: "barbershop", name: "Barbershop", tagline: "Booking & services", url: "https://joshpower32.github.io/Barbershop-Framework/",
    desc: "Gallery, barber profiles, online booking, and services — for barbershops, salons, and grooming professionals.",
    tags: ["Booking", "Services"], preview: "https://joshpower32.github.io/Barbershop-Framework/" },
  { id: "contractor", name: "Contractor / Trades", tagline: "Service business", url: "https://joshpower32.github.io/Contractor-Framework/",
    desc: "Project gallery, services, reviews, and a quote-request form — built for renovators, trades, and home services.",
    tags: ["Lead form", "Gallery"], query: "home renovation construction", image: "assets/work/contractor.jpg" },
  { id: "portfolio", name: "Portfolio & Resume", tagline: "Personal brand", url: "https://joshpower32.github.io/Portfolio-Resume-Framework/",
    desc: "A clean personal site with work gallery and résumé — for freelancers, creatives, and job seekers. 10 styles to choose from.",
    tags: ["Personal", "Multi-style"], query: "creative workspace desk", image: "assets/work/portfolio.jpg" },
  { id: "car", name: "Car Dealership", tagline: "Inventory site", url: "https://joshpower32.github.io/Car-Dealership-Framework/",
    desc: "Searchable vehicle inventory, detail pages, and a live finance calculator — for dealers and private sellers.",
    tags: ["Inventory", "Calculator"], query: "car dealership cars", image: "assets/work/car.jpg" },
  // + Add your next framework here (church/charity, restaurant booking, salon, gym…)
];

/* ---------- Website packages (competitive Hamilton-local pricing, CAD) ---------- */
const PACKAGES = [
  { id: "starter", name: "Starter Site", price: 599, for: "Portfolios, landing pages, simple one-page business sites.",
    stripeLink: "https://buy.stripe.com/7sYeVfctp4EBeYsfq19oc01",
    features: ["Single-page, mobile-friendly site", "Personalised from a demo you like", "Contact form", "Free hosting setup", "1 round of revisions", "Live in about 1 week"] },
  { id: "business", name: "Business Site", price: 1199, featured: true, for: "Contractors, agents, shops, restaurants — most local businesses.",
    stripeLink: "https://buy.stripe.com/9B68wR50X2wtaIc4Ln9oc02",
    features: ["Up to 5 sections / pages", "Custom design + your branding", "Gallery or listings", "Lead-capture forms", "Basic SEO setup", "2 rounds of revisions", "Live in about 2 weeks"] },
  { id: "commerce", name: "Commerce / Pro", price: 2400, priceSuffix: "+", for: "Online stores, bookings, inventory, member logins.",
    stripeLink: "https://buy.stripe.com/8x2cN750Xb2Z03y2Df9oc03",
    features: ["Everything in Business", "E-commerce or dynamic data", "Online payments setup", "Booking / accounts (Firebase)", "Priority build", "3 rounds of revisions"] },
];

const ADDONS = [
  { name: "Custom photo session", price: "$199", stripeLink: "https://buy.stripe.com/9B63cx0KHfjf7w0b9L9oc04" },
  { name: "Logo & brand kit", price: "$149", stripeLink: "https://buy.stripe.com/4gMeVf3WT6MJg2w4Ln9oc05" },
  { name: "Extra page / section", price: "$99", stripeLink: "https://buy.stripe.com/dRm14pdxtgnj5nS3Hj9oc06" },
  { name: "Copywriting (per page)", price: "$69", stripeLink: "https://buy.stripe.com/6oU00ldxt7QN9E81zb9oc07" },
  { name: "Domain setup (1st yr incl.)", price: "$39", stripeLink: "https://buy.stripe.com/eVqfZjeBxc736rW0v79oc08" },
  { name: "Rush delivery", price: "+20%", stripeLink: "https://buy.stripe.com/00w8wR6515IF3fKelX9oc09" },
];

const CARE = [
  { id: "basic", name: "Care Basic", price: 29,
    stripeLink: "https://buy.stripe.com/9B6aEZ3WT4EB8A4a5H9oc0a",
    features: ["Hosting & domain management", "Security & software updates", "Up to 30 min of edits / month", "Email support"] },
  { id: "plus", name: "Care Plus", price: 59, featured: true,
    stripeLink: "https://buy.stripe.com/3cI00l0KHdb74jO7Xz9oc0b",
    features: ["Everything in Basic", "1 hour of content updates / month", "Monthly analytics snapshot", "Priority support"] },
  { id: "pro", name: "Care Pro", price: 99,
    stripeLink: "https://buy.stripe.com/fZu6oJ8d9gnj9E8cdP9oc0c",
    features: ["Everything in Plus", "Store / listing management", "Quarterly photo refresh", "Ongoing SEO & speed tuning"] },
];

const PHOTO = [
  { id: "realestate", name: "Real estate photos", price: "$199", unit: "/ property",
    stripeLink: "https://buy.stripe.com/dRm14p50Xb2Z9E891D9oc0e",
    desc: "Up to 25 edited photos, next-day delivery. Perfect for agents and rentals.", query: "real estate interior bright" },
  { id: "business", name: "Business & product", price: "$249", unit: "half-day",
    stripeLink: "https://buy.stripe.com/28E6oJ0KH2wtg2w0v79oc0f",
    desc: "On-site shoot, ~30 edited photos of your space, team, or products.", query: "product photography" },
  { id: "portrait", name: "Portraits & headshots", price: "$149", unit: "session",
    stripeLink: "https://buy.stripe.com/eVq14p795fjfbMg3Hj9oc0g",
    desc: "30-minute session, 5 professionally edited images. Great for LinkedIn.", query: "professional headshot portrait" },
  { id: "event", name: "Event coverage", price: "$99", unit: "/ hour",
    stripeLink: "https://buy.stripe.com/9B65kFgJF4EB8A4cdP9oc0h",
    desc: "Openings, parties, and community events. 2-hour minimum.", query: "event photography party" },
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
  // Parallel fetch so images arrive together instead of one-by-one.
  await Promise.all(items.map(async (it, i) => {
    const k = prefix + it.id;
    if (it.image) return;          // real screenshot/photo set — don't overwrite with stock
    if (cachedUrl(k)) return;
    try {
      const photo = await fetchPexels(it.query);
      if (!photo) return;
      imgCache[k] = { url: photo.src.medium, photographer: photo.photographer };
      localStorage.setItem(IMG_CACHE_KEY, JSON.stringify(imgCache));
      const el = document.querySelector(`${sel}[data-k="${k}"]`);
      if (el) { const old = el.querySelector("svg, img"); if (old) old.outerHTML = media(k, i + seedBase, it.name); }
    } catch (_) { /* keep fallback */ }
  }));
}

/* ---------- Render: work demos ---------- */
function renderWork() {
  $("workGrid").innerHTML = PORTFOLIO.map((p, i) => {
    const host = p.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
    const thumb = p.preview
      ? `<iframe src="${esc(p.preview)}" title="${esc(p.name)} live preview" loading="lazy" scrolling="no" tabindex="-1" aria-hidden="true"></iframe>`
      : p.image
        ? `<img src="${esc(p.image)}" alt="Live preview of the ${esc(p.name)} demo site" loading="lazy">`
        : media("work" + p.id, i + 1, p.name);
    return `
    <a class="work-card" href="${esc(p.url)}" target="_blank" rel="noopener">
      <div class="browser-bar"><i></i><i></i><i></i><span class="browser-url">${esc(host)}</span></div>
      <div class="work-media" data-k="work${p.id}">${thumb}<span class="work-tagline"><b>${esc(p.name)}</b></span></div>
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
    b.addEventListener("click", () => {
      const p = PACKAGES.find((x) => x.id === b.dataset.pkg);
      if (p) openCheckout({ name: p.name, priceLabel: money(p.price) + (p.priceSuffix || ""), stripeLink: p.stripeLink });
    }));
}

/* ---------- Render: add-ons, care, photography ---------- */
function renderAddons() {
  $("addonList").innerHTML = ADDONS.map((a) => `
    <li>
      <span>${esc(a.name)}</span>
      <span class="addon-right">
        <b>${esc(a.price)}</b>
        ${a.stripeLink ? `<a class="btn btn-ghost btn-sm addon-btn" href="${esc(a.stripeLink)}" target="_blank" rel="noopener">Buy</a>` : ""}
      </span>
    </li>`).join("");
}
function renderCare() {
  $("careGrid").innerHTML = CARE.map((c) => `
    <div class="care-card ${c.featured ? "featured" : ""}">
      <h3>${esc(c.name)}</h3>
      <div class="price">${money(c.price)}<small> / month</small></div>
      <ul>${c.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
      <a class="btn ${c.featured ? "btn-primary" : "btn-ghost"}" href="${esc(c.stripeLink)}" target="_blank" rel="noopener">Subscribe → ${esc(c.name)}</a>
    </div>`).join("");
}
function renderPhoto() {
  $("photoGrid").innerHTML = PHOTO.map((p, i) => `
    <div class="photo-card">
      <div class="photo-media" data-k="photo${p.id}">${media("photo" + p.id, i + 1, p.name)}</div>
      <div class="photo-body">
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.desc)}</p>
        <span class="photo-price">${esc(p.price)} <small style="font-size:.7rem;color:var(--muted)">${esc(p.unit)}</small></span>
        <button class="btn btn-ghost btn-sm btn-block" data-photo="${p.id}">Book this shoot</button>
      </div>
    </div>`).join("");
  $("photoGrid").querySelectorAll("[data-photo]").forEach((b) =>
    b.addEventListener("click", () => bookPhoto(b.dataset.photo)));
}

/* Book a photo session via the same Stripe deposit flow (date confirmed after). */
function bookPhoto(photoId) {
  const p = PHOTO.find((x) => x.id === photoId);
  if (!p) return;
  openCheckout({ name: p.name, priceLabel: `${p.price} ${p.unit}`, isPhoto: true, stripeLink: p.stripeLink });
}

/* ---------- Checkout / deposit modal (Stripe only) ---------- */
const modal = $("checkoutModal");
// item: { name, priceLabel, isPhoto }
function openCheckout(item) {
  if (!item) return;
  const isPhoto = !!item.isPhoto;
  $("checkoutBody").innerHTML = `
    <div class="co-head"><h3>${isPhoto ? "Book" : "Reserve"}: ${esc(item.name)}</h3>
      <p class="muted">${isPhoto
        ? "Pay a small deposit to request your session. I’ll confirm a date that works for both of us by email — and the deposit comes off your total."
        : "Pay a small deposit to book your spot — it’s applied to your total."}</p></div>
    <div class="co-sum">
      <div class="co-line"><span>${esc(item.name)}</span><span>${esc(item.priceLabel)}</span></div>
      <div class="co-line"><span>Booking deposit (applied to total)</span><span>${money(CONFIG.deposit)}</span></div>
      <div class="co-line co-total"><span>Pay now to ${isPhoto ? "request your session" : "reserve"}</span><b>${money(CONFIG.deposit)}</b></div>
    </div>
    <div class="co-pay">
      <a class="btn btn-primary btn-block" href="${esc(item.stripeLink || CONFIG.stripeLink)}" target="_blank" rel="noopener">Pay Now</a>
    </div>
    <p class="co-note">${isPhoto
      ? "After your deposit I’ll reach out to lock in a date. "
      : "Balance invoiced as the project progresses. The deposit reserves your spot and is fully credited to your total. "}Prices in CAD — no HST charged (small supplier). Payments are processed securely by Stripe. See <a href="#policies" id="coPolicies">deposits, taxes &amp; refunds</a>.</p>
    <p class="co-or">Not ready? <a href="#contact" id="coConsult">${isPhoto ? "Ask a question first →" : "Book a free consult instead →"}</a></p>`;
  $("coConsult").addEventListener("click", () => {
    closeCheckout();
    $("contactPackage").value = isPhoto ? "Photography only" : item.name;
    $("contact").scrollIntoView({ behavior: "smooth" });
  });
  $("coPolicies").addEventListener("click", closeCheckout);
  modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden";
}
function closeCheckout() { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }
$("checkoutClose").addEventListener("click", closeCheckout);
modal.addEventListener("click", (e) => { if (e.target === modal) closeCheckout(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeCheckout(); });

/* ---------- Contact form (real delivery via Web3Forms) ---------- */
const KEY_PLACEHOLDER = "YOUR_WEB3FORMS_ACCESS_KEY";
$("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);
  const firstName = String(fd.get("name") || "there").split(" ")[0];
  const btn = form.querySelector('button[type="submit"]');

  // No key set yet → fall back to opening the user's email app so no lead is lost.
  if (!CONFIG.web3formsKey || CONFIG.web3formsKey === KEY_PLACEHOLDER) {
    const subject = encodeURIComponent(`New project request — ${fd.get("name") || ""}`);
    const body = encodeURIComponent(
      `Name: ${fd.get("name") || ""}\nEmail: ${fd.get("email") || ""}\nBusiness: ${fd.get("business") || ""}\n` +
      `Interested in: ${fd.get("package") || ""}\nBudget: ${fd.get("budget") || ""}\n\n${fd.get("message") || ""}`);
    window.location.href = `mailto:joshpower32@hotmail.com?subject=${subject}&body=${body}`;
    toast("Opening your email app to send your request…");
    return;
  }

  // Real send.
  fd.append("access_key", CONFIG.web3formsKey);
  fd.append("subject", `🔔 NEW LEAD — ${fd.get("name") || "website"} (Power Studio Storefront)`);
  fd.append("from_name", "Power Studio Storefront");
  btn.disabled = true;
  const original = btn.textContent;
  btn.textContent = "Sending…";
  toast("Sending your request…");
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: fd,
    });
    const data = await res.json();
    if (res.ok && data.success) {
      form.reset();
      toast(`Thanks ${firstName} — got it! I’ll reply within 1–2 business days.`);
      $("contactNote").textContent = "Request sent ✓ — check your email for my reply soon.";
    } else {
      throw new Error(data.message || "Send failed");
    }
  } catch (err) {
    toast("Couldn’t send — please email joshpower32@hotmail.com directly.");
    $("contactNote").textContent = "Something went wrong sending the form. Email joshpower32@hotmail.com and I’ll get right back to you.";
  } finally {
    btn.disabled = false;
    btn.textContent = original;
  }
});

/* ---------- Mobile nav + misc ---------- */
const navToggle = $("navToggle"), navLinks = $("navLinks");
navToggle.addEventListener("click", () => { const o = navLinks.classList.toggle("open"); navToggle.setAttribute("aria-expanded", o); });
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("open")));

/* ---------- Brand logo → scroll to very top of page ---------- */
document.querySelectorAll(".brand").forEach((b) =>
  b.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.classList.remove("open");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }));

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
