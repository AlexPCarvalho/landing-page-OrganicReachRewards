"use client";
import { useState } from "react";
import { CircleArrowDown } from "lucide-react";

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
      "No. They simply use Instagram—which they already have—and receive digital 'stamps' for each qualifying post or mention, eliminating the need for additional software or physical cards.",
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
    <div className="px-4 md:px-10 xl:px-[300px] pt-6 md:pt-10 xl:pt-12 2xl:pt-14 pb-6 md:pb-10 xl:pb-12 2xl:pb-14">
      <div className="pb-4 md:pb-6">
        <h1 className="text-2xl md:text-3xl xl:text-5xl mb-0 font-bold text-[#63783F] text-center">
          Frequently
        </h1>
        <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold text-[#63783F] text-center">
          Asked Questions
        </h1>
      </div>
      <p className="text-center text-sm md:text-base xl:text-lg text-[#688F59] pb-6 md:pb-10 mx-auto max-w-2xl">
        We have answered the most popular questions below.
      </p>
      <div className="m-auto">
        {faqItems.map((faq, index) => (
          <div key={index} className="py-2 md:py-4">
            <button
              onClick={() => toggleFaq(index)}
              className="flex bg-[#99CE85] px-2 md:px-4 xl:px-8 py-2 md:py-4 xl:py-6 justify-between items-center w-full text-left font-bold text-base md:text-lg xl:text-xl text-[#30503A]"
            >
              {faq.question}
              <div className="flex-1 border-t px-2 md:px-4 xl:px-6 border-[#30503A] mx-2"></div>
              <div
                className={`flex items-center justify-center h-6 w-6 md:h-8 md:w-8 rounded-full transition-transform duration-300 ${
                  expandedFaq === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <CircleArrowDown className="text-[#30503A] w-4 md:w-5 xl:w-6 h-4 md:h-5 xl:h-6" />
              </div>
            </button>
            <div
              className={`mt-1 text-gray-700 text-sm leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${
                expandedFaq === index
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="pr-2 text-white bg-[#30503A] px-2 md:px-4 xl:px-8 py-2 md:py-4 xl:py-6 font-light text-sm md:text-lg xl:text-xl">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqItems;
