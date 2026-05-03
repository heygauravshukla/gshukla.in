interface Bookmark {
  title: string;
  href: string;
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
        title: "Awesome Screenshot - Screen Capture & Recorder",
        href: "https://www.awesomescreenshot.com",
      },
      {
        title: "Cursorful - Browser Screen Recorder with Auto Zoom",
        href: "https://cursorful.com",
      },
      {
        title: "Excalidraw - Collaborative Whiteboard",
        href: "https://excalidraw.com",
      },
      {
        title: "Adobe Express - Image Resizer",
        href: "https://www.adobe.com/express/feature/image/resize",
      },
      {
        title: "Notion - Notes, Docs, Project Management Workspace",
        href: "https://www.notion.com",
      },
      {
        title: "OpenCut - Web-based Video Editor",
        href: "https://opencut.app",
      },
      {
        title: "Photopea - Online PSD/XD/Sketch Editor",
        href: "https://www.photopea.com",
      },
      {
        title: "Ray.so - Code Screenshot Generator",
        href: "https://www.ray.so",
      },
    ],
  },
  {
    category: "Developer Resources",
    items: [
      {
        title: "Clippy - CSS clip-path Generator",
        href: "https://bennettfeely.com/clippy",
      },
      {
        title: "Favicon Generator - Multi-format Icons",
        href: "https://redketchup.io/favicon-generator",
      },
      {
        title: "Fluid Typography Calculator - CSS clamp Generator",
        href: "https://royalfig.github.io/fluid-typography-calculator",
      },
      {
        title: "Google Webfonts Helper - Self-host Fonts",
        href: "https://gwfh.mranftl.com/fonts",
      },
      {
        title: "Hero Patterns - SVG Background Patterns",
        href: "https://heropatterns.com",
      },
      {
        title: "InfinityFree - Free PHP/MySQL Hosting",
        href: "https://infinityfree.com",
      },
      { title: "npmx - npm Package Explorer", href: "https://npmx.dev" },
      {
        title: "Open Props - CSS Variables Framework",
        href: "https://open-props.style",
      },
      {
        title: "React Icons - Icon Library for React",
        href: "https://react-icons.github.io/react-icons",
      },
      {
        title: "Skills.sh - Agent Skills Directory",
        href: "https://skills.sh",
      },
      {
        title: "Squoosh - Image Compression Tool",
        href: "https://squoosh.app",
      },
    ],
  },
  {
    category: "Free APIs",
    items: [
      { title: "EmailJS - Client-side Email API", href: "https://emailjs.com" },
      { title: "IPify - Geolocation API", href: "https://geo.ipify.org" },
      {
        title: "JSONPlaceholder - Fake REST API",
        href: "https://jsonplaceholder.typicode.com",
      },
      {
        title: "OpenWeatherMap - Weather API",
        href: "https://openweathermap.org",
      },
      {
        title: "Spoo.me - URL Shortener API",
        href: "https://docs.spoo.me/introduction",
      },
    ],
  },
  {
    category: "Learning & Practice",
    items: [
      {
        title: "Chrome for Developers - Blog",
        href: "https://developer.chrome.com/blog",
      },
      {
        title: "Consistent Fluid Type & Spacing - CSS-Tricks Guide",
        href: "https://css-tricks.com/consistent-fluidly-scaling-type-and-spacing",
      },
      {
        title: "CSS-Tricks - Web Dev Articles & Guides",
        href: "https://css-tricks.com",
      },
      { title: "Developer Roadmaps - roadmap.sh", href: "https://roadmap.sh" },
      {
        title: "Frontend Mentor - Frontend Challenges",
        href: "https://www.frontendmentor.io",
      },
      {
        title: "GreatFrontEnd - Frontend Interview Prep",
        href: "https://www.greatfrontend.com",
      },
      { title: "Nerdy Dev - Web Dev Blog", href: "https://nerdy.dev" },
      {
        title: "Striver’s A2Z DSA - Sheet",
        href: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
      },
    ],
  },
  {
    category: "Portfolio Inspirations",
    items: [
      {
        title: "Brittany Chiang - Developer Portfolio",
        href: "https://brittanychiang.com",
      },
      {
        title: "Chánh Đại - Developer Portfolio",
        href: "https://chanhdai.com",
      },
      {
        title: "Lee Robinson - Developer Portfolio",
        href: "https://leerob.com",
      },
      {
        title: "Manu Arora - Freelancer Portfolio",
        href: "https://manuarora.in",
      },
      {
        title: "Spotlight - Tailwind Portfolio Template",
        href: "https://spotlight.tailwindui.com",
      },
    ],
  },
  {
    category: "Templates & Resumes",
    items: [
      {
        title: "Jake’s Resume - LaTeX Template",
        href: "https://www.overleaf.com/latex/templates/jakes-resume-anonymous/cstpnrbkhndn",
      },
    ],
  },
];
