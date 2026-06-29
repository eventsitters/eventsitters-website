import Link from "next/link";

export default function Footer() {
  return (
    <section className="section footer">
      <div className="container footer">
        <div className="w-layout-layout footer-grid wf-layout-layout">
          <div className="w-layout-cell">
            <div className="footer-tagline-wrapper">
              <div className="footer-headline-wrapper">
                <h2 className="headline-medium footer">Event Sitters</h2>
                <div className="p-medium footer-tagline">Kids&apos; entertainment for weddings, work functions, public events and private celebrations across Hawke&apos;s Bay, including Napier, Hastings and Havelock North.</div>
              </div>
              <div className="footer-contact-wrapper">
                <div className="footer-link-label-wrapper">
                  <div className="p-medium">Email:</div>
                  <a href="mailto:info@eventsitters.nz?subject=Event%20Sitters%20Info" className="footer-link-block w-inline-block">
                    <div className="footer-link">info@eventsitters.nz</div>
                  </a>
                </div>
                <div className="footer-link-label-wrapper">
                  <div className="p-medium">Phone:</div>
                  <a href="tel:+642108279718" className="footer-link-block w-inline-block">
                    <div className="footer-link">021 082 79 718</div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-layout-cell">
            <div className="footer-column">
              <Link href="/" className="footer-link-block w-inline-block"><div className="footer-link">Our Services</div></Link>
              <Link href="/about-us" className="footer-link-block w-inline-block"><div className="footer-link">About Us</div></Link>
              <Link href="/packages" className="footer-link-block w-inline-block"><div className="footer-link">Packages</div></Link>
              <Link href="/contact-us" className="footer-link-block w-inline-block"><div className="footer-link">Contact Us</div></Link>
            </div>
          </div>

          <div className="w-layout-cell">
            <div className="footer-column">
              <a href="https://www.instagram.com/eventsittershb" target="_blank" rel="noreferrer" className="footer-link-block w-inline-block">
                <div className="form-icon w-embed">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.8003 0H7.19981C3.22983 0 0 3.22998 0 7.20013V16.7999C0 20.77 3.22983 24 7.19981 24H16.7991C20.769 24 23.9989 20.77 23.9989 16.7999L24 7.20013C24 3.22998 20.7702 0 16.8003 0ZM21.5994 16.8011C21.5994 19.4483 19.4462 21.6016 16.7991 21.6016L7.19981 21.6005C4.55268 21.6005 2.39946 19.4472 2.39946 16.7999L2.40058 7.20021C2.40058 4.55296 4.55378 2.39964 7.20093 2.39964H16.8002C19.4473 2.39964 21.6005 4.55294 21.6005 7.20021L21.5994 16.8011ZM12.0002 6.00083C8.69161 6.00083 6.0008 8.69297 6.0008 12.0005C6.0008 15.3092 8.69281 18.0001 12.0002 18.0001C15.3087 18.0001 17.9995 15.308 17.9995 12.0005C17.9995 8.69176 15.3087 6.00083 12.0002 6.00083ZM12.0002 15.6005C10.0146 15.6005 8.40026 13.9861 8.40026 12.0005C8.40026 10.0148 10.0146 8.40039 12.0002 8.40039C13.9857 8.40039 15.6001 10.0148 15.6001 12.0005C15.6001 13.9861 13.9857 15.6005 12.0002 15.6005ZM18.8525 5.14786C19.0673 5.37624 19.2001 5.68787 19.2001 6.00061C19.2001 6.31224 19.0673 6.62501 18.8525 6.85224C18.6241 7.06825 18.3113 7.19987 17.9997 7.19987C17.687 7.19987 17.3754 7.06712 17.1481 6.85224C16.9321 6.62387 16.8005 6.31224 16.8005 6.00061C16.8005 5.68787 16.9322 5.37622 17.1481 5.14899C17.6037 4.7046 18.3957 4.70459 18.8525 5.14786Z" fill="currentColor"/>
</svg>
                </div>
                <div className="footer-link">Instagram</div>
              </a>
              <a href="https://www.facebook.com/eventsittershb" target="_blank" rel="noreferrer" className="footer-link-block w-inline-block">
                <div className="form-icon w-embed">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.80015 13.2172H9.21171V23.1452C9.21171 23.3412 9.37053 23.5 9.56654 23.5H13.6554C13.8514 23.5 14.0103 23.3412 14.0103 23.1452V13.264H16.7825C16.9628 13.264 17.1145 13.1287 17.135 12.9497L17.5561 9.29467C17.5677 9.19411 17.5358 9.09341 17.4685 9.01797C17.4012 8.94246 17.3048 8.89924 17.2037 8.89924H14.0104V6.60812C14.0104 5.91746 14.3823 5.56723 15.1158 5.56723C15.2203 5.56723 17.2037 5.56723 17.2037 5.56723C17.3997 5.56723 17.5585 5.40834 17.5585 5.21239V1.85746C17.5585 1.66145 17.3997 1.50263 17.2037 1.50263H14.3263C14.306 1.50163 14.2609 1.5 14.1945 1.5C13.6952 1.5 11.9599 1.59801 10.589 2.8591C9.0702 4.2566 9.28133 5.92988 9.33178 6.21999V8.89917H6.80015C6.60414 8.89917 6.44531 9.05799 6.44531 9.25401V12.8623C6.44531 13.0583 6.60414 13.2172 6.80015 13.2172Z" fill="currentColor"/>
</svg>
                </div>
                <div className="footer-link">Facebook</div>
              </a>
            </div>
          </div>
        </div>

        <div className="confetti-footer-yellow" />
        <div className="div-block-4">
          <div className="footer-disclaimer">© {new Date().getFullYear()} Event Sitters</div>
          <a href="https://www.rcostudio.nz" target="_blank" rel="noopener noreferrer" className="footer-disclaimer footer-credit-link">
            Made by R&amp;Co.
          </a>
        </div>
        <div className="confetti-footer-red" />
      </div>
    </section>
  );
}
