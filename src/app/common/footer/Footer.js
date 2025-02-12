import Image from "next/image"
import arrow from "../../assets/icons/arrow.png"
import fb from "../../assets/icons/fb.png"
import printerest from "../../assets/icons/printerest.png"
import snapshot from "../../assets/icons/snapshot.png"
import yt from "../../assets/icons/yt.png"
import insta from "../../assets/icons/insta.png"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="h-[90vh] bg-zinc-900">
    <div className='flex justify-evenly py-12  w-full text-[15px] bg-zinc-900 [&>*]:h-fit text-lightDark' >
        <div className='w-[24%]'>
            <p className=' text-white tracking-widest'> ABOUT LUXEURS</p>
            <p >Luxeurs is a premium fashion brand providing its consumers all over Pakistan with aesthetic and elegant ready-to-wear clothing solutions for Women, Men & kids. We are known for our fabric quality, different varieties of designs and styling with new traditions and affordability at the same time.
            </p>
            <p className=' text-white mt-11 tracking-widest'>Join the Luxeurs Family </p>
            <p className='my-2 mb-11'>Get Newest Updates on Email</p>
            <div className=' flex  gap-3 p-1 w-fit rounded border-black border'>
                <input type='email' placeholder='Your Email' className="p-2 bg-zinc-900 outline-none"/>
                <Image src={arrow} alt="arrow" className=" w-fit rounded-full p-2 bg-lightBlue hover:bg-white cursor-pointer  "/>
            </div>
        </div>
        <div className='w-[35%]'>
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
        <div className='w-[32%]'>
        <p className="text-white tracking-widest">INFORMATION</p>
         <ul className="[&>*]:cursor-pointer">
         <Link href={"/account/login"}><li className="hover:text-lightBlue my-3">Track Your Order</li></Link>
            <Link href={"/pages/delivery-policy"}><li className="hover:text-lightBlue my-3">Delivery Policy</li></Link>
            <Link href={"/pages/faqs"}><li className="hover:text-lightBlue my-3">FAQs</li></Link>
            <Link href={"/pages/terms-conditions"}><li className="hover:text-lightBlue my-3">Terms & Conditions</li></Link>
            <Link href={"/pages/exchange-refund-policy"}><li className="hover:text-lightBlue my-3">Exchange & Refund Policy</li></Link>
            <Link href={"/pages/privacy-policy"}><li className="hover:text-lightBlue my-3">Privacy Policy</li></Link>
            <Link href={"/pages/contact-us"}><li className="hover:text-lightBlue my-3">Contact Us</li></Link>
            <Link href={"/pages/ceo-message"}><li className="hover:text-lightBlue my-3">THE CEO's MESSAGE</li></Link>
         </ul>
        </div>
    </div>

    <hr/>
    <div className="flex items-center justify-center text-white h-[70px]">
        © Luxeurs 2024. All Right Reserved.
    </div>
    </div>
  )
}
