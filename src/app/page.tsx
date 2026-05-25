import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import QuoteForm from "@/components/QuoteForm";
import ConfettiParallax, { type ElConfig } from "@/components/ConfettiParallax";

export const metadata: Metadata = {
  title: "Event Sitters | On-Location Kids Entertainment",
  description: "We create fun, engaging spaces for kids at weddings, parties, public and corporate events, with tailored activities to keep all ages happily entertained!",
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

// Grid spans: 6-column grid (2+4, 3+3, 4+2)
const activities = [
  { title: "Active Play & Games",  span: "services-cell-2", color: "pale-red",      icon: "/images/active-play.svg",  iconAlt: "Balloon icon",        iconClass: "active-play-icon",  desc: "We offer a wide variety of fun and engaging games, tailored to suit children of all ages. From interactive group activities and classic board games for older kids to imaginative play for toddlers – we have something for everyone to enjoy!" },
  { title: "Arts & Crafts",        span: "services-cell-4", color: "pale-purple",   icon: "/images/arts-crafts.svg",  iconAlt: "Scissor cut icon",    iconClass: "arts-crafts-icon",  desc: "We offer mess-free activities that keep kids entertained with fun, hands-on projects. From simple DIY crafts to imaginative creations, children can immerse themselves in a playful and creative experience. Best of all, they get to take home their wonderful creations to cherish." },
  { title: "Toys & Play time",     span: "services-cell-3", color: "pale-turquoise",icon: "/images/toys.svg",         iconAlt: "Stacked blocks icon", iconClass: "toys-icon",         desc: "Our curated selection of quality toys provides a variety of engaging options for meaningful play time. Children can explore, construct, and build with our collection of toys, ensuring hours of fun." },
  { title: "Story time",           span: "services-cell-3", color: "pale-blue",     icon: "/images/storytime.svg",    iconAlt: "Book icon",           iconClass: "storytime-icon",    desc: "We offer enchanting stories to help children unwind in a relaxing setting. Alongside story time, we provide search-and-find books for them to explore, adding an extra layer of fun and engagement." },
  { title: "Cozy Corner",          span: "services-cell-4", color: "pale-yellow",   icon: "/images/cozy-corner.svg",  iconAlt: "Pillow icon",         iconClass: "cozy-corner-icon",  desc: "Our cozy corner provides a quiet space where children can relax and recharge. It's the perfect retreat for some downtime, offering a calming atmosphere that helps them feel refreshed and comfortable, or enjoy a bit of pretend play." },
  { title: "Decoration",           span: "services-cell-2", color: "pale-pink",     icon: "/images/decoration.svg",   iconAlt: "Decorations icon",    iconClass: "decoration-icon",   desc: "We brighten up any space with charming touches like blankets, pillows, balloons, and other decor elements. Our goal is to create an inviting and joyful atmosphere that makes it feel special." },
];

// Images are CSS background-images keyed by cls; span classes control the 12-col grid
const galleryImages = [
  { cls: "one",   span: "gallery-cell-3" },
  { cls: "two",   span: "gallery-cell-6" },
  { cls: "three", span: "gallery-cell-3" },
  { cls: "four",  span: "gallery-cell-4" },
  { cls: "five",  span: "gallery-cell-4" },
  { cls: "six",   span: "gallery-cell-4" },
  { cls: "seven", span: "gallery-cell-7" },
  { cls: "eight", span: "gallery-cell-5" },
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
              <div className="form-icon w-embed">
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 8.04974C1.5 12.9016 5.74448 16.9138 7.62319 18.4521C7.89206 18.6723 8.02811 18.7837 8.22871 18.8401C8.38491 18.8841 8.6148 18.8841 8.771 18.8401C8.97197 18.7835 9.10707 18.6732 9.37695 18.4523C11.2557 16.914 15.4999 12.902 15.4999 8.05019C15.4999 6.21407 14.7625 4.45294 13.4497 3.15461C12.137 1.85629 10.3566 1.12689 8.50008 1.12689C6.64357 1.12689 4.86301 1.8564 3.55025 3.15472C2.2375 4.45305 1.5 6.21363 1.5 8.04974Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.5 7.12689C6.5 8.23146 7.39543 9.12689 8.5 9.12689C9.60457 9.12689 10.5 8.23146 10.5 7.12689C10.5 6.02232 9.60457 5.12689 8.5 5.12689C7.39543 5.12689 6.5 6.02232 6.5 7.12689Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="super-heading all-caps">Hawke&apos;s Bay</div>
            </div>
            <h1 className="title-hero">On-Location Entertainment for Your Little Guests</h1>
            <div className="p-large hero">We create fun, engaging spaces for kids at weddings, parties, public and corporate events, with tailored activities to keep all ages happily entertained!</div>
          </div>
          <div className="hero-cta">
            <Link href="#services" className="button outline w-button">Our Services</Link>
            <Link href="#quote-form" className="button w-button">Request a Quote</Link>
          </div>
          </div>
        <div className="confetti-header-pink" />
        <div className="confetti-header-turquoise" />
        <div className="confetti-header-yellow" />
        <div className="confetti-header-red" />
      </section>

      {/* Services */}
      <section id="services" className="section">
        <div className="container services">
          <div className="events-tile pale-yellow">
            <h2 className="headline-small">Private Events</h2>
            <Image src="/images/private-events.webp" alt="A young boy in a polka-dotted shirt and beige cap is deep in concentration while playing a dice game in a wooden tray." className="event-thumbnail" width={1120} height={750} style={{ width: '100%', height: 'auto' }} />
            <div className="copy-wrapper">
              <div>At weddings and birthday parties, we create a fun space just for kids! With custom activities, games and crafts, there&apos;s something for everyone.</div>
              <div>Kids can join in, take a break, and share their fun, making the day even more special for all.</div>
            </div>
          </div>
          <div className="events-tile pale-turquoise">
            <h2 className="headline-small">Work Functions</h2>
            <Image src="/images/corporate-functions.webp" alt="A smiling young boy wearing a beige cap sits at a table filled with art supplies." className="event-thumbnail" width={1121} height={750} style={{ width: '100%', height: 'auto' }} />
            <div className="copy-wrapper">
              <div>During work gatherings and corporate functions, we help increase attendance by catering to the needs of families, allowing parents to focus on their professional commitments.</div>
              <div>Guests enjoy peace of mind their children are only a few steps away!</div>
            </div>
          </div>
          <div className="events-tile pale-purple">
            <h2 className="headline-small">Public Events</h2>
            <Image src="/images/public-events.webp" alt="A group of children and adults gather around a table at an outdoor event, engaged in holiday crafts." className="event-thumbnail" width={1121} height={750} style={{ width: '100%', height: 'auto' }} />
            <div className="copy-wrapper">
              <div>Hosting a festival, market, or community event? We&apos;ll bring the fun! With games, activities, and themed entertainment.</div>
              <div>Our flexible approach means we can adapt to any event size, location, and theme, providing a fun experience for kids in a family-friendly atmosphere.</div>
            </div>
          </div>
        </div>
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
        <div className="container">
          <div className="w-layout-layout services-masonry wf-layout-layout">
            {activities.map((a) => (
              <div key={a.title} className={`w-layout-cell ${a.span}`}>
                <div className={`services-tile ${a.color}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.icon} alt={a.iconAlt} className={a.iconClass} />
                  <h2 className="headline-small">{a.title}</h2>
                  <div>{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container">
          <div className="w-layout-layout gallery wf-layout-layout">
            {galleryImages.map((img) => (
              <div key={img.cls} className={`w-layout-cell ${img.span}`}>
                <div className={`gallery-image-container ${img.cls}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Quote Form */}
      <section id="quote-form" className="section form">
        <div className="container form">
          <div className="home-quote-form-header-wrapper">
            <div className="super-heading all-caps">Quote Request</div>
            <h2 className="headline-medium copy-text quote-form">tell us how we can support your event with tailored activities</h2>
          </div>
          <div className="quote-request-form-wrapper">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
