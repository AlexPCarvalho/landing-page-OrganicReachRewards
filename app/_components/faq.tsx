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
    <div className="px-4 md:px-10 xl:px-[300px] pt-10 md:pt-20 xl:pt-[120px] pb-10 md:pb-20 xl:pb-[100px]">
      <div className="pb-6 md:pb-[20px]">
        <h1 className="text-3xl md:text-5xl xl:text-[80px] mb-[0px] md:mb-[px] font-bold text-[#63783F] text-center">
          Frequently
        </h1>
        <h1 className="text-3xl md:text-5xl xl:text-[80px] font-bold text-[#63783F] text-center">
          Asked Questions
        </h1>
      </div>

      <p className="text-center text-base md:text-lg xl:text-[20px] text-[#688F59] pb-10 md:pb-[60px] mx-auto max-w-3xl">
        We have answered the most popular questions below.
      </p>

      <div className="m-auto">
        {faqItems.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggleFaq(index)}
              className="flex bg-[#99CE85] px-4 md:px-8 xl:px-[48px] py-4 md:py-6 xl:py-[27.5px] justify-between items-center w-full text-left font-bold text-lg md:text-xl xl:text-[24px] text-[#30503A]"
            >
              {faq.question}
              <div className="flex-1 border-t px-2 md:px-4 xl:px-[24px] border-[#30503A] mx-2"></div>
              <div
                className={`flex items-center justify-center h-8 w-8 rounded-full transition-transform duration-300 ${
                  expandedFaq === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <CircleArrowDown className="text-[#30503A] w-5 md:w-6 xl:w-[28px] h-5 md:h-6 xl:h-[28px]" />
              </div>
            </button>

            <div
              className={`mt-2 text-gray-700 text-base leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${
                expandedFaq === index
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="pr-2 text-white bg-[#30503A] px-4 md:px-8 xl:px-[48px] py-4 md:py-6 xl:py-[27.5px] font-light text-base md:text-xl xl:text-2xl">
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