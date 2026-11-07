import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";
import { parseBody } from "next-sanity/webhook";

// Called by a Sanity GROQ webhook on create/update/delete with the projection
// `{_type}`. Invalidates every cached query tagged with that document type.
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return new Response("SANITY_REVALIDATE_SECRET is not set", { status: 500 });
  }

  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(
      req,
      secret,
    );

    if (!isValidSignature) {
      return new Response("Invalid signature", { status: 401 });
    }
    if (!body?._type) {
      return new Response("Missing _type in webhook body", { status: 400 });
    }

    // expire: 0 so the next visitor gets fresh content instead of one stale render
    revalidateTag(body._type, { expire: 0 });

    return Response.json({
      revalidated: true,
      tag: body._type,
      now: Date.now(),
    });
  } catch (error) {
    console.error(error);
    return new Response("Failed to process webhook", { status: 500 });
  }
}
