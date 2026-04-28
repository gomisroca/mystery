import { NextRequest, NextResponse } from "next/server";
import { verifyProgressToken, COOKIE_NAME } from "@/lib/jwt";

const PROTECTED_ROUTES: Record<string, string> = {
  // JWT-protected routes go here for future puzzles
};

const VISIT_COOKIES: Record<string, string> = {
  "/static/files/declassified": "visited_declassified",
  "/nightfall": "visited_nightfall",
  "/1978-08-10": "visited_1978",
  "/eyes-only": "visited_eyes_only",
  "/operation-sundown": "visited_sundown",
  "/vladivostok": "visited_vladivostok",
  "/echo7": "visited_echo7",
};
const CLEARANCE_ROUTES: Record<
  string,
  { cookie: string; value: string; redirect: string }
> = {
  "/1978-08-10": {
    cookie: "clearance_level",
    value: "SIGMA-7",
    redirect: "/eyes-only",
  },
};
export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const res = NextResponse.next();

  const clearanceCheck = CLEARANCE_ROUTES[pathname];
  if (clearanceCheck) {
    const token = req.cookies.get(clearanceCheck.cookie)?.value;
    if (token === clearanceCheck.value) {
      return NextResponse.redirect(new URL(clearanceCheck.redirect, req.url));
    }
  }

  const visitCookieName = VISIT_COOKIES[pathname];
  if (visitCookieName && !req.cookies.has(visitCookieName)) {
    res.cookies.set(visitCookieName, "1", {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
      path: "/",
    });
  }

  const requiredPuzzle = PROTECTED_ROUTES[pathname];
  if (!requiredPuzzle) return res;

  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token) return NextResponse.redirect(new URL("/", req.url));

  const progress = await verifyProgressToken(token);
  if (!progress?.solvedPuzzles.includes(requiredPuzzle)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: [
    "/static/files/declassified",
    "/nightfall",
    "/1978-08-10",
    "/eyes-only",
    "/operation-sundown",
    "/vladivostok",
    "/echo7",
  ],
};
