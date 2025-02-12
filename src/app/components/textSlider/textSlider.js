"use client"; // Required for Next.js App Router

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const messages = [
  " Visit our new Dolmen Mall, Tariq Road Outlet",
  " FREE DELIVERY ON ORDERS ABOVE 2199/-",
  "100% Refunds & Exchange Policy!",
  " New Arrivals Just Dropped!",
];

const TextSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    duration: 1000,
    created(slider) {
      let timeout;
      const nextSlide = () => {
        slider.next();
        timeout = setTimeout(nextSlide, 3000);
      };
      nextSlide();
      slider.on("dragStarted", () => clearTimeout(timeout));
    },
  });

  return (
    <div className="w-full bg-black text-white py-3">
      <div ref={sliderRef} className="keen-slider">
        {messages.map((msg, index) => (
          <div key={index} className="keen-slider__slide text-center text-[13px]">
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;
