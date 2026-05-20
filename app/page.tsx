import Link from "next/link";

const services = [
  { n: "01", t: "Financial Intelligence", tags: ["FP&A", "MIS", "Investor Reporting", "Dashboards"], d: "The numbers your board actually wants. Monthly MIS, scenario models, fund-flow visibility — built by people who've run FP&A at institutional level." },
  { n: "02", t: "Startup Advisory", tags: ["Fundraising", "Modeling", "Growth", "ESOP"], d: "Decks, models, data rooms, and partner-in-the-room support across every funding stage. We've been on both sides of the table." },
  { n: "03", t: "Tax & Compliance", tags: ["GST", "Income Tax", "TDS", "ROC"], d: "On time, every time. Every filing reviewed by a partner — paired with a memo so you understand what we filed and why." },
  { n: "04", t: "Corporate Finance", tags: ["Capital Raise", "Audit", "Due Diligence", "M&A"], d: "Audit-ready accounts, buyer-ready diligence packs, and capital structuring that survives growth and the next two rounds." },
];

const partners = [
  { n: "CA Parshva Shah",  r: "Finance & Business Strategy", i: "P" },
  { n: "Chintan Sheth",    r: "Tax, Audit & Compliance",     i: "C" },
  { n: "CA Vivek Shah",    r: "FP&A & Corporate Finance",    i: "V" },
  { n: "CA Meet Lakhani",  r: "Growth Finance",              i: "M" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ padding: "88px var(--pad-x) 96px", position: "relative", overflow: "hidden", background: "var(--ivory)" }}>
        <div className="r-hide-m" style={{ position: "absolute", top: -40, right: -60, opacity: 0.045, fontFamily: "var(--serif)", fontSize: 560, fontWeight: 700, lineHeight: 1, color: "var(--gold-500)", pointerEvents: "none", userSelect: "none" }}>V</div>
        <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 56, alignItems: "flex-end", position: "relative" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 22 }}>Finance & Advisory · Mumbai</div>
            <h1 style={{ fontSize: "clamp(60px, 7vw, 108px)", lineHeight: 0.95, fontFamily: "var(--serif)", fontWeight: 700 }}>
              Finance<br />intelligence,<br />
              <em style={{ color: "var(--gold-500)", fontWeight: 500 }}>not just compliance.</em>
            </h1>
          </div>
          <div style={{ paddingBottom: 16 }}>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink-soft)", maxWidth: 380 }}>
              A chartered accountancy firm built by young, sharp partners — for startups, MSMEs, and businesses that don't have time to be told what they already know.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
              <Link href="/contact" className="btn-primary">Book a call →</Link>
              <Link href="/services" className="btn-ghost">See what we do</Link>
            </div>
          </div>
        </div>

        <div className="r-stack r-mt-lg" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, marginTop: 88, borderTop: "1px solid var(--hairline)", borderBottom: "1px solid var(--hairline)", background: "var(--hairline)" }}>
          {[
            { n: "4", l: "Partners. No middle layer." },
            { n: "Partner-led", l: "For businesses that move fast" },
            { n: "Full-stack", l: "From filings to strategy" },
          ].map((s) => (
            <div key={s.n} className="r-stat-item" style={{ background: "var(--ivory)", padding: "32px 28px" }}>
              <div className="r-stat-n" style={{ fontFamily: "var(--serif)", fontSize: 52, fontWeight: 600, lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: 13, color: "var(--stone-500)", marginTop: 10 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* THE PROMISE */}
      <section style={{ background: "var(--ink)", color: "var(--ivory)", padding: "120px var(--pad-x)", position: "relative", overflow: "hidden" }}>
        <div className="peak-rule" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
        <div className="eyebrow" style={{ color: "var(--gold-400)", marginBottom: 32 }}>The Promise</div>
        <h2 style={{ fontSize: "clamp(36px, 5vw, 84px)", lineHeight: 1.05, fontFamily: "var(--serif)", fontWeight: 600, maxWidth: 1100 }}>
          Most CAs file your returns.<br />
          <em style={{ color: "var(--gold-400)", fontWeight: 500 }}>We understand your business.</em>
        </h2>
        <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 56, marginTop: 80, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 48 }}>
          {[
            { n: "01", t: "We learn the company", s: "Before the first ledger. Founders, runway, story, customers — context first, compliance second." },
            { n: "02", t: "We work alongside, not after", s: "On every term sheet, every board pack, every decision that has a number attached." },
            { n: "03", t: "We answer fast", s: "WhatsApp, call, in person. Whatever it takes for the answer to arrive before the meeting does." },
          ].map((c) => (
            <div key={c.n}>
              <div className="eyebrow" style={{ color: "var(--gold-400)" }}>{c.n}</div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 28, fontWeight: 600, marginTop: 12, color: "var(--ivory)" }}>{c.t}</h3>
              <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.65)", marginTop: 12, lineHeight: 1.6 }}>{c.s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "120px var(--pad-x)", background: "var(--ivory)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <div className="eyebrow">What we do</div>
          <div style={{ flex: 1, height: 1, background: "var(--hairline)" }} />
          <div className="eyebrow">04 Practices</div>
        </div>
        <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 56, alignItems: "flex-end", marginBottom: 64 }}>
          <h2 style={{ fontSize: "clamp(36px, 4.5vw, 76px)", lineHeight: 1, fontFamily: "var(--serif)", fontWeight: 600 }}>
            From individual tax filings to{" "}<em style={{ color: "var(--gold-500)" }}>full business strategy.</em>
          </h2>
          <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.65 }}>
            Regulatory, advisory, compliance, and everything in between — one team, completely covered.
          </p>
        </div>
        <div className="r-stack" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "var(--hairline)", border: "1px solid var(--hairline)" }}>
          {services.map((s) => (
            <div key={s.n} style={{ background: "var(--ivory)", padding: "40px 40px 44px", display: "flex", flexDirection: "column", gap: 14, minHeight: 300 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="eyebrow">{s.n}</div>
                <span style={{ color: "var(--gold-500)" }}>→</span>
              </div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 38, fontWeight: 600, lineHeight: 1.05, marginTop: 16 }}>{s.t}</h3>
              <p style={{ fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.55, flex: 1 }}>{s.d}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
                {s.tags.map((tag) => (
                  <span key={tag} style={{ background: "var(--gold-100)", color: "var(--gold-700)", fontSize: 10.5, letterSpacing: "0.1em", padding: "5px 10px", borderRadius: 999, textTransform: "uppercase" }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 40, textAlign: "center" }}>
          <Link href="/services" className="btn-ghost">See all services →</Link>
        </div>
      </section>

      {/* PARTNERS */}
      <section style={{ padding: "120px var(--pad-x)", background: "var(--ivory-soft)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <div className="eyebrow">The Partners</div>
          <div style={{ flex: 1, height: 1, background: "var(--hairline)" }} />
        </div>
        <h2 style={{ fontSize: "clamp(36px, 4.5vw, 72px)", lineHeight: 1, fontFamily: "var(--serif)", fontWeight: 600, marginBottom: 72, maxWidth: 900 }}>
          Young, sharp, and built for businesses that{" "}<em style={{ color: "var(--gold-500)" }}>move fast.</em>
        </h2>
        <div className="r-2col" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {partners.map((p) => (
            <div key={p.n}>
              <div style={{ width: "100%", aspectRatio: "3/4", background: "var(--gold-100)", border: "1px solid var(--hairline)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--serif)", fontSize: 80, fontWeight: 600, color: "var(--gold-300)" }}>
                {p.i}
              </div>
              <div className="eyebrow" style={{ marginTop: 16, color: "var(--stone-500)" }}>Partner</div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 600, marginTop: 6 }}>{p.n}</h3>
              <div style={{ fontSize: 13, color: "var(--gold-700)", marginTop: 4 }}>{p.r}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "88px var(--pad-x)", background: "var(--gold-500)", position: "relative", overflow: "hidden" }}>
        <div className="r-hide-m" style={{ position: "absolute", top: -120, right: -80, opacity: 0.07, fontFamily: "var(--serif)", fontSize: 560, fontWeight: 700, lineHeight: 1, color: "var(--ink)", pointerEvents: "none" }}>V</div>
        <div className="r-stack r-gap" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 48, alignItems: "center", position: "relative" }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--ink)", marginBottom: 16 }}>Let&apos;s talk</div>
            <h2 style={{ fontSize: "clamp(36px, 4vw, 72px)", lineHeight: 1.05, fontFamily: "var(--serif)", fontWeight: 600, color: "var(--ink)" }}>
              We&apos;d love to understand{" "}<em>your business.</em>
            </h2>
          </div>
          <div>
            <div className="eyebrow" style={{ color: "var(--ink)", opacity: 0.6, marginBottom: 14 }}>Reach us</div>
            <div style={{ fontSize: 20, color: "var(--ink)", fontFamily: "var(--serif)" }}>partners@vertexadvisors.co.in</div>
            <div style={{ fontSize: 14, color: "var(--ink)", marginTop: 8, opacity: 0.7 }}>Ghatkopar East, Mumbai</div>
            <Link href="/contact" className="btn-gold" style={{ marginTop: 28 }}>Book an intro call →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
