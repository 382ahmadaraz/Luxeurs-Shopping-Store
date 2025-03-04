"use client"
import Image from "next/image";
import logo from "../../assets/icons/logo.png";
import contact from "../../assets/icons/contact.png";
import heart from "../../assets/icons/heart.png";
import menu from "../../assets/icons/menubar.svg";
import CartMenu from "../../components/cartMenu/CartMenu"
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SearchBar from "@/app/components/searchBar/SearchBar";
import { usePathname } from "next/navigation";
import BootomBar from "../bottomBar/BottomBar";


// border-2 border-red-600

export default function Navbar() {
  const [cartt, setCartt] = useState("false");
  const [menubar, setMenubar] = useState("");
  const pathname = usePathname();
  const menuRef = useRef(null);

  const handleCart = () => {
    setCartt(!cartt)
  }
  const menuHandle = () => {
    setMenubar(!menubar)
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenubar(false);
    }
  }


  const navElements = [
    { id: 1, name: "Pret-Wear", href: "/collections/ready-to-wear", },
    { id: 2, name: "New Arrivals", href: "/collections/new-arrivals", },
    { id: 3, name: "Bottoms", href: "/collections/bottoms", },
    { id: 4, name: "Formals", href: "/collections/formals", },
    { id: 5, name: "Dupattas", href: "/collections/dupattas", },
    { id: 6, name: "Mens Wear", href: "/collections/mens-wear", },
    { id: 7, name: "Sale", href: "/collections/sale", },
    { id: 8, name: "Contact Us", href: "/pages/contact-us", },
  ]


  return (
    <div className="sticky top-0 z-30 md:shadow-sm border-b">
      
      {/* For Small Screens below lg  */}
      <div className="  bg-white z-50 lg:hidden px-2 sm:px-5  h-[60px] sm:shadow-lg w-[100%] sm:w-full flex items-center justify-between ">
        <div className="flex items-center gap-1 sm:gap-3">
          <Image src={menu} alt="menubar" onClick={menuHandle} className="h-[26px] w-[26px]"></Image>
          {menubar && (
            <div
              ref={menuRef}
              className="fixed top-0 left-0 z-20 ">
              <div className="absolute top-0 z-20 h-[100vh] bg-white left-0 px-11 py-11 w-[280px] shadow-lg ">
                <button onClick={() => setMenubar(false)} className="text-red-500 shadow-xl rounded-full p-1 px-3 text-2xl absolute right-0 top-3 mr-4 hover:text-lightBlue">&times;</button>
                {navElements.map((items) => {
                  return (
                    <div key={items.id} className=" ">
                      <Link href={items.href}
                      ><ul><li onClick={() => setMenubar(false)} className="px-2 py-2 hover:text-blue-300  hover:font-medium">{items.name}</li><hr /></ul></Link>
                    </div>
                  )
                })}
              </div>

            </div>
          )}
          <SearchBar />
        </div>


        <div className=" w-[148px] h-[90px] flex justify-center items-center">
          <Link href={"/"}><Image src={logo} alt='logo-ad' className=" cursor-pointer" /></Link>
        </div>

        <div className="flex items-center gap-3">
          <div>
            <div onClick={handleCart} className="bg-lightBlue text-[10px] rounded-full absolute z-10 top-5 ml-[15px] h-[16px] w-[16px] text-center text-white">0</div>
            <Link href={"/pages/wishlist"}><Image src={heart} alt='bg-iamge' /></Link>
          </div>
          <div>
            <div onClick={handleCart} className="bg-lightBlue text-[10px] rounded-full absolute z-10 top-5 ml-[15px] h-[16px] w-[16px] text-center text-white">0</div>
            <CartMenu />
          </div>
        </div>


      </div>
{/* 
 
 
      {/* Navbar for Above Lg Screens */}
      <div className="hidden lg:block ">
        <div className=" bg-white z-10 h-[80px] w-full flex items-center justify-around ">
          <div className="h-full lg:w-[11%]  flex justify-center items-center">
            <Link href={"/"}><Image src={logo} alt='logo-ad' className=" cursor-pointer" /></Link>
          </div>

          {/* navElements  */}
          <div className="flex xl:gap-3">
            {navElements.map((items) => {
              return (
                <div key={items.id} className=" ">
                  <Link href={items.href} className={` ${pathname === items.href ? "text-lightBlue" : items.name === "Sale" ? "font-bold" : "text-black"
                    }`}><ul><li className="px-2 py-2 hover:text-blue-300  hover:font-medium">{items.name}</li></ul></Link>
                </div>
              )
            })}
          </div>

          <div className='flex  gap-5 [&>*]:cursor-pointer  '>
            <SearchBar />
            <Link href={"/account/login"}><Image src={contact} alt='bg-iamge' /></Link>
            <div>
              <div onClick={handleCart} className="bg-lightBlue text-[10px] rounded-full absolute z-10 top-6 ml-[15px] h-[16px] w-[16px] text-center text-white">0</div>
              <Link href={"/pages/wishlist"}><Image src={heart} alt='bg-iamge' /></Link>
            </div>
            <div>
              <div onClick={handleCart} className="bg-lightBlue text-[10px] rounded-full absolute z-10 top-6 ml-[15px] h-[16px] w-[16px] text-center text-white">0</div>
              <CartMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
