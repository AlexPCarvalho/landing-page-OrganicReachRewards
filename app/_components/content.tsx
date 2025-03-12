"use client";

import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import DashboardSummary from "./dashboard-summary";

const Content = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-6xl font-serif mb-4">OrganicReach</h1>

      <div className="mt-16 flex justify-end pb-10">
        <div className="flex-col">
          <div className="flex items-center mb-4">
            <div>
              <p className="font-medium">
                OrganicReach connects brands and customers through social media.
              </p>
              <p className="text-gray-600">
                By tagging the location in Instagram or Facebook posts,
                customers earn points and unlock rewards.
              </p>
            </div>
          </div>
          <div className="flex mt-4  justify-end">
            <div className="w-12 h-12 rounded-full bg-purple-200 -mr-2 items-center flex justify-center">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-200 items-center flex justify-center">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            </div>
            <div className="ml-4 text-4xl">↗</div>
          </div>
        </div>
      </div>

      <DashboardSummary />

      <section className=" grid md:grid-cols-2 gap-8 px-6 md:px-12 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
          Selling more to loyal customers costs less than attracting new buyers.
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          A strong base of recurring customers is a clear sign that your
          products or services are winning them over.
        </p>
      </section>

      <section className="grid md:grid-cols-2 rounded-3xl md:px-12 py-12 bg-gray-100 ">
        <div className="flex justify-center items-center">
          <Image
            src="/loyalty.png"
            width={400}
            height={400}
            alt="Loyalty"
            className="rounded-3xl "
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">
            Loyalty strengthens business credibility.
          </h2>
          <p className="text-gray-600 mb-6">
            Having a base of returning customers shows that your brand is
            trusted and valued.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 px-6 md:px-12 ">
        <div className="flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-4">
            Engagement drives real results.
          </h2>
          <p className="text-gray-600 mb-6">
            Loyal customers not only return but also become promoters of your
            brand, sharing positive reviews and boosting your reach.
          </p>
        </div>
        <div className="flex justify-center items-center order-1 md:order-2  rounded-3xl p-8">
          <div className="flex justify-center items-center">
            <Image
              src="/engagement.png"
              width={400}
              height={400}
              alt="Loyalty"
              className="rounded-3xl "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
