# 🧭 Portfolio

A modern, developer-focused portfolio showcasing my **projects**, **blog posts** (powered by **Sanity CMS**), and **curated development resources** — all built with a strong focus on **performance**, **accessibility**, and **scalability**.

This site uses **Static Site Generation (SSG)** and **Incremental Static Regeneration (ISR)** to deliver fast, dynamic content updates while maintaining optimal performance.

---

## 🗂️ Table of Contents

- [Overview](#overview)

  - [The Challenge](#the-challenge)
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

## 🧩 Overview

### 💡 The Challenge

The portfolio allows users to:

- Explore the site in **light and dark mode**
- Read **blog posts with rich formatting and syntax highlighting**
- Browse **projects** with descriptions and live links
- Discover a **curated list of development resources**
- Contact me via a **validated, fully functional form** powered by EmailJS

### 🖼️ Screenshot

![Screenshot of portfolio](./public/portfolio-screenshot.avif)

### 🔗 Links

- **Live Site:** [https://gshukla.vercel.app](https://gshukla.vercel.app)
- **Repository:** [https://github.com/heygauravshukla/portfolio](https://github.com/heygauravshukla/portfolio)

---

## ⚙️ My Process

### 🛠️ Built With

- **Semantic TSX markup** & mobile-first responsive design
- **Static Site Generation (SSG)** and **Incremental Static Regeneration (ISR)**
- **Next.js 16 (App Router)** – framework core
- **React 19** – latest React features
- **Sanity CMS** – headless content management
- **shadcn/ui** – accessible UI component library
- **Radix UI** – headless UI primitives
- **Tailwind CSS v4** – utility-first styling
- **TypeScript** – type-safe development
- **Motion** – smooth animations & micro-interactions
- **Lenis** – smooth scrolling experience
- **next-themes** – theme management (light/dark mode)
- **react-hook-form + Zod** – form handling & validation
- **Sonner** – toast notifications
- **EmailJS** – client-side email delivery
- **Lucide React** – icon library
- **Bun** – fast JavaScript runtime & package manager

---

### 🧠 What I Learned

- Integrating **Sanity CMS** with **Next.js** for dynamic, CMS-driven content using **SSG** and **ISR**
- Adding **syntax highlighting** for code blocks in blog posts using the `react-syntax-highlighter` library
- Creating **accessible, validated contact forms** with `react-hook-form`, `Zod`, and **EmailJS**
- Designing **reusable UI components** with `shadcn/ui` and Tailwind CSS
- Implementing **smooth scrolling** with Lenis for enhanced user experience
- Implementing **theme switching** (light/dark mode) using `next-themes`
- Implementing **subtle animations and micro-interactions** using the Motion library
- Structuring a **scalable project** with modern Next.js features like the App Router
- Working with **React 19** and **Next.js 16** App Router patterns

---

### 🚀 Continued Development

Planned improvements include:

- Automating **RSS feed** and **sitemap generation**
- Adding **pagination** for blog posts
- Implementing **project filtering** and **blog search**
- Replacing **EmailJS** with **Nodemailer** for secure server-side email handling

---

### 🚀 Getting Started

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
   Create a `.env.local` file at the root with the following variables:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=
   NEXT_PUBLIC_SANITY_DATASET=
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
   ```

4. **Run the development server**
   ```bash
   bun run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

   Ensure you've set up a **Sanity project** and configured your **EmailJS service and template IDs** before running the app.

---

### 📚 Useful Resources

- [Inter Font GitHub Repo](https://github.com/rsms/inter) – Inter font files & usage guide
- [IBM Plex Font GitHub Repo](https://github.com/IBM/plex) – IBM Plex font family resources
- [Squoosh](https://squoosh.app) – Image compression and optimization
- [og.new](https://og.new) – Dynamic Open Graph image generator
- [RedKetchup Favicon Generator](https://redketchup.io/favicon-generator) – Favicon creation tool

---

## 👨‍💻 Author

- **Website:** [gshukla.vercel.app](https://gshukla.vercel.app)
- **GitHub:** [@heygauravshukla](https://github.com/heygauravshukla)
- **Twitter/X:** [@heygauravshukla](https://twitter.com/heygauravshukla)

---

## 🙌 Acknowledgments

Special thanks to the [Tailwind CSS Docs](https://github.com/tailwindlabs/tailwindcss.com) repository for insights into **font self-hosting** and structure organization.
The [Spotlight Template](https://tailwindcss.com/plus/templates/spotlight) by Tailwind Labs served as the **initial inspiration** for this portfolio’s layout and design.
