import Navbar from "../../common/navbar/Navbar";
import HomeSecNav from "../../components/homeSecNav/HomeSecNav";
import HomeHeader from '../../components/homeCards/HomeCards'

export default function page() {
  return (
    <div>
      {/* <Navbar/> */}
        <HomeSecNav/>
        <HomeHeader/>
         
    </div>
  )
}
