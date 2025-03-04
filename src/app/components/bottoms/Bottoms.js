"use client"
// import { useState } from "react";
import Image from "next/image";
import bottom4 from "../../assets/images/bottom4.webp"
import bottom5 from "../../assets/images/bottom5.webp"
import bottom6 from "../../assets/images/bottom6.webp"
import bottom7 from "../../assets/images/bottom7.webp"
import bottom8 from "../../assets/images/bottom8.webp"
import bottom9 from "../../assets/images/bottom9.webp"
import bottom10 from "../../assets/images/bottom10.webp"
import sale5 from "../../assets/images/sale5.webp"
import sale6 from "../../assets/images/sale6.webp"
import sale7 from "../../assets/images/sale7.webp"
import arrow from "../../assets/icons/arrow.png"
import heart from "../../assets/icons/heart.png"
import Link from "next/link";

export default function Bottoms() {
  // const [isHovered, setIsHovered] = useState(false);


  const cards = [{
    img: sale5,
    disc: "-40%",
    title: "White Basic Straight Pants - Cambric",
    oldprice: "Rs.1,350.00",
    newprice: "Rs.799.00",
  },{
    img: sale6,
    disc: "-37%",
    title: "Culottes White",
     oldprice: "Rs.1,429.00",
    newprice: "Rs.899.00",
  }, {
    img: sale7,
    disc: "-40%",
    title: "Black Basic Straight Pants - Cambric",
    oldprice: "Rs.1,499.00",
    newprice: "899.00",
  }, {
    img: bottom4,
    disc: "-40%",
    title: "Black Basic Straight Pants - Cambric",
    oldprice: "Rs.1,499.00",
    newprice: "899.00",
  },
  {
    img: bottom5,
    disc: "-40%",
    title: "White Basic Straight Pants - Cambric",
    oldprice: "Rs.1,350.00",
    newprice: "Rs.799.00",
  },{
    img: bottom6,
    disc: "-37%",
    title: "Culottes White",
     oldprice: "Rs.1,429.00",
    newprice: "Rs.899.00",
  }, {
    img: bottom7,
    disc: "-40%",
    title: "Black Basic Straight Pants - Cambric",
    oldprice: "Rs.1,499.00",
    newprice: "899.00",
  }, {
    img: bottom8,
    disc: "-20%",
    title: "Palm Stitched 2pc Embroidered Suit",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.3,199.00",
  }, {
    img: bottom9,
    stockOut:"Out Of Stock",
    title: "Allure Stitched 2pc Embroidered Suit",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.3,499.00",
  }, {
    img: bottom10,
    stockOut:"Out Of Stock",
    title: "Pine Green Stitched 2pc Embroidered Suit",
    oldprice: "Rs.4,499.00",
    newprice: "Rs.3,199.00",
  },  
]

  return (
    <div className=" flex flex-wrap justify-start pl-2 xs:pl-9 2xl:w-[80rem] m-auto gap-3 sm:gap-5 lg:gap-3 xl:gap-7  font-outfit">

      {cards.map((items) => {
        return (
          <Link
            key={items.slug}
            href={`/detail/${items.slug}`} className=" w-[45%] h-fit xs:w-[45%] xs:h-[25%] sm:w-[45%] md:w-[30%] lg:w-[23%] xl:w-[22%] xl:h-fit">
            <div key={items} className="w-[100%] h-[100%]  group">
              <div className="h-[14rem] xs:h-[20rem] sm:h-[25rem] lg:h-[21rem] xl:h-[24rem] w-[100%] cursor-pointer ">
                <Image src={items.img} alt="drees-pics" className="h-[100%] w-[100%]  " />
                <div className="w-[100%] flex items-ceter justify-between px-3 relative bottom-[97%] ">
                  <div>
                    <p className="text-[10px] sm:text-[14px] bg-gray-50 w-fit tracking-wider px-2 text-zinc-500 text-center">{items.stockOut}</p>
                    <p className="text-[10px] sm:text-[15px] bg-orange w-fit px-2 tracking-wider text-white text-center">{items.disc}</p>

                  </div>
                  <div className="ease-in-out duration-20 [&>*]:shadow-md">
                    <Image src={arrow} alt="Hover" className=" relative w-[40px] h-[40px] p-3 items-end bg-white rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-lightBlue hover:text-white" />
                    <Image src={heart} alt="Hover" className="mt-2 relative w-[40px] h-[40px] p-3 items-end bg-white rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-lightBlue hover:text-white" />
                  </div>
                </div>
                <div className="relative bottom-[75%] hidden group-hover:block">
                  <div className="flex justify-between items-center [&>*]:p-1 [&>*]:bg-white [&>*]:text-center">
                    <span>&lt;</span>
                    <span >&gt;</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:gap-2 items-center xs:py-2 sm:py-4 text-center text-zinc-900 ">
                <p className="flex items-center justify-center text-[12px] sm:text-[14px] md:text-[16px] font-semibold">{items.title}</p>

                <div className="flex gap-1 text-md text-[12px] sm:text-md">
                  <p className=" line-through text-zinc-500">{items.oldprice}</p>
                  <p className="  ">{items.price}</p>
                  <p className=" text-orange ">{items.newprice}</p>
                </div>
              </div>
            </div>
          </Link>
        )
      })}

    </div>
  )
}
