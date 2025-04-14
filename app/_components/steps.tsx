"use client";

import Image from "next/image";
import { useState, useEffect, useRef, SetStateAction } from "react";

const Steps = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;
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
    <div className="relative bg-white px-4 md:px-10 xl:px-[300px] py-10 md:py-20 xl:py-[120px]">
      {/* Navigation Arrows - visible only on desktop */}
      <button 
        onClick={prevSlide}
        className="hidden md:block absolute top-1/2 left-4 md:left-6 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 shadow-md z-10"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#30503A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button 
        onClick={nextSlide}
        className="hidden md:block absolute top-1/2 right-4 md:right-6 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 shadow-md z-10"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#30503A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div 
        ref={carouselRef}
        className="relative overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slide 1 */}
        <div 
          className={`transition-all duration-1000 ease-in-out ${
            activeSlide === 0 ? "opacity-100" : "opacity-0 absolute top-0 left-0"
          }`}
        >
          <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-10 xl:gap-0">
            <div>
              <div>
                <ul className="text-[#30503A] pb-10 md:pb-[40px] gap-4 md:gap-[32px] font-bold text-3xl md:text-5xl xl:text-[60px] flex">
                  <Image src="/one.svg" alt="steps" width={54} height={54} />
                  <li className="max-w-full xl:max-w-[598px]">
                    <p className="mb-[-10px] md:mb-[0px]">Login with</p>
                    <p>Instagram</p>
                  </li>
                </ul>

                <ul className="text-[#30503A] pb-10 md:pb-[40px] gap-4 md:gap-[32px] font-bold text-3xl md:text-5xl xl:text-[60px] flex">
                  <Image src="/two.svg" alt="steps" width={54} height={54} />
                  <li className="max-w-full xl:max-w-[598px]">
                    <p className="mb-[-10px] md:mb-[-15px]">Define</p>
                    <p>campaings</p>
                  </li>
                </ul>

                <ul className="text-[#30503A] pb-8 md:pb-[30px] gap-4 md:gap-[32px] font-bold text-3xl md:text-5xl xl:text-[60px] flex">
                  <Image src="/three.svg" alt="steps" width={54} height={54} />
                  <li className="max-w-full xl:max-w-[598px]">
                    <p>Set live</p>
                  </li>
                </ul>

                <p className="max-w-full xl:max-w-[512px] text-base md:text-lg xl:text-[20px] pb-10 md:pb-[50px] text-[#689E54]">
                  Connect your Instagram account to automatically capture customer
                  posts, reels, stories, and comments. Next, specify the campaigns
                  and decide on rewards that excite your audience. Finally, activate
                  your campaign and watch customers promote your brand while you
                  track real-time engagement—all without extra apps or hassle.
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
          className={`transition-all duration-1000 ease-in-out ${
            activeSlide === 1 ? "opacity-100" : "opacity-0 absolute top-0 left-0"
          }`}
        >
          <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-10 xl:gap-0">
            <div>
              <div>
                <ul className="text-[#30503A] pb-10 md:pb-[40px] gap-4 md:gap-[32px] font-bold text-3xl md:text-5xl xl:text-[60px] flex">
                  <Image src="/one.svg" alt="steps" width={54} height={54} />
                  <li className="max-w-full xl:max-w-[598px]">
                    <p className="mb-[-10px] md:mb-[0px]">Mention </p>
                    <p>the brand</p>
                  </li>
                </ul>

                <ul className="text-[#30503A] pb-10 md:pb-[40px] gap-4 md:gap-[32px] font-bold text-3xl md:text-5xl xl:text-[60px] flex">
                  <Image src="/two.svg" alt="steps" width={54} height={54} />
                  <li className="max-w-full xl:max-w-[598px]">
                    <p className="mb-[-10px] md:mb-[-15px]">Earn Points</p>
                  </li>
                </ul>

                <ul className="text-[#30503A] pb-8 md:pb-[30px] gap-4 md:gap-[32px] font-bold text-3xl md:text-5xl xl:text-[60px] flex">
                  <Image src="/three.svg" alt="steps" width={54} height={54} />
                  <li className="max-w-full xl:max-w-[598px]">
                    <p className="mb-[-10px] md:mb-[-15px]">Reedem </p>
                    <p>rewards</p>
                  </li>
                </ul>

                <p className="max-w-full xl:max-w-[512px] text-base md:text-lg xl:text-[20px] pb-10 md:pb-[50px] text-[#689E54]">
                  Whenever you post a story, reel, or comment on the business media, you'll automatically receive a URL by direct message (DM). From that link, you can check your points balance, see available campaigns, and redeem your rewards—no extra logins or downloads are needed.
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

        {/* Slide 3 */}
        <div 
          className={`transition-all duration-1000 ease-in-out ${
            activeSlide === 2 ? "opacity-100" : "opacity-0 absolute top-0 left-0"
          }`}
        >
          <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-10 xl:gap-0">
            <div>
              <div>
                <ul className="text-[#30503A] pb-10 md:pb-[40px] gap-4 md:gap-[32px] font-bold text-3xl md:text-5xl xl:text-[60px] flex">
                  <li className="max-w-full xl:max-w-[598px]">
                    <p className="mb-[-10px] md:mb-[0px]">Log in with Instagram, define your campaigns, and go live in minutes. It's sea mless.</p>
                  </li>
                </ul>

                <p className="max-w-full xl:max-w-[512px] text-base md:text-lg xl:text-[20px] pb-10 md:pb-[50px] text-[#689E54]">
                  Connect your Instagram account to automatically capture customer posts, reels, stories, and comments. Next, specify the campaigns and decide on rewards that excite your audience. Finally, activate your campaign and watch customers promote your brand while you track real-time engagement—all without extra apps or hassle.
                </p>
              </div>
            </div>

            <div>
              <Image
                src="/steps3.png"
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
              activeSlide === index ? "bg-[#30503A] w-8" : "bg-[#689E54] bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Steps;