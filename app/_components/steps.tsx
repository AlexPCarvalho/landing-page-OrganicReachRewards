"use client";

import Image from "next/image";
import { useState, useEffect, useRef, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

const Steps = () => {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 2;
  const carouselRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  // Auto-rotate slides every 10 seconds (increased duration)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setActiveSlide(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartXRef.current - touchEndXRef.current;

    // If swipe distance is significant enough (more than 50px)
    if (Math.abs(touchDiff) > 50) {
      if (touchDiff > 0) {
        // Swipe left - go to next slide
        nextSlide();
      } else {
        // Swipe right - go to previous slide
        prevSlide();
      }
    }

    // Reset values
    touchStartXRef.current = 0;
    touchEndXRef.current = 0;
  };

  return (
    <div className="relative bg-white px-4 md:px-10 xl:px-[300px] 2xl:px-[300px] py-10 md:py-20 xl:py-20 2xl:py-24">
      {/* Navigation Arrows - visible only on desktop */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute top-1/2 left-4 md:left-6 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 shadow-md z-10"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#30503A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute top-1/2 right-4 md:right-6 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 shadow-md z-10"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#30503A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
      <div
        ref={carouselRef}
        className="relative overflow-hidden touch-pan-y min-h-[800px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slide 1 */}
        <div
          className={`transition-opacity duration-1000 ease-in-out absolute w-full ${
            activeSlide === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-10 xl:gap-0">
            <div>
              <div>
                <ul className="text-[#30503A] pb-10 md:pb-[40px] gap-4 md:gap-[32px] font-bold text-3xl md:text-5xl xl:text-[60px] flex items-center">
                  <div className="w-[54px] h-[54px] flex items-center justify-center bg-[#30503A] text-[#fff] rounded-full text-[33px] font-bold shrink-0">
                    1
                  </div>
                  <li className="max-w-full xl:max-w-[598px]">
                    <p className="mb-[-10px] md:mb-[0px]">
                      {t("steps.loginWith")}
                    </p>
                    <p>{t("steps.instagram")}</p>
                  </li>
                </ul>

                <ul className="text-[#30503A] pb-10 md:pb-[40px] gap-4 md:gap-[32px] font-bold text-3xl md:text-5xl xl:text-[60px] flex items-center">
                  <div className="w-[54px] h-[54px] flex items-center justify-center bg-[#30503A] text-[#fff] rounded-full text-[33px] font-bold shrink-0">
                    2
                  </div>
                  <li className="max-w-full xl:max-w-[598px]">
                    <p className="mb-[-10px] md:mb-[-15px]">
                      {t("steps.define")}
                    </p>
                    <p>{t("steps.campaigns")}</p>
                  </li>
                </ul>

                <ul className="text-[#30503A] pb-8 md:pb-[30px] gap-4 md:gap-[32px] font-bold text-3xl md:text-5xl xl:text-[60px] flex items-center">
                  <div className="w-[54px] h-[54px] flex items-center justify-center bg-[#30503A] text-[#fff] rounded-full text-[33px] font-bold shrink-0">
                    3
                  </div>
                  <li className="max-w-full xl:max-w-[598px]">
                    <p>{t("steps.setLive")}</p>
                  </li>
                </ul>

                <p className="max-w-full xl:max-w-[512px] text-base md:text-lg xl:text-[20px] pb-10 md:pb-[50px] text-[#689E54]">
                  {t("steps.description1")}
                </p>
              </div>
            </div>

            <div>
              <Image
                src="/steps1.png"
                alt="steps"
                width={566}
                height={643}
                className="h-auto xl:h-full"
              />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className={`transition-opacity duration-1000 ease-in-out absolute w-full ${
            activeSlide === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-10 xl:gap-0">
            <div>
              <div>
                <ul className="text-[#30503A] pb-10 md:pb-[40px] gap-4 md:gap-[32px] font-bold text-3xl md:text-5xl xl:text-[60px] flex items-center">
                  <div className="w-[54px] h-[54px] flex items-center justify-center bg-[#30503A] text-[#fff] rounded-full text-[33px] font-bold shrink-0">
                    1
                  </div>
                  <li className="max-w-full xl:max-w-[598px]">
                    <p className="mb-[-10px] md:mb-[0px]">
                      {t("steps.mention")}
                    </p>
                    <p>{t("steps.brand")}</p>
                  </li>
                </ul>

                <ul className="text-[#30503A] pb-10 md:pb-[40px] gap-4 md:gap-[32px] font-bold text-3xl md:text-5xl xl:text-[60px] flex items-center">
                  <div className="w-[54px] h-[54px] inline-flex items-center justify-center bg-[#30503A] text-[#fff] rounded-full text-[33px] font-bold shrink-0 self-start mt-4">
                    2
                  </div>
                  <li className="max-w-full xl:max-w-[598px]">
                    <p className="mb-[-10px] md:mb-[-15px]">
                      {t("steps.earnPoints")}
                    </p>
                  </li>
                </ul>

                <ul className="text-[#30503A] pb-8 md:pb-[30px] gap-4 md:gap-[32px] font-bold text-3xl md:text-5xl xl:text-[60px] flex items-center">
                  <div className="w-[54px] h-[54px] flex items-center justify-center bg-[#30503A] text-[#fff] rounded-full text-[33px] font-bold shrink-0">
                    3
                  </div>
                  <li className="max-w-full xl:max-w-[598px]">
                    <p className="mb-[-10px] md:mb-[0px]">
                      {t("steps.reedem")}
                    </p>
                    <p>{t("steps.rewards")}</p>
                  </li>
                </ul>

                <p className="max-w-full xl:max-w-[512px] text-base md:text-lg xl:text-[20px] pb-10 md:pb-[50px] text-[#689E54]">
                  {t("steps.description2")}
                </p>
              </div>
            </div>

            <div className="">
              <Image
                src="/steps2.png"
                alt="steps"
                width={566}
                height={643}
                className="h-auto xl:h-full"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-200 ${
              activeSlide === index
                ? "bg-[#30503A] w-8"
                : "bg-[#689E54] bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Steps;
