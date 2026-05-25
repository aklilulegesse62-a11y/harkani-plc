import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://harkani-plc.vercel.app"),
  title: "Harkani.Plc | Premium Interiors, Finishing & Full Setup in Ethiopia",
  description:
    "Premium Ethiopian interiors, finishing construction, furnishing, full setup, and remote project delivery for luxury homes and commercial spaces.",
  keywords: [
    "Ethiopian interior design",
    "finishing construction Ethiopia",
    "restaurant interior Ethiopia",
    "office interior Ethiopia",
    "commercial fit out Ethiopia",
    "remote project management Ethiopia",
    "furnishing Addis Ababa",
    "Harkani Plc"
  ],
  openGraph: {
    title: "Harkani.Plc",
    description:
      "End-to-end interior, finishing, and full setup solutions for luxury homes and commercial spaces.",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
