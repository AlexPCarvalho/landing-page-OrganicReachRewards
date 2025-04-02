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
    <div className="py-16 mt-5 px-6 md:px-12 lg:px-1">
      <h2 className="text-center text-4xl font-bold text-lime-900">
        Explore Plans
      </h2>
      <div className="mt-15 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-20">
        {plans.map((plan, index) => (
          <Link
            key={index}
            href={plan.contactLink}
            className={` bg-gray-100 rounded-lg p-6 flex flex-col justify-between transition-transform duration-300 ${
              hoveredIndex === index
                ? "transform scale-105 shadow-2xl"
                : "shadow-lg"
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-5 text-2xl font-bold text-gray-600">
                {plan.description}
              </p>
              <ul className="mt-10 space-y-2 text-gray-700 text-2xl">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-lime-600 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-50 text-lime-900 text-3xl font-bold">
              {plan.price}
              <p className="text-gray-700 font-medium text-[20px]">per month</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Plans;
