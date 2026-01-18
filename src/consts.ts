// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import XLogo from "./assets/icons/x-twitter-brands-solid-full.svg";
import BlueskyLogo from "./assets/icons/bluesky-brands-solid-full.svg";
import LinkedinLogo from "./assets/icons/square-linkedin-brands-solid-full.svg";
import GithubLogo from "./assets/icons/github-brands-solid-full.svg";

import ToknersImage from "./assets/projects/tokners-landing-page.avif";
import RealEstateImage from "./assets/projects/real-estate-website.avif";
import ShortlyImage from "./assets/projects/shortly-url-shortener.webp";
import IPAddressTrackerImage from "./assets/projects/ip-address-tracker.webp";
import WeatherAppImage from "./assets/projects/weather-app.jpg";
import FoodWebsiteImage from "./assets/projects/food-website-homepage.avif";
import ImageColorsExtractorImage from "./assets/projects/image-colors-extractor.avif";
import BentoGridImage from "./assets/projects/bento-grid.webp";
import SocialLinksProfileImage from "./assets/projects/social-links-profile.webp";

export const NAME = "Gaurav Shukla";
export const WORK_EMAIL = "heygauravshukla@gmail.com";

export const SITE_TITLE = `${NAME} - Software Engineer`;
export const SITE_DESCRIPTION = `${NAME} is a software engineer with a passion for building web applications.`;
export const SITE_URL = "https://gshukla.in";

export const INTERNAL_LINKS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export const SOCIAL_LINKS = [
  {
    label: "X",
    href: "https://x.com/heygauravshukla",
    icon: XLogo,
  },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/gshukla.in",
    icon: BlueskyLogo,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/heygauravshukla/",
    icon: LinkedinLogo,
  },
  {
    label: "GitHub",
    href: "https://github.com/heygauravshukla",
    icon: GithubLogo,
  },
];

export const PROJECTS = [
  {
    name: "Tokners landing page",
    description: "Modern landing page showcasing blockchain services.",
    url: "https://tokners-landing-page.vercel.app",
    image: ToknersImage,
  },
  {
    name: "Real estate landing page",
    description:
      "Interactive real estate platform with modern design and features.",
    url: "https://real-estate-website-gshukla.vercel.app",
    image: RealEstateImage,
  },
  {
    name: "Shortly - URL Shortener",
    description: "Transform long URLs into short, trackable links instantly.",
    url: "https://sus-gshukla.vercel.app",
    image: ShortlyImage,
  },
  {
    name: "IP Address Tracker",
    description: "Track IP addresses and view their locations on map.",
    url: "https://iat-gshukla.vercel.app",
    image: IPAddressTrackerImage,
  },
  {
    name: "Weather App",
    description: "Get real-time weather updates for cities worldwide.",
    url: "https://weather-app-gshukla.vercel.app",
    image: WeatherAppImage,
  },
  {
    name: "Food website hero section",
    description:
      "An introductory hero section with interactive dish carouesel.",
    url: "https://food-website-homepage.vercel.app",
    image: FoodWebsiteImage,
  },
  {
    name: "Image colors extractor",
    description: "An online tool to extract dominant colors from images.",
    url: "https://image-colors-extractor.vercel.app",
    image: ImageColorsExtractorImage,
  },
  {
    name: "Bento grid",
    description: "A modern and responsive grid layout for displaying content.",
    url: "https://heygauravshukla.github.io/bento-grid",
    image: BentoGridImage,
  },
  {
    name: "Social Links Profile",
    description:
      "A social links profile page to showcase your social media profiles.",
    url: "https://heygauravshukla.github.io/social-links-profile",
    image: SocialLinksProfileImage,
  },
];

export const ACHIEVEMENTS = [
  {
    year: 2025,
    achievements: [
      {
        date: "2025-11-14",
        title: "Employee of the Month for October 2025 at RW Infotech",
        description:
          'Awarded the "Employee of the Month" for October 2025 in recognition of exceptional performance, dedication, and consistent contribution to excellence.',
      },
      {
        date: "2025-08-12",
        title: "Frontend Intern at RW Infotech",
        description:
          "Started my professional journey as a Frontend Intern, contributing to real-world projects and enhancing UI/UX experiences.",
      },
      {
        date: "2025-04-20",
        title: "Graduation Convocation",
        description:
          "Received my Bachelor's degree at the April convocation ceremony, celebrating academic and personal milestones.",
      },
    ],
  },
  {
    year: 2024,
    achievements: [
      {
        date: "2024-06-19",
        title: "Graduated with B.Tech in Computer Science",
        description:
          "Completed Bachelor's in Computer Science & Engineering with 7.44 CGPA, specializing in web development.",
      },
    ],
  },
  {
    year: 2023,
    achievements: [
      {
        date: "2023-05-18",
        title: "Cloud Computing Certification – Elite Rank",
        description:
          "Earned Elite certification in a 12-week IIT Kharagpur NPTEL course, covering fundamentals of cloud computing.",
      },
    ],
  },
  {
    year: 2021,
    achievements: [
      {
        date: "2021-11-26",
        title: "Programming Foundations Certification",
        description:
          "Completed Duke University’s Coursera course on JavaScript, HTML, and CSS, strengthening my programming fundamentals.",
      },
    ],
  },
  {
    year: 2020,
    achievements: [
      {
        date: "2020-08-22",
        title: "Started B.Tech in Computer Science & Engineering",
        description:
          "Began undergraduate studies at CGC Jhanjeri with a focus on software engineering and modern web technologies.",
      },
      {
        date: "2020-05-08",
        title: "Academic Excellence Recognition",
        description:
          "Awarded for securing 93.56% in Class XII, featured in Ajit newspaper for academic distinction.",
      },
    ],
  },
];

export const BOOKMARKS = [
  {
    category: "Dev & Design Tools",
    items: [
      {
        name: "Clippy – CSS clip-path Maker",
        description:
          "A visual tool for creating complex CSS `clip-path` shapes.",
        url: "https://bennettfeely.com/clippy",
      },
      {
        name: "Excalidraw – Virtual Whiteboard",
        description:
          "Virtual collaborative whiteboard for sketching hand-drawn like diagrams.",
        url: "https://excalidraw.com",
      },
      {
        name: "Favicon Generator",
        description:
          "Generate favicons in various formats for websites and applications.",
        url: "https://redketchup.io/favicon-generator",
      },
      {
        name: "Fluid Typography Calculator",
        description:
          "Generate CSS `clamp()` values for responsive and fluid typography.",
        url: "https://royalfig.github.io/fluid-typography-calculator",
      },
      {
        name: "Google Webfonts Helper",
        description:
          "Easily self-host Google Fonts and get `@font-face` snippets.",
        url: "https://gwfh.mranftl.com/fonts",
      },
      {
        name: "Hero Patterns",
        description: "A collection of repeatable SVG background patterns.",
        url: "https://heropatterns.com",
      },
      {
        name: "Photopea – Online Photo Editor",
        description:
          "Advanced browser-based editor with support for PSD, XD, and Sketch files.",
        url: "https://www.photopea.com",
      },
      {
        name: "Ray.so – Code Snapshot Generator",
        description:
          "Generate beautiful, shareable images of your code snippets.",
        url: "https://www.ray.so",
      },
      {
        name: "Squoosh – Image Compression",
        description:
          "Optimize and compress images with modern codecs in your browser.",
        url: "https://squoosh.app",
      },
      {
        name: "tweakcn – shadcn/ui Customizer",
        description:
          "A visual tool for customizing shadcn/ui theme tokens and colors.",
        url: "https://tweakcn.com",
      },
      {
        name: "v0 by Vercel – AI UI Generator",
        description:
          "An AI-powered tool to generate React/Next.js components from text prompts.",
        url: "https://v0.dev",
      },
    ],
  },
  {
    category: "UI Libraries & Resources",
    items: [
      {
        name: "Aceternity UI",
        description:
          "Copy-paste animated UI components built with Tailwind CSS and Framer Motion.",
        url: "https://ui.aceternity.com",
      },
      {
        title: "Framer Motion",
        description:
          "A production-ready motion library for React to create powerful animations.",
        url: "https://www.framer.com/motion/",
      },
      {
        title: "Freepik",
        description:
          "A large collection of free and premium vectors, stock photos, and design assets.",
        url: "https://www.freepik.com",
      },
      {
        title: "Open Props",
        description:
          "A CSS custom properties framework for super-charged, rapid UI development.",
        url: "https://open-props.style",
      },
      {
        title: "shadcn/ui",
        description:
          "Beautifully designed components built with Radix UI and Tailwind CSS.",
        url: "https://ui.shadcn.com",
      },
    ],
  },
  {
    category: "Icon Libraries",
    items: [
      {
        title: "DEVICON",
        description:
          "An icon set for programming languages, design tools, and platforms.",
        url: "https://devicon.dev",
      },
      {
        title: "Font Awesome",
        description:
          "A comprehensive and widely-used icon library for web projects.",
        url: "https://fontawesome.com",
      },
      {
        title: "Heroicons",
        description:
          "A set of hand-crafted SVG icons by the makers of Tailwind CSS.",
        url: "https://heroicons.com",
      },
      {
        title: "Ionicons",
        description:
          "A premium, open-source icon pack for mobile and web applications.",
        url: "https://ionic.io/ionicons",
      },
      {
        title: "Lucide Icons",
        description:
          "A community-maintained, Feather-inspired open-source icon set.",
        url: "https://lucide.dev",
      },
      {
        title: "React Icons",
        description:
          "A library that bundles popular icon sets as easy-to-use React components.",
        url: "https://react-icons.github.io/react-icons",
      },
    ],
  },
  {
    category: "Fonts",
    items: [
      {
        title: "IBM Plex",
        description:
          "A versatile and distinctive corporate typeface family by IBM.",
        url: "https://github.com/IBM/plex",
      },
      {
        title: "Inter",
        description:
          "A highly-readable variable font family optimized for user interfaces.",
        url: "https://github.com/rsms/inter",
      },
      {
        title: "Space Grotesk",
        description:
          "A modern sans-serif typeface inspired by the fixed-width Space Mono.",
        url: "https://github.com/floriankarsten/space-grotesk",
      },
    ],
  },
  {
    category: "Free APIs",
    items: [
      {
        title: "EmailJS – Client-side Email Service",
        description:
          "Send emails directly from client-side JavaScript without a server.",
        url: "https://emailjs.com",
      },
      {
        title: "IP Geolocation API",
        description:
          "A free API to retrieve IP-based geolocation data like city, country, and ISP.",
        url: "https://geo.ipify.org",
      },
      {
        title: "JSON Placeholder",
        description:
          "A fake REST API for testing and prototyping frontend applications.",
        url: "https://jsonplaceholder.typicode.com",
      },
      {
        title: "OpenWeatherMap API",
        description:
          "Provides current weather data and forecasts via a free API.",
        url: "https://openweathermap.org",
      },
      {
        title: "spoo.me – URL Shortener API",
        description: "A free and simple link shortener with a developer API.",
        url: "https://docs.spoo.me/introduction",
      },
    ],
  },
  {
    category: "Hosting & Deployment",
    items: [
      {
        title: "InfinityFree – Free Web Hosting",
        description:
          "Completely free hosting service with support for PHP and MySQL.",
        url: "https://infinityfree.com",
      },
      {
        title: "Netlify – Static Site Hosting",
        description:
          "An all-in-one platform for deploying modern web projects with serverless functions.",
        url: "https://www.netlify.com",
      },
      {
        title: "Vercel – Serverless Deployment",
        description:
          "A cloud platform for static sites and serverless functions, ideal for Next.js.",
        url: "https://vercel.com",
      },
    ],
  },
  {
    category: "Learning & Practice",
    items: [
      {
        title: "Developer Roadmaps",
        description:
          "Community-curated roadmaps, study plans, and learning paths for developers.",
        url: "https://roadmap.sh",
      },
      {
        title: "Frontend Mentor",
        description:
          "Solve real-world frontend challenges to improve HTML, CSS, and JS skills.",
        url: "https://www.frontendmentor.io",
      },
      {
        title: "Striver's A2Z DSA Course",
        description:
          "A comprehensive Data Structures and Algorithms course with practice problems.",
        url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
      },
    ],
  },
  {
    category: "Articles & Blogs",
    items: [
      {
        title: "Chrome for Developers Blog",
        description:
          "Official updates, features, and performance tips from the Google Chrome team.",
        url: "https://developer.chrome.com/blog",
      },
      {
        title: "Consistent Fluid Type & Spacing",
        description:
          "An article on creating robust fluid typography and spacing systems with CSS.",
        url: "https://css-tricks.com/consistent-fluidly-scaling-type-and-spacing",
      },
      {
        title: "CSS-Tricks",
        description:
          "A popular blog covering CSS, layouts, UI tips, and general web development news.",
        url: "https://css-tricks.com",
      },
      {
        title: "Nerdy Dev – Web Development Blog",
        description:
          "A blog covering web development topics, tutorials, and tips.",
        url: "https://nerdy.dev",
      },
    ],
  },
  {
    category: "Portfolio Inspirations",
    items: [
      {
        title: "Brittany Chiang – Developer Portfolio",
        description:
          "A clean, single-page developer portfolio with a focus on project presentation.",
        url: "https://brittanychiang.com",
      },
      {
        title: "Lee Robinson – Developer Portfolio",
        description:
          "A super minimal portfolio website built with Tailwind CSS.",
        url: "https://leerob.com",
      },
      {
        title: "Manu Arora – Freelancer Portfolio",
        description:
          "A minimal and elegant freelancer portfolio with smooth animations.",
        url: "https://manuarora.in",
      },
      {
        title: "Ram Maheshwari – Developer Portfolio",
        description:
          "An interactive developer portfolio featuring GSAP animations and a clean layout.",
        url: "https://www.rammaheshwari.com",
      },
      {
        title: "Spotlight – Portfolio Template",
        description:
          "A sleek and professional portfolio template built with Tailwind CSS.",
        url: "https://spotlight.tailwindui.com",
      },
    ],
  },
  {
    category: "Productivity Software",
    items: [
      {
        title: "Cursor – AI Code Editor",
        description:
          "An AI-native code editor designed for pair-programming with AI.",
        url: "https://cursor.com",
      },
      {
        title: "Notion – All-in-one Workspace",
        description:
          "A unified workspace for notes, documentation, project management, and wikis.",
        url: "https://www.notion.com",
      },
      {
        title: "VS Code – Code Editor",
        description:
          "A powerful and popular open-source code editor with extensive plugin support.",
        url: "https://code.visualstudio.com",
      },
    ],
  },
  {
    category: "Templates & Resumes",
    items: [
      {
        title: "Jake's Resume – LaTeX Template",
        description:
          "A clean, single-column LaTeX resume template ideal for software engineers.",
        url: "https://www.overleaf.com/latex/templates/jakes-resume-anonymous/cstpnrbkhndn",
      },
    ],
  },
];
