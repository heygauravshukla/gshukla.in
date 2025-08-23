interface Achievement {
  title: string;
  description: string;
}

interface TimelineItem {
  year: number;
  achievements: Achievement[];
}

export const timeline: TimelineItem[] = [
  {
    year: 2025,
    achievements: [
      {
        title: "Frontend Intern at RW Infotech",
        description:
          "Started my professional journey as a Frontend Intern, contributing to real-world projects and enhancing UI/UX experiences.",
      },
      {
        title: "Launched Personal Portfolio Website",
        description:
          "Designed and developed a modern, responsive portfolio using Next.js, Tailwind CSS, and TypeScript to showcase my work.",
      },
      {
        title: "Graduation Convocation",
        description:
          "Received my Bachelor's degree at the April convocation ceremony, celebrating academic and personal milestones.",
      },
      {
        title: "Built 'Shortly' – URL Shortener App",
        description:
          "Developed a feature-rich URL shortener with persistent storage to improve productivity and learn API integration.",
      },
      {
        title: "Developed IP Address Tracker",
        description:
          "Created an IP tracker app leveraging APIs to detect geolocation data, with a focus on security and fraud prevention use cases.",
      },
    ],
  },
  {
    year: 2024,
    achievements: [
      {
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
        title: "Started B.Tech in Computer Science & Engineering",
        description:
          "Began undergraduate studies at CGC Jhanjeri with a focus on software engineering and modern web technologies.",
      },
      {
        title: "Academic Excellence Recognition",
        description:
          "Awarded for securing 93.56% in Class XII, featured in Ajit newspaper for academic distinction.",
      },
    ],
  },
];
