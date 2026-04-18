import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      "remark-gfm",
      "remark-frontmatter",
      ["remark-mdx-frontmatter", { name: "metadata" }],
    ],
    rehypePlugins: [
      "rehype-highlight",
      "rehype-slug",
      ["rehype-autolink-headings", { behavior: "append", properties: { ariaLabel: "Link to section", className: ["anchor"] } }]
    ],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
