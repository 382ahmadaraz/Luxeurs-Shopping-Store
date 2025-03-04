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
import arrow from "../../assets/icons/arrow.png"
import heart from "../../assets/icons/heart.png"
import Link from "next/link";
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
    <div className=" flex flex-wrap justify-start pl-6 xs:pl-9 2xl:w-[80rem] m-auto gap-3 sm:gap-5 lg:gap-3 xl:gap-7  font-outfit">

    {cards.map((items) => {
      return (
        <Link
          key={items.slug}
          href={`/detail/${items.slug}`} className=" w-[45%] h-fit xs:w-[45%] xs:h-[25%] sm:w-[45%] md:w-[30%] lg:w-[23%] xl:w-[22%] xl:h-fit">
          <div key={items} className="w-[100%] h-[100%]  group">
            <div className="h-[15rem] xs:h-[20rem] sm:h-[25rem] lg:h-[21rem] xl:h-[24rem] w-[100%] cursor-pointer ">
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

              <div className="flex gap-1 text-md text-[12px] sm:text-md xl:text-lg">
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
