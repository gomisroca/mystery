import { NextRequest, NextResponse } from "next/server";
import { verifyProgressToken, COOKIE_NAME } from "@/lib/jwt";

// Map of protected route → which puzzle must be solved to access it
const PROTECTED_ROUTES: Record<string, string> = {
  "/slug-of-puzzle-2": "cipher-one",
};

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const requiredPuzzle = PROTECTED_ROUTES[pathname];
  if (!requiredPuzzle) return NextResponse.next();

  const token = req.cookies.get(COOKIE_NAME)?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const progress = await verifyProgressToken(token);

  if (!progress?.solvedPuzzles.includes(requiredPuzzle)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/puzzle-2", "/puzzle-3"], // keep in sync with PROTECTED_ROUTES
};
