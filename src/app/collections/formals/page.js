import Navbar from '@/app/common/navbar/Navbar'
import Title from '@/app/components/title/Title'
import Footer from '@/app/common/footer/Footer'
import FormalComp from '@/app/components/formalComp/FormalComp'
import FormalDetails from '@/app/components/farmalDetails/FormalDetails'

export default function page( ) {
  return (
    <div>
        {/* <Navbar/> */}
        <Title title="Bottoms" name="Bottoms" instock="8" outstock="5" component={<FormalComp/>} details={<FormalDetails/>} />
        {/* <Footer/> */}
    </div>
  )
}
