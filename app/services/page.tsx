import Link from "next/link";

const services = [
  {
    n: "01", t: "Financial Intelligence", it: "numbers your board actually wants.",
    tags: ["FP&A", "MIS", "Investor Reporting", "Cash-flow modeling", "Dashboards", "Board packs"],
    d: "Monthly MIS that closes by the 7th. Cohort views, unit economics, runway scenarios. We build the FP&A function you would have hired in-house — without the headcount.",
    deliverables: ["Monthly MIS pack", "12-week rolling cashflow", "Quarterly board deck", "Investor update template"],
  },
  {
    n: "02", t: "Startup Advisory", it: "partner-in-the-room across every round.",
    tags: ["Fundraising", "Modeling", "Growth", "ESOP", "Data rooms", "Term sheets"],
    d: "Decks. Models. Diligence. We've sat across from the funds you're pitching — and on the other side too. Every deliverable carries that perspective.",
    deliverables: ["Pitch financial model", "Data room build", "Term sheet review", "Cap-table & ESOP"],
  },
  {
    n: "03", t: "Tax & Compliance", it: "on time, every time. With a memo.",
    tags: ["GST", "Income Tax", "TDS", "ROC", "International tax", "Notices"],
    d: "The boring, critical stuff — handled. Every filing is reviewed by a partner, paired with a one-line strategy note so you understand what we filed and why.",
    deliverables: ["Monthly GST", "Quarterly TDS", "Annual ROC + IT", "Notice response"],
  },
  {
    n: "04", t: "Corporate Finance", it: "capital structures that survive growth.",
    tags: ["Capital Raise", "Audit", "Due Diligence", "M&A", "Valuation", "Structuring"],
    d: "Audit-ready accounts, buyer-ready diligence packs, and a capital structure that holds up through the next two rounds and the eventual exit.",
    deliverables: ["Statutory audit", "Vendor / buy-side DD", "Valuation report", "M&A structuring"],
  },
];

export default function Services() {
  return (
    <>
      {/* HEADER */}
      <section style={{ padding: "80px 56px 48px", background: "var(--ivory)" }}>
        <div className="eyebrow" style={{ marginBottom: 22 }}>Services · 04 Practices</div>
        <h1 style={{ fontSize: "clamp(48px, 6vw, 104px)", lineHeight: 0.96, fontFamily: "var(--serif)", fontWeight: 700, maxWidth: 1100 }}>
          Regulatory, advisory,{" "}<em style={{ color: "var(--gold-500)", fontWeight: 500 }}>and everything in between.</em>
        </h1>
        <p style={{ marginTop: 32, maxWidth: 600, fontSize: 16, lineHeight: 1.65, color: "var(--ink-soft)" }}>
          Four practices. Pick one or run all four through us — the engagement is shaped by what you actually need, not what fits a package.
        </p>
      </section>

      {/* SERVICE DEEP DIVES */}
      {services.map((s, i) => (
        <section key={s.n} style={{
          padding: "88px 56px",
          background: i % 2 === 1 ? "var(--ivory-soft)" : "var(--ivory)",
          borderTop: "1px solid var(--hairline)",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "flex-start" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <div className="eyebrow">{s.n}</div>
                <div style={{ flex: 1, height: 1, background: "var(--gold-500)" }} />
              </div>
              <h2 style={{ fontSize: "clamp(36px, 3.5vw, 52px)", fontFamily: "var(--serif)", fontWeight: 600, lineHeight: 1.05 }}>{s.t}</h2>
              <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 24, color: "var(--gold-500)", marginTop: 12, lineHeight: 1.3 }}>{s.it}</div>
              <p style={{ marginTop: 24, fontSize: 15.5, lineHeight: 1.65, color: "var(--ink-soft)", maxWidth: 400 }}>{s.d}</p>
              <Link href="/contact" className="btn-ghost" style={{ marginTop: 32 }}>Brief us →</Link>
            </div>

            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 40 }}>
                {s.tags.map((tag) => (
                  <span key={tag} style={{ background: "var(--paper)", color: "var(--ink-soft)", border: "1px solid var(--hairline-strong)", fontSize: 11, letterSpacing: "0.08em", padding: "7px 14px", borderRadius: 999 }}>{tag}</span>
                ))}
              </div>

              <div className="eyebrow" style={{ marginBottom: 16 }}>Typical deliverables</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "var(--hairline)", border: "1px solid var(--hairline)" }}>
                {s.deliverables.map((d, j) => (
                  <div key={d} style={{ background: i % 2 === 1 ? "var(--ivory-soft)" : "var(--ivory)", padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div>
                      <div className="eyebrow" style={{ marginBottom: 8 }}>0{j + 1}</div>
                      <div style={{ fontFamily: "var(--serif)", fontSize: 20, fontWeight: 600 }}>{d}</div>
                    </div>
                    <svg width="10" height="8" viewBox="0 0 10 8" style={{ flexShrink: 0, marginLeft: 8 }}><path d="M5 1L9 7H1L5 1Z" fill="var(--gold-500)" /></svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* PRICING */}
      <section style={{ padding: "100px 56px", background: "var(--ink)", color: "var(--ivory)" }}>
        <div className="eyebrow" style={{ color: "var(--gold-400)", marginBottom: 24 }}>On pricing</div>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56, alignItems: "flex-end" }}>
          <h2 style={{ fontSize: "clamp(36px, 4vw, 68px)", fontFamily: "var(--serif)", fontWeight: 600 }}>
            We quote against scope,{" "}<em style={{ color: "var(--gold-400)", fontWeight: 500 }}>not hours.</em>
          </h2>
          <div>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.65, marginBottom: 28 }}>
              Retainers for ongoing work. Fixed fees for projects. Always written down before we start. A short intro call is the fastest way to a real number.
            </p>
            <Link href="/contact" className="btn-primary">Book an intro call →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
