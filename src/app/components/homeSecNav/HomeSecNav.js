import Image from "next/image"
import BgHeader from "../../assets/images/header-bg.png"
import Link from "next/link"

export default function HomeSecNav() {
  return (
    <div className=''>
      <Image src={BgHeader} alt="BgHeader" />

      <div className="my-8">
        <p className='text-3xl text-center  tracking-[10px] mb-5'>SHOP BY CETAGORIES</p>

        {/* NavBAr  */}
        <ul className='flex justify-center gap-7 [&>*]:cursor-pointer text-zinc-500 '>
        <Link href={"/" } scroll={false}><li className='tracking-widest text-[15px] hover:text-black '>NEW ARRIVALS</li></Link>
          <Link href={"/readyToWear"} scroll={false}> <li className='tracking-widest text-[15px] hover:text-black '>READY TO WEAR</li></Link>
          <Link href={"/sale"} scroll={false}><li className='tracking-widest text-[15px] hover:text-black '>SALE</li></Link>
          <Link href={"/bottoms"} scroll={false}><li className='tracking-widest text-[15px] hover:text-black '>BOTTOMS</li></Link>
        </ul>
      </div>



    </div>
  )
}
