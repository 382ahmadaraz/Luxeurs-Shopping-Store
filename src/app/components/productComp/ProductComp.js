import Image from "next/image";
import { cards } from "./productData/ProductData"
import arrow from "../../assets/icons/arrow.png"
import heart from "../../assets/icons/heart.png"
import Link from "next/link";

export default function ProductComp() {

  // xl:w-[300px] lg:w-[200px] lg:h-[350px] md:w-[230px] md:h-[380px] sm:w-[280px] sm:h-[450px] xl:h-[500px]

  return (
    <div className=" flex flex-wrap justify-center 2xl:w-[80rem] m-auto gap-3 sm:gap-5 lg:gap-3 xl:gap-7  font-outfit">

    {cards.map((items) => {
      return (
        <Link
          key={items.slug}
          href={`/detail/${items.slug}`} className=" w-[45%] h-fit xs:w-[45%] xs:h-[25%] sm:w-[45%] md:w-[30%] lg:w-[23%] xl:w-[22%] ">
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
