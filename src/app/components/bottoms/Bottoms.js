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
    <div className="flex flex-wrap gap-7 ml-8 font-outfit">

      {cards.map((items) => {
        return (
          <div key={items} className="w-[300px] h-[500px] mb-6">
            <div className="relative h-[85%] cursor-pointer " onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
              <Image src={items.img} alt="drees-pics" className=" h-[100%] w-[100%] " />
              
              {/* {isHovered && (
                      <div className="absolute inset-0 flex items-center  ">
                        <div className="bg-black bg-opacity-50 p-3 rounded-full transition-opacity duration-300">
                          <Image src={sale5} alt="pro" className="text-white w-6 h-6" />
                        </div>
                      </div>
                    )} */}
              
              <p className="relative bottom-[97%] left-3 text-[15px] bg-orange w-[18%] tracking-wider text-white text-center">{items.disc}</p>
              <p className="relative bottom-[97%] left-3 text-[14px] bg-gray-50 w-[34%] tracking-wider text-zinc-500 text-center">{items.stockOut}</p>
            </div>
            <div className="flex flex-col gap-2 items-center py-4  text-zinc-900 ">
              <p className="flex items-center justify-center text-[14px] font-semibold">{items.title}</p>

              <div className="flex gap-1 text-md">
                <p className=" line-through text-zinc-500">{items.oldprice}</p>
                <p className="  ">{items.price}</p>
                <p className=" text-orange ">{items.newprice}</p>
              </div>
            </div>
          </div>
        )
    })}
 
    </div>
  )
}
