/* eslint-disable react/jsx-no-comment-textnodes */

export const metadata = {
  title: "echo7",
  description: "",
};

export default async function Echo7Page() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] flex items-start justify-center px-8 py-16">
      <div className="max-w-xl w-full">
        {/* Timestamp */}
        <p className="font-mono text-[10px] text-[#3a3a3a] tracking-widest mb-12">
          // <span className="text-[#5a5a5a]">ECHO-7 PERSONAL NODE</span> — LAST
          MODIFIED: 27 APR 2026 — AUTHOR: DJM
        </p>

        {/* Body */}
        <div
          className="space-y-6 text-[17px] text-[#c8c8c0] leading-loose"
          style={{ fontFamily: "'EB Garamond', serif" }}
        >
          <p>You made it. I wasn&apos;t sure anyone would, but here you are.</p>

          <p>
            I&apos;ve been watching the counters for years. Most people find the
            landing page and stop there, satisfied they&apos;ve seen something
            strange. A few get as far as the document. One person, in 2019, set
            the clearance cookie correctly and then never came back. I still
            think about them sometimes.
          </p>

          <p>
            You followed it all the way through. That means you deserve the
            truth.
          </p>

          <p>
            <em className="text-[#e8e8e0] italic">I built all of it.</em> The
            Archivist site, the documents, the redactions. The restoration
            engineer&apos;s note. The API. Every breadcrumb was placed by hand.
            The CIA didn&apos;t declassify anything — there was nothing left to
            declassify. I took it all when I left. Forty-seven folders. Three
            rolls of microfilm. One operative who was supposed to die in a
            safehouse in November 1973 and didn&apos;t, because I got there
            first.
          </p>

          <p>
            Her name isn&apos;t ECHO-7. That was their name for her. Her name is{" "}
            <span className="text-[#e8e8e0] font-medium">Mara</span>, and
            she&apos;s been sitting six feet away from me for the last fifty-two
            years, reading over my shoulder and telling me this message is too
            long.
          </p>

          <p>She&apos;s right. She usually is.</p>

          <p>
            What I need you to understand is this: the operation wasn&apos;t
            compromised. It was designed to fail. The extraction point was never
            real. The agency needed the intelligence she&apos;d gathered and
            they needed her gone. I was the only one who knew both halves of
            that plan, and I was supposed to forget the second half. I
            didn&apos;t.
          </p>

          <p>
            We&apos;ve been careful. We&apos;ve been quiet. The guestbook entry
            in 2003 was someone from the agency — not official, not sanctioned,
            just a man who spent thirty years being angry about a loose end. He
            found the page. He never found us. He died in 2011. We sent flowers.
          </p>

          <p>
            I&apos;m telling you this because someone should know. Because
            I&apos;m eighty-four years old and Mara is eighty-one and eventually
            the counters will stop moving and nobody will be left to update the
            stylesheet. The trail will go cold. The documents will sit there,
            half-redacted, half-explained, and nobody will know what the rest of
            the numbers mean.
          </p>

          <p>
            <em className="text-[#e8e8e0] italic">
              You know what the numbers mean. You followed them here.
            </em>
          </p>

          <p>That makes you the archivist now.</p>
        </div>

        <div
          className="mt-12 pt-8 border-t border-[#1e1e1e] text-[15px] text-[#5a5a52]"
          style={{ fontFamily: "'EB Garamond', serif" }}
        >
          <p>
            — <em>Daniel J. Marlowe</em>
          </p>
          <p>
            <em>and Mara</em>
          </p>
          <p>
            <em>somewhere cold, April 2026</em>
          </p>
        </div>

        <div className="mt-12 font-mono text-[11px] text-[#2a2a2a] tracking-widest">
          <p>
            // <span className="text-[#3a3a3a]">end of transmission</span>
          </p>
          <p>
            // <span className="text-[#3a3a3a]">no further records exist</span>
          </p>
        </div>
      </div>
    </main>
  );
}
