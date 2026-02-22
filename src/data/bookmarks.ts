interface Bookmark {
  title: string;
  href: string;
  description?: string;
}

interface BookmarkCategory {
  category: string;
  items: Bookmark[];
}

export const bookmarks: BookmarkCategory[] = [
  {
    category: "Software & Tools",
    items: [
      {
        title: "Cursorful – Screen Recorder",
        href: "https://cursorful.com",
        description:
          "A screen recorder with automatic zoom directly inside your browser.",
      },
      {
        title: "Excalidraw – Virtual Whiteboard",
        href: "https://excalidraw.com",
        description:
          "A collaborative virtual whiteboard for sketching hand-drawn-style diagrams.",
      },
      {
        title: "Notion – All-in-one Workspace",
        href: "https://www.notion.com",
        description:
          "A unified workspace for notes, documentation, project management, and wikis.",
      },
      {
        title: "OpenCut – Video Editor",
        href: "https://opencut.app",
        description: "An open-source, web-based video editor.",
      },
      {
        title: "Photopea – Online Photo Editor",
        href: "https://www.photopea.com",
        description:
          "An advanced browser-based editor with support for PSD, XD, and Sketch files.",
      },
      {
        title: "Ray.so – Code Snapshot Generator",
        href: "https://www.ray.so",
        description:
          "Generate beautiful, shareable images of your code snippets.",
      },
    ],
  },
  {
    category: "Developer Resources",
    items: [
      {
        title: "Clippy – CSS clip-path Maker",
        href: "https://bennettfeely.com/clippy",
        description:
          "A visual tool for creating complex CSS `clip-path` shapes.",
      },
      {
        title: "Favicon Generator",
        href: "https://redketchup.io/favicon-generator",
        description:
          "Generate favicons in various formats for websites and applications.",
      },
      {
        title: "Fluid Typography Calculator",
        href: "https://royalfig.github.io/fluid-typography-calculator",
        description:
          "Generate CSS `clamp()` values for responsive and fluid typography.",
      },
      {
        title: "Google Webfonts Helper",
        href: "https://gwfh.mranftl.com/fonts",
        description:
          "Easily self-host Google Fonts and get `@font-face` snippets.",
      },
      {
        title: "Hero Patterns",
        href: "https://heropatterns.com",
        description: "A collection of repeatable SVG background patterns.",
      },
      {
        title: "InfinityFree – Free Web Hosting",
        href: "https://infinityfree.com",
        description:
          "A completely free hosting service with support for PHP and MySQL.",
      },
      {
        title: "Open Props",
        href: "https://open-props.style",
        description:
          "A CSS custom properties framework for super-charged, rapid UI development.",
      },
      {
        title: "React Icons",
        href: "https://react-icons.github.io/react-icons",
        description:
          "A library that bundles popular icon sets as easy-to-use React components.",
      },
      {
        title: "Squoosh – Image Compression",
        href: "https://squoosh.app",
        description:
          "Optimize and compress images with modern codecs in your browser.",
      },
    ],
  },
  {
    category: "Free APIs",
    items: [
      {
        title: "EmailJS – Client-side Email Service",
        href: "https://emailjs.com",
        description:
          "Send emails directly from client-side JavaScript without a server.",
      },
      {
        title: "IP Geolocation API",
        href: "https://geo.ipify.org",
        description:
          "A free API to retrieve IP-based geolocation data like city, country, and ISP.",
      },
      {
        title: "JSON Placeholder",
        href: "https://jsonplaceholder.typicode.com",
        description:
          "A fake REST API for testing and prototyping frontend applications.",
      },
      {
        title: "OpenWeatherMap API",
        href: "https://openweathermap.org",
        description:
          "Provides current weather data and forecasts via a free API.",
      },
      {
        title: "spoo.me – URL Shortener API",
        href: "https://docs.spoo.me/introduction",
        description: "A free and simple link shortener with a developer API.",
      },
    ],
  },
  {
    category: "Learning & Practice",
    items: [
      {
        title: "Chrome for Developers Blog",
        href: "https://developer.chrome.com/blog",
        description:
          "Official updates, features, and performance tips from the Google Chrome team.",
      },
      {
        title: "Consistent Fluid Type & Spacing",
        href: "https://css-tricks.com/consistent-fluidly-scaling-type-and-spacing",
        description:
          "An article on creating robust fluid typography and spacing systems with CSS.",
      },
      {
        title: "CSS-Tricks",
        href: "https://css-tricks.com",
        description:
          "A popular blog covering CSS, layouts, UI tips, and general web development news.",
      },
      {
        title: "Developer Roadmaps",
        href: "https://roadmap.sh",
        description:
          "Community-curated roadmaps, study plans, and learning paths for developers.",
      },
      {
        title: "Frontend Mentor",
        href: "https://www.frontendmentor.io",
        description:
          "Solve real-world frontend challenges to improve HTML, CSS, and JS skills.",
      },
      {
        title: "GreatFrontEnd",
        href: "https://www.greatfrontend.com",
        description:
          "The front end interview prep platform built to make your interviews much easier.",
      },
      {
        title: "Nerdy Dev – Web Development Blog",
        href: "https://nerdy.dev",
        description:
          "A blog covering web development topics, tutorials, and tips.",
      },
      {
        title: "Striver's A2Z DSA Course",
        href: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
        description:
          "A comprehensive Data Structures and Algorithms course with practice problems.",
      },
    ],
  },
  {
    category: "Portfolio Inspirations",
    items: [
      {
        title: "Brittany Chiang – Developer Portfolio",
        href: "https://brittanychiang.com",
        description:
          "A clean, single-page developer portfolio with a focus on project presentation.",
      },
      {
        title: "Lee Robinson – Developer Portfolio",
        href: "https://leerob.com",
        description:
          "A super minimal portfolio website built with Tailwind CSS.",
      },
      {
        title: "Manu Arora – Freelancer Portfolio",
        href: "https://manuarora.in",
        description:
          "A minimal and elegant freelancer portfolio with smooth animations.",
      },
      {
        title: "Ram Maheshwari – Developer Portfolio",
        href: "https://www.rammaheshwari.com",
        description:
          "An interactive developer portfolio featuring GSAP animations and a clean layout.",
      },
      {
        title: "Spotlight – Portfolio Template",
        href: "https://spotlight.tailwindui.com",
        description:
          "A sleek and professional portfolio template built with Tailwind CSS.",
      },
    ],
  },
  {
    category: "Templates & Resumes",
    items: [
      {
        title: "Jake's Resume – LaTeX Template",
        href: "https://www.overleaf.com/latex/templates/jakes-resume-anonymous/cstpnrbkhndn",
        description:
          "A clean, single-column LaTeX resume template ideal for software engineers.",
      },
    ],
  },
];
