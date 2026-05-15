"use client";
import { useState } from "react";

const practices = ["Financial Intelligence", "Startup Advisory", "Tax & Compliance", "Corporate Finance", "Not sure yet"];

export default function Contact() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (p: string) => setSelected((prev) => prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* HEADER */}
      <section style={{ padding: "80px 56px 48px", background: "var(--ivory)" }}>
        <div className="eyebrow" style={{ marginBottom: 22 }}>Contact · Mumbai</div>
        <h1 style={{ fontSize: "clamp(56px, 7vw, 120px)", lineHeight: 0.94, fontFamily: "var(--serif)", fontWeight: 700 }}>
          Let&apos;s <em style={{ color: "var(--gold-500)", fontWeight: 500 }}>talk.</em>
        </h1>
      </section>

      <section style={{ padding: "20px 56px 120px", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "flex-start", background: "var(--ivory)" }}>

        {/* LEFT — contact details */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Email us</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 28, fontWeight: 500 }}>
              <a href="mailto:partners@vertexadvisors.co.in" style={{ color: "var(--ink)", textDecoration: "none" }}>
                partners@vertexadvisors.co.in
              </a>
            </div>
            <div style={{ fontSize: 13.5, color: "var(--stone-500)", marginTop: 8 }}>We reply within one working day. Most under three hours.</div>
          </div>

          <div style={{ height: 1, background: "var(--hairline)" }} />

          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Visit us</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 500, lineHeight: 1.35 }}>
              Vertex Advisors<br />
              81/501, Aaradhya Saphalya<br />
              Garodia Nagar, Ghatkopar East<br />
              Mumbai 400 077
            </div>
          </div>

          <div style={{ height: 1, background: "var(--hairline)" }} />

          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Partners</div>
            {[
              { name: "CA Parshva Shah", phone: "+91 96993 06107" },
              { name: "Chintan Sheth", phone: "+91 98198 58123" },
              { name: "CA Vivek Shah", phone: "+91 70453 42961" },
              { name: "CA Meet Lakhani", phone: "+91 99675 12229" },
            ].map((p) => (
              <div key={p.name} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--hairline)", fontSize: 14 }}>
                <span style={{ color: "var(--ink-soft)" }}>{p.name}</span>
                <a href={`tel:${p.phone.replace(/\s/g, "")}`} style={{ color: "var(--gold-700)", textDecoration: "none", fontWeight: 500 }}>{p.phone}</a>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — form */}
        <div style={{ background: "var(--paper)", border: "1px solid var(--hairline)", padding: 48 }}>
          {submitted ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 400, textAlign: "center", gap: 16 }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: 48, fontWeight: 600 }}>Thank you.</div>
              <p style={{ fontSize: 15, color: "var(--ink-soft)", maxWidth: 320, lineHeight: 1.6 }}>We&apos;ve received your brief and will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Brief us</div>
              <h2 style={{ fontFamily: "var(--serif)", fontSize: 38, fontWeight: 600, marginBottom: 36 }}>
                Tell us about <em style={{ color: "var(--gold-500)" }}>your business.</em>
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { l: "Your name", name: "name", placeholder: "Aanya Mehta" },
                  { l: "Email", name: "email", placeholder: "you@yourbusiness.co" },
                  { l: "Company & stage", name: "company", placeholder: "YourCo · Seed / SME / Individual" },
                  { l: "What do you need?", name: "need", placeholder: "Monthly MIS, GST, fundraising model..." },
                ].map((f) => (
                  <div key={f.l}>
                    <div className="eyebrow" style={{ marginBottom: 8 }}>{f.l}</div>
                    <input
                      name={f.name}
                      placeholder={f.placeholder}
                      required
                      style={{ width: "100%", padding: "12px 0", borderBottom: "1px solid var(--hairline-strong)", border: "none", borderBottom: "1px solid var(--hairline-strong)", background: "transparent", fontSize: 15, color: "var(--ink)", outline: "none", fontFamily: "inherit" }}
                    />
                  </div>
                ))}

                <div>
                  <div className="eyebrow" style={{ marginBottom: 12 }}>Practice area</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {practices.map((p) => (
                      <button
                        key={p} type="button" onClick={() => toggle(p)}
                        style={{
                          border: selected.includes(p) ? "1px solid var(--gold-500)" : "1px solid var(--hairline-strong)",
                          background: selected.includes(p) ? "var(--gold-100)" : "transparent",
                          color: selected.includes(p) ? "var(--gold-700)" : "var(--ink-soft)",
                          fontSize: 12.5, padding: "8px 14px", borderRadius: 999, cursor: "pointer", transition: "all 0.15s",
                        }}
                      >{p}</button>
                    ))}
                  </div>
                </div>

                <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start", marginTop: 8 }}>
                  Send the brief →
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
