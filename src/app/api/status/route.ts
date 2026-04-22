import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.json({
    status: "nominal",
    clearance: "verified",
    node: "ECHO-7",
    uptime: "00:00:01",
    files_available: "partial",
  });

  res.headers.set("X-Archive-Ref", "restricted/1973-R");
  res.headers.set("X-Node-Status", "authenticated");

  return res;
}
