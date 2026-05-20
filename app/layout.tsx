import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vertex Advisors — Finance Intelligence. Not Just Compliance.",
  description: "A chartered accountancy firm built for startups, MSMEs and businesses that move fast. Mumbai, India.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Vertex Advisors",
    description: "Finance intelligence. Not just compliance.",
    url: "https://www.vertexadvisors.co.in",
    siteName: "Vertex Advisors",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
