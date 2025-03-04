"use client"
import Image from "next/image"
import arrow from "../../assets/icons/arrow.png"
import fb from "../../assets/icons/fb.png"
import printerest from "../../assets/icons/printerest.png"
import snapshot from "../../assets/icons/snapshot.png"
import yt from "../../assets/icons/yt.png"
import insta from "../../assets/icons/insta.png"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer() {

    const pathanme = usePathname();

const links = [
    { id :1 , name:"Track Your Order", src:"/account/login"},
    { id :2 , name:"Delivery Policy", src:"/pages/delivery-policy"},
    { id :3 , name:"FAQs", src:"/pages/faqs"},
    { id :4 , name:"Terms & Conditions", src:"/pages/terms-conditions"},
    { id :5 , name:"Exchange & Refund Policy ", src:"/pages/exchange-refund-policy"},
    { id :6 , name:"Privacy Policy ", src:"/pages/privacy-policy"},
    { id :7 , name:"Contact Us ", src:"/pages/contact-us"},
    { id :8 , name:" THE CEO's MESSAGE", src:"/pages/ceo-message"},
]

  return (
    <div className=" bg-zinc-900">
    <div className='flex flex-wrap gap-3  justify-start lg:justify-eveny md:py-12 p-3  w-full text-[15px] bg-zinc-900 [&>*]:h-fit text-lightDark' >
        <div className='md:w-[40%] mt-4 md:ml-11 lg:w-[24%]'>
            <p className=' text-white tracking-widest'> ABOUT LUXEURS</p>
            <p >Luxeurs is a premium fashion brand providing its consumers all over Pakistan with aesthetic and elegant ready-to-wear clothing solutions for Women, Men & kids. We are known for our fabric quality, different varieties of designs and styling with new traditions and affordability at the same time.
            </p>
            
        </div>

        <div className='md:w-[40%] mt-4 md:ml-11 lg:w-[32%]'>
            <p className="text-white tracking-widest">CONTACT US</p>
            <ul className="[&>*]:my-3">
                <li>Address : 1-A/10, Sector 21, Korangi Industrial Area (near Murtaza Chowrangi), Karachi, Pakistan.</li>
                <li>Tariq Road Outlet : Shop# F-182, First Floor, Dolmen Mall, Tariq Road, Karachi.</li>
                <li>WhatsApp Chat : +92 3020408062</li>
                <li>Email : luxeurs@gmail.com</li>
                <li className="flex gap-5 [&>*]:h-[30px] [&>*]:w-[30px] [&>*]:cursor-pointer">
                    <Link href="https://www.facebook.com/" target="blank"><Image src={fb} alt="fb" className="hover:bg-lightBlue p-1 rounded-full"></Image> </Link>
                    <Link href="https://www.pinterest.com/" target="blank"><Image src={printerest} alt="fb" className="hover:bg-lightBlue p-1 rounded-full"></Image> </Link>
                    <Link href="https://www.snapchat.com/" target="blank"><Image src={snapshot} alt="fb" className="hover:bg-lightBlue rounded-full"></Image> </Link>
                    <Link href="https://www.youtube.com/" target="blank"><Image src={yt} alt="fb" className="hover:bg-lightBlue p-1 rounded-full"></Image> </Link>
                    <Link href="https://www.instagram.com/" target="blank"><Image src={insta} alt="fb" className="hover:bg-lightBlue p-1 h-[30px] w-[30px] rounded-full"></Image> </Link>
                </li>
            </ul>
        </div>
        <div className='md:w-[40%] mt-4 md:ml-11 lg:w-[26%]'>
        <p className="text-white tracking-widest">INFORMATION</p>

        {links.map((link , id)=>{
            return(
                <div key={id}>
                    <Link href={link.src} className={ pathanme === link.src ? "text-lightBlue":"bg-white"}>
                        <ul>
                            <li className="hover:text-lightBlue my-3">{link.name}</li>
                        </ul>
                    </Link>
                </div>
            )
        })}
         {/* <ul className="[&>*]:cursor-pointer">
         <Link href={"/account/login"}><li className="hover:text-lightBlue my-3">Track Your Order</li></Link>
            <Link href={"/pages/delivery-policy"}><li className="hover:text-lightBlue my-3">Delivery Policy</li></Link>
            <Link href={"/pages/faqs"}><li className="hover:text-lightBlue my-3">FAQs</li></Link>
            <Link href={"/pages/terms-conditions"}><li className="hover:text-lightBlue my-3">Terms & Conditions</li></Link>
            <Link href={"/pages/exchange-refund-policy"}><li className="hover:text-lightBlue my-3">Exchange & Refund Policy</li></Link>
            <Link href={"/pages/privacy-policy"}><li className="hover:text-lightBlue my-3">Privacy Policy</li></Link>
            <Link href={"/pages/contact-us"}><li className="hover:text-lightBlue my-3">Contact Us</li></Link>
            <Link href={"/pages/ceo-message"}><li className="hover:text-lightBlue my-3">THE CEO's MESSAGE</li></Link>
         </ul> */}
        </div>

        <div className="md:w-[40%] md:ml-11 mt-3 lg:w-fit">
        <p className=' text-white tracking-widest'>Join the Luxeurs Family </p>
            <p className='my-2 mb-11'>Get Newest Updates on Email</p>
            <div className=' flex  gap-3 p-1 w-full rounded border-blac border'>
                <input type='email' placeholder='Your Email' className="p-2 bg-zinc-900 outline-none w-[80%]"/>
                <Image src={arrow} alt="arrow" className=" w-[35px] h-[35px] rounded-full p-2 bg-lightBlue hover:bg-white cursor-pointer  "/>
            </div>
        </div>
    </div>

    <hr/>
    <div className="flex items-center justify-center text-white h-[70px]">
        © Luxeurs 2024. All Right Reserved.
    </div>
    </div>
  )
}
