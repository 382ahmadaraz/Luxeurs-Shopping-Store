"use client"
import { useState, useRef, useEffect } from "react";
import cart from "../../assets/icons/cart.png";
import Image from "next/image";
import cary from "../../assets/icons/carts.png"

export default function ToggleMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle menu when button is clicked
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      
      <Image src={cart} alt="cart"  onClick={toggleMenu}></Image>
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 z-20 right-0 w-[30%] h-full bg-white border-l shadow-lg"
        >
          <div className="flex justify-between items-center p-4 border-b">
            <span className="font-semibold">Shopping Cart (0)</span>
            <button onClick={() => setIsOpen(false)} className="text-red-500 text-3xl p-2 hover:text-lightBlue">&times;</button>
          </div>
          <div className="flex flex-col items-center justify-center h-[70%] gap-8">
            <p className="text-2xl">Your cart is currently empty.</p>
            <Image src={cary} alt="carry" className="bg-lightBlue rounded-full p-3"></Image>
          </div>
           
        </div>
      )}
    </div>
  );
}
 