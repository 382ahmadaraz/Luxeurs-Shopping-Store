import Navbar from "../../common/navbar/Navbar";
import HomeSecNav from "../../components/homeSecNav/HomeSecNav";
import HomeHeader from '../../components/homeCards/HomeCards'

export default function page() {
  return (
    <div>
      {/* <Navbar/> */}
        <HomeSecNav/>
        <HomeHeader/>
        <div className='flex items-center justify-center my-4'>
            <button className='py-3 px-11 bg-black text-white'>Load More</button>
        </div>
    </div>
  )
}
