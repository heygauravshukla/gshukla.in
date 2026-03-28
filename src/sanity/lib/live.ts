import { defineLive } from "next-sanity/live";

import { client } from "./client";

export const { sanityFetch, SanityLive } = defineLive({
  client,
  // Optional: set `SANITY_API_READ_TOKEN` and pass `serverToken` / `browserToken` for draft previews and Presentation — see https://www.sanity.io/docs/apis-and-sdks/presentation-api
});
