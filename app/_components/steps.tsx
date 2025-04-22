"use client";

import Image from "next/image";
import { useState, useEffect, useRef, SetStateAction } from "react";
import { useI18n } from "../i18n";

const Steps = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 2;
  const carouselRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  // Auto-rotate slides every 10 seconds (increased duration)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 22000);
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

  const { t } = useI18n();

  return (
    <div className="relative bg-white px-4 md:px-10 py-6 md:py-10 xl:py-12 2xl:py-14">
      <div className="max-w-screen-xl mx-auto">
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
          className="relative overflow-hidden touch-pan-y min-h-[900px] md:min-h-[520px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slide 1 */}
          <div
            className={`transition-opacity duration-1000 ease-in-out absolute w-full max-w-screen-xl px-4 sm:px-6 md:px-10 lg:px-[100px] xl:px-[220px] 2xl:px-[100px] 3xl:px-[500px] 4xl:px-[600px] ${
              activeSlide === 0 ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="flex flex-col  xl:flex-row justify-between items-center xl:items-start gap-10 xl:gap-0">
              <div>
                <div>
                  <ul className="text-[#30503A] pb-6 md:pb-8 gap-2 md:gap-4 font-bold text-lg  md:text-2xl xl:text-3xl flex items-center">
                    <div className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] flex items-center justify-center bg-[#30503A] text-[#fff] rounded-full text-base md:text-[30px] font-bold shrink-0">
                      1
                    </div>
                    <li className="max-w-full xl:max-w-[598px]">
                      <p className="mb-[-10px] text-2xl md:text-4xl xl:text-[40px] 2xl:text-[45px] md:mb-[0px]">
                        {t("steps.1.1title")}
                      </p>
                    </li>
                  </ul>

                  <ul className="text-[#30503A] pb-6 md:pb-8 gap-2 md:gap-4 font-bold text-lg md:text-2xl xl:text-3xl flex items-center">
                    <div className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] flex items-center justify-center bg-[#30503A] text-[#fff] rounded-full text-base md:text-[30px] font-bold shrink-0">
                      2
                    </div>
                    <li className="max-w-full xl:max-w-[598px]">
                      <p className="mb-[-10px] text-2xl md:text-4xl xl:text-[40px] 2xl:text-[45px] md:mb-[-15px]">
                        {t("steps.1.2title")}
                      </p>
                    </li>
                  </ul>

                  <ul className="text-[#30503A] pb-4 md:pb-6 gap-2 md:gap-4 font-bold text-lg md:text-2xl xl:text-3xl flex items-center">
                    <div className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] flex items-center justify-center bg-[#30503A] text-[#fff] rounded-full text-base md:text-[30px] font-bold shrink-0">
                      3
                    </div>
                    <li className="max-w-full xl:max-w-[598px]">
                      <p className="text-2xl md:text-4xl xl:text-[40px] 2xl:text-[45px]">
                        {t("steps.1.3title")}
                      </p>
                    </li>
                  </ul>

                  <p className="max-w-full xl:max-w-[512px]  text-base md:text-lg xl:text-[18px] 2xl:text-[20px]  pb-6 md:pb-8 text-[#689E54]">
                    {t("steps.1.text")}
                  </p>
                </div>
              </div>

              <div>
                <div className="overflow-hidden">
                  {activeSlide === 0 ? (
                    <Image
                      src="/steps1.gif"
                      alt="steps"
                      width={450}
                      height={643}
                      className="sm:h-full border-none outline-none"
                      style={{ display: "block", marginBottom: "-1px" }}
                    />
                  ) : (
                          <div className="w-[450px] h-[643px]"></div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className={`transition-opacity duration-1000 ease-in-out absolute w-full max-w-screen-xl px-4 sm:px-6 md:px-10 lg:px-[100px] xl:px-[220px] 2xl:px-[100px] 3xl:px-[500px] 4xl:px-[600px] ${
              activeSlide === 1 ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-10 xl:gap-0">
              <div>
                <div>
                  <ul className="text-[#30503A] pb-6 md:pb-8 gap-2 md:gap-4 font-bold text-lg md:text-2xl xl:text-3xl flex items-center">
                    <div className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] flex items-center justify-center bg-[#30503A] text-[#fff] rounded-full text-base md:text-[30px] font-bold shrink-0">
                      1
                    </div>
                    <li className="max-w-full xl:max-w-[598px]">
                      <p className="mb-[-10px] text-2xl md:text-4xl xl:text-[40px] 2xl:text-[45px] md:mb-[0px]">
                        {t("steps.2.1title")}
                      </p>
                    </li>
                  </ul>

                  <ul className="text-[#30503A] pb-6 md:pb-8 gap-2 md:gap-4 font-bold text-lg md:text-2xl xl:text-3xl flex items-center">
                    <div className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] flex items-center justify-center bg-[#30503A] text-[#fff] rounded-full text-base md:text-[30px] font-bold shrink-0">
                      2
                    </div>
                    <li className="max-w-full xl:max-w-[598px]">
                      <p className="mb-[-10px] text-2xl md:text-4xl xl:text-[40px] 2xl:text-[45px] md:mb-[-15px]">
                        {t("steps.2.2title")}
                      </p>
                    </li>
                  </ul>

                  <ul className="text-[#30503A] pb-4 md:pb-6 gap-2 md:gap-4 font-bold text-lg md:text-2xl xl:text-3xl flex items-center">
                    <div className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] flex items-center justify-center bg-[#30503A] text-[#fff] rounded-full text-base md:text-[30px] font-bold shrink-0">
                      3
                    </div>
                    <li className="max-w-full xl:max-w-[598px]">
                      <p className="mb-[-10px] text-2xl md:text-4xl xl:text-[40px] 2xl:text-[45px] md:mb-[0px]">
                        {t("steps.2.3title")}
                      </p>
                    </li>
                  </ul>

                  <p className="max-w-full xl:max-w-[512px] text-base md:text-lg xl:text-[18px] 2xl:text-[20px] pb-6 md:pb-8 text-[#689E54]">
                    {t("steps.2.text")}
                  </p>
                </div>
              </div>

              <div className="">
                <div className="overflow-hidden">
                  {activeSlide === 1 ? (
                    <Image
                      src="/steps2.gif"
                      alt="steps"
                      width={450}
                      height={643}
                      className="sm:h-full border-none outline-none"
                      style={{ display: "block", marginBottom: "-1px" }}
                    />
                  ) : (
                    <div className="w-[450px] h-[643px]"></div>
                  )}
                </div>
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
    </div>
  );
};

export default Steps;
