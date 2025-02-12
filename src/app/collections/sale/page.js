import Navbar from '@/app/common/navbar/Navbar'
import Title from '@/app/components/title/Title'
import Footer from '@/app/common/footer/Footer'
import SaleComp from '@/app/components/saleComp/SaleComp'
import SaleDeatils from '@/app/components/saleDeatils/SaleDeatils'

export default function page( ) {
  return (
    <div>
        {/* <Navbar/> */}
        <Title title="SALE" name="Sale" instock="42" outstock="49" component={<SaleComp/>} details={<SaleDeatils/>}/>
        {/* <Footer/> */}
    </div>
  )
}
