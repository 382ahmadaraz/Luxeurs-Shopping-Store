import React from 'react'
import Image from 'next/image'
import home from "../../assets/icons/home.png"
import shop from "../../assets/icons/shop.png"
import search from "../../assets/icons/search.png"
import account from "../../assets/icons/contact.png"
import wishlist from "../../assets/icons/heart.png"
import SearchBar from '@/app/components/searchBar/SearchBar'
import Link from 'next/link'

export default function BootomBar() {
  const bar = [
    {id : 1 , img:home , title:"Home", href:"/"},
    {id : 2 , img:shop , title:"Shop", href:"/collections/new-arrivals"},
    {id : 3 , comp:<SearchBar/> , title:"Search",  },
    {id : 4 , img:shop , title:"Shop", href:"/collections/new-arrivals"},
    {id : 5 , img:wishlist , title:"WishList", href:"/collections/new-arrivals"},


  
  ]
  return (



    <div className='sticky bottom-0 lg:hidden z-40 shadow-[0px_-4px_6px_-2px_rgba(0,0,0,0.1)] bg-white w-full h-[50px]'>
       <div className='lg:hidden flex justify-evenly text-sm p-1 items-center [&>*]:cursor-pointer'>
          <Link href={"/"}>
          <div className='flex flex-col items-center'>
            <Image src={ home} alt='icons' className='h-[26px] w-[26px]'></Image>
            <p >Home</p>
          </div>
          </Link>
          <Link href={"/collections/new-arrivals"}>
          <div className='flex flex-col items-center'>
            <Image src={ shop} alt='icons'></Image>
            <p>Shop</p>
          </div>
          </Link>
          <div className='flex flex-col items-center'>
            <SearchBar/>
            <p>Search</p>
          </div>
          <Link href={"/account/login"}>
          <div className='flex flex-col items-center'>
            <Image src={ account} alt='icons'></Image>
            <p>Account</p>
          </div>
          </Link>
          <Link href={"/pages/wishlist"}>
          <div className='flex flex-col items-center'>
            <Image src={ wishlist} alt='icons'></Image>
            <p>WishList</p>
          </div>
          </Link>
           
       </div>
    </div>
  )
}
