"use client";
import { useState } from "react";

const faqItems = [
  {
    question: "What is Organic Reach Rewards?",
    answer:
      "Organic Reach Rewards is a micro SaaS that helps businesses grow naturally by rewarding customers for social media engagement.",
  },
  {
    question: "How does it work?",
    answer:
      "Customers earn points by posting Instagram Stories, Reels, or Posts tagging the business location. Once they reach the required amount, they receive rewards.",
  },
  {
    question: "Why is this better than traditional loyalty programs?",
    answer:
      "Unlike physical cards or apps, Organic Reach Rewards integrates seamlessly with social media, requiring no extra downloads or manual tracking.",
  },
  {
    question: "How much does Organic Reach Rewards cost?",
    answer:
      "Organic Reach Rewards offers a premium plan at $10/month, including advanced features and business customization options.",
  },
  {
    question: "Which businesses can use Organic Reach Rewards?",
    answer:
      "Any business that benefits from customer engagement, such as cafes, gyms, salons, and restaurants, can integrate Organic Reach Rewards to grow organically.",
  },
];

const FaqItems = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="py-12 px-4 sm:px-6 md:px-12 rounded-3xl bg-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-center mb-8 max-w-xl mx-auto text-gray-600">
        We have answered the most popular questions below.
      </p>

      <div className="max-w-3xl mx-auto divide-y">
        {faqItems.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full text-left font-medium text-base sm:text-lg py-3"
            >
              {faq.question}
              <div
                className={`flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 transition-transform duration-300 ${
                  expandedFaq === index ? "rotate-45" : "rotate-0"
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
            <div
              className={`mt-2 text-gray-600 transition-all duration-300 ${
                expandedFaq === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqItems;
