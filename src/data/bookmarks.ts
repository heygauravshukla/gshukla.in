interface Bookmark {
  title: string;
  description: string;
  href: string;
}

interface BookmarkItem {
  category: string;
  items: Bookmark[];
}

export const bookmarks: BookmarkItem[] = [
  {
    category: "Utilities",
    items: [
      {
        title: "Favicon Generator",
        description: "Generate favicon from text or image",
        href: "https://redketchup.io/favicon-generator",
      },
      {
        title: "Fluid Typography Calculator",
        description: "Calculate a fluid typography scale",
        href: "https://royalfig.github.io/fluid-typography-calculator",
      },
      {
        title: "Gitingest",
        description:
          "Turn any Git repository into a simple text digest of its codebase.",
        href: "https://gitingest.com",
      },
      {
        title: "Squoosh - Image Optimizer",
        description:
          "Optimize image assets, reduce image sizes into any format.",
        href: "https://squoosh.app",
      },
    ],
  },
  {
    category: "UI",
    items: [
      {
        title: "shadcn/ui - React components library",
        description: "A set of beautifully-designed, accessible components.",
        href: "https://ui.shadcn.com",
      },
      {
        title: "Tweakcn - Customize shadcn/ui themes",
        description: "Customize shadcn/ui theme with prebuilt themes.",
        href: "https://tweakcn.com",
      },
      {
        title: "Motion library",
        description: "Add animations to your React project.",
        href: "https://motion.dev",
      },
      {
        title: "Open Props",
        description: "Supercharged CSS variables.",
        href: "https://open-props.style",
      },
    ],
  },
];
