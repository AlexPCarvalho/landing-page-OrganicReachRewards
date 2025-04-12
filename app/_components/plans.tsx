"use client";

import React, { useState } from "react";
import Link from "next/link";

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
    <div className="pb-[100] px-[300] ">
      <h2 className="text-center text-[80px] font-bold pb-[60] text-[#63783F]">
        Explore Plans
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-[20px]">
        {plans.map((plan, index) => (
          <Link
            key={index}
            href={plan.contactLink}
            className={` bg-[#30503A]  px-[36] py-[58] flex flex-col justify-between transition-transform duration-300 ${
              hoveredIndex === index
                ? "transform scale-105 shadow-2xl"
                : "shadow-lg"
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <h3 className="text-[40px] pb-[20] font-bold text-white">{plan.name}</h3>
              <p className="text-[20px] pb-[95] font-semibold text-white">
                {plan.description}
              </p>
              <ul className=" text-white  text-[20px]">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-[20] pb-[18] ">
                    <img src="plans.svg" alt="" className=" " /> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-[95] text-white text-[60px] font-bold">
              {plan.price === "Contact us" ? ( 
                <span className="font-bold bg-[#FBFFF6] py-[12] px-[24] text-[24px] text-[#30503A]">
                  {plan.price}
                </span>
              ) : (
                <>
                {plan.price}
              <p className="text-white font-light text-[16px]">per month</p>
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
