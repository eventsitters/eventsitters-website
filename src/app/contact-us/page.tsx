import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import ConfettiParallax, { type ElConfig } from "@/components/ConfettiParallax";

const parallaxEls: ElConfig[] = [
  { selector: '.confetti-contact-turquoise', mx: -20, my: -16, sx: -48, sy:  32 },
  { selector: '.confetti-contact-yellow',    mx:  32, my:  24, sx:  32, sy: -32 },
  { selector: '.confetti-contact-red',       mx: -16, my:  32, sx:  56, sy: -48 },
  { selector: '.confetti-footer-yellow',     mx: -12, my:  -8 },
  { selector: '.confetti-footer-red',        mx:  24, my: -16 },
];

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Ready to book kids' entertainment for your event? Get in touch with Event Sitters. We'll get back to you quickly.",
  alternates: { canonical: "https://www.eventsitters.nz/contact-us" },
};

export default function ContactUs() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Event Sitters",
        "url": "https://www.eventsitters.nz/contact-us",
        "description": "Get in touch with Event Sitters to book kids' entertainment for your event in Hawke's Bay. Call, email, or send a quote request.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.eventsitters.nz" },
            { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://www.eventsitters.nz/contact-us" },
          ],
        },
      }) }} />
      <ConfettiParallax els={parallaxEls} />
      <section className="section">
        <div className="container contact">
          <div className="w-layout-layout contact-wrapper wf-layout-layout">
            <div className="w-layout-cell cell-6">
              <div className="contact-address-wrapper">
                <div className="contact-headline-wrapper">
                  <h1 className="headline-medium footer">Let&apos;s talk.</h1>
                  <div className="p-medium">Have a question, or ready to lock in your date? Give us a call or send a message. We&apos;ll get back to you quickly.</div>
                </div>
                <div className="contact-cta-wrapper">
                  <a href="tel:+642108279718" className="button static w-button">Give Us a Call</a>
                  <a href="mailto:info@eventsitters.nz" className="button static w-button">Send Us an Email</a>
                </div>
              </div>
            </div>
            <div className="w-layout-cell">
              <div className="form-wrapper">
                <div className="contact-form-headline-wrapper">
                  <h2 className="headline-medium copy-text">Request a Quote</h2>
                  <div className="p-medium">Tell us about your event and we&apos;ll put together a proposal.</div>
                </div>
                <QuoteForm />
              </div>
            </div>
          </div>
          <div className="confetti-contact-turquoise" />
          <div className="confetti-contact-yellow" />
          <div className="confetti-contact-red" />
        </div>
      </section>
    </>
  );
}
