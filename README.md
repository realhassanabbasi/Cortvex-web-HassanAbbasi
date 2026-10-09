# CORTVEX — Digital Agency Website

A hand-built, multi-page static website for **CORTVEX**, a fictional digital agency that designs and builds modern, high-converting websites, brands, AI automation, and social media management for businesses.

This project was created to practice real-world agency web design: responsive layouts, smooth scroll motion, scroll-triggered animations, an interactive animated hero, and conversion-focused page structure — all with plain HTML, CSS, and vanilla JavaScript (no frameworks).

## ✨ Features

- **Multi-page site** — Home (`index.html`), Services (`services.html`), and Contact (`contact.html`), with a shared navbar, mobile menu, and footer across all pages.
- **Interactive animated hero** — the brand character image tilts in 3D following the mouse (lerped for smoothness), floating canvas particles render behind it, and a rotating word-cycler headline keeps the hero alive.
- **Buttery smooth scrolling** — Lenis smooth-scroll (loaded via CDN) with a custom easing curve.
- **Scroll-triggered animations** — IntersectionObserver-powered fade-up reveals with staggered delays on every section.
- **Scroll progress bar** — thin progress indicator at the top of every page.
- **Mobile responsive** — hamburger menu with a slide-in mobile nav; mobile-first layouts throughout.
- **Drag-to-scroll sections** — horizontal drag scrolling on selected content strips.
- **Conversion sections** — problem/agitate hero, social-proof stats, services overview, "How We Work" process section, and a quick CTA email form on the homepage.
- **Before / After comparison** — Services page shows a "Before vs After CORTVEX" transformation table.
- **Detailed service cards** — four full service breakdowns (Web Design & Development, Branding & Visual Identity, AI Automation & Chatbots, Social Media Management), each with a feature list and badge.
- **Full contact form** — name, email, business name, business-type dropdown, service dropdown, message textarea, plus info cards (email, response time, location, socials) and a "What happens next" section.
- **Accessibility basics** — semantic HTML5, `aria-label` / `aria-labelledby` landmarks, screen-reader-only text, keyboard-focusable mobile menu, and `alt` text on every image.
- **SEO basics** — unique `<title>` and `<meta name="description">` per page, favicon, and semantic heading structure.
- **Brand assets included** — custom logo, brand character renders, the Mokoto display font, a brand guideline book (PDF), and UI inspiration references.
- **Inline SVG iconography** — custom line icons for every service card and social link; no icon-font dependency.

## 🛠 Tech Stack

- **HTML5** — semantic structure, 3 pages
- **CSS3** — custom stylesheets (shared `style.css` + one per page: `home.css`, `services.css`, `contact.css`); flexbox/grid, CSS animations, custom properties
- **Vanilla JavaScript (ES6)** — `js/main.js` (Lenis, navbar, scroll progress, fade-ins, mobile nav, drag-scroll) and `js/hero.js` (3D tilt + canvas particles)
- **Lenis** (CDN) — smooth scrolling: `@studio-freight/lenis@1.0.42`
- **Brand assets** — custom PNG logo, brand character art, Mokoto `.ttf` display font

No build step, no dependencies to install.

## 📁 Project Structure

```
Cortvex-web-HassanAbbasi/
├── index.html                  # Homepage — hero, social proof, problem, about,
│                               #   services overview, process, CTA strip
├── services.html               # Services — 4 detailed service cards,
│                               #   before/after comparison, CTA
├── contact.html                # Contact — contact form, info cards, next-steps
├── css/
│   ├── style.css               # Shared styles: navbar, footer, buttons, utilities
│   ├── home.css                # Homepage-specific styles
│   ├── services.css            # Services-page styles
│   └── contact.css             # Contact-page styles
├── js/
│   ├── main.js                 # Shared JS: Lenis smooth scroll, navbar,
│   │                           #   scroll progress, fade-ins, mobile nav, drag-scroll
│   └── hero.js                 # Homepage hero: 3D character tilt + particles
├── assets/
│   ├── Brandresources/
│   │   ├── Logo/               # CORTVEX-LOGO-TExT.png, logo-with-no-bg.png
│   │   ├── BrandCharacter/     # Hero character renders (no-bg PNGs)
│   │   ├── Font/               # mokoto.regular.ttf (display font)
│   │   └── BrandGuidelineBook.pdf
│   └── Brandwebresources/
│       ├── AboutSectionPageDesign.svg
│       └── FamilyMembersTeam/  # Head.jpeg
│       └── Inspiration/        # Design references + hero prompt text
└── .agents/skills/             # Design/branding skill notes used during build
```

## 🚀 How to Run

This is a static site — there is no server or build required.

**Option 1 — open directly:**
Open `index.html` in any modern browser.

**Option 2 — serve locally (recommended, so the CDN smooth-scroll script loads cleanly):**

```bash
# from the project root
python3 -m http.server 8000
# then visit http://localhost:8000
```

Note: the smooth-scroll (Lenis) library loads from a CDN, so an internet connection is needed for that effect. Everything else works offline.

## 📄 Pages Overview

| Page | File | Contents |
|---|---|---|
| Home | `index.html` | Animated hero (3D-tilt character + particles + word cycler), stats/social proof, problem statement, about section, services overview, "How We Work" 4-step process, email CTA strip |
| Services | `services.html` | Four detailed service cards (Web Dev, Branding, AI Automation, Social Media) with feature lists, before/after comparison table, CTA |
| Contact | `contact.html` | Full contact/booking form (business-type & service dropdowns), info cards (email, response time, location, socials), "what happens next" section |

## 🧑‍💻 Author

**Hassan Abbasi** — Graphic Designer & AI Engineer.
Hand-coded with HTML, CSS, and vanilla JavaScript.

---

*Feel free to fork and adapt the design. The CORTVEX brand assets (logo, character art, guideline book) are included in this repo for presentation purposes.*
