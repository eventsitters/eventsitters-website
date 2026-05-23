import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import ConfettiParallax, { type ElConfig } from "@/components/ConfettiParallax";

export const metadata: Metadata = {
  title: "Packages",
  description: "Explore our flexible packages for kids' entertainment at weddings, parties, and events that make sure every child has a great time!",
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
];

const included = [
  "We will entertain your little guests for 4 hours",
  "Perfect for groups of children aged 3 to 12",
  "Choose from our selection of active play, arts & crafts, badge making, story time, and more",
  "A charming, decorated play space with cozy corner, balloons, blankets, and more",
  "An experienced team providing entertainment and supervision",
];

const addons = [
  {
    img: "/images/all-day-package.webp",
    alt: "A cute play tent with plush toys set up at an event",
    title: "All-Day Package",
    desc: "Enjoy full-day coverage with endless fun activities to keep kids engaged from start to finish.",
  },
  {
    img: "/images/larger-groups.webp",
    alt: "Children sitting on grass in an outdoor setting, engaged in drawing and crafting activities.",
    title: "Larger Groups",
    desc: "We'll accommodate additional children with extra staff and activities to ensure everyone has a great time.",
  },
  {
    img: "/images/outdoor-set-up.webp",
    alt: "Outdoor craft setup under a white canopy, featuring tables with art supplies in a lush garden environment.",
    title: "Outdoor Set-Up",
    desc: "A durable, weather-resistant gazebo setup perfect for your outdoor events, come rain or shine.",
  },
  {
    img: "/images/themed-decor-crafts.webp",
    alt: "Child colouring a detailed craft design with bright pencils, focusing on fine artistic work.",
    title: "Themed Decor & Crafts",
    desc: "Customised decorations and creative crafts that match your event's theme in our activities.",
  },
  {
    img: "/images/gift-bags.webp",
    alt: "Smiling child in a yellow dress holding a gift bag at a party with pastel decorations in the background.",
    title: "Gift Bags",
    desc: "Keep the party going for your little guests with take-home goodies that reflect the activities at your event.",
  },
  {
    img: "/images/face-painting.webp",
    alt: "Child's face being painted with vibrant colours, highlighting intricate details on the nose.",
    title: "Face Painting",
    desc: "A favourite that transforms kids into a range of characters, animals, or designs. Usually not for the full time.",
  },
];

const process = [
  { num: "01", title: "Consultation", desc: "We'll discuss your plans for the event, the number of children attending, and your specific needs." },
  { num: "02", title: "Proposal", desc: "Based on that, we'll create a tailor-made package that aligns with your vision for the event." },
  { num: "03", title: "Confirmation", desc: "Once you're happy with our proposal, a 20% deposit will secure your booking, and we'll see you on the big day!" },
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
                <h2 className="super-heading all-caps"><strong>For Every Event</strong></h2>
                <h1 className="headline-large">Flexible Packages to Suit Your Event and Budget</h1>
                <div className="p-large">We know that every event is unique, and so are the needs of your little guests. That&apos;s why we offer flexible packages to meet everyones needs. Explore your options and let us help make your event truly special!</div>
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
              <p className="p-medium">We like to keep things simple. Every event is unique, so we offer a base package that covers the most popular activities and group sizes – perfect for a fun and memorable day. From there, you can add anything you like to make it just right for you!</p>
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
                <h2 className="headline-medium">Add-Ons &amp; Custom Activities</h2>
                <p className="p-medium">Make our service a perfect match for your event with add-ons and custom activities! These are just a few of the most popular ideas, but we&apos;re happy to work with you to bring any request to life.</p>
              </div>
            </div>
            {addons.map((a) => (
              <div key={a.title} className="w-layout-cell">
                <div className="addon-card">
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
          <h2 className="headline-medium">Our Process</h2>
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
              <p className="p-medium">Hosting a public or community event? We specialise in engaging larger crowds of children with tailored activities that fit the vibe of your event with various models. Contact us directly for more specific pricing options and hourly rates. Let&apos;s make your event family-friendly and fun!</p>
              <Link href="mailto:info@eventsitters.nz?subject=Special%20Rates%20Request" className="button outline pale-blue w-button">Get in Touch</Link>
            </div>
          </div>
          <div className="confetti-festivals-markets-blue" />
          <div className="confetti-festivals-markets-yellow" />
          <div className="confetti-festivals-markets-red" />
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="section form">
        <div className="container form">
          <div className="home-quote-form-header-wrapper">
            <div className="super-heading all-caps">Quote Request</div>
            <h2 className="headline-medium copy-text quote-form">Know what you want already? Request your quote today!</h2>
          </div>
          <div className="quote-request-form-wrapper">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
