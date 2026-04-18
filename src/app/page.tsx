/* eslint-disable react/jsx-no-comment-textnodes */
export const metadata = {
  title: "Archivist — Declassified Records Division",
  description:
    "In November 1973, a CIA field operative vanished mid-transmission.",
};

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#080c08] text-[#c8c8b8] font-mono">
      {/* Scanlines overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        }}
      />

      {/* Nav */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-[#1a2a1a]">
        <span className="text-[11px] text-[#3a5a3a] tracking-[0.2em]">
          ARCHIVIST // DECLASSIFIED RECORDS DIVISION
        </span>
        <div className="flex items-center gap-2 text-[10px] text-[#3a5a3a] tracking-[0.15em]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2a7a2a] animate-pulse" />
          UPLINK ACTIVE
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-2xl mx-auto px-8 pt-20 pb-12 text-center">
        <p className="text-[10px] text-[#3a5a3a] tracking-[0.3em] mb-8">
          // SIGNAL RECOVERED — ORIGIN UNKNOWN
        </p>
        <h1
          className="text-5xl font-black leading-tight tracking-tight text-[#e8f0e0] mb-6"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          THEY BURIED
          <br />
          THE <span className="text-[#3a7a3a]">TRUTH</span>
          <br />
          IN THE NOISE
        </h1>
        <p className="text-sm text-[#4a6a4a] leading-loose max-w-md mx-auto">
          In November 1973, a CIA field operative vanished mid-transmission. The
          agency sealed the files. Forty years later, someone leaked them. The
          signal is still out there. So is the operative&apos;s final message.
        </p>
      </section>

      {/* Intercepted signal block — the clue lives here */}
      <div className="relative border border-[#1a2a1a] mx-8 p-6">
        <span className="absolute -top-2 left-4 bg-[#080c08] px-2 text-[9px] text-[#3a5a3a] tracking-[0.2em]">
          // INTERCEPTED SIGNAL — 14 NOV 1973
        </span>
        <p className="text-xs text-[#5a7a5a] leading-loose mb-4">
          At 23:14 on <span className="text-[#8aaa6a]">14 NOV 1973</span>,
          shortwave receivers across Western Europe picked up an anomalous
          transmission on frequency{" "}
          <span className="text-[#8aaa6a]">7.485 MHz</span>. The source: a CIA
          operative known only by the designation{" "}
          <span className="text-[#8aaa6a]">ECHO-7</span>. The transmission
          lasted 38 seconds before going silent. It has never been publicly
          explained.
        </p>
        <p className="text-xs text-[#5a7a5a] leading-loose mb-4">
          Under the Freedom of Information Act, a partial records release was
          filed in 2019. The accompanying index noted the following document
          path:
        </p>

        {/* THE CLUE */}
        <div className="border-l-2 border-[#1a3a1a] pl-3 text-[11px] text-[#2a4a2a] leading-loose">
          <span className="text-[#6a9a4a]">REF: static/files/declassified</span>
          <br />
          FOIA REQUEST #2019-0441-F // STATUS: PARTIALLY RELEASED
          <br />
          REMAINING PAGES:{" "}
          <span className="text-[#8aaa6a]">
            WITHHELD UNDER EXEMPTION (b)(1)
          </span>
        </div>
      </div>

      <hr className="border-[#1a2a1a] mx-8 my-8" />

      {/* Lore grid */}
      <div className="grid grid-cols-2 mx-8 mb-8 border border-[#1a2a1a] divide-x divide-y divide-[#1a2a1a]">
        {[
          {
            label: "// OPERATIVE",
            lines: ["ECHO-7", "Status: unrecovered", "Last known: classified"],
          },
          {
            label: "// SIGNAL",
            lines: [
              "Freq: 7.485 MHz",
              "Duration: 38 seconds",
              "Decoded: partial",
            ],
          },
          {
            label: "// DOCUMENTS",
            lines: [
              "Released: 17 of 214",
              "Redacted: 197 pages",
              "Cipher: unknown",
            ],
          },
          {
            label: "// YOUR CLEARANCE",
            lines: ["Level: SIGMA", "Status: unverified", "Proceed: at risk"],
          },
        ].map(({ label, lines }) => (
          <div key={label} className="p-5 text-[11px]">
            <p className="text-[9px] text-[#2a4a2a] tracking-[0.2em] mb-1.5">
              {label}
            </p>
            {lines.map((l, i) => (
              <p key={i} className="text-[#5a7a5a] leading-loose">
                {l}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="flex justify-between px-8 py-5 border-t border-[#1a2a1a] text-[9px] text-[#2a4a2a] tracking-[0.15em]">
        <span>ARCHIVIST v0.1 // UNOFFICIAL MIRROR</span>
        <span>ALL RECORDS UNVERIFIED — PROCEED WITH CAUTION</span>
      </footer>
    </main>
  );
}
