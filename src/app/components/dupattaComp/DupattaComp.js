import Image from "next/image";
import d1 from "../../assets/images/d1.webp"
import d2 from "../../assets/images/d2.webp"
import d3 from "../../assets/images/d3.webp"
import d4 from "../../assets/images/d4.webp"
import d5 from "../../assets/images/d5.webp"
 
 

export default function DupattaComp() {

  const cards = [{
    img: d1,
    disc: "-40%",
    title: "Black Chiffon Dupatta",
    newprice: "Rs.699.00",
    oldprice: "Rs.999.00",
  } , {
    img: d2,
    stockOut: "Out Of Stock",
    title: "Lawn Dupatta Ethinic Vibes",
     price:"Rs.799.00"
  }, {
    img: d3,
    stockOut: "Out Of Stock",
    title: "Lawn Dupatta Rangoli",
    price: "Rs.799.00",
  }, {
    img: d4,
    title: "Chiffon Dupatta Cyan",
    price: "Rs.799.00",
  }, {
    img: d5,
    title: "Chiffon Dupatta Blush Pink",
    price:"Rs.799.00"
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
