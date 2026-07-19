interface Achievement {
  date?: string;
  title: string;
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
        title: "Promoted to Junior Frontend Developer at RW Infotech",
      },
    ],
  },
  {
    year: 2025,
    achievements: [
      {
        date: "2025-11-14",
        title: "Employee of the Month (Oct 2025) at RW Infotech",
      },
      {
        date: "2025-08-12",
        title: "Joined RW Infotech as Frontend Intern",
      },
      {
        date: "2025-04-20",
        title: "Graduation Convocation – Bachelor's Degree Awarded",
      },
    ],
  },
  {
    year: 2024,
    achievements: [
      {
        date: "2024-06-19",
        title: "Graduated with B.Tech in Computer Science (7.44 CGPA)",
      },
    ],
  },
  {
    year: 2023,
    achievements: [
      {
        date: "2023-05-18",
        title: "NPTEL Cloud Computing Certification (Elite, IIT Kharagpur)",
      },
    ],
  },
  {
    year: 2021,
    achievements: [
      {
        date: "2021-11-26",
        title:
          "Programming Foundations Certification (Duke University, Coursera)",
      },
    ],
  },
  {
    year: 2020,
    achievements: [
      {
        date: "2020-08-22",
        title:
          "Started B.Tech in Computer Science & Engineering at CGC Jhanjeri",
      },
      {
        date: "2020-05-08",
        title:
          "Class XII: Scored 93.56% (Academic Excellence Recognition, Ajit)",
      },
    ],
  },
];
