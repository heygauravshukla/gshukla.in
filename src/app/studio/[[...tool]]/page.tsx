/**
 * Embedded Sanity Studio — catch-all under /studio
 * @see https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from "next-sanity/studio";

import config from "../../../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
