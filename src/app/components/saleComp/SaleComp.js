import Image from "next/image";
import sale1 from "../../assets/images/sale1.webp"
import sale2 from "../../assets/images/sale2.webp"
import sale3 from "../../assets/images/sale3.webp"
import sale4 from "../../assets/images/sale4.webp"
import sale5 from "../../assets/images/sale5.webp"
import sale6 from "../../assets/images/sale6.webp"
import sale7 from "../../assets/images/sale7.webp"
import sale8 from "../../assets/images/sale8.webp"
import sale9 from "../../assets/images/sale9.webp"
import sale10 from "../../assets/images/sale10.jpg"
import sale11 from "../../assets/images/sale11.webp"
import sale12 from "../../assets/images/sale12.webp"
import sale13 from "../../assets/images/sale13.webp"
import sale14 from "../../assets/images/sale14.webp"
import sale15 from "../../assets/images/sale15.webp"
import sale16 from "../../assets/images/sale16.webp"
import sale17 from "../../assets/images/sale17.webp"
import sale18 from "../../assets/images/sale18.webp"
import sale19 from "../../assets/images/sale19.webp"
import sale20 from "../../assets/images/sale20.webp"

export default function SaleComp() {

  const cards = [{
    img: sale1,
    disc: "-30%",
    title: "Black Stitched 2pc Lawn Dress",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.2,799.00",
  },{
    img: sale2,
    disc: "-15%",
    title: "Prelude Stitched 2pc Embroidered Suit",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.3,399.00",
  },{
    img: sale3,
    disc: "-5%",
    title: "Rustic Stitched 2pc Embroidered Suit no",
    oldprice: "Rs.3500.00",
    newprice: "Rs.3,299.00",
  },{
    img: sale4,
    disc: "-17%",
    title: "Black Suzani Stitched Embroidered Shirt",
    oldprice: "Rs.2,899.00",
    newprice: "Rs.2,399.00",
  },{
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
    newprice: "Rs.1,499.00",
    oldprice: "899.00",
  }, {
    img: sale8,
    disc: "-20%",
    title: "Palm Stitched 2pc Embroidered Suit",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.3,199.00",
  }, {
    img: sale9,
    disc: "-12%",
    title: "Allure Stitched 2pc Embroidered Suit",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.3,499.00",
  }, {
    img: sale10,
    disc: "-28%",
    title: "Pine Green Stitched 2pc Embroidered Suit",
    oldprice: "Rs.4,499.00",
    newprice: "Rs.3,199.00",
  }, {
    img: sale11,
    disc: "-20%",
    title: "Russet Stitched 2pc Embroidered Suit",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.3,199.00",
  }, {
    img: sale12,
    disc: "-15%",
    title: "Light Taupe 2PC Embroidered Lawn Dress",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.3,390.00",
  }, {
    img: sale13,
    disc: "-15%",
    title: "Pearl Frost Stitched 2pc Embroidered Suit",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.3,399.00",
  }, {
    img: sale14,
    disc: "-26%",
    title: "Cedar Stitched 2pc Embroidered Suit",
    oldprice: "Rs.4,999.00",
    newprice: "Rs.3,699.00",
  }, {
    img: sale15,
    disc: "-40%",
    title: "Beige Cotton Basic Straight Pants",
    oldprice: "Rs.1,499.00",
    newprice: "Rs.899.00",
  }, {
    img: sale16,
    disc: "-20%",
    title: "Raspberry Stitched 2pc Embroidered Suit",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.3,199.00",
  }, {
    img: sale17,
    disc: "-15%",
    title: "Sage Green 2PC Embroidered Lawn Dress",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.3,399.00",
  }, {
    img: sale18,
    disc: "-20%",
    title: "Moon Light Stitched 2pc Embroidered Suit",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.3,199.00",
  }, {
    img: sale19,
    disc: "-35%",
    title: "White Pleated Cambric Cullote Trousers",
    oldprice: "Rs.1,999.00",
    newprice: "Rs.1,299.00",
  }, {
    img: sale20,
    disc: "-20%",
    title: "Amber Gold 2PC Embroidered Lawn Dress",
    oldprice: "Rs.3,999.00",
    newprice: "Rs.3,199.00",
  },
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
