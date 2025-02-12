import Image from "next/image";
import f1 from "../../assets/images/f1.webp"
import f2 from "../../assets/images/f2.webp"
import f3 from "../../assets/images/f3.webp"
import f4 from "../../assets/images/f4.webp"
import f5 from "../../assets/images/f5.webp"
import f6 from "../../assets/images/f6.webp"
import h7 from "../../assets/images/7.webp"
import h8 from "../../assets/images/8.webp"
import h9 from "../../assets/images/9.webp"
import h10 from "../../assets/images/10.webp"
import h11 from "../../assets/images/11.webp"
import h12 from "../../assets/images/12.webp"
import h13 from "../../assets/images/13.webp"
import h14 from "../../assets/images/14.webp"
import h15 from "../../assets/images/15.webp"
 

export default function FormalComp() {

  const cards = [{
    img: f1,
    disc: "-40%",
    title: "Aubergine Chiffon Formal Stitched Dress",
    newprice: "Rs.5,999.00",
    oldprice: "9,999.00",
  },{
    img: h7,
    disc: "-33%",
    title: "Rivaj Stitched 3PC Formal Dress",
    newprice: "Rs.7,999.00",
    oldprice: "11,999.00",
  }, {
    img: h8,
    disc: "-35%",
    title: "Maroon Chiffon Stitched Saree",
    oldprice: "Rs.8,999.00",
    newprice: "Rs.7,999.00",
  }, {
    img: h9,
    stockOut: "Out Of Stock",
    title: "Black Chiffon Stitched Saree",
    oldprice: "Rs.13,999.00",
    newprice: "Rs.9,999.00",
  }, {
    img: h10,
    disc: "-20%",
    title: "Chandni Stitched Formal Chiffon Dress",
    oldprice: "Rs.9,999.00",
    newprice: "Rs.7,999.00",
  }, {
    img: h11,
    disc: "-20%",
    title: "Zebaish Raw Silk Formal Stitched Dress",
    oldprice: "Rs.9,999.00",
    newprice: "Rs.7,999.00",
  }, {
    img: h12,
    disc: "-25%",
    title: "Ice blue Stitched Chiffon Saree",
    oldprice: "Rs.11,999.00",
    newprice: "Rs.8,999.00",
  }, {
    img: h13,
    disc: "-20%",
    title: "Maya Chiffon Formal Stitched Dress",
    oldprice: "Rs.9,999.00",
    newprice: "Rs.7,999.00",
  }, {
    img: h14,
    disc: "-20%",
    title: "Hoor Chiffon Formal Stitched Dress",
    oldprice: "Rs.9,999.00",
    newprice: "Rs.7,999.00",
  }, {
    img: h15,
    disc: "-20%",
    title: "Jahan Aara Raw Silk Formal Stitched Dress",
    oldprice: "Rs.9,999.00",
    newprice: "Rs.7,999.00",
  }, {
    img: f2,
    disc: "-30%",
    title: "Ghazal Raw Silk Formal Stitched Dress",
    oldprice: "Rs.9,999.00",
    newprice: "Rs.7,999.00",
  }, {
    img: f3,
    disc: "-40%",
    title: "Pink Chiffon Formal Stitched Dress",
    oldprice: "Rs.9,999.00",
    newprice: "Rs.5,999.00",
  }, {
    img: f4,
    stockOut: "Out Of Stock",
    title: "Moroccan Blue Stitched Raw-Silk Formal",
    oldprice: "Rs.9,999.00",
    newprice: "Rs.7,999.00",
  }, {
    img: f5,
    stockOut: "Out Of Stock",
    title: "Blue Muse Emrdoidered Formal Suit",
    price:"Rs.9,999.00"
  },{
    img: f6,
    stockOut: "Out Of Stock",
    title: "Pearl Blush Stitched Chiffon Formal",
    oldprice: "Rs.5,999.00",
    newprice: "Rs.4,999.00",  },
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
