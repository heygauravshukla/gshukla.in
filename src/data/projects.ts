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
    title: "Tokners landing page",
    description: "Modern landing page showcasing blockchain services.",
    image: "/projects/tokners-landing-page.avif",
    link: "https://tokners-landing-page.vercel.app",
    stack: ["Next.js", "SCSS", "TypeScript"],
  },
  {
    title: "Real estate landing page",
    description:
      "Interactive real estate platform with modern design and features.",
    image: "/projects/real-estate-website.avif",
    link: "https://real-estate-website-gshukla.vercel.app",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui"],
  },
  {
    title: "Shortly - URL Shortener",
    description: "Transform long URLs into short, trackable links instantly.",
    image: "/projects/shortly-url-shortener.webp",
    link: "https://sus-gshukla.vercel.app",
    repository: "https://github.com/heygauravshukla/shortly-url-shortener",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui", "REST API"],
  },
  {
    title: "IP Address Tracker",
    description: "Track IP addresses and view their locations on map.",
    image: "/projects/ip-address-tracker.webp",
    link: "https://iat-gshukla.vercel.app",
    repository: "https://github.com/heygauravshukla/ip-address-tracker",
    stack: ["Next.js", "Tailwind CSS", "REST API"],
  },
  {
    title: "Weather App",
    description: "Get real-time weather updates for cities worldwide.",
    image: "/projects/weather-app.jpg",
    link: "https://weather-app-gshukla.vercel.app",
    repository: "https://github.com/heygauravshukla/weather-app",
    stack: ["HTML", "CSS", "JavaScript", "REST API"],
  },
  {
    title: "Food website hero section",
    description:
      "An introductory hero section with interactive dish carouesel.",
    image: "/projects/food-website-homepage.avif",
    link: "https://food-website-homepage.vercel.app",
    stack: ["Next.js", "TypeScript", "GSAP"],
  },
  {
    title: "Image colors extractor",
    description: "An online tool to extract dominant colors from images.",
    image: "/projects/image-colors-extractor.avif",
    link: "https://image-colors-extractor.vercel.app",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "shadcn/ui",
      "Node Vibrant",
      "Cloudinary API",
    ],
  },
  {
    title: "Bento grid",
    description: "A modern and responsive grid layout for displaying content.",
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
