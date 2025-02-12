"use client"
import Image from "next/image";
import logo from "../../assets/icons/logo.png";
import search from "../../assets/icons/search.png";
import contact from "../../assets/icons/contact.png";
import cart from "../../assets/icons/cart.png";
import CartMenu from "../../components/cartMenu/CartMenu"
import Link from "next/link";
import { useState } from "react";
import SearchBar from "@/app/components/searchBar/SearchBar";


// border-2 border-red-600

export default function Navbar() {

const [cartt , setCartt] = useState("false")

const handleCart = () => {
    setCart(!cartt)
}


  return (
    <div className="sticky top-0 bg-white z-10 h-[90px] w-full flex items-center justify-around border"> 
        <div className='h-full w-fit  py-8'>
        <Link href={"/"}><Image src={logo} alt='logo-ad' className="h-[100%] w-[100%] cursor-pointer"/></Link>
        </div>
        <div className=''> 
          <ul className="flex  gap-1  [&>*]:cursor-pointer text-lg text-transparent text-zinc-950 font-outfit">
            <Link href={"/collections/ready-to-wear"}><li className="px-4 py-2 hover:text-blue-300  hover:font-medium">Shop All</li></Link>
            <Link href={"/collections/new-arrivals"}><li className="px-4 py-2 hover:text-blue-300  hover:font-medium">New Arrivals</li></Link>
            <Link href={"/collections/bottoms"}><li className="px-4 py-2 hover:text-blue-300 transition-all 0.2s hover:font-medium"> Bottoms</li></Link>
            <Link href={"/collections/formals"}><li className="px-4 py-2 hover:text-blue-300 transition-all 0.2s hover:font-medium">Formals </li></Link>
            <Link href={"/collections/dupattas"}> <li className="px-4 py-2 hover:text-blue-300 transition-all 0.2s hover:font-medium">Dupattas </li></Link>
            <Link href={"/collections/mens-wear"}><li className="px-4 py-2 hover:text-blue-300 transition-all 0.2s hover:font-medium"> MensWear</li></Link>
            <Link href={"/collections/sale"}> <li className="px-4 py-2 font-bold hover:text-blue-300 transition-all 0.2s hover:font-medium "> SALE</li></Link>
            <Link href={"/pages/contact-us"}><li className="px-4 py-2 hover:text-blue-300 transition-all 0.2s hover:font-medium">Contact Us </li></Link>
            <li></li>
          </ul>
        </div>
        <div className='flex gap-5 [&>*]:cursor-pointer'>
          <SearchBar/>
          <Link href={"/account/login"}><Image src={contact} alt='bg-iamge' /></Link>
          <div>
            <div onClick={handleCart} className="bg-lightBlue text-[10px] rounded-full absolute top-6 ml-[15px]  h-[16px] w-[16px] text-center text-white">0</div>
            <CartMenu/>
         </div>
        </div>
    </div>
  )
}
