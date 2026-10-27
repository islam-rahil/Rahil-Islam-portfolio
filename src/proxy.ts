import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Send "/" to /fr or /en based on the browser's preferred language.
export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept-language") ?? "";
  const preferred = accept.split(",")[0]?.trim().toLowerCase() ?? "";
  const locale = preferred.startsWith("fr") ? "fr" : "en";
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: "/",
};
