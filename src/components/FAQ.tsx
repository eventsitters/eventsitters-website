"use client";

import { useState, useRef, useLayoutEffect } from "react";

const faqs = [
  {
    q: "Do you provide kids' entertainment at weddings?",
    a: "Yes, weddings are one of our most popular bookings. We set up a dedicated space that keeps children happy and engaged during both the ceremony and the reception, so parents can actually be present. Activities are tailored to the age range of the kids attending and the tone of the day.",
  },
  {
    q: "What kinds of events do you work with?",
    a: "We work across weddings, birthday parties, corporate functions, festivals, markets, and community events. Whether it's an intimate gathering or a large public event, we tailor the setup to suit the venue, the occasion, and the children attending.",
  },
  {
    q: "What areas in Hawke's Bay do you service?",
    a: "We're based in Hawke's Bay and regularly work across Napier, Hastings, Havelock North, and the wider region. We're happy to travel to your venue. Just get in touch and we can confirm coverage.",
  },
  {
    q: "How many children can you accommodate?",
    a: "We can manage both small and large groups. Since kids tend to come and go throughout the event, they usually won't all be in the space at once. Capacity depends mostly on the space available. We'll work with what you've got and make sure there's plenty of room to play.",
  },
  {
    q: "Do parents need to stay with their children?",
    a: "No. Parents and guardians are welcome to enjoy the event. We're there to keep kids entertained and happy, though parents remain responsible for their children's supervision and care throughout.",
  },
  {
    q: "How far in advance should I book?",
    a: "As early as you can. Summer weekends and public holidays fill up fast. A 20% deposit locks in your date, with the remaining balance due 7 days before your event.",
  },
  {
    q: "Do you have public liability insurance?",
    a: "Yes. We hold public liability insurance, so you and your venue can have peace of mind.",
  },
  {
    q: "Can you set up outdoors?",
    a: "Absolutely. We're set up for both indoor and outdoor events and adapt our activities to suit the space. For outdoor events, we also offer a gazebo option for shade and shelter.",
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

type FaqItem = { q: string; a: string };

export default function FAQ({
  questions = faqs,
  title = "Good Questions. Here Are Some Answers.",
  confetti = true,
  background = "pale-blue",
}: {
  questions?: FaqItem[];
  title?: string;
  confetti?: boolean;
  background?: "pale-blue" | "white";
}) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={`section${background === "pale-blue" ? " pale-blue" : ""}`}>
      <div className="container faq">
        <div className="faq-wrapper">
          <h2 className="headline-small">{title}</h2>
          <div className="questions-wrapper">
            {questions.map((item, i) => (
              <AccordionItem
                key={i}
                item={item}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
                showSeparator={i < questions.length - 1}
              />
            ))}
          </div>
        </div>
        {confetti && (
          <>
            <div className="confetti-faq-turquoise" />
            <div className="confetti-faq-yellow" />
          </>
        )}
      </div>
    </section>
  );
}
