"use client";
import { useState } from "react";
import { CircleArrowDown } from "lucide-react";
import { useI18n } from "../i18n";

const FaqItems = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const { t } = useI18n();

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: t("faq.questions0"),
      answer: t("faq.answers0"),
    },
    {
      question: t("faq.questions1"),
      answer: t("faq.answers1"),
    },
    {
      question: t("faq.questions2"),
      answer: t("faq.answers2"),
    },
    {
      question: t("faq.questions3"),
      answer: t("faq.answers3"),
    },
    {
      question: t("faq.questions4"),
      answer: t("faq.answers4"),
    },
    {
      question: t("faq.questions5"),
      answer: t("faq.answers5"),
    },
    {
      question: t("faq.questions6"),
      answer: t("faq.answers6"),
    },
    {
      question: t("faq.questions7"),
      answer: t("faq.answers7"),
    },
  ];

  return (
    <div className="px-4 md:px-10  pt-6 md:pt-10 xl:pt-12 2xl:pt-14 pb-6 md:pb-10 xl:pb-12 2xl:pb-14">
      <div className="w-full max-w-screen-xl px-4 sm:px-6 md:px-10 lg:px-[100px] xl:px-[220px] 2xl:px-[100px] 3xl:px-[500px] 4xl:px-[600px] mx-auto">
        <div className="pb-4 md:pb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl 2xl:text-7xl mb-0 font-bold text-[#63783F] text-center">
            {t("faq.title")}
          </h1>

        </div>
        <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-3xl  text-[#688F59] pb-6 md:pb-10 mx-auto max-w-2xl">
          {t("faq.subtitle")}
        </p>
        <div className="m-auto">
          {faqItems.map((faq, index) => (
            <div key={index} className="py-2 md:py-4">
              <button
                onClick={() => toggleFaq(index)}
                className="flex bg-[#99CE85] px-2 xl:px-8 2xl:px-8 py-2 xl:py-4 2xl:py-6 justify-between items-center w-full text-left font-bold text-base 2xl:text-xl xl:text-[16px] text-[#30503A]"
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
                <p className="pr-2 text-white bg-[#30503A] px-2 md:px-4 xl:px-8 py-2 md:py-4 xl:py-6 font-light text-sm 2xl:text-xl xl:text-[16px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqItems;
