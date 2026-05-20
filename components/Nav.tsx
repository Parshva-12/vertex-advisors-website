"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = ["Home", "About", "Services", "Contact"];

export default function Nav() {
  const path = usePathname();

  return (
    <nav style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "20px var(--pad-x)", borderBottom: "1px solid var(--hairline)",
      background: "var(--ivory)", position: "sticky", top: 0, zIndex: 50,
    }}>
      <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 13 }}>
        <svg width="18" height="21" viewBox="0 0 40 52" fill="none" aria-hidden="true">
          <path d="M20 6 L5 48" stroke="var(--gold-500)" strokeWidth="2.2" strokeLinecap="round"/>
          <path d="M20 6 L35 48" stroke="var(--gold-500)" strokeWidth="2.2" strokeLinecap="round"/>
          <circle cx="20" cy="6" r="2.8" fill="var(--gold-500)"/>
        </svg>
        <div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1 }}>
            Vertex <span style={{ color: "var(--gold-500)", fontStyle: "italic" }}>Advisors</span>
          </div>
          <div className="eyebrow" style={{ fontSize: 9, marginTop: 2 }}>Finance & Advisory · Mumbai</div>
        </div>
      </Link>

      <div className="nav-r-links">
        {links.map((l) => {
          const href = l === "Home" ? "/" : `/${l.toLowerCase()}`;
          const active = l === "Home" ? path === "/" : path.startsWith(`/${l.toLowerCase()}`);
          return (
            <Link key={l} href={href} style={{
              color: active ? "var(--ink)" : "var(--stone-500)",
              fontWeight: active ? 500 : 400,
              textDecoration: "none",
              borderBottom: active ? "1px solid var(--gold-500)" : "1px solid transparent",
              paddingBottom: 3,
              transition: "color 0.15s",
            }}>{l}</Link>
          );
        })}
      </div>

      <div className="nav-r-loc">
        <span className="eyebrow nav-r-loc-text" style={{ color: "var(--stone-500)" }}>Mumbai</span>
        <Link href="/contact" className="btn-primary">Book a call →</Link>
      </div>
    </nav>
  );
}
