/* eslint-disable @next/next/no-css-tags */
import { cookies } from "next/headers";
import { redis, keys } from "@/lib/redis";

const SLUG = "vladivostok";
const VISIT_COOKIE = "visited_vladivostok";

async function getVisitCount(): Promise<number> {
  const cookieStore = await cookies();
  const alreadyVisited = cookieStore.has(VISIT_COOKIE);
  if (!alreadyVisited) {
    await redis.incr(keys.pageVisits(SLUG));
  }
  const count = await redis.get<number>(keys.pageVisits(SLUG));
  return count ?? 1;
}

export const metadata = {
  title: "D. Marlowe — personal page",
  description: "amateur astronomer | chess enthusiast | somewhere out there",
};

export default async function VladivostokPage() {
  const visitCount = await getVisitCount();

  return (
    <>
      {/*
        last updated: see stylesheet
        echo7.css
      */}
      <link rel="stylesheet" href="/echo7.css" />

      <main
        className="min-h-screen"
        style={{
          background: "#000080",
          fontFamily: "'Share Tech Mono', monospace",
        }}
      >
        {/* Marquee */}
        <div
          style={{
            background: "#ff0000",
            color: "#ffff00",
            fontSize: "13px",
            padding: "4px 0",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          <style>{`
            @keyframes marquee { from { transform: translateX(100%) } to { transform: translateX(-100%) } }
            .marquee { display: inline-block; animation: marquee 18s linear infinite; }
            @keyframes gblink { 50% { opacity: 0 } }
            .blink { animation: gblink 1s step-end infinite; }
            .nav-link { color: #00ffff; display: block; margin-bottom: 6px;
              text-decoration: underline; font-size: 11px; }
            .nav-link:hover { color: #ffff00; }
          `}</style>
          <span className="marquee">
            ★ WELCOME TO MY CORNER OF THE WEB ★ &nbsp;&nbsp;&nbsp; BEST VIEWED
            IN NETSCAPE NAVIGATOR 4.0 &nbsp;&nbsp;&nbsp; ★ 1024x768 RESOLUTION
            RECOMMENDED ★ &nbsp;&nbsp;&nbsp; SIGN MY GUESTBOOK!
            &nbsp;&nbsp;&nbsp;
          </span>
        </div>

        {/* Header */}
        <div
          style={{
            background: "#000080",
            textAlign: "center",
            padding: "1.5rem 1rem",
            borderBottom: "3px double #c0c0c0",
          }}
        >
          <h1
            style={{
              fontFamily: "'VT323', monospace",
              fontSize: "52px",
              color: "#ffff00",
              textShadow: "3px 3px #ff0000",
              letterSpacing: "0.05em",
              lineHeight: 1,
            }}
          >
            D. MARLOWE
          </h1>
          <p
            style={{
              fontSize: "12px",
              color: "#c0c0c0",
              letterSpacing: "0.1em",
              marginTop: "6px",
            }}
          >
            amateur astronomer &nbsp;|&nbsp; chess enthusiast &nbsp;|&nbsp;
            somewhere out there
          </p>
          <div
            style={{
              textAlign: "center",
              fontSize: "18px",
              color: "#c0c0c0",
              margin: "6px 0",
              letterSpacing: "4px",
            }}
          >
            · · · ✦ · · ·
          </div>
        </div>

        {/* Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "160px 1fr",
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          {/* Sidebar */}
          <div
            style={{
              background: "#000060",
              borderRight: "2px solid #c0c0c0",
              padding: "1rem",
            }}
          >
            <p
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: "20px",
                color: "#ffff00",
                borderBottom: "1px solid #c0c0c0",
                paddingBottom: "4px",
                marginBottom: "8px",
              }}
            >
              NAVIGATE
            </p>
            {[
              "★ Home",
              "About Me",
              "Astronomy",
              "Chess Corner",
              "Guestbook",
              "Links",
            ].map((l) => (
              <span key={l} className="nav-link">
                {l}
              </span>
            ))}

            <div style={{ marginTop: "12px" }}>
              <p
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: "20px",
                  color: "#ffff00",
                  borderBottom: "1px solid #c0c0c0",
                  paddingBottom: "4px",
                  marginBottom: "8px",
                }}
              >
                ONLINE
              </p>
              <p
                style={{ fontSize: "10px", color: "#808080", lineHeight: 1.6 }}
              >
                <span style={{ color: "#00ff00" }}>●</span> AIM: dmarlowe77
                <br />
                ICQ: 4471983
                <br />
                Email: on request
              </p>
            </div>

            <div
              style={{
                background: "#000000",
                border: "2px inset #808080",
                padding: "4px 6px",
                textAlign: "center",
                marginTop: "12px",
                fontFamily: "'VT323', monospace",
                fontSize: "18px",
                color: "#00ff00",
                letterSpacing: "0.1em",
              }}
            >
              {String(visitCount).padStart(6, "0")}
            </div>
            <p
              style={{
                fontSize: "9px",
                color: "#808080",
                textAlign: "center",
                marginTop: "2px",
              }}
            >
              visitors since &apos;97
            </p>

            <div
              style={{
                textAlign: "center",
                padding: "8px",
                border: "1px dashed #ffff00",
                fontSize: "10px",
                color: "#ffff00",
                marginTop: "12px",
              }}
            >
              <span className="blink">⚠</span> UNDER
              <br />
              CONSTRUCTION
              <br />
              <span className="blink">⚠</span>
            </div>
          </div>

          {/* Main content */}
          <div style={{ padding: "1rem", background: "#000080" }}>
            {/* Welcome */}
            <div style={{ marginBottom: "1.5rem" }}>
              <p
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: "24px",
                  color: "#00ffff",
                  borderBottom: "1px dotted #c0c0c0",
                  paddingBottom: "4px",
                  marginBottom: "10px",
                }}
              >
                ★ WELCOME ★
              </p>
              <p
                style={{ fontSize: "11px", color: "#c0c0c0", lineHeight: 1.8 }}
              >
                You found it. Not many people do. If you&apos;re here, you
                probably know why.
                <br />
                <br />
                This is my small space on the web. I&apos;m{" "}
                <span style={{ color: "#ffff00" }}>Daniel Marlowe</span> —
                retired analyst, amateur stargazer, occasional chess player. I
                put this page together back in{" "}
                <span style={{ color: "#ffff00" }}>&apos;97</span> mostly for
                myself. Figured the web was a good place to keep things. Hard to
                lose something that&apos;s everywhere at once.
                <br />
                <br />I don&apos;t update it much. But I do check it.
              </p>
            </div>

            <div
              style={{
                textAlign: "center",
                fontSize: "11px",
                color: "#808080",
                letterSpacing: "3px",
                margin: "8px 0",
              }}
            >
              · · · · · ★ · · · · · ✦ · · · · ·
            </div>

            {/* About */}
            <div style={{ marginBottom: "1.5rem" }}>
              <p
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: "24px",
                  color: "#00ffff",
                  borderBottom: "1px dotted #c0c0c0",
                  paddingBottom: "4px",
                  marginBottom: "10px",
                }}
              >
                ABOUT ME
              </p>
              <table style={{ width: "100%", fontSize: "11px" }}>
                {[
                  ["Name:", "Daniel J. Marlowe"],
                  ["Location:", "somewhere cold"],
                  ["Born:", "1941, Baltimore MD"],
                  ["Occupation:", "retired (long story)"],
                  ["Interests:", "astronomy, chess, staying quiet"],
                  ["Since:", "November 1973"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <td
                      style={{
                        color: "#00ffff",
                        width: "80px",
                        padding: "2px 6px",
                        verticalAlign: "top",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {k}
                    </td>
                    <td style={{ color: "#c0c0c0", padding: "2px 6px" }}>
                      {v}
                    </td>
                  </tr>
                ))}
              </table>
            </div>

            {/* Latest update — the clue */}
            <div style={{ marginBottom: "1.5rem" }}>
              <p
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: "24px",
                  color: "#00ffff",
                  borderBottom: "1px dotted #c0c0c0",
                  paddingBottom: "4px",
                  marginBottom: "10px",
                }}
              >
                LATEST UPDATE
              </p>
              <div
                style={{
                  background: "#000040",
                  border: "1px solid #808080",
                  padding: "8px",
                  fontSize: "10px",
                  color: "#808080",
                }}
              >
                {/* last updated: see stylesheet */}
                <span style={{ color: "#c0c0c0" }}>
                  [last updated: see stylesheet]
                </span>
                <br />
                <br />
                Still here. Still watching. If you&apos;ve come this far,
                you&apos;re either very good or very lucky. Either way — you
                deserve to know the rest.
                <br />I left something for you. You&apos;ll know where to look.
              </div>
            </div>

            {/* Guestbook */}
            <div style={{ marginBottom: "1.5rem" }}>
              <p
                style={{
                  fontFamily: "'VT323', monospace",
                  fontSize: "24px",
                  color: "#00ffff",
                  borderBottom: "1px dotted #c0c0c0",
                  paddingBottom: "4px",
                  marginBottom: "10px",
                }}
              >
                GUESTBOOK
              </p>
              <div
                style={{
                  background: "#000040",
                  border: "2px inset #808080",
                  padding: "8px",
                }}
              >
                {[
                  {
                    name: "stargazer_pete",
                    date: "03/14/1998",
                    msg: "great site! love the astronomy section. added to bookmarks",
                    color: "#ffff00",
                  },
                  {
                    name: "chessmaster_99",
                    date: "07/22/1999",
                    msg: "found your site through the chess webring. nice page!",
                    color: "#ffff00",
                  },
                  {
                    name: "anonymous",
                    date: "11/14/2003",
                    msg: "I know where you are.",
                    color: "#ff8080",
                    msgColor: "#ff8080",
                  },
                  {
                    name: "dmarlowe77",
                    date: "11/15/2003",
                    msg: "No you don't.",
                    color: "#ffff00",
                  },
                ].map(({ name, date, msg, color, msgColor }, i, arr) => (
                  <div
                    key={name + date}
                    style={{
                      borderBottom:
                        i < arr.length - 1 ? "1px dotted #404040" : "none",
                      padding: "6px 0",
                      fontSize: "10px",
                    }}
                  >
                    <span style={{ color, fontSize: "11px" }}>{name}</span>
                    <span
                      style={{
                        color: "#808080",
                        fontSize: "9px",
                        marginLeft: "8px",
                      }}
                    >
                      {date}
                    </span>
                    <div
                      style={{ color: msgColor ?? "#c0c0c0", marginTop: "2px" }}
                    >
                      {msg}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            background: "#000040",
            borderTop: "2px solid #c0c0c0",
            textAlign: "center",
            padding: "8px",
            fontSize: "10px",
            color: "#808080",
            letterSpacing: "0.05em",
          }}
        >
          <span style={{ color: "#ffff00" }}>★</span> best viewed in netscape
          navigator 4.0 at 1024x768 <span style={{ color: "#ffff00" }}>★</span>
          &nbsp;&nbsp;|&nbsp;&nbsp; © 1997 d. marlowe &nbsp;&nbsp;|&nbsp;&nbsp;
          <span style={{ color: "#ffff00" }}>★</span> this page is
          geocities-hosted <span style={{ color: "#ffff00" }}>★</span>
        </div>
      </main>
    </>
  );
}
