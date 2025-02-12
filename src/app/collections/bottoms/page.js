import Navbar from '@/app/common/navbar/Navbar'
import Title from '@/app/components/title/Title'
import Footer from '@/app/common/footer/Footer'
import Bottoms from '@/app/components/bottoms/Bottoms'
import BottomDetails from '@/app/components/bottomDetails/BottomDetails'

export default function page( ) {
  return (
    <div>
        {/* <Navbar/> */}
        <Title title="Bottoms" name="Bottoms" instock="8" outstock="5" component={<Bottoms/>} details={<BottomDetails/>} />
        {/* <Footer/> */}
    </div>
  )
}
