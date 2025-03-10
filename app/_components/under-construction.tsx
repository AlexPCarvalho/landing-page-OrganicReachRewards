"use client"

import { useEffect } from "react";
import gsap from "gsap";

const UnderConstruction = () => {
  useEffect(() => {
    gsap.to("#progress", {
      width: "100%",
      duration: 4,
      repeat: -1,
      ease: "power1.inOut",
      yoyo: true,
      onUpdate: function () {
        const progress = Math.round(this.progress() * 100);
        const progressValueElement = document.getElementById("progress-value");
        if (progressValueElement) {
          progressValueElement.textContent = `${progress}%`;
        }
      },
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen  text-lime-700 text-center">
      <div className="relative w-3/4 md:w-1/2 lg:w-1/3 bg-gray-700 rounded-full h-8">
        <div
          id="progress"
          className="absolute top-0 left-0 h-8 bg-lime-500 rounded-full"
          style={{ width: "0%" }}
        ></div>
      </div>
      <p id="progress-value" className="mt-4 text-xl">
        0%
      </p>
      <h1 className="mt-8 text-3xl font-bold pb-3">Page Under Construction</h1>
      <p className="text-lime-800">
      Page Under Construction
      We are working to bring you something amazing!!!
      </p>
    </div>
  );
};

export default UnderConstruction;
