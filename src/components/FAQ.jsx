// src/components/FAQ.jsx
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState([0]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What exactly is Nuurtec?",
      answer:
        "Nuurtec is the first ecosystem redesigning how solar trade happens in Africa. Verified manufacturers, serious distributors, and soon installers all connect inside one trusted network, where deals are faster, safer and built to scale."
    },
    {
      question: "Who can join Nuurtec?",
      answer:
        "Nuurtec empowers every player in the solar value chain: manufacturers, distributors and soon even solar installers. Whether you’re a rising local company or a global industry leader, the ecosystem creates unmatched opportunities to grow stronger."
    },
    {
      question: "How does the matching process work?",
      answer:
        "Manufacturers showcase their products and catalogs inside Nuurtec. When a distributor makes a request, our system scans this pool of verified supply and filters the best options based on capacity, reliability, reviews and track record. From there, Nuurtec delivers the strongest possible match, today powered by our team and soon fully automated in seconds."
    },
    {
      question: "What makes Nuurtec different from others?",
      answer:
        "We’re not a public marketplace full of middlemen. Nuurtec is private, verified and built for trust. Every partner is vetted, every deal is monitored and every connection is designed to deliver growth. This isn’t trading as usual, it’s a new standard for solar."
    },
    {
      question: "How are manufacturers verified?",
      answer:
        "We go far beyond online checks. Certifications, capacity reviews, track record analysis and for select manufacturers, in-person factory inspections to ensure quality at the source. Only those meeting Nuurtec’s standards earn access to the ecosystem."
    },
    {
      question: "Will installers really benefit too?",
      answer:
        "Absolutely. Today we’re matching manufacturers and distributors. But installers are next and upcoming features will give them direct advantages never seen before in the solar sector. For distributors, that means more clients. For installers, it means faster growth with secure supply. The best is yet to come."
    },
    {
      question: "What advantages do distributors get?",
      answer:
        "Distributors gain higher margins through exclusive pricing, access to hundreds of verified manufacturers and first-to-market advantage with new solar solutions. On top of that, they gain visibility and recognition as leading distributors in their countries."
    },
    {
      question: "What advantages do manufacturers get?",
      answer:
        "Manufacturers tap directly into Africa’s fastest-growing solar demand, matched only with serious, pre-qualified buyers. Each deal builds reputation and long-term trust, turning supply into scalable demand and sales into market growth."
    },
    {
      question: "What advantages do installers get?",
      answer:
        "Installers will have verified supply, access to cutting-edge solar technologies, and credibility as part of the Nuurtec ecosystem. Future features will unlock even more, from faster sourcing to direct connections that fuel their business growth."
    },
    {
      question: "How does Nuurtec ensure deals are safe?",
      answer:
        "Once a match is made, Nuurtec oversees everything: contract, transaction, logistics and delivery. Both sides enjoy a transparent, smooth process from start to finish. Every deal is protected. Every partnership is built on trust."
    },
    {
      question: "Do companies interact directly with each other?",
      answer:
        "No wasted weeks chasing unreliable contacts. Nuurtec manages the connection, filters the best options, and delivers clarity. Both sides engage only when it’s the right fit, saving time, money, and risk."
    },
    {
      question: "What about logistics and delivery?",
      answer:
        "Nuurtec doesn’t stop at the match. We handle logistics, shipping and delivery oversight to ensure every distributor receives products seamlessly. From factory floor to final port, Nuurtec is with you."
    },
    {
      question: "What does early access mean?",
      answer:
        "It means being among the first to shape the ecosystem, access exclusive beta features and secure a first-mover advantage in your country before others catch up. Early access is not just entry, it’s influence."
    },
    {
      question: "How much does it cost to join during beta?",
      answer:
        "Nothing. Early access is completely free during beta. This is your chance to grow inside Nuurtec, build reputation and gain privileges before the official Q1 2026 launch."
    },
    {
      question: "Why should I join now?",
      answer:
        "Because first movers define markets. Joining now means more visibility, more opportunities and more influence inside Nuurtec’s ecosystem. Those who wait will end up following the ones already inside."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">FAQ</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Nuurtec and how it works.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </span>
                {openItems.includes(index) ? (
                  <Minus className="w-5 h-5 text-green-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-green-600 flex-shrink-0" />
                )}
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
