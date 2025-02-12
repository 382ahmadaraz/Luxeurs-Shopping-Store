import Navbar from '@/app/common/navbar/Navbar'
import Title from '@/app/components/title/Title'
import Footer from '@/app/common/footer/Footer'
import DupattaComp from '@/app/components/dupattaComp/DupattaComp'

export default function page( ) {
  return (
    <div>
        {/* <Navbar/> */}
        <Title title="Dupattas" name="Dupattas" instock="3" outstock="2" component={<DupattaComp/>}  />
        {/* <Footer/> */}
    </div>
  )
}
