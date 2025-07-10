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
        title: "Received my degree in convocation",
        description:
          "Attended convocation held in April and got some memories.",
      },
      {
        title: "Technical Projects Portfolio",
        description:
          "Developed multiple web applications using React, Next.js, and modern technologies.",
      },
    ],
  },
  {
    year: 2024,
    achievements: [
      {
        title: "Graduated with Computer Science degree",
        description:
          "Completed my Bachelor's degree with 7.44 CGPA and specialization in software engineering.",
      },
    ],
  },
  {
    year: 2020,
    achievements: [
      {
        title: "Started B.Tech in Computer Science",
        description:
          "Commenced undergraduate studies at CGC Jhanjeri, focusing on software engineering fundamentals.",
      },
      {
        title: "Academic Excellence Award",
        description:
          "Secured 93.56% in Class XII, recognized in Ajit newspaper for outstanding academic performance.",
      },
    ],
  },
];
