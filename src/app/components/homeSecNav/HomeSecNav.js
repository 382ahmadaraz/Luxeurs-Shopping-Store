"use client"
import Image from "next/image"
import BgHeader from "../../assets/images/header-bg.png"
import Link from "next/link"
import { usePathname } from "next/navigation";


export default function HomeSecNav() {

  const pathname = usePathname();


  return (

    <div className=''>
      <div className="flex items-center justify-center">
        <Image src={BgHeader} alt="BgHeader" className="h-[100%] w-[100%]" />

      </div>
      <div className="my-8">
        <p className='lg:text-3xl md:text-2xl text-center  lg:tracking-[10px] mb-5'>SHOP BY GETAGORIES</p>

        {/* NavBAr  */}
        <ul className='flex justify-center gap-3 md:gap-7 text-[12px] sm:text-[13px] tracking-normal md:tracking-widest [&>*]:cursor-pointer text-zinc-500 '>
          <Link href={"/"} className={` ${pathname === "/" ? "text-lightBlue border-b border-lightBlue" : "text-gray-500"
            }`} scroll={false}><li className=' hover:text-black '>NEW ARRIVALS</li></Link>

          <Link href={"/readyToWear"} className={` ${pathname === "/readyToWear" ? "text-lightBlue border-b border-lightBlue" : "text-gray-500"
            }`} scroll={false}> <li className='hover:text-black '>READY TO WEAR</li></Link>
          
          <Link href={"/sale"} className={` ${pathname === "/sale" ? "text-lightBlue border-b border-lightBlue" : "text-gray-500"
            }`} scroll={false}><li className='hover:text-black '>SALE</li></Link>
          
          <Link href={"/bottoms"} className={` ${pathname === "/bottoms" ? "text-lightBlue border-b border-lightBlue" : "text-gray-500"
            }`} scroll={false}><li className='hover:text-black '>BOTTOMS</li></Link>
        </ul>
      </div>



    </div>
  )
}
