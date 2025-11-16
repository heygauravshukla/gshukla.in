import { type SchemaTypeDefinition } from "sanity";
import { postType } from "./postType";
import timeline from "./timeline";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, timeline],
};
