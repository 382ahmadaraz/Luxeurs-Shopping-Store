import Image from "next/image";
// import Header from "../app/pages/home/page"
import Navbar from "./common/navbar/Navbar";
import HomeSecNav from "./components/homeSecNav/HomeSecNav";
import HomeCards from "./components/homeCards/HomeCards";
import Footer from "./common/footer/Footer";
import TextSlider from "./components/textSlider/textSlider";
// import Slider from "./components/slider/Slider";

export default function Home() {
  return (
    <div >
     
      {/* <Navbar/> */}
        <TextSlider/>
       <HomeSecNav/>
       <HomeCards/>
       <div className='flex items-center justify-center my-8'>
            <button className='py-3 px-11 bg-black text-white'>Load More</button>
        </div>
        {/* <Footer/> */}
    </div>
  );
}
