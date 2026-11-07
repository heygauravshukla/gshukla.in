import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "60os6ewn",
  dataset: "production",
  apiVersion: "2026-05-15",
  // Next's data cache does the caching; the API CDN could hand back stale
  // data right after a publish webhook triggers revalidation
  useCdn: false,
});
