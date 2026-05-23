"use client";

import { useState, useRef, useLayoutEffect } from "react";

const faqs = [
  {
    q: "How many children can you accommodate?",
    a: "We can manage both small and large groups of children. Since they tend to come and go throughout the event, they usually won't all be in the space at once. The number we can accommodate may depend on the space available, as we want to ensure there's plenty of room for everyone to play comfortably. Rest assured, we have enough staff to handle larger groups – it's really just about the space!",
  },
  {
    q: "What spaces do you need to set up shop?",
    a: "We're happy to work with any space and can adjust our activities to suit what you have available. If it's outdoors, you might want to consider our gazebo option for extra comfort!",
  },
  {
    q: "Do you cater to children younger than 3?",
    a: "Absolutely! If we know younger children will be at the event, we'll happily create a special space just for them. We do kindly ask that parents stay close by to supervise, depending on the child's age and level of independence.",
  },
  {
    q: "Do parents need to stay with their children?",
    a: "We're all about providing fun and engaging entertainment for the kids, and parents or guardians are always welcome to relax nearby! While we're here to ensure everyone has a great time, please remember that parents or guardians are still responsible for supervision and care.",
  },
  {
    q: "How long does the entertainment typically last?",
    a: "We typically get booked for 2–6 hours, depending on the event. If you have specific needs, just let us know – we're more than happy to adjust our services to fit what you're looking for!",
  },
  {
    q: "Is there a deposit required to secure my date?",
    a: "Yes, we do ask for a 20% deposit to lock in your date. Bookings are first come, first served – so be sure to secure your spot early! The remaining balance is due 7 days before your event.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
  showSeparator,
}: {
  item: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
  showSeparator: boolean;
}) {
  const answerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (answerRef.current) {
      setHeight(isOpen ? answerRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div>
      <div
        className={`accordion-item w-dropdown${isOpen ? " is-open" : ""}`}
        onClick={onToggle}
        style={{ height: "auto", overflow: "visible" }}
      >
        <div className="accordion-toggle w-dropdown-toggle">
          <div className="accordion-icon w-icon-dropdown-toggle" />
          <div className="faq-question">{item.q}</div>
        </div>
        {/* Animated answer panel */}
        <div
          style={{
            height: `${height}px`,
            overflow: "hidden",
            transition: "height 420ms cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <div ref={answerRef}>
            <nav className="dropdown-list w-dropdown-list" style={{ display: "block" }}>
              <div className="faq-answer">{item.a}</div>
            </nav>
          </div>
        </div>
      </div>
      {showSeparator && <div className="separator" />}
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section pale-blue">
      <div className="container faq">
        <div className="faq-wrapper">
          <h2 className="headline-small">Frequently Asked Questions</h2>
          <div className="questions-wrapper">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                item={item}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
                showSeparator={i < faqs.length - 1}
              />
            ))}
          </div>
        </div>
        <div className="confetti-faq-turquoise" />
        <div className="confetti-faq-yellow" />
      </div>
    </section>
  );
}
