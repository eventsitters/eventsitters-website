import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./webflow.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.eventsitters.nz"),
  title: {
    default: "Event Sitters | On-Location Kids Entertainment",
    template: "%s | Event Sitters",
  },
  description: "We create fun, engaging spaces for kids at weddings, parties, public and corporate events, with tailored activities to keep all ages happily entertained!",
  openGraph: {
    siteName: "Event Sitters",
    images: [{ url: "/images/webclip.png" }],
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/webclip.png",
  },
  verification: {
    google: "9YUzcZSn9XgTPH0SlPxpaP8SnlgOjE-xx9oCgpYeJ2M",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="body">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
