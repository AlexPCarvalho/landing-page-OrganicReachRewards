"use client";
import { useState } from "react";

const faqItems = [
  {
    question: "What is OrganicReach?",
    answer:
      "OrganicReach is a micro SaaS that helps businesses grow naturally by rewarding customers for social media engagement.",
  },
  {
    question: "How does it work?",
    answer:
      "Customers earn points by posting Instagram Stories, Reels, or Posts tagging the business location. Once they reach the required amount, they receive rewards.",
  },
  {
    question: "Why is this better than traditional loyalty programs?",
    answer:
      "Unlike physical cards or apps, OrganicReach integrates seamlessly with social media, requiring no extra downloads or manual tracking.",
  },
  {
    question: "How much does OrganicReach cost?",
    answer:
      "OrganicReach offers a premium plan at $10/month, including advanced features and business customization options.",
  },
  {
    question: "Which businesses can use OrganicReach?",
    answer:
      "Any business that benefits from customer engagement, such as cafes, gyms, salons, and restaurants, can integrate OrganicReach to grow organically.",
  },
];

const FaqItems = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="py-16 rounded-3xl px-6 md:px-12 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Frequently asked questions
      </h2>
      <p className="text-center mb-12 max-w-2xl mx-auto text-gray-600">
       We have given answars to the most popular questions below
      </p>

      <div className="max-w-3xl mx-auto divide-y">
        {faqItems.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full text-left font-medium text-lg"
            >
              {faq.question}
              <div
                className={`flex items-center justify-center h-8 w-8 rounded-full bg-yellow-300 transition-transform ${
                  expandedFaq === index ? "rotate-45" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
            {expandedFaq === index && (
              <div className="mt-2 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqItems;
