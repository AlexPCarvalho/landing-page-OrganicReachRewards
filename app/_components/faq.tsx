"use client";
import { useState } from "react";

const faqItems = [
  {
    question: "What is Organic Reach Rewards?",
    answer:
      "Organic Reach Rewards is a platform that empowers businesses to grow naturally by rewarding customers for social media engagement. It tracks Instagram posts, Stories, Reels, and comment mentions to offer valuable insights without requiring extra apps or physical punch cards.",
  },
  {
    question: "How does it work?",
    answer:
      "Customers tag your business on Instagram, automatically earning points that count toward a threshold you define; once they reach it, they unlock rewards such as discounts, free items, or other perks you choose.",
  },
  {
    question: "Do customers need to download a separate app?",
    answer:
      "No. They simply use Instagram—which they already have—and receive digital “stamps” for each qualifying post or mention, eliminating the need for additional software or physical cards.",
  },
  {
    question: "Which businesses can use it?",
    answer:
      "Any business looking to boost engagement—cafés, gyms, salons, restaurants, and more—can implement Organic Reach Rewards to foster loyalty and encourage customers to share their experiences on social media.",
  },
  {
    question: "What kind of rewards can I offer?",
    answer:
      "You have full control over the rewards, from discounts and freebies to exclusive offers or VIP perks; the beauty of Organic Reach Rewards is its flexibility in fitting your brand’s unique goals.",
  },
  {
    question: "Is it easy to set up and manage?",
    answer:
      "Absolutely. Once you establish how many tags count toward a reward, our system runs in the background, automatically tracking qualified mentions and delivering real-time engagement insights for quick, informed decisions.",
  },
  {
    question: "How is customer data handled?",
    answer:
      "We only gather the information required to confirm eligible posts, respecting user privacy with a strict data deletion policy and compliance with all relevant data protection laws.",
  },
];

const FaqItems = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="py-12 px-4 sm:px-6 md:px-12 rounded-3xl bg-gray-100 pb-">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-xl mb-8 max-w-xl mx-auto text-gray-600">
        We have answered the most popular questions below.
      </p>

      <div className="max-w-3xl mx-auto divide-y">
        {faqItems.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full  text-left font-medium text-2xl  py-3"
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
              className={`mt-2 text-gray-600 text-xl transition-all duration-300 ${
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
