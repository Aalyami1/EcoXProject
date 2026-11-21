# EcoX Website — Content Guide

This is a **demo site**: all company details, projects, people, numbers, testimonials and
certifications are placeholders. When the client sends their real information, use this
guide to replace it.

## 1. Edit once, updates everywhere → `assets/config.js`

| What | Where it shows |
|---|---|
| Phone, email, address | Footer (all pages), contact page — also makes them clickable |
| Headline stats (years, projects, disciplines, countries, engineers) | Home stats bar, Team page |
| Social media links | Footer icons |
| `formEndpoint` | Contact form. Paste a Formspree/Getform URL to receive real messages. While empty, the form runs in **demo mode** |
| `mapQuery` | Google Map on the contact page |
| `projects` (EN + AR) | The 6 case-study pages (`project.html?p=…`) |

## 2. Still written directly in the pages (edit both EN and AR files)

| Page (EN / AR) | Placeholder content |
|---|---|
| `index.html` / `index2.html` | Client logos strip (fictional names), certifications, HSE figures, 3 testimonials |
| `aboutpage.html` / `aboutpage2.html` | Company story, timeline (2010–2023), values |
| `servicespage.html` / `servicespage2.html` | Six service descriptions |
| `projectspage.html` / `projectspage2.html` | Six project cards (keep them in the same order as `projects` in config.js) |
| `sustainabilitypage.html` / `sustainabilitypage2.html` | ESG numbers (1.2GW, 1.5M t CO₂, 120+, $1.2B) and 2030 commitments |
| `ourteampage.html` / `ourteampage2.html` | Four leaders: names, titles and stock photos |
| `contactuspage.html` / `contactuspage2.html` | Office hours |
| `careers.html` / `careers2.html` | Perks, five job openings, graduate programme, careers@ecox.com |
| `news.html` / `news2.html` | Six news articles |
| `legal.html` / `legal2.html` | Privacy policy and terms (template text, needs legal review) |

## 3. Files
- `assets/docs/` — company profile and sustainability report PDFs (EN + AR, demo). Replace them with the client's real PDFs, keeping the same file names.
- `assets/img/` — all images, stored locally. `logo.png` is the EcoX logo and `favicon.png` is the browser-tab icon.
- `assets/site.css` / `assets/site.js` — shared styles and behaviour (sticky menu, mobile menu, counters, scroll animations, project filters, form validation, lightbox).
- `profiliopage*.html` — redirects to the renamed `projectspage*.html`, so old links still work.

## Numbers used consistently across the site (demo)
Founded 2010 · 15+ years · 200+ projects · 150+ engineers · 12 disciplines · 30+ countries ·
1.2 GW renewables · 100+ projects reached by 2016.
