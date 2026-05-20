import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)", color: "var(--ivory)", padding: "64px var(--pad-x) 40px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: -60, right: -40, opacity: 0.06, fontSize: 400, fontFamily: "var(--serif)", fontWeight: 700, lineHeight: 1, color: "var(--gold-400)", pointerEvents: "none", userSelect: "none" }}>V</div>

      <div className="r-2col r-gap" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, position: "relative" }}>
        <div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 26, fontWeight: 700, color: "var(--ivory)" }}>
            Vertex <span style={{ color: "var(--gold-400)", fontStyle: "italic" }}>Advisors</span>
          </div>
          <p style={{ marginTop: 20, fontSize: 13.5, color: "rgba(255,255,255,0.55)", maxWidth: 260, lineHeight: 1.6 }}>
            Finance intelligence for businesses that move fast. Mumbai, India.
          </p>
        </div>

        {[
          { h: "Services", items: [["Financial Intelligence", "/services"], ["Startup Advisory", "/services"], ["Tax & Compliance", "/services"], ["Corporate Finance", "/services"]] },
          { h: "Firm",     items: [["About", "/about"], ["Partners", "/about"], ["Contact", "/contact"], ["Book a Call", "/contact"]] },
          { h: "Contact",  items: [["partners@vertexadvisors.co.in", "mailto:partners@vertexadvisors.co.in"], ["Ghatkopar East, Mumbai", "#"], ["Mon–Sat · 10am–7pm", "#"]] },
        ].map((col) => (
          <div key={col.h}>
            <div className="eyebrow" style={{ color: "var(--gold-400)", marginBottom: 18 }}>{col.h}</div>
            {col.items.map(([label, href]) => (
              <div key={label} style={{ padding: "5px 0" }}>
                <Link href={href} style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", textDecoration: "none", transition: "color 0.15s" }}>
                  {label}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 56, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)", fontSize: 11, color: "rgba(255,255,255,0.4)", letterSpacing: "0.08em", textTransform: "uppercase", position: "relative" }}>
        <span>© 2025 Vertex Advisors · All rights reserved</span>
        <span>Ghatkopar East, Mumbai 400 077</span>
      </div>
    </footer>
  );
}
