"use client";
import Image from "next/image";
import { useI18n } from "../i18n";

const Cards = () => {
  const { t } = useI18n();
  return (

    <div className="bg-[#30503A] text-center px-4 md:px-10 py-6 md:py-10 xl:py-12 2xl:py-14">
      <div className="max-w-screen-xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-[100px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {[
          {
            img: "/selling.png",
            title: t('cards.selling.title'),
            text: t('cards.selling.text'),
          },
          {
            img: "/Loyalty.png",
            title: t('cards.loyalty.title'),
            text: t('cards.loyalty.text'),
          },
          {
            img: "/Engagement.png",
            title: t('cards.engagement.title'),
            text: t('cards.engagement.text'),
          },
        ].map((card, index) => (
          <div key={index} className="bg-white p-4 md:p-6">
            <div>
              <Image
                src={card.img}
                width={180}
                height={180}
                alt={card.title}
                className="w-full h-auto max-w-[180px] mx-auto"
              />
            </div>
            <div className="flex flex-col justify-center text-center">
              <h2 className="font-bold text-[#689E54] text-left py-4 md:py-6 text-base md:text-lg xl:text-xl">
                {card.title}
              </h2>
              <p className="text-[#689E54] text-left font-light text-sm md:text-base xl:text-lg">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
