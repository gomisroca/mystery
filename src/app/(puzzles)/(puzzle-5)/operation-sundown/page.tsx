/* eslint-disable react/jsx-no-comment-textnodes */

export const metadata = {
  title: "Operation Sundown — Personnel File",
  description: "CIA Archive — Sigma-7 Clearance Required",
};

export default async function OperationSundownPage() {
  return (
    <main className="min-h-screen bg-[#0c0a08] px-4 py-6 font-mono text-[#a09080]">
      {/* Top bar */}
      <div
        className="flex justify-between border-b border-[#2a2018] pb-4 mb-8
        text-[10px] text-[#4a3a28] tracking-widest"
      >
        <span>// OPERATION SUNDOWN — PERSONNEL FILE</span>
        <span>CLASSIFICATION: TS/SCI // SIGMA-7</span>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Subject ID */}
        <div className="border border-[#2a2018] p-6">
          <p className="text-[9px] text-[#4a3a28] tracking-[0.25em] mb-4">
            // SUBJECT IDENTIFICATION
          </p>
          <div className="grid grid-cols-[80px_1fr] gap-px bg-[#2a2018]">
            <div className="bg-[#0c0a08] flex items-center justify-center p-4">
              <svg
                viewBox="0 0 60 80"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="80"
              >
                <rect width="60" height="80" fill="#1a1408" />
                <circle cx="30" cy="28" r="14" fill="#2a2018" />
                <rect
                  x="8"
                  y="52"
                  width="44"
                  height="28"
                  rx="4"
                  fill="#2a2018"
                />
                <circle cx="30" cy="26" r="10" fill="#3a3020" />
                <rect
                  x="14"
                  y="54"
                  width="32"
                  height="20"
                  rx="2"
                  fill="#302818"
                />
                <rect
                  x="2"
                  y="2"
                  width="56"
                  height="76"
                  fill="none"
                  stroke="#3a3020"
                  strokeWidth="0.5"
                />
                <text
                  x="4"
                  y="76"
                  fontFamily="monospace"
                  fontSize="5"
                  fill="#3a2a18"
                >
                  CIA-PHOTO
                </text>
              </svg>
            </div>
            <div className="bg-[#0c0a08] p-4 space-y-3">
              {[
                { key: "NAME", val: "MARLOWE, DANIEL J.", hi: true },
                {
                  key: "DESIGNATION",
                  val: "ANALYST // DIRECTORATE OF INTELLIGENCE",
                },
                { key: "STATUS", val: "MISSING — PRESUMED DEFECTED", hi: true },
                { key: "LAST CONTACT", val: "14 NOV 1973 // SAME AS ECHO-7" },
              ].map(({ key, val, hi }) => (
                <div key={key}>
                  <p className="text-[9px] text-[#4a3a28] tracking-[0.2em]">
                    {key}
                  </p>
                  <p
                    className={`text-[11px] tracking-widest ${hi ? "text-[#a09070]" : "text-[#7a6a58]"}`}
                  >
                    {val}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case summary */}
        <div className="border border-t-0 border-[#2a2018] p-6">
          <p className="text-[9px] text-[#4a3a28] tracking-[0.25em] mb-4">
            // CASE SUMMARY
          </p>
          <div
            className="space-y-4 text-xs leading-loose text-[#7a6a50]"
            style={{ fontFamily: "'Special Elite', serif" }}
          >
            <p>
              Analyst <span className="text-[#b09060]">Daniel J. Marlowe</span>{" "}
              was the primary intelligence handler for operative ECHO-7 during
              Operation Nightfall. He was the last known agency contact to
              communicate with ECHO-7 before the November 1973 transmission.
              Marlowe failed to report for duty on{" "}
              <span className="text-[#b09060]">15 NOV 1973</span> and has not
              been officially located since.
            </p>
            <p>
              Internal review suggests Marlowe may have embedded a{" "}
              <span className="bg-[#1a1208] text-transparent select-none px-1">
                XXXXXXXXXX
              </span>{" "}
              protocol within the ECHO-7 node prior to its lockdown — a personal
              failsafe, inconsistent with standard agency procedure. The
              protocol has not been formally identified or disabled. Its purpose
              is <span className="text-[#b09060]">unknown</span>. Analysts who
              have reviewed the node report anomalous behaviour in the{" "}
              <span className="bg-[#1a1208] text-transparent select-none px-1">
                XXXXXXXXXX
              </span>{" "}
              layer that has not been explained by{" "}
              <span className="bg-[#1a1208] text-transparent select-none px-1">
                XXXXXXXXXX
              </span>{" "}
              division.
            </p>
            <p>
              Marlowe&apos;s personal records — including a private
              correspondence archive maintained under the alias{" "}
              <span className="text-[#b09060]">vladivostok</span> — were flagged
              for review but never fully investigated. The archive is believed
              to still exist somewhere on the public network.
            </p>
          </div>
        </div>

        {/* Technical annex */}
        <div className="border border-t-0 border-[#2a2018] p-6">
          <p className="text-[9px] text-[#4a3a28] tracking-[0.25em] mb-4">
            // TECHNICAL ANNEX — NODE ANOMALY REPORT
          </p>
          <div
            className="relative border border-[#3a3020] bg-[#ede5d0] p-6 mb-4"
            style={{ fontFamily: "'Special Elite', serif" }}
          >
            <span
              className="absolute -top-1.75 left-3 bg-[#ede5d0] px-1.5
              text-[8px] text-[#4a3a1a] tracking-widest"
            >
              TECHNICAL ANNEX
            </span>
            <p className="text-xs text-[#2a1a0a] leading-loose">
              During the 2019 node restoration, engineers identified an
              undocumented object embedded in the page runtime. The object
              responds to method calls but its full interface has not been
              mapped. It is believed to be Marlowe&apos;s personal failsafe — a
              channel left open for ECHO-7 in the event of compromise.
              <br />
              <br />
              The object is present in the current session. Engineers have been
              unable to determine its trigger condition without risking{" "}
              <span className="bg-[#1a1208] text-transparent select-none px-1">
                XXXXXXXXXX
              </span>{" "}
              to the wider archive. The matter has been deferred pending{" "}
              <span className="text-[#7a3a1a]">further review</span>.
            </p>
          </div>

          {/* Engineer's note — the explicit breadcrumb */}
          <div
            className="border border-[#2a2018] bg-[#080608] p-4
            text-[10px] text-[#3a3028] leading-loose tracking-[0.05em]"
          >
            // NOTE — RESTORATION ENGINEER LOG, 2019-11-03
            <br />
            Object identifier: <span className="text-[#6a5a38]">__echo</span>.
            Accepts a single string argument via its{" "}
            <span className="text-[#6a5a38]">contact</span> method. We
            don&apos;t know what it&apos;s waiting for. Recommend anyone with
            knowledge of Marlowe&apos;s operational callsigns attempt contact
            directly. —{" "}
            <span className="bg-[#1a1208] text-transparent select-none px-1">
              XXXXXXX
            </span>
          </div>
        </div>

        <div
          className="flex justify-between text-[9px] text-[#3a2a18]
          tracking-[0.15em] mt-4"
        >
          <span>// END OF PERSONNEL FILE — SUNDOWN</span>
        </div>
      </div>

      {/* The actual __echo object — visible in console/source */}
      <EchoProtocol />
    </main>
  );
}

function EchoProtocol() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        /* emergency contact protocol — invoke only if compromised */
        /* window.__echo.contact(callsign)                         */
        window.__echo = {
          contact: function(callsign) {
            if (typeof callsign !== 'string') {
              return 'INVALID INPUT — STRING EXPECTED';
            }
            if (callsign.toUpperCase() === 'NIGHTFALL') {
              return 'EXTRACTION ROUTE CONFIRMED — /vladivostok';
            }
            return 'CALLSIGN NOT RECOGNISED — CONTACT ABORTED';
          }
        };
      `,
      }}
    />
  );
}
