⚫️ **ryramadhan-site** — Personal Portfolio (Monochrome)

A minimalist, clean, and modern personal portfolio built with React + Vite.  
Designed with monochrome UI, generous spacing, subtle borders, and calm motion.

⬛️⬜️ **Sections**
- Home (Hero)
- About
- Skills
- Projects
- Contact

---

## ⚪️ Tech Stack
- **React** + **TypeScript**
- **Vite**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Framer Motion** (minimal scroll fade-in)
- **Inter** (`@fontsource/inter`)
- **clsx** + **tailwind-merge**

---

## ⚫️ Features
- **Monochrome UI**: dark surfaces, off-white text, subtle borders
- **Sticky navbar** with light blur on scroll
- **Smooth scroll** navigation
- **Subtle hover** interactions (underline, border brighten, gentle scale)
- **EN/ID language toggle** (persisted in `localStorage`)

---

## ⬛️ Getting Started

### Requirements
- **Node.js** (recommended: latest LTS)
- **npm**

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build (production)

```bash
npm run build
```

### Preview build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## ⚪️ Project Structure

```txt
src/
  components/
    layout/        # Navbar, Section layout
    motion/        # Fade-in wrapper (Framer Motion)
    ui/            # Button, Card, Badge (reusable)
  content/
    portfolio.ts   # Shared types (Project, etc.)
  i18n/
    I18nProvider.tsx   # locale state + persistence
    translations.ts    # EN/ID copy + portfolio data
  sections/
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Contact.tsx
  lib/
    cn.ts          # clsx + tailwind-merge helper
```

---

## ⬜️ Content Editing
All portfolio copy and data live in:

- `src/i18n/translations.ts`

Common fields:
- `portfolio.name`, `portfolio.role`
- `portfolio.tagline1`, `portfolio.tagline2`
- `portfolio.about`
- `portfolio.skills`
- `portfolio.projects`

---

## ⚫️ Notes
- Language preference is stored in `localStorage` under key: `ryr:locale`
- The HTML `lang` attribute updates automatically when switching language

---

## ⬛️ License
Private / personal use.

---

## ⬜️ Catatan Monokrom  
Tak apa untuk ragu; dalam waktu, jawabnya akan datang. Kangen pada seseorang pun begitu—hening, tertata, dan layak ditunggu.
