"use client"
import { useState, useRef, useEffect } from "react";
import search from "../../assets/icons/search.png";
import Image from "next/image";
// import cary from "../../assets/icons/carts.png"

export default function SearchBar() {
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
      
      <Image src={search} alt="cart" className="h-[20px] w-[20px]" onClick={toggleMenu}></Image>
      {isOpen && (
        <div
          ref={menuRef}
          className="fixed top-0 left-0 z-20 w-full h-[40vh] bg-white border-l shadow-lg"
        >
          <div className="flex justify-between items-center p-2 border-b">
            <span className="md:font-semibold">Search Here</span>
            <button onClick={() => setIsOpen(false)} className="text-red-500 text-3xl p-2 hover:text-lightBlue">&times;</button>
          </div>
          <div className="flex border-b border-black items-center justify-between h-[] mt-11 w-[60%] m-auto">
             <input type="text" placeholder="Search..." className="lg:text-2xl outline-none w-full"/>
             <Image src={search} alt="cart" ></Image>

          </div>
           
        </div>
      )}
    </div>
  );
}
 