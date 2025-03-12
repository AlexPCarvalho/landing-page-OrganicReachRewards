"use client";

import Image from "next/image";
import { ArrowDownLeft, Facebook, Instagram } from "lucide-react";
import DashboardSummary from "./dashboard-summary";

const Content = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl sm:text-8xl font-serif mb-6 text-center sm:text-left">
        Organic Reach <br /> Rewards
      </h1>

      <div className="mt-16 flex justify-end pb-10">
        <div className="flex-col">
          <div className="flex items-center mb-4">
            <div>
              <p className="text-2xl">
                Organic Reach Rewards connects brands and customers through
                social media.
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
            <div className="ml-4 ">
              <ArrowDownLeft />
            </div>
          </div>
        </div>
      </div>

      <DashboardSummary />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 md:px-12 py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
          Selling more to loyal customers costs less than attracting new buyers.
        </h2>
        <p className="text-gray-600 text-center md:text-left">
          A strong base of recurring customers is a clear sign that your
          products or services are winning them over.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-3xl px-4 sm:px-6 md:px-12 py-12 bg-gray-100">
        <div className="flex justify-center">
          <Image
            src="/loyalty.png"
            width={400}
            height={400}
            alt="Loyalty"
            className="rounded-3xl w-full max-w-[400px] h-auto"
          />
        </div>
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Loyalty strengthens business credibility.
          </h2>
          <p className="text-gray-600">
            Having a base of returning customers shows that your brand is
            trusted and valued.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 md:px-12 py-12">
        <div className="flex flex-col justify-center text-center md:text-left order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Engagement drives real results.
          </h2>
          <p className="text-gray-600">
            Loyal customers not only return but also become promoters of your
            brand, sharing positive reviews and boosting your reach.
          </p>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <Image
            src="/engagement.png"
            width={400}
            height={400}
            alt="Engagement"
            className="rounded-3xl w-full max-w-[400px] h-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default Content;
