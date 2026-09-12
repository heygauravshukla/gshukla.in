# Personal Site

A modern, developer-focused personal site showcasing my **projects**, **blog posts** (powered by **MDX**), and **bookmarks** — built with a strong focus on **performance**, **accessibility**, and **design**.

> This app lives inside the [`gshukla.in` monorepo](../../README.md). For repository-level setup (cloning, installing dependencies, running all apps), refer to the root README.

- **Live Site:** [gshukla.in](https://gshukla.in)
- **Repository:** [github.com/heygauravshukla/gshukla.in](https://github.com/heygauravshukla/gshukla.in)

---

## Table of Contents

- [Features](#features)
- [Screenshot](#screenshot)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [What I Learned](#what-i-learned)
- [Continued Development](#continued-development)
- [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Features

- **Light & dark mode** based on system preference
- **Blog posts** written in MDX with syntax highlighting via `rehype-pretty-code`
- **Projects** showcase with descriptions and live links
- **Bookmarks** — a curated list of development resources

---

## Screenshot

![Screenshot of personal site](./public/personal-site-screenshot.png)

---

## Built With

- **[Next.js 16](https://nextjs.org)** (App Router) — framework core with Static Site Generation
- **[React 19](https://react.dev)** — latest React features
- **[Tailwind CSS v4](https://tailwindcss.com)** — utility-first styling with native CSS variables
- **[MDX](https://mdxjs.com)** + **[rehype-pretty-code](https://rehype-pretty-code.netlify.app)** — blog posts with rich syntax highlighting
- **[Lucide React](https://lucide.dev)** — icon library
- **[pnpm](https://pnpm.io)** — fast, workspace-aware package manager
- **TypeScript** — static type safety throughout

---

## Getting Started

> Make sure you've completed the [monorepo setup](../../README.md#getting-started) first (clone + `pnpm install`).

### Run only this app

From the **repository root**:

```sh
pnpm dev --filter=web
```

Or from this directory (`apps/web`):

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

Create a `.env.local` file inside `apps/web/` with the following variables:

```env
NEXT_PUBLIC_BASE_URL=https://gshukla.in
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

| Variable               | Required        | Description                             |
| ---------------------- | --------------- | --------------------------------------- |
| `NEXT_PUBLIC_BASE_URL` | Optional in dev | Base URL used for sitemap & OG metadata |
| `NEXT_PUBLIC_GA_ID`    | Optional        | Google Analytics measurement ID         |

---

## What I Learned

- Implementing **MDX** with `rehype-pretty-code` for beautiful syntax highlighting
- Using **Tailwind CSS v4** with native CSS variables and `@theme` blocks
- Generating **dynamic sitemaps** for SEO
- Structuring a **scalable project** with Next.js 16 App Router

---

## Continued Development

Planned improvements include:

- **RSS feed generation** for blog posts
- **Project filtering** by technology
- **Search functionality** for blog posts and bookmarks

---

## Useful Resources

- [Inter Font GitHub Repo](https://github.com/rsms/inter) — Inter font files & usage guide
- [IBM Plex Font GitHub Repo](https://github.com/IBM/plex) — IBM Plex font family resources
- [Squoosh](https://squoosh.app) — Image compression and optimization
- [og.new](https://og.new) — Dynamic Open Graph image generator
- [RedKetchup Favicon Generator](https://redketchup.io/favicon-generator) — Favicon creation tool

---

## Author

- **Website:** [gshukla.in](https://gshukla.in)
- **GitHub:** [@heygauravshukla](https://github.com/heygauravshukla)
- **Twitter/X:** [@heygauravshukla](https://twitter.com/heygauravshukla)

---

## Acknowledgments

Special thanks to the [Tailwind CSS Docs](https://github.com/tailwindlabs/tailwindcss.com) repository for insights into structure organization.
The [Spotlight Template](https://tailwindcss.com/plus/templates/spotlight) by Tailwind Labs served as the **initial inspiration** for this site's layout and design.
