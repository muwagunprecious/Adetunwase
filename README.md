# Contributing to Emmanuel Agida's Portfolio Website

Thank you for your interest in contributing to this project! This is a one-pager sectionalized portfolio website built with [Next.js](https://nextjs.org), bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Making Changes](#making-changes)
- [Contribution Guidelines](#contribution-guidelines)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Code Style](#code-style)
- [Deployment](#deployment)
- [Learn More](#learn-more)

---

## Project Overview

This is a single-page portfolio website for Emmanuel Agida, organized into distinct sections. Each section is a self-contained component that makes up the full one-page layout. Contributions should respect the sectionalized structure of the site.

---

## Getting Started

### Prerequisites

Make sure you have one of the following package managers installed:

- [Node.js](https://nodejs.org) (v18 or higher recommended)
- npm, yarn, pnpm, or bun

### Installation

1. **Fork** this repository and **clone** your fork:

```bash
git clone https://github.com/your-username/Emmanuel-Agida-Portfolio.git
cd Emmanuel-Agida-Portfolio
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

---

## Project Structure

```
Emmanuel-Agida-Portfolio/
├── .next/                        # Next.js build output (auto-generated, do not edit)
├── node_modules/                 # Project dependencies (auto-generated, do not edit)
├── public/                       # Static assets (images, icons, fonts)
├── src/
│   ├── app/
│   │   ├── favicon.ico           # Site favicon
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout and font configuration
│   │   └── page.tsx              # Main one-pager entry — imports all sections
│   ├── components/               # Reusable UI components
│   ├── constants/                # Static data and configuration constants
│   ├── Imports/                  # One-pager section components
│   │   ├── AboutMe.tsx           # About Emmanuel section
│   │   ├── Credibility.tsx       # Credibility / social proof section
│   │   ├── Hero.tsx              # Hero / intro section
│   │   └── Platforms.tsx         # Platforms / speaking engagements section
│   └── types/                    # TypeScript type definitions
├── .gitignore
├── AGENTS.md                     # Agent configuration
├── CLAUDE.md                     # Claude AI configuration
├── eslint.config.mjs             # ESLint configuration
├── next-env.d.ts                 # Next.js TypeScript declarations
├── next.config.ts                # Next.js configuration
└── package-lock.json             # Dependency lock file
```

> **Adding a new section?** Create a new `.tsx` file inside `src/Imports/` and import it into `src/app/page.tsx`.

---

## Making Changes

- All section edits should be made within their respective files inside `src/Imports/`.
- Reusable UI pieces belong in `src/components/`.
- Static data, copy, and configuration values belong in `src/constants/`.
- Global styles and layout changes should be made in `src/app/layout.tsx` or `src/app/globals.css`.
- TypeScript type definitions should be declared or updated in `src/types/`.
- The page auto-updates as you edit files — no need to restart the server for most changes.
- This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) with [Jost](https://vercel.com/font) for typography. Avoid importing external fonts without prior discussion.

---

## Contribution Guidelines

To keep the codebase clean and consistent, please follow these guidelines:

- **One section per PR** — keep pull requests focused. Avoid bundling unrelated changes.
- **Do not restructure the one-page layout** without prior discussion via an issue.
- **Keep section components self-contained** — a section's logic and markup should live in its own file under `src/Imports/`.
- **No placeholder or lorem ipsum content** — all text should be relevant to Emmanuel Agida's actual work and story as seen in the Figma UI design.
- **Responsive design is required** — every change must work well on mobile first, tablet, and then desktop.
- **Test before pushing** — run the dev server and visually confirm your changes, build the output and confirm there's no error before submitting your PR for review.

---

## Submitting a Pull Request

1. Create a new branch from `master`:

```bash
git checkout -b feature/your-section-or-fix-name
```

2. Make your changes and commit with a clear message:

```bash
git commit -m "feat: update Platforms section layout for mobile"
```

3. Push to your fork:

```bash
git push origin feature/your-section-or-fix-name
```

4. Open a Pull Request against the `main` branch of this repository and describe what you changed and why.

---

## Code Style

- Use **TypeScript** throughout — all new files should be `.tsx` or `.ts`.
- Use **Tailwind CSS** utility classes for styling where applicable.
- Follow existing naming conventions — PascalCase for components, camelCase for variables and functions.
- Avoid inline styles unless absolutely necessary.
- Shared types go in `src/types/`, shared constants go in `src/constants/`.

---

## Deployment

The easiest way to deploy this project is via the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), created by the makers of Next.js.

For full deployment instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — full Next.js feature reference
- [Learn Next.js](https://nextjs.org/learn) — interactive tutorial
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

---

For questions or suggestions, feel free to open an issue or start a discussion in this repository, or reach out to the Director via **samuelalisigwe22@gmail.com** or the designated communication channel.
