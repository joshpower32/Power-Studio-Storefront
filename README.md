# Power Studio — Freelancer Storefront (Joshua's own sales site)

The site that ties the whole framework library together: it **showcases your demos**, sells
your **web packages + photography** with clear pricing and recurring **care plans**, and takes
**deposits** (Stripe / PayPal / e-Transfer). Dark + gold theme. Pure HTML/CSS/JS, hosts free
on GitHub Pages.

This is *your* storefront — the one you send to leads on Facebook, LinkedIn, and Indeed.

## Everything is data-driven (easy to extend)

All content lives in arrays at the top of `app.js`:

| Array | Controls |
|-------|----------|
| `PORTFOLIO` | The demo "websites I can build" cards. **Add a framework = add one entry** (name, url, desc, tags, Pexels `query`). |
| `PACKAGES` | The 3 website price tiers (name, price, features, `featured`). |
| `ADDONS` | The add-on price list. |
| `CARE` | Monthly care plans. |
| `PHOTO` | Photography services + prices. |

## Pricing (CAD) — chosen to be competitive locally *and* sustainable

**Websites:** Starter **$599** · Business **$1,199** (most popular) · Commerce/Pro **$2,400+**
**Care plans (recurring):** Basic **$29/mo** · Plus **$59/mo** · Pro **$99/mo**
**Photography:** Real estate **$199/property** · Business/product **$249** · Headshots **$149** · Events **$99/hr**

Why this works: it sits well below agency rates ($3k–10k) so local SMBs say yes, while the
**care plans create recurring revenue** and **photography is a second income stream that
cross-sells** with every website (and especially with the real-estate framework — pitch agents
"site + listing photos"). Adjust any number in the arrays as you grow.

## Take real payments (3 steps)

In `CONFIG` at the top of `app.js`:
1. **Stripe** — create a [Payment Link](https://stripe.com/payments/payment-links) for your
   deposit and paste it into `stripeLink`. (Recommended — real card payments, no PCI work.)
2. **PayPal** — set `paypalLink` to your PayPal.Me URL.
3. **e-Transfer** — set `etransferEmail`; the modal shows send-to instructions.

Adjust the booking `deposit` amount too. Balance is invoiced as the project progresses.

## Wire up the contact form

Point the `<form id="contactForm">` at **Formspree** (set `action` + `method="post"`, remove
the JS handler) or write submissions to **Firebase** Firestore. This is your lead inbox.

## Personalise

- Brand/colours: `:root` tokens in `styles.css`; `Power Studio` name + contact info in
  `index.html` (header, hero, about, contact, footer).
- Swap the about portrait + demo thumbnails for **your real photos** (your Canon work) by
  setting an `image:` on items, or replace the Pexels `query` values.

## Local preview

```bash
python3 -m http.server 5560   # then open http://localhost:5560
```
