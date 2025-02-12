import Navbar from '@/app/common/navbar/Navbar'
import Title from '@/app/components/title/Title'
import HomeCards from '@/app/components/homeCards/HomeCards'
import ShopAllDetails from '@/app/components/shopAllDetails/ShopAllDetails'
import Footer from '@/app/common/footer/Footer'

export default function page( ) {
  return (
    <div>
        {/* <Navbar/> */}
        <Title title="Ready to Wear" name="Ready to Wear" instock="93" outstock="112" component={<HomeCards/>} details={<ShopAllDetails/>} />
        {/* <Footer/> */}
    </div>
  )
}
