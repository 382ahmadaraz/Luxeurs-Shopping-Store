"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { cards } from "@/app/components/productComp/productData/ProductData";
import heart from "../../assets/icons/heart.png"
import tick from "../../assets/icons/circle-check.png"
import star from "../../assets/icons/star.png"
import Link from "next/link";
import { useState } from "react";
import size from "../../assets/images/size.webp"
import scale from "../../assets/icons/scale.png"
import { ToastContainer, toast } from 'react-toastify';


export default function ProductDetail () {
  
  
  const { slug } = useParams();  //  URL se slug extract karna
  const [showModal, setShowModal] = useState(false);
  const notify = () => toast("Product Successfully Added");

  // Find the product by slug
  const product = cards.find((p) => p.slug === slug);

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

  return (
    <div className="2xl:w-[100rem]  2xl:m-auto">
      <div className='p-3 md:h-[80px] flex items-center md:px-7 text-[10px] xs:text-[12px] md:text-lg'><span className='text-gray-400 '><Link href={"/"} className=" hover:text-lightBlue ">Home</Link>  &gt; <Link href={"/collections/ready-to-wear"} className=" hover:text-lightBlue "> Ready To Wear</Link> &gt;</span> {product.title}</div>

      <div className='flex md:justify-evenly flex-wrap'>

        {/* images part  */}
        <div className="  lg:w-[54%] flex flex-col-reverse md:flex-row justify-center ">
          <div className='flex md:block flex-wrap justify-center [&>*]:p-2 [&>*]:w-[24%] md:[&>*]:w-full md:[&>*]:p-3 md:w-[20%] lg:w-[30%] xl:w-[23%] 2xl:w-[18%] '>
            <div className='border xl:w-full '>
              <Image src={product.img} alt='image' className=' w-full h-full'></Image>
            </div>
            <div className='xl:w-full'>
              <Image src={product.img2} alt='image' className=' w-full h-full'></Image>
            </div>

            <div className='xl:w-full'>
              <Image src={product.img3} alt='image' className=' w-full h-full'></Image>
            </div>

            <div className='xl:w-full'>
              <Image src={product.img4} alt='image' className=' w-full h-full'></Image>
            </div>

          </div>

          {/* big image  */}
          <div className='px-4 py-2 xl:py-0 xl:ml-2 lg:px-0 xl:w-[84%]  flex justify-center'>
            <Image src={product.img} alt='image' className=' '></Image>
          </div>
        </div>

        {/*Product name price  */}
        <div className='w-[93%] md:w-[92%] m-auto md:m-0 lg:w-[40%] xl:h-[100vh]   py-8'>
          <p className='text-3xl font-light'>{product.title}</p>
          <div className="flex gap-2">
            <p className='text-2xl font-light my-2 line-through'>{product.oldprice}</p>
            <p className='text-2xl font-light my-2 text-orange'>{product.newprice}</p>
          </div>
          <div className='flex items-center gap-2 my-5'>
            <Image src={tick} alt='image' className='w-[20px] '></Image>
            <p>Instock</p>
          </div>
          <div className='flex items-center justify-between my-3'>
            <p >size: s</p>


            {/* size chart  */}

            <div onClick={() => setShowModal(true)} className="flex items-center gap-2">
              <p className='font-bold text-sm md:text-lg cursor-pointer' >Size Chart</p>
              <Image src={scale} alt="scale"></Image>
            </div>
            {showModal && (
              <div className="flex justify-evenly absolute top-0 z-50 left-0  w-full overflow-y-auto  bg-black bg-opacity-45 p-11">

                <Image src={size} alt="sizes" className="h-fit w-[80%] m-auto"></Image>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-right mt-3 w-fit h-fit px-4 py-2 bg-lightBlue text-sm md:text-lg text-white rounded-md">
                  close
                </button>
              </div>
            )}

          </div>
          <div className='flex gap-3 [&>*]:cursor-pointer'>
            <p className='text-center bg-black text-white p-2 h-[40px] w-[40px]'>S</p>
            <p className='text-center text-gray-400 border p-2 h-[40px] w-[40px]'>M</p>
            <p className='text-center text-gray-400 border p-2 h-[40px] w-[40px]'>L</p>
            <p className='text-center text-gray-400 border p-2 h-[40px] w-[40px]'>XL</p>
          </div>

          <div className='flex gap-3 mt-16'>
            <button onClick={notify} className='w-[90%] bg-black text-white p-3   hover:bg-lightBlue duration-700 hover:border hover:border-black'>ADD TO CART</button>
            <ToastContainer />

            <Image src={heart} alt="heart" className='p-3 border h-full w-fit cursor-pointer hover:bg-lightBlue hover:border-none'></Image>
          </div>
          <div className='border border-black p-3 text-center mt-3 hover:text-white hover:bg-lightBlue hover:border-none duration-700'>
            <button >BUY IT NOW</button>
          </div>
        </div>


      </div>
      <hr className='my-3' />

      {/* descryption  */}
      <div className='lg:flex justify-evenly px-5 gap-3'>
        <div className='[&>*]:cursor-pointer'>
          <p className='text-2xl w-fit h-fit border-b border-lightBlue ' >Product Description</p>

        </div>
        <p className='text-gray-400 w-[90%] m-auto text-sm md:text-base lg:w-[70%] pt-4 [&>*]:leading-7'>
          {product.title}:.<br /><br />
          <li className=''>
            The self-printed shirt is adorned with delicate embroidery on the neckline and lace on sleeves.
          </li>
          <li>
            The rich maroon hue adds depth and grace, while the minimal gold motifs are scattered across the shirt and sleeves.
          </li>
          <li>
            The printed contrasting dupatta with bold patterns and subtle hues along with four sides lace border complements the outfit beautifully, adding a vibrant dimension to the overall look.
          </li>
          <li>
            The dress is paired with matching straight pants.
          </li>
          <li>
            Shirt length is 44-45 inches.(check size chart below)
          </li>
          <li>
            Dress color: Rich Maroon.
          </li>
          <li>
            Fabric: Doria Lawn.
          </li>
          <li>
            Model Height: 5'6".
          </li>
          <li>
            Model Wearing : Small size.
          </li><br /><br />
        </p>
      </div>

      {/* delivery details */}
      <div className='lg:flex justify-evenly px-5  gap-3'>
        <div className='[&>*]:cursor-pointer'>
          <p className='text-2xl w-fit h-fit  border-b border-lightBlue my-5' >Delivery & Return</p>

        </div>
        <p className='text-gray-400 w-[90%] m-auto text-sm md:text-base lg:w-[70%] pt-4 [&>*]:leading-7'>
          Delivery:<br />
          <li className=''>
            Free delivery orders over the value of Rs. 2,200
          </li>
          <li>
            We charge Rs.199 on all orders under the value of Rs. 2,200
          </li>
          <li>
            Karachi: 1-3 days & Other cities of Pakistan: 2-6 days.

          </li>
          <li>
            Read our complete Delivery Policy

          </li><br />
          Return Policy:
          <li>
            Not happy with your purchase? You can return it for full refund within 3 days or exchange with any other item within 7 days.

          </li>
          <li>
            Read our complete Exchange & Refund Policy

          </li>
          <br /><br />
        </p>
      </div>


      <hr className='my-3' />
      {/* reviews  */}
      <div className='h-[10rem] mt-11'>
        <p className='text-2xl text-center my-7'>Customer Reviews </p>
        <div className='flex flex-col sm:flex-row justify-center items-center'>
          <div className=' gap-1 sm:border-r-2 p-3 md:p-5'>
            <div className='flex justify-center [&>*]:cursor-pointer [&>*]:w-[25px]'>
              <Image src={star} alt='image'></Image>
              <Image src={star} alt='image'></Image>
              <Image src={star} alt='image'></Image>
              <Image src={star} alt='image'></Image>
              <Image src={star} alt='image'></Image>
            </div>
            <p className="text-sm md:text-base">Be the first to write a review</p>
          </div>
          {/* <hr className='' /> */}
          <button className='p-2 px-4 md:px-11 ml-3 md:ml-5 h-fit bg-teal-600 hover:bg-teal-500 text-sm md:text-base text-white'>Write a review</button>
        </div>
      </div>

      {/* shop more  */}
      <div className='flex justify-center my-9 w-full text-sm '>
        <Link href={"/collections/sale"}>
          <button className='p-3 w-fit px-20 text-white bg-lightBlue hover:text-white hover:bg-black'>SHOP MORE</button>
        </Link>
      </div>
    </div>
  )
}

