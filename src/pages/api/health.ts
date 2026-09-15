import type { APIRoute } from "astro";
export const GET: APIRoute = () =>
  new Response(JSON.stringify({ status: "ok", service: "flagmint" }), {
    headers: { "content-type": "application/json" },
  });
