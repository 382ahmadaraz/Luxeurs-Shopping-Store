import PagesComp from '@/app/components/pagesComp/PagesComp'
import ceo from "../../assets/images/ahmad.jpg"
import Image from 'next/image'

export default function page() {
  return (
    <div>
        <PagesComp title="Privacy Policy" name="Privacy Policy" />

        <p className='[&>*]:font-bold [&>*]:text-gray-500 text-gray-400 w-[90%] m-auto'>
       Dear valued customers,<br/><br/>

Welcome to Luxeurs, where style meets elegance and empowerment. As the CEO of this exceptional ladies apparel brand, I am thrilled to extend my sincere appreciation for continued trust & support in Luxeurs.
<br/><br/>
At Luxeurs, we are driven by the belief that every woman deserves to feel confident and beautiful in her own skin. Our Ready-to-Wear collections are meticulously crafted, combining exquisite designs with the finest fabrics, to ensure you exude grace and poise on every occasion.
<br/><br/>
As we embark on this fashionable journey together, we promise to constantly innovate, offering you the latest trends and timeless classics that resonate with your individuality. Our team is dedicated to providing you with an unparalleled shopping experience, embracing diversity and inclusivity in all aspects of our brand.
<br/><br/>
Thank you for choosing Luxeurs. Your unwavering support inspires us to continuously strive for excellence, and we look forward to dressing you in elegance.
<br/><br/>
With warm regards,
<br/><br/>
Ahmad Raza, FCA<br/><br/>
Founder & CEO
<br/><br/><br/><br/>
        </p>
        <div className='flex justify-center mb-16'>
    <Image src={ceo} alt='ahmad-ceo' className='h-[500px] w-[300px]'></Image>
        </div>
    </div>
  )
}
