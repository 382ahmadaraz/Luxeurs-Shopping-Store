import React from 'react'
// import Navbar from '../../common/navbar/Navbar'
import HomeSecNav from '../../components/homeSecNav/HomeSecNav'
import Bottoms from '../../components/bottoms/Bottoms'
// import Loading from "../../loading"

export default function page() {
  return (
    <div>
        {/* <Navbar/> */}
        <HomeSecNav/>
        <Bottoms/>
        <div className='flex items-center justify-center my-4'>
            <button className='py-3 px-11 bg-black text-white'>Load More</button>
        </div>
        {/* <Loading/> */}
    </div>
  )
}
