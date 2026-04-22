/* eslint-disable react/jsx-no-comment-textnodes */

export const metadata = {
  title: "Echo-7 Archive — Eyes Only",
  description: "CIA Archive — Sigma-7 Authenticated Session",
};

export default async function EyesOnlyPage() {
  return (
    <main className="min-h-screen bg-[#0a080e] px-4 py-6 font-mono text-[#9a90c0]">
      <div
        className="flex justify-between border-b border-[#1e1830] pb-4 mb-8
        text-[10px] text-[#3a3060] tracking-widest"
      >
        <span>// CIA ARCHIVE — EYES ONLY ACCESS</span>
        <span>CLEARANCE: SIGMA-7 VERIFIED</span>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Node status */}
        <div className="border border-[#1e1830] p-6">
          <p className="text-[9px] text-[#3a3060] tracking-[0.25em] mb-4">
            // NODE STATUS — SIGMA-7 SESSION
          </p>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl text-[#8070c0] tracking-[0.15em]">
              ECHO-7 ARCHIVE
            </h1>
            <span
              className="border border-[#3a5a3a] px-3 py-1 text-[10px]
              text-[#5a8a5a] tracking-[0.15em]"
            >
              AUTHENTICATED
            </span>
          </div>
          <div className="grid grid-cols-2 gap-px bg-[#1e1830]">
            {[
              { label: "CLEARANCE", val: "SIGMA-7 CONFIRMED", green: true },
              { label: "SESSION OPENED", val: "JUST NOW", green: false },
              { label: "NODE", val: "ECHO-7 // RESTORED", green: false },
              { label: "FILES AVAILABLE", val: "PARTIAL", green: true },
            ].map(({ label, val, green }) => (
              <div key={label} className="bg-[#0a080e] p-4">
                <p className="text-[9px] text-[#3a3060] tracking-[0.2em] mb-1">
                  {label}
                </p>
                <p
                  className={`text-xs tracking-widest ${green ? "text-[#5a8a5a]" : "text-[#7060a0]"}`}
                >
                  {val}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Communiqué — the nudge */}
        <div className="border border-t-0 border-[#1e1830] p-6">
          <p className="text-[9px] text-[#3a3060] tracking-[0.25em] mb-4">
            // RECOVERED COMMUNIQUÉ — FINAL DIRECTIVE
          </p>
          <div
            className="relative border border-[#3a3050] bg-[#ede8f5] p-6"
            style={{ fontFamily: "'Special Elite', serif" }}
          >
            <span
              className="absolute -top-1.75 left-3 bg-[#ede8f5] px-1.5
              text-[8px] text-[#4a3a6a] tracking-widest"
            >
              CLASSIFIED COMMUNIQUÉ
            </span>
            <p className="text-xs text-[#2a1a3a] leading-loose">
              TO: Operative{" "}
              <span className="bg-[#1a1020] text-transparent select-none px-1">
                XXXXXXXXXX
              </span>
              <br />
              FROM:{" "}
              <span className="bg-[#1a1020] text-transparent select-none px-1">
                XXXXXXXXXXXXXXX
              </span>
              <br />
              RE: Operation Nightfall — Extraction Protocol
              <br />
              <br />
              Your transmission has been received and verified. The package was
              confirmed delivered to{" "}
              <span className="bg-[#1a1020] text-transparent select-none px-1">
                XXXXXXXXXX
              </span>{" "}
              at the designated window. You are now authorised to proceed to the
              extraction point.
              <br />
              <br />
              The coordinates and access details have been archived in the
              node&apos;s restricted manifest. The manifest is served
              automatically to authenticated sessions.{" "}
              <span className="text-[#7a3a8a]">
                Watch your connection carefully.
              </span>{" "}
              Everything the node knows about your extraction is being
              transmitted to you right now. Not all of it will be visible on
              this page.
              <br />
              <br />
              Burn after reading. Do not attempt contact again.
            </p>
          </div>
        </div>

        {/* Live activity — shows /api/status ping */}
        <div className="border border-t-0 border-[#1e1830] p-6">
          <p className="text-[9px] text-[#3a3060] tracking-[0.25em] mb-4">
            // LIVE NODE ACTIVITY
          </p>
          <div className="bg-[#080610] border border-[#1e1830] p-4 mb-3">
            <p className="text-[9px] text-[#3a3060] tracking-[0.2em] mb-3">
              // OUTBOUND REQUESTS — THIS SESSION
            </p>
            <p className="text-[11px] text-[#4a4080] leading-loose">
              [SYS] Authenticating session token
            </p>
            <p className="text-[11px] text-[#6a60a0] leading-loose">
              [SYS] Fetching node status →{" "}
              <span className="text-[#8070c0]">/api/status</span>
            </p>
            <p className="text-[11px] text-[#4a4080] leading-loose">
              [SYS] Manifest sync scheduled
              <span className="animate-pulse">_</span>
            </p>
          </div>
          <p className="text-[10px] text-[#3a3060] leading-loose">
            Node is communicating with internal systems. Session activity is
            logged.
          </p>
        </div>

        <div
          className="flex justify-between text-[9px] text-[#2a2050]
          tracking-[0.15em] mt-4"
        >
          <span>// ARCHIVIST v0.1 — EYES ONLY MIRROR</span>
        </div>
      </div>

      {/* The actual ping — fires on page load, visible in Network tab */}
      <PingStatus />
    </main>
  );
}

// Client component so it runs in the browser where DevTools can see it
function PingStatus() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        fetch('/api/status', {
          headers: { 'X-Session': 'SIGMA-7', 'X-Node': 'ECHO-7' }
        }).catch(() => {});
      `,
      }}
    />
  );
}
