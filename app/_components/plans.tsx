"use client";

import React from "react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description: "For small businesses that want to grow organically",
    features: [
      "Up to 500 people/month",
      "Configure your own rules for rewards",
      "Access to metrics dashboard",
    ],
    price: "Free for the first 6 months, then: $10",
  },
  {
    name: "Pro",
    description: "For medium/large businesses that want to grow organically",
    features: [
      "Everything in Starter, plus",
      "Up to 10,000 people/month",
      "Anti-fraud system",
      "Custom metrics",
      "Tailored reports in your inbox",
    ],
    price: "Free for the first 6 months, then: $30",
  },
  {
    name: "Enterprise",
    description: "For businesses that rely on organic",
    features: [
      "Everything in Pro",
      "Unlimited people",
      "Real-time auth system",
      "Connects with API to generate rewards in your loyalty program",
    ],
    price: "Contact us",
    contactLink: "/contact", // Adicionando link para a página de contato
  },
];

const Plans = () => {
  return (
    <div className=" py-16 px-6 md:px-12 lg:px-24">
      <h2 className="text-center text-3xl font-bold text-lime-900">
        Explore Plans
      </h2>
      <div className="mt-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className=" bg-gray-100 shadow-lg rounded-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className=" mt-2 font-semibold">{plan.description}</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-lime-600 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 text-gray-900 font-bold">
              {plan.contactLink ? (
                <Link
                  href={plan.contactLink}
                  className="text-lime-900 hover:underline"
                >
                  {plan.price}
                </Link>
              ) : (
                plan.price
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
