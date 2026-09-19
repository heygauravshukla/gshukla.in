import { createClient } from "next-sanity";
export const client = createClient({
  projectId: "60os6ewn",
  dataset: "production",
  apiVersion: "2026-05-15",
  useCdn: true,
});
