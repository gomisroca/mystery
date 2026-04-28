/* eslint-disable react/jsx-no-comment-textnodes */

export const metadata = {
  title: "Operation Nightfall — Dossier",
  description: "Directorate of Operations — Eyes Only",
};

export default async function NightfallPage() {
  return (
    <main className="min-h-screen bg-[#0e0e0c] px-4 py-6 font-mono text-[#a0a090]">
      {/* Top bar */}
      <div className="flex justify-between border-b border-[#1e1e18] pb-4 mb-8 text-[10px] text-[#3a3a2a] tracking-widest">
        <span>// OPERATION NIGHTFALL — DOSSIER</span>
        <span>CLASSIFICATION: TS/SCI</span>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Dossier header */}
        <div className="border border-[#2a2a1e] p-6 flex justify-between items-start">
          <div style={{ fontFamily: "'Special Elite', serif" }}>
            <h1 className="text-[22px] text-[#c8c0a0] tracking-widest mb-1">
              OPERATION NIGHTFALL
            </h1>
            <p className="text-[10px] text-[#4a4a38] tracking-[0.2em]">
              DIRECTORATE OF OPERATIONS // EYES ONLY
            </p>
            <p className="text-[10px] text-[#4a4a38] tracking-[0.2em] mt-1">
              CASE CONTINUATION: 1973-07
            </p>
          </div>
          <div className="border-2 border-[#8a7a3a] px-3 py-1.5 text-center -rotate-3">
            <p
              className="text-sm text-[#8a7a3a] tracking-widest"
              style={{ fontFamily: "'Special Elite', serif" }}
            >
              DECLASSIFIED
            </p>
            <p className="text-[9px] text-[#5a5a2a] tracking-widest">
              PARTIAL RELEASE
            </p>
          </div>
        </div>

        {/* Background section */}
        <div className="border border-t-0 border-[#2a2a1e] p-6">
          <p className="text-[9px] text-[#3a3a2a] tracking-[0.25em] mb-4">
            // BACKGROUND — OPERATION SUMMARY
          </p>
          <div
            style={{ fontFamily: "'Special Elite', serif" }}
            className="text-sm text-[#7a7a60] leading-loose space-y-4"
          >
            <p>
              Operation Nightfall was initiated following the disappearance of
              operative{" "}
              <span className="bg-[#1a1a14] text-transparent select-none px-1">
                XXXXXXXXXX
              </span>{" "}
              in November 1973. The operation&apos;s primary objective was the
              recovery of{" "}
              <span className="bg-[#1a1a14] text-transparent select-none px-1">
                XXXXXXXXXXXXXXXX
              </span>{" "}
              believed to have been transferred across the{" "}
              <span className="text-[#b0a870]">nineteenth parallel</span> during
              a{" "}
              <span className="bg-[#1a1a14] text-transparent select-none px-1">
                XXXXXXXXX
              </span>{" "}
              exchange. Nineteen confirmed casualties were recorded before the
              operation was suspended.
            </p>
            <p>
              All remaining assets were placed under statute{" "}
              <span className="text-[#b0a870]">78-C</span> of the
              Director&apos;s Emergency Powers Act, granting{" "}
              <span className="bg-[#1a1a14] text-transparent select-none px-1">
                XXXXXXXXXX
              </span>{" "}
              authority to terminate field activities without Congressional
              notification. The statute remains classified. The agency has not
              confirmed whether the final phase of the operation was executed.
            </p>
          </div>
        </div>

        {/* Surveillance photos */}
        <div className="border border-t-0 border-[#2a2a1e] p-6">
          <p className="text-[9px] text-[#3a3a2a] tracking-[0.25em] mb-4">
            // SURVEILLANCE — RECOVERED PHOTOGRAPHS
          </p>

          <div className="grid grid-cols-2 gap-px bg-[#2a2a1e]">
            {/* Photo 1 — building with door number 08 */}
            <div className="bg-[#0e0e0c]">
              <svg
                viewBox="0 0 320 220"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                <rect width="320" height="220" fill="#1a1a14" />
                <line
                  x1="0"
                  y1="40"
                  x2="320"
                  y2="38"
                  stroke="#222218"
                  strokeWidth="0.5"
                />
                <line
                  x1="0"
                  y1="80"
                  x2="320"
                  y2="82"
                  stroke="#222218"
                  strokeWidth="0.5"
                />
                <line
                  x1="0"
                  y1="120"
                  x2="320"
                  y2="118"
                  stroke="#222218"
                  strokeWidth="0.5"
                />
                <line
                  x1="0"
                  y1="160"
                  x2="320"
                  y2="162"
                  stroke="#222218"
                  strokeWidth="0.5"
                />
                <rect
                  x="80"
                  y="60"
                  width="160"
                  height="120"
                  fill="#252520"
                  rx="2"
                />
                <rect
                  x="90"
                  y="70"
                  width="140"
                  height="80"
                  fill="#1a1a16"
                  rx="1"
                />
                <rect x="100" y="75" width="50" height="65" fill="#202018" />
                <rect x="170" y="75" width="50" height="65" fill="#202018" />
                <rect x="156" y="90" width="8" height="30" fill="#2a2a22" />
                <rect x="90" y="150" width="140" height="6" fill="#1e1e1a" />
                <rect
                  x="128"
                  y="143"
                  width="14"
                  height="16"
                  fill="#2a2a20"
                  rx="1"
                />
                <text
                  x="135"
                  y="155"
                  fontFamily="'Special Elite', serif"
                  fontSize="11"
                  fill="#6a6a50"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  08
                </text>
                <rect
                  x="2"
                  y="2"
                  width="316"
                  height="216"
                  fill="none"
                  stroke="#3a3a28"
                  strokeWidth="1"
                />
                <text
                  x="8"
                  y="214"
                  fontFamily="monospace"
                  fontSize="7"
                  fill="#3a3a28"
                >
                  SRV-4417-B
                </text>
                <text
                  x="270"
                  y="214"
                  fontFamily="monospace"
                  fontSize="7"
                  fill="#3a3a28"
                >
                  1/250s
                </text>
              </svg>
              <div className="text-[9px] text-[#3a3a2a] tracking-[0.15em] px-2 py-1.5 border-t border-[#2a2a1e]">
                SURVEILLANCE — LOCATION UNKNOWN // REF: SRV-4417-B
              </div>
            </div>

            {/* Photo 2 — document with number 10 */}
            <div className="bg-[#0e0e0c]">
              <svg
                viewBox="0 0 320 220"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
              >
                <rect width="320" height="220" fill="#181812" />
                <rect
                  x="40"
                  y="30"
                  width="240"
                  height="160"
                  fill="#201e18"
                  rx="1"
                />
                <line
                  x1="40"
                  y1="60"
                  x2="280"
                  y2="60"
                  stroke="#2a2820"
                  strokeWidth="0.5"
                />
                <line
                  x1="40"
                  y1="90"
                  x2="280"
                  y2="90"
                  stroke="#2a2820"
                  strokeWidth="0.5"
                />
                <line
                  x1="40"
                  y1="120"
                  x2="280"
                  y2="120"
                  stroke="#2a2820"
                  strokeWidth="0.5"
                />
                <line
                  x1="40"
                  y1="150"
                  x2="280"
                  y2="150"
                  stroke="#2a2820"
                  strokeWidth="0.5"
                />
                <rect
                  x="48"
                  y="38"
                  width="60"
                  height="14"
                  fill="#2a2820"
                  rx="1"
                />
                <rect
                  x="48"
                  y="68"
                  width="80"
                  height="8"
                  fill="#252318"
                  rx="1"
                />
                <rect
                  x="48"
                  y="82"
                  width="65"
                  height="8"
                  fill="#252318"
                  rx="1"
                />
                <rect
                  x="48"
                  y="96"
                  width="75"
                  height="8"
                  fill="#252318"
                  rx="1"
                />
                <rect
                  x="190"
                  y="38"
                  width="80"
                  height="50"
                  fill="#1e1c16"
                  rx="1"
                  stroke="#302e22"
                  strokeWidth="0.5"
                />
                <text
                  x="230"
                  y="70"
                  fontFamily="'Special Elite', serif"
                  fontSize="22"
                  fill="#7a7050"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  10
                </text>
                <rect
                  x="48"
                  y="128"
                  width="100"
                  height="8"
                  fill="#252318"
                  rx="1"
                />
                <rect
                  x="48"
                  y="142"
                  width="85"
                  height="8"
                  fill="#252318"
                  rx="1"
                />
                <text
                  x="48"
                  y="52"
                  fontFamily="'Special Elite', serif"
                  fontSize="9"
                  fill="#6a6040"
                  letterSpacing="1"
                >
                  FIELD REPORT
                </text>
                <rect
                  x="2"
                  y="2"
                  width="316"
                  height="216"
                  fill="none"
                  stroke="#3a3828"
                  strokeWidth="1"
                />
                <text
                  x="8"
                  y="214"
                  fontFamily="monospace"
                  fontSize="7"
                  fill="#3a3828"
                >
                  SRV-4418-C
                </text>
              </svg>
              <div className="text-[9px] text-[#3a3a2a] tracking-[0.15em] px-2 py-1.5 border-t border-[#2a2a1e]">
                DOCUMENT RECOVERY — PARTIAL // REF: SRV-4418-C
              </div>
            </div>
          </div>

          {/* Field notes */}
          <div
            className="relative border border-[#3a3020] bg-[#f5edd0] p-5 mt-4 rotate-[0.3deg]"
            style={{ fontFamily: "'Special Elite', serif" }}
          >
            <span className="absolute -top-1.75 left-3 bg-[#f5edd0] px-1.5 text-[8px] text-[#5a4a2a] tracking-widest">
              FIELD NOTES — AGENT REPORT
            </span>
            <p className="text-xs text-[#3a2a0a] leading-loose">
              Photos recovered from{" "}
              <span className="bg-[#2a1a0a] text-transparent select-none px-1">
                XXXXXXXXX
              </span>{" "}
              safehouse,{" "}
              {/* August is a load-bearing word — it is the month fragment: 08 */}
              <span className="text-[#8a3a2a]">August</span> sweep. Contents of
              document in SRV-4418-C remain under{" "}
              <span className="bg-[#2a1a0a] text-transparent select-none px-1">
                XXXXXXXX
              </span>{" "}
              review. Building in SRV-4417-B has not been identified. Local
              assets report the address was abandoned by{" "}
              <span className="text-[#8a3a2a]">late summer</span>.
              Cross-reference with{" "}
              <span className="bg-[#2a1a0a] text-transparent select-none px-1">
                XXXXXXXXXX
              </span>
              .
            </p>
          </div>
        </div>

        {/* Signals intelligence */}
        <div className="border border-t-0 border-[#2a2a1e] p-6">
          <p className="text-[9px] text-[#3a3a2a] tracking-[0.25em] mb-4">
            // SIGNALS INTELLIGENCE
          </p>
          <div
            style={{ fontFamily: "'Special Elite', serif" }}
            className="text-sm text-[#7a7a60] leading-loose space-y-4"
          >
            <p>
              A secondary transmission was detected on the same frequency as the
              November intercept. Timestamp indicates origin{" "}
              <span className="bg-[#1a1a14] text-transparent select-none px-1">
                XXXXXXXXXX
              </span>
              , routed through a relay station decommissioned under directive{" "}
              <span className="bg-[#1a1a14] text-transparent select-none px-1">
                XXXXXXX
              </span>
              . The signal fragment contained a partial date reference. Analysis
              has been unable to determine whether this represents a scheduled
              meeting, an extraction window, or a dead drop confirmation. The
              fragment is reproduced below without alteration.
            </p>
          </div>

          {/* Redacted date — the format hint */}
          {/*
            The full date is 1978-08-10.
            19 = "nineteenth parallel" and "Nineteen confirmed casualties" above
            78 = statute "78-C" above
            08 = door number in SRV-4417-B and "August" in field notes
            10 = document stamp in SRV-4418-C
          */}
          <div
            className="bg-[#1a1a14] px-5 py-4 my-5"
            style={{
              borderLeftWidth: "3px",
              borderLeftColor: "#5a5a2a",
              borderLeftStyle: "solid",
            }}
          >
            <p className="text-[9px] text-[#4a4a2a] tracking-[0.2em] mb-2">
              // SIGNAL FRAGMENT — UNVERIFIED
            </p>
            <p
              className="text-[15px] text-[#a0903a] tracking-[0.2em]"
              style={{ fontFamily: "'Special Elite', serif" }}
            >
              <span className="bg-[#1a1a14] text-transparent select-none px-1">
                XXXX
              </span>
              {" — "}
              <span className="bg-[#1a1a14] text-transparent select-none px-1">
                XX
              </span>
              {" — "}
              <span className="bg-[#1a1a14] text-transparent select-none px-1">
                XX
              </span>
            </p>
          </div>

          <p
            className="text-sm text-[#7a7a60] leading-loose"
            style={{ fontFamily: "'Special Elite', serif" }}
          >
            Remaining digits have been withheld pending{" "}
            <span className="bg-[#1a1a14] text-transparent select-none px-1">
              XXXXXXXXXX
            </span>{" "}
            authorisation. Further analysis is pending review by SIGMA-level
            personnel.
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between text-[9px] text-[#3a3a2a] tracking-[0.15em] mt-4">
          <span>// END OF RECOVERED DOSSIER</span>
          <span>ARCHIVIST v0.1</span>
        </div>
      </div>
    </main>
  );
}
