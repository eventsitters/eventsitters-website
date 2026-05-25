import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import ConfettiParallax, { type ElConfig } from "@/components/ConfettiParallax";

export const metadata: Metadata = {
  title: "Kids' Entertainment Packages",
  description: "Event Sitters' base package starts from $300 NZD for 4 hours of on-location kids' entertainment in Hawke's Bay, with pricing depending on your event. Flexible add-ons available for weddings, corporate functions, and public events.",
  alternates: { canonical: "https://www.eventsitters.nz/packages" },
};

const parallaxEls: ElConfig[] = [
  { selector: '.confetti-hero-red.pricing',       mx: -16, my: -32 },
  { selector: '.hero-visual.pricing',             mx:   8, my:  -8 },
  { selector: '.confetti-hero-turquoise.pricing', mx:  16, my:  16 },
  { selector: '.confetti-footer-yellow',          mx:  16, my:   8 },
  { selector: '.confetti-footer-red',             mx:  16, my:  -8 },
  { selector: '.confetti-pricing-turquoise',      sx: -24, sy:  40 },
  { selector: '.confetti-pricing-red',            sx:  40, sy: -40 },
  { selector: '.confetti-pricing-yellow',         sx:  32, sy: -16 },
  { selector: '.confetti-festivals-markets-red',  sx:  64, sy: -32 },
  { selector: '.confetti-festivals-markets-yellow', sx: 24, sy:  24 },
  { selector: '.confetti-festivals-markets-blue', sx: -32, sy:  40 },
  { selector: '.confetti-faq-turquoise',          sx: -64, sy:  40 },
  { selector: '.confetti-faq-yellow',             sx:  32, sy:  32 },
];

const included = [
  "4 hours of hands-on entertainment for your little guests",
  "Perfect for groups of children aged 3 to 12",
  "Choose from our selection of active play, arts & crafts, badge making, story time, and more",
  "A charming, decorated play space with cozy corner, balloons, blankets, and more",
  "Experienced team on hand to keep things fun and running smoothly",
];

const addons = [
  {
    img: "/images/all-day-package.webp",
    alt: "A cute play tent with plush toys set up at an event",
    title: "All-Day Package",
    desc: "More hours, more fun. Ideal for longer events where the energy needs to stay high all day.",
    color: "pale-yellow",
  },
  {
    img: "/images/larger-groups.webp",
    alt: "Children sitting on grass in an outdoor setting, engaged in drawing and crafting activities.",
    title: "Larger Groups",
    desc: "More kids, no problem. Extra staff and scaled-up activities so no one gets left out.",
    color: "pale-turquoise",
  },
  {
    img: "/images/outdoor-set-up.webp",
    alt: "Outdoor craft setup under a white canopy, featuring tables with art supplies in a lush garden environment.",
    title: "Outdoor Set-Up",
    desc: "A solid, weather-proof gazebo so the forecast doesn't become your problem.",
    color: "pale-blue",
  },
  {
    img: "/images/themed-decor-crafts.webp",
    alt: "Child colouring a detailed craft design with bright pencils, focusing on fine artistic work.",
    title: "Themed Decor & Crafts",
    desc: "Decorations and crafts tailored to your event's theme. A small detail that makes a big difference.",
    color: "pale-purple",
  },
  {
    img: "/images/gift-bags.webp",
    alt: "Smiling child in a yellow dress holding a gift bag at a party with pastel decorations in the background.",
    title: "Gift Bags",
    desc: "Something to take home. Goodies and keepsakes tied to what the kids made or did on the day.",
    color: "pale-pink",
  },
  {
    img: "/images/face-painting.webp",
    alt: "Child's face being painted with vibrant colours, highlighting intricate details on the nose.",
    title: "Face Painting",
    desc: "Always a crowd-pleaser. Kids pick their look, we do the rest. Usually offered in a dedicated window, not the full duration.",
    color: "pale-red",
  },
];

const process = [
  { num: "01", title: "Consultation", desc: "We chat about your event: the space, the kids attending, and what you have in mind." },
  { num: "02", title: "Proposal", desc: "We put together a package built around your event. Tailored, not templated." },
  { num: "03", title: "Confirmation", desc: "Happy with it? A 20% deposit locks in your date and we'll take care of the rest." },
];

const CheckIcon = () => (
  <div className="pricing-feature-icon w-embed">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 18.9l-4.9-4.9-1.6 1.6 6.5 6.5 14-14-1.6-1.6-12.4 12.4z"/>
    </svg>
  </div>
);

export default function Packages() {
  return (
    <>
      <ConfettiParallax els={parallaxEls} />
      {/* Hero */}
      <section className="section">
        <div className="container hero about">
          <div className="w-layout-layout header-grid wf-layout-layout">
            <div className="w-layout-cell cell-3">
              <div className="div-block-7">
                <h2 className="super-heading all-caps">For Every Event</h2>
                <h1 className="headline-large">Flexible Packages to Suit Your Event and Budget</h1>
                <div className="p-large">Every event is different, and so is every group of kids. Start with our base package and build from there. Add activities, extras, or special touches to match exactly what you need.</div>
              </div>
            </div>
            <div className="w-layout-cell cell-2">
              <div className="hero-visual-wrapper">
                <div className="hero-visual pricing" />
                <Image src="/images/confetti-red.svg" alt="Confetti" className="confetti-hero-red pricing" width={80} height={80} />
                <Image src="/images/confetti-turquoise-outline.svg" alt="Confetti" className="confetti-hero-turquoise pricing" width={80} height={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Base Package */}
      <section className="section">
        <div className="container">
          <div className="pricing-card-negative pale-blue">
            <div className="paragraph-wrapper pricing">
              <h2 className="headline-medium">Base Package</h2>
              <p className="package-price">From $300 <span className="package-price-range">depending on your event</span></p>
              <p className="p-medium">One clear starting point. Four hours, a properly decorated space, and a hands-on team keeping the kids happy. Build from there however you like.</p>
            </div>
            <div className="pricing-package-calculation-wrapper">
              <div className="pricing-features-wrapper">
                <h3 className="headline-small">What&apos;s included</h3>
                <div className="pricing-features-list">
                  {included.map((item) => (
                    <div key={item} className="pricing-feature-wrapper">
                      <CheckIcon />
                      <p className="p-small bold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="confetti-pricing-red" />
          <div className="confetti-pricing-turquoise" />
          <div className="confetti-pricing-yellow" />
        </div>
      </section>

      {/* Add-Ons */}
      <section className="section">
        <div className="container">
          <div className="w-layout-layout pricing-addon-grid wf-layout-layout">
            <div className="w-layout-cell">
              <div className="addons-header">
                <h2 className="headline-medium">Custom Activities</h2>
                <p className="p-medium">The most popular extras, but we&apos;re always open to ideas. If you can dream it, we can probably make it happen.</p>
              </div>
            </div>
            {addons.map((a) => (
              <div key={a.title} className="w-layout-cell">
                <div className={`addon-card ${a.color}`}>
                  <Image src={a.img} alt={a.alt} className="add-ons-thumbnail" width={716} height={400} />
                  <div className="paragraph-wrapper-tile pricing">
                    <h3 className="headline-small">{a.title}</h3>
                    <p className="p-small">{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section pale-blue">
        <div className="container process">
          <h2 className="headline-medium">How It Works</h2>
          <div className="w-layout-layout process-grid wf-layout-layout">
            {process.map((step) => (
              <div key={step.num} className="w-layout-cell">
                <div className="process-card">
                  <div className="process-card-header">
                    <h3 className="super-heading">{step.num}</h3>
                    <h3 className="headline-small">{step.title}</h3>
                  </div>
                  <p className="p-small">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festivals & Markets */}
      <section className="section">
        <div className="container festivals-markets">
          <div className="festivals-markets pale-blue">
            <div className="festivals-markets-image-container" />
            <div className="festivals-markets-text-wrapper">
              <h3 className="super-heading all-caps">Special Rates</h3>
              <h2 className="headline-medium">Festivals, Markets, and Fairs</h2>
              <p className="p-medium">Running a festival, market, or fair? We&apos;re at home in bigger, busier settings and offer flexible rates to match. Get in touch and we&apos;ll work out what fits.</p>
              <Link href="mailto:info@eventsitters.nz?subject=Special%20Rates%20Request" className="button outline pale-blue w-button">Get in Touch</Link>
            </div>
          </div>
          <div className="confetti-festivals-markets-blue" />
          <div className="confetti-festivals-markets-yellow" />
          <div className="confetti-festivals-markets-red" />
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Can I customise the package for my event?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The base package is a starting point, not a fixed formula. We can swap activities, adjust the setup, and layer in extras to suit your event, your venue, and the kids attending." } },
          { "@type": "Question", "name": "Are there travel fees?", "acceptedAnswer": { "@type": "Answer", "text": "For most venues across Napier, Hastings, and Havelock North, no. If your event is further afield, we'll let you know when we put your proposal together." } },
          { "@type": "Question", "name": "How do the add-ons work?", "acceptedAnswer": { "@type": "Answer", "text": "Add-ons are extras you layer on top of the base package. Some, like face painting, run in a dedicated window rather than the full duration. We'll talk through what makes sense for your event during the consultation." } },
          { "@type": "Question", "name": "What happens if I need to cancel or reschedule?", "acceptedAnswer": { "@type": "Answer", "text": "We understand things change. Get in touch as early as possible and we'll do our best to accommodate. Deposit and cancellation terms are outlined in your booking confirmation." } },
          { "@type": "Question", "name": "Do you cater to children under 3?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If little ones under 3 will be at your event, let us know and we'll create a dedicated space for them. We do ask that parents stay close by for children that young." } },
          { "@type": "Question", "name": "How long do you need to set up and pack down?", "acceptedAnswer": { "@type": "Answer", "text": "Usually around 30 to 45 minutes each way, depending on the setup. We'll coordinate with your venue or event manager to fit your run sheet." } },
        ],
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Kids' Entertainment — Base Package",
        "provider": { "@type": "LocalBusiness", "name": "Event Sitters", "url": "https://www.eventsitters.nz" },
        "areaServed": "Hawke's Bay, New Zealand",
        "description": "Four hours of on-location kids' entertainment including a decorated play space, hands-on activities, and experienced staff. Suitable for children aged 3–12 at weddings, corporate functions, birthday parties, and public events.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "NZD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "300",
            "maxPrice": "600",
            "priceCurrency": "NZD",
          },
        },
      }) }} />

      {/* Quote Form */}
      <section id="quote-form" className="section form">
        <div className="container form">
          <div className="home-quote-form-header-wrapper">
            <div className="super-heading all-caps">Quote Request</div>
            <h2 className="headline-medium copy-text quote-form">Know what you&apos;re after? Let&apos;s get the details sorted.</h2>
          </div>
          <div className="quote-request-form-wrapper">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Packages FAQ */}
      <FAQ
        title="Questions About Packages and Pricing"
        background="white"
        questions={[
          { q: "Can I customise the package for my event?", a: "Yes. The base package is a starting point, not a fixed formula. We can swap activities, adjust the setup, and layer in extras to suit your event, your venue, and the kids attending." },
          { q: "Are there travel fees?", a: "For most venues across Napier, Hastings, and Havelock North, no. If your event is further afield, we'll let you know when we put your proposal together." },
          { q: "How do the add-ons work?", a: "Add-ons are extras you layer on top of the base package. Some, like face painting, run in a dedicated window rather than the full duration. We'll talk through what makes sense for your event during the consultation." },
          { q: "What happens if I need to cancel or reschedule?", a: "We understand things change. Get in touch as early as possible and we'll do our best to accommodate. Deposit and cancellation terms are outlined in your booking confirmation." },
          { q: "Do you cater to children under 3?", a: "Yes. If little ones under 3 will be at your event, let us know and we'll create a dedicated space for them. We do ask that parents stay close by for children that young." },
          { q: "How long do you need to set up and pack down?", a: "Usually around 30 to 45 minutes each way, depending on the setup. We'll coordinate with your venue or event manager to fit your run sheet." },
        ]}
      />
    </>
  );
}
