import Navbar from '@/app/common/navbar/Navbar'
import Title from '@/app/components/title/Title'
import HomeCards from '@/app/components/homeCards/HomeCards'
import Footer from '@/app/common/footer/Footer'
import NewArrivalDetails from '@/app/components/newArrivalDetails/NewArrivalDetails'
import ProductComp from '@/app/components/productComp/ProductComp'


export default function page() {
    return (
        <div>
            {/* <Navbar /> */}
            <Title title="New Arrivals" name="New Arrivals" instock="60" outstock="33" component={<ProductComp />} details={<NewArrivalDetails/>} />
            {/* <Footer />s */}
        </div>
    )
}
