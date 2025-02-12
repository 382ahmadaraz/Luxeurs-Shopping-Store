import Image from "next/image";
import m1 from "../../assets/images/m1.jpg"
import m2 from "../../assets/images/m2.webp"
import m3 from "../../assets/images/m3.webp"
import m4 from "../../assets/images/m4.webp"
import m5 from "../../assets/images/m5.webp"
import m6 from "../../assets/images/m6.webp"
import m7 from "../../assets/images/m7.webp"
import m8 from "../../assets/images/m8.webp"
import m9 from "../../assets/images/m9.webp"
import m10 from "../../assets/images/m10.webp"
import m11 from "../../assets/images/m11.webp"
import m12 from "../../assets/images/m12.webp"
 
 

export default function MensWearComp() {

  const cards = [{
    img: m1,
    disc: "-32%",
    title: "Mens' Abstract Printed Cotton Kurta",
    newprice: "Rs.2,499.00",
    oldprice: "1,699.00",
  },{
    img: m2,
    stockOut: "Out Of Stock",
    title: "Mens' Texture Printed Cotton Kurta",
    newprice: "Rs.2,499.00",
    oldprice: "1,699.00",
  }, {
    img: m3,
    title: "Mens' Sea Blue Printed Cotton Kurta",
    price: "Rs.2,499.00",
},{
    img: m4,
    stockOut: "Out Of Stock",
    title: "Mens' White Stitched Cotton Shalwar Kameez",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.2,699.00",
  }, {
    img: m5,
    disc: "-20%",
    title: "Mens' Black Stitched Cotton Shalwar Kameez",
    oldprice: "Rs.4,999.00",
    newprice: "Rs.3,999.00",
  }, {
    img: m6,
    disc: "-20%",
    title: "Mens' Aesh Gray Printed Cotton Kurta",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.2,799.00",
  }, {
    img: m7,
    disc: "-20%",
    title: "Mens' White Cotton Kurta pajama",
    price: "Rs.2,999.00",
  }, {
    img: m8,
     title: "Mens' White Cotton Pajama",
    oldprice: "Rs.1,999.00",
    newprice: "Rs.799.00",
  }, {
    img: m9,
    title: "Mens' Gray Printed Cotton Kurta",
    price: "Rs.2,499.00",
  }, {
    img: m10,
    disc: "-20%",
    title: "Mens' Black Cotton Kurta Pajama",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.2,799.00",
  }, {
    img: m11,
    title: "Mens' Sea Green Printed Cotton Kurta",
    price: "Rs.2,999.00",
  }, {
    img: m12,
    disc: "-40%",
    title: "Mens' Brown Stitched Cotton Shalwar Kameez",
    oldprice: "Rs.6,999.00",
    newprice: "Rs.3,999.00",
  }
  ]

  return (
    <div className="flex flex-wrap gap-7 h-fit ml-8 font-outfit">

      {cards.map((items) => {
        return (
          <div key={items} className="w-[300px] h-[500px] ">
            <div className="h-[85%] cursor-pointer">
              <Image src={items.img} alt="drees-pics" className=" h-[100%] w-[100%] " />

              <p className="relative bottom-[97%] left-3 text-[15px] bg-orange w-[18%] tracking-wider text-white text-center">{items.disc}</p>
              <p className="relative bottom-[97%] left-3 text-[14px] bg-gray-50 w-[34%] tracking-wider text-zinc-500 text-center">{items.stockOut}</p>
            </div>
            <div className="flex flex-col gap-2 items-center pt-4  text-zinc-900 ">
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
