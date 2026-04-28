/* eslint-disable react/jsx-no-comment-textnodes */

export const metadata = {
  title: "1978-08-10 — Archive Node ECHO-7",
  description: "CIA Internal Network — Node Echo",
};

export default async function ArchiveNodePage() {
  return (
    <main className="min-h-screen bg-[#080a08] px-4 py-6 font-mono text-[#7a9a7a]">
      {/* Top bar */}
      <div
        className="flex justify-between border-b border-[#142014] pb-4 mb-8
        text-[10px] text-[#2a4a2a] tracking-widest"
      >
        <span>// CIA INTERNAL NETWORK — NODE ECHO</span>
        <span>SESSION: UNAUTHENTICATED</span>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* System ID */}
        <div className="border border-[#1a2e1a] p-6">
          <p className="text-[9px] text-[#2a4a2a] tracking-[0.25em] mb-4">
            // SYSTEM IDENTIFICATION
          </p>
          <h1 className="text-xl text-[#5a8a5a] tracking-[0.15em] mb-1">
            ARCHIVE NODE — ECHO-7
          </h1>
          <p className="text-[10px] text-[#2a4a2a] tracking-[0.15em]">
            LAST ACTIVE: 10 AUG 1978 // STATUS: DORMANT
          </p>
        </div>

        {/* System log */}
        {/*
          Note: the 2019-11-03 restoration entries are Marlowe's fiction.
          He planted them to explain the node's existence. There was no
          official restoration. He never stopped running it.
        */}
        <div className="border border-t-0 border-[#1a2e1a] p-6">
          <p className="text-[9px] text-[#2a4a2a] tracking-[0.25em] mb-4">
            // SYSTEM LOG — RESTORED ENTRIES
          </p>
          <div className="space-y-0.5 text-[11px] leading-loose tracking-[0.05em]">
            {[
              {
                time: "1978-08-09 18:42",
                msg: "Node initialised. Operator:",
                val: "REDACTED",
                color: "text-[#3a6a3a]",
              },
              {
                time: "1978-08-09 22:17",
                msg: "Uplink established. Relay:",
                val: "STATION-4",
                color: "text-[#3a6a3a]",
              },
              {
                time: "1978-08-10 00:03",
                msg: "Operation Nightfall — final phase",
                val: "AUTHORISED",
                color: "text-[#3a6a3a]",
              },
              {
                time: "1978-08-10 02:44",
                msg: "Asset package transmitted. Recipient:",
                val: null,
                color: "text-[#3a6a3a]",
              },
              {
                time: "1978-08-10 03:11",
                msg: "WARNING — Uplink integrity degraded",
                val: null,
                color: "text-[#6a5a2a]",
              },
              {
                // Marlowe covering his tracks as he pulls Mara out
                time: "1978-08-10 03:14",
                msg: "WARNING — Operator authentication anomaly",
                val: null,
                color: "text-[#6a5a2a]",
              },
              {
                time: "1978-08-10 03:19",
                msg: "CRITICAL — Session terminated by remote directive",
                val: null,
                color: "text-[#6a2a2a]",
              },
              {
                time: "1978-08-10 03:19",
                msg: "Node locked. Reason:",
                val: null,
                color: "text-[#6a2a2a]",
                redact: true,
              },
              {
                time: "2019-11-03 09:12",
                msg: "Node restored — partial recovery only",
                val: null,
                color: "text-[#3a6a3a]",
              },
              {
                time: "2019-11-03 09:12",
                msg: "Restricted files require valid clearance token",
                val: null,
                color: "text-[#3a6a3a]",
                blink: true,
              },
            ].map(({ time, msg, val, color, redact, blink }, i) => (
              <p key={i} className={color}>
                [{time}] {msg}{" "}
                {redact && (
                  <span className="bg-[#1a1a10] text-transparent select-none px-1">
                    XXXXXXXXXXXXXXXXXX
                  </span>
                )}
                {val && !redact && (
                  <span className="text-[#6a9a6a]">{val}</span>
                )}
                {blink && <span className="animate-pulse">_</span>}
              </p>
            ))}
          </div>
        </div>

        {/* Memo — the clue */}
        <div className="border border-t-0 border-[#1a2e1a] p-6">
          <p className="text-[9px] text-[#2a4a2a] tracking-[0.25em] mb-4">
            // RECOVERED CORRESPONDENCE
          </p>
          <div
            className="relative border border-[#3a3020] bg-[#f0ead0] p-6"
            style={{ fontFamily: "'Special Elite', serif" }}
          >
            <span
              className="absolute -top-1.75 left-3 bg-[#f0ead0] px-1.5
              text-[8px] text-[#4a3a1a] tracking-widest"
            >
              INTERNAL MEMORANDUM
            </span>
            <p className="text-xs text-[#2a1a0a] leading-loose">
              TO: All field operators —{" "}
              <span className="bg-[#1a1a10] text-transparent select-none px-1">
                XXXXXXXX
              </span>{" "}
              Division
              <br />
              FROM: Office of the Deputy Director
              <br />
              RE: Operation Nightfall — Access Restrictions
              <br />
              <br />
              Effective immediately, all materials pertaining to Operation
              Nightfall are classified at the{" "}
              <span className="text-[#8a3a2a]">SIGMA-7</span> level. Access is
              restricted exclusively to personnel operating under directive{" "}
              <span className="text-[#8a3a2a]">SIGMA-7</span>. Operators holding
              lower clearance levels should consider themselves unauthorised to
              proceed. Any attempt to access restricted materials without the
              appropriate <span className="text-[#8a3a2a]">SIGMA-7</span>{" "}
              designation will be logged and reported to{" "}
              <span className="bg-[#1a1a10] text-transparent select-none px-1">
                XXXXXXXXXX
              </span>
              .<br />
              <br />
              This directive supersedes all previous authorisation memos.
            </p>
          </div>
        </div>

        {/* Access denied */}
        <div className="border border-t-0 border-[#1a2e1a] p-6">
          <p className="text-[9px] text-[#2a4a2a] tracking-[0.25em] mb-4">
            // NODE ACCESS — RESTRICTED FILES
          </p>
          <div className="border border-[#3a1a1a] bg-[#0c0808] p-6 text-center mb-4">
            <p className="text-3xl text-[#4a1a1a] tracking-[0.2em] mb-2">
              ACCESS DENIED
            </p>
            <p className="text-[11px] text-[#3a1a1a] tracking-widest">
              CLEARANCE TOKEN NOT RECOGNISED // AUTHENTICATION REQUIRED
            </p>
          </div>
          <p className="text-[10px] text-[#3a6a3a] leading-loose">
            Restricted node contents remain locked. Valid clearance token must
            be present in session data before access will be granted. The system
            does not accept manual input. If you have the correct authorisation,
            the node will recognise it automatically on your next visit.
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between text-[9px] text-[#1a3a1a] tracking-[0.15em] mt-4">
          <span>// ARCHIVIST v0.1 — ECHO NODE MIRROR</span>
        </div>
      </div>
    </main>
  );
}
