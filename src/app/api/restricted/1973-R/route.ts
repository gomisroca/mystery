import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    classification: "TS/SCI",
    node: "ECHO-7",
    operation: "NIGHTFALL",
    manifest_version: "1973-R",
    records: [
      {
        ref: "NF-001",
        type: "PERSONNEL",
        subject: "REDACTED",
        status: "REDACTED",
        extraction_point: "REDACTED",
      },
      {
        ref: "NF-002",
        type: "ASSET",
        subject: "REDACTED",
        status: "REDACTED",
        extraction_point: "REDACTED",
      },
      {
        ref: "NF-003",
        type: "LOCATION",
        subject: "REDACTED",
        status: "REDACTED",
        extraction_point: "REDACTED",
      },
      {
        ref: "NF-004",
        type: "OPERATIVE",
        subject: "ECHO-7",
        status: "UNRECOVERED",
        extraction_point: "operation-sundown",
        note: "Final extraction window. Asset never arrived.",
      },
      {
        ref: "NF-005",
        type: "HANDLER",
        subject: "REDACTED",
        status: "REDACTED",
        extraction_point: "REDACTED",
      },
    ],
    footer: "MANIFEST ENDS — REMAINING RECORDS WITHHELD",
  });
}
