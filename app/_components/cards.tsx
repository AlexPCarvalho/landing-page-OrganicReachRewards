"use client";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="bg-[#30503A] text-center px-4 md:px-10 xl:px-20 2xl:px-[300px] py-10 md:py-16 xl:py-20 2xl:py-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-[20px]">
      {[
        {
          img: "/selling.png",
          title: "Selling more to loyal customers and attracting new buyers.",
          text: "A strong community of returning customers is a testament to the quality of your products or services. Recognizing their loyalty not only deepens their connection with your brand but also transforms them into dedicated supporters.",
        },
        {
          img: "/Loyalty.png",
          title: "Loyalty strengthens business credibility.",
          text: "A consistent flow of repeat customers is clear evidence that your brand inspires trust and delivers real value. Fostering these lasting relationships ensures sustainable growth and long-term success.",
        },
        {
          img: "/Engagement.png",
          title: "Loyalty strengthens business credibility.",
          text: "A consistent flow of repeat customers is clear evidence that your brand inspires trust and delivers real value. Fostering these lasting relationships ensures sustainable growth and long-term success.",
        },
      ].map((card, index) => (
        <div key={index} className="bg-white p-6 md:p-[34px]">
          <div>
            <Image
              src={card.img}
              width={400}
              height={400}
              alt={card.title}
              className="w-full h-auto"
            />
          </div>
          <div className="flex flex-col justify-center text-center">
            <h2 className="font-bold text-[#689E54] text-left py-6 md:py-[26px] text-xl md:text-2xl xl:text-[24px]">
              {card.title}
            </h2>
            <p className="text-[#689E54] text-left font-light text-base md:text-lg xl:text-[20px]">
              {card.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
