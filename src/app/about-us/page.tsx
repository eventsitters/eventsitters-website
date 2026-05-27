import type { Metadata } from "next";
import Image from "next/image";
import ConfettiParallax, { type ElConfig } from "@/components/ConfettiParallax";
import HawkesBayCard from "@/components/HawkesBayCard";

const StarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.33301 9.2722C1.01976 8.98251 1.18992 8.45882 1.61361 8.40858L7.61719 7.69649C7.78987 7.67602 7.93986 7.56758 8.0127 7.40967L10.5449 1.91989C10.7236 1.53245 11.2744 1.53238 11.4531 1.91981L13.9854 7.40956C14.0582 7.56746 14.2072 7.67619 14.3799 7.69667L20.3838 8.40858C20.8075 8.45882 20.9772 8.98267 20.6639 9.27235L16.2258 13.3773C16.0981 13.4954 16.0413 13.6711 16.0752 13.8417L17.2531 19.7714C17.3362 20.1899 16.8908 20.5141 16.5185 20.3057L11.2432 17.352C11.0915 17.2671 10.9071 17.2675 10.7554 17.3524L5.47949 20.305C5.10718 20.5134 4.66099 20.1898 4.74414 19.7714L5.92219 13.8421C5.95608 13.6715 5.89938 13.4954 5.77172 13.3773L1.33301 9.2722Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const QualityIcon = () => (
  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.2519 15.1586L17.3798 13.5595C17.412 13.1567 17.5708 12.7745 17.833 12.4669L18.873 11.2451C19.4847 10.5273 19.4846 9.47189 18.8729 8.75406L17.8329 7.53295C17.5707 7.22535 17.4117 6.84284 17.3795 6.43997L17.2524 4.84117C17.1774 3.90104 16.4306 3.15427 15.4905 3.07925L13.8915 2.95132C13.4886 2.91918 13.1066 2.76167 12.799 2.49953L11.5781 1.45904C10.8603 0.847313 9.80382 0.847313 9.08599 1.45904L7.86488 2.49908C7.55728 2.76121 7.17477 2.92005 6.7719 2.9522L5.1728 3.07981M17.2529 15.1592C17.1778 16.0994 16.4313 16.8459 15.4912 16.9209M15.4907 16.92L13.8916 17.0476C13.4887 17.0797 13.1064 17.2378 12.7988 17.5L11.5781 18.541C10.8603 19.1527 9.80371 19.1528 9.08589 18.5411L7.86519 17.501C7.55758 17.2389 7.17528 17.0801 6.77241 17.0479L5.1728 16.92M5.17376 16.9209C4.23363 16.8459 3.48708 16.0994 3.41206 15.1592L3.28413 13.5596C3.25198 13.1568 3.09314 12.7745 2.83101 12.4668L1.79097 11.2461C1.17924 10.5283 1.17896 9.47178 1.79068 8.75396L2.83166 7.53326C3.09379 7.22565 3.25111 6.84335 3.28326 6.44048L3.41118 4.84087M3.41206 4.84183C3.48708 3.9017 4.23363 3.15515 5.17376 3.08013" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FlexibilityIcon = () => (
  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.168 17.5C13.168 15.2909 10.4817 13.5 7.16797 13.5C3.85426 13.5 1.16797 15.2909 1.16797 17.5M17.168 14.5V11.5M17.168 11.5V8.5M17.168 11.5H14.168M17.168 11.5H20.168M7.16797 10.5C4.95883 10.5 3.16797 8.70914 3.16797 6.5C3.16797 4.29086 4.95883 2.5 7.16797 2.5C9.37711 2.5 11.168 4.29086 11.168 6.5C11.168 8.70914 9.37711 10.5 7.16797 10.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const metadata: Metadata = {
  title: "About Event Sitters",
  description: "Meet Samantha and the Event Sitters team, Hawke's Bay specialists in on-location kids' entertainment for weddings, corporate functions, and public events.",
  alternates: { canonical: "https://www.eventsitters.nz/about-us" },
};

const parallaxEls: ElConfig[] = [
  { selector: '.confetti-hero-red',            mx: -24, my: -16 },
  { selector: '.confetti-hero-turquoise',      mx:  24, my: -16 },
  { selector: '.confetti-hero-yellow',         mx: -16, my:  24 },
  { selector: '.hero-visual',                  mx:   8, my:   8 },
  { selector: '.confetti-portrait-turquoise',  mx: -20, my:  16 },
  { selector: '.confetti-hb-yellow',           mx:  20, my: -20 },
  { selector: '.confetti-hb-purple',           mx: -20, my:  16 },
  { selector: '.confetti-footer-yellow',       mx:  -8, my:  -8 },
  { selector: '.confetti-footer-red',          mx:  32, my: -40 },
];

const offerCards = [
  {
    Icon: StarIcon,
    color: "pale-red",
    title: "Experience",
    paras: [
      "With years of experience working with children of all ages, including those with special needs, we have a deep understanding of how to create enjoyable and inclusive environments.",
      "While fun is our focus, we also prioritise the children's well-being, giving parents peace of mind knowing their little ones are in expert hands.",
    ],
  },
  {
    Icon: QualityIcon,
    color: "pale-purple",
    title: "Quality",
    paras: [
      "We use high-quality, safe materials across all our activities. Because the best experiences don't cut corners.",
      "Our experienced team brings real creativity and know-how to every event, making sure every child gets a genuinely good time.",
    ],
  },
  {
    Icon: FlexibilityIcon,
    color: "pale-turquoise",
    title: "Flexibility",
    paras: [
      "We know that every event is special, so our services are always tailored to suit the event, the space, the activities, and the number and ages of the children.",
      "This flexible approach helps make sure every child has a memorable time. Plus, you only pay for what works best for your event and guests.",
    ],
  },
];

const process = [
  { num: "01", title: "Consultation", desc: "We have a chat about your event: the number of kids, the space, and what you have in mind." },
  { num: "02", title: "Custom Proposal", desc: "From there, we put together a package tailored to your event and your guests." },
  { num: "03", title: "Confirmation", desc: "Happy with the plan? A 20% deposit locks in your date and we'll take care of the rest." },
];

export default function AboutUs() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Samantha",
        "jobTitle": "Founder and Team Leader",
        "description": "Founder of Event Sitters, holding a postgraduate diploma in Early Childhood Education with years of experience working with children across kindergartens, care centres, and family homes in Hawke's Bay.",
        "image": "https://www.eventsitters.nz/images/samantha-event-sitters-founder-hawkes-bay.webp",
        "url": "https://www.eventsitters.nz/about-us",
        "worksFor": {
          "@type": "EntertainmentBusiness",
          "name": "Event Sitters",
          "url": "https://www.eventsitters.nz",
        },
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eventsitters.nz" },
          { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.eventsitters.nz/about-us" },
        ],
      }) }} />
      <ConfettiParallax els={parallaxEls} />
      {/* Hero */}
      <section className="section">
        <div className="container hero about">
          <div className="w-layout-layout header-grid wf-layout-layout">
            <div className="w-layout-cell cell-3">
              <div className="div-block-7">
                <h2 className="super-heading all-caps">Event Sitters Hawke&apos;s Bay</h2>
                <h1 className="headline-large">Kids Love Us. Their Parents Love the Break.</h1>
                <div className="p-large">We&apos;re a small, hands-on team based in Hawke&apos;s Bay, keeping every child at your event happy, engaged, and well looked after.</div>
              </div>
            </div>
            <div className="w-layout-cell cell-2">
              <div className="hero-visual-wrapper">
                <div className="hero-visual" />
                <Image src="/images/confetti-red.svg" alt="Confetti" className="confetti-hero-red" width={80} height={80} />
                <Image src="/images/confetti-yellow.svg" alt="Confetti" className="confetti-hero-yellow" width={80} height={80} />
                <Image src="/images/confetti-turquoise-outline.svg" alt="Confetti" className="confetti-hero-turquoise" width={80} height={80} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section">
        <div className="container">
          <div className="w-layout-layout about-offer-grid wf-layout-layout">
            <div className="w-layout-cell">
              <div className="offer-header">
                <h2 className="headline-medium">What We Offer</h2>
                <p className="p-medium">Every event is different, and so is every child. We adapt our approach to suit your space, your guests, and your vibe, using quality resources and hands-on activities to keep kids engaged from arrival to pack-down.</p>
              </div>
            </div>

            {offerCards.map((card) => (
              <div key={card.title} className="w-layout-cell">
                <div className={`addon-card ${card.color}`}>
                  <div className="card-icon-wrapper white">
                    <card.Icon />
                  </div>
                  <div className="paragraph-wrapper">
                    <h3 className="headline-small">{card.title}</h3>
                    {card.paras.map((p, i) => <p key={i} className="p-small">{p}</p>)}
                  </div>
                </div>
              </div>
            ))}

            <div className="w-layout-cell">
              <div className="offer-card-negative pale-blue">
                <div className="card-icon-wrapper blue">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Info icon">
                    <path d="M10 9V14M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19ZM10.0498 6V6.1L9.9502 6.1002V6H10.0498Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="paragraph-wrapper">
                  <h3 className="headline-small padding-top">What We Can <em>Not</em> Offer</h3>
                  <p className="p-small">We do <em>not</em> offer a drop-off childcare service. Instead we provide an open, flexible space with a joyful atmosphere where children can join in the fun and come and go as they please.</p>
                  <p className="p-small">This means that while parents or guardians don&apos;t need to stay with their children, they are still responsible for their supervision during the event.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portrait / Bio */}
      <section className="section">
        <div className="container">
          <div className="w-layout-layout portrait-grid wf-layout-layout">
            <div className="w-layout-cell cell-4">
              <div className="portrait-visual-wrapper">
                <Image
                  src="/images/samantha-event-sitters-founder-hawkes-bay.webp"
                  alt="Portrait of Samantha"
                  className="image-portrait"
                  width={720}
                  height={852}
                />
                <Image src="/images/confetti-turquoise.svg" alt="Confetti" className="confetti-portrait-turquoise" width={80} height={80} />
                <Image src="/images/confetti-purple-outline.svg" alt="Confetti" className="confetti-hero-turquoise" width={80} height={80} />
              </div>
            </div>
            <div className="w-layout-cell cell">
              <div className="festivals-markets-text-wrapper">
                <div className="paragraph-wrapper">
                  <p className="p-medium">I&apos;m Samantha, founder of Event Sitters. I hold a postgraduate diploma in Early Childhood Education and have spent years working with kids across kindergartens, care centres, and family homes in Hawke&apos;s Bay.</p>
                  <p className="p-medium">What I love most is watching kids get properly stuck into something: curious, busy, and having a great time. That&apos;s what we&apos;re here for.</p>
                </div>
              </div>
              <blockquote className="quote">If the kids are happy, everyone can relax. That&apos;s the whole idea.</blockquote>
              <p className="p-small"><strong>Samantha</strong><br /><em>Owner and Team Leader</em></p>
            </div>
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

      {/* Where We Work */}
      <section className="section">
        <div className="container hawkes-bay">
          <HawkesBayCard />
        </div>
      </section>
    </>
  );
}
