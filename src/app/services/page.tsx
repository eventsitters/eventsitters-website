import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import QuoteForm from "@/components/QuoteForm";
import ConfettiParallax, { type ElConfig } from "@/components/ConfettiParallax";
import SmoothAnchorLink from "@/components/SmoothAnchorLink";

export const metadata: Metadata = {
  title: "Kids' Entertainment Services",
  description: "On-location kids' entertainment in Hawke's Bay for weddings, birthdays, corporate events, and public events. Tailored activities for children aged 3–12 at your venue.",
  alternates: { canonical: "https://www.eventsitters.nz/services" },
};

const parallaxEls: ElConfig[] = [
  { selector: '.confetti-header-pink',      mx: -24, my: -24, repulse: 120, repulseRadius: 150 },
  { selector: '.confetti-header-turquoise', mx:  24, my:  24, repulse: 120, repulseRadius: 150 },
  { selector: '.confetti-header-yellow',    mx: -64, my: -64, repulse: 120, repulseRadius: 150 },
  { selector: '.confetti-header-red',       mx:  16, my:  16, repulse: 120, repulseRadius: 150 },
  { selector: '.confetti-footer-yellow',    mx: -40, my: -32 },
  { selector: '.confetti-footer-red',       mx:  40, my: -24 },
  { selector: '.confetti-faq-turquoise',    sx: -64, sy:  40 },
  { selector: '.confetti-faq-yellow',       sx:  32, sy:  32 },
];

const activities = [
  { title: "Active Play & Games",  span: "services-cell-2", color: "pale-red",       icon: "/images/active-play.svg",  iconAlt: "Balloon icon",        iconClass: "active-play-icon",  desc: "We offer a wide variety of fun and engaging games, tailored to suit children of all ages. From interactive group activities and classic board games for older kids to imaginative play for toddlers – we have something for everyone to enjoy!" },
  { title: "Arts & Crafts",        span: "services-cell-4", color: "pale-purple",    icon: "/images/arts-crafts.svg",  iconAlt: "Scissor cut icon",    iconClass: "arts-crafts-icon",  desc: "We offer mess-free activities that keep kids entertained with fun, hands-on projects. From simple DIY crafts to imaginative creations, children can immerse themselves in a playful and creative experience. Best of all, they get to take home their wonderful creations to cherish." },
  { title: "Toys & Playtime",      span: "services-cell-3", color: "pale-turquoise", icon: "/images/toys.svg",         iconAlt: "Stacked blocks icon", iconClass: "toys-icon",         desc: "Our curated selection of quality toys provides a variety of engaging options for meaningful play time. Children can explore, construct, and build with our collection of toys, ensuring hours of fun." },
  { title: "Story Time",           span: "services-cell-3", color: "pale-blue",      icon: "/images/storytime.svg",    iconAlt: "Book icon",           iconClass: "storytime-icon",    desc: "We offer enchanting stories to help children unwind in a relaxing setting. Alongside story time, we provide search-and-find books for them to explore, adding an extra layer of fun and engagement." },
  { title: "Cozy Corner",          span: "services-cell-4", color: "pale-yellow",    icon: "/images/cozy-corner.svg",  iconAlt: "Pillow icon",         iconClass: "cozy-corner-icon",  desc: "Our cozy corner provides a quiet space where children can relax and recharge. It's the perfect retreat for some downtime, offering a calming atmosphere that helps them feel refreshed and comfortable, or enjoy a bit of pretend play." },
  { title: "Decoration",           span: "services-cell-2", color: "pale-pink",      icon: "/images/decoration.svg",   iconAlt: "Decorations icon",    iconClass: "decoration-icon",   desc: "We brighten up any space with charming touches like blankets, pillows, balloons, and other decor elements. Our goal is to create an inviting and joyful atmosphere that makes it feel special." },
];

const process = [
  { num: "01", title: "Consultation", desc: "We chat about your event — the venue, the age range of kids attending, and what you have in mind." },
  { num: "02", title: "Proposal",     desc: "We put together a package built around your event. Tailored, not templated." },
  { num: "03", title: "Confirmation", desc: "Happy with it? A 20% deposit locks in your date. We'll handle everything from there." },
];

export default function Services() {
  return (
    <>
      <ConfettiParallax els={parallaxEls} />

      {/* Hero */}
      <section className="section hero">
        <div className="container hero">
          <div className="title-wrapper">
            <div className="super-heading-wrapper">
              <div className="super-heading all-caps">Hawke&apos;s Bay Kids&apos; Entertainment</div>
            </div>
            <h1 className="title-hero">On-Location Entertainment for Every Kind of Event</h1>
            <div className="p-large hero">From intimate family gatherings to large public festivals, we bring the fun and keep the kids happy — so everyone else can actually enjoy the day.</div>
          </div>
          <div className="hero-cta">
            <SmoothAnchorLink href="#quote-form" className="button w-button">Request a Quote</SmoothAnchorLink>
            <Link href="/packages" className="button outline w-button">View Pricing</Link>
          </div>
        </div>
        <div className="confetti-header-pink" />
        <div className="confetti-header-turquoise" />
        <div className="confetti-header-yellow" />
        <div className="confetti-header-red" />
      </section>

      {/* Private Functions */}
      <section id="private-functions" className="section pale-yellow">
        <div className="container">
          <div className="service-detail-section">
            <div className="super-heading all-caps">Weddings &amp; Birthdays</div>
            <h2 className="headline-medium">Kids&apos; Entertainment for Private Functions</h2>
            <Image
              src="/images/private-events.webp"
              alt="Children engaged in crafts and games at a private event kids' space run by Event Sitters"
              width={1120}
              height={750}
              className="service-detail-image"
            />
            <p className="p-medium">Weddings, milestone birthdays, baby showers, anniversary celebrations — private functions are the events people plan for months. When kids are on the guest list, having the right plan for them keeps the whole thing running smoothly. Without it, you end up with a beautiful day slightly derailed by a five-year-old who&apos;s run out of patience.</p>
            <p className="p-medium">Ceremonies can be long and quiet — not ideal for little ones. We set up in a space close to the action, close enough that parents aren&apos;t anxious, far enough that the kids aren&apos;t the loudest thing in the room. By the time the speeches start, they&apos;re settled, busy, and genuinely happy.</p>
            <p className="p-medium">During the reception, we run a relaxed programme of crafts, games, and activities. Kids can drop in and out as they like — there&apos;s no pressure to stay, and no pressure to leave. We bring the blankets, balloons, and bunting. We handle setup and pack-down. You get on with celebrating.</p>
            <p className="p-medium">Birthday parties and family gatherings work the same way, scaled to however many kids are coming. A handful of cousins or forty kids from the school — we&apos;ll have something for each age group. Themed crafts, badge making, and activities can all be tailored to match the occasion.</p>
            <div>
              <SmoothAnchorLink href="#quote-form" className="button w-button">Request a Quote</SmoothAnchorLink>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Events */}
      <section id="corporate-events" className="section pale-turquoise">
        <div className="container">
          <div className="service-detail-section">
            <div className="super-heading all-caps">Work Functions &amp; Corporate Events</div>
            <h2 className="headline-medium">Kids&apos; Entertainment for Corporate Events</h2>
            <Image
              src="/images/corporate-functions.webp"
              alt="A smiling young boy wearing a beige cap sits at a table filled with art supplies at a work function"
              width={1121}
              height={750}
              className="service-detail-image"
            />
            <p className="p-medium">More companies are opening their events to families, and it makes sense. Staff are more likely to attend, more relaxed when they arrive, and genuinely appreciate the gesture. The catch is that kids need something to actually do — not just be tolerated.</p>
            <p className="p-medium">We&apos;ve worked with businesses across Hawke&apos;s Bay for team family days, company picnics, and staff celebration events. We bring a proper kids&apos; setup — not a corner with a few colouring sheets — and run a programme that gives children something to genuinely look forward to. Parents can participate in the day and talk to colleagues without one eye permanently on their child.</p>
            <p className="p-medium">End-of-year celebrations and Christmas functions are our busiest season. Kids come in running on excitement, and parents need to be able to have a conversation. We take that load off completely — keeping the energy positive, the children engaged, and the atmosphere easy for everyone in the room.</p>
            <p className="p-medium">For conferences and awards evenings where partners and families are invited, a well-run kids&apos; space means partners can attend and stay present rather than spending the evening keeping a toddler from unravelling. It&apos;s a small detail that changes the whole dynamic of the event.</p>
            <div>
              <SmoothAnchorLink href="#quote-form" className="button w-button">Request a Quote</SmoothAnchorLink>
            </div>
          </div>
        </div>
      </section>

      {/* Public Events */}
      <section id="public-events" className="section pale-purple">
        <div className="container">
          <div className="service-detail-section">
            <div className="super-heading all-caps">Markets, Festivals &amp; Community Events</div>
            <h2 className="headline-medium">Kids&apos; Entertainment for Public Events</h2>
            <Image
              src="/images/public-events.webp"
              alt="A group of children and adults gather around a table at an outdoor event, engaged in holiday crafts"
              width={1121}
              height={750}
              className="service-detail-image"
            />
            <p className="p-medium">Public events have a different kind of energy. Families arrive in waves, kids have already used up their patience in the car, and without something to capture their attention, they&apos;re pulling on a sleeve within minutes. A proper kids&apos; activity space changes that — and it changes how long families stick around.</p>
            <p className="p-medium">At markets and fairs, we set up in a designated spot and run continuous activities throughout the day. Kids get properly stuck in, parents get to browse without being tugged in three directions, and families linger longer. It&apos;s good for the kids and genuinely good for the event.</p>
            <p className="p-medium">Festivals and community events often run from morning to late afternoon, so we plan for the long haul. The programme rotates throughout the day — different activities at different times — so kids who come back always find something new. An outdoor gazebo is available for shade and shelter, so the forecast is one less thing to plan around.</p>
            <p className="p-medium">We work directly with event organisers to fit within your layout, signage guidelines, and run sheet. We&apos;re experienced in busy outdoor environments, we bring everything we need, and we can scale up or down to match the expected crowd. Just point us to the spot and we&apos;ll take care of the rest.</p>
            <div>
              <SmoothAnchorLink href="#quote-form" className="button w-button">Request a Quote</SmoothAnchorLink>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Service Works */}
      <section className="section pale-blue">
        <div className="container process">
          <h2 className="headline-medium">How Our Service Works</h2>
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

      {/* Activities We Offer */}
      <section className="section">
        <div className="container">
          <div className="offer-header">
            <h2 className="headline-medium">Activities We Offer</h2>
            <p className="p-medium">Every event gets a mix of what&apos;s right for the age range and the occasion. Here&apos;s what&apos;s in the toolkit.</p>
          </div>
          <div className="w-layout-layout services-masonry wf-layout-layout">
            {activities.map((a) => (
              <div key={a.title} className={`w-layout-cell ${a.span}`}>
                <div className={`services-tile ${a.color}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.icon} alt={a.iconAlt} className={a.iconClass} />
                  <h3 className="headline-small">{a.title}</h3>
                  <div>{a.desc}</div>
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
      <FAQ
        title="Common Questions"
        questions={[
          { q: "Do you cover all event types and sizes?", a: "Yes. We work across weddings, birthdays, corporate functions, public events, markets, festivals, and community days — indoors or outdoors, big or small. Each setup is tailored to the venue and the group attending." },
          { q: "What age range do you cater for?", a: "We're set up for kids aged 3 to 12. If younger children will be attending, we can arrange a dedicated space for them — we just ask that parents stay close by for children under 3." },
          { q: "What do you bring to an event?", a: "Everything. Activities, games, crafts, blankets, pillows, balloons, bunting, tables — a fully decorated kids' space from the ground up. You don't need to supply anything." },
          { q: "How much space do you need?", a: "It depends on the group size and the setup, but we're flexible. We'll work with whatever your venue can offer and plan the layout accordingly. A 3×4 metre area is a reasonable starting point for smaller groups." },
          { q: "Can you set up outdoors?", a: "Absolutely. Outdoor events are a regular part of what we do. We offer a gazebo add-on for shade and shelter, so the weather isn't something you need to factor into your planning." },
          { q: "How far in advance should I book?", a: "As early as you can — particularly for summer weekends and public holidays. A 20% deposit confirms your date. The balance is due seven days before your event." },
        ]}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Kids' Entertainment — Event Sitters",
        "provider": { "@type": "LocalBusiness", "name": "Event Sitters", "url": "https://www.eventsitters.nz" },
        "areaServed": "Hawke's Bay, New Zealand",
        "description": "On-location kids' entertainment for weddings, private functions, corporate events, and public events in Hawke's Bay. Tailored activities for children aged 3–12.",
        "serviceType": ["Private Events", "Corporate Events", "Public Events", "Weddings", "Festivals", "Markets"],
      }) }} />
    </>
  );
}
