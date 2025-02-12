"use client"

import { useState } from "react";

const PriceFilter = () => {
  const [price, setPrice] = useState([0, 11999]);

  const handleChange = (index, value) => {
    const newPrice = [...price];
    newPrice[index] = Number(value);
    setPrice(newPrice);
  };

  return (
    <div className="w-[90%] h-[60%] p-4">
      <h3 className="font-outfit text-lg my-3">Price</h3>

      <div className="relative mt">
        <input
          type="range"
          min="0"
          max="11999"
          value={price[0]}
          onChange={(e) => handleChange(0, e.target.value)}
          className="absolute w-full bg-transparent   cursor-pointer"
        />
        <input
          type="range"
          min="0"
          max="11999"
          value={price[1]}
          onChange={(e) => handleChange(1, e.target.value)}
          className="absolute w-full bg-transparent   cursor-pointer"
        />
      </div>

      <div className="flex justify-between text-sm mt-8">
        <span>Rs. {price[0].toFixed(2)}</span>
        <span>Rs. {price[1].toFixed(2)}</span>
      </div>
    </div>
  );
};

export default PriceFilter;
