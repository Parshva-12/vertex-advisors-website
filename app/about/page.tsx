import Link from "next/link";

const partners = [
  { n: "CA Parshva Shah",  r: "Finance & Business Strategy", i: "P", d: "Finance and business lead with deep operational experience inside scaling startups. Sits with founders on every model and every board pack." },
  { n: "Chintan Sheth",    r: "Tax, Audit & Compliance",     i: "C", d: "Statutory expert with years of practice. Runs all compliance end-to-end. The safest pair of hands on every filing." },
  { n: "CA Vivek Shah",    r: "FP&A & Corporate Finance",    i: "V", d: "FP&A specialist with institutional-grade experience. Models, capital structuring, and the maths behind every term sheet." },
  { n: "CA Meet Lakhani",  r: "Growth Finance",              i: "M", d: "Translates strategy into numbers — and numbers into the next round. Growth finance and fundraising lead." },
];

const principles = [
  { n: "01", t: "A partner owns every account", d: "No analyst stack between you and the answer. Your point of contact is the person who reviewed your books." },
  { n: "02", t: "We say no to the wrong fit", d: "We turn down work that doesn't belong with us. Better for both sides — and better for you." },
  { n: "03", t: "Speed without sloppiness", d: "Same-day turnarounds on most asks. Deep review on every deliverable. No shortcuts on either." },
  { n: "04", t: "You always know why", d: "Every filing comes with a one-line memo — so your team learns, not just the file." },
];

export default function About() {
  return (
    <>
      {/* HEADER */}
      <section style={{ padding: "80px var(--pad-x) 60px", background: "var(--ivory)" }}>
        <div className="eyebrow" style={{ marginBottom: 22 }}>About · The Firm</div>
        <h1 style={{ fontSize: "clamp(52px, 7vw, 108px)", lineHeight: 0.96, fontFamily: "var(--serif)", fontWeight: 700, maxWidth: 1100 }}>
          Young, sharp, and{" "}<em style={{ color: "var(--gold-500)", fontWeight: 500 }}>built for businesses that move fast.</em>
        </h1>
      </section>

      {/* STORY */}
      <section className="r-stack r-gap" style={{ padding: "40px var(--pad-x) 96px", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "flex-start", background: "var(--ivory)" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Our story</div>
          <p style={{ fontFamily: "var(--serif)", fontSize: 24, lineHeight: 1.45, color: "var(--ink)", fontWeight: 500, marginBottom: 24 }}>
            We started Vertex because we were tired of watching brilliant founders get reduced to a return-filing slot.
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--ink-soft)", marginBottom: 18 }}>
            Four of us — coming from startups, institutional finance, and deep practice — saw the same gap: founders had no one who could move at startup speed, carry rigorous financial intelligence, and still be reachable when it matters.
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.7, color: "var(--ink-soft)" }}>
            So we built it. A small, sharp partnership where every client is run by a name, not a department. Finance intelligence — not just compliance.
          </p>
        </div>
        <div>
          <div style={{ width: "100%", aspectRatio: "4/5", background: "var(--gold-100)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontFamily: "var(--serif)", fontSize: 120, fontWeight: 700, color: "var(--gold-300)", opacity: 0.6 }}>VA</div>
          </div>
          <div className="eyebrow" style={{ marginTop: 14, color: "var(--stone-500)" }}>Office · Ghatkopar East · Mumbai</div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section style={{ padding: "100px var(--pad-x)", background: "var(--ink)", color: "var(--ivory)" }}>
        <div className="eyebrow" style={{ color: "var(--gold-400)", marginBottom: 20 }}>How we work</div>
        <h2 style={{ fontSize: "clamp(36px, 4vw, 68px)", fontFamily: "var(--serif)", fontWeight: 600, maxWidth: 900, marginBottom: 64 }}>
          Four principles.{" "}<em style={{ color: "var(--gold-400)", fontWeight: 500 }}>No exceptions.</em>
        </h2>
        <div className="r-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "rgba(255,255,255,0.08)" }}>
          {principles.map((p) => (
            <div key={p.n} className="r-card" style={{ background: "var(--ink)", padding: "48px 40px", minHeight: 240 }}>
              <div className="eyebrow" style={{ color: "var(--gold-400)" }}>{p.n}</div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 32, fontWeight: 600, marginTop: 20, color: "var(--ivory)" }}>{p.t}</h3>
              <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.65)", marginTop: 14, lineHeight: 1.6 }}>{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS DETAIL */}
      <section style={{ padding: "120px var(--pad-x)", background: "var(--ivory)" }}>
        <div className="eyebrow" style={{ marginBottom: 20 }}>The Partners</div>
        <h2 style={{ fontSize: "clamp(36px, 4vw, 68px)", fontFamily: "var(--serif)", fontWeight: 600, marginBottom: 64, maxWidth: 800 }}>
          Four partners.{" "}<em style={{ color: "var(--gold-500)" }}>One table.</em>
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--hairline)", border: "1px solid var(--hairline)" }}>
          {partners.map((p, i) => (
            <div key={p.n} className="r-prow" style={{ background: "var(--ivory)", padding: "36px 40px", display: "grid", gridTemplateColumns: "48px 1.2fr 1fr 1.5fr 24px", gap: 32, alignItems: "center" }}>
              <div className="eyebrow r-hide-m">0{i + 1}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--gold-200)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--serif)", fontWeight: 600, color: "var(--gold-700)", fontSize: 18, flexShrink: 0 }}>
                  {p.i}
                </div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 600 }}>{p.n}</div>
              </div>
              <div className="eyebrow" style={{ color: "var(--gold-700)" }}>{p.r}</div>
              <div style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.55 }}>{p.d}</div>
              <span className="r-hide-m" style={{ color: "var(--gold-500)" }}>→</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-r-about" style={{ padding: "80px var(--pad-x)", background: "var(--ivory-soft)", borderTop: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
        <h2 style={{ fontFamily: "var(--serif)", fontSize: "clamp(32px, 3.5vw, 56px)", fontWeight: 600, maxWidth: 600 }}>
          Ready to work with a team that{" "}<em style={{ color: "var(--gold-500)" }}>actually shows up?</em>
        </h2>
        <Link href="/contact" className="btn-primary" style={{ flexShrink: 0, fontSize: 14, padding: "14px 28px" }}>Get in touch →</Link>
      </section>
    </>
  );
}
