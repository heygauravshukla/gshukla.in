# Portfolio

A modern, developer-focused portfolio showcasing my **projects**, **articles** (powered by **MDX**), and **bookmarks** — all built with a strong focus on **performance**, **accessibility**, and **design**.

---

## Table of Contents

- [Overview](#overview)
  - [Features](#features)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
  - [Getting Started](#-getting-started)
  - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

---

## Overview

### Features

The portfolio allows users to:

- Explore the site in **light and dark mode** (system preference)
- Read **articles** written in **MDX format** with syntax highlighting
- Browse **projects** with descriptions and live links
- Explore a **curated list of development resources** (Bookmarks)
- Navigate smoothly with **Lenis** scrolling and **Framer Motion** animations

### Screenshot

![Screenshot of portfolio](./public/portfolio-screenshot.avif)

### Links

- **Live Site:** [gshukla.in](https://gshukla.in)
- **Repository:** [https://github.com/heygauravshukla/portfolio](https://github.com/heygauravshukla/portfolio)

---

## My Process

### Built With

- **Semantic TSX markup** & mobile-first responsive design
- **Static Site Generation (SSG)**
- **Next.js 16 (App Router)** – framework core
- **React 19** – latest React features
- **Tailwind CSS v4** – utility-first styling with CSS variables
- **MDX** – Articles with markdown and `rehype-pretty-code` for syntax highlighting
- **Framer Motion** – smooth animations & micro-interactions
- **Lenis** – smooth scrolling experience
- **Lucide React** – icon library
- **bun** – a fast JavaScript package manager

---

### What I Learned

- Implementing **MDX** with `rehype-pretty-code` for beautiful syntax highlighting
- Using **Tailwind CSS v4** with native CSS variables and `@theme` blocks
- Generating **dynamic sitemaps** for SEO
- Implementing **smooth scrolling** with Lenis
- Structuring a **scalable project** with Next.js 16 App Router

---

### Continued Development

Planned improvements include:

- **RSS feed generation** for articles
- **Project filtering** by technology
- **Search functionality** for articles and bookmarks

---

### Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/heygauravshukla/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Set up environment variables**
   Create a `.env.local` file at the root with the following variable (optional for dev):

   ```env
   NEXT_PUBLIC_BASE_URL=
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   ```

4. **Run the development server**

   ```bash
   bun run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Useful Resources

- [Inter Font GitHub Repo](https://github.com/rsms/inter) – Inter font files & usage guide
- [IBM Plex Font GitHub Repo](https://github.com/IBM/plex) – IBM Plex font family resources
- [Squoosh](https://squoosh.app) – Image compression and optimization
- [og.new](https://og.new) – Dynamic Open Graph image generator
- [RedKetchup Favicon Generator](https://redketchup.io/favicon-generator) – Favicon creation tool

---

## Author

- **Website:** [gshukla.in](https://gshukla.in)
- **GitHub:** [@heygauravshukla](https://github.com/heygauravshukla)
- **Twitter/X:** [@heygauravshukla](https://twitter.com/heygauravshukla)

---

## Acknowledgments

Special thanks to the [Tailwind CSS Docs](https://github.com/tailwindlabs/tailwindcss.com) repository for insights into structure organization.
The [Spotlight Template](https://tailwindcss.com/plus/templates/spotlight) by Tailwind Labs served as the **initial inspiration** for this portfolio’s layout and design.
