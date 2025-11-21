# TalentShowCostEstimator

This is a Vite + React + TypeScript project with Tailwind CSS configured.

This README explains how to set up and run the project locally, plus common Tailwind troubleshooting tips.

**Project folder**: `/TalentShowCostEstimator`

## Prerequisites
- Node.js 18+ (LTS recommended)
- npm, pnpm, or yarn

## Setup (one-time)
1. Open a terminal and change to the project folder:

```powershell
cd "your\path\to\TalentShowCostEstimator"
```

2. Install dependencies (pick one):

```powershell
# npm
npm install

# or pnpm
pnpm install

# or yarn
# TalentShowCostEstimator

Welcome — this repository contains a small React + TypeScript web app built with Vite and styled with Tailwind CSS.

This README is written for visitors who want to run and view the site locally.

TL;DR — Quick start

```powershell
cd "PATH\TO\YOUR\TalentShowCostEstimator"
npm install
npm run dev

# then open the URL shown in the terminal (e.g. http://localhost:5173 or 5174)
```

What you can expect

- A small single-page UI to estimate talent show costs (form inputs, simple calculator UI).
- Tailwind CSS utilities for layout and styling.

Prerequisites

- Node.js 18+ (LTS recommended)
- npm (or `pnpm` / `yarn` if you prefer)

Install and run (detailed)

1. Clone or download the repository and open a terminal in the project folder above.
2. Install dependencies:

```powershell
npm install
# or pnpm install
# or yarn install
```

3. Start the dev server:

```powershell
npm run dev
```

4. Open the URL printed by Vite (default `http://localhost:5173`, or a nearby port if 5173 is in use).

Build for production

```powershell
npm run build
npm run preview
```

How to use the site

- The main page contains a heading and a small form for entering numbers (e.g., talents, guests). Change values and see how the UI responds.
- Labels and placeholders guide the expected input.

Tailwind CSS notes for visitors

- The project uses Tailwind v4 via PostCSS. Styles are available through `src/index.css` which imports Tailwind.
- If you edit CSS or Tailwind config, restart the dev server to pick up the changes.

If things don't look styled

- Confirm the dev server is running and you opened the correct localhost URL.
- Open Developer Tools → Network and check the CSS file (search for classes like `.text-white` or `.text-4xl`). If these classes are missing, Tailwind did not build; check the terminal for PostCSS/Vite errors.

Common troubleshooting

- "Unknown at rule `@tailwind`" in your editor — that's usually a linter warning; runtime can still work.
- If you see errors about the PostCSS plugin, ensure `postcss.config.cjs` includes `@tailwindcss/postcss` and `autoprefixer`.

Contact / License

- This project is an example app; modify and reuse as you wish. No license specified.

Feedback or help

- If you run into problems launching the site, share the terminal output from `npm run dev` and a screenshot of the page and I will help diagnose.
