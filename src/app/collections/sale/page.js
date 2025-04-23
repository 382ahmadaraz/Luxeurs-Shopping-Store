import Title from '@/app/components/title/Title'
import SaleComp from '@/app/components/saleComp/SaleComp'
import SaleDeatils from '@/app/components/saleDeatils/SaleDeatils'

export default function page( ) {
  return (
    <div>
        <Title title="SALE" name="Sale" instock="42" outstock="49" component={<SaleComp/>} details={<SaleDeatils/>}/>
    </div>
  )
}
