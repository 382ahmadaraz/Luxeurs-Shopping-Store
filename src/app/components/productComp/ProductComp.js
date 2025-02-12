import Image from "next/image";
import p1 from "../../assets/images/p1.webp"
import p2 from "../../assets/images/p2.webp"
import p3 from "../../assets/images/m6.webp"
import p4 from "../../assets/images/p4.webp"
import p5 from "../../assets/images/p5.webp"
import p6 from "../../assets/images/p6.webp"
import p7 from "../../assets/images/m9.webp"
import p8 from "../../assets/images/p8.webp"
import p9 from "../../assets/images/p9.webp"
import p10 from "../../assets/images/p10.webp"
import p11 from "../../assets/images/p11.webp"
import p12 from "../../assets/images/p12.webp"
 

export default function ProductComp() {

  const cards = [{
    img: p1,
    disc: "-30%",
    title: "Black Stitched 2pc Lawn Dress",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.2,799.00",
  },{
    img: p2,
    disc: "-15%",
    title: "Prelude Stitched 2pc Embroidered Suit",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.3,399.00",
  },{
    img: p3,
    disc: "-5%",
    title: "Rustic Stitched 2pc Embroidered Suit no",
    oldprice: "Rs.3500.00",
    newprice: "Rs.3,299.00",
  },{
    img: p4,
    disc: "-17%",
    title: "Black Suzani Stitched Embroidered Shirt",
    oldprice: "Rs.2,899.00",
    newprice: "Rs.2,399.00",
  },{
    img: p5,
    disc: "-40%",
    title: "White Basic Straight Pants - Cambric",
    oldprice: "Rs.1,350.00",
    newprice: "Rs.799.00",
  },{
    img: p6,
    disc: "-37%",
    title: "Culottes White",
     oldprice: "Rs.1,429.00",
    newprice: "Rs.899.00",
  }, {
    img: p7,
    disc: "-40%",
    title: "Black Basic Straight Pants - Cambric",
    newprice: "Rs.1,499.00",
    oldprice: "899.00",
  }, {
    img: p8,
    disc: "-20%",
    title: "Palm Stitched 2pc Embroidered Suit",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.3,199.00",
  }, {
    img: p9,
    disc: "-12%",
    title: "Allure Stitched 2pc Embroidered Suit",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.3,499.00",
  }, {
    img: p10,
    disc: "-28%",
    title: "Pine Green Stitched 2pc Embroidered Suit",
    oldprice: "Rs.4,499.00",
    newprice: "Rs.3,199.00",
  }, {
    img: p11,
    disc: "-20%",
    title: "Russet Stitched 2pc Embroidered Suit",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.3,199.00",
  }, {
    img: p12,
    disc: "-15%",
    title: "Light Taupe 2PC Embroidered Lawn Dress",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.3,390.00",
  } ,
  ]

  return (
    <div className="flex flex-wrap gap-7 ml-8 font-outfit">

      {cards.map((items) => {
        return (
          <div key={items} className="w-[300px] h-[500px] mb-6">
            <div className="h-[85%] cursor-pointer">
              <Image src={items.img} alt="drees-pics" className=" h-[100%] w-[100%] " />

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
