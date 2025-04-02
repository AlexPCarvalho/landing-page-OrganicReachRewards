"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});
const Content = () => {
  return (
    <div className="container mx-auto px-4 py-16 ">
      <div
        className={`${poppins.className} sm:text-6xl md:text-[100px] tracking-[-6] text-lime-900 font-bold  pt-40 sm:pt-40 sm:pl-20`}
      >
        <p className="pl-20">Join the team </p>
        <p className="pl-100 pt-5">be a protagonist of innovation</p>
      </div>
      <div>
        <p className="text-gray-600 pt-10 text-2xl text-center pr-90 pl-90">
          If you are passionate about innovation, growth and real impact, we
          have a place for you! We are constantly looking for creative,
          ambitious people who are committed to transforming the way companies
          connect with their customers. At Organic Reach Rewards, you will have
          the chance to work on projects that make a difference in the daily
          lives of people and companies. If you feel motivated to contribute to
          innovative solutions and want to grow alongside a united and focused
          team, come be part of this journey with us. Here, you will find a
          dynamic and challenging environment, where your opinion will be heard
          and your impact will be recognized.
        </p>
      </div>

      <div className="flex flex-col  pb-12 items-center mb-40 gap-4 mt-10">
        <Link
          href="/jobs"
          className="font-bold  bg-lime-700 px-10 py-4 rounded-2xl text-[20px] text-white"
        >
          See open roles
        </Link>
      </div>
      


    </div>
  );
};

export default Content;
