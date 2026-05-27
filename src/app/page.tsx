import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import QuoteForm from "@/components/QuoteForm";
import ConfettiParallax, { type ElConfig } from "@/components/ConfettiParallax";
import SmoothAnchorLink from "@/components/SmoothAnchorLink";
import ServiceTiles from "@/components/ServiceTiles";
import ActivityTiles from "@/components/ActivityTiles";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "On-Location Kids' Entertainment | Event Sitters Hawke's Bay",
  description: "We create fun, engaging spaces for kids at weddings, parties, public and corporate events in Hawke's Bay, NZ, with tailored activities to keep all ages happily entertained!",
  alternates: { canonical: "https://www.eventsitters.nz" },
};

const parallaxEls: ElConfig[] = [
  { selector: '.confetti-header-pink',      mx: -24, my: -24, repulse: 120, repulseRadius: 150 },
  { selector: '.confetti-header-turquoise', mx:  24, my:  24, repulse: 120, repulseRadius: 150 },
  { selector: '.confetti-header-yellow',    mx: -64, my: -64, repulse: 120, repulseRadius: 150 },
  { selector: '.confetti-header-red',       mx:  16, my:  16, repulse: 120, repulseRadius: 150 },
  { selector: '.confetti-footer-yellow',    mx: -40, my: -32 },
  { selector: '.confetti-footer-red',       mx:  40, my: -24 },
  { selector: '.confetti-caption-blue',     sx: -80, sy:  40 },
  { selector: '.confetti-caption-yellow',   sx: -40, sy: -40 },
  { selector: '.confetti-caption-turquoise',sx:  80, sy: -80 },
  { selector: '.confetti-faq-turquoise',    sx: -64, sy:  40 },
  { selector: '.confetti-faq-yellow',       sx:  32, sy:  32 },
];


export default function Home() {
  return (
    <>
      <ConfettiParallax els={parallaxEls} />
      {/* Hero */}
      <section className="section hero">
        <div className="container hero">
          <div className="title-wrapper">
            <div className="super-heading-wrapper">
              <div className="super-heading all-caps">Weddings, Parties &amp; Events</div>
            </div>
            <h1 className="title-hero">On-Location Kids&apos; Entertainment in Hawke&apos;s Bay</h1>
            <div className="p-large hero">We keep kids happy, active, and looked after, so the grown-ups can actually focus, relax or just have fun.</div>
          </div>
          <div className="hero-cta">
            <SmoothAnchorLink href="#services" className="button outline w-button">Our Services</SmoothAnchorLink>
            <SmoothAnchorLink href="#quote-form" className="button w-button">Request a Quote</SmoothAnchorLink>
          </div>
          </div>
        <div className="confetti-header-pink" />
        <div className="confetti-header-turquoise" />
        <div className="confetti-header-yellow" />
        <div className="confetti-header-red" />
      </section>

      {/* Services */}
      <section id="services" className="section">
        <ServiceTiles />
      </section>

      {/* Caption */}
      <section className="section">
        <div className="container caption">
          <div className="caption-wrapper">
            <div className="caption-large">Designed for kids aged 3 to 12, we offer a mix of classic games and creative activities that will delight and engage your little guests.</div>
          </div>
          <div className="confetti-caption-blue" />
          <div className="confetti-caption-yellow" />
          <div className="confetti-caption-turquoise" />
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="section">
        <ActivityTiles />
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="section form pale-blue">
        <div className="container form">
          <div className="home-quote-form-header-wrapper">
            <div className="super-heading all-caps">Quote Request</div>
            <h2 className="headline-medium copy-text quote-form">Tell us about your event. We&apos;ll handle the rest.</h2>
          </div>
          <div className="quote-request-form-wrapper">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Event Sitters",
        "url": "https://www.eventsitters.nz",
        "description": "On-location kids' entertainment for weddings, corporate functions, public events, and private parties in Hawke's Bay, New Zealand.",
        "publisher": {
          "@type": "EntertainmentBusiness",
          "name": "Event Sitters",
          "url": "https://www.eventsitters.nz",
        },
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Do you provide kids' entertainment at weddings?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, weddings are one of our most popular bookings. We set up a dedicated space that keeps children happy and engaged during both the ceremony and the reception, so parents can actually be present. Activities are tailored to the age range of the kids attending and the tone of the day." } },
          { "@type": "Question", "name": "What kinds of events do you work with?", "acceptedAnswer": { "@type": "Answer", "text": "We work across weddings, birthday parties, corporate functions, festivals, markets, and community events. Whether it's an intimate gathering or a large public event, we tailor the setup to suit the venue, the occasion, and the children attending." } },
          { "@type": "Question", "name": "What areas in Hawke's Bay do you service?", "acceptedAnswer": { "@type": "Answer", "text": "We're based in Hawke's Bay and regularly work across Napier, Hastings, Havelock North, and the wider region. We're happy to travel to your venue. Just get in touch and we can confirm coverage." } },
          { "@type": "Question", "name": "How many children can you accommodate?", "acceptedAnswer": { "@type": "Answer", "text": "We can manage both small and large groups. Since kids tend to come and go throughout the event, they usually won't all be in the space at once. Capacity depends mostly on the space available. We'll work with what you've got and make sure there's plenty of room to play." } },
          { "@type": "Question", "name": "Do parents need to stay with their children?", "acceptedAnswer": { "@type": "Answer", "text": "No. Parents and guardians are welcome to enjoy the event. We're there to keep kids entertained and happy, though parents remain responsible for their children's supervision and care throughout." } },
          { "@type": "Question", "name": "How far in advance should I book?", "acceptedAnswer": { "@type": "Answer", "text": "As early as you can. Summer weekends and public holidays fill up fast. A 20% deposit locks in your date, with the remaining balance due 7 days before your event." } },
          { "@type": "Question", "name": "Do you have public liability insurance?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We hold public liability insurance, so you and your venue can have peace of mind." } },
          { "@type": "Question", "name": "Can you set up outdoors?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. We're set up for both indoor and outdoor events and adapt our activities to suit the space. For outdoor events, we also offer a gazebo option for shade and shelter." } },
        ],
      }) }} />
    </>
  );
}
