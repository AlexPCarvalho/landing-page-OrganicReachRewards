"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';


const plans = [
  {
    name: "Starter",
    description: "For small businesses that want to grow organically",
    features: [
      "Up to 300 mentions/month",
      "Configure your own campaigns",
      "Access to metrics dashboard",
      "Free per 6 months",
    ],
    price: "$ 10",
    contactLink: "/10",
  },
  {
    name: "Pro",
    description: "For medium/large businesses that want to grow organically",
    features: [
      "Everything in Starter, plus",
      "Up to 1,000 mentions/month",
      "Anti-fraud system",
      "Multiple users",
      "Custom metrics",
      "Tailored reports in your inbox",
    ],
    price: "$ 30",
    contactLink: "/30",
  },
  {
    name: "Enterprise",
    description: "For businesses that rely on organic",
    features: [
      "Everything in Pro",
      "Unlimited mentions",
      "Real-time auth system",
      "Webhooks and API access",
      "Connects with API to generate rewards in your loyalty program",
    ],
    price: "Contact us",
    contactLink: "/contact",
  },
];

const Plans = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="pb-20 md:pb-[100px] px-4 md:px-10 xl:px-[300px]">
      <h2 className="text-center text-3xl md:text-5xl xl:text-[80px] font-bold pb-10 md:pb-[60px] text-[#63783F]">
        Explore Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-[20px]">
        {plans.map((plan, index) => (
          <Link
            key={index}
            href={plan.contactLink}
            className={`bg-[#30503A] px-6 md:px-[36px] py-12 md:py-[58px] flex flex-col justify-between transition-transform duration-300 ${
              hoveredIndex === index
                ? "transform scale-105 shadow-2xl"
                : "shadow-lg"
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <h3 className="text-2xl md:text-3xl xl:text-[40px] pb-6 md:pb-[20px] font-bold text-white">
                {plan.name}
              </h3>
              <p className="text-base md:text-lg xl:text-[20px] pb-10 md:pb-[95px] font-semibold text-white">
                {plan.description}
              </p>
              <ul className="text-white text-base md:text-lg xl:text-[20px]">
  {plan.features.map((feature, i) => (
    <li key={i} className="flex gap-4 md:gap-[20px] pb-4 md:pb-[18px]">
      <Image 
        src="/plans.svg" 
        alt="Ícone do plano" 
        width={20} 
        height={20} 
        className="w-5 md:w-auto" 
      />
      {feature}
    </li>
  ))}
</ul>
            </div>
            <div className="mt-10 md:mt-[95px] text-white text-4xl md:text-5xl xl:text-[60px] font-bold">
              {plan.price === "Contact us" ? (
                <span className="font-bold bg-[#FBFFF6] py-2 md:py-[12px] px-4 md:px-[24px] text-base md:text-[24px] text-[#30503A]">
                  {plan.price}
                </span>
              ) : (
                <>
                  {plan.price}
                  <p className="text-white font-light text-sm md:text-[16px]">
                    per month
                  </p>
                </>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Plans;