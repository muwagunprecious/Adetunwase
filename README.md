<img width="1440" height="1172" alt="Emmanuel Agida Portfolio Website" src="https://github.com/user-attachments/assets/026b894a-4828-41e7-82be-0c7411b7e960" />

# Contributing to Emmanuel Agida's Portfolio Website

Thank you for your interest in contributing to this project! This is a one-pager sectionalized portfolio website built with [Next.js](https://nextjs.org), bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

---

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Making Changes](#making-changes)
- [Development Workflow](#development-workflow)
- [Quick Reference](#quick-reference)
- [Contribution Guidelines](#contribution-guidelines)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Code Style](#code-style)
- [TypeScript & Code Quality](#typescript--code-quality)
- [Troubleshooting](#troubleshooting)
- [Deployment](#deployment)
- [Learn More](#learn-more)
- [Questions & Support](#questions--support)

---

## Project Overview

This is a single-page portfolio website for Emmanuel Agida, organized into distinct sections. Each section is a self-contained component that makes up the full one-page layout. Contributions should respect this modular structure.

The design follows a <a href="https://www.figma.com/design/u1GlBdHBdjKRu2hyFWM6tC/Emmanuel-Agida-Portfolio-Website.?node-id=199-9&t=Ag9CC1PsNN04JBac-1" target="_blank">Figma UI design</a> to ensure consistency and visual quality across all changes.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** v18+ (v20+ recommended for best performance)
- **npm** 9+ (or yarn 3.6+, pnpm 8+, bun 1.0+)
- Git

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
# or
bun install
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site. The page will auto-reload as you make changes.

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
├── package.json                  # Project metadata and scripts
├── package-lock.json             # Dependency lock file
└── README.md                     # This file
```

> **If you're adding a new section?** Create a new `.tsx` file inside `src/Imports/` and import it into `src/app/page.tsx`.

---

## Making Changes

- All section edits should be made within their respective files inside `src/Imports/`.
- Reusable UI pieces belong in `src/components/`.
- Static data, copy, and configuration values belong in `src/constants/`.
- Global styles and layout changes should be made in `src/app/layout.tsx` or `src/app/globals.css`.
- TypeScript type definitions should be declared or updated in `src/types/`.
- The page auto-updates as you edit files — no need to restart the server for most changes.
- This project uses `next/font` with **Jost** for typography. Avoid importing external fonts without prior discussion.

---

## Development Workflow

Follow these steps when contributing:

1. Create a feature branch from `master`
2. Make changes in your local environment
3. Test thoroughly (dev server + production build)
4. Commit with clear messages following conventional commits
5. Push to your fork and create a PR (Pull Request)
6. Address review feedback if requested
7. Merging will proceed once approved by Director.

---

## Quick Reference

### Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server (after build)
npm start

# Run ESLint checks
npm run lint

# Format code (if configured)
npm run format
```

### Development Tips

- **Hot Reload:** Changes are reflected immediately without restarting the server
- **Browser DevTools:** Use Next.js DevTools to inspect components and network activity
- **TypeScript:** Errors appear in the console & terminal and prevent builds — always resolve them

---

## Contribution Guidelines

To keep the codebase clean and consistent, please follow these guidelines:

- **One section per PR** — keep pull requests focused. Avoid bundling unrelated changes.
- **Do not restructure the one-page layout** without prior discussion via an issue or with Director.
- **Keep section components self-contained** — a section's logic and markup should live in its own file under `src/Imports/`.
- **No placeholder or lorem ipsum content** — all text should be relevant to Emmanuel Agida's actual work and story as seen in the Figma design reference.
- **Responsive design is required** — every change must work well on mobile first, tablet, and then desktop.
- **Test before pushing** — run the dev server and visually confirm your changes, build the output and confirm there are no errors before submitting your PR for review.

---

## Submitting a Pull Request

1. **Create a new branch** from `master`:

```bash
git checkout -b feature/your-section-or-fix-name
```

Use descriptive names:
- `feature/add-testimonials-section` for new features
- `fix/mobile-hero-alignment` for bug fixes
- `docs/update-contributing-guide` for documentation

2. **Make your changes and commit** with clear messages following [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat: update Platforms section layout for mobile"
git commit -m "fix: correct Hero section spacing on tablet"
git commit -m "docs: clarify TypeScript setup in README"
```

3. **Push to your fork:**

```bash
git push origin feature/your-section-or-fix-name
```

4. **Open a Pull Request(P)R ** against the `master` branch of this repository with:
   - A clear title describing your changes
   - A detailed description of what you changed and why
   - Screenshots or GIFs if UI changes were made
   - Reference to the related issues tag or number reference (e.g., `Fixes #42`)

---

## Code Style

- Use **TypeScript** throughout — all new files should be `.tsx` or `.ts`.
- Use **Tailwind CSS** utility classes for styling where applicable.
- Follow naming conventions — **PascalCase** for components, **camelCase** for variables and functions.
- Avoid inline styles unless absolutely necessary.
- Organize imports — React imports first, then external packages, then local imports.
- Shared types go in `src/types/`, shared constants go in `src/constants/`.

### Example Component Structure

```tsx
'use client';

import React from 'react';
import { ExternalLibrary } from 'external-package';

import { CONSTANT_VALUE } from '@/constants/config';
import { MyType } from '@/types/common';
import { ReusableButton } from '@/components/Button';

export const MySection: React.FC<MyType> = ({ prop }) => {
  return <div className="flex items-center gap-4">{/* content */}</div>;
};

export default MySection;
```

---

## TypeScript & Code Quality

- **Strict Mode:** TypeScript is configured in strict mode. All types must be properly defined.
- **No `any` types** — use proper type definitions or generics instead.
- **ESLint:** The project uses ESLint to catch code quality issues. All PRs must pass linting.
- **Build Verification:** Your code must build successfully. Always run `npm run build` before submitting a PR.

---

## Troubleshooting

### Port 3000 Already in Use

```
Error: EADDRINUSE: address already in use :::3000
```

```bash
# Use a different port
npm run dev -- -p 3001

# Or kill the process using port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9
```

### Tailwind Styles Not Appearing

CSS classes aren't being applied to components.

```bash
# Delete the build cache and restart
rm -rf .next
npm run dev
```

### Module Not Found Errors

- Verify the import path matches the file structure exactly
- Check that file extensions are included for non-TypeScript imports
- Ensure the `@/` alias is configured correctly in `tsconfig.json`

### TypeScript Errors on Build

```bash
# Check for all TypeScript errors
npx tsc --noEmit

# Fix errors reported and try building again
npm run build
```

### Dependency Conflicts

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this project is via the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

> NOTE: There's an existing portfolio project deployment on vercel. Visit [Emmanuel Agida Portfilio Website to see a live preview of the app](https://emmanuelagida.vercel.app)

1. Push your code to GitHub
2. Import the repository on Vercel
3. Vercel will auto-detect Next.js and set up the build optimally
4. Your site is live

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — full Next.js feature reference
- [Learn Next.js](https://nextjs.org/learn) — interactive Next.js tutorial
- [Next.js GitHub Repository](https://github.com/vercel/next.js)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) — styling reference
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) — TypeScript learning resource

---

## Questions & Support

We're here to help! Here are the best ways to get support:

### Report a Bug

Open an issue on GitHub with:
- Clear description of the bug
- Steps to reproduce
- Expected vs. actual behavior
- Screenshots if applicable

### Suggest a Feature

Open a GitHub Discussion or Issue with your idea and describe the benefit and any potential implementation approach.

### Get Help

- **Email:** samuelalisigwe22@gmail.com
- **GitHub Issues:** Use for technical problems
- **GitHub Discussions:** Use for general questions and ideas

### Response Time

- Bug fixes: 48 hours
- Feature requests: Reviewed within 1 week
- General inquiries: 3–5 business days

---

Happy contributing! 🚀
