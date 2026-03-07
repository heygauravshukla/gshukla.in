interface Achievement {
  _key?: string;
  date?: string;
  title: string;
  description?: string;
}

interface TimelineItem {
  year: number;
  achievements: Achievement[];
}

export const timeline: TimelineItem[] = [
  {
    year: 2026,
    achievements: [
      {
        date: "2026-03-01",
        title: "Jr. Frontend Developer at RW Infotech",
        description:
          "Promoted to Junior Frontend Developer role, continuing to build responsive web applications and improve user experiences.",
      },
    ],
  },
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
