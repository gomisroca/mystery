/* eslint-disable react/jsx-no-comment-textnodes */

export const metadata = {
  title: "CASE NO. 1973-07 — Restricted",
  description: "Central Intelligence Agency — Restricted Access",
};

export default async function DeclassifiedPage() {
  return (
    <main className="min-h-screen bg-[#1a1712] px-4 py-8 font-mono">
      {/* Top bar */}
      <div className="flex justify-between items-center border-b border-[#2a2520] pb-4 mb-8 text-[10px] text-[#4a4030] tracking-widest">
        <span>// CENTRAL INTELLIGENCE AGENCY — RESTRICTED ACCESS</span>
        <span>NODE: ECHO-7 | CONN: ENCRYPTED</span>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Classification bar */}
        <div
          className="bg-[#8a0000] text-[#f0e8d0] text-[11px] tracking-[0.3em] text-center py-1.5"
          style={{ fontFamily: "'Special Elite', serif" }}
        >
          TOP SECRET // EYES ONLY
        </div>

        {/* Document */}
        <div
          className="bg-[#f0e8d0] p-10 relative"
          style={{ fontFamily: "'Special Elite', serif" }}
        >
          {/* Folded corner */}
          <div
            className="absolute top-0 right-0 w-0 h-0"
            style={{
              borderStyle: "solid",
              borderWidth: "0 40px 40px 0",
              borderColor: "transparent #1a1712 transparent transparent",
            }}
          />

          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="text-[#3a2a1a] text-sm leading-relaxed">
              <p className="text-base font-bold tracking-wide">
                CENTRAL INTELLIGENCE AGENCY
              </p>
              <p>DIRECTORATE OF OPERATIONS</p>
              <p>WASHINGTON D.C., 20505</p>
            </div>
            <div className="border-2 border-[#8a3a2a] px-3 py-1.5 text-center">
              <p className="text-[9px] text-[#8a3a2a] tracking-widest">
                CASE NO.
              </p>
              <p className="text-xl text-[#8a3a2a] tracking-widest">1973-07</p>
            </div>
          </div>

          <hr className="border-[#3a2a1a] border-t-2 my-4" />

          <h1
            className="text-center text-xl tracking-[0.15em] text-[#1a0a00] mb-1"
            style={{ fontFamily: "'Special Elite', serif" }}
          >
            FIELD TRANSMISSION — FINAL ENTRY
          </h1>
          <p className="text-center text-[10px] text-[#5a4a3a] tracking-widest mb-6">
            OPERATIVE:{" "}
            <span className="bg-[#1a1712] text-transparent select-none px-1">
              XXXXXXXXXX
            </span>
            &nbsp;|&nbsp; DATE: 14 NOV 1973 &nbsp;|&nbsp; STATUS: UNRECOVERED
          </p>

          <p className="text-sm text-[#2a1a0a] leading-loose mb-4">
            Operative{" "}
            <span className="bg-[#1a1712] text-transparent select-none px-1">
              XXXXXXXX
            </span>{" "}
            last made contact at 23:14 local time from an unspecified location
            in{" "}
            <span className="bg-[#1a1712] text-transparent select-none px-1">
              XXXXXXXXX
            </span>
            . The following transmission was intercepted via shortwave frequency
            7.485 MHz and recorded verbatim. All preceding context has been{" "}
            <span className="bg-[#1a1712] text-transparent select-none px-1">
              REDACTED PER EXEC ORDER 114-B
            </span>
            .
          </p>

          <p className="text-sm text-[#2a1a0a] leading-loose mb-4">
            Analysis division has confirmed the message uses the
            operative&apos;s assigned field cipher. The decryption key was
            embedded in standard agency case notation, as per{" "}
            <span className="bg-[#1a1712] text-transparent select-none px-1">
              PROTOCOL XXXXXX
            </span>
            . The final word of the transmission is believed to contain the
            extraction codename.
          </p>

          {/* The cipher */}
          <div className="bg-[#1a1712] border-l-4 border-[#8a3a2a] px-5 py-4 my-6">
            <p className="text-[9px] text-[#8a3a2a] tracking-widest mb-2">
              // RAW INTERCEPT — UNDECODED
            </p>
            <p className="text-[#c8b878] text-xl tracking-[0.25em]">
              HIVVY JVUAHJA UPNOAMHSS
            </p>
          </div>

          <p className="text-xs text-[#6a5a4a] italic border-t border-[#c0a870] pt-3 mt-6">
            * All personnel with SIGMA-level clearance are authorised to attempt
            decryption. Standard field ciphers apply. Refer to case number for
            key parameters. The extracted codename will determine your next
            point of access.
          </p>
        </div>

        {/* Bottom classification bar */}
        <div
          className="bg-[#8a0000] text-[#f0e8d0] text-[11px] tracking-[0.3em] text-center py-1.5"
          style={{ fontFamily: "'Special Elite', serif" }}
        >
          TOP SECRET // EYES ONLY
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-center border-t border-[#2a2520] pt-4 mt-8 text-[10px] text-[#4a4030] tracking-widest max-w-2xl mx-auto">
        <span>// END OF DOCUMENT</span>
        <span>ARCHIVIST v0.1</span>
      </div>
    </main>
  );
}
