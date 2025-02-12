import Navbar from '@/app/common/navbar/Navbar'
import Title from '@/app/components/title/Title'
import Footer from '@/app/common/footer/Footer'
import SaleComp from '@/app/components/saleComp/SaleComp'
import SaleDeatils from '@/app/components/saleDeatils/SaleDeatils'
import ProductComp from '@/app/components/productComp/ProductComp'

export default function page( ) {
  return (
    <div>
        {/* <Navbar/> */}
        <Title title="Products" name="" instock="108" outstock="130" component={<ProductComp/>} details={<SaleDeatils/>}/>
        {/* <Footer/> */}
    </div>
  )
}
