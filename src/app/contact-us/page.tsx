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
  description: "Have questions or need a quote? Get in touch with Event Sitters for tailored kids' entertainment at your event. We're here to help make it special!",
  alternates: { canonical: "https://www.eventsitters.nz/contact-us" },
};

export default function ContactUs() {
  return (
    <>
      <ConfettiParallax els={parallaxEls} />
      <section className="section">
        <div className="container contact">
          <div className="w-layout-layout contact-wrapper wf-layout-layout">
            <div className="w-layout-cell cell-6">
              <div className="contact-address-wrapper">
                <div className="contact-headline-wrapper">
                  <h1 className="headline-medium footer">Contact Us</h1>
                  <div className="p-medium">We&apos;d love to hear from you! Whether you have questions or need more details, we&apos;re here to help. Get in touch, and we&apos;ll get back to you as soon as possible!</div>
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
                  <h2 className="headline-medium copy-text">Get a quote</h2>
                  <div className="p-medium">Tell us how we can support your event with tailored activities</div>
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
