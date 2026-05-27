import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RainbowAnimation from "@/components/RainbowAnimation";
import ScatteredCardHover from "@/components/ScatteredCardHover";
import FooterReveal from "@/components/FooterReveal";
import LetterAlternates from "@/components/LetterAlternates";
import CustomCursor from "@/components/CustomCursor";
import "./eventsitters.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eventsitters.nz"),
  title: {
    default: "On-Location Kids' Entertainment | Event Sitters Hawke's Bay",
    template: "%s | Event Sitters Hawke's Bay",
  },
  description: "We create fun, engaging spaces for kids at weddings, parties, public and corporate events, with tailored activities to keep all ages happily entertained!",
  openGraph: {
    siteName: "Event Sitters",
    images: [{ url: "/images/event-sitters-graph.png" }],
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/webclip.png",
  },
  verification: {
    google: "9YUzcZSn9XgTPH0SlPxpaP8SnlgOjE-xx9oCgpYeJ2M",
  },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "transparent",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EntertainmentBusiness",
  "name": "Event Sitters",
  "description": "On-location kids' entertainment for weddings, corporate functions, public events, and private parties in Hawke's Bay, New Zealand. Tailored activities for children aged 3–12.",
  "url": "https://www.eventsitters.nz",
  "telephone": "+642108279718",
  "email": "info@eventsitters.nz",
  "logo": "https://www.eventsitters.nz/images/event-sitters-logo.svg",
  "image": "https://www.eventsitters.nz/images/public-event-christmas-market.jpg",
  "priceRange": "From $300 NZD",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hawke's Bay",
    "addressRegion": "Hawke's Bay",
    "addressCountry": "NZ",
  },
  "areaServed": [
    { "@type": "City", "name": "Napier" },
    { "@type": "City", "name": "Hastings" },
    { "@type": "City", "name": "Havelock North" },
    { "@type": "AdministrativeArea", "name": "Hawke's Bay" },
  ],
  "sameAs": [
    "https://www.instagram.com/eventsittershb",
    "https://www.facebook.com/eventsittershb",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="body">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <CustomCursor />
        <RainbowAnimation />
        <ScatteredCardHover />
        <FooterReveal />
        <LetterAlternates />
        <div className="page-content">
          <Nav />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
