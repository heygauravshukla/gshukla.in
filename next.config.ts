import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    rehypePlugins: [["rehype-pretty-code", { theme: "github-dark" }]],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
