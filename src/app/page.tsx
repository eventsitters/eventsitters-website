import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import QuoteForm from "@/components/QuoteForm";
import ConfettiParallax, { type ElConfig } from "@/components/ConfettiParallax";
import SmoothAnchorLink from "@/components/SmoothAnchorLink";

export const metadata: Metadata = {
  title: "On-Location Kids' Entertainment | Event Sitters Hawke's Bay",
  description: "We create fun, engaging spaces for kids at weddings, parties, public and corporate events in Hawke's Bay, NZ — with tailored activities to keep all ages happily entertained!",
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
  { title: "Toys & Playtime",      span: "services-cell-3", color: "pale-turquoise",icon: "/images/toys.svg",         iconAlt: "Stacked blocks icon", iconClass: "toys-icon",         desc: "Our curated selection of quality toys provides a variety of engaging options for meaningful play time. Children can explore, construct, and build with our collection of toys, ensuring hours of fun." },
  { title: "Story Time",           span: "services-cell-3", color: "pale-blue",     icon: "/images/storytime.svg",    iconAlt: "Book icon",           iconClass: "storytime-icon",    desc: "We offer enchanting stories to help children unwind in a relaxing setting. Alongside story time, we provide search-and-find books for them to explore, adding an extra layer of fun and engagement." },
  { title: "Cozy Corner",          span: "services-cell-4", color: "pale-yellow",   icon: "/images/cozy-corner.svg",  iconAlt: "Pillow icon",         iconClass: "cozy-corner-icon",  desc: "Our cozy corner provides a quiet space where children can relax and recharge. It's the perfect retreat for some downtime, offering a calming atmosphere that helps them feel refreshed and comfortable, or enjoy a bit of pretend play." },
  { title: "Decoration",           span: "services-cell-2", color: "pale-pink",     icon: "/images/decoration.svg",   iconAlt: "Decorations icon",    iconClass: "decoration-icon",   desc: "We brighten up any space with charming touches like blankets, pillows, balloons, and other decor elements. Our goal is to create an inviting and joyful atmosphere that makes it feel special." },
];

const galleryImages = [
  { cls: "one",   span: "gallery-cell-3", src: "/images/img-4506.webp",          alt: "Child carefully colouring a detailed animal illustration at an Event Sitters activity station" },
  { cls: "two",   span: "gallery-cell-6", src: "/images/p2060103.webp",          alt: "Rainbow-coloured wooden building blocks stacked in a pyramid in front of a cosy play tent with bunting flags" },
  { cls: "three", span: "gallery-cell-3", src: "/images/img-4012.webp",          alt: "Child's hands colouring a Christmas tree illustration with a green marker at an Event Sitters craft session" },
  { cls: "four",  span: "gallery-cell-4", src: "/images/pc070239.webp",          alt: "Children in Santa hats doing arts and crafts at an outdoor public event, with Event Sitters signage visible" },
  { cls: "five",  span: "gallery-cell-4", src: "/images/p2060335.webp",          alt: "Young boy in a cap concentrating on building a tower with colourful wooden blocks" },
  { cls: "six",   span: "gallery-cell-4", src: "/images/p2060476.webp",          alt: "Young boy relaxing inside a cosy play tent surrounded by stuffed animals and soft cushions" },
  { cls: "seven", span: "gallery-cell-7", src: "/images/corporate-functions.webp", alt: "A smiling young boy wearing a beige cap sits at a table filled with art supplies at a work function" },
  { cls: "eight", span: "gallery-cell-5", src: "/images/pc070120.webp",          alt: "Children and parents doing Christmas crafts together at an outdoor market event" },
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
            <div className="p-large hero">We keep kids happy, active, and looked after, so the grown-ups can actually focus on something else.</div>
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
        <div className="container services">
          <Link href="/services#private-functions" className="events-tile pale-yellow">
            <h2 className="headline-small">Private Functions</h2>
            <Image src="/images/private-events.webp" alt="A young boy in a polka-dotted shirt and beige cap is deep in concentration while playing a dice game in a wooden tray." className="event-thumbnail" width={1120} height={750} style={{ width: '100%', height: 'auto' }} />
            <div className="copy-wrapper">
              <div>Weddings, birthdays, family get-togethers. We set up a dedicated kids&apos; space packed with games, crafts, and activities.</div>
              <div>They can dip in, take a breather, or stay all day. Either way, they&apos;re in good hands.</div>
            </div>
          </Link>
          <Link href="/services#corporate-events" className="events-tile pale-turquoise">
            <h2 className="headline-small">Corporate Events</h2>
            <Image src="/images/corporate-functions.webp" alt="A smiling young boy wearing a beige cap sits at a table filled with art supplies." className="event-thumbnail" width={1121} height={750} style={{ width: '100%', height: 'auto' }} />
            <div className="copy-wrapper">
              <div>Kids at corporate events? Sorted. We keep them close by, engaged, and entertained, so parents stay present and your event runs the way it should.</div>
              <div>Because the best work events are the ones where everyone has a great time. Even the littlest attendees.</div>
            </div>
          </Link>
          <Link href="/services#public-events" className="events-tile pale-purple">
            <h2 className="headline-small">Public Events</h2>
            <Image src="/images/public-events.webp" alt="A group of children and adults gather around a table at an outdoor event, engaged in holiday crafts." className="event-thumbnail" width={1121} height={750} style={{ width: '100%', height: 'auto' }} />
            <div className="copy-wrapper">
              <div>Festivals, markets, community events. We show up, set up, and bring the fun. Games, crafts, and themed entertainment for every age.</div>
              <div>Flexible enough for any size, location, or theme. Just point us to the spot and we&apos;ll handle the rest.</div>
            </div>
          </Link>
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
                <div className={`gallery-image-container ${img.cls}`}>
                  <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover", objectPosition: "center" }} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="section form pale-blue">
        <div className="container form">
          <div className="home-quote-form-header-wrapper">
            <div className="super-heading all-caps">Quote Request</div>
            <h2 className="headline-medium copy-text quote-form">Tell us about your event, we&apos;ll handle the rest.</h2>
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
