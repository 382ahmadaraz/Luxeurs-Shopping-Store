import Navbar from '@/app/common/navbar/Navbar'
import Title from '@/app/components/title/Title'
import Footer from '@/app/common/footer/Footer'
import FormalDetails from '@/app/components/farmalDetails/FormalDetails'
import MensWearComp from '@/app/components/mansWearComp/MensWearComp'

export default function page( ) {
  return (
    <div>
        {/* <Navbar/> */}
        <Title title="Mens Wear" name="Mens Wear" instock="5" outstock="16" component={<MensWearComp/>} details={<FormalDetails/>} />
        {/* <Footer/> */}
    </div>
  )
}
