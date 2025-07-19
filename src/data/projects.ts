interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  repository?: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    title: "Shortly - URL Shortener",
    description:
      "A URL shortener app that shortens longer URLs to shareable concise links.",
    image: "/projects/shortly-url-shortener.webp",
    link: "https://sus-gshukla.vercel.app",
    repository: "https://github.com/heygauravshukla/shortly-url-shortener",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui"],
  },
  {
    title: "IP Address Tracker",
    description:
      "A IP address tracker app that shows the location of an IP address.",
    image: "/projects/ip-address-tracker.webp",
    link: "https://iat-gshukla.vercel.app",
    repository: "https://github.com/heygauravshukla/ip-address-tracker",
    stack: ["Next.js", "Tailwind CSS", "REST API"],
  },
  {
    title: "Weather App",
    description:
      "A weather app that shows the current weather details of a city.",
    image: "/projects/weather-app.jpg",
    link: "https://weather-app-gshukla.vercel.app",
    repository: "https://github.com/heygauravshukla/weather-app",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Bento grid",
    description:
      "A modern and responsive grid layout for displaying content in a visually appealing way.",
    image: "/projects/bento-grid.webp",
    link: "https://heygauravshukla.github.io/bento-grid",
    repository: "https://github.com/heygauravshukla/bento-grid",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Social Links Profile",
    description:
      "A social links profile page to showcase your social media profiles.",
    image: "/projects/social-links-profile.webp",
    link: "https://heygauravshukla.github.io/social-links-profile",
    repository: "https://github.com/heygauravshukla/social-links-profile",
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
  },
];
