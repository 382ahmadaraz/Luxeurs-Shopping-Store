"use client";
import Image from "next/image";
import { useParams } from "next/navigation";  
import { sales } from "@/app/components/saleComp/saleProduct/SaleProduct";
import heart from "../../../../assets/icons/heart.png"
import tick from "../../../../assets/icons/circle-check.png"
import star from "../../../../assets/icons/star.png"
import Link from "next/link";
import { useState } from "react";
import size from "../../../../assets/images/size.webp"


 

const ProductDetail = () => {
  const { slug } = useParams();  //  URL se slug extract karna
  const [showModal, setShowModal] = useState(false);

  // Find the product by slug
  const product = sales.find((p) => p.slug === slug);

  if (!product) {
    return <p className="text-center text-red-500">Product not found!</p>;
  }

 return (
     <div>
       <div className='h-[50px] flex items-center px-7 '><span className='text-gray-400 text-sm'>Home  &gt;  Ready To Wear &gt;</span> {product.title}</div>
 
       <div className='flex justify-center'>
         <div className='  w-[10%] h-[100vh]'>
           <div className='border h-[180px] w-full p-3'>
             <Image src={product.img} alt='image' className=' w-full h-full'></Image>
           </div>
           <div className='h-[180px] w-full p-3'>
             <Image src={product.img2} alt='image' className=' w-full h-full'></Image>
           </div>
 
           <div className='h-[180px] w-full p-3'>
             <Image src={product.img3} alt='image' className=' w-full h-full'></Image>
           </div>
 
           <div className='h-[180px] w-full p-3'>
             <Image src={product.img4} alt='image' className=' w-full h-full'></Image>
           </div>
 
         </div>
         <div className='  w-[42%] h-[130vh] ml-4 flex justify-center'>
           <Image src={product.img} alt='image' className=' '></Image>
         </div>
         <div className='w-[40%] h-[100vh] ml-11 py-8'>
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
             
               <p className='font-bold cursor-pointer' onClick={()=> setShowModal(true)}>Size Chart</p>
             
                          {showModal && (
                     <div className="flex justify-evenly absolute top-0 z-20 left-0 w-full overflow-y-auto  bg-black bg-opacity-45 p-11">
                          
                       <Image src={size} alt="sizes" className="h-fit w-[80%] m-auto"></Image>
                         <button 
                           onClick={() => setShowModal(false)} 
                           className="text-right mt-3 w-fit h-fit px-4 py-2 bg-lightBlue text-white rounded-md">
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
             <button className='w-[90%] bg-black text-white p-3 hover:text-black hover:bg-white duration-700 hover:border hover:border-black'>ADD TO CART</button>
             <Image src={heart} alt="heart" className='p-3 border h-full w-fit cursor-pointer hover:bg-lightBlue hover:border-none'></Image>
           </div>
           <div className='border border-black p-3 text-center mt-3 hover:text-white hover:bg-lightBlue hover:border-none duration-700'>
             <button>BUY IT NOW</button>
           </div>
         </div>
 
 
       </div>
       <hr className='my-3' />
 
       <div className='flex justify-evenly px-5 gap-3'>
         <div className='[&>*]:cursor-pointer'>
           <p className='text-2xl w-fit h-fit border-b border-lightBlue ' >Product Description</p>
 
         </div>
         <p className='text-gray-400 w-[70%] pt-4 [&>*]:leading-7'>
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
 
 
       <div className='flex justify-evenly px-5  gap-3'>
         <div className='[&>*]:cursor-pointer'>
           <p className='text-2xl w-fit h-fit  border-b border-lightBlue my-5' >Delivery & Return</p>
 
         </div>
         <p className='text-gray-400 w-[70%] pt-4 [&>*]:leading-7'>
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
 
       <div className='h-[30vh] mt-11'>
         <p className='text-xl text-center'>Customer Reviews </p>
         <div className='flex justify-center items-center'>
           <div className='gap-1 border-r-2 p-5'>
             <div className='flex [&>*]:cursor-pointer [&>*]:w-[25px]'>
               <Image src={star} alt='image'></Image>
               <Image src={star} alt='image'></Image>
               <Image src={star} alt='image'></Image>
               <Image src={star} alt='image'></Image>
               <Image src={star} alt='image'></Image>
             </div>
             <p>Be the first to write a review</p>
           </div>
           <hr className='' />
           <button className='p-2 px-11 ml-5 h-fit bg-teal-600 hover:bg-teal-500  text-white'>Write a review</button>
         </div>
       </div>
 
       <div className='flex justify-center my-9 w-full'>
          <Link href={"/collections/sale"}>
              <button className='p-3 w-fit px-20 text-white bg-lightBlue hover:text-white hover:bg-black'>SHOP MORE</button>
          </Link>
       </div>
     </div>
   )
 }

export default ProductDetail;
