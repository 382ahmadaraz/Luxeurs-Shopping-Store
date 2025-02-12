import Image from "next/image";
import h1 from "../../assets/images/1.webp"
import h2 from "../../assets/images/2.webp"
import h3 from "../../assets/images/3.webp"
import h4 from "../../assets/images/4.webp"
import h5 from "../../assets/images/5.webp"
import h6 from "../../assets/images/6.webp"
import h7 from "../../assets/images/7.webp"
import h8 from "../../assets/images/8.webp"
import h9 from "../../assets/images/9.webp"
import h10 from "../../assets/images/10.webp"
import h11 from "../../assets/images/11.webp"
import h12 from "../../assets/images/12.webp"
import h13 from "../../assets/images/13.webp"
import h14 from "../../assets/images/14.webp"
import h15 from "../../assets/images/15.webp"
import h16 from "../../assets/images/16.webp"
import h17 from "../../assets/images/17.webp"
import h18 from "../../assets/images/18.webp"
import h19 from "../../assets/images/19.webp"
import h20 from "../../assets/images/20.webp"

export default function HomeCards() {

  const cards = [{
    img: h1,
    title: "Coco Embroidered 3PC Lawn Dress",
    price: "Rs.4,999.00"
  }, {
    img: h2,
    title: "Dahlia Embroidered 3PC Lawn Dress",
    price: "Rs.4,999.00"
  }, {
    img: h3,
    title: "Kajal Embroidered 3PC Lawn Dress",
    price: "Rs.4,999.00"
  }, {
    img: h4,
    title: "Juliet Embroidered 3PC Lawn Dress",
    price: "Rs.4,999.00"
  }, {
    img: h5,
    title: "Mermaid Embroidered 3PC Lawn Dress",
    price: "Rs.4,999.00"
  }, {
    img: h6,
    title: "Mermaid Embroidered 3PC Lawn Dress",
    price: "Rs.4,999.00"
  }, {
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
    img: h16,
    disc: "-30%",
    title: "Gulaal Chiffon Formal Stitched Dress",
    oldprice: "Rs.12,999.00",
    newprice: "Rs.8,999.00",
  }, {
    img: h17,
    stockOut: "Out Of Stock",
    title: "Rosewood Schiffli Embroidered 2PC Dress",
    oldprice: "Rs.4,999.00",
    newprice: "Rs.3,999.00",
  }, {
    img: h18,
    stockOut: "Out Of Stock",
    title: "Belle Khaddar Embroidered 2PC Dress",
    oldprice: "Rs.4,999.00",
    newprice: "Rs.3,999.00",
  }, {
    img: h19,
    title: "Niagara Lawn Embroidered 2PC Dress",
    price: "Rs.3,999.00",
  }, {
    img: h20,
    stockOut: "Out Of Stock",
    title: "Stella Khaddar Embroidered 2PC Dress",
    oldprice: "Rs.4,999.00",
    newprice: "Rs.3,999.00",
  },
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
